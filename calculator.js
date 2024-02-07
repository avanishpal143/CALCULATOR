document.addEventListener('DOMContentLoaded', function () {
  let inputField = document.querySelector('.input');
  let buttons = document.querySelectorAll('.button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => handleButtonClick(button.dataset.value));
  });

  document.addEventListener('keydown', (e) => {
    let key = e.key;
    
    if (key === "Enter") key = "="; // Map Enter key to "="

    // Check if the pressed key is a number, operator, or backspace
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '=', 'Backspace'];
    
    if (validKeys.includes(key)) {
      handleButtonClick(key);
    }
  });

  function handleButtonClick(value) {
    if (value === '=') {
      try {
        inputField.value = eval(inputField.value);
      } catch (error) {
        inputField.value = 'Error';
      }
    } else if (value === 'C') {
      inputField.value = '';
    } else if (value === 'Backspace') {
      // Remove the last character
      inputField.value = inputField.value.slice(0, -1);
    } else {
      // Check if the value is a number or operator
      const validInput = /^[0-9+\-*/.%]*$/;
      if (validInput.test(value)) {
        inputField.value += value;
      }
    }
  }
});
