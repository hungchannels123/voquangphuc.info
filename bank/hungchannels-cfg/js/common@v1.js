/*
------------
Url: thanhdieu.com
------------
*/
$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------
      Detect device mobile
    -------------------------------------------------------------------*/
    var isMobile = false; 
    if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    }
    else {
        $('html').addClass('no-touch');
        isMobile = false;
    }
	/*-----------------------------------------------------------------
      ScrollToTop
    -------------------------------------------------------------------*/	
    var scrollToTopButton = document.getElementById("scrollToTop");
    function checkScrollPosition() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 20) {
        scrollToTopButton.style.display = "flex";
      } else {
        scrollToTopButton.style.display = "none";
      }
    }
    checkScrollPosition();
    window.addEventListener("scroll", checkScrollPosition);
    scrollToTopButton.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    });

    /*-----------------------------------------------------------------
      Loaded
    -------------------------------------------------------------------*/

	var tweenTime = 4; //sec

	var master = new TimelineMax({delay: tweenTime-2});
	master.eventCallback('onComplete', function() {
		progressBar(); //Init progress bar
    });

	$('body, .js-img-load').imagesLoaded({ background: !0 }).always( function( instance ) {
	    preloader(); //Init preloader
    });

	function preloader() {
		var tl = new TimelineMax({paused: true});
		tl.set('.preloader', {
			opacity: '1'
		})
		.addLabel('first')
		.to('.preloader', .6, {
			delay: 1,
			opacity: '0',
			zIndex: '-1',
			ease: 'Power3.easeInOut'
		})
		.to('.circle-pulse', .5, {
			opacity: 0,
			ease: 'Power3.easeInOut'
		},'+=.5')
		.to('.preloader__progress span', 1, {
			width: '100%',
			ease: 'Power3.easeInOut'
		}, 'first+=.5');

        tl.duration(tweenTime).play();
     //   console.log(tl.endTime());
		return tl;
	};
    /*-----------------------------------------------------------------
      Hamburger
    -------------------------------------------------------------------*/

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
	    $('.inner-menu').toggleClass('is-active');
		$('body').toggleClass('open-menu');
    });
	

    /*-----------------------------------------------------------------
      Nav
    -------------------------------------------------------------------*/
    var $sideNavOpen = $('.hamburger');
    var tl = new TimelineMax({paused:true, reversed:true});

    if (window.matchMedia("(max-width: 580px)").matches) {
        $('.inner-menu').each(function(i) {
            tl.timeScale(1);
            tl.fromTo('.nav', 1.0, {
			    width: '0'
            }, {
			    width: '100%',
			    ease: Back.easeOut
		    })
            .staggerFrom('.nav__item', 0.2, {
                opacity: 0,
                x: 70,
                ease: Back.easeOut
            },0.06, '-=0.5');
        }); 
    } else {
        $('.inner-menu').each(function(i) {
            tl.timeScale(1);
            tl.fromTo('.nav', 1.0, {
			    width: '0'
            }, {
			    width: '100%',
			    ease: 'Bounce.easeOut'
		    })
            .staggerFrom('.nav__item', 0.2, {
                opacity: 0,
                x: 70,
                ease: Back.easeOut
            },0.06, '-=0.25');
        });  
    }
  
    $sideNavOpen.on('click', function() {
        tl.reversed() ? tl.play() : tl.reverse();	
    });
  
    /*-----------------------------------------------------------------
      Carousel
    -------------------------------------------------------------------*/	
    
	// Testimonials
	$('.js-carousel-review').each(function() {
		var carousel = new Swiper('.js-carousel-review', {
            slidesPerView: 2,
			spaceBetween: 30,
			//loop: true,
			grabCursor: true,
			watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
		        clickable: true
            },
			autoplay: {
                delay: 5000,
            },
			breakpoints: {
                991: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
		});
	});
	
	// Clients
	$('.js-carousel-clients').each(function() {
		var carousel = new Swiper('.js-carousel-clients', {
            slidesPerView: 4,
			spaceBetween: 30,
			//loop: true,
			grabCursor: true,
			watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
		        clickable: true
            },
			breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },				
                580: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },				
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
		});
	});
	
	
    /*-----------------------------------------------------------------
      Sticky sidebar
    -------------------------------------------------------------------*/

    function activeStickyKit() {
        $('.sticky-column').stick_in_parent({
            parent: '.sticky-parent'
        });

        // bootstrap col position
        $('.sticky-column')
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        });
    };
    activeStickyKit();

    function detachStickyKit() {
        $('.sticky-column').trigger("sticky_kit:detach");
    };

    //  stop sticky kit
    //  based on your window width

    var screen = 1200;

    var windowHeight, windowWidth;
    windowWidth = $(window).width();
    if ((windowWidth < screen)) {
        detachStickyKit();
    } else {
        activeStickyKit();
    }
    function Character() {
        var characters = 'abcdefghijklmnopqrstuvwxyz';
        var randomIndex = Math.floor(Math.random() * characters.length);
        return characters.charAt(randomIndex);
      }
      function Alphanumeric() {
        var alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var randomIndex = Math.floor(Math.random() * alphanumeric.length);
        return alphanumeric.charAt(randomIndex);
      }
      function Class() {
        var a = Math.floor(Math.random() * 10);
        var b = Array.from({ length: 2 }, Character).join('');
        var c = Array.from({ length: 5 }, Alphanumeric).join('');
        return '\u0074' + a + '\u0068\u0061\u006e\u0068' + a + '\u002d' + b + '\u002d\u0064' + a + '\u0069\u0065\u0075';
      }
      var td_tracks = document.querySelectorAll('*');
      td_tracks.forEach(function(element) {
        var randomClass = Class();
        element.classList.add(randomClass);
      });
      
    // windowSize
    // window resize
    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }
    windowSize();

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(window).resize(debounce(function(){
        windowSize();
        $(document.body).trigger("sticky_kit:recalc");
        if (windowWidth < screen) {
            detachStickyKit();
        } else {
            activeStickyKit();
        }
    }, 250));


    /*-----------------------------------------------------------------
      Progress bar
    -------------------------------------------------------------------*/
	function progressBar() {
	    $('.progress').each(function() {
		    var ctrl = new ScrollMagic.Controller();
		    new ScrollMagic.Scene({
                triggerElement: '.progress',
	            triggerHook: 'onEnter',
	            duration: 300
            })
            .addTo(ctrl)
		    .on("enter", function (e) {
			    var progressBar = $('.progress-bar');
                progressBar.each(function(indx){
                    $(this).css({'width': $(this).attr('aria-valuenow') + '%', 'z-index': '2'});
                });
		    });
        });
    }
    // function string(length) {
    //     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     let result = '';
    //     for (let i = 0; i < length; i++) {
    //       const randomIndex = Math.floor(Math.random() * characters.length);
    //       result += characters.charAt(randomIndex);
    //     }
    //     return result;
    //   }
    //     var headobf = document.head;
    //     var headtag = ['*'];
    //     headtag.forEach(function(tagName) {
    //       var elements = headobf.getElementsByTagName(tagName);
    //       for (var i = 0; i < elements.length; i++) {
    //         var element = elements[i];
    //         var j = string(20); 
    //         var warningobf = '\u0046\u0075\u0063\u006b\u0020\u0043\u006f\u0070\u0079\u002d\u0053\u006f\u0075\u0072\u0063\u0065 ' + j;
    //         element.setAttribute('\u0064\u0061\u0074\u0061\u002d\u006f\u0062\u0066', warningobf);
    //       }});
    /*-----------------------------------------------------------------
      Scroll indicator
    -------------------------------------------------------------------*/
    function scrollIndicator() {
        $(window).on('scroll', function() {
            var wintop = $(window).scrollTop(), docheight = 
            $(document).height(), winheight = $(window).height();
 	        var scrolled = (wintop/(docheight-winheight))*100;
  	        $('.scroll-line').css('width', (scrolled + '%'));
        });
    }
	
	scrollIndicator(); //Init
	
	
    /*-----------------------------------------------------------------
      ScrollTo
    -------------------------------------------------------------------*/
	
    function scrollToTop() {
        var $backToTop = $('.back-to-top'),
            $showBackTotop = $(window).height();
			
        $backToTop.hide();


        $(window).scroll( function() {
            var windowScrollTop = $(window).scrollTop();
            if( windowScrollTop > $showBackTotop ) {
                $backToTop.fadeIn('slow');
            } else {
                $backToTop.fadeOut('slow');
            }
        });
        
		$backToTop.on('click', function (e) {
            e.preventDefault();
            $(' body, html ').animate( {scrollTop : 0}, 'slow' );
        });
    }
	
	scrollToTop(); //Init


    /*-----------------------------------------------------------------
      Style background image
    -------------------------------------------------------------------*/	
  
    $('.js-image').each(function(){
        var dataImage = $(this).attr('data-image');
        $(this).css('background-image', 'url(' + dataImage + ')');
    });
    
	
    /*-----------------------------------------------------------------
      Autoresize textarea
    -------------------------------------------------------------------*/	

    $('textarea').each(function(){
        autosize(this);
    });


    /*-----------------------------------------------------------------
      Tooltip
    -------------------------------------------------------------------*/
	
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    /*-----------------------------------------------------------------
      Switch categories & Filter mobile
    -------------------------------------------------------------------*/	
  
    $('.select').on('click','.placeholder',function(){
      var parent = $(this).closest('.select');
      if ( ! parent.hasClass('is-open')){
          parent.addClass('is-open');
          $('.select.is-open').not(parent).removeClass('is-open');
      }else{
          parent.removeClass('is-open');
      }
    }).on('click','ul>li',function(){
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	
	    $('.filter__item').removeClass('active');
	    $(this).addClass('active');
	    var selector = $(this).attr('data-filter');
		
	    $('.js-filter-container').isotope({
	        filter: selector
	    });
	    return false;	
    });
   /* (function() {
        var currentUrl = window.location.href;
        if (currentUrl.indexOf('?') === -1) {
            window.location.href = currentUrl + '?thongtin-thanhtoan';
        } else {
        }
    })();
    */
    /*-----------------------------------------------------------------
      Masonry
    -------------------------------------------------------------------*/	
	
    // Portfolio
    var $portfolioMasonry = $('.js-masonry').isotope({
        itemSelector: '.gallery-grid__item',
	    layoutMode: 'fitRows',
        percentPosition: true,
	    transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        fitRows: {
            gutter: '.gutter-sizer'
        },	
        masonry: {
	        columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true
        }
    });
  
    $portfolioMasonry.imagesLoaded().progress( function() {
        $portfolioMasonry.isotope ({
	        columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true,
	        layoutMode: 'fitRows',
            fitRows: {
                gutter: '.gutter-sizer'
            }
	    });
    });	

	
    /*-----------------------------------------------------------------
      niceScroll
    -------------------------------------------------------------------*/		

    $('textarea').niceScroll({
		horizrailenabled:false
	});


    /*-----------------------------------------------------------------
      emoji add in textarea
    -------------------------------------------------------------------*/
	
    $(function() {
        $('.emoji-wrap img').on('click', function(){
            var emoji = $(this).attr('title');
            $('#commentForm').val($('#commentForm').val()+" "+emoji+" ");
        });
    });


    /*-----------------------------------------------------------------
	  mediumZoom
    -------------------------------------------------------------------*/
  
    mediumZoom('[data-zoom]', {
        margin: 30
    });

	
    /*-----------------------------------------------------------------
      Lazyload
    -------------------------------------------------------------------*/

    lazySizes.init();

	
    /*-----------------------------------------------------------------
      Polyfill object-fit
    -------------------------------------------------------------------*/	
	
    var $someImages = $('img.cover');
    objectFitImages($someImages);
	

    /*-----------------------------------------------------------------
      Contacts form
    -------------------------------------------------------------------*/

    
});
;(function(window) {
	"use strict";
	var defaultSetting = {
		icon: "https://i.imgur.com/2GcljEi.jpg",
		name: "VÆ°Æ¡ng Thanh Diá»‡u",
		info: "",
		z_index: 9999,
		blur: ".container",
		lang: "vi-VN",
		mini: true,
		darkmode: 1,
		maxWidth: "480px",
		fontFamily: "",
		closeDuration: 60000,
		defaultClosed: false,
		defaultLinkIcon: "fa-solid fa-paw",
		fontawesome: {
			"type": "svg",
			"CDN": "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/js/all.min.js"
		},
		hitokoto: {
			"enable": false,
			"cats": [],
			"color": "#70a1ff",
			"offline": "Developer"
		},
        iconLinks: [{
            "title": "Facebook",
            "url": "https://github.com/WusThanhDieu",
            "icon": "fa-brands fa-facebook",
            "target": "_blank"
        }, {
            "title": "My Blog",
            "url": "https://blog.thanhdieu.com",
            "icon": "fa-solid fa-blog"
        },],
        links: [{
            "title": "My Blog",
            "url": "https://blog.thanhdieu.com",
            "type": "primary",
            "target": "_blank"
        }, {
            "title": "My Github",
            "url": "https://github.com/WusThanhDieu",
        },],
    };
	var i18n = new Map([
        
		["vi-VN", {
			"close": "Đóng"
		}]
	]);
	var darkmode = [0, 1, 2, 3];
	var fontaCDN = ["https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/js/all.min.js",
		"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/all.min.css"
	]
	Object.freeze(defaultSetting);
	var WussunTeam = function(option, undefined) {
		return new WussunTeam.fn.init(option, undefined);
	};
	WussunTeam.prototype = WussunTeam.fn = {
		constructor: WussunTeam,

		init: function(option, undefined) {
			let _this = this;
			_this.help();
			_this._setting = extend({}, defaultSetting, option);
			let wussunCard = document.createElement("div");
			addClass("wussun-card_mask", wussunCard);
			wussunCard.style.zIndex = parseInt(_this._setting.z_index);
			let cardBox = document.createElement("div");
			addClass("wussun-card_box", cardBox);
			_this._setting.fontFamily != "" ? cardBox.style.fontFamily = _this._setting.fontFamily : "";
			cardBox.style.maxWidth = _this._setting.maxWidth;
			let cardIcon = document.createElement("div");
			addClass("wussun-card_icon", cardIcon);
			let img = document.createElement("img");
			img.setAttribute("src", _this._setting.icon);
			img.setAttribute("alt", _this._setting.name);
			cardIcon.appendChild(img);
			cardBox.appendChild(cardIcon);
			let cardName = document.createElement("div");
			addClass("wussun-card_title", cardName);
			cardName.innerText = _this._setting.name;
			cardBox.appendChild(cardName);
			let cardInfo = document.createElement("div");
			addClass("wussun-card_info", cardInfo);
			if (_this._setting.info != "") {
				let p = document.createElement("p");
				p.innerText = _this._setting.info;
				cardInfo.appendChild(p);
			}
			
			cardBox.appendChild(cardInfo);
		
			let iconList = document.createElement("div");
			addClass("wussun-card_icon-list", iconList);
			let iconLinks = _this._setting.iconLinks;
			for (let i = 0; i < iconLinks.length; i++) {
				let iconLink = document.createElement("a");
				let icon = document.createElement("i");
				addClass("wussun-card_icon-item", iconLink);
				iconLinks[i].title ? iconLink.setAttribute("title", iconLinks[i].title) : "";
				iconLinks[i].icon ? addClass(iconLinks[i].icon, icon) : addClass(_this._setting
					.defaultLinkIcon, icon);
				iconLink.appendChild(icon);
				iconLinks[i].target ? iconLink.setAttribute("target", iconLinks[i].target) : "";
				iconLinks[i].url && !iconLinks[i].func ? iconLink.setAttribute("href", iconLinks[i].url) :
					iconLink.setAttribute(
						"href", "javascript:void(0);");
				iconLinks[i].func && typeof iconLinks[i].func == 'function' ? iconLink.addEventListener(
					'click',
					iconLinks[i].func) : "";
				iconList.appendChild(iconLink);
			}
			if (iconLinks.length > 0) {
				let cdnType = _this._setting.fontawesome.type == "svg" ? "script" : "link";
				let newTag = document.createElement(cdnType);
				let script = document.getElementsByTagName("script")[0];
				if (cdnType == "script") {
					newTag.src = _this._setting.fontawesome.CDN.endsWith(".js") ? _this._setting.fontawesome
						.CDN : fontaCDN[0];
				} else {
					newTag.rel = "stylesheet";
					newTag.href = _this._setting.fontawesome.CDN.endsWith(".css") ? _this._setting
						.fontawesome.CDN : fontaCDN[1];
				}
				script.parentNode.insertBefore(newTag, script);
				cardBox.appendChild(iconList);
			}
			let cardBtnList = document.createElement("div");
			addClass("wussun-card_btn-list", cardBtnList);
			let links = _this._setting.links;
			for (let i = 0; i < links.length; i++) {
				let btn = document.createElement("a");
				addClass("wussun-card_btn", btn);
				links[i].type ? addClass("btn-" + links[i].type, btn) : addClass("btn-default", btn);
				links[i].type ? btn.setAttribute("btn-type", links[i].type) : btn.setAttribute("btn-type",
					"btn-default");
				links[i].target ? btn.setAttribute("target", links[i].target) : "";
				links[i].url && !links[i].func ? btn.setAttribute("href", links[i].url) : btn.setAttribute(
					"href", "javascript:void(0);");
				btn.innerText = links[i].title;
				links[i].func && typeof links[i].func == 'function' ? btn.addEventListener('click', links[i]
					.func) : "";
				cardBtnList.appendChild(btn);
			}
			let closeBtn = document.createElement("a");
			addClass("wussun-card_btn", closeBtn);
			addClass("btn-close", closeBtn);
			closeBtn.setAttribute("href", "javascript:void(0);");
			closeBtn.setAttribute("id", "wussun-card_close");
			closeBtn.setAttribute("btn-type", "btn-close");
			let lang = i18n.get(_this._setting.lang) ? _this._setting.lang : document.documentElement
				.lang !=
				"" ? document.documentElement.lang : defaultSetting.lang;
			closeBtn.innerText = i18n.get(lang) ? i18n.get(lang).close : i18n.get(defaultSetting.lang)
				.close;
			closeBtn.addEventListener("click", function() {
                wussunplay();
				_this.close();
                notyf.success("Đã thêm chút nhạc đỡ nhàm chán...");
			});
			cardBtnList.appendChild(closeBtn);
			cardBox.appendChild(cardBtnList);
			// darkmode
			let dmode = darkmode.includes(_this._setting.darkmode) ? _this._setting.darkmode :
				defaultSetting
				.darkmode;
			switch (dmode) {
				case 0:
					removeClass("darkmode", cardBox);
					break;
				case 1:
					window.matchMedia("(prefers-color-scheme: dark)").matches ? addClass("darkmode",
						cardBox) : "";
					break;
				case 2:
					let hour = new Date().getHours();
					hour < 6 || hour >= 18 ? addClass("darkmode", cardBox) : "";
					break;
				case 3:
					addClass("darkmode", cardBox);
				default:
					break;

			}
			wussunCard.appendChild(cardBox);
			let DoNotShowMGC = getCookie('DoNotShowMGC');
			if (DoNotShowMGC != "" && DoNotShowMGC != null && DoNotShowMGC == "yes") {
				addClass('hidden', wussunCard);
				this._closed = true;
			}
			if (this._setting.defaultClosed) {
				this._closed = true;
				addClass("closed", cardBox);
				addClass("hidden", wussunCard);
			}
			document.body.appendChild(wussunCard);
			if (_this._setting.mini == true) {
				let cardMini = document.createElement("div");
				addClass("wussun-card_mini", cardMini);
				if (this._setting.defaultClosed) {
					addClass("shown", cardMini);
				}
				let miniImg = document.createElement("img");
				miniImg.setAttribute("src", _this._setting.icon);
				cardMini.appendChild(miniImg);
				cardMini.style.zIndex = _this._setting.z_index;
				cardMini.addEventListener("click", function() {
					_this.open(() => {
						removeClass("shown", cardMini);
					});
				});
				if (DoNotShowMGC != "" && DoNotShowMGC != null && DoNotShowMGC == "yes") {
					addClass('shown', cardMini);
				}
				document.body.appendChild(cardMini);
			}
			let container = document.querySelectorAll(_this._setting.blur)[0];
			if (container != undefined) {
				if (DoNotShowMGC != "yes" && !this._setting.defaultClosed) {
					addClass("blur", container);

				}
			}

			this._GCard = wussunCard;
			return this;
		},

		getSetting: function() {
			return this._setting;
		},

		close: function(closecallback) {
			if (!this._closed) {
				this._closed = true;
			} else {
				console.warn("WussunTeam closed.");
				return;
			}
			let GCard = this._GCard;
			let cardBox = GCard.querySelectorAll(".wussun-card_box")[0];

			cardBox.addEventListener("animationend", cfun);
			// cardBox.removeEventListener("animationend", cfun);

			addClass("closed", cardBox);
			if (typeof closecallback == "function") {
				closecallback();
			}

			setCookie('DoNotShowMGC', 'yes', this._setting.closeDuration);

			let _this = this;

			function cfun() {
				addClass("hidden", GCard);
				let container = document.querySelectorAll(_this._setting.blur)[0];
				let cardMini = document.querySelectorAll(".wussun-card_mini")[0];
				if (container != undefined) {
					removeClass("blur", container);
				}
				cardMini != undefined ? addClass("shown", cardMini) : "";
				cardBox.removeEventListener("animationend", cfun);
			}
		},

		open: function(opencallback) {
			if (this._closed) {
				this._closed = false;
			} else {
				return;
			}
			setCookie('DoNotShowMGC', 'yes', -1000000);
			let GCard = this._GCard;
			let cardBox = GCard.querySelectorAll(".wussun-card_box")[0];
			let cardMini = document.querySelectorAll(".wussun-card_mini")[0];
			removeClass("hidden", GCard);

			removeClass("closed", cardBox);
			let container = document.querySelectorAll(this._setting.blur)[0];
			if (container != undefined) {
				addClass("blur", container);
			}
			cardMini != undefined ? removeClass("shown", cardMini) : "";
			if (typeof opencallback == "function") {
				opencallback();
			}
		},

		help: function() {
	
		}
	}

	function extend() {
		var length = arguments.length;
		var target = arguments[0] || {};
		if (typeof target != "object" && typeof target != "function") {
			target = {};
		}
		if (length == 1) {
			target = this;
			i--;
		}
		for (var i = 1; i < length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	}

	function hasClass(cla, element) {
		if (element.className.trim().length === 0) return false;
		let allClass = element.className.trim().split(" ");
		return allClass.indexOf(cla) > -1;
	}

	function addClass(cla, element) {
		if (!hasClass(cla, element)) {
			if (element.setAttribute) {
				let newClass = element.getAttribute("class") ? element.getAttribute("class") + " " + cla : cla;
				element.setAttribute("class", newClass);
			} else {
				element.className = element.className + " " + cla;
			}

		}
	}

	function removeClass(cla, element) {
		let classList = element.getAttribute("class").split(" ");
		for (let i = 0; i < classList.length; i++) {
			if (classList[i] == cla) {
				classList.splice(i, 1);
			}
		}

		element.setAttribute("class", classList.join(" "));

	}

	function setCookie(cname, cvalue, etime) {
		var d = new Date();
		d.setTime(d.getTime() + etime);
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i].trim();
			if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		}
		return "";
	}

	WussunTeam.fn.init.prototype = WussunTeam.fn;
	window.WussunTeam = WussunTeam;
	window.$MGC = WussunTeam;
	return this;
})(window);
var isDarkThemeEnabled = false;
document.addEventListener("DOMContentLoaded", function () {
	const notyf = new Notyf({
        position: {
          x: 'right',
          y: 'top',
        },
        duration: 3000,
        ripple: true,
        dismissible: true
      });
	var linkElement = document.getElementById("dark-style");
	var isDarkThemeEnabled = getDarkThemeCookie() === "true";
	if (isDarkThemeEnabled) {
		linkElement.removeAttribute("disabled");
	} else {
		linkElement.setAttribute("disabled", "disabled");
	}
	var moon_icon = document.querySelector(".corner-icon-moon");
	moon_icon.addEventListener("click", function () {
		isDarkThemeEnabled = !isDarkThemeEnabled;
		if (isDarkThemeEnabled) {
			notyf.success("Đã bật chế độ tối");
			linkElement.removeAttribute("disabled");
		} else {
			notyf.success("Đã bật chế độ sáng");
			linkElement.setAttribute("disabled", "disabled");
		}
		setDarkThemeCookie(isDarkThemeEnabled, 30);
	});
});

function getDarkThemeCookie() {
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i].trim();
		if (cookie.startsWith("darkTheme=")) {
			return cookie.substring("darkTheme=".length, cookie.length);
		}
	}
	return null;
}

function setDarkThemeCookie(value, expirationDays) {
	var expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + expirationDays);
	var expires = "expires=" + expirationDate.toUTCString();
	document.cookie = "darkTheme=" + value + "; " + expires + "; path=/";
}