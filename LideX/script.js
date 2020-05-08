$(function() {
	var counter = 0;
	const PHOTO_NUM = 16;
	function refresh(n) {
		for(var i = 1; i <= 5; i++) {
			if(n < PHOTO_NUM) {
				$("#img" + i).attr("src", "gallery/img/" + n + ".jpg");
				n++;
			} else {
				n = 0;
				$("#img" + i).attr("src", "gallery/img/" + n + ".jpg");
				n++;
			}
		}
	}
	
	refresh(counter);
	
	$("#left_arrow").click(function() {
		if(counter > 0) {
			counter--;
		} else {
			counter = PHOTO_NUM - 1;
		}
		refresh(counter);
	});
	$("#right_arrow").click(function() {
		if(counter < PHOTO_NUM - 1) {
			counter++;
		} else {
			counter = 0;
		}
		refresh(counter);
	});
});