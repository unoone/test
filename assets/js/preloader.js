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

  const startPreloader = () => {
    console.log("start");
    setTimeout(function() {
      $("div").addClass("loaded");
      $("#content").css("display", "flex");
      $("#wrapperForLoader").detach();
    }, 3000);
  };
  $("#startButton").click(e => {
    e.preventDefault();
    $("div").addClass("start");
    $("#wrapperForButton").css("display", "none");
    startPreloader();
  });
});
