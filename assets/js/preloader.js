/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

//Изначально у боди класс = nothing. При нажатии на конпку клаасс = start, и если старт то начнет выполняться функция и через 3000 секунд класс изменится на "loaded"
$(document).ready(function() {
  //const body = document.getElementsByTagName("body");
  function getRandomArbitary(min, max) {
    i = Math.random() * (max - min) + min;
    console.log(Math.floor(i));
    return Math.floor(i);
    // return Math.random() * (max - min) + min;
  }
  phrases = [
    "У паука боли..",
    "Хилииим",
    "Путен спаси помоги",
    "Отправляем гуманитарную помощь",
    "Вводим войска"
  ];
  const startPreloader = () => {
    console.log("start");
    setTimeout(function() {
      $("div").addClass("loaded");
      $("#content").css("display", "flex");
      $("#wrapperForLoader").detach();
      $("#helpPhrase").detach();
    }, 3000);
  };
  $("#startButton").click(e => {
    e.preventDefault();
    $("div")
      .removeClass("noth")
      .addClass("start");
    $("#wrapperForButton").css("display", "none");
    $("#helpPhrase").css("display", "flex");
    $("#helpPhrase").text(phrases[getRandomArbitary(0, phrases.length)]);
    startPreloader();
  });
});
