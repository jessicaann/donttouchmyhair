
function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    $(".search-results-container").removeClass('hidden');
    var userSearchTerm = $(this).find('.js-query').val();
    getGeniusSearchData (userSearchTerm, displayGeniusSearchData);
  });
}

$(function(){watchSubmit();});



/*Yandex Get List of Languages*/
function getListLangs (callback) {
var getLangSettings = {
  url: "https://translate.yandex.net/api/v1.5/tr.json/getLangs?",
  key: "trnsl.1.1.20170502T035123Z.42da7472a927a423.30098ed9aeffb741e96cc5613005d8db93c70188",
  ui: "en",
  callback: "jsonp",
  method: "GET",
 }
$.ajax(getLangSettings);
}

function displayListLangs (data) {
	var resultElement = '';
	if (data.langs) {
		var keys = Object.keys(data.langs);
		keys.forEach(function(key) {
			resultElement += 
			'<option value="' + key + '">' + data.langs[key] + '</option>';
		}); 
	}
	$('.js-choose-lang').html(resultElement);
}

/*Yandex Translate*/
function getTranslation (callback) {
var translationURL ='https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20170502T035123Z.42da7472a927a423.30098ed9aeffb741e96cc5613005d8db93c70188';
var getTranslationSettings = {
  url: translationURL,
  data: {
  	format: text,
  	text: "Please don't touch my hair",
  	lang: en,
    options: 1,
  },
  method: "GET",
  callback: jsonp,
} 

$.ajax(getTranslationSettings);
};














