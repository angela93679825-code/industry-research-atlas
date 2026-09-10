# Conversation distilled into final requirements

This records the industry-atlas decisions from the supplied project conversation. It excludes unrelated personal history, portfolio details and private account material.

| Evolution of the request | Final decision |
|---|---|
| Extract supplier/customer names from photos and supply-chain maps | Preserve provenance and ambiguity; OCR/source labels are not verified contracts |
| Interactive company relationship dashboard | Clickable companies, product descriptions and relationship evidence |
| Collect 10-Qs and explain product/industry outlook | Use latest available filings/equivalents at cutoff, plus technical product sources |
| Place company names at physical industry nodes | Upstream, midstream and downstream, with cross-stage manufacturing/packaging/test |
| Explain electrical-to-optical and optical-to-electrical flow | Keep the supplied optical process as the worked example; adapt other sectors independently |
| Add realistic-looking 3D product models | Retain illustrative product models; never claim exact manufacturer geometry |
| Replace vague scenario research headings | Explain use/importance, current capability, and evidence-based improvements |
| Compare company business before and after a future product change | Conditional company business analysis, not guaranteed winner/loser labels |
| Compare countries and conflict exposure | Headquarters lanes plus separately documented factories/routes; explicit matching assumptions |
| Translate more than titles | Translate full explanations, labels, evidence, tooltips and empty states while preserving state |
| Audit Broadcom and other two-way-looking links | Independently source each direction and product; separate partnership/competition |
| Show scale and importance in 3D | Superseded for company networks: 3D perspective obscured links and size comparison |
| Rebuild in 2D | Final accepted layout: stage overview, company focus, matrix, indirect connections |
| Size firms meaningfully | Dated market-cap area with explicit compression; no conflation with economic dependency |
| Find potentially missed relationships | Trace supported indirect paths and shared counterparties; do not invent hidden contracts |
| Turn the final page into a reusable/shareable skill | Portable SKILL.md with reference application, prompts, evidence rules and acceptance checks |

## Frozen final and public copy

The accepted final private HTML is preserved by its SHA-256 in `data/atlas.json` under `release.finalPrivateHtmlSha256`. This repository is its public companion, with source screenshots and unverified imported labels removed. Its 2D comparison logic and researched company/product views are retained. The older secondary network overview was made independent of imported source-map core nodes.

## Not adopted as defaults

An all-links 3D network is not the main research interface. Relationship count is not financial size. A network-centrality score is not actual criticality. Corporate headquarters do not establish a trade route. Product architecture does not prove a bilateral supply contract. Unknown economic dependency does not justify a guessed arrow thickness. A future product does not prove that an entire firm is replaced.
