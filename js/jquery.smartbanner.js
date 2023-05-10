var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*  !!!!!!!!!!!!!!!!!!!!!!!!!
    Modified by Wargaming.net
    - Added smartbanner css class on html tag while banner is open
    !!!!!!!!!!!!!!!!!!!!!!!!! 
*/
/*!
 * jQuery Smart Banner
 * Copyright (c) 2012 Arnold Daniels <arnold@jasny.net>
 * Based on 'jQuery Smart Web App Banner' by Kurt Zenisek @ kzeni.com
 */
!function ($) {
    var SmartBanner = function (options) {
        this.origHtmlMargin = parseFloat($('html').css('margin-top')) // Get the original margin-top of the HTML element so we can take that into account
        this.options = $.extend({}, $.smartbanner.defaults, options)

        var standalone = navigator.standalone // Check if it's already a standalone web app or running within a webui view of an app (not mobile safari)

        // Detect banner type (iOS or Android)
        if (this.options.force) {
            this.type = this.options.force
        } else if ($.browser.ios) {
            this.type = 'ios'
        } else if ($.browser.android) {
            this.type = 'android'
        } else if ($.browser.windowsPhone) {
            this.type = 'windows'
        }

        // Don't show banner if device isn't iOS or Android, website is loaded in app or user dismissed banner
        if (!this.type || standalone || this.getCookie('sb-closed') || this.getCookie('sb-installed')) {
            return
        }

        // Calculate scale
        this.scale = this.options.scale == 'auto' ? $(window).width() / window.screen.width : this.options.scale
        if (this.scale < 1) this.scale = 1

        if (this.type != 'windows') {
            this.appId = this.type == 'ios' ? this.options.iTunesID : this.options.googlePlayID
        }

        this.title = this.options.title ? this.options.title : $('title').text().replace(/\s*[|\-·].*$/, '')
        this.author = this.options.author

        // Create banner
        this.create()
        this.show()
        this.listen()
    }

    SmartBanner.prototype = {

        constructor: SmartBanner
    
      , create: function() {
            var iconURL
              , link=(this.options.url ? this.options.url : (this.type == 'windows' ? 'ms-windows-store:PDP?PFN=' + this.pfn : (this.type == 'android' ? 'https://web.archive.org/web/20181109111024/https://play.google.com/store/apps/details?id=' : 'https://web.archive.org/web/20181109111024/https://itunes.apple.com/' + this.options.appStoreLanguage + '/app/id')) + this.appId)
              , inStore=this.options.price ? this.options.price + ' - ' + (this.type == 'android' ? this.options.inGooglePlay : this.type == 'ios' ? this.options.inAppStore : this.options.inWindowsStore) : ''
              , gloss=this.options.iconGloss === null ? (this.type=='ios') : this.options.iconGloss

            $('body').append('<div id="smartbanner" class="'+this.type+'"><div class="sb-container"><a href="#" class="sb-close">&times;</a><span class="sb-icon"></span><div class="sb-info"><strong>'+this.title+'</strong><span>'+this.author+'</span><span>'+inStore+'</span></div><a href="'+link+'" class="sb-button"><span>'+this.options.button+'</span></a></div></div>')

            if (this.options.icon) {
                iconURL = this.options.icon
            } else if ($('link[rel="apple-touch-icon-precomposed"]').length > 0) {
                iconURL = $('link[rel="apple-touch-icon-precomposed"]').attr('href')
                if (this.options.iconGloss === null) gloss = false
            } else if ($('link[rel="apple-touch-icon"]').length > 0) {
                iconURL = $('link[rel="apple-touch-icon"]').attr('href')
            } else if ($('meta[name="msApplication-TileImage"]').length > 0) {
              iconURL = $('meta[name="msApplication-TileImage"]').attr('content')
            } else if ($('meta[name="msapplication-TileImage"]').length > 0) { /* redundant because ms docs show two case usages */
              iconURL = $('meta[name="msapplication-TileImage"]').attr('content')
            }
            
            if (iconURL) {
                $('#smartbanner .sb-icon').css('background-image','url('+iconURL+')')
                if (gloss) $('#smartbanner .sb-icon').addClass('gloss')
            } else{
                $('#smartbanner').addClass('no-icon')
            }

            this.bannerHeight = $('#smartbanner').outerHeight() + 2

            if (this.scale > 1) {
                $('#smartbanner .sb-container')
                    .css('-webkit-transform', 'scale('+this.scale+')')
                    .css('-msie-transform', 'scale('+this.scale+')')
                    .css('-moz-transform', 'scale('+this.scale+')')
                    .css('width', $(window).width() / this.scale)
            }
        }
        
      , listen: function () {
            $('#smartbanner .sb-close').bind('click',$.proxy(this.close, this))
            $('#smartbanner .sb-button').bind('click',$.proxy(this.install, this))
        }
        
      , show: function(callback) {
            $('#smartbanner').css('height', (this.origHtmlMargin+(this.bannerHeight*this.scale)))
            $('#smartbanner').stop().animate({top:-(this.origHtmlMargin+(this.bannerHeight*this.scale))},this.options.speedIn).addClass('shown')
            $('html').addClass('smartbanner').animate({marginTop:this.origHtmlMargin+(this.bannerHeight*this.scale)},this.options.speedIn,'swing',callback)

        }
        
      , hide: function(callback) {
            $('html').removeClass('smartbanner').css('margin-top', this.origHtmlMargin);
            $('#smartbanner').hide();
        }
      
      , close: function(e) {
            e.preventDefault()
            this.hide()
            this.setCookie('sb-closed','true')
        }
       
      , install: function(e) {
            this.hide()
        }
       
      , setCookie: function(name, value) {
            document.cookie=name+'='+value+'; path=/;'
        }
        
      , getCookie: function(name) {
            var i,x,y,ARRcookies = document.cookie.split(";")
            for(i=0;i<ARRcookies.length;i++) {
                x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="))
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1)
                x = x.replace(/^\s+|\s+$/g,"")
                if (x==name) {
                    return unescape(y)
                }
            }
            return null
        }
    }

    $.smartbanner = function (option) {
        var $window = $(window)
        , data = $window.data('typeahead')
        , options = typeof option == 'object' && option
        if (!data) $window.data('typeahead', (data = new SmartBanner(options)))
        if (typeof option == 'string') data[option]()
    }

    // override these globally if you like (they are all optional)
    $.smartbanner.defaults = {
        title: null, // What the title of the app should be in the banner (defaults to <title>)
        author: null, // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
        price: 'FREE', // Price of the app
        appStoreLanguage: 'us', // Language code for App Store
        inAppStore: 'On the App Store', // Text of price for iOS
        inGooglePlay: 'In Google Play', // Text of price for Android
        inWindowsStore: 'In the Windows Store', //Text of price for Windows
        icon: null, // The URL of the icon (defaults to <meta name="apple-touch-icon">)
        iconGloss: null, // Force gloss effect for iOS even for precomposed
        button: 'VIEW', // Text for the install button
        url: null, // The URL for the button. Keep null if you want the button to link to the app store.
        scale: 'auto', // Scale based on viewport size (set to 1 to disable)
        speedIn: 300, // Show animation speed of the banner
        speedOut: 400, // Close animation speed of the banner
        daysHidden: 15, // Duration to hide the banner after being closed (0 = always show banner)
        daysReminder: 90, // Duration to hide the banner after "VIEW" is clicked *separate from when the close button is clicked* (0 = always show banner)
        force: null // Choose 'ios', 'android' or 'windows'. Don't do a browser check, just always show this banner
    }

    $.smartbanner.Constructor = SmartBanner

}(window.jQuery);


}
/*
     FILE ARCHIVED ON 11:10:24 Nov 09, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:20:54 Nov 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 91.079
  exclusion.robots: 0.123
  exclusion.robots.policy: 0.112
  RedisCDXSource: 0.613
  esindex: 0.009
  LoadShardBlock: 65.725 (3)
  PetaboxLoader3.datanode: 88.006 (4)
  CDXLines.iter: 21.246 (3)
  load_resource: 78.519
  PetaboxLoader3.resolve: 17.306
*/