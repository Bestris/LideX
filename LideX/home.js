$(function() {
	
	var s = [13, 14, 15, 0, 1, 2, 3];
	
	function refresh() {

		var order = s[3] + 1

		$("#img0").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[0] + '.jpg" height=100%></div>');
		$("#img1").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[1] + '.jpg" height=100%></div>');
		$("#img2").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[2] + '.jpg" height=100%></div>');
		$("#img3").html('<div class="photo_container"><img src="gallery/img/' + s[3] + '.jpg" height=100%></div>');
		$("#img4").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[4] + '.jpg" height=100%></div>');
		$("#img5").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[5] + '.jpg" height=100%></div>');
		$("#img6").html('<div class="photo_container"><img class="photo" src="gallery/img/' + s[6] + '.jpg" height=100%></div>');
		
		$("#container").html('<div class="info">' + text[s[3]] + '</div>');
		$(".order_info").html(order);
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

	refresh();
		
	$(".right_arrow").click(function() { rArrow() });
	$(".left_arrow").click(function() { lArrow() });
});