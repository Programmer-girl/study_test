function exposureTrack(options) {
	var self = this;
	var tidList = [];
	var tidOldList = [];
	var onceTidList = [];
	for (var i = 0; i < $('.j_thread_list').length; i++) {
		if (
			$('.j_thread_list')
				.eq(i)
				.data('tid') &&
			tidList.indexOf(
				$('.j_thread_list')
					.eq(i)
					.data('tid')
			) == -1
		) {
			tidList.push(
				$('.j_thread_list')
					.eq(i)
					.data('field')['id']
			);
		}
	}
	findTrack();
	$(window).scroll(self.throttle(findTrack, 10));
	setInterval(function() {
		pushTrack(options);
	}, 1000);
	function findTrack() {
		for (var j = 0; j < tidList.length; j++) {
			if (tidOldList.indexOf(tidList[j]) == -1 && onceTidList.indexOf(tidList[j]) == -1) {
				if ($(".j_thread_list[data-tid='" + tidList[j] + "']").length > 0) {
					// 判断类名是否存在
					var targetDom = $(".j_thread_list[data-tid='" + tidList[j] + "']").offset();
					if (
						(targetDom.top >= $(window).scrollTop() + 45 &&
							targetDom.top < $(window).scrollTop() + $(window).height()) ||
						(targetDom.top + targetDom.height >= $(window).scrollTop() + 45 &&
							targetDom.top + targetDom.height < $(window).scrollTop() + $(window).height())
					) {
						onceTidList.push(tidList[j]);
					}
				}
			}
		}
	}
	function pushTrack(options) {
		var param = {
			obj_floors: '',
			tids: '',
			obj_isads: '', //是否是广告
			thread_types: '',
		};
		if (onceTidList.length !== 0) {
			for (var i = 0; i < onceTidList.length; i++) {
				var thread_type = $(".j_thread_list[data-tid='" + onceTidList[i] + "']")
					.eq(0)
					.data('threadType');
				var floor = $(".j_thread_list[data-tid='" + onceTidList[i] + "']")
					.eq(0)
					.data('floor');
				if (i < onceTidList.length - 1) {
					param['obj_floors'] += floor + '|';
					param['thread_types'] += thread_type + '|';
					param['tids'] += onceTidList[i] + '|';
					param['obj_isads'] += 0 + '|';
				} else {
					param['obj_floors'] += floor;
					param['thread_types'] += thread_type;
					param['tids'] += onceTidList[i];
					param['obj_isads'] += 0;
				}
			}
			tidOldList = tidOldList.concat(onceTidList);
			onceTidList = []; // 清空单次list
			var task = '-';
			console.log(param);
		}
	}
}
function throttle(func, delay) {
	var prev = Date.now();
	return function() {
		var context = this;
		var args = arguments;
		var now = Date.now();
		if (now - prev >= delay) {
			func.apply(context, args);
			prev = Date.now();
		}
	};
}
