const fs = require("fs");

let teststr = `3   4
4   3
2   5
1   3
3   9
3   3`;

const lst00 = (fs.readFileSync("./1.txt").toString()).trim().split("\n").map(v=>v.split(/\s+/).map(v=>parseInt(v)));
//const lst00 = teststr.trim().split("\n").map(v=>v.split(/\s+/).map(v=>parseInt(v)));

const lst1 = lst00.map(v=>v[0]).sort((a,b)=>a-b);
const lst2 = lst00.map(v=>v[1]).sort((a,b)=>a-b);
{
    let sum = 0;
    for(let i = 0; i < lst1.length; i++){
        sum += Math.abs(lst1[i]-lst2[i]);
    }
    
    console.log(sum);
}

{
    let sum = 0;
    let lptr = 0;
    let rptr = 0;
    while(lptr < lst1.length){
        const num = lst1[lptr];
        let lcnt = 0;
        while(lst1[lptr] === num){
            lcnt++;
            lptr++;
        }
        while(lst2[rptr] < num){
            rptr++;
        }
        let rcnt = 0;
        while(lst2[rptr] === num){
            rcnt++;
            rptr++;
        }
        //console.log(num, lcnt, rcnt);
        sum += lcnt * rcnt * num;
    }
    console.log(sum);
}

console.log(lst1, lst2);
