const inc=document.getElementById("inc");
const dec=document.getElementById("dec");
const res=document.getElementById("res");
const text=document.getElementById("text");

let count=0;

inc.onclick= () =>{
count+=1
text.textContent=count;
}

dec.onclick= () =>{
    count-=1
    text.textContent=count;
    }
res.onclick= () =>{
        count=0
        text.textContent=count;
        }

