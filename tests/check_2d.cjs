const fs=require('fs');let s=fs.readFileSync('tests/runtime.cjs','utf8').split('const result=')[0];s+=`
vm.runInContext(\`(()=>{
$('country-a').value='United States';$('country-b').value='Taiwan';geoFocus=null;relView='overview';renderNationComparison();let d=countryNetwork('United States','Taiwan');let h=overviewSVG(d);
if((h.match(/class="rel-node /g)||[]).length!==35)throw Error('Missing company cards');if(h.includes('data-rel="V01"'))throw Error('Unfocused overview clutter');
geoFocus='AVGO';h=overviewSVG(d);if(!h.includes('data-rel="V01"')||h.includes('data-rel="V03"'))throw Error('Focus filter direction');relAllLinks=true;h=overviewSVG(d);for(const r of d.edges)if(!h.includes('data-rel="'+r.id+'"'))throw Error('All links missing');
relSize='proportional';if(Math.abs((capRadius('AVGO')/capRadius('ANET'))**2-CAPS.AVGO.value/CAPS.ANET.value)>1e-8)throw Error('Area not proportional');
if(capValue('VIAV')!==null||capValue('TSEM')!==null||capValue('SIVEF')!==null)throw Error('Wrong-date value leaked');if(Object.values(CAPS).length!==39)throw Error('Market cap coverage');
for(const [t,c]of Object.entries(CAPS))if(!(c.value>0)||!c.url.startsWith('https://stockanalysis.com/')||!c.date)throw Error('Bad market cap metadata');
relSize='compressed';if(!(capRadius('NVDA')>capRadius('AAOI')))throw Error('Compressed ordering');
const fr=focusRecords('AVGO');if(fr.down.length!==1||fr.down[0].target!=='ANET'||fr.up.length!==0)throw Error('Incorrect Broadcom supply panel');includeReports=true;const fr2=focusRecords('AVGO');if(fr2.up[0].source!=='TSM')throw Error('Reported manufacturing direction');includeReports=false;
geoFocus='ANET';relView='focus';relDepth=2;renderNationComparison();if(!focusHTML().includes('Ethernet platforms / EOS'))throw Error('Missing products');
const leads=indirectConnections('MSFT','META');if(!leads.some(x=>x.kind==='Shared supplier'&&x.records.every(e=>e.source==='ANET')))throw Error('Shared supplier missing');if(leads.some(x=>x.records.some(e=>e.source==='MSFT'&&e.target==='META')))throw Error('Invented direct link');
relView='matrix';renderNationComparison();h=matrixHTML(d);if(!h.includes('data-pair-from="AVGO" data-pair-to="ANET"')||h.includes('data-pair-from="ANET" data-pair-to="AVGO"'))throw Error('Matrix direction');
relLayer='partnership';if(!layerEdges(d).some(r=>r.id==='P03')||layerEdges(d).some(r=>r.type==='supply'))throw Error('Layer contamination');relLayer='financial';if(layerEdges(d).length)throw Error('Invented financial links');relLayer='supply';
const layout=stageLayout(d);if(layout.pos.size!==35)throw Error('Missing positions');for(const [id,p]of layout.pos){if(p.x<0||p.y<0||p.x+p.w>layout.W||p.y+p.h>layout.H)throw Error('Clipped node');for(const [other,q]of layout.pos)if(id!==other&&p.x<q.x+q.w&&p.x+p.w>q.x&&p.y<q.y+q.h&&p.y+p.h>q.y)throw Error('Overlapping cards');}
relView='discover';relPeer='META';geoFocus='MSFT';edgeFocus='V01';renderNationComparison();setLanguage('zh');if(relView!=='discover'||relPeer!=='META'||geoFocus!=='MSFT'||edgeFocus!=='V01')throw Error('Translation reset selections');for(const s of ['Relationship explorer','Dependency matrix','Company focus','Economic dependency not disclosed in this dataset','No supply recorded','Shared supplier'])if(translateUI(s)===s)throw Error('Untranslated '+s);setLanguage('en');
$('scenario-reset').onclick();if(countryNetwork('United States','Taiwan').blocked.length)throw Error('Reset baseline');
console.log('Passed: all 35 company cards, non-overlapping layout, focus/all links, market-cap evidence/date gates and area scaling, supplier direction, indirect leads, matrix orientation, separate relationship layers, bilingual state and reset.');
})()\`,sandbox);`;new Function('require',s)(require);
