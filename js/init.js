/*------------------------------------------------------------
    ULTRA MENU INIT
    [Please read documentation for additional Information] 
--------------------------------------------------------------*/

// Strict Mode
'use strict';

// Ultra Menu Initialisation
function ultraMenuInit(){

    // Panels Init
    if($('.u-left-panel1 .left-menu-wrapper').length){
    	
    	$('.u-left-panel1 .left-menu-wrapper').ultraMenu({

            // Panel Toggle Btn selector
            toggleBtn : '.left-panel-toggle',

            // Panel Class selectors
            // Closed link state
            closeClass : 'fa fa-angle-right',
            // Open link state
            openClass : 'fa fa-angle-down',

            //  Panel AJAX Settings
            ajaxLoad : false,
            ajaxContainer : '.content-panel',
            
            // Global Element +/- Classes
            globalElement: '#u-app-wrapper',

            // Collapse Panel ON/OFF
            collapsePanel: true,
            preCollapse: false,

            // Panel Width Settings
            panelWidth: 240,
            collapsePanelWidth: 50,

            // JS based Offcanvas Effect
            offCanvas: false,
            offCanvasSpeed: 200,
            offCanvasClass: 'offcanvas-mode',

            // Horizontal Mode
            horizontal: false,
            horizontalClass: 'panel-horizontal',

            // Animation
            animation: false,
            animationType: 'transfer',
            // Set false to use default value
            animationVar1: false,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: false,

            // Auto Focus
            focusOffset: -150,
            autoFocus: false,
            focusSpeed: 'slow',

            // Wide Panel
            wide: false,
            wideClass: 'panel-wide',

            // Show on hover
            showHover: false,

            // RTL Mode
            rtl: false

    	});
    }

    // offCanvas Init
    if($('.u-left-panel2 .left-menu-wrapper').length){
    	
    	$('.u-left-panel2 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // JS based Offcanvas Effect
            offCanvas: true,
            offCanvasSpeed: 200,
            offCanvasClass: 'offcanvas-mode'
    	});
	}

	// Pulsate Animation
    if($('.u-left-panel3 .left-menu-wrapper').length){
    	
    	$('.u-left-panel3 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // Animation
            animation: true,
            animationType: 'pulsate',
            // Set false to use default value
            animationVar1: 5,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: 470
    	});
	}

	// Shake Animation
    if($('.u-left-panel4 .left-menu-wrapper').length){
    	
    	$('.u-left-panel4 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

             // Animation
            animation: true,
            animationType: 'shake',
            // Set false to use default value
            animationVar1: false,
            // Set false to use default value
            animationVar2: 4,
            // Set false to use default value
            animationSpeed: 450
    	});
	}
	// Drop Animation
    if($('.u-left-panel5 .left-menu-wrapper').length){
    	
    	$('.u-left-panel5 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // Animation
            animation: true,
            animationType: 'drop',
            // Set false to use default value
            animationVar1: false,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: 470
    	});
	}
	// Puff Animation
    if($('.u-left-panel6 .left-menu-wrapper').length){
    	
    	$('.u-left-panel6 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: false,

             // Animation
            animation: true,
            animationType: 'puff',
            // Set false to use default value
            animationVar1: false,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: 550
    	});
	}

	// Bounce Animation
    if($('.u-left-panel7 .left-menu-wrapper').length){
    	
    	$('.u-left-panel7 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: false,

            // Animation
            animation: true,
            animationType: 'bounce',
            // Set false to use default value
            animationVar1: 90,
            // Set false to use default value
            animationVar2: 5,
            // Set false to use default value
            animationSpeed: false
    	});
	}
	// Bounce Animation
    if($('.u-left-panel8 .left-menu-wrapper').length){
    	
    	$('.u-left-panel8 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: false,

            // Animation
            animation: true,
            animationType: 'fold',
            // Set false to use default value
            animationVar1: '35%',
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: false
    	});
	}

	// Transfer Animation
    if($('.u-left-panel9 .left-menu-wrapper').length){
    	
    	$('.u-left-panel9 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // Animation
            animation: true,
            animationType: 'transfer',
            // Set false to use default value
            animationVar1: false,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: false
    	});
	}
	// Explode Animation
    if($('.u-left-panel10 .left-menu-wrapper').length){
    	
    	$('.u-left-panel10 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: false,

             // Animation
            animation: true,
            animationType: 'explode',
            // Set false to use default value
            animationVar1: 16,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: 550
    	});
	}
	// Clip Animation
    if($('.u-left-panel11 .left-menu-wrapper').length){
    	
    	$('.u-left-panel11 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: false,

            // Animation
            animation: true,
            animationType: 'clip',
            // Set false to use default value
            animationVar1: false,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: 400
    	});
	}

	// Opacity Animation
    if($('.u-left-panel12 .left-menu-wrapper').length){
    	
    	$('.u-left-panel12 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // Animation
            animation: true,
            animationType: 'opacity',
            // Set false to use default value
            animationVar1: false,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: 650
    	});
	}

	// Highlight Animation
    if($('.u-left-panel13 .left-menu-wrapper').length){
    	
    	$('.u-left-panel13 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // Animation
            animation: true,
            animationType: 'highlight',
            // Set false to use default value
            animationVar1: false,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: false
    	});
	}

	 // Boxed View
    if($('.u-left-panel14 .left-menu-wrapper').length){
    	
    	$('.u-left-panel14 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // JS based Offcanvas Effect
            offCanvas: true,
            offCanvasSpeed: 200,
            offCanvasClass: 'offcanvas-mode'
    	});
	}
	 // Show on hover
    if($('.u-left-panel15 .left-menu-wrapper').length){
    	
    	$('.u-left-panel15 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // JS based Offcanvas Effect
            offCanvas: true,
            offCanvasSpeed: 200,
            offCanvasClass: 'offcanvas-mode',

            // Show on hover
            showHover: true
    	});
	}
	 // Fixed Panel
    if($('.u-left-panel16 .left-menu-wrapper').length){
    	
    	$('.u-left-panel16 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,
            offCanvas: true,
            offCanvasSpeed: 200,
            offCanvasClass: 'offcanvas-mode',

            // Animation
            animation: false,
            animationType: 'pulsate',
            // Set false to use default value
            animationVar1: 5,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: 470
    	});
	}

	 // Wide Panel
    if($('.u-left-panel17 .left-menu-wrapper').length){
    	
    	$('.u-left-panel17 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // Animation
            animation: true,
            animationType: 'transfer',
            // Set false to use default value
            animationVar1: false,
            // Set false to use default value
            animationVar2: false,
            // Set false to use default value
            animationSpeed: false
    	});
	}

	 // Auto Focus
    if($('.u-left-panel18 .left-menu-wrapper').length){
    	
    	$('.u-left-panel18 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            // Auto Focus
            focusOffset: -150,
            autoFocus: true,
            focusSpeed: 'slow',

            // JS based Offcanvas Effect
            offCanvas: true,
            offCanvasSpeed: 200,
            offCanvasClass: 'offcanvas-mode'
    	});
	}

	// Metro Skin
    if($('.u-left-panel19 .left-menu-wrapper').length){
    	
    	$('.u-left-panel19 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: false,

            // JS based Offcanvas Effect
            offCanvas: true,
            offCanvasSpeed: 200,
            offCanvasClass: 'offcanvas-mode'
    	});
		$('body').removeAttr('class').addClass('skin-metro');
	}

	// Metro Skin
    if($('.u-left-panel20 .left-menu-wrapper').length){
    	
    	$('.u-left-panel20 .left-menu-wrapper').ultraMenu({
    		// Collapse Panel ON/OFF
            collapsePanel: true,

            //  Panel AJAX Settings
            ajaxLoad : true,
            ajaxContainer : '.content-panel',

            // JS based Offcanvas Effect
            offCanvas: true,
            offCanvasSpeed: 200,
            offCanvasClass: 'offcanvas-mode'
    	});
	}
}

