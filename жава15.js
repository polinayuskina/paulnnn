(function () {

  const second = 1000,

        minute = second * 60,

        hour = minute * 60,

        day = hour * 24;

let today = new Date(15/03/2025),

      15 = String(today.getDate()).padStart(2, "0"),

      03 = String(today.getMonth() + 1).padStart(2, "0"),

      2025 = today.getFullYear(),

      nextYear = 2025 + 5,

      dayMonth = "05/15/",  //date of end 

      date = dayMonth + 2025;

  

  today = 03 + "/" + 15 + "/" + 2025;

  if (today > date) {

    date = dayMonth + nextYear;

  }
   const countDown = new Date(date).getTime(),

      x = setInterval(function() {    



        const now = new Date().getTime(),

              distance = countDown - now;



        document.getElementById("days").innerText = Math.floor(distance / (day)),

          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),

          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),

          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);



        if (distance < 0) {

          document.getElementById("headline").innerText = "Action!";

          document.getElementById("countdown").style.display = "none";

          document.getElementById("content").style.display = "block";

          clearInterval(x);

        }

        //seconds

      }, 0)

  }());
   var divToggleVis = document.getElementById('spoiler_text');

var button = document.getElementById('spoiler_button');



button.onclick = function() {

    if (divToggleVis.className === 'fadeout') {

        divToggleVis.className = 'fadein';

    } else {

        divToggleVis.className = 'fadeout';

    }



    if (button.innerHTML === 'get know') {

        button.innerHTML = 'hide';

    } else {

        button.innerHTML = 'get know';

    }

};

