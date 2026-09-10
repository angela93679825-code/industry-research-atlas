# Portable implementation

The assets are a worked reference implementation, not an automatic universal sector converter.

## Build

Copy `assets/site` to a fresh project directory. Edit its source and data, then run:

```bash
python3 scripts/build.py
```

`index.html` embeds JavaScript, CSS and JSON and runs without an API key or server. Do not edit only the generated HTML if a reproducible source package is requested. No environment-specific paths or original hosting identity are required.

## Files and adaptation points

- `src/template.html`: page shell, navigation, static controls and dialogs. Uses three build markers.
- `src/styles.css`: final dark design, 2D country lanes, focus cards, matrix, product models and responsive behavior.
- `src/app.js`: full application. Search for `REL_STAGES`, `stage2`, `CAP_DATE`, `shortProduct`, `futureProducts`, `futureCompany`, `futureModes`, `productPurpose`, `signal`, `primaryStage`, `renderNationComparison`, `companyRelations`, `scenarioState`, `translateUI`.
- `data/atlas.json`: company nodes/profiles, stage nodes, source index, productExplorer, country records, market caps, translated text and classified relationships.

For a new industry replace both JSON and hard-coded product/stage/scenario mappings. Replace all date labels and coverage counters, including strings saying 40 or 37, when the universe changes. Do not leave the optical ticker whitelist, optical node IDs, source indexes, future cards or 3D models in a different industry's final page. Remove non-applicable product models rather than claiming they represent new physical products.

Keep node IDs unique and relationship endpoints resolvable. Company `profiles` refer to industry node IDs through `positions`; source references use one-based indexes into `sources`. Preserve those links or adapt the renderer. Profile products contain a name and description. Retain translated descriptions and labels in `translations`, with per-record Chinese text for evidence/product notes.

Default confirmed edges are dated company-confirmed direct supply. Third-party reports are optional; unverified edges cannot enter simulation or a dependency score. A missing country assignment must be a visible unknown, never guessed from exchange.

## Readability

Use fixed stage positions and country lanes. Keep cards non-overlapping and link focus selective. Use the focused supplier/company/customer cards for full product names; use the matrix when many links are selected. Solid versus dotted evidence style is separate from interruption color. Accessible company/link buttons and a scrollable matrix support keyboard navigation. Use readable labels at normal zoom; do not solve overcrowding only by shrinking the text.

## Language and state

Translate runtime and static strings, SVG titles, evidence notes, scenario explanations, placeholders and empty states. Keep stable option values independent from translated display text. Persist focus, countries, filters, active view, comparison peer and scenario while changing language. Translated external company brands may remain in their recognized form; tickers must remain unchanged.

## Data refresh

This example is a dated offline snapshot. Live data is not included. If the user separately requests APIs, use a licensed source, disclose freshness and caching, validate currency/share-class basis, and keep secrets server-side. GitHub Pages is static hosting and cannot protect a secret embedded in HTML. A skill is an agent workflow, not an API or an autonomous research service.
