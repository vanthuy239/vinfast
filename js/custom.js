// JavaScript Document
$('#banner').owlCarousel({
 loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
//	nav:true,	// cho xuất hiện bộ nút tới lui 
})

$('#value-content').owlCarousel({
 loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
//	nav:true,	// cho xuất hiện bộ nút tới lui 
})

$('#dichvu').owlCarousel({
    loop:true,
	items: 3,
	smartSpeed: 1000,
    margin:30,
    nav:true,
  autoplay: true,
	autoplayTimeout: 5000,
	responsive:{
		0:{
			items: 1
		},
		600:{
			items: 2
		},
		1000:{
			items: 4
		}
	}
})