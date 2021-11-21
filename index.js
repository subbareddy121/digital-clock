


var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var session=document.getElementById("session");

var clock = setInterval(
    function time(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      am_pm = "AM";
      

      if (hr > 12) {
        hr -= 12;
        am_pm = "PM";
    }
    if (hr == 0) {
        hr = 12;
        am_pm = "AM";
    }
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }
   

      hour.textContent = hr;
      minute.textContent = min;
      seconds.textContent = sec;
      session.textContent=am_pm;



    },1000
);




function changeimg(){
    var mo = document.getElementById("wakeup-time").value;
    var lu = document.getElementById("lunch-time").value;
    var na = document.getElementById("nap-time").value;

    var hour = new Date().getHours();
    console.log(hour);

    if(mo == hour){
        document.getElementById("lnch").style.backgroundImage = "url(br.jpg)";
        document.getElementById("lnch").innerText="It's time to Break Fast";
    }

    else if(lu == hour){
        document.getElementById("lnch").style.backgroundImage = "url(lnch.jpg)";
        document.getElementById("lnch").innerText="LET'S HAVE SOME LUNCH";
    }

    else if(na == hour){
        document.getElementById("lnch").style.backgroundImage = "url(dn.jpg)";
        document.getElementById("lnch").innerText="It's time to dinner";
    }

    else{
        document.getElementById("lnch").style.backgroundImage = "url(def.jpg)";
        document.getElementById("lnch").innerText="start your day";
    }


    printMessage();

}




function printMessage(){
    var msg = document.getElementById("unique");
    msg.style.display = "block";

    var wakeup = document.getElementById("wakeup-time");
    var value = wakeup.options[wakeup.selectedIndex].text;

    var lunch = document.getElementById("lunch-time");
    var value2 = lunch.options[lunch.selectedIndex].text;

    var nap = document.getElementById("nap-time");
    var value3 = nap.options[nap.selectedIndex].text;

    msg.innerText= "Wake up time is " + value + "\n" + "Lunch time is " + value2 + "\n" + "Dinner time is " + value3;
}