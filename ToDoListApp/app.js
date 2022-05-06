function addElement() {
    const contentInput = document.getElementById('name-input');
    let content = contentInput.value;
    if(!(content === "" || content === " " || content === "  " || content === "   ")){
        //
        const newDiv = document.createElement("li");
        newDiv.setAttribute('class', 'todo');

        const text = document.createElement("h3")
        text.setAttribute('class', 'text');
        const newText = document.createTextNode(content);

        const delBtn = document.createElement("button")
        delBtn.setAttribute('class', 'delbtn');
        const newDelBtn = document.createTextNode('✖');
        delBtn.onclick = function () {
            newDiv.remove();
        }

        const checkBtn = document.createElement("button")
        checkBtn.setAttribute('class', 'checkbtn');
        const newcheckBtn = document.createTextNode('✔');
        checkBtn.onclick = function () {
            newDiv.style.opacity = '30%'
        }

        delBtn.appendChild(newDelBtn);
        checkBtn.appendChild(newcheckBtn);
        text.appendChild(newText);
        newDiv.appendChild(text);
        newDiv.appendChild(delBtn);
        newDiv.appendChild(checkBtn);

        const currentDiv = document.getElementById("toDo");
        document.body.insertBefore(newDiv, currentDiv);
        document.getElementById('container').appendChild(newDiv);
    }
    contentInput.value = " "
}

// function delElement(){
//     console.log("delElement")
// }