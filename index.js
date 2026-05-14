// ============================================
// SECTION 1 — DOM Targeting & Manipulation
// ============================================

// querySelector — finds the FIRST match and returns a single element
const sectionTitle = document.querySelector('#section-title');
console.log('Found by ID:', sectionTitle);

// change text content — always use textContent over innerHTML for plain text
// innerHTML can be a security risk if the content comes from user input
sectionTitle.textContent = 'Updated by JavaScript!';
sectionTitle.style.color = '#2c3e50';

// querySelectorAll — finds ALL matches and returns a NodeList
// a NodeList looks like an array but is missing methods like map and filter
const listItems = document.querySelectorAll('.list-item');
console.log('Found by class (NodeList):', listItems);
console.log('Is it an array?', Array.isArray(listItems)); // false

// forEach works on NodeLists — use it to loop through and style each item
listItems.forEach((item, index) => {
  item.style.color = index % 2 === 0 ? '#2980b9' : '#8e44ad';
  item.style.fontWeight = 'bold';
});

// createElement — creates a new element in memory, not yet on the page
// configure it first, then add it to the page
const newItem = document.createElement('p');
newItem.textContent = '✅ This paragraph was created by JavaScript';
newItem.style.color = '#27ae60';
newItem.style.marginTop = '8px';

// appendChild — places the element as the last child of the target
document.querySelector('#new-item-output').appendChild(newItem);

// removing an element — find it, then call removeChild on its parent
const firstItem = document.querySelector('.list-item');
console.log('Removing:', firstItem.textContent);
firstItem.parentNode.removeChild(firstItem);
// "Item One" is now gone from the page


// ============================================
// SECTION 2 — Events & Event Listeners
// ============================================

const clickBtn = document.querySelector('#click-btn');
const hoverBtn = document.querySelector('#hover-btn');
const eventOutput = document.querySelector('#event-output');

// onclick property — only ONE handler allowed per element
// adding a second one silently overwrites the first
clickBtn.onclick = () => console.log('onclick: first handler');
clickBtn.onclick = () => console.log('onclick: second handler overwrites first');

// ✅ addEventListener — preferred method
// allows MULTIPLE listeners on the same element
// keeps JavaScript completely separate from HTML
// gives full access to the event object
clickBtn.addEventListener('click', function(e) {
  // e is the event object — contains information about what happened
  console.log('Event type:', e.type);       // "click"
  console.log('Target element:', e.target); // the button that was clicked

  // e.target lets you read and modify the element that triggered the event
  e.target.style.backgroundColor = '#2c3e50';
  e.target.style.color = '#fff';
  e.target.textContent = 'Clicked!';

  eventOutput.textContent = 'Button was clicked! Check the console.';
  eventOutput.style.color = '#2c3e50';
});

// mouseover — fires when the cursor enters the element
hoverBtn.addEventListener('mouseover', function(e) {
  eventOutput.textContent = 'Hovering over: ' + e.target.textContent;
  eventOutput.style.color = '#8e44ad';
});

// mouseout — fires when the cursor leaves the element
hoverBtn.addEventListener('mouseout', function() {
  eventOutput.textContent = '';
});


// ============================================
// SECTION 3 — Attaching Listeners to Multiple Elements
// ============================================

const colorPreview = document.querySelector('#color-preview');

// querySelectorAll returns ALL buttons with class "color-btn"
const colorButtons = document.querySelectorAll('.color-btn');

// forEach loops through every button and attaches a listener to each
// we write this ONCE instead of four separate addEventListener calls
colorButtons.forEach((button) => {
  button.addEventListener('click', function(e) {
    // data-color is a custom data attribute on each button
    // dataset lets us read it — data-color="red" becomes dataset.color
    const color = e.target.dataset.color;

    // update the preview box with the selected color
    colorPreview.style.backgroundColor = color;
    colorPreview.style.color = '#fff';
    colorPreview.textContent = 'Selected color: ' + color;
  });
});

// converting a NodeList to an array — gives access to map, filter, reduce
const colorButtonsArray = Array.from(colorButtons);
console.log('NodeList is array?', Array.isArray(colorButtons));      // false
console.log('Converted is array?', Array.isArray(colorButtonsArray)); // true


// ============================================
// SECTION 4 — HTML Form
// ============================================

const profileForm = document.querySelector('#profile-form');

// preventDefault stops the default form behavior — page refresh on submit
// without this, the page reloads and all your JavaScript state is lost
profileForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // .value reads the current value of a text input or select
  const name = document.querySelector('#full-name').value;
  const email = document.querySelector('#email').value;

  console.log('Form submitted!');
  console.log('Name:', name);
  console.log('Email:', email);

  // reading radio button value — find the checked one using :checked selector
  const level = document.querySelector('input[name="level"]:checked').value;
  console.log('Level:', level);

  // reading checkboxes — get all checked ones and map their values
  const checkedInterests = document.querySelectorAll(
    'input[name="interests"]:checked'
  );
  const interests = Array.from(checkedInterests).map(cb => cb.value);
  console.log('Interests:', interests);
});


// ============================================
// SECTION 5 — Connecting Forms to the DOM
// ============================================

const generateBtn = document.querySelector('#generate-btn');
const cardOutput = document.querySelector('#card-output');

generateBtn.addEventListener('click', function() {
  // .value reads the current value from each input
  const name = document.querySelector('#card-name').value.trim();
  const role = document.querySelector('#card-role').value.trim();
  const color = document.querySelector('#card-color').value;

  // guard clause — exit early if required fields are empty
  // same early return pattern used in React handlers
  if (!name || !role) {
    cardOutput.textContent = 'Please fill in both name and role.';
    cardOutput.style.color = '#e74c3c';
    return;
  }

  // clear any previous card before building a new one
  // without this, cards stack up every time Generate is clicked
  cardOutput.innerHTML = '';
  cardOutput.style.color = '';

  // build the card using createElement — everything in memory first
  const card = document.createElement('div');
  card.style.backgroundColor = color;
  card.style.color = '#fff';
  card.style.padding = '20px';
  card.style.borderRadius = '8px';
  card.style.marginTop = '16px';
  card.style.maxWidth = '320px';

  // create and configure the heading
  const heading = document.createElement('h3');
  heading.textContent = name;
  heading.style.margin = '0 0 8px';

  // create and configure the role paragraph
  const rolePara = document.createElement('p');
  rolePara.textContent = role;
  rolePara.style.margin = '0 0 8px';
  rolePara.style.opacity = '0.85';

  // create a generated timestamp
  const timestamp = document.createElement('p');
  timestamp.textContent = 'Generated on: ' + new Date().toLocaleDateString();
  timestamp.style.margin = '0';
  timestamp.style.fontSize = '12px';
  timestamp.style.opacity = '0.7';

  // append all elements to the card, then append the card to the page
  card.appendChild(heading);
  card.appendChild(rolePara);
  card.appendChild(timestamp);
  cardOutput.appendChild(card);
});

// reset button — clear the card output when the form resets
document.querySelector('#reset-card-btn').addEventListener('click', function() {
  cardOutput.innerHTML = '';
  cardOutput.style.color = '';
});