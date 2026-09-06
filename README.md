# Kavel MCP

An MCP server for **[Kavel](https://www.kavel.ai)** — bring Kavel's AI photo & video generators into any MCP client (Claude, Cursor, Cline, …). Ask for an effect, get a model-tuned prompt, and open the right tool to generate it on [www.kavel.ai](https://www.kavel.ai).

No account or API key required to use this server — it helps you pick a tool and craft a prompt, then hands off to Kavel's free-tier generators.

## What it does

| Tool | What it returns |
|---|---|
| `list_kavel_tools` | Browse/search Kavel's generators by goal (e.g. "make my dog look royal") |
| `build_kavel_prompt` | A model-tuned prompt recipe for a chosen effect, customized with your details |
| `open_in_kavel` | The direct generator URL, pre-set to the right mode |
| `list_kavel_models` | The image/video models Kavel runs and what each is good at |

## Featured generators

- [AI Hairstyle Changer](https://www.kavel.ai/image/ai-hairstyle-changer)
- [AI Figurine Generator](https://www.kavel.ai/image/ai-figurine-generator)
- [AI Pet Portrait Generator](https://www.kavel.ai/image/ai-pet-portrait-generator)
- [AI Muscle Generator](https://www.kavel.ai/image/ai-muscle-generator)
- [90s Yearbook Photos](https://www.kavel.ai/image/90s-yearbook-photos)
- [AI Dance Video Generator](https://www.kavel.ai/video/ai-dance-video-generator)
- [HD Photo Converter](https://www.kavel.ai/image/hd-photo-converter)
- [Browse all →](https://www.kavel.ai)

## Install

Run directly with npx:

```bash
npx kavel-mcp
```

### Claude Desktop / Claude Code

Add to your MCP config (`claude_desktop_config.json` or `.mcp.json`):

```json
{
  "mcpServers": {
    "kavel": {
      "command": "npx",
      "args": ["-y", "kavel-mcp"]
    }
  }
}
```

### Cursor / Cline

Point the client at the command `npx -y kavel-mcp` (stdio transport).

## Skill (Claude Code / Cursor / Codex)

This repo also ships the **kavel-image-studio** agent skill (`skills/kavel-image-studio/`) — it helps pick the right [Kavel](https://www.kavel.ai) generator, craft a model-tuned prompt, and hand off the generate link.

Install via the open agent-skills CLI:

```bash
npx skills add hanshs474/kavel-mcp
```

Or as a Claude Code plugin marketplace:

```
/plugin marketplace add hanshs474/kavel-mcp
/plugin install kavel-image-studio
```

## Develop

```bash
npm install
npm run build
npm start
```

## Links

- Website: <https://www.kavel.ai>
- Issues: <https://github.com/hanshs474/kavel-mcp/issues>

## License

MIT © [Kavel](https://www.kavel.ai)
