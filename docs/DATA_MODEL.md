# Data model

The working schema is `data/atlas.json`; the skill's `references/evidence-model.md` defines its evidence semantics.

Core keys: `nodes` (company identities), `profiles` (products and role positions), `industryStages` and `supportNodes`, `sources` (indexed URLs), `productExplorer` (product/filing details), `countries`, `marketCaps`, `relationships`, `translations`, `release`.

Relationships have stable IDs and source/target endpoints. Supply requires a specific product, status, URL and source date. `sourceDate` dates the evidence; `reviewDate` dates the review. `manufacturing`, `origin` and `destination` are distinct from company-country grouping. Two-way procurement needs separate evidence records.

The initial `edges` array contains only default company-confirmed supplies; runtime filtering derives other permitted records from `relationships`. Do not edit just the default edge list. Unknown raw labels/screenshots are absent from this public copy, but the UI continues supporting unverified records when users add their own authorized research.

`marketCaps` values are USD billions from dated, rounded source snapshots. `CAP_DATE` in `src/app.js` selects the common date. Values from other dates are shown only in company detail. Updating the valuation date requires refreshing data and explanatory labels together.

The application includes sector-specific logic in JavaScript (`REL_STAGES`, `stage2`, product and future maps). A new sector requires adapting these and the static controls, not only replacing JSON. Use the skill implementation guide.

Financial relationships and quantified economic-dependency fields are not populated in this release. Empty layers are not evidence of absence. The current supply records do not provide dependency percentages, product-specific revenue losses, quantified substitutes or recovery timelines.
