class Node { constructor(){ this.children=new Map(); this.end=false; this.frequency=0; } }
export class Trie {
  constructor(){ this.root=new Node(); this.size=0; }
  insert(word,frequency=1){ let node=this.root; for(const ch of word.toLowerCase()){ if(!node.children.has(ch)) node.children.set(ch,new Node()); node=node.children.get(ch); } if(!node.end)this.size++; node.end=true; node.frequency=frequency; }
  complete(prefix,limit=8){ let node=this.root; const clean=prefix.toLowerCase(); for(const ch of clean){ node=node.children.get(ch); if(!node)return []; } const found=[]; const walk=(n,s)=>{ if(n.end)found.push({word:s,frequency:n.frequency}); for(const [ch,next] of n.children)walk(next,s+ch); }; walk(node,clean); return found.sort((a,b)=>b.frequency-a.frequency||a.word.localeCompare(b.word)).slice(0,limit); }
}
export function editDistance(a,b){ const previous=Array.from({length:b.length+1},(_,i)=>i); for(let i=1;i<=a.length;i++){ const current=[i]; for(let j=1;j<=b.length;j++) current[j]=Math.min(current[j-1]+1,previous[j]+1,previous[j-1]+(a[i-1]===b[j-1]?0:1)); previous.splice(0,previous.length,...current); } return previous[b.length]; }
export function corrections(query,entries,limit=8){ return entries.map(e=>({...e,distance:editDistance(query.toLowerCase(),e.word)})).filter(e=>e.distance<=Math.max(2,Math.floor(query.length/3))).sort((a,b)=>a.distance-b.distance||b.frequency-a.frequency).slice(0,limit); }
