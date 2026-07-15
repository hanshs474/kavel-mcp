# Publish & submission runbook

Goal: get `kavel-mcp` + the `kavel-image-studio` skill listed across MCP/skill registries — each listing carries a `www.kavel.ai` link (discovery + referral + entity signal). Most links are nofollow; value is exposure + qualified traffic, not raw link juice.

## Prerequisites (do once, in order)

1. **Create the GitHub repo** `hanshs474/kavel-mcp` (public) and push this folder.
   > Note: pushing is manual — the assistant does not push.
2. **Publish to npm**: `npm login` then `npm publish` (package is public, name `kavel-mcp`).
3. Confirm `npx kavel-mcp` runs for a stranger (clean machine / `npx -y kavel-mcp`).

## Submission targets

Work top-down; each row is independent. Update Status as you go.

| # | Platform | How to submit | Needs | Status |
|---|---|---|---|---|
| 1 | **npm** | `npm publish` | npm account | ✅ live: npmjs.com/package/kavel-mcp |
| 2 | **GitHub repo** | push public repo w/ README | — | ✅ github.com/hanshs474/kavel-mcp |
| 3 | **Glama** (glama.ai) | Auto-indexes from GitHub; sign in with GitHub, **claim** the server | public repo, runnable server | ☐ |
| 4 | **mcp.so** | mcp.so/submit → open a GitHub issue with details | public repo | ☐ |
| 5 | **PulseMCP** | pulsemcp.com/submit (also auto-syncs from official registry) | public repo | ☐ |
| 6 | **awesome-mcp-servers** | PR to punkpeye/awesome-mcp-servers; add under a fitting category, alphabetical. Agent PRs: add 🤖🤖🤖 to the PR title | repo live | ☐ |
| 7 | **Official MCP Registry** | `mcp-publisher` CLI with `server.json`; verify namespace `ai.kavel` via **DNS TXT on kavel.ai** | domain DNS access, npm pkg | ☐ |
| 8 | **Smithery** (smithery.ai) | `smithery mcp publish` (CLI) or claim after crawl. Verify config against current Smithery docs first | npm pkg / reachable server, no auth wall | ☐ |
| 9 | **Skill: ClaudeSkills.info** | Community submission of the skills repo | skill folder public | ☐ |
| 10 | **Skill: skills.sh** | Vercel-backed CLI package manager for skills | skill folder public | ☐ |

## Registry gotchas (verified July 2026)

- **Glama and Smithery actually build/run/scan the server.** It must start cleanly over stdio with no auth wall — this one does (`npx kavel-mcp` → responds to `initialize`). A non-running shell gets buried/rejected.
- **Official registry requires proving you own kavel.ai** (DNS TXT for the `ai.kavel` namespace). This is the strongest entity signal here — worth doing.
- **Smithery config schema shifts** — check smithery.ai/docs/build/publish before submitting; don't ship a guessed `smithery.yaml`.

## Sync rule

If the site's tools change (`src/config/tool-pages.ts` in the kavel repo), update `src/catalog.ts` here, bump the version, rebuild, `npm publish`, and the registries re-index.
