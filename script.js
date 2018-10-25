/*
task1: Даны два селекта. В первом находятся страны, во втором - города. Сделайте так, чтобы когда выбирается определенная страна - в другом селекте появлялись города этой страны. В абзац ниже пишите выбранную страну и город через запятую.
*/
(function () {
    let select1 = document.querySelector('.select1');
    let select2 = document.querySelector('.select2');
    let selectedCountry = document.querySelectorAll('.country');
    let citiesOfCountry = document.querySelectorAll('.city');
    let country;
    select1.addEventListener('change', function (){
        country = (select1.options[ select1.selectedIndex ].value);
        for (var j=0; j<citiesOfCountry.length; j++){
            if (citiesOfCountry[j].value == country) {
                select2.options[ select2.selectedIndex ].value == citiesOfCountry[j].value;
                citiesOfCountry[j].hidden = false;
            }else {
                citiesOfCountry[j].hidden = true;
            }
    }});
})();

/*var cityArr = {
	'aus': ['Мельбурн', 'Сидней', 'Аделаида', 'Брисбен', 'Хобарт'],
	'jap': ['Токио', 'Киото', 'Осака', 'Иокогама'],
	'sar': ['Кейптаун', 'Йоханесбург'],
}

var prime_select = document.getElementById('country');
prime_select.addEventListener('change', func);
prime_select.addEventListener('change', toParagraph);

var city_select = document.getElementById('cities');
city_select.addEventListener('change', toParagraph);

function func(){
	city_select.innerHTML = '';
	var selected_country = prime_select.value;
	for (var i = 0; i < cityArr[selected_country].length; i++) {
		var new_option = document.createElement('option');
		new_option.innerHTML = cityArr[selected_country][i];
		city_select.appendChild(new_option);
	}
}

var parag = document.querySelector('p');
function toParagraph() {
	parag.innerHTML = '';
	parag.innerHTML = prime_select.options[prime_select.selectedIndex].text + ', '
	+city_select.options[city_select.selectedIndex].text;
}
*/
