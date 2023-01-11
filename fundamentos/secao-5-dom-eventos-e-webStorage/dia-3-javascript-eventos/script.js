const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    console.log(dayListItem)
    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth () {
  let getDaysList = document.querySelector('#days')
  for(let index = 0; index < decemberDaysList.length; index +=1) {
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    getDaysList.appendChild(dayItem);

    if(day === 24 || day === 31) {
      dayItem.className = 'day holiday';
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
    } else if (day === 25) {
      dayItem.className = 'day holiday friday'
    } else {
      dayItem.className = 'day'
    }
  }
}

createDaysOfTheMonth();

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let idButton = 'btn-holiday';
  newButton.innerHTML = buttonName;
  newButton.id = idButton;
  buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

const displayHolidays = () => {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'yellow';

  getHolidayButton.addEventListener('click', () => {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

displayHolidays();

