
var screen_xs_break = 768;

// APP Global Selector
var global = $('#u-app-wrapper');

if(!localStorage.getItem("ultraMenu-skin")) {
    localStorage.setItem("ultraMenu-skin", "skin-polaris");
}

if(!localStorage.getItem("ultraMenu-style")) {
    localStorage.setItem("ultraMenu-style", "content-shrink");
}

function attachToggleEvents(){
    if($('#ut-collapse').length) {
        $('#ut-collapse').on('change', function(){
            
            if ($(this).is(':checked')) {
                // TURN ON THE COLLAPSING
                if(global.hasClass('panel-lg') && !global.hasClass('collapse-true')) {
                    $(this).click();
                    alert('Please open the panel first');
                    $(this).prop('checked', false);
                }
                else {
                    global.addClass('collapse-true');
                    if(global.hasClass('panel-horizontal')) {
                        global.addClass('panel-cp');
                    }
                }
            }
            else {
                // TURN OFF THE COLLAPSING
               if(global.hasClass('collapse-true')) {
                    global.removeClass('collapse-true');
                    global.removeClass('panel-cp');
                    global.removeClass('panel-lg');

                    if(global.hasClass('panel-horizontal')) {
                        global.removeClass('panel-lg');
                    }
               }
            }
        });
    }
    if($('#ut-boxed').length) {
        $('#ut-boxed').on('change', function(){
            
            if ($(this).is(':checked')) {
                //TURN ON BOXED VIEW
                $('body').addClass('boxed-layout');
                //$('.boxed-bg-panel').slideDown(200);
            }
            else {
                // TURN OFF BOXED VIEW
                $('body').removeClass('boxed-layout');
                //$('.boxed-bg-panel').slideUp(200);
            }
        });
    }
    if($('#right-panel').length) {
        $('#right-panel').on('change', function(){
            
            if ($(this).is(':checked')) {
                //TURN ON RIGHT VIEW
                $('body').addClass('right-true');
            }
            else {
                // TURN OFF RIGHT VIEW
                $('body').removeClass('right-true');
            }
        });
    }
    if($('#fixed-panel').length) {
        $('#fixed-panel').on('change', function(){
            
            if ($(this).is(':checked') && !global.hasClass('panel-fixed')) {
                //TURN ON FIXED VIEW
                if(!global.hasClass('panel-horizontal')) {
                    global.addClass('panel-fixed');
                    $('.content-panel').trigger('resize');
                }
                else {
                    $(this).click();
                    alert('Close the Horizontal first');
                    $(this).prop('checked', false);
                }
            }
            else if(!$(this).is(':checked') && global.hasClass('panel-fixed')){
                // TURN OFF FIXED VIEW
                global.removeClass('panel-fixed');
                if(selector_slim.parent('.slimScrollDiv').length === 1){
                    selector_slim.css({'overflow':''});
                    $('.slimScrollDiv').css({'overflow':''});
                    selector_slim.css({'height':''});
                    selector_slim.slimScroll({
                        destroy: true
                    });
                }
            }
        });
    }
    if($('#horiz-panel').length) {
        $('#horiz-panel').on('change', function(){
            if ($(this).is(':checked') && !global.hasClass('panel-horizontal')) {
                //TURN ON HORIZONTAL VIEW
                if(!global.hasClass('panel-fixed') && ($(window).width() > screen_xs_break)) {
                    global.addClass('panel-horizontal');
                    global.removeClass('panel-lg');
                    // Resetting some menu classes
                    $('li.left-menu-parent .active-state').each(function(){ $(this).removeClass('active-state'); });
                    $('li.left-menu-parent ul').each(function(){ $(this).css('display', ''); $(this).closest('li').find('.link-state i').removeClass('fa-angle-down').addClass('fa-angle-right'); });
                    
                    if($('#ut-collapse').is(':checked') && ($(window).width() > screen_xs_break)) {
                        global.addClass('panel-cp');
                    }
                }
                else {
                    $(this).click();
                    if(!($(window).width() <= screen_xs_break)){
                        alert('Close the Fixed Mode');
                    }
                    else {
                        alert('Increase your screen size');
                    }
                    $(this).prop('checked', false);
                }
            }
            else if(!$(this).is(':checked') && global.hasClass('panel-horizontal')){
                // TURN OFF HORIZONTAL VIEW
                global.removeClass('panel-horizontal');
                if(global.hasClass('panel-cp')) {
                    global.addClass('panel-lg');
                }
            }

            // CLOSE COLLAPSE & HORIZONTAL MODE
            if($(window).width() < screen_xs_break) {
                global.removeClass('panel-lg');
                global.removeClass('panel-cp');
                global.removeClass('collapse-true');
                global.removeClass('panel-horizontal');
            }
        });
    }

    if($('#wide-view').length) {
        $('#wide-view').on('change', function(){
            if ($(this).is(':checked') && !global.hasClass('panel-wide')) {
                global.addClass('panel-wide');
            }
            else if(!$(this).is(':checked') && global.hasClass('panel-wide')) {
                global.removeClass('panel-wide');
            }
        });
    }

    // Hide User
    if($('#show-user').length) {
        $('#show-user').on('change', function(){
            if ($(this).is(':checked')) {
                $('.panel-user-wrapper').slideDown(200);
                $('.content-panel').trigger('resize');
            }
            else {
                $('.panel-user-wrapper').slideUp(200);
                $('.content-panel').trigger('resize');
            }
        });
    }

    /*---------------Skin Button Events-----------------------*/
    // Apply the skin from LocalStorage
    $('body').addClass(localStorage.getItem("ultraMenu-skin"));
    $('.btn-skin-toggle > button.active').removeClass('active');
    $('.btn-skin-toggle > button').each(function(){
        if($(this).data('skin') == localStorage.getItem("ultraMenu-skin")) {
            $(this).addClass('active');
        }
    });
    $('.' + localStorage.getItem("ultraMenu-skin") + '-colors').addClass('skin-colors-panel-active');

    //Skin Events
    $('.btn-skin-toggle > button').on('click', function(){
        $('body').removeClass(localStorage.getItem("ultraMenu-skin"));
        $('.' + localStorage.getItem("ultraMenu-skin") + '-colors').removeClass('skin-colors-panel-active');
        $('body').addClass($(this).data('skin'));
        $(this).closest('.toggle-1').find('.' + $(this).data('skin') + '-colors').addClass('skin-colors-panel-active');
        localStorage.setItem("ultraMenu-skin", $(this).data('skin'));
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('.content-panel').trigger('resize');
    });

    $('.skin-color-button').on('click', function(){
        $('body').removeAttr('data-skin-type');
        $('body').attr('data-skin-type', $(this).data('skin-color'));
    });


    /*-------------------------------------------------------*/


    /*---------------Style Button Events-----------------------*/
    // Apply the style from LocalStorage
    $('.content-panel').addClass(localStorage.getItem("ultraMenu-style"));
    $('.btn-style-toggle > button.active').removeClass('active');
    $('.btn-style-toggle > button').each(function(){
        if($(this).data('style') == localStorage.getItem("ultraMenu-style")) {
            $(this).addClass('active');
        }
    });

    //Style Events
    $('.btn-style-toggle > button').on('click', function(){
        $('.content-panel').removeClass(localStorage.getItem("ultraMenu-style"));
        $('.content-panel').addClass($(this).data('style'));
        localStorage.setItem("ultraMenu-style", $(this).data('style'));
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });
    /*------------------------------------------------------------*/
}

attachToggleEvents();