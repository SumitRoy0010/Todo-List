let todoinput = document.getElementById("todo");
let text = document.querySelector(".text");
function todoadd() {
  if (todoinput.value == "") {
    alert("Please add some task");
  } else {
    let list = document.createElement("ul");
    list.innerHTML = `${todoinput.value} <i style="font-size:24px" class="fa">&#xf014;</i>`;
    //create element
    text.appendChild(list); //show element
    todoinput.value = "";
    list.querySelector("i").addEventListener("click", remove);
    function remove() {
      list.remove();
    }
  }
}
