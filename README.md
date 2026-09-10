# Industry Research Atlas

A reusable research workflow and bilingual HTML dashboard for understanding **who supplies whom, what they supply, how products may evolve, and where conditional risks can travel**.

[简体中文说明](README.zh-CN.md) · [Upload to GitHub](docs/GITHUB_UPLOAD.md) · [Reusable prompts](docs/PROMPTS.md) · [Research methodology](skills/industry-research-atlas/SKILL.md)

## Open the final example

Open `index.html` in a modern browser. No installation, API key or server is needed. It contains the final 2D optical-industry interface, with industry roles, product profiles and illustrative product models, future-product scenarios, country comparison, company focus, a supplier/customer matrix and indirect-path research.

This is the **public sharing edition** of the accepted optical atlas. The original final HTML remains unchanged separately. This copy omits the embedded third-party screenshot archive and unverified imported source labels; it retains the sourced research, confirmed/reported relationships and interactive features. The older secondary network view has a simple stage layout for the researched company universe.

## What the visualization means

- Company bubble **area** represents market cap. Choose proportional, explicitly compressed or equal size.
- Company scale and economic dependency are different. All arrows have equal width because the reviewed records do not quantify dependency.
- Arrows point supplier → customer. Partnerships/competition are separate layers.
- The overview uses country lanes and industry stages. Select a company to reveal its links; use Company focus for product-labeled relationships.
- The matrix uses supplier rows and customer columns. Empty means no recorded relationship.
- Indirect connections identify shared suppliers/customers and supported multi-step paths, not hidden contracts.
- Conflict scenarios apply only to matching evidence and explicit assumptions. They do not predict realized financial losses.

## Research snapshot and coverage

Snapshot: **September 10, 2026**. Company/product research retains the source dates displayed in the atlas; this release is not a new filing refresh.

| Coverage | Count |
|---|---:|
| Researched company profiles | 40 |
| Company-confirmed direct supply records | 5 |
| Credible third-party supply records (optional filter) | 1 |
| Partnership records | 4 |
| Competition records | 1 |
| Market-cap figures with sources | 39 |
| Figures on the sizing date, September 9 | 37 |
| Older September 8 figures, details only | 2 |
| Company without verified market cap | 1 |

This is a small documented relationship dataset, not a complete supply-chain database. A public-sharing label explains why the original 1,598 unverified relationships and 1,611 source-image labels are omitted. No omitted edge has been promoted to confirmed supply. Market caps are rounded USD snapshots with source links, not live quotations.

## Use the skill for another industry

The portable skill is `skills/industry-research-atlas/`. It includes `SKILL.md`, evidence rules, build/adaptation instructions, acceptance checks, and a self-contained reference application.

In an agent that supports local `SKILL.md` skills, copy the whole folder into its configured skills directory and reload the skill catalog as required by that agent. For Codex-style local environments, `~/.codex/skills/industry-research-atlas/` is the conventional location. This archive has **not** installed anything in your account.

Example invocation in a compatible agent:

> Use $industry-research-atlas to study data-center electricity infrastructure. Include GEV, BE, TLN, VRT and CEG. Research to the latest available date, cite original filings, verify each commercial relationship, and deliver English/Chinese standalone HTML. Separate company scale from supplier dependency. Do not invent missing figures.

If your assistant does not support installable skills, upload the package and ask it to read `skills/industry-research-atlas/SKILL.md` and follow its referenced instructions. The assistant must be able to read files and research sources. GitHub hosting alone does not run an AI agent, search filings or install a skill.

The optical example is a reference, **not an automatic new-industry converter**. Its product and scenario mappings exist in JavaScript and JSON and must be adapted by the researching agent. The optional scaffold script only copies the reference and creates a research brief.

## Edit and rebuild

Requires Python 3.9+; behavior checks additionally use Node.js 18+.

```bash
python3 scripts/build.py
python3 scripts/validate.py
node tests/check_audit.cjs
node tests/check_2d.cjs
```

Run from this repository folder. The build creates one `index.html` from editable `src/` and `data/`. It uses only Python's standard library. The page uses browser-native HTML/CSS/JavaScript and no external runtime dependencies.

## Repository contents

| Path | Purpose |
|---|---|
| `index.html` | Ready-to-open public atlas / GitHub Pages entry |
| `src/` | Editable page shell, style and application code |
| `data/atlas.json` | Cited research, classifications, countries, translations and market caps |
| `scripts/` | Portable build and evidence-structure validation |
| `tests/` | Programmatic relationship, layout and state checks |
| `skills/industry-research-atlas/` | Shareable skill and self-contained reference |
| `docs/` | Upload guide, prompts, conversation decisions, data model and release notes |
| `LICENSE` | MIT terms for original code and workflow instructions |
| `NOTICE.md` | Third-party data scope and attribution |

## Sharing and contribution

Create a GitHub repository and upload these extracted contents; see the upload guide. Others can download or fork the repository, view the HTML and reuse the workflow. Live financial feeds, paid research databases and GitHub publishing are not bundled services.

When adding a relationship, include product, direction, source, date, classification and bilingual explanation. Rebuild and run the checks. Do not fill missing dependencies with assumed percentages. Do not include private reports, screenshots or API keys in contributions.

## Validation limits

The public edition passes source/data integrity and programmatic tests for direction, financial sizing, non-overlapping card positions, scenario constraints, reset, third-country paths, indirect paths and language state. This release did not run a browser visual/interaction test. Source-structure validation is not an independent re-verification of every underlying claim.
