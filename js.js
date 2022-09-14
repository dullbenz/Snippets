// Using Custom Events, Dispatching custom events

// Create the Custom Event
const cutomHover = new CustomEvent(
  'customhover', 
  { bubbles: true, detail: 'red' }
);

// We can also create a legacy event to be dispatched
const clickEvent = new Event('click', {bubbles: true});

// Add event handlers to handle the events to be dispatched
someEl.addEventListener('customhover', () => { // do Something here });
someEl.addEventListener('click', () => { // do another thing here });

// Dispatch the event you just created
someEl.dispatchEvent(customHover);  // someEl is an HTMLDOM element which can be gotten from document.querySelector()
someEl.dispatchEvent(clickEvent);
