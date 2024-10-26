const panels = document.querySelectorAll(".panel");

//console.log(panel)

panels.forEach((panel) =>{
   panel.addEventListener("mouseover", () => {
    removerActiveClass();
    panel.classList.add('panelActive');
   })
})

function removerActiveClass(){
    panels.forEach((panel) => {
        panel.classList.remove('panelActive');
    })
}