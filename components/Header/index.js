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

function Header(spanText1, h1Text, spanText2) {
    const div = document.createElement('div');
    const span1 = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');

    div.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    
    span1.textContent = spanText1;
    h1.textContent = h1Text;
    span2.textContent = spanText2;

    div.appendChild(span1);
    div.appendChild(h1);
    div.appendChild(span2);

    return div;
}

let headerCom = Header('SMARCH 28, 2019', 'Lambda Times', '98°');

console.log(headerCom);

let headerContainer = document.querySelector('.header-container');

console.log(headerContainer);

headerContainer.appendChild(headerCom);
