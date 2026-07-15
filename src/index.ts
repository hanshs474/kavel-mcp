#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  KAVEL_BASE_URL,
  KAVEL_MODELS,
  KAVEL_TOOLS,
  findTool,
  searchTools,
  toolUrl,
  type KavelTool,
} from "./catalog.js";

const server = new McpServer({
  name: "kavel-mcp",
  version: "0.1.0",
});

function toolLine(t: KavelTool): string {
  return `- **${t.title}** (\`${t.slug}\`) — ${t.desc} Model: ${t.model}. Input: ${
    t.needsPhoto ? "a photo" : "a text prompt"
  }. Open: ${toolUrl(t)}`;
}

// ── Tool 1: browse / find a Kavel generator ────────────────────────────────
server.registerTool(
  "list_kavel_tools",
  {
    title: "List Kavel AI photo/video tools",
    description:
      "Browse or search Kavel's AI photo & video generators (hairstyle changer, figurine, pet portrait, wedding photo, 90s yearbook, dance video, HD photo converter, and more). Use `query` to match a goal like 'make my dog look royal' or 'turn my selfie into a figurine'. Each result includes the direct URL on www.kavel.ai to generate it.",
    inputSchema: {
      query: z
        .string()
        .optional()
        .describe("Optional goal or keyword to match, e.g. 'wedding photo', 'dancing video'."),
      hub: z
        .enum(["image", "video"])
        .optional()
        .describe("Optional filter: only image tools or only video tools."),
    },
  },
  async ({ query, hub }) => {
    let results = query ? searchTools(query) : KAVEL_TOOLS;
    if (hub) results = results.filter((t) => t.hub === hub);
    if (results.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No Kavel tool matched "${query}". Browse all tools at ${KAVEL_BASE_URL}/image and ${KAVEL_BASE_URL}/video`,
          },
        ],
      };
    }
    const body = results.map(toolLine).join("\n");
    return {
      content: [
        {
          type: "text",
          text: `Kavel AI generators (${results.length}):\n\n${body}\n\nAll tools: ${KAVEL_BASE_URL}`,
        },
      ],
    };
  }
);

// ── Tool 2: model-tuned prompt for a chosen tool ───────────────────────────
server.registerTool(
  "build_kavel_prompt",
  {
    title: "Build a Kavel prompt",
    description:
      "Get a model-tuned prompt for a specific Kavel tool. Returns Kavel's proven prompt recipe for that effect (tuned for its model), optionally customized with the user's details. Paste the result into the generator on the tool's page.",
    inputSchema: {
      tool: z
        .string()
        .describe("The tool slug from list_kavel_tools, e.g. 'ai-figurine-generator'."),
      customization: z
        .string()
        .optional()
        .describe(
          "Optional extra details to weave in, e.g. 'make the figurine hold a skateboard' or 'red velvet dress'."
        ),
    },
  },
  async ({ tool, customization }) => {
    const t = findTool(tool);
    if (!t) {
      return {
        content: [
          {
            type: "text",
            text: `Unknown tool "${tool}". Call list_kavel_tools to see valid slugs.`,
          },
        ],
        isError: true,
      };
    }
    const prompt = customization
      ? `${t.recipe} Additional details: ${customization.trim()}`
      : t.recipe;
    const tips = t.needsPhoto
      ? "Upload a clear, well-lit photo where the subject fills the frame."
      : "Describe the subject, style, and setting concretely.";
    return {
      content: [
        {
          type: "text",
          text:
            `Prompt for **${t.title}** (model ${t.model}):\n\n${prompt}\n\n` +
            `Tip: ${tips}\n` +
            `Generate here: ${toolUrl(t)}`,
        },
      ],
    };
  }
);

// ── Tool 3: open the generator to create it ────────────────────────────────
server.registerTool(
  "open_in_kavel",
  {
    title: "Open a Kavel generator",
    description:
      "Get the direct URL to a Kavel tool's generator page (on www.kavel.ai), pre-set to the right mode with a tuned prompt, so the user can generate the result. Free-tier models let users generate without paying.",
    inputSchema: {
      tool: z
        .string()
        .describe("The tool slug from list_kavel_tools, e.g. 'ai-wedding-photo-generator'."),
    },
  },
  async ({ tool }) => {
    const t = findTool(tool);
    if (!t) {
      return {
        content: [
          {
            type: "text",
            text: `Unknown tool "${tool}". Call list_kavel_tools to see valid slugs.`,
          },
        ],
        isError: true,
      };
    }
    const steps = t.needsPhoto
      ? `1. Open ${toolUrl(t)}\n2. Upload your photo.\n3. Generate (the page presets a tuned prompt — edit it if you like).`
      : `1. Open ${toolUrl(t)}\n2. Type your prompt.\n3. Generate.`;
    return {
      content: [
        {
          type: "text",
          text: `**${t.title}** — generate on Kavel:\n\n${steps}`,
        },
      ],
    };
  }
);

// ── Tool 4: list underlying models ─────────────────────────────────────────
server.registerTool(
  "list_kavel_models",
  {
    title: "List Kavel models",
    description:
      "List the AI models Kavel runs (image and video), what each is good at, and whether it has a free tier.",
    inputSchema: {},
  },
  async () => {
    const body = KAVEL_MODELS.map(
      (m) =>
        `- **${m.name}** (\`${m.id}\`, ${m.mediaType}${
          m.freeTier ? ", free tier" : ""
        }) — ${m.summary}`
    ).join("\n");
    return {
      content: [
        {
          type: "text",
          text: `Kavel models:\n\n${body}\n\nTry them: ${KAVEL_BASE_URL}`,
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // stderr is safe for logs; stdout is the MCP transport.
  console.error("kavel-mcp running on stdio");
}

main().catch((err) => {
  console.error("kavel-mcp fatal:", err);
  process.exit(1);
});
