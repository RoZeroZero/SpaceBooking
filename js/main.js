let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

$(document).ready(function() {

    $("#book-park-1").click(function(e) {
      $.ajax({
        type: "POST",
        url: "/generator",
        data: { "length": $("input[name='length']").val() },
        success: function(string) {
          $("#the-string").show();
          document.getElementById("book-park-1").style.backgroundColor = '#F90077';
          $("#the-string input").val(string);
        }
      });
      e.preventDefault();
    });
});

