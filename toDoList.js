let list = document.getElementById('list'),
    todos;
if(localStorage.getItem('todos')){
  list.innerHTML=localStorage.getItem('todos');
}
const toLocal = () =>{
  todos=list.innerHTML;
  localStorage.setItem('todos',todos);
}

list.addEventListener('click', (ev) => {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
       toLocal();
    } 
    if(ev.target.tagName === "SPAN") {
      let div = ev.target.parentNode;
       div.remove();
       toLocal();
    }
    
}, false);

const newElement = () => {
  let li = document.createElement('li'),
     inputValue = document.getElementById('toDoEl').value;
     if(inputValue == "") {
      inputValue = "Пусто";
    } 
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    
       document.getElementById('list').appendChild(li);
    
    document.getElementById('toDoEl').value = "";
    let span = document.createElement('SPAN'),
     txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal();
}
