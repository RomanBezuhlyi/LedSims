var swiper = new Swiper('.partners__carousel', {
	slidesPerView: 1,
	spaceBetween: 15,
	navigation: {
		prevEl: '.partners__btn-prev',
		nextEl: '.partners__btn-next',
	},
	pagination: {
		el: '.partners__pagination',
		clickable: true,
	},
	breakpoints: {
		480: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 5,
			spaceBetween: 11,
		},
	},
})
