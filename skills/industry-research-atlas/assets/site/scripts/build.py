#!/usr/bin/env python3
"""Build a single offline HTML file using only Python's standard library."""
import argparse,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
def build(output=None):
    data=json.loads((ROOT/'data/atlas.json').read_text(encoding='utf-8'))
    text=(ROOT/'src/template.html').read_text(encoding='utf-8')
    replacements={'__ATLAS_DATA__':json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('</','<\\/'),'__ATLAS_SCRIPT__':(ROOT/'src/app.js').read_text(encoding='utf-8'),'__ATLAS_STYLES__':(ROOT/'src/styles.css').read_text(encoding='utf-8')}
    for token,value in replacements.items():
        if text.count(token)!=1:raise ValueError('Expected one template token: '+token)
        text=text.replace(token,value)
    target=Path(output) if output else ROOT/'index.html'
    target.parent.mkdir(parents=True,exist_ok=True);target.write_text(text,encoding='utf-8');print(target)
if __name__=='__main__':
    p=argparse.ArgumentParser();p.add_argument('--output');a=p.parse_args();build(a.output)
