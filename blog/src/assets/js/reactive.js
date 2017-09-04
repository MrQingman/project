const html=document.querySelector("html");
const client_width=document.documentElement.clientWidth;
html.style.fontSize=client_width*0.1+'px';
window.onresize=function(){
    const client_width=document.documentElement.clientWidth;
    html.style.fontSize=client_width*0.1+'px';
}