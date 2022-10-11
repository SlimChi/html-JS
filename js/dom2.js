const radioButtons = document.querySelectorAll('input[name="text"]');
const btn = document.querySelector('#btn');

btn.addEventListener("click", () => {
  let selectedRadio;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedRadio = radioButton.value;
      break;
    }
  }
  // show the output:
  result.innerText = selectedRadio ? ` ${selectedRadio}` : `Veuillez selectionner un button`;
});




