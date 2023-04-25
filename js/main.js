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

// JavaScript Document
function GetUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
       hash = hashes[i].split('=');
       vars.push(hash[0]);
       vars[hash[0]] = hash[1];
    }
    return vars;
}

function AddSidToUrls() {

	var sid = GetUrlVars()["sid"];
	
	if (!sid) return;
	
	jQuery('a').each(function(i, v) {
		var aEl = jQuery(v);
		
		var href = aEl.attr('href');
		
		if(href.indexOf('https://web.archive.org/web/20121211094643/http://support.worldoftanks')==-1){
            if (href.indexOf('?')==-1) {
                href = href + '?sid=' + sid;
            }
            else {
                href = href + '&sid=' + sid;
            }
        }
		
		aEl.attr('href', href);
	});
}

// JavaScript Document
$(document).ready(function()
{
	if($(".awards ul li").length)
	{
		//$(".awards-color").hide();
		
		var widthImg;
		var widthImgSmall;
		var leftPosition;
		$(".awards ul li").hover(function()
		{
			widthImgSmall = $(this).find(".awards-color").width();
			widthImg = widthImgSmall/0.7;
			leftPosition = Math.round((widthImg-widthImgSmall)/2);
			leftPosition = "-"+leftPosition;
			
			$(this).find(".awards-color").stop().show().queue(function(next){$(this).parent().find(".awards-nocolor").css("visibility","hidden");next();}).animate({height:"114px",top:"-18px",left:leftPosition}, 100);
		}, function()
		{
			$(this).find(".awards-color").stop().animate({height:"78px",top:"0",left:"0"}, 100).queue(function(next){$(this).parent().find(".awards-nocolor").css("visibility","visible");$(this).hide();next();});
		});
	};
	
	if($("#mycarousel").length)
	{
		$("#mycarousel").jcarousel({
			start: 1
		});
		$('a.media-screen').lightbox();
	};
	
	AddSidToUrls();
});

}
/*
     FILE ARCHIVED ON 09:46:43 Dec 11, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:46:30 Apr 25, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 244.894
  exclusion.robots: 0.094
  exclusion.robots.policy: 0.083
  cdx.remote: 0.081
  esindex: 0.012
  LoadShardBlock: 214.864 (3)
  PetaboxLoader3.datanode: 195.601 (4)
  load_resource: 311.202
  PetaboxLoader3.resolve: 273.038
*/