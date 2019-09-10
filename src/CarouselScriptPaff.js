$(document).ready(function(){
	var slideImages = [ {src: 'img/Paff_logo.png'},
	              		{src: 'img/paff_g1.png'},
	              		{src: 'img/paff_g2.png'},
	              		{src: 'img/paff_g3.png'} ]
	//var jR3DCarousel;
	
	jR3DCarousel = $('.jR3DCarouselGallery').jR3DCarousel({
		width: 480, 		/* largest allowed width */
		height: 320, 		/* largest allowed height */
		slides: slideImages /* array of images source */
	});
	
	var carouselCustomeTemplateProps =  {
	 		  width: 470, 				/* largest allowed width */
			  height: 272, 				/* largest allowed height */
			  slideLayout : 'fill',     /* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
			  animation: 'slide3D', 	/* slide | scroll | fade | zoomInSlide | zoomInScroll */
			  animationCurve: 'ease',
			  animationDuration: 1900,
			  animationInterval: 2000,
			  slideClass: 'jR3DCarouselCustomSlide',
			  autoplay: false,
			  controls: true,			/* control buttons */
			  navigation: ''			/* circles | squares | '' */,
			  perspective: 2200,
			  rotationDirection: 'ltr',
			  onSlideShow: slideShownCallback
				  
		}
	function slideShownCallback($slide){
		console.log("Slide shown: ", $slide.find('img').attr('src'))
	}

	jR3DCarouselCustomeTemplate = $('.jR3DCarouselGalleryCustomeTemplate').jR3DCarousel(carouselCustomeTemplateProps);

  })