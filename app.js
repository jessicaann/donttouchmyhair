
/*Yandex Get List of Languages*/
  function getListLangs(successCallback) {
    var getLangSettings = {
      url: "https://translate.yandex.net/api/v1.5/tr.json/getLangs",
      data: {
        key: "trnsl.1.1.20170502T035123Z.42da7472a927a423.30098ed9aeffb741e96cc5613005d8db93c70188",
        ui: "en"
      },
      jsonp: "callback",
      dataType: "jsonp",
      method: "GET",
      success: successCallback
    }
    $.ajax(getLangSettings);
  }
/* Yandex Display List of Languages Dropdown + Autocomplete */
  function displayListLangs (data) {
      console.log(data.langs);
      var languages = [];
      for(key in data.langs){
        languages.push({id: key, label: data.langs[key], value: key});
      }
      $('#typelanguages').autocomplete({
          source: languages,
          select: function(event, ui){
          console.log("selected: " + ui.item.value);
          getTranslation(ui.item.value, displayTranslation);
          getTranslationSongP1(ui.item.value, displayTranslationSongP1);
          getTranslationSongP2(ui.item.value, displayTranslationSongP2);
        }
      });
  }
/* Yandex Translate "Please do not Touch My Hair" */
  function getTranslation (language, successCallback) {
    var translationURL ='https://translate.yandex.net/api/v1.5/tr.json/translate';
    var getTranslationSettings = {
      url: translationURL,
      data: {
        key: "trnsl.1.1.20170502T035123Z.42da7472a927a423.30098ed9aeffb741e96cc5613005d8db93c70188",
      	format: "text",
      	text: "Do not touch my hair. Please.",
      	lang: language,
        options: 1,
      },
      jsonp: "callback",
      dataType: "jsonp",
      method: "GET",
      success: successCallback
    } 

    $.ajax(getTranslationSettings);
  };
/* Display "Please Do Not Touch My Hair" Translation on Page Two */
  function displayTranslation(data){
    console.log(data.text[0]);
    var transElement = 
    '<p class="first-trans">' + data.text[0] + '</p>';
    $(".first-trans").html(transElement);
  }
/* Yandex Translate Song Lyrics P1 */
  function getTranslationSongP1 (language, successCallback) {
    var translationURL ='https://translate.yandex.net/api/v1.5/tr.json/translate';
    var getTranslationSettings = {
      url: translationURL,
      data: {
        key: "trnsl.1.1.20170502T035123Z.42da7472a927a423.30098ed9aeffb741e96cc5613005d8db93c70188",
        format: "text",
        text: "Do not touch my hair. When it is the feelings I wear. Do not touch my soul. When it is the rhythm I know. Do not touch my crown. They say the vision I've found. Do not touch what's there. When it is the feelings I wear. They do not understand. What it means to me. Where we chose to go. Where we have been to know. They Do not understand. What it means to me. Where we chose to go. Where we have been to know. You know this hair is my shit. Rolled the rod, I gave it time. But this here is mine. You know this hair is my shit. Rolled the rod, I gave it time. But this here is mine. What you say, oh. What you say to me? What you say to me? What you say to me? What you say to me? What you say to me? What you say to me? What you say to me? What you say to me?",
        lang: language,
        options: 1,
      },
      jsonp: "callback",
      dataType: "jsonp",
      method: "GET",
      success: successCallback
    } 

    $.ajax(getTranslationSettings);
  };
  /* Yandex Translate Song Lyrics P2 */
  function getTranslationSongP2 (language, successCallback) {
    var translationURL ='https://translate.yandex.net/api/v1.5/tr.json/translate';
    var getTranslationSettings = {
      url: translationURL,
      data: {
        key: "trnsl.1.1.20170502T035123Z.42da7472a927a423.30098ed9aeffb741e96cc5613005d8db93c70188",
        format: "text",
        text: "Don't touch my pride. They say the glory's all mine. Don't test my mouth. They say the truth is my sound. They don't understand. What it means to me. Where we chose to go. Where we've been to know. You know this hair is my shit. Rolled the rod, I gave it time. But this here is mine. You know this hair is my shit. Rolled the rod, I gave it time. But this here is mine. What you say, oh. What you say to me? (x8)",
        lang: language,
        options: 1,
      },
      jsonp: "callback",
      dataType: "jsonp",
      method: "GET",
      success: successCallback
    } 
    $.ajax(getTranslationSettings);
  };

  /* Display Lyrics P1 Translation on Page Three */
  function displayTranslationSongP1(data){
    console.log(data.text[0]);
    var transElement = 
    '<p class="second-trans-p1 translated-lyrics hidden">' + data.text[0] + '</p>';
    $(".second-trans-p1").html(transElement);
  }
  /* Display P2 Translation on Page Three */
  function displayTranslationSongP2(data){
    console.log(data.text[0]);
    var transElement = 
    '<p class="second-trans-p2 translated-lyrics hidden">' + data.text[0] + '</p>';
    $(".second-trans-p2").html(transElement);
  }
/* Ready Functions */
  function watchPageLoad() {
    getListLangs(displayListLangs);
    getTranslation(displayTranslation);
  }
  $(watchPageLoad);

 $(".orig-button").click(function() {
      $(".original-lyrics").removeClass("hidden");
  });
  $(".trans-button").click(function() {
      $(".translated-lyrics").removeClass("hidden");
  });

/*YouTube Video API*/

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
  videoId: 'YTtrnDbOQAU',
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
});}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for twenty seconds and then stop.

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 20000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}









