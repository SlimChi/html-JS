let radioButtons = document.querySelectorAll('input[name="text"]');
let txtField = document.querySelector('input[name="txt"]');

function myFunction() {

  radioButtons.forEach(element => choix(element))

}

function choix(element) {
  if (element.checked) {
    console.log(element);
    console.log(txtField);
    txtField.setAttribute("value", element.getAttribute("value"));

  }
}