// Min Height Adjustment on Start (Required for better animations)
function adjustParameter() {
    var height = $(document).height();
    var boxed_view_set = 29; // Same as set in LESS Variables
    
    // Setting min-height via CSS (reqired)
    $("<style type='text/css'> #u-left-panel{ min-height: " + height +"px; } .content-panel{ min-height: " + (height - 80) +"px;} </style>").appendTo("head");
}

// Slimscroll Selector
var selector_slim = $('#u-left-menu');
// Slimscroll Handlers
function handleScrollResize(){
    var color1;
    if($('body').hasClass('skin-light')){
        color1 = '#000';
    }
    else {
        color1 = '#fff';
    }

    if(selector_slim.parent('.slimScrollDiv').length === 1){
        $('#u-left-menu').slimScroll({
            destroy: true
        });
    }
    var slimHeight;
    if($('.panel-user-wrapper').is(':visible')) {
    	slimHeight = ($(window).height() - 190 + 'px');
    }
    else {
    	slimHeight = ($(window).height() - 80 + 'px');
    }
    selector_slim.slimScroll({
        height: slimHeight, // Value 190 is measured by Hit and Trial (Caliberation required) 
        color: color1,
        size: '7px',
        opacity: '0.4',
        alwaysVisible: true,
        allowPageScroll: false,
        disableFadeOut: true,
        wheelStep: 15.0
    });
}

