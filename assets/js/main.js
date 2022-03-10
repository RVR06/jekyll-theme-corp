var sectionHeight = function() {
    var total    = $(window).height(),
        $section = $('section').css('height','auto');
  
    if ($section.outerHeight(true) < total) {
      var margin = $section.outerHeight(true) - $section.height();
      $section.height(total - margin - 20);
    } else {
      $section.css('height','auto');
    }
  }
  
  $(window).resize(sectionHeight);
  
  $(function() {
    // Build dynamic ToC section
    $("section h2, section h3").each(function(){
      $("toc ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
      $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
      $("toc ul li:first-child a").parent().addClass("active");
    });
  
    $("toc ul li").on("click", "a", function(event) {
      var position = $($(this).attr("href")).offset().top - 190;
      $("html, body").animate({scrollTop: position}, 400);
      $("toc ul li a").parent().removeClass("active");
      $(this).parent().addClass("active");
      event.preventDefault();
    });
  
    sectionHeight();
  
    $('img').on('load', sectionHeight);
  });
  