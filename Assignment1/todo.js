let listItem = document.getElementById("listItem");
let addButton = document.querySelector("#listItem + input");
// grab the elements 

let container = document.getElementById("container");
let ul = document.querySelector("ul");

//addButton.addEventListener('click', AddActivities);
// intialise checkbox as false or it is uncheck

let check = false;



addButton.onclick = (e) => {
  e.preventDefault();
  //create checkbox
  let checkbox = document.createElement('input');
  //create delete button
  let removebtn = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");
  // create the para element
  let li = document.createElement('li');
  // grab the value from input 
  li.innerText = listItem.value;

  removebtn.innerText = "Delete";
  // append the elements
  li.appendChild(removebtn);
  li.appendChild(checkbox);
  ul.appendChild(li);



  checkbox.addEventListener('click', (e) => {

    check = true;
    // if checkbox is checked 
    if (check === true) {
      //the line decorates with the line property
      li.style.textDecoration = "line-through";
      let checked = e.target.closest("li");
      ul.appendChild(checked);
    }
    removebtn.onclick = deleteIt;
  });

  function deleteIt(e) {

    let deleteitem = e.target.closest("li");
    deleteitem.remove();
  }
};