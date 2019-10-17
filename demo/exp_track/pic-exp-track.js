function expTrack(dom) {
	var isImgTrack = false;
	var img = new Image();
	img.src = dom.tbattr('data-src');
	dom.tbattr('src', img.src);
	img.onload = function() {
		findTrack();
		if (isImgTrack === false) {
			$(window).scroll(function() {
				if (isImgTrack === false) {
					findTrack();
				}
			});
		}
	};
	function findTrack() {
		var targetTop = dom.offset().top;
		var targetBottom = dom.offset().top + dom.height();
		var windowTop = $(window).scrollTop() + $('顶部元素').outerHeight();
		var windowBottom = $(window).scrollTop() + $(window).height();
		if (
			(windowTop < targetTop && targetTop < windowBottom) ||
			(targetBottom > windowTop && windowBottom > targetBottom)
		) {
			console.log('曝光成功');
			isImgTrack = true;
		}
	}
}
