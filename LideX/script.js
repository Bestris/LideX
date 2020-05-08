$(function() {
	//$(".content_box").html('<div class="photo"><img src="gallery/img/01.jpg" height=100%></div>');
	var s = [13, 14, 15, 0, 1, 2, 3];
	
	function refresh() {
		$("#img0").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[0] + '.jpg" height=100%></div>');
		$("#img1").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[1] + '.jpg" height=100%></div>');
		$("#img2").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[2] + '.jpg" height=100%></div>');
		$("#img3").html('<div class="photo_container"><img src="gallery/img/' + s[3] + '.jpg" height=100%></div>');
		$("#img4").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[4] + '.jpg" height=100%></div>');
		$("#img5").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[5] + '.jpg" height=100%></div>');
		$("#img6").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[6] + '.jpg" height=100%></div>');
		
		$(".info").text(text[s[3]]);
		
		//var temp = $.ajax({
  		//	url: "gallery/info/3.txt",
  		//	async: false
 		//	}).responseText;
		//$(".info").load( "gallery/info/3.txt" );
		//alert(temp);
	}
	
	function rArrow() {
		for(var i = 0; i < 7; i++) {
			if(s[i] > 14) {
				s[i] = 0;
			}
			else{
				s[i]++;
			}
		}
		refresh();
	}
	function lArrow() {
		for(var i = 0; i < 7; i++) {
			if(s[i] < 1) {
				s[i] = 15;
			}
			 else {
			 	s[i]--;
			 }
		}
		refresh();
	}
	
	//for(var i = 1; i <= 7; i++) {
	//	if(i < 10) {
	//		var path = "0" + i;
	//		$(".content_box").append('<div class="photo_container" id="img' + i + '"><img class="photo" src="gallery/img/' + path + '.jpg" height=100%></div>');
	//	} else {
	//		$(".content_box").append('<div class="photo_container" id="img' + i + '"><img class="photo" src="gallery/img/' + i + '.jpg" height=100%></div>');
	//	}
	//}
	refresh();
	
	//var middle_img = Math.ceil(7 / 2);
	//$("#img" + middle_img).css("opacity");
	
	$(".right_arrow").click(function() { rArrow() });
	$(".left_arrow").click(function() { lArrow() });
});