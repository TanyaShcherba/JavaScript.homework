     function checkSurname() {
        const surname = prompt(`Введите фамилию пользователя:`, `Фамилия`);
        if(!surname
        || surname.length <= 3 
        || surname.length >= 100)
        {
            alert(`Введите фамилию правильно (больше 4 символов)`)
            return false;
        }
        else {
            return surname;
        }
    }

    function checkName() {
        const name = prompt(`Введите имя пользователя:`, `Имя`);
        if(!name 
        || name.length <= 3 
        || name.length >= 100) {
            alert(`Введите имя правильно (больше 4 символов)`)
            return false;
        }
        else {
            return name;
        }
    }

    function checkMiddlename() {
        const middlename = prompt(`Введите отчество пользователя`, `Отчество`);
        if (!middlename
        || middlename.length <= 3 
        || middlename.length >= 100) {
            alert(`Введите имя правильно (больше 4 символов)`)
            return false;
        }
        else {
            return middlename;
        }
    }

    function checkAge() {
        const age = prompt(`Сколько вам лет?`, 18);
        if(!age
        || age.length === 0 
        || age.length > 2) {
            alert(`Введите возраст правильно (не больше 2 символов)`)
            return false;
        }
        else {
            return age;
        }
    }
    const surname = checkSurname();
    const name = checkName();
    const middlename = checkMiddlename();
    const age = checkAge();

    const sex = confirm(`Ваш пол мужской? (ОК = да, ОТМЕНА = нет)`);

    alert(`Ваше ФИО: ${surname} ${name} ${middlename}
    Ваш возраст в годах: ${age}`)


    const ageInDays = 365 * age;
    alert(`Ваш возраст в днях: ${ageInDays}`);

    if(age < 18) {
        alert(`Вы не совершеннолетний`);
    }
    else {
        alert(`Вы уже совершеннолетний`);
    }

    if(sex) {
        alert(`Ваш пол: мужской`);
    }
    else {
        alert(`Ваш пол: женский`);
    }

    if(ageInDays >= 60) {
        alert(`Вы уже на пенсии: да`)
    }
    else {
        alert(`Вы уже на пенсии: нет`)
    }




