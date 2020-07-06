var acc = $(".accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      if($(this).hasClass("active")){

      }else{
        acc.removeClass("active")
        $(this).addClass("active");
        var allPanels = acc.next();
        var panel = $(this).next();

        allPanels.css("max-height", "0px")
        console.log(panel.prop('scrollHeight') + "px")
        panel.css("max-height", panel.prop('scrollHeight') + "px") ;
      }
    
  });
}