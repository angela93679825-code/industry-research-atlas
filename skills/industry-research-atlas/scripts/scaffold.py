#!/usr/bin/env python3
"""Copy the reference into a fresh directory. Research/adaptation is still required."""
import argparse,shutil
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('destination');p.add_argument('--industry',required=True);a=p.parse_args()
root=Path(__file__).resolve().parents[1];dest=Path(a.destination).resolve()
if dest.exists() and any(dest.iterdir()):p.error('Destination must be empty; existing projects are not overwritten.')
shutil.copytree(root/'assets/site',dest,dirs_exist_ok=True)
(dest/'RESEARCH_BRIEF.md').write_text('# New industry: '+a.industry+'\n\nStatus: REFERENCE ONLY — not researched yet.\n\nReplace the optical companies, products, stages, scenarios, dates, source indexes and translations in both source code and data. Read the skill implementation and acceptance references. Do not publish this reference as research about the new industry.\n',encoding='utf-8')
print(dest)
