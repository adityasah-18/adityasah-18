function openPage(pageName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tagcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "block";
  }
    document.getElementById("defaultOpen").click();

  //count down date
  var countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();
  var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("time").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(countdownfunction);
      document.getElementById("time").innerHTML = "EXPIRED";
    }
  }, 1000);
