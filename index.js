const numb = document.getElementById('p1');
const inc = document.getElementById('incbtn');
const res = document.getElementById('rebtn');
const dec = document.getElementById('decbtn');
let count = 0;

inc.onclick = function(){
    count++;
    numb.textContent = count;
}
dec.onclick = function(){
    count--;
    numb.textContent = count;
}
res.onclick = function(){
    count = 0;
    numb.textContent = count;
}
