//window.onload = add100();


function add100() {
    const WIDTH = 20;
    const HEIGHT = 20;


    let container = document.getElementById("container");
    //context = document.getElementById("set").getContext("2d");
    for (var i = 0; i < 100; i++) {


        let box = document.createElement("div");
        box.className = "box";
        var colour = '#' + Math.round(0xffffff * Math.random()).toString(16);
        box.style.backgroundColor = colour;
        box.style.width = WIDTH;
        box.style.height = HEIGHT;

        box.style.left = Math.floor(Math.random() * 410) + "px";
        box.style.top = Math.floor(Math.random() * 410) + "px";
        box.addEventListener("mouseover", removeBox)


        container.appendChild(box);


    }

}
function removeBox(event){
  if (document.getElementById("container").childElementCount == 1){
    alert("Last One!");
    
  }
    event.target.remove();



}
