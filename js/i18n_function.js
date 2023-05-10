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


/* gettext library */

var catalog = new Array();

function pluralidx(count) { return (count == 1) ? 0 : 1; }

function gettext(msgid) {
  var value = catalog[msgid];
  if (typeof(value) == 'undefined') {
    return msgid;
  } else {
    return (typeof(value) == 'string') ? value : value[0];
  }
}

function ngettext(singular, plural, count) {
  value = catalog[singular];
  if (typeof(value) == 'undefined') {
    return (count == 1) ? singular : plural;
  } else {
    return value[pluralidx(count)];
  }
}

function gettext_noop(msgid) { return msgid; }

function pgettext(context, msgid) {
  var value = gettext(context + '' + msgid);
  if (value.indexOf('') != -1) {
    value = msgid;
  }
  return value;
}

function npgettext(context, singular, plural, count) {
  var value = ngettext(context + '' + singular, context + '' + plural, count);
  if (value.indexOf('') != -1) {
    value = ngettext(singular, plural, count);
  }
  return value;
}

function interpolate(fmt, obj, named) {
  if (named) {
    return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
  } else {
    return fmt.replace(/%s/g, function(match){return String(obj.shift())});
  }
}

/* formatting library */

var formats = new Array();

formats['DATETIME_FORMAT'] = 'j E Y \u0433. G:i:s';
formats['DATE_FORMAT'] = 'j E Y \u0433.';
formats['DECIMAL_SEPARATOR'] = ',';
formats['MONTH_DAY_FORMAT'] = 'j F';
formats['NUMBER_GROUPING'] = '3';
formats['TIME_FORMAT'] = 'G:i:s';
formats['FIRST_DAY_OF_WEEK'] = '1';
formats['TIME_INPUT_FORMATS'] = ['%H:%M:%S', '%H:%M'];
formats['THOUSAND_SEPARATOR'] = '\u00a0';
formats['DATE_INPUT_FORMATS'] = ['%d.%m.%Y', '%d.%m.%y', '%Y-%m-%d'];
formats['YEAR_MONTH_FORMAT'] = 'F Y \u0433.';
formats['SHORT_DATE_FORMAT'] = 'd.m.Y';
formats['SHORT_DATETIME_FORMAT'] = 'd.m.Y H:i';
formats['DATETIME_INPUT_FORMATS'] = ['%d.%m.%Y %H:%M:%S', '%d.%m.%Y %H:%M', '%d.%m.%Y', '%d.%m.%y %H:%M:%S', '%d.%m.%y %H:%M', '%d.%m.%y', '%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M', '%Y-%m-%d'];

function get_format(format_type) {
    var value = formats[format_type];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return value;
    }
}


}
/*
     FILE ARCHIVED ON 11:10:24 Nov 09, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:20:56 Nov 04, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 359.634
  exclusion.robots: 0.133
  exclusion.robots.policy: 0.119
  RedisCDXSource: 2.712
  esindex: 0.008
  LoadShardBlock: 317.823 (3)
  PetaboxLoader3.resolve: 177.315 (4)
  PetaboxLoader3.datanode: 126.336 (4)
  CDXLines.iter: 27.652 (3)
  load_resource: 64.626
*/