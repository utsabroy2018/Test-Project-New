

$(function(){
	var w_height = $(window).height();
	var header_h = $('#header_height').height();
	//var midle_height = $('#midle_sec').height();
	//alert(f_height);
    //$('#content').css({'height':w_height-(h_height + f_height)+'px','overflow-y':'auto'});
	$('#left_sec_id').css({'height':w_height+'px'});
	$('#midle_sec').css({'height':w_height+'px','overflow-y':'auto'});
	//$('#decrip_id').css({'height':w_height-(header_h)+'px','overflow-y':'auto'});
	
});