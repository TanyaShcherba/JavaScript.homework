const month = prompt('month')
const year = prompt('year')

const date = new Date(+year - 1, +month, 0);
const months = [
    'Выберите месяц',
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
const years = getDates()

const yearSelector = document.querySelector('header.header select[name=years]');
const monthSelector = document.querySelector('header.header select[name=month]');

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector('div.days');

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0).getDate();
  
  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  document.querySelector('div.date h1').textContent = `${months[date.getMonth() + 1]} ${date.getFullYear() + 1}`;
  document.querySelector('div.date p').innerHTML = new Date().toDateString();

  let days = '';

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class='prev-date'>${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate() 
      && date.getMonth() === new Date().getMonth()) {
        days += `<div class='today'>${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class = 'next-date'>${j}</div>`;
    monthDays.innerHTML = days;
  }  
};

document.querySelector('i.prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector('i.next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

document.querySelector('i.prev-year').addEventListener('click', () => {
  date.setFullYear(date.getFullYear() - 1)
  renderCalendar();
})

document.querySelector('i.next-year').addEventListener('click', () => {
  date.setFullYear(date.getFullYear() + 1)
  renderCalendar();
})

function insertValuesInSelect(){
  fillSelector(monthSelector, months);
  fillSelector(yearSelector, years);

  yearSelector.addEventListener('click', checkButtonCreate);
  monthSelector.addEventListener('click', checkButtonCreate);
}

function checkButtonCreate(){
  document.querySelector('button.create-button').disabled =
    !years.indexOf(yearSelector.value) ||
    !months.indexOf(monthSelector.value);
}

function fillSelector(select, array) {

  for (let i = 0; i < array.length; i++) {
      select.append(new Option(array[i], array[i]));
  }

}

function getDates(){
  const years = [];
  years.push('Выберите год');
  const newDate = new Date();

  for (let i = 0; i < 100; i++){
      years.push(newDate.getFullYear());
      newDate.setFullYear(newDate.getFullYear() - 1);
  } 

  return years;
}


insertValuesInSelect();
renderCalendar();