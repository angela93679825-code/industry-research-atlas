# Evidence model and scenario semantics

The bundled `assets/site/data/atlas.json` is the running schema reference. `relationships` use:

| Field | Meaning |
|---|---|
| id | Stable unique record identifier |
| source / target | Supplier/customer for supply; the two actors for other types |
| type | supply, indirect, partnership, competition, unverified; financial may be added as a distinct layer |
| status | company, reported, inference, unverified |
| product / productZh | Specific product/service; full bilingual description |
| category | Controlled category used by scenario controls |
| url / sourceDate | Claim-supporting page and its date; null when unavailable |
| reviewDate | Date the analyst reviewed it |
| note / noteZh | Scope, launch/production status and claim limitations |
| origin / destination | Documented product shipment countries, not headquarters |
| manufacturing | Product-specific manufacturing country, if documented |
| alternatives | Documented alternatives; unknown otherwise |
| evidence | Optional original evidence identifiers when authorized for inclusion |

Two-way supply requires separate records with independently supported products and direction. Do not count a partnership twice as two commercial arrows.

## Financial scale

Market cap records include ticker/entity, positive USD billions, valuation date, source URL, retrieval date and currency basis. The reference reads `marketCaps[ticker].value/date/url/source/retrieved` and uses a single `CAP_DATE`. Resolve split adjustments, ordinary-share counts, multiple classes, ADR ratios and local currencies. Do not mix raw provider fields with incompatible units. A stale record can remain visible in details while being excluded from same-date bubble sizing.

For true-area sizing: r = R × sqrt(value / max_value). For compressed area: r = R × sqrt(ln(1 + value) / ln(1 + max_value)); state the unit inside the logarithm. Use a dataset-wide maximum so changing countries does not silently change the scale. Unknown circles are visibly distinguished. No market cap is a dependency measure.

## Dependency strength

Keep `customer_revenue_share` and `supplier_procurement_share` separate, with entity, denominator, fiscal period, percentage, product scope, source and evidence status. A contract's face value is not annual revenue. Do not mix these in one weighted arrow scale. Equal width is appropriate when the evidence is missing. A sole-source claim must name the particular input and period.

## Scenario matching

1. Ignore non-supply and unverified records for disruption propagation.
2. Apply selected evidence, product and direction criteria.
3. For export/logistics, require known route origin/destination. Matching headquarters without route data means uncertain, not cut.
4. For manufacturing, require product-specific factory location and the documented scope of interruption. Headquarters does not locate production.
5. An explicitly supplied route assumption may interrupt an uncertain matching record; flag it as user assumption, not evidence.
6. At a cut, identify potential input shortage at the buyer and customer-demand loss at the seller. Trace downstream and upstream paths conditionally.
7. Store the complete root-to-company sequence of records. Label the maximum depth and any representative-path rather than exhaustive-path method.
8. Reset clears all interruption assumptions and restores baseline classifications without deleting evidence.

Document exposure beyond the selected-country map separately from the displayed universe. Factory exposure can exist without a bilateral cross-border sale; explain any country-filter restriction in a simulation.

## Indirect discovery

Common supplier: S → A and S → B. Common customer: A → C and B → C. Multi-step exposure: A → B → C. None establishes A ↔ B supply unless there is a separate record. Shared location requires specific manufacturing evidence; an industry node or headquarters country does not prove co-production.

Ownership, loans, equity investments, guarantees, prepayments and purchase commitments have different legal/economic meanings. Use separately sourced typed records. Do not infer hidden financial ties from co-mentions or assume a financial commitment is a product shipment.
