   
const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');

function handleInput(event) {
  // check for data that was inputtted and if there is a next input, focus it
  const input = event.target;
  if (input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
  }
}

function handlePaste(event) {
  const paste = event.clipboardData.getData('text');
  // loop over each input, and populate with the index of that string
  inputs.forEach((input, i) => {
    console.log(input);
    input.value = paste[i] || '';
  });
}

inputs[0].addEventListener('paste', handlePaste);

form.addEventListener('input', handleInput);