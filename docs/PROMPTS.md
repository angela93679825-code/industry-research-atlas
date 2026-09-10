# Reusable prompt library

These prompts consolidate the project requests into reusable tasks. Replace bracketed fields. They are not a raw conversation transcript.

## Master research request

Use the Industry Research Atlas skill to study [industry] as of [cutoff date]. Start with [company list / supplied notes / files] and state the research universe. Explain the upstream-to-downstream process and place companies at their specific roles. For every product explain use and importance, current capability, and evidence-supported improvements. Find the latest relevant filings and technical disclosures. Verify who supplies whom, what they supply, and each direction independently. Build an English/Simplified Chinese offline HTML with industry overview, company focus, matrix, indirect connections, country comparison and conditional scenarios. Use dated market cap for company area; economic dependency is separate. Keep missing information unknown. Include sources, editable data/code and a brief coverage statement.

## 主研究提示词

请使用 Industry Research Atlas 技能，研究截至[日期]的[产业]。以[公司名单／笔记／资料]为基础，明确研究范围。解释上游、中游、下游流程及各公司具体位置。每类产品按“用途与重要性—当前功能与能力—有证据的改进方向”说明。查找最新相关财报与技术资料，逐条验证谁向谁供应什么，两个方向分别举证。生成中英双语离线 HTML，包含产业概览、公司聚焦、关系矩阵、间接联系、国家比较和有条件的冲突模拟。气泡面积使用同日期市值，经济依赖程度另行判断。缺失信息保持未知。交付来源、可编辑数据和代码，并说明覆盖局限。

## Audit an existing atlas

Audit [HTML/data]. Separate direct supply, indirect exposure, partnerships, competition and unverified relationships. Every confirmed supply needs supplier, customer, product, dated source and evidence status. Examine apparent two-way relationships separately. Do not retain procurement claims based only on partnership/co-mention. Keep unverified records outside the confirmed view. Preserve the page's existing working features.

## Extract source-map photos

Extract companies and relationships from [files]. Retain image/page identifiers, truncated labels and uncertain identities. Normalize tickers and company aliases carefully. Treat source-map links as unverified until a dated independent source supports direction and product. Do not infer customer names hidden by redaction or OCR failure.

## Product and filing research

For [product/node], explain its use and position, current commercial function/capabilities, and specific potential improvements. Identify which component, interface, material or manufacturing step changes. Use manufacturer technical sources for specifications and company filings for business exposure. Separate commercial releases, prototypes, announcements and analyst scenarios. Collect latest available 10-Q/10-K or foreign-issuer equivalents with fiscal period, publication date, supporting claim and limitations.

## Country and disruption comparison

Compare companies headquartered in [country A] and [country B]. Keep unlinked companies visible by stage and add an optional third-country-path toggle. Separate headquarters from factory and shipment locations. Simulate [direction/category/disruption type] only on matching documented supply. Missing route or product data means uncertain unless explicitly assumed. Explain input shortages versus demand loss and show every transmission path. Do not invent losses, substitutes or recovery times.

## Future industry and company business changes

Create future-product scenarios for [industry]. Draw branches to relevant companies and compare their current business with a conditional future role. Explain benefit, pressure on existing product content, mixed impact, execution dependence and buyer benefit. Cite the facts supporting each scenario, identify which steps must improve, and explain why adoption is conditional. Do not equate product substitution with replacement of an entire company.

## Improve relationship visualization

Use a 2D stage map with country lanes, market-cap area, focused supplier/company/customer cards, and a supplier-row/customer-column matrix. Default to selected-company links. Add disclosed dependency measures only with their denominator, fiscal period, product scope and source. Identify shared suppliers/customers, multi-step paths and documented common factories as research leads. Keep ownership/financing in a separate evidence layer.

## Refresh the final atlas

Refresh [atlas] to [date] without redesigning accepted features. Update filings, products, relationship evidence, corporate identity/geography and market caps. List additions, removals and reclassifications; distinguish stale or superseded evidence. Retest arrows, panels, matrix, country paths, reset and complete translation. Preserve a dated prior snapshot.

## Public release

Package [accepted atlas] for GitHub with one working index.html, portable build source, data, evidence documentation, reusable skill, README, contribution instructions and license scope. Remove credentials and private or third-party screenshot archives from the public edition while preserving the accepted original separately. Document omissions. Give upload/Pages instructions; do not push or publish unless explicitly asked.
