---
name: industry-research-atlas
description: Research an industry and create or update a bilingual, evidence-based HTML atlas of products, company roles, supplier/customer relationships, country exposure and conditional technology or disruption scenarios. Use for industry-chain research or an interactive industry atlas, not a generic stock-price dashboard.
---

# Industry Research Atlas

Turn an industry question and supplied research into a reviewable, standalone HTML atlas. Preserve the distinction between industry roles, commercial relationships, financial exposure and future hypotheses. The bundled optical atlas is a worked reference, not evidence about another industry.

## Scope and deliverable

Infer the company universe, geography, research date and requested languages from the user. Ask only for missing information that materially changes the task. When unspecified, use a researched representative universe, state that boundary, and retain English / Simplified Chinese support from the reference.

Default to one offline-capable HTML with embedded data, accessible source links, and editable source/data files. Updating an existing atlas means preserve its functioning features and design unless the requested change calls for replacement. Publishing, pushing to GitHub and paid data access are separate actions; this skill does not authorize them.

Read [research-method.md](references/research-method.md) before research. Read [implementation.md](references/implementation.md) before building. For financial sizing, country conflict or future-product scenarios, also read the corresponding sections of [evidence-model.md](references/evidence-model.md). Validate against [acceptance.md](references/acceptance.md) before handoff.

## Research sequence

1. **Inventory the evidence.** Read supplied notes, photos, HTML, PDFs and company lists. Extract names, tickers, aliases and source dates. Mark illegible text and ambiguous identity rather than completing it from expectation. Keep source-image relationships unverified until independently supported. Record what was supplied versus independently researched.
2. **Explain the industry.** Define upstream inputs, midstream integration and downstream systems/buyers. Include manufacturing, packaging, test and services that cross stages. Draw the actual product/process flow; do not impose the optical signal chain on another industry. A company can occupy multiple roles while having one primary map position.
3. **Build product profiles.** For each node explain: (a) use, importance and industry position; (b) current function and supported capability; (c) how it could improve, what specific component or process changes, evidence and related companies. Distinguish released products, announced products, prototypes and analyst scenarios. Optional 3D product models are illustrative unless based on manufacturer geometry; keep the relationship map 2D.
4. **Verify company relationships.** Classify direct supply, indirect downstream exposure, technology/manufacturing partnership, competition and unverified relationship. Add ownership/financing/commitments only in a separately evidenced financial layer. For each supply record identify supplier, customer, product/service, category, source URL/date and evidence status. Verify each direction independently; two-way supply needs two supported records. Never equate an ecosystem diagram or partnership announcement with procurement.
5. **Read filings when product/business outlook is requested.** Find the latest available 10-Q and useful 10-K at the stated cutoff. For foreign issuers use 20-F, 6-K, interim reports or jurisdictional equivalents. Record fiscal period and publication/filing date separately. Filings support business exposure and risks, not undisclosed chip specifications; use manufacturer product documentation for technical claims.
6. **Map scale and dependency separately.** Prefer whole-company market cap on one valuation date in a common currency. Bubble area, not radius, is proportional; a labeled logarithmic-area option improves readability. Show dates/sources and unknowns. Do not use enterprise value, ADR price, purchasing share or network degree as a substitute for market cap. Arrow thickness may encode one explicitly selected, disclosed dependency measure; missing dependency uses equal width, not a guessed weight.
7. **Trace conditional exposure.** Use directed, evidence-linked supply paths. Shared suppliers/customers and common factories are possible common exposure, not hidden bilateral contracts. Explain the exact path, affected business if supported, alternatives only if documented, and uncertainty. Keep the graph separate from an assertion that all products depend on the same input.
8. **Create the HTML and source package.** Apply the interaction contract below. Use the optical reference's layout and controls as reusable implementation, replacing every sector-specific company, product, stage, scenario, source and translation for a new industry.

## Interaction contract

- **Industry overview:** fixed 2D stage columns and country lanes; every company in the selected country universe stays visible, including no-link companies. Default to selected-company links; offer all-links mode. Size means company scale, not importance.
- **Company focus:** suppliers → selected company → customers, with product labels and clickable evidence. Show other relationship types separately. Expand one additional step on request. Clearly label if this view uses the full dataset while the overview/matrix use country filters.
- **Dependency matrix:** supplier rows and customer columns. Keep unlinked companies visible. Empty is “no recorded relationship,” not “no relationship.” Click a cell to inspect all relevant records. Partnerships/competition are symmetric and never receive supplier arrows.
- **Indirect connections:** show shared suppliers, shared customers, directed multi-step paths and documented shared manufacturing. Show financial relationships separately; an empty evidence layer is valid.
- **Country comparison:** headquarters/principal office is the labeled default. Store incorporation, manufacturing and shipment origins/destinations separately. Optional third-country intermediaries must connect the selected countries through evidenced directed paths.
- **Conflict controls:** separate normal view from scenario; choose direction, product category, disruption type and, for manufacturing, factory location. Match only applicable supply records. Unknown product or route stays uncertain; an optional explicit user route assumption must be labeled as an assumption and cleared by reset.
- **Conflict legend:** blue = recorded supply; red dashed = assumed interrupted; amber = direct exposure; purple = potential indirect exposure; gray = unverified, hidden by default. Explain input-shortage exposure at buyers and potential demand loss at sellers. Say “Not directly interrupted by this scenario,” not “safe.”
- **Future industry:** compare current business with a conditional post-improvement role. Distinguish potential benefit, pressure on existing product content, mixed impact, execution dependence and buyer benefit. Do not label an entire company a guaranteed winner or replaced firm from a technology trend.
- **Language:** translate descriptions, methodology, scenario controls, legends, evidence labels, empty states, tooltips and panels. Keep tickers unchanged; use established Chinese names when available. Switching language must preserve all user state. External source documents may remain in their original language.

## Guardrails specific to this workflow

Missing evidence is not negative evidence. “Relationships recorded in this dataset” is the count label. Do not invent suppliers, source dates/URLs, current market caps, dependency percentages, revenue losses, replacement vendors or recovery dates. Use “Insufficient data to quantify” when necessary. A citation must support the actual direction and product, not just mention both companies.

Public research packages should contain source links and original summaries, not copied paid source libraries, private customer exports or credentials. Preserve an accepted private original separately when making a public sharing copy. Document omissions and the exact research snapshot. Do not include unrelated personal conversation or portfolio information.

## Using the bundled reference

`assets/site` contains the sanitized, portable final optical atlas: `src/app.js`, `src/styles.css`, `src/template.html`, `data/atlas.json`, and `scripts/build.py`. Copy into a fresh directory before adaptation, or modify the user's existing project when that is the task. No hosting identity, API key or special workspace is required. Python 3 builds the single-file HTML; the built page itself requires only a browser.

The optical logic currently has some product/stage/future mappings in JavaScript as well as JSON. Editing company JSON alone is not sufficient to create another industry's atlas. Use the implementation reference to locate and replace those mappings. Do not carry optical facts into a new sector.

## Handoff

Deliver the working HTML, concise findings, coverage limitations and relevant source dates. If requested, package editable code/data, the reusable skill, documentation and a license distinction for code versus third-party data. Describe what was actually validated; do not claim browser QA, live updates, installation or deployment unless performed and confirmed.
