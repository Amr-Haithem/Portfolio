
const hamburger_container=document.querySelector('#burger')
const nav = document.querySelector('nav')
const section_1= document.querySelector('.section_1')
const normal_navbar_container=document.querySelector('.normal_navbar_container')



let i=0;

function printingInnerWidth(currentTime){
    let viewPortWidth=window.innerWidth;
    if(viewPortWidth<=700){
        hamburger_container.style.display="inline-block"

    }
    else{
        hamburger_container.style.display="none"

    }
    

    requestAnimationFrame(printingInnerWidth)

}

requestAnimationFrame(printingInnerWidth)

/*if(){
    console.log('hello world')
}
/*else{
    console.log('')
}*/

var toggle= false

hamburger_container.addEventListener('click',()=>{
    
    if(toggle!=true){
        let mobile_nav=document.createElement('DIV')
    section_1.insertAdjacentElement('afterbegin', mobile_nav)
    mobile_nav.classList.add('mobile_nav')
    mobile_nav.innerHTML=`
    <a>Home</a>
    <a>Projects</a>
    <a>Themes</a>
    <a>About me</a>

    `
    section_1.style.paddingTop="0"
    toggle=true
    }
    else{
        let mobile_nav =document.querySelector('.mobile_nav')
        mobile_nav.remove();
        section_1.style.paddingTop="30px";
        toggle=false
    }
})


function windowInnerwidth(timeNow){
    var viewPort_width=window.innerWidth;

    let mobile_nav = document.querySelector('.mobile_nav');


if(viewPort_width>=700 && mobile_nav!=null){
    mobile_nav.remove();
    
    section_1.style.paddingTop="30px";
    toggle=false;
    
    

}
else{
    
}
;



    requestAnimationFrame(windowInnerwidth)
}
requestAnimationFrame(windowInnerwidth)

