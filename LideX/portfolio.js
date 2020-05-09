$(function() {
	for(var i = 0; i < 16; i++) {
		$("#container").append('<div class="items"><img id="photo_' + i + '" src="gallery/img/' + i + '.jpg" title="' + text[i] + '" height=100% /></div>');
	}
});