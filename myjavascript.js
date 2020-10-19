"use strict";

const inp = document.getElementById('inp1'),
      div = document.getElementById('div1'),
      div2 = document.getElementById('div2'),
      btn = document.getElementById('btn1');

 
function createList (titleText) {
    const title = document.createElement('h1');
    title.innerHTML = titleText;
    const newUl = document.createElement('ul');
    newUl.appendChild(title);
    div.appendChild(newUl);
    newUl.id = "todoList";
  }
  
  function createDoneList (titleText) {
    const title = document.createElement('h1');
    title.innerHTML = titleText;
    const newUl = document.createElement('ul');
    newUl.appendChild(title);
    div.appendChild(newUl);
    newUl.id = "doneList";
  }

  function createRejectList (titleText) {
    const title = document.createElement('h1');
    title.innerHTML = titleText;
    const newUl = document.createElement('ul');
    newUl.appendChild(title);
    div.appendChild(newUl);
    newUl.id = "rejectList";
  }

  function createListItem (taskText) {
    if (inp.value.length === 0) {
      return;
    }
    const todoListElement = document.getElementById('todoList');
    const newLi = document.createElement('li');
    todoListElement.appendChild(newLi);
    newLi.innerHTML += inp.value  + '<input type="checkbox" id="checkbox_check">' + '<button id="rejected">Reject</button>' ;
    let checkbox = newLi.getElementsByTagName("input");
    const reject = document.getElementById('rejected');
    checkbox = checkbox[0];
    checkbox.addEventListener('change', (event) => {
      if (!document.getElementById("doneList")) {
        createDoneList("Done");
      }
      const Li = event.target.parentElement;
      const doneList = document.getElementById("doneList");
      let todoList = document.getElementById("todoList");
      const isChecked = event.target.checked;
      if (isChecked == true ) {
        doneList.appendChild(Li);
        if (!todoList.getElementsByTagName("li").length) {
          div.removeChild(todoList);
        }
      }
      else {
        if (!document.getElementById("todoList")) {
        createList("todoList");
        todoList = document.getElementById("todoList");
      }
        todoList.appendChild(Li);
      }
      if (isChecked == false ) {
        todoList.appendChild(Li);
        if (!doneList.getElementsByTagName("li").length) {
          div.removeChild(doneList);
        }
      }
      else {
        if (!document.getElementById("doneList")) {
        createList("doneList");
        doneList = document.getElementById("doneList");
      }
        doneList.appendChild(Li);
      }
      });

      // reject.addEventListener('click', (event) => {
      //   const Li = event.target.parentElement;
      //   if (!document.getElementById("rejectList")) {
      //     createRejectList("Reject");
      //     rejectList.appendChild(Li);
      //   }
      // })
    };
    
  
    btn.addEventListener('click', () => {
    if (!document.getElementById("todoList")) {
      createList("todoList");
    }
    createListItem();
  });

 
    
    
  
