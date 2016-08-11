$(document).ready(function(){
	var x=true;
    $("button").click(function(){
    	if (x) {
    		 $("#logo").removeClass('logo').addClass('miniLogo');
    		 $("#menu").removeClass('menu').addClass('miniMenu');
             $("#logoCol").removeClass('col-md-2').addClass('col-md-1');
             $("#menuCol").removeClass('col-md-2').addClass('col-md-1');
             $("#rightCol").removeClass('col-md-10').addClass('col-md-11');
             $("#right").removeClass('right').addClass('bigRight');
             
    		 x=false;
    	}
    	else{
    		$("#logo").removeClass('miniLogo').addClass('logo');
    		 $("#menu").removeClass('miniMenu').addClass('menu');
             $("#logoCol").removeClass('col-md-1').addClass('col-md-2');
             $("#menuCol").removeClass('col-md-1').addClass('col-md-2');
             $("#rightCol").removeClass('col-md-11').addClass('col-md-10');
             $("#right").removeClass('bigRight').addClass('right');
    		 x=true;
    	}

    });

    
    $(' #main li ').mouseenter(function() {
    $(this).children('ul').css({
        display: 'block'
       
    });
 });
    $(' #main li ').mouseleave(function() {
    $(this).children('ul').css({
        display: 'none'
       
    });
 });
    $("#main li").hover(function(){
        $(this).css("background-color", "#1F2B3D");
        }, function(){
        $(this).css("background-color", "#26344B");
    });



     });

