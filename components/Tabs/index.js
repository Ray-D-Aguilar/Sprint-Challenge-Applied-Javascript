// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const mainTab = document.querySelector('.topics')

function createTab(arr) { //function named createTab with one parameter


    arr.forEach(data => { //for each item in the parameter...


        const tab = document.createElement('div'); //you have a variable called tab assigned the value of a new div element


        tab.classList.add('tab');  //your new div element is given the new class of 'tab'


        tab.textContent = data; //use the string values from the array and apply the text to the tab

        mainTab.appendChild(tab); // append the new values to <div class="topics"></div>
    });
}



axios //JS library
    .get(`https://lambda-times-backend.herokuapp.com/topics`) //get request
    .then((response) => {  //promise with a response cb

        console.log("success", response); //console a string of "success" if the promise is successful
        console.log("the array we need", response.data.topics); // console a string of "the array we need" with the data.topics values


        createTab(response.data.topics); //data.topic values used as arguments for the component

    })
    .catch((err) => { // error cb

        console.log("Error: The data has not returned.", err); //if the promise is a failure, the string of "Error:..." is logged"

    });