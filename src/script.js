(function() {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    // your size calculation code here
    $(document).ready(function() {
      $("#body").css("width", myWidth+1);
      $("#body").css("height", myHeight * 2+1);
      $("#bg").css("background-image", "linear-gradient(#007aff,#0046d1,#00349b)");
      $("#bg").css("height", myHeight);
      $("#product").css("background", "#00349b");
      $("#product").css("height", myHeight);
      $("#box1").css("background", "#ffffff");
    });
    console.log(myWidth + "x" + myHeight * 2);
  }
})();
