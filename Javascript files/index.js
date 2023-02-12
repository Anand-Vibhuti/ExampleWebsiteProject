var navdesign=document.getElementsByClassName("nav");//getting elements of nav and putting them in navdesign
var navb=document.getElementsByClassName("pnav");//getting the elements of pnav and putting in navb

document.addEventListener('mouseover',function(event){
    console.log('working');
    
    for(var i=0;i<navdesign.length;i++){
    
    if(event.target==navdesign[i]){
   event.target.style.fontSize="18px";}
    
    }
})
document.addEventListener('mouseout',function(event){
    console.log('working');
    for(var i=0;i<navdesign.length;i++){
   
    if(event.target==navdesign[i]){
        event.target.style.fontSize="17px";}
         
    }
})
//code to increase the size of the font if the mouse hover over the elements of the nav bar