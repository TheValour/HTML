let colour=true;
var ab="hell";
setInterval(()=>{
    d = new Date();
    hr =d.getHours();
    min =d.getMinutes();
    s =d.getSeconds();

    hrotation = 30*hr+min/2;
    mrotation = 6*min;
    srotation = 6*s;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;

    
},1000)

let btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    
    colour=false;
    ab="noooo";
    console.log(ab);
})
console.log(ab);

if(!colour){
    setInterval(()=>{
    document.body.style.background =`${'#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        },2000)
}