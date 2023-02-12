var chkbx=document.getElementsByClassName('checkbox');
 var divs=document.getElementsByTagName('div');
 var clicks=addEventListener('click',function(event){
        console.log("working");
        if(chkbx[0].checked){
            divs[4].style.display="block";}
        if(chkbx[1].checked){
            divs[0].style.display="block";}
        if(chkbx[2].checked){
            divs[1].style.display="block";}
        if(chkbx[3].checked){
            divs[2].style.display="block";}
        if(chkbx[4].checked){
            divs[3].style.display="block";}
        if(chkbx[0].checked==false){
            divs[4].style.display="none";}
        if(chkbx[1].checked==false){
            divs[0].style.display="none";}
        if(chkbx[2].checked==false){
            divs[1].style.display="none";}
        if(chkbx[3].checked==false){
            divs[2].style.display="none";}
        if(chkbx[4].checked==false){
            divs[3].style.display="none";}
        

    })

    //code to show the selected elements which are selected by the user.
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