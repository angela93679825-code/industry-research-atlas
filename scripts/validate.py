#!/usr/bin/env python3
"""Evidence and release checks. These do not independently fact-check sources."""
import json,re,sys
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
d=json.loads((ROOT/'data/atlas.json').read_text());ids={n['id'] for n in d['nodes']};seen=set()
for r in d['relationships']:
    assert r['id'] not in seen, 'Duplicate relationship';seen.add(r['id'])
    assert r['source'] in ids and r['target'] in ids,'Unknown endpoint'
    assert r['source']!=r['target'],'Self relation'
    if r['type']=='supply' and r['status'] in ['company','reported']:
        assert r.get('product') and r.get('productZh') and re.match(r'https?://',r.get('url') or '') and re.fullmatch(r'\d{4}-\d{2}-\d{2}',r.get('sourceDate') or ''),'Incomplete supply evidence: '+r['id']
for r in d['edges']:assert r['type']=='supply' and r['status']=='company','Unverified default edge'
for t,c in d.get('marketCaps',{}).items():assert c['value']>0 and c['url'] and c['date'] and t in ids,'Invalid financial record'
assert not d['labels'] and not d['rawEdges'],'Public screenshot archive must be empty'
assert 'data:image/png;base64' not in (ROOT/'data/atlas.json').read_text(),'Embedded source images'
assert not re.search(r'/workspace/|/root/|/Users/',(ROOT/'src/app.js').read_text()),'Machine-local path'
html=(ROOT/'index.html').read_text();payload=json.loads(re.search(r'<script id="network-data" type="application/json">(.*?)</script>',html,re.S)[1]);assert payload==d,'Rebuild index.html after changing data'
assert not any(x in html for x in ['__ATLAS_DATA__','__ATLAS_STYLES__','__ATLAS_SCRIPT__']),'Unreplaced build marker'
print('PASS: evidence structure, financial provenance, public-data boundaries and built HTML consistency')
