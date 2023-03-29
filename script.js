let display = document.getElementById('result');

function addToDisplay(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}


function percent() {
  display.value = eval(display.value + '/100');
}


function sum() {
  let nums = display.value.split('+');
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += parseFloat(nums[i]);
  }
  display.value = sum;
}
