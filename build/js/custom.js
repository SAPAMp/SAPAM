/**
 * Resize function without multiple trigger
 *
 * Usage:
 * $(window).smartresize(function(){
 *     // code here
 * });
 */
(function($,sr){
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
      var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100); 
        };
    };

    // smartresize
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

function init_sidebar() {
  var a = function() {
    $RIGHT_COL.css(
      "min-height",
      $(window).height()
    );

    var a = $BODY.outerHeight(),
      b = $BODY.hasClass("footer_fixed") ? -10 : $FOOTER.height(),
      c = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
      d = a < c ? c : a;
    d -= $NAV_MENU.height() + b,
      $RIGHT_COL.css("min-height", d)
  };

  $SIDEBAR_MENU.find("a").on("click", function(b) {
    var c = $(this).parent();
    c.is(".active") ? (c.removeClass("active active-sm"), $("ul:first", c).slideUp(function() {
      a()
    })) : (c.parent().is(".child_menu") ? $BODY.is(".nav-sm") && ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()) : ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()), c.addClass("active"), $("ul:first", c).slideDown(function() {
      a()
    }))
  }), $MENU_TOGGLE.on("click", function() {
    $BODY.hasClass("nav-md") ? ($SIDEBAR_MENU.find("li.active ul").hide(), $SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")) : ($SIDEBAR_MENU.find("li.active-sm ul").show(), $SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")), $BODY.toggleClass("nav-md nav-sm"), a()
  }), $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent("li").addClass("current-page"), $SIDEBAR_MENU.find("a").filter(function() {
    return this.href == CURRENT_URL
  }).parent("li").addClass("current-page").parents("ul").slideDown(function() {
    a()
  }).parent().addClass("active"), $(window).smartresize(function() {
    a()
  }), a(), $.fn.mCustomScrollbar && $(".menu_fixed").mCustomScrollbar({
    autoHideScrollbar: !0,
    theme: "minimal",
    mouseWheel: {
      preventDefault: !0
    }
  })
}

function init_autosize() {
  "undefined" != typeof $.fn.autosize && autosize($(".resizable_textarea"))
}

function init_SmartWizard() {
  "undefined" != typeof $.fn.smartWizard && (console.log("init_SmartWizard"),
  $("#wizard").smartWizard(),
  $("#wizard_verticle").smartWizard({
    transitionEffect: "slide"
  }),
  /*$(".buttonNext").addClass("btn btn btn-primary"),*/
  $(".buttonImpresionOrdenInspeccion").addClass("btn btn-success"),
  $(".buttonNext").addClass("btn btn-success"),
  $(".buttonPrevious").addClass("btn btn-primary"),
  $(".buttonFinish").addClass("btn btn-primary"))
}

var CURRENT_URL = window.location.href.split("#")[0].split("?")[0],
  $BODY = $("body"),
  $MENU_TOGGLE = $("#menu_toggle"),
  $SIDEBAR_MENU = $("#sidebar-menu"),
  $SIDEBAR_FOOTER = $(".sidebar-footer"),
  $LEFT_COL = $(".left_col"),
  $RIGHT_COL = $(".right_col"),
  $NAV_MENU = $(".nav_menu"),
  $FOOTER = $("footer"),
  randNum = function() {
    return Math.floor(21 * Math.random()) + 20
  };

  $(document).ready(function() {
    // init_sparklines(),
    // init_flot_chart(),
    init_sidebar(),
    // init_wysiwyg(),
    // init_InputMask(),
    // init_JQVmap(),
    // init_cropper(),
    // init_knob(),
    // init_IonRangeSlider(),
    // init_ColorPicker(),
    // init_TagsInput(),
    // init_parsley(),
    // init_daterangepicker(),
    // init_daterangepicker_right(),
    // init_daterangepicker_single_call(),
    // init_daterangepicker_reservation(),
    init_SmartWizard(),
    // init_EasyPieChart(),
    // init_charts(),
    // init_echarts(),
    // init_morris_charts(),
    // init_skycons(),
    // init_select2(),
    // init_validator(),
    // init_DataTables(),
    // init_chart_doughnut(),
    // init_gauge(),
    // init_PNotify(),
    // init_starrr(),
    // init_calendar(),
    // init_compose(),
    // init_CustomNotification(),
    init_autosize()
    // init_autocomplete()
  });
