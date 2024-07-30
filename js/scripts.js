$(document).ready(function () {
  function a(e) {
    return (
      "<span>" +
      (e = ("00" + e).substr(-2))[0] +
      "</span><span>" +
      e[1] +
      "</span>"
    );
  }
  $(".feedback").click(function () {
    $(".popup-window").show();
  }),
    $(".close-popup").click(function () {
      $(".popup-window").hide();
    }),
    $("a[href^='#']").click(function () {
      var e = $(this).attr("href");
      return (
        $("html, body").animate({ scrollTop: $(e).offset().top + "px" }), !1
      );
    }),
    (function e() {
      var t = new Date(),
        o = new Date();
      o.setHours(23),
        o.setMinutes(59),
        o.setSeconds(59),
        23 === t.getHours() &&
          59 === t.getMinutes() &&
          59 === t.getSeconds &&
          o.setDate(o.getDate() + 1);
      var n = Math.floor((o.getTime() - t.getTime()) / 1e3),
        o = Math.floor(n / 3600);
      n -= 3600 * o;
      t = Math.floor(n / 60);
      (n -= 60 * t),
        $(".timer .hours").html(a(o)),
        $(".timer .minutes").html(a(t)),
        $(".timer .seconds").html(a(n)),
        setTimeout(e, 200);
    })();
}),
  $(window).on("load", function () {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: !0,
      autoHeight: !0,
      smartSpeed: 300,
      mouseDrag: !1,
      pullDrag: !1,
      dots: !1,
      nav: !0,
      navText: "",
    });
  }),
  (function (e, t, o, n, a) {
    (e.ym =
      e.ym ||
      function () {
        (e.ym.a = e.ym.a || []).push(arguments);
      }),
      (e.ym.l = +new Date()),
      (n = t.createElement(o)),
      (a = t.getElementsByTagName(o)[0]),
      (n.async = 1),
      (n.src = "https://mc.yandex.ru/metrika/tag.js"),
      a.parentNode.insertBefore(n, a);
  })(window, document, "script"),
  ym(71396785, "init", {
    clickmap: !0,
    trackLinks: !0,
    accurateTrackBounce: !0,
    webvisor: !0,
  });
