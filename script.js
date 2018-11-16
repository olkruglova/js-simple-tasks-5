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
    const all = Object.entries(cities);
    console.log(all);

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

