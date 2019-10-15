// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(spanText1, h1Text, spanText2) { //parameters that will be used as text for each element
    //Creating elements
    const div = document.createElement('div');
    const span1 = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');

    //Adding classes to each element
    div.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    //Adding text to elements
    span1.textContent = spanText1; //given value of parameters
    h1.textContent = h1Text;
    span2.textContent = spanText2;

    //Appending children to their parent element
    div.appendChild(span1);
    div.appendChild(h1);
    div.appendChild(span2);

    return div;
}

let headerCom = Header('SMARCH 28, 2019', 'Lambda Times', '98°'); //Adding strings to the arguments, which will be used in the component

console.log(headerCom); //Console.logging the component

let headerContainer = document.querySelector('.header-container'); //selecting the parent div

console.log(headerContainer); //console.logging the parent div

headerContainer.appendChild(headerCom);  //appending the contents of the component to the parent div
