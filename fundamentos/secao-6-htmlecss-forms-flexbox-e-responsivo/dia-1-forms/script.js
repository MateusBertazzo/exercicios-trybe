const handSubmit = (event) => {
  event.preventDefault();
};

window.onload = () => {
const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click',handSubmit)

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearFields);
};

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    if(formElements[index].type === 'radio' || formElements[index].type === 'checkbox'){
      userInput.checked = false;
    } else {
      userInput.value = '';
    }
  }
  textArea.value = '';
}