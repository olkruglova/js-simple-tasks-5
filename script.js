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
/*
task3. Реализуйте калькулятор валют. Есть два селекта - селект с исходной валюты, селект с той валютой, в которую мы хотим перевести деньги, инпут, в который вводится сумма для обмена. Курсы валют храните в массиве. Сделайте так, чтобы в селектах нельзя было выбрать две одинаковых валюты.
*/

$( document ).ready(function() {
    vals = {
        'PLN': 1.00,
        'USD': 3.80,
        'EUR': 4.34
    };

    $.each(vals, function( index, value ) {
        $('.val1').append('<option class="val" value="' + index + '">' + index + '</option>');
        $('.val2').append('<option class="val" value="' + index + '">' + index + '</option>');
    });
    $('.btn1').on('click', exchange);

    function exchange(){
        let val1 = document.querySelector('.val1').value;
        let val2 = document.querySelector('.val2').value;
        let amount = $('.input1').val();
        let result = document.querySelector('#result');
        if(val1 !== val2) {
            console.log('ok');
            let answer = vals[val1] / vals[val2] * amount;
            result.innerHTML = answer;
        } else {
            alert('Choose right currency!')
        }
    }
});

/*
task4. Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек)
*/
$( document ).ready(function() {
    $('.btn2').on('click', function (){
        let rows = $('.input-row').val();
        let cols = $('.input-col').val();
        let table = $('#table');

        table.children().remove();

        for (var r = 0; r < rows; r++) {
        table.append('<tr></tr>');
        console.log(document.getElementsByTagName('tr'));
        for (var c = 0; c < cols; c++) {
        table.children().last().append('<td></td>');
        };
        };
    });
});
/*
task5: Дан список и кнопка. По нажатию на кнопку посортируйте пункты списка по возрастанию
*/
$( document ).ready(function() {
    $('.btn3').on('click', function (){
        let list = $('#list');
        let numbers = [];

        $('.number').each(function(){
            numbers.push($(this).text());
        });
        list.children().remove();
        numbers.sort(function(a,b){return a-b});
        $.each(numbers, function(index, value){
            list.append('<li>' + value + '</li>');
        })
        $('.btn3').off('click');
    });
});
/*
task6: Дан ряд ссылок. Сделайте так, чтобы по нажатию на ссылку она становилась с красным фоном. По нажатию на другую ссылку выделение первой ссылки снимается и выделяется та, на которую мы нажали. В абзац ниже пишите текст активной ссылки
*/
$( document ).ready(function() {
    $('.link').on('click', function (){
        $('.link').css('background-color', 'white');
        $(this).css('background-color', 'red');
        let href = $(this).attr('href');
        $('.link-name').html('<span>' + href + '</span>')
    });
});