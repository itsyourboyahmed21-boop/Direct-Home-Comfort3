jQuery(window).load(function() 
  {
	  jQuery(window).scroll(function () {            
    if (jQuery(window).scrollTop() > 500) {
        jQuery(".top-headers").addClass("MenuFixed");                
    } else {
        jQuery(".top-headers").removeClass("MenuFixed");
    }

});
	
	const header = document.querySelector('.top-header');
    const placeholder = document.querySelector('.height-placeholder');

    const headerOffset = header.offsetTop;
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function () {
        if (window.scrollY >= headerOffset) {
            if (!header.classList.contains('fixed')) {
                header.classList.add('fixed');
                placeholder.style.height = headerHeight + 'px';
            }
        } else {
            header.classList.remove('fixed');
            placeholder.style.height = '0px';
        }
    });
});

$( document ).ready(function() {	
jQuery('#brandLogoSlider').owlCarousel({
    loop:true,
    margin:10,
	dots:false,
	lazyLoad:true,
	lazyLoadEager:2,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	smartSpeed:1000,
    responsive:{
        0:{
            items:2,
            nav:true,
            loop:true,
			mouseDrag:false
        },
		576:{
            items:3,
            nav:true,
            loop:true,
			mouseDrag:false
        },
		768:{
            items:3,
            nav:true,
            loop:true,
			mouseDrag:false
        },
        992:{
            items:4,
            nav:true,
            loop:true,
			mouseDrag:false
        },
        1500:{
            items:5,
            nav:true,
            loop:true,
			margin:100,
			mouseDrag:false
        }
    }
});
jQuery('#offerSlider').owlCarousel({
    loop:true,
    margin:50,
	center: true,
	mouseDrag:true,
	dots:false,
	lazyLoad:true,
	autoWidth:true,
	lazyLoadEager:2,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	smartSpeed:1000,
    responsive:{
		 0:{
            items:1,
			loop:true,
			center: false,
			 autoWidth:false,
        },
		576:{
            items:2,
			loop:true,
			 autoWidth:false,
        },
		768:{
            items:2,
            loop:true
        },
        992:{
            items:4,
            loop:true,
        },
        1500:{
            items:4,
            loop:true,
        }
    }
});
	
	
jQuery('#bannerSider').owlCarousel({
    loop:true,
	 items:1,
	mouseDrag:true,
	dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	smartSpeed:2000,
});
jQuery('#promotionSlider').owlCarousel({
    loop:true,
	 items:1,
	mouseDrag:true,
	dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	smartSpeed:2000,
	margin:24,
});

	
});