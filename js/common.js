function move(e) {
    var o = document.querySelector(".circle").offsetLeft,
        n = document.querySelector(".circle").offsetTop,
        l = document.querySelector(e),
        c = 0,
        r = 0,
        s = 0,
        i = 0,
        u = 0,
        a = 0,
        d = 0;
    l.addEventListener("touchstart", function (e) {
        if (l.style.transition = "none", $(".ring").hasClass("open")) return !1;
        document.body.style.overflowY = "hidden";
        var t = e.touches[0];
        c = t.clientX, r = t.clientY, d = Date.now()
    }), l.addEventListener("touchmove", function (e) {
        if ($(".ring").hasClass("open")) return !1;
        !0;
        var t = e.touches[0];
        s = t.clientX, i = t.clientY, u = s - c, a = i - r, l.style.left = o + u + "px", l.style.top = n + a + "px"
    }), l.addEventListener("touchend", function () {
        if ($(".ring").hasClass("open")) return !1;
        200 < Date.now() - d && (o += u, n += a), document.body.style.overflowY = "scroll", l.style.transition = "all 0.4s ease-in-out", o < $(window).width() / 2 ? (l.style.left = "0px", o = 0) : (l.style.left = $(window).width() - l.offsetWidth + "px", o = $(window).width() - l.offsetWidth)
    }), document.querySelector(".circle").onclick = function () {
        document.querySelector(".ring").classList.toggle("open"), document.querySelector(".mask").classList.toggle("hide"), $(".ring").hasClass("open") ? document.querySelector(".circle").style.left = 0 == o ? o + 45 + "px" : o - 45 + "px" : document.querySelector(".circle").style.left = o + "px"
    }, document.querySelector(".mask").onclick = function () {
        document.querySelector(".ring").classList.remove("open"), document.querySelector(".mask").classList.toggle("hide"), $(".ring").hasClass("open") ? document.querySelector(".circle").style.left = 0 == o ? o + 45 + "px" : o - 45 + "px" : document.querySelector(".circle").style.left = o + "px"
    }
}
$(function () {
    for (var e = document.querySelectorAll(".menuItem"), t = 0, o = e.length; t < o; t++) e[t].style.left = (50 - 35 * Math.cos(-.5 * Math.PI - 1 / o * 2 * t * Math.PI)).toFixed(4) + "%", e[t].style.top = (50 + 35 * Math.sin(-.5 * Math.PI - 1 / o * 2 * t * Math.PI)).toFixed(4) + "%";
    move(".circle")
});