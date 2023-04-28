const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});


/* animacion para que aparezcan los elementos
a medida que vamos haciendo scrool siempre y cuando
tenga la clase "animado"*/

let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i= 0; i < animado.length; i++ ){
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 400 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}
window.addEventListener('scroll',mostrarScroll);


/* animacion de menu hamburguesa*/
const nav = document.querySelector("#nav");

const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
})

/*Detalles de servicios */
const tabs = document.querySelectorAll('ul li');
const divs = document.querySelectorAll('.content > div');
tabs.forEach((tab) => {
    //Add click for each li
    tab.addEventListener("click", function (e) {
        tabs.forEach((tab) => {
            //On click remove class Active from all Li
            tab.classList.remove("active");
        });
        //Add Class Active On the li 
        e.currentTarget.classList.add("active");
        divs.forEach((div) => {
            //Display None for all content Divs on click
            div.style.display = 'none';
            //Select the div the contain the class of data-content and make it display flex
            document.querySelector('.' + e.currentTarget.dataset.content).style.display = 'flex';
        });
    });
})
