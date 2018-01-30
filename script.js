//parent1//
$(document).ready(function(){
 
 $(".parent1").hide();

 $(document).scroll(function(){
 	var user_scroll_height = $(this).scrollTop();
 	var offset = $(window).height();

 	if(user_scroll_height > offset){
 		$("insideBrother").fadeOut("slow");
 		$(".parent1").fadeIn("slow");
 	}else {
 		$(".insideBrother").fadeIn("slow");
 		$(".parent1").fadeOut("slow");
 	}
 });

});

//parent2//
$(document).ready(function(){
 
 $(".parent2").hide();

 $(document).scroll(function(){
 	var user_scroll_height = $(this).scrollTop();
 	var offset = $(window).height();

 	if(user_scroll_height > offset){
 		$(".parent1").fadeOut("slow");
 		$(".parent2").fadeIn("slow");
 	}else {
 		$(".parent1").fadeIn("slow");
 		$(".parent2").fadeOut("slow");
 	}
 });

});

//parent3//
$(document).ready(function(){
 
 $(".parent3").hide();

 $(document).scroll(function(){
 	var user_scroll_height = $(this).scrollTop();
 	var offset = $(window).height();

 	if(user_scroll_height > offset){
 		$(".parent2").fadeOut("slow");
 		$(".parent3").fadeIn("slow");
 	}else {
 		$(".parent2").fadeIn("slow");
 		$(".parent3").fadeOut("slow");
 	}
 });

});

//parent4//
$(document).ready(function(){
 
 $(".parent4").hide();

 $(document).scroll(function(){
 	var user_scroll_height = $(this).scrollTop();
 	var offset = $(window).height();

 	if(user_scroll_height > offset){
 		$(".parent3").fadeOut("slow");
 		$(".parent4").fadeIn("slow");
 	}else {
 		$(".parent3").fadeIn("slow");
 		$(".parent4").fadeOut("slow");
 	}
 });

});

//parent5//
$(document).ready(function(){
 
 $(".parent5").hide();

 $(document).scroll(function(){
 	var user_scroll_height = $(this).scrollTop();
 	var offset = $(window).height();

 	if(user_scroll_height > offset){
 		$(".parent4").fadeOut("slow");
 		$(".parent5").fadeIn("slow");
 	}else {
 		$(".parent4").fadeIn("slow");
 		$(".parent5").fadeOut("slow");
 	}
 });

});

//parent6//
$(document).ready(function(){
 
 $(".parent6").hide();

 $(document).scroll(function(){
 	var user_scroll_height = $(this).scrollTop();
 	var offset = $(window).height();

 	if(user_scroll_height > offset){
 		$(".parent5").fadeOut("slow");
 		$(".parent6").fadeIn("slow");
 	}else {
 		$(".parent5").fadeIn("slow");
 		$(".parent6").fadeOut("slow");
 	}
 });


});
$(document).ready(function(){
 
 $("parent7").hide();

 $(document).scroll(function(){
 	var user_scroll_height = $(this).scrollTop();
 	var offset = $(window).height();

 	if(user_scroll_height > offset){
 		$(".parent6").fadeOut("slow");
 		$("parent7").fadeIn("slow");
 	}else {
 		$(".parent6").fadeIn("slow");
 		$("parent7").fadeOut("slow");
 	}
 });

});

