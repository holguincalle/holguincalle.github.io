$(document).ready(function(){
	

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.15;

		$('.bg, .bg2').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});

  var ancho = $(window).width();
  var icono= $("#menu")
  var padre = $("#padre")


  if (ancho < 800) {
  	icono.removeClass("menu")
  	padre.removeClass("padre")
  }


  $(window).on("resize", function(){
  	if($(this).width() > 800) {
  		icono.addClass("menu");
  		padre.addClass("padre");
  	}  else {
  		icono.removeClass("menu");
  		padre.removeClass("padre");
  	}
  });

});


$(function(){

  $('.submenu').click(function(){
	   $(this).children('.children').slideToggle(500);
	  });
});

$(document).ready(function(){

	$(".ir-arriba").click(function(){
		$("body, html").animate({
			scrollTop: "0px"
		},1000);
	});

	$(".inicio").click(function(){
		$("body, html").animate({
			scrollTop: "0px"
		},1000);
	});

	$(".productos2").click(function(){
		$("body, html").animate({
			scrollTop: "530px"
		},1000);
	});

	$(".nosotros").click(function(){
		$("body, html").animate({
			scrollTop: "1500px"
		},1000);
	});

	$(".contacto").click(function(){
		$("body, html").animate({
			scrollTop: "3000px"
		},1000);
	});


	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$(".ir-arriba").slideDown(300);
		} else {
			$(".ir-arriba").slideUp(300);
		}
	});


	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$(".header-logo2").css({
				'height': '50px'
			});
		} else {
			$(".header-logo2").css({
				'height': '100px'
			});
		}
	});


	$(".infop").click(function(){
		$(".infop1").slideToggle(1000);
	});

	$(".polity").click(function(){
		$(".polity1").slideToggle(1000);
	});

});

$(function() {
  $("#add").on("click", function() {
    var val = $("select").val();
    if(val !== '') {
     var elem = $("<li></li>").text(val);
     $(elem).append("<button class='rem'>X</button>");
     $("#mylist").append(elem);
     $("input").val("");
     $(".rem").on("click", function() {
      $(this).removeClass("list");
     });
    }
  });
});

$(function() {
  $(".white").click(function() {
    $(".white").addClass("white1");
    $(".black").removeClass("black1");
    $(".cafe").removeClass("cafe1");
  });


  $(".black").click(function() {
    $(".black").addClass("black1");
    $(".white").removeClass("white1");
    $(".cafe").removeClass("cafe1");
  });

  $(".cafe").click(function() {
    $(".cafe").addClass("cafe1");
    $(".white").removeClass("white1");
    $(".black").removeClass("black1");
  });
});