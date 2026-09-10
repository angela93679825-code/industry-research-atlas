const fs=require('fs');let s=fs.readFileSync('tests/runtime.cjs','utf8').split('const result=')[0];s+=`\nvm.runInContext(\`(()=>{
 for(const r of rels.filter(r=>r.type==='supply')){if(!r.product||!r.url||!r.sourceDate)throw Error('Incomplete supply evidence '+r.id);if(r.source===r.target)throw Error('Self supply')}
 if(DATA.edges.some(r=>r.type!=='supply'||r.status!=='company'))throw Error('Unverified default');
 for(const n of DATA.nodes){for(const r of incoming.get(n.id))if(r.target!==n.id)throw Error('Incoming direction');for(const r of outgoing.get(n.id))if(r.source!==n.id)throw Error('Outgoing direction')}
 for(const t of Object.keys(profiles)){select(t);if(!$('sidebar').innerHTML.includes('Upstream suppliers'))throw Error('Panel missing');}
 $('country-a').value='United States';$('country-b').value='Taiwan';
 let d=countryNetwork('United States','Taiwan');if(d.ns.length!==35||d.edges.length!==5)throw Error('Baseline country universe');
 scenarioMode='conflict';tradeDirection='b-a';productCategory='chips';disruptionType='export';
 if(scenarioState(rels.find(r=>r.id==='V03'))!=='uncertain')throw Error('HQ incorrectly treated as shipment');
 if(d.blocked.length)throw Error('Unexpected baseline disruption');
 disruptionType='manufacturing';affectedSite='Taiwan';if(scenarioState(rels.find(r=>r.id==='V03'))!=='retained')throw Error('Arizona incorrectly interrupted');
 affectedSite='United States';if(scenarioState(rels.find(r=>r.id==='V03'))!=='assumed')throw Error('Matching manufacturing ignored');
 productCategory='software';if(scenarioState(rels.find(r=>r.id==='V03'))!=='retained')throw Error('Product filter');
 productCategory='chips';disruptionType='export';includeReports=true;refreshAudit();scenarioOverrides.add('V04');
 d=countryNetwork('United States','Taiwan');if(!d.blocked.some(r=>r.id==='V04'))throw Error('Explicit route assumption ignored');
 const exposure=d.exposures.find(x=>x.id==='ORCL'&&!x.direct);if(!exposure||exposure.path.map(r=>r.id).join(',')!=='V04,V01,V02ORCL')throw Error('Indirect transmission path');
 for(const r of rels.filter(x=>x.type==='unverified'))if(scenarioState(r)==='assumed')throw Error('Unverified propagated');
 $('scenario-reset').onclick();if(countryNetwork('United States','Taiwan').blocked.length)throw Error('Reset failed');
 // Isolated test fixture: validate a third-country bridge without adding invented records to the artifact.
 const saved=countryData.ANET.country;countryData.ANET.country='Canada';thirdCountries=false;if(countryNetwork('Taiwan','United States').ns.some(n=>n.id==='ANET'))throw Error('Third country leaked');thirdCountries=true;
 if(!countryNetwork('Taiwan','United States').bridges.has('ANET'))throw Error('Third-country bridge missing');countryData.ANET.country=saved;thirdCountries=false;
 for(const a of [...new Set(Object.values(countryData).map(x=>x.country))])for(const b of [...new Set(Object.values(countryData).map(x=>x.country))]){const net=countryNetwork(a,b);if(net.ns.some(n=>![a,b].includes(countryOf(n.id))))throw Error('Country filter');renderNationComparison()}
 includeReports=false;refreshAudit();
 setLanguage('zh');if(translateUI('Manufacturing interruption')!=='制造中断')throw Error('Chinese control');if(!translateUI(profiles.MRVL.products[0].description).includes('面向'))throw Error('Profile prose untranslated');
 for(const n of allIndustryNodes){const p=PRODUCT.nodes[n.id];for(const v of [p.function,...p.facts,...p.roadmap.flatMap(x=>[x.change,x.tradeoff])])if(translateUI(v)===v)throw Error('Untranslated product '+n.id);openProduct(n.id);drawProduct();$('product-dialog').close()}
 const before=JSON.stringify([$('country-a').value,$('country-b').value,focusId,scenarioMode,productCategory,tradeDirection]);setLanguage('en');if(before!==JSON.stringify([$('country-a').value,$('country-b').value,focusId,scenarioMode,productCategory,tradeDirection]))throw Error('Language changed state');
 const option={tagName:'OPTION',attrs:{},closest(){return null},hasAttribute(k){return k in this.attrs},setAttribute(k,v){this.attrs[k]=v}};
 const node={nodeValue:'United States',parentElement:option};document.createTreeWalker=()=>{let done=false;return{nextNode(){if(done)return null;done=true;return node}}};setLanguage('zh');if(node.nodeValue!=='美国'||option.attrs.value!=='United States')throw Error('Country DOM option value changed');setLanguage('en');if(node.nodeValue!=='United States')throw Error('Language DOM restoration failed');
 const ids=[...new Set(allIndustryNodes.map(n=>n.id))];for(const id of ids){openProduct(id);for(const state of [-1,...PRODUCT.nodes[id].roadmap.map((s,i)=>i)]){setProductStep(state);openHousing=true;exploded=true;drawProduct()}$('product-dialog').close()}
 for(const mode of Object.keys(futureModes)){futureMode=mode;renderFuture();for(const t of Object.keys(profiles).filter(t=>t!=='SIVEF')){openFutureCompany(t);if(!$('future-comparison').innerHTML.includes('Current business'))throw Error('Future comparison missing');$('future-company-dialog').close()}}
 console.log('Passed: evidence gates, directional panels, 35-node country map, product/location constraints, explicit assumptions, reset, exact indirect path, third-country bridge, all country pairs, 19 product translations and language state preservation.');
})()\`,sandbox);
fs.writeFileSync('tests/translation_results.json',JSON.stringify(vm.runInContext('uiLanguage="zh";[...Object.entries(DATA.translations).map(([en,zh])=>[en,translateUI(en)]),...[]]',sandbox)));
`;new Function('require',s)(require);