// Fixed Panel Resizer (TO BE USED WITH SLIMSCROLL)
$('.content-panel').debounce_resize(function(){

    var top_width = $(window).width() - 2*29;
    // Setting topbar min-width for(boxed && fixed mode)--
    $('#u-topbar').css('min-width', top_width);

    if($('#u-app-wrapper').hasClass('panel-fixed')) {
        if(!$('#u-app-wrapper').hasClass('panel-cp')){
            handleScrollResize();
        }
        else{
            if(selector_slim.parent('.slimScrollDiv').length === 1){
                selector_slim.css({'overflow':''});
                $('.slimScrollDiv').css({'overflow':''});
                selector_slim.css({'height':''});
                selector_slim.slimScroll({
                    destroy: true
                });
            }
        }
    }
});


//Style Switcher Function
function styleSwitcher() {

    // Resetting
    $('#boxed-layout').prop('checked', false);
    $('#fixed-topbar').prop('checked', false);
    $('#fixed-ribbon').prop('checked', false);
    $('#fixed-navbar').prop('checked', false);
    $('#collapse-aside').prop('checked', true);

    //Events
    $('.switch').click(function(){
        $(this).closest('.style-switcher').toggleClass('show-swicher');
    });

    //Switchery

    //var elem = document.querySelector('.js-switch');
    //var init = new Switchery(elem, { size: 'small'});
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function(html) {  
        var switchery = new Switchery(html, {size: 'small'});              
    });
    
    $('#boxed-layout').click(function(){ 
        if ($(this).is(':checked')) {
            $('body').addClass('boxed-layout');
        } else {
            $('body').removeClass('boxed-layout');  
        }
    });

    if($(window).width() > 768) {
        $('.switch').click();
    }
}

                    
                       
function pushBoxedContent() {
    var bg_name = ['black-linen', 'brick-wall', 'carbon-fibre', 'carbon-fibre-big', 'checkered', 'fabric-dark', 'line', 'tile', 'tilt-block', 'woven-light', 'white-leather', 'wood', 'zebra-3d'];
    $('<div class="boxed-bg-panel hidden-xs"></div>').appendTo($('#ut-boxed').parent());
    $('#ut-boxed').parent().addClass('hidden-xs');
    for(var Index = 0; Index < bg_name.length; Index++){
        $('<span class="boxed-bg-button" title="' + bg_name[Index] + '" data-bg-name="' + bg_name[Index] + '"></span>').appendTo($('.boxed-bg-panel'));
    }
    $('.boxed-bg-panel > span').each(function() {
        $(this).css('background', 'url("img/pattern/' + $(this).attr('data-bg-name') + '.png")');
    });

    //Boxed button events 
    $('.boxed-bg-button').click(function() {
        $('body').attr('data-boxed-pattern', $(this).attr('data-bg-name'));
    });

    //$('body').attr('data-boxed-pattern', 'carbon-fibre');

    if ($('#ut-boxed').is(':checked')) {
        //$('.boxed-bg-panel').slideDown(200);
    }
    else {
        //$('.boxed-bg-panel').slideUp(200);
    }

}

$(document).ready(function() {
    //UltraMenu Init
    ultraMenuInit();
    if($('#u-app-wrapper').hasClass('panel-fixed')) {
        handleScrollResize();
    }
    adjustParameter();
    styleSwitcher();
    pushBoxedContent();
});
