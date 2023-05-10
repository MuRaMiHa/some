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

wgsdk.getAndProcessUserOriginRegion = function() {
    $.ajax({
        url: wgsdk.vars.GET_USER_ORIGIN_REGION_COOKIE_URL
    }).done(function(user_origin_region) {
        if (user_origin_region && window[wgsdk.vars.CALLBACK_USER_ORIGIN_REGION]) {
            window[wgsdk.vars.CALLBACK_USER_ORIGIN_REGION](user_origin_region);
        }
    });
}

wgsdk.region_widget_helper = (function($){
    var helper = {}

    helper.getCookie = function(c_name){
        if (document.cookie.length>0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1){
                c_start = c_start + c_name.length+1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1){
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    };

    helper.setCookie = function(name, value, props) {
        props = props || {}
        var exp = props.expires
        if (typeof exp == "number" && exp) {
            var d = new Date()
            d.setTime(d.getTime() + exp*1000)
            exp = props.expires = d
        }
        if(exp && exp.toUTCString) {
            props.expires = exp.toUTCString()
        }
        value = encodeURIComponent(value)
        var updatedCookie = name + "=" + value
        for(var propName in props){
            updatedCookie += "; " + propName
            var propValue = props[propName]
            if(propValue !== true){ updatedCookie += "=" + propValue }
        }
        document.cookie = updatedCookie
    }

    helper.getDomainForCookie = function(){
        var ip_format = /^([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+\.([1-9][0-9]{0,2})+$/;
        if (ip_format.test(document.domain)) {
            return document.domain
        }

        var arr = document.domain.split('.');

        if (arr.length == 1) {
            return arr[0];
        }

        if (arr.length > 2) {
            arr.splice(0,1);
        }

        return '.'+arr.join('.');
    }


    helper.getParameterByName = function(name, url){
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);

        if(url){
            var results = regex.exec(url);
        }else{
            var results = regex.exec(window.location.href);
        }

        if(results == null) {
            return "";
        }
        return decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    return helper
})($)

$(window).bind('resize', function() { jQuery('.b-cluster-change_content').center({vertical: true}); });
$(document).ready(function(){ jQuery('.b-cluster-change_content').center(); });

(function($){
    $.fn.extend({
         center: function (options) {
              var options =  $.extend({ // Default values
                   inside:window, // element, center into window
                   transition: 0, // millisecond, transition time
                   minX:0, // pixel, minimum left element value
                   minY:0, // pixel, minimum top element value
                   withScrolling:true, // booleen, take care of the scrollbar (scrollTop)
                   vertical:true, // booleen, center vertical
                   horizontal:true // booleen, center horizontal
              }, options);
              return this.each(function() {
                   var props = {position:'absolute'};
                   if (options.vertical) {
                        var top = ($(options.inside).height() - $(this).outerHeight()) / 2;
                        if (options.withScrolling) top += $(options.inside).scrollTop() || 0;
                        top = (top > options.minY ? top : options.minY);
                        $.extend(props, {top: top+'px'});
                   }
                   if (options.horizontal) {
                         var left = ($(options.inside).width() - $(this).outerWidth()) / 2;
                         if (options.withScrolling) left += $(options.inside).scrollLeft() || 0;
                         left = (left > options.minX ? left : options.minX);
                         $.extend(props, {left: left+'px'});
                   }
                   if (options.transition > 0) $(this).animate(props, options.transition);
                   else $(this).css(props);
                   return $(this);
              });
         }
    });
})($);


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
  captures_list: 74.155
  exclusion.robots: 0.118
  exclusion.robots.policy: 0.108
  RedisCDXSource: 0.928
  esindex: 0.006
  LoadShardBlock: 53.134 (3)
  PetaboxLoader3.datanode: 73.757 (4)
  CDXLines.iter: 17.405 (3)
  load_resource: 160.74
  PetaboxLoader3.resolve: 37.19
*/