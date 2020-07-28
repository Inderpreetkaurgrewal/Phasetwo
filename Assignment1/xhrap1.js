//Store the URL of JSON file
let dealsSection = document.getElementById('deals');
let requestURL = 'https://inderpreetkaurgrewal.github.io/Lab8/impTasks.json';
// Create a XHR object
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
// send the request using send function
request.send();
// Add an event handler 
request.onload = function () {
  let impTasks = request.response;
  console.log(impTasks);
  dealInfo(impTasks);
};

function dealInfo(jsonObj) {
  let dealInfo = jsonObj['impTasks'];
  // Loopthrough every element
  for (let i = 0; i < dealInfo.length; i++) {
    // create HTML elements for the content
    let div = document.createElement('div');
    div.setAttribute('class', 'col-md-3');
    let description = document.createElement('h3');
    let time = document.createElement('p');
    let image = document.createElement('img');

    // Set the textContent property 
    image.setAttribute('src', 'https://inderpreetkaurgrewal.github.io/Lab8/images/' + dealInfo[i].image);
    image.setAttribute('alt', dealInfo[i].item);
    description.textContent = dealInfo[i].item;
    time.textContent = dealInfo[i].time;

    div.appendChild(description);
    div.appendChild(time);
    div.appendChild(image);
    dealsSection.appendChild(div);
  }
}























/*taskInfo(impTasks);
};

function taskInfo(jsonObj) {
    let taskInfo = jsonObj ['impTasks'];
    for(let i =0; i< taskInfo.length; i++)
    {
     let div = document.createElement('div');
     div.setAttribute('class', 'col-md-3');
     let description  = document.createElement('h3');
     let time  = document.createElement('p');
     let image = document.createElement('img');
     image.setAttribute('src', ''+ taskInfo[i].image);
     image.setAttribute('alt', taskInfo[i].item);
     description.textContent = taskInfo[i].item;
     time.textContent = taskInfo[i].time;

     div.appendChild(description);
     div.appendChild(time);
     div.appendChild(image);
     dealsSection.appendChild(div);
    }

}*/