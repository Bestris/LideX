$(function() {
	//$(".content_box").html('<div class="photo"><img src="gallery/img/01.jpg" height=100%></div>');
	var s = [0, 1, 2, 3, 4, 5, 6];
	
	function refresh() {
		for(var i = 0; i < 7; i++) {
			$(".content_box").append('<div class="photo_container" id="img' + i + '"><img class="photo" src="gallery/img/' + s[i] + '.jpg" height=100%></div>');
		}
	}
	
	function rArrow() {
		for(var i = 0; i < 7; i++) {
			if(s[i] > 14) {
				s[i] = 0;
			}
			s[i]++;
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
});