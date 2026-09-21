export type Level='SL'|'HL';
export type Item={id:string;title:string;hours:number;hl:boolean};
export type Section={id:string;title:string;items:Item[]};
export const sourceUrl='https://ibdocs.re/p/IB%20SUBJECT%20GUIDES/Group%204%20-%20Sciences/Computer%20Science/Computer%20Science%20Guide%202027%20-%20English.pdf#page=31';
// Topic totals: IB guide, printed p25. Labels and level scope: printed p26.
// Subtopic allocations below are editable teacher-planning estimates, not IB allocations.
const groups:[string,string,[string,number,number][]][]=[
 ['A1','Computer fundamentals',[['Computer hardware and operation',4,7],['Data representation and computer logic',4,4],['Operating systems and control systems',3,5],['Translation',0,2]]],
 ['A2','Networks',[['Network fundamentals',2,3],['Network architecture',3,4],['Data transmissions',3,5],['Network security',3,6]]],
 ['A3','Databases',[['Database fundamentals',2,3],['Database design',4,5],['Database programming',5,6],['Alternative databases and data warehouses',0,4]]],
 ['A4','Machine learning',[['Machine learning fundamentals',3,4],['Data preprocessing',0,4],['Machine learning approaches',0,7],['Ethical considerations',2,3]]],
 ['B1','Computational thinking',[['Approaches to computational thinking',5,5]]],
 ['B2','Programming',[['Programming fundamentals',8,8],['Data structures',8,9],['Programming constructs',10,10],['Programming algorithms',10,11],['File processing',4,4]]],
 ['B3','Object-oriented programming',[['Fundamentals of OOP for a single class',7,9],['Fundamentals of OOP for multiple classes',0,14]]],
 ['B4','Abstract data types',[['Fundamentals of ADTs',0,23]]],
 ['CS','Case study',[['Case study',15,30]]],
 ['IA','Internal assessment',[['The computational solution',35,35]]],
 ['CP','Collaborative sciences project',[['Collaborative sciences project',10,10]]]
];
export function curriculum(level:Level):Section[]{return groups.map(([id,title,rows])=>({id,title,items:rows.flatMap(([name,sl,hl],i)=>{const hours=level==='SL'?sl:hl;return hours?[{id:`${id}.${i+1}`,title:name,hours,hl:sl===0}]:[]})})).filter(s=>s.items.length)}
export type ProgressRecord={done:boolean;planned:number;taught:number};
export type ClassRecord={id:string;name:string;level:Level;minutes:number;progress:Record<string,ProgressRecord>};
export function getProgress(c:ClassRecord,item:Item):ProgressRecord{return c.progress[item.id]??{done:false,planned:item.hours,taught:0}}
export function metrics(c:ClassRecord){const items=curriculum(c.level).flatMap(s=>s.items);const rows=items.map(i=>getProgress(c,i));const planned=rows.reduce((a,r)=>a+r.planned,0);return{count:items.length,done:rows.filter(r=>r.done).length,planned,taught:rows.reduce((a,r)=>a+r.taught,0),weighted:planned?rows.reduce((a,r)=>a+(r.done?r.planned:0),0)/planned*100:0,remaining:rows.reduce((a,r)=>a+Math.max(0,r.planned-r.taught),0)}}
