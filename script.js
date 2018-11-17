/*
task1: Даны два селекта. В первом находятся страны, во втором - города. Сделайте так, чтобы когда выбирается определенная страна - в другом селекте появлялись города этой страны. В абзац ниже пишите выбранную страну и город через запятую.
*/
(function () {
    let cities = {
        'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
        'Germany': ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Stuttgard'],
        'India': ['Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Ahmedabad']
    }
    let select1 = document.querySelector('.select1');
    let select2 = document.querySelector('.select2');
    const countries = Object.keys(cities);
    const citiesArr = Object.values(cities);
    for(var i=0; i<countries.length; i++){
        select1.innerHTML += select1.innerHTML = '<option class="country" value="' + countries[i] + '">' + countries[i] + '</option>';
    }

    for(var i=0; i<citiesArr[0].length; i++){
        select2.innerHTML += select2.innerHTML = '<option class="city" value="">' + citiesArr[0][i] + '</option>';

    }

    select1.addEventListener('change', function (){
        let activeCountry =  select1.options[ select1.selectedIndex ].value;
        select2.innerHTML = "";
        for(var j=0; j<cities[activeCountry].length; j++){
            select2.innerHTML += select2.innerHTML = '<option class="city" value="">' + cities[activeCountry][j] + '</option>';
        }
    });
})();


/*
task2: Сделайте селекты день, мес, год. Сделайте так, чтобы не корректную дату нельзя было выбрать (например, 30 февраля нельзя, а 30 марта можно или 29 февраля можно, но только в високосный год).
*/
$( document ).ready(function() {
    let years = document.querySelector('#year');
    let months = document.querySelector('#month');
    let days = document.querySelector('#day');
    var di = new Date();
    var year = di.getFullYear();
    let monthAndDays = {
        'January': 31,
        'Fabruary': 28,
        'March': 31,
        'April': 30,
        'May': 31,
        'June': 30,
        'July': 31,
        'August': 31,
        'September': 30,
        'October': 31,
        'November': 30,
        'December': 31
    }
    const month = Object.keys(monthAndDays);
    const day = Object.values(monthAndDays);
    let activeMonth;

    for (var i=1970; i<=year; i++) {
        years.innerHTML += years.innerHTML = '<option class="year" value="'+ i + '">' + i + '</option>';
    }
    for (var j=0;j<month.length; j++){
        months.innerHTML += months.innerHTML = '<option class="month" value="'+ j + '">' + month[j] + '</option>';
    }
    for (var k=1; k<=31; k++) {
        days.innerHTML += days.innerHTML = '<option class="year" value="'+ k + '">' + k + '</option>';
    }

    months.addEventListener('change', changeDays);
    years.addEventListener('change', changeDays);
    

    function changeDays () {
        activeMonth =  months.options[ months.selectedIndex ].value;
        days.innerHTML = '';
        if((activeMonth == 1) && (years.value % 4 == 0)) {
            day[activeMonth] = 29;
            for(var t=1; t<=day[activeMonth]; t++){
                days.innerHTML += days.innerHTML = '<option class="day" value="">' + t + '</option>';
            }
        } else
            for(var t=1; t<=day[activeMonth]; t++){
                days.innerHTML += days.innerHTML = '<option class="day" value="">' + t + '</option>';
            }
        }
});

