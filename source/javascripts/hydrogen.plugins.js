// Bootstrap v3.1.1 (http://getbootstrap.com)
+ function(a) {
  "use strict";
  var b = '[data-dismiss="alert"]',
    c = function(c) {
      a(c).on("click", b, this.close)
    };
  c.prototype.close = function(b) {
    function f() {
      e.trigger("closed.bs.alert").remove()
    }
    var c = a(this),
      d = c.attr("data-target");
    d || (d = c.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
    var e = a(d);
    b && b.preventDefault(), e.length || (e = c.hasClass("alert") ? c : c.parent()), e.trigger(b = a
      .Event("close.bs.alert"));
    if (b.isDefaultPrevented()) return;
    e.removeClass("in"), a.support.transition && e.hasClass("fade") ? e.one(a.support.transition.end,
      f).emulateTransitionEnd(150) : f()
  };
  var d = a.fn.alert;
  a.fn.alert = function(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.alert");
      e || d.data("bs.alert", e = new c(this)), typeof b == "string" && e[b].call(d)
    })
  }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
    return a.fn.alert = d, this
  }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), + function(a) {
  "use strict";
  var b = function(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1
  };
  b.DEFAULTS = {
    loadingText: "loading..."
  }, b.prototype.setState = function(b) {
    var c = "disabled",
      d = this.$element,
      e = d.is("input") ? "val" : "html",
      f = d.data();
    b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]),
      setTimeout(a.proxy(function() {
        b == "loadingText" ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (
          this.isLoading = !1, d.removeClass(c).removeAttr(c))
      }, this), 0)
  }, b.prototype.toggle = function() {
    var a = !0,
      b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      c.prop("type") == "radio" && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 :
        b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass(
        "active")).trigger("change")
    }
    a && this.$element.toggleClass("active")
  };
  var c = a.fn.button;
  a.fn.button = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.button"),
        f = typeof c == "object" && c;
      e || d.data("bs.button", e = new b(this, f)), c == "toggle" ? e.toggle() : c && e.setState(c)
    })
  }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
    return a.fn.button = c, this
  }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
    var c = a(b.target);
    c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
  })
}(jQuery), + function(a) {
  function e(d) {
    a(b).remove(), a(c).each(function() {
      var b = f(a(this)),
        c = {
          relatedTarget: this
        };
      if (!b.hasClass("open")) return;
      b.trigger(d = a.Event("hide.bs.dropdown", c));
      if (d.isDefaultPrevented()) return;
      b.removeClass("open").trigger("hidden.bs.dropdown", c)
    })
  }

  function f(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }
  "use strict";
  var b = ".dropdown-backdrop",
    c = "[data-toggle=dropdown]",
    d = function(b) {
      a(b).on("click.bs.dropdown", this.toggle)
    };
  d.prototype.toggle = function(b) {
    var c = a(this);
    if (c.is(".disabled, :disabled")) return;
    var d = f(c),
      g = d.hasClass("open");
    e();
    if (!g) {
      "ontouchstart" in document.documentElement && !d.closest(".navbar-nav").length && a(
        '<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", e);
      var h = {
        relatedTarget: this
      };
      d.trigger(b = a.Event("show.bs.dropdown", h));
      if (b.isDefaultPrevented()) return;
      d.toggleClass("open").trigger("shown.bs.dropdown", h), c.focus()
    }
    return !1
  }, d.prototype.keydown = function(b) {
    if (!/(38|40|27)/.test(b.keyCode)) return;
    var d = a(this);
    b.preventDefault(), b.stopPropagation();
    if (d.is(".disabled, :disabled")) return;
    var e = f(d),
      g = e.hasClass("open");
    if (!g || g && b.keyCode == 27) return b.which == 27 && e.find(c).focus(), d.click();
    var h = " li:not(.divider):visible a",
      i = e.find("[role=menu]" + h + ", [role=listbox]" + h);
    if (!i.length) return;
    var j = i.index(i.filter(":focus"));
    b.keyCode == 38 && j > 0 && j--, b.keyCode == 40 && j < i.length - 1 && j++, ~j || (j = 0), i.eq(
      j).focus()
  };
  var g = a.fn.dropdown;
  a.fn.dropdown = function(b) {
    return this.each(function() {
      var c = a(this),
        e = c.data("bs.dropdown");
      e || c.data("bs.dropdown", e = new d(this)), typeof b == "string" && e[b].call(c)
    })
  }, a.fn.dropdown.Constructor = d, a.fn.dropdown.noConflict = function() {
    return a.fn.dropdown = g, this
  }, a(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api",
    ".dropdown form",
    function(a) {
      a.stopPropagation()
    }).on("click.bs.dropdown.data-api", c, d.prototype.toggle).on("keydown.bs.dropdown.data-api", c +
    ", [role=menu], [role=listbox]", d.prototype.keydown)
}(jQuery), + function(a) {
  "use strict";
  var b = function(a, b) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
      this.init("tooltip", a, b)
  };
  b.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  }, b.prototype.init = function(b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
    var e = this.options.trigger.split(" ");
    for (var f = e.length; f--;) {
      var g = e[f];
      if (g == "click") this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle,
        this));
      else if (g != "manual") {
        var h = g == "hover" ? "mouseenter" : "focusin",
          i = g == "hover" ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element
          .on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, b.prototype.getDefaults = function() {
    return b.DEFAULTS
  }, b.prototype.getOptions = function(b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && typeof b.delay ==
      "number" && (b.delay = {
        show: b.delay,
        hide: b.delay
      }), b
  }, b.prototype.getDelegateOptions = function() {
    var b = {},
      c = this.getDefaults();
    return this._options && a.each(this._options, function(a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, b.prototype.enter = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions())
      .data("bs." + this.type);
    clearTimeout(c.timeout), c.hoverState = "in";
    if (!c.options.delay || !c.options.delay.show) return c.show();
    c.timeout = setTimeout(function() {
      c.hoverState == "in" && c.show()
    }, c.options.delay.show)
  }, b.prototype.leave = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions())
      .data("bs." + this.type);
    clearTimeout(c.timeout), c.hoverState = "out";
    if (!c.options.delay || !c.options.delay.hide) return c.hide();
    c.timeout = setTimeout(function() {
      c.hoverState == "out" && c.hide()
    }, c.options.delay.hide)
  }, b.prototype.show = function() {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      if (b.isDefaultPrevented()) return;
      var c = this,
        d = this.tip();
      this.setContent(), this.options.animation && d.addClass("fade");
      var e = typeof this.options.placement == "function" ? this.options.placement.call(this, d[0],
          this.$element[0]) : this.options.placement,
        f = /\s?auto?\s?/i,
        g = f.test(e);
      g && (e = e.replace(f, "") || "top"), d.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(
        this.$element);
      var h = this.getPosition(),
        i = d[0].offsetWidth,
        j = d[0].offsetHeight;
      if (g) {
        var k = this.$element.parent(),
          l = e,
          m = document.documentElement.scrollTop || document.body.scrollTop,
          n = this.options.container == "body" ? window.innerWidth : k.outerWidth(),
          o = this.options.container == "body" ? window.innerHeight : k.outerHeight(),
          p = this.options.container == "body" ? 0 : k.offset().left;
        e = e == "bottom" && h.top + h.height + j - m > o ? "top" : e == "top" && h.top - m - j < 0 ?
          "bottom" : e == "right" && h.right + i > n ? "left" : e == "left" && h.left - i < p ? "right" :
          e, d.removeClass(l).addClass(e)
      }
      var q = this.getCalculatedOffset(e, h, i, j);
      this.applyPlacement(q, e), this.hoverState = null;
      var r = function() {
        c.$element.trigger("shown.bs." + c.type)
      };
      a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(
        150) : r()
    }
  }, b.prototype.applyPlacement = function(b, c) {
    var d, e = this.tip(),
      f = e[0].offsetWidth,
      g = e[0].offsetHeight,
      h = parseInt(e.css("margin-top"), 10),
      i = parseInt(e.css("margin-left"), 10);
    isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(
      e[0], a.extend({
        using: function(a) {
          e.css({
            top: Math.round(a.top),
            left: Math.round(a.left)
          })
        }
      }, b), 0), e.addClass("in");
    var j = e[0].offsetWidth,
      k = e[0].offsetHeight;
    c == "top" && k != g && (d = !0, b.top = b.top + g - k);
    if (/bottom|top/.test(c)) {
      var l = 0;
      b.left < 0 && (l = b.left * -2, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight),
        this.replaceArrow(l - f + j, j, "left")
    } else this.replaceArrow(k - g, k, "top");
    d && e.offset(b)
  }, b.prototype.replaceArrow = function(a, b, c) {
    this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
  }, b.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass(
      "fade in top bottom left right")
  }, b.prototype.hide = function() {
    function e() {
      b.hoverState != "in" && c.detach(), b.$element.trigger("hidden.bs." + b.type)
    }
    var b = this,
      c = this.tip(),
      d = a.Event("hide.bs." + this.type);
    this.$element.trigger(d);
    if (d.isDefaultPrevented()) return;
    return c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? c.one(a.support
      .transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this
  }, b.prototype.fixTitle = function() {
    var a = this.$element;
    (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr(
      "data-original-title", a.attr("title") || "").attr("title", "")
  }, b.prototype.hasContent = function() {
    return this.getTitle()
  }, b.prototype.getPosition = function() {
    var b = this.$element[0];
    return a.extend({}, typeof b.getBoundingClientRect == "function" ? b.getBoundingClientRect() : {
      width: b.offsetWidth,
      height: b.offsetHeight
    }, this.$element.offset())
  }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
    return a == "bottom" ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : a == "top" ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : a == "left" ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    }
  }, b.prototype.getTitle = function() {
    var a, b = this.$element,
      c = this.options;
    return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) :
      c.title), a
  }, b.prototype.tip = function() {
    return this.$tip = this.$tip || a(this.options.template)
  }, b.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, b.prototype.validate = function() {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
  }, b.prototype.enable = function() {
    this.enabled = !0
  }, b.prototype.disable = function() {
    this.enabled = !1
  }, b.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, b.prototype.toggle = function(b) {
    var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) :
      this;
    c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
  }, b.prototype.destroy = function() {
    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
  };
  var c = a.fn.tooltip;
  a.fn.tooltip = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tooltip"),
        f = typeof c == "object" && c;
      if (!e && c == "destroy") return;
      e || d.data("bs.tooltip", e = new b(this, f)), typeof c == "string" && e[c]()
    })
  }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
    return a.fn.tooltip = c, this
  }
}(jQuery), + function(a) {
  "use strict";
  var b = function(b) {
    this.element = a(b)
  };
  b.prototype.show = function() {
    var b = this.element,
      c = b.closest("ul:not(.dropdown-menu)"),
      d = b.data("target");
    d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
    if (b.parent("li").hasClass("active")) return;
    var e = c.find(".active:last a")[0],
      f = a.Event("show.bs.tab", {
        relatedTarget: e
      });
    b.trigger(f);
    if (f.isDefaultPrevented()) return;
    var g = a(d);
    this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
      b.trigger({
        type: "shown.bs.tab",
        relatedTarget: e
      })
    })
  }, b.prototype.activate = function(b, c, d) {
    function g() {
      e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass(
        "active"), f ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(
        ".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
    }
    var e = c.find("> .active"),
      f = d && a.support.transition && e.hasClass("fade");
    f ? e.one(a.support.transition.end, g).emulateTransitionEnd(150) : g(), e.removeClass("in")
  };
  var c = a.fn.tab;
  a.fn.tab = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tab");
      e || d.data("bs.tab", e = new b(this)), typeof c == "string" && e[c]()
    })
  }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
    return a.fn.tab = c, this
  }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(
    b) {
    b.preventDefault(), a(this).tab("show")
  })
}(jQuery), + function(a) {
  "use strict";
  var b = function(c, d) {
    this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on(
        "scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a
        .proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin =
      this.pinnedOffset = null, this.checkPosition()
  };
  b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
    offset: 0
  }, b.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(b.RESET).addClass("affix");
    var a = this.$window.scrollTop(),
      c = this.$element.offset();
    return this.pinnedOffset = c.top - a
  }, b.prototype.checkPositionWithEventLoop = function() {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, b.prototype.checkPosition = function() {
    if (!this.$element.is(":visible")) return;
    var c = a(document).height(),
      d = this.$window.scrollTop(),
      e = this.$element.offset(),
      f = this.options.offset,
      g = f.top,
      h = f.bottom;
    this.affixed == "top" && (e.top += d), typeof f != "object" && (h = g = f), typeof g ==
      "function" && (g = f.top(this.$element)), typeof h == "function" && (h = f.bottom(this.$element));
    var i = this.unpin != null && d + this.unpin <= e.top ? !1 : h != null && e.top + this.$element.height() >=
      c - h ? "bottom" : g != null && d <= g ? "top" : !1;
    if (this.affixed === i) return;
    this.unpin && this.$element.css("top", "");
    var j = "affix" + (i ? "-" + i : ""),
      k = a.Event(j + ".bs.affix");
    this.$element.trigger(k);
    if (k.isDefaultPrevented()) return;
    this.affixed = i, this.unpin = i == "bottom" ? this.getPinnedOffset() : null, this.$element.removeClass(
        b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), i == "bottom" && this.$element
      .offset({
        top: c - h - this.$element.height()
      })
  };
  var c = a.fn.affix;
  a.fn.affix = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.affix"),
        f = typeof c == "object" && c;
      e || d.data("bs.affix", e = new b(this, f)), typeof c == "string" && e[c]()
    })
  }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
    return a.fn.affix = c, this
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var b = a(this),
        c = b.data();
      c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop &&
        (c.offset.top = c.offsetTop), b.affix(c)
    })
  })
}(jQuery), + function(a) {
  "use strict";
  var b = function(c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null,
      this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
  };
  b.DEFAULTS = {
    toggle: !0
  }, b.prototype.dimension = function() {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, b.prototype.show = function() {
    if (this.transitioning || this.$element.hasClass("in")) return;
    var b = a.Event("show.bs.collapse");
    this.$element.trigger(b);
    if (b.isDefaultPrevented()) return;
    var c = this.$parent && this.$parent.find("> .panel > .in");
    if (c && c.length) {
      var d = c.data("bs.collapse");
      if (d && d.transitioning) return;
      c.collapse("hide"), d || c.data("bs.collapse", null)
    }
    var e = this.dimension();
    this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
    var f = function() {
      this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning =
        0, this.$element.trigger("shown.bs.collapse")
    };
    if (!a.support.transition) return f.call(this);
    var g = a.camelCase(["scroll", e].join("-"));
    this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[
      0][g])
  }, b.prototype.hide = function() {
    if (this.transitioning || !this.$element.hasClass("in")) return;
    var b = a.Event("hide.bs.collapse");
    this.$element.trigger(b);
    if (b.isDefaultPrevented()) return;
    var c = this.dimension();
    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass(
      "collapse").removeClass("in"), this.transitioning = 1;
    var d = function() {
      this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass(
        "collapse")
    };
    if (!a.support.transition) return d.call(this);
    this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350)
  }, b.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  };
  var c = a.fn.collapse;
  a.fn.collapse = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.collapse"),
        f = a.extend({}, b.DEFAULTS, d.data(), typeof c == "object" && c);
      !e && f.toggle && c == "show" && (c = !c), e || d.data("bs.collapse", e = new b(this, f)),
        typeof c == "string" && e[c]()
    })
  }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
    return a.fn.collapse = c, this
  }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
    var c = a(this),
      d, e = c.attr("data-target") || b.preventDefault() || (d = c.attr("href")) && d.replace(
        /.*(?=#[^\s]+$)/, ""),
      f = a(e),
      g = f.data("bs.collapse"),
      h = g ? "toggle" : c.data(),
      i = c.attr("data-parent"),
      j = i && a(i);
    if (!g || !g.transitioning) j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(
      c).addClass("collapsed"), c[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed");
    f.collapse(h)
  })
}(jQuery), + function(a) {
  function b(c, d) {
    var e, f = a.proxy(this.process, this);
    this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement =
      this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d),
      this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/,
        "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget =
      null, this.refresh(), this.process()
  }
  "use strict", b.DEFAULTS = {
    offset: 10
  }, b.prototype.refresh = function() {
    var b = this.$element[0] == window ? "offset" : "position";
    this.offsets = a([]), this.targets = a([]);
    var c = this,
      d = this.$body.find(this.selector).map(function() {
        var d = a(this),
          e = d.data("target") || d.attr("href"),
          f = /^#./.test(e) && a(e);
        return f && f.length && f.is(":visible") && [
          [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
        ] || null
      }).sort(function(a, b) {
        return a[0] - b[0]
      }).each(function() {
        c.offsets.push(this[0]), c.targets.push(this[1])
      })
  }, b.prototype.process = function() {
    var a = this.$scrollElement.scrollTop() + this.options.offset,
      b = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
      c = b - this.$scrollElement.height(),
      d = this.offsets,
      e = this.targets,
      f = this.activeTarget,
      g;
    if (a >= c) return f != (g = e.last()[0]) && this.activate(g);
    if (f && a <= d[0]) return f != (g = e[0]) && this.activate(g);
    for (g = d.length; g--;) f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this.activate(
      e[g])
  }, b.prototype.activate = function(b) {
    this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass(
      "active");
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
      d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger(
      "activate.bs.scrollspy")
  };
  var c = a.fn.scrollspy;
  a.fn.scrollspy = function(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.scrollspy"),
        f = typeof c == "object" && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), typeof c == "string" && e[c]()
    })
  }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
    return a.fn.scrollspy = c, this
  }, a(window).on("load", function() {
    a('[data-spy="scroll"]').each(function() {
      var b = a(this);
      b.scrollspy(b.data())
    })
  })
}(jQuery), + function(a) {
  function b() {
    var a = document.createElement("bootstrap"),
      b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var c in b)
      if (a.style[c] !== undefined) return {
        end: b[c]
      };
    return !1
  }
  "use strict", a.fn.emulateTransitionEnd = function(b) {
    var c = !1,
      d = this;
    a(this).one(a.support.transition.end, function() {
      c = !0
    });
    var e = function() {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function() {
    a.support.transition = b()
  })
}(jQuery);
// imagesLoaded v2.1.1
(function(c, q) {
  var m = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  c.fn.imagesLoaded = function(f) {
    function n() {
      var b = c(j),
        a = c(h);
      d && (h.length ? d.reject(e, b, a) : d.resolve(e));
      c.isFunction(f) && f.call(g, e, b, a)
    }

    function p(b) {
      k(b.target, "error" === b.type)
    }

    function k(b, a) {
      b.src === m || -1 !== c.inArray(b, l) || (l.push(b), a ? h.push(b) : j.push(b), c.data(b,
        "imagesLoaded", {
          isBroken: a,
          src: b.src
        }), r && d.notifyWith(c(b), [a, e, c(j), c(h)]), e.length === l.length && (setTimeout(n), e
        .unbind(".imagesLoaded", p)))
    }
    var g = this,
      d = c.isFunction(c.Deferred) ? c.Deferred() : 0,
      r = c.isFunction(d.notify),
      e = g.find("img").add(g.filter("img")),
      l = [],
      j = [],
      h = [];
    c.isPlainObject(f) && c.each(f, function(b, a) {
      if ("callback" === b) f = a;
      else if (d) d[b](a)
    });
    e.length ? e.bind("load.imagesLoaded error.imagesLoaded", p).each(function(b, a) {
      var d = a.src,
        e = c.data(a, "imagesLoaded");
      if (e && e.src === d) k(a, e.isBroken);
      else if (a.complete && a.naturalWidth !== q) k(a, 0 === a.naturalWidth || 0 === a.naturalHeight);
      else if (a.readyState || a.complete) a.src = m, a.src = d
    }) : n();
    return d ? d.promise(g) : g
  }
})(jQuery);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
(function(m, g, d) {
  function r(b) {
    var a = {},
      c = /^jQuery\d+$/;
    d.each(b.attributes, function(b, d) {
      d.specified && !c.test(d.name) && (a[d.name] = d.value)
    });
    return a
  }

  function h(b, a) {
    var c = d(this);
    if (this.value == c.attr("placeholder") && c.hasClass("placeholder"))
      if (c.data("placeholder-password")) {
        c = c.hide().next().show().attr("id", c.removeAttr("id").data("placeholder-id"));
        if (!0 === b) return c[0].value = a;
        c.focus()
      } else this.value = "", c.removeClass("placeholder"), this == n() && this.select()
  }

  function l() {
    var b, a = d(this),
      c = this.id;
    if ("" == this.value) {
      if ("password" == this.type) {
        if (!a.data("placeholder-textinput")) {
          try {
            b = a.clone().attr({
              type: "text"
            })
          } catch (e) {
            b = d("<input>").attr(d.extend(r(this), {
              type: "text"
            }))
          }
          b.removeAttr("name").data({
            "placeholder-password": a,
            "placeholder-id": c
          }).bind("focus.placeholder", h);
          a.data({
            "placeholder-textinput": b,
            "placeholder-id": c
          }).before(b)
        }
        a = a.removeAttr("id").hide().prev().attr("id", c).show()
      }
      a.addClass("placeholder");
      a[0].value = a.attr("placeholder")
    } else a.removeClass("placeholder")
  }

  function n() {
    try {
      return g.activeElement
    } catch (b) {}
  }
  var f = "[object OperaMini]" == Object.prototype.toString.call(m.operamini),
    k = "placeholder" in g.createElement("input") && !f,
    f = "placeholder" in g.createElement("textarea") && !f,
    e = d.fn,
    p = d.valHooks,
    q = d.propHooks;
  k && f ? (e = e.placeholder = function() {
    return this
  }, e.input = e.textarea = !0) : (e = e.placeholder = function() {
    this.filter((k ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
      "focus.placeholder": h,
      "blur.placeholder": l
    }).data("placeholder-enabled", !0).trigger("blur.placeholder");
    return this
  }, e.input = k, e.textarea = f, e = {
    get: function(b) {
      var a = d(b),
        c = a.data("placeholder-password");
      return c ? c[0].value : a.data("placeholder-enabled") && a.hasClass("placeholder") ? "" : b.value
    },
    set: function(b, a) {
      var c = d(b),
        e = c.data("placeholder-password");
      if (e) return e[0].value = a;
      if (!c.data("placeholder-enabled")) return b.value = a;
      "" == a ? (b.value = a, b != n() && l.call(b)) : c.hasClass("placeholder") ? h.call(b, !0, a) ||
        (b.value = a) : b.value = a;
      return c
    }
  }, k || (p.input = e, q.value = e), f || (p.textarea = e, q.value = e), d(function() {
    d(g).delegate("form", "submit.placeholder", function() {
      var b = d(".placeholder", this).each(h);
      setTimeout(function() {
        b.each(l)
      }, 10)
    })
  }), d(m).bind("beforeunload.placeholder", function() {
    d(".placeholder").each(function() {
      this.value = ""
    })
  }))
})(this, document, jQuery);
// FitVids 1.0.3
(function(d) {
  d.fn.fitVids = function(f) {
    var e = {
      customSelector: null
    };
    if (!document.getElementById("fit-vids-style")) {
      var c = document.createElement("div"),
        g = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
      c.className = "fit-vids-style";
      c.id = "fit-vids-style";
      c.style.display = "none";
      c.innerHTML =
        "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
      g.parentNode.insertBefore(c, g)
    }
    f && d.extend(e, f);
    return this.each(function() {
      var b =
        "iframe[src*='player.vimeo.com'] iframe[src*='youtube.com'] iframe[src*='youtube-nocookie.com'] iframe[src*='kickstarter.com'][src*='video.html'] object embed"
        .split(" ");
      e.customSelector && b.push(e.customSelector);
      b = d(this).find(b.join(","));
      b = b.not("object object");
      b.each(function() {
        var a = d(this);
        if (!("embed" === this.tagName.toLowerCase() && a.parent("object").length || a.parent(
            ".fluid-width-video-wrapper").length)) {
          var b = "object" === this.tagName.toLowerCase() || a.attr("height") && !isNaN(parseInt(a
              .attr("height"), 10)) ? parseInt(a.attr("height"), 10) : a.height(),
            c = isNaN(parseInt(a.attr("width"), 10)) ? a.width() : parseInt(a.attr("width"), 10),
            b = b / c;
          a.attr("id") || (c = "fitvid" + Math.floor(999999 * Math.random()), a.attr("id", c));
          a.wrap('<div class="fluid-width-video-wrapper"></div>').parent(
            ".fluid-width-video-wrapper").css("padding-top", 100 * b + "%");
          a.removeAttr("height").removeAttr("width")
        }
      })
    })
  }
})(window.jQuery || window.Zepto);
// jQuery Waypoints - v2.0.5
(function() {
  var t = [].indexOf || function(t) {
      for (var e = 0, n = this.length; e < n; e++) {
        if (e in this && this[e] === t) return e
      }
      return -1
    },
    e = [].slice;
  (function(t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function(n) {
        return e(n, t)
      })
    } else {
      return e(t.jQuery, t)
    }
  })(window, function(n, r) {
    var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
    i = n(r);
    a = t.call(r, "ontouchstart") >= 0;
    s = {
      horizontal: {},
      vertical: {}
    };
    f = 1;
    c = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = function() {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {
          x: t.scrollLeft(),
          y: t.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        this.element[u] = this.id;
        c[this.id] = this;
        t.bind(y, function() {
          var t;
          if (!(e.didScroll || a)) {
            e.didScroll = true;
            t = function() {
              e.doScroll();
              return e.didScroll = false
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle)
          }
        });
        t.bind(p, function() {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function() {
              n[m]("refresh");
              return e.didResize = false
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle)
          }
        })
      }
      t.prototype.doScroll = function() {
        var t, e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };
        if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh")
        }
        n.each(t, function(t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function(t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e)
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e)
            }
          });
          l.sort(function(t, e) {
            return t.offset - e.offset
          });
          if (!o) {
            l.reverse()
          }
          return n.each(l, function(t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i])
            }
          })
        });
        return this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll
        }
      };
      t.prototype.refresh = function() {
        var t, e, r, i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };
        return n.each(t, function(t, e) {
          return n.each(i.waypoints[t], function(t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element)
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100)
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward])
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward])
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward])
            }
          })
        })
      };
      t.prototype.checkEmpty = function() {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));
          return delete c[this.id]
        }
      };
      return t
    }();
    l = function() {
      function t(t, e, r) {
        var i, o;
        if (r.offset === "bottom-in-view") {
          r.offset = function() {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height()
            }
            return t - n(this).outerHeight()
          }
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = this.element[w]) != null ? o : [];
        i.push(this.id);
        this.element[w] = i
      }
      t.prototype.trigger = function(t) {
        if (!this.enabled) {
          return
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t)
        }
        if (this.options.triggerOnce) {
          return this.destroy()
        }
      };
      t.prototype.disable = function() {
        return this.enabled = false
      };
      t.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true
      };
      t.prototype.destroy = function() {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty()
      };
      t.getWaypointsByElement = function(t) {
        var e, r;
        r = t[w];
        if (!r) {
          return []
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function(t) {
          return e[t]
        })
      };
      return t
    }();
    d = {
      init: function(t, e) {
        var r;
        e = n.extend({}, n.fn[g].defaults, e);
        if ((r = e.handler) == null) {
          e.handler = t
        }
        this.each(function() {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i)
          }
          i = n(i);
          r = c[i[0][u]];
          if (!r) {
            r = new o(i)
          }
          return new l(t, r, e)
        });
        n[m]("refresh");
        return this
      },
      disable: function() {
        return d._invoke.call(this, "disable")
      },
      enable: function() {
        return d._invoke.call(this, "enable")
      },
      destroy: function() {
        return d._invoke.call(this, "destroy")
      },
      prev: function(t, e) {
        return d._traverse.call(this, t, e, function(t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1])
          }
        })
      },
      next: function(t, e) {
        return d._traverse.call(this, t, e, function(t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1])
          }
        })
      },
      _traverse: function(t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical"
        }
        if (e == null) {
          e = r
        }
        l = h.aggregate(e);
        o = [];
        this.each(function() {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t])
        });
        return this.pushStack(o)
      },
      _invoke: function(t) {
        this.each(function() {
          var e;
          e = l.getWaypointsByElement(this);
          return n.each(e, function(e, n) {
            n[t]();
            return true
          })
        });
        return this
      }
    };
    n.fn[g] = function() {
      var t, r;
      r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (d[r]) {
        return d[r].apply(this, t)
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments)
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r])
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.")
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.")
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    h = {
      refresh: function() {
        return n.each(c, function(t, e) {
          return e.refresh()
        })
      },
      viewportHeight: function() {
        var t;
        return (t = r.innerHeight) != null ? t : i.height()
      },
      aggregate: function(t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
        }
        if (!e) {
          return []
        }
        r = {
          horizontal: [],
          vertical: []
        };
        n.each(r, function(t, i) {
          n.each(e[t], function(t, e) {
            return i.push(e)
          });
          i.sort(function(t, e) {
            return t.offset - e.offset
          });
          r[t] = n.map(i, function(t) {
            return t.element
          });
          return r[t] = n.unique(r[t])
        });
        return r
      },
      above: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "vertical", function(t, e) {
          return e.offset <= t.oldScroll.y
        })
      },
      below: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "vertical", function(t, e) {
          return e.offset > t.oldScroll.y
        })
      },
      left: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "horizontal", function(t, e) {
          return e.offset <= t.oldScroll.x
        })
      },
      right: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "horizontal", function(t, e) {
          return e.offset > t.oldScroll.x
        })
      },
      enable: function() {
        return h._invoke("enable")
      },
      disable: function() {
        return h._invoke("disable")
      },
      destroy: function() {
        return h._invoke("destroy")
      },
      extendFn: function(t, e) {
        return d[t] = e
      },
      _invoke: function(t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function(e, n) {
          n[t]();
          return true
        })
      },
      _filter: function(t, e, r) {
        var i, o;
        i = c[n(t)[0][u]];
        if (!i) {
          return []
        }
        o = [];
        n.each(i.waypoints[e], function(t, e) {
          if (r(i, e)) {
            return o.push(e)
          }
        });
        o.sort(function(t, e) {
          return t.offset - e.offset
        });
        return n.map(o, function(t) {
          return t.element
        })
      }
    };
    n[m] = function() {
      var t, n;
      n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (h[n]) {
        return h[n].apply(null, t)
      } else {
        return h.aggregate.call(null, n)
      }
    };
    n[m].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return i.on("load.waypoints", function() {
      return n[m]("refresh")
    })
  })
}).call(this);
// Parallax Script
(function(d, c, e, q) {
  var f = d(c),
    g = !1,
    k = 0,
    h = [],
    l = f.height(),
    r = c.requestAnimationFrame || c.mozRequestAnimationFrame || c.webkitRequestAnimationFrame || c.oRequestAnimationFrame ||
    c.msRequestAnimationFrame || function(a) {
      a()
    },
    m = function(a, b) {
      this._init(a, b)
    },
    n = function() {
      return c.pageYOffset !== q ? c.pageYOffset : (e.documentElement || e.body.parentNode || e.body)
        .scrollTop
    },
    p = function() {
      g || (k = n(), r(s), g = !0)
    },
    s = function() {
      var a;
      for (a = 0; a < h.length; a++) h[a].update(k);
      g = !1
    };
  f.on("orientationchange.parallax resize.parallax", function() {
    l = f.height();
    p()
  }).on("scroll.parallax", p);
  m.prototype = {
    defaults: {
      breakpoints: {
        xs: 768,
        md: 992,
        lg: 1200
      },
      attribute: "background",
      xpos: "50%",
      mode: "parallax",
      activeClass: "has-bg",
      parallaxClass: "parallax-bg fixed-bg",
      fixedBgClass: "fixed-bg",
      speedFactor: .4,
      loadingText: "loading..."
    },
    _init: function(a, b) {
      this.element = d(a);
      this.options = d.extend(!0, {}, this.defaults, b, d(a).data());
      this.element.addClass(this.options.activeClass);
      this._loadBackground();
      this._activate()
    },
    _loadBackground: function() {
      var a = this.options.attribute;
      if (this.options.breakpoints && screen && screen.width) {
        var b;
        d.each(d.map(this.options.breakpoints, function(a, b) {
          return {
            key: b,
            size: a
          }
        }).sort(function(a, b) {
          return a.size < b.size ? -1 : 1
        }), function() {
          screen.width >= this.size && (b = this)
        });
        b && this.element.data(this.options.attribute + "-" + b.key) && (a = this.options.attribute +
          "-" + b.key)
      }
      this.element[0].style.backgroundImage = "url(" + this.element.data(a) + ")"
    },
    _activate: function() {
      this.refresh();
      this.update(n());
      "parallax" == this.options.mode ? this.element.addClass(this.options.parallaxClass) : "fixed" ==
        this.options.mode && this.element.addClass(this.options.fixedBgClass)
    },
    update: function(a) {
      "parallax" == this.options.mode && this.elementBottom >= a && this.elementTop <= a + l && (
        this.element[0].style.backgroundPosition = this.options.xpos + " " + Math.round((this.elementTop -
          a) * this.options.speedFactor) + "px")
    },
    refresh: function() {
      this.elementTop = this.element.offset().top;
      this.elementBottom = this.elementTop + this.element.outerHeight()
    }
  };
  d.fn.parallax = function(a) {
    return this.each(function() {
      var b = d.data(this, "parallax"),
        c = "object" == typeof a && a;
      b || (d.data(this, "parallax", b = new m(this, c)), h.push(b));
      if ("string" == typeof a) b[a]()
    })
  }
})(jQuery, window, document);
// countUp.js v1.1.1
function countUp(a, b, c, d, e, f) {
  for (var g = 0, h = ["webkit", "moz", "ms"], i = 0; i < h.length && !window.requestAnimationFrame; ++
    i) window.requestAnimationFrame = window[h[i] + "RequestAnimationFrame"], window.cancelAnimationFrame =
    window[h[i] + "CancelAnimationFrame"] || window[h[i] + "CancelRequestAnimationFrame"];
  window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
    var c = (new Date).getTime(),
      d = Math.max(0, 16 - (c - g)),
      e = window.setTimeout(function() {
        a(c + d)
      }, d);
    return g = c + d, e
  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    clearTimeout(a)
  }), this.options = f || {
    useEasing: !0,
    useGrouping: !0,
    separator: ",",
    decimal: "."
  }, "" == this.options.separator && (this.options.useGrouping = !1);
  var j = this;
  this.d = "string" == typeof a ? document.getElementById(a) : a, this.startVal = Number(b), this.endVal =
    Number(c), this.countDown = this.startVal > this.endVal ? !0 : !1, this.startTime = null, this.timestamp =
    null, this.remaining = null, this.frameVal = this.startVal, this.rAF = null, this.decimals = Math
    .max(0, d || 0), this.dec = Math.pow(10, this.decimals), this.duration = 1e3 * e || 2e3, this.version =
    function() {
      return "1.1.1"
    }, this.easeOutExpo = function(a, b, c, d) {
      return 1024 * c * (-Math.pow(2, -10 * a / d) + 1) / 1023 + b
    }, this.count = function(a) {
      null === j.startTime && (j.startTime = a), j.timestamp = a;
      var b = a - j.startTime;
      if (j.remaining = j.duration - b, j.options.useEasing)
        if (j.countDown) {
          var c = j.easeOutExpo(b, 0, j.startVal - j.endVal, j.duration);
          j.frameVal = j.startVal - c
        } else j.frameVal = j.easeOutExpo(b, j.startVal, j.endVal - j.startVal, j.duration);
      else if (j.countDown) {
        var c = (j.startVal - j.endVal) * (b / j.duration);
        j.frameVal = j.startVal - c
      } else j.frameVal = j.startVal + (j.endVal - j.startVal) * (b / j.duration);
      j.frameVal = Math.round(j.frameVal * j.dec) / j.dec, j.frameVal = j.countDown ? j.frameVal < j.endVal ?
        j.endVal : j.frameVal : j.frameVal > j.endVal ? j.endVal : j.frameVal, j.d.innerHTML = j.formatNumber(
          j.frameVal.toFixed(j.decimals)), b < j.duration ? j.rAF = requestAnimationFrame(j.count) :
        null != j.callback && j.callback()
    }, this.start = function(a) {
      return j.callback = a, isNaN(j.endVal) || isNaN(j.startVal) ? (console.log(
          "countUp error: startVal or endVal is not a number"), j.d.innerHTML = "--") : j.rAF =
        requestAnimationFrame(j.count), !1
    }, this.stop = function() {
      cancelAnimationFrame(j.rAF)
    }, this.reset = function() {
      j.startTime = null, cancelAnimationFrame(j.rAF), j.d.innerHTML = j.formatNumber(j.startVal.toFixed(
        j.decimals))
    }, this.resume = function() {
      j.startTime = null, j.duration = j.remaining, j.startVal = j.frameVal, requestAnimationFrame(j.count)
    }, this.formatNumber = function(a) {
      a += "";
      var b, c, d, e;
      if (b = a.split("."), c = b[0], d = b.length > 1 ? j.options.decimal + b[1] : "", e =
        /(\d+)(\d{3})/, j.options.useGrouping)
        for (; e.test(c);) c = c.replace(e, "$1" + j.options.separator + "$2");
      return c + d
    }, j.d.innerHTML = j.formatNumber(j.startVal.toFixed(j.decimals))
}
// Youxi Google Maps
(function(c, d, n, p) {
  c.fn.youxiGoogleMaps = function() {
    if (c.fn.gmap3) {
      var m = c.now(),
        g;
      (function(e, a, b, f) {
        if (g) return g;
        var l = c.Deferred(),
          h = function() {
            l.resolve(d.google && d.google.maps ? d.google.maps : !1)
          },
          k = "loadGoogleMaps_" + m++;
        a = c.extend({
          sensor: f || "false"
        }, a ? {
          key: a
        } : {}, b ? {
          language: b
        } : {});
        d.google && d.google.maps ? h() : d.google && d.google.load ? d.google.load("maps", e || 3, {
          other_params: c.param(a),
          callback: h
        }) : (a = c.extend(a, {
          v: e || 3,
          callback: k
        }), d[k] = function() {
          h();
          setTimeout(function() {
            try {
              delete d[k]
            } catch (a) {}
          }, 20)
        }, c.ajax({
          dataType: "script",
          data: a,
          url: "//maps.googleapis.com/maps/api/js"
        }));
        return g = l.promise()
      })().done(c.proxy(function() {
        this.each(function() {
          var e = {},
            a = c(this).data(),
            b, f = [];
          for (b in a) switch (b) {
            case "center":
              e[b] = a[b].split(",");
              break;
            case "mapTypeId":
              e[b] = d.google.maps.MapTypeId[a[b]];
              break;
            case "markers":
              f = c.map(a[b] || [], function(a) {
                return {
                  latLng: [a.lat, a.lng]
                }
              });
              break;
            case "monochrome":
              a[b] && (e.styles = [{
                stylers: [{
                  saturation: -100
                }]
              }]);
            default:
              e[b] = a[b]
          }
          c(this).gmap3({
            map: {
              options: e
            },
            marker: {
              values: f
            }
          })
        })
      }, this));
      return this
    }
  }
})(jQuery, window, document);
// jFlickrFeed - Copyright (C) 2009 Joel Sutherland
(function(b) {
  b.fn.jflickrfeed = function(c, e) {
    c = b.extend(!0, {
      flickrbase: "http://api.flickr.com/services/feeds/",
      feedapi: "photos_public.gne",
      limit: 20,
      qstrings: {
        lang: "en-us",
        format: "json",
        jsoncallback: "?"
      },
      cleanDescription: !0,
      useTemplate: !0,
      itemTemplate: "",
      itemCallback: function() {}
    }, c);
    var d = c.flickrbase + c.feedapi + "?",
      f = !0,
      g;
    for (g in c.qstrings) f || (d += "&"), d += g + "=" + c.qstrings[g], f = !1;
    return b(this).each(function() {
      var g = b(this),
        f = this;
      b.getJSON(d, function(d) {
        b.each(d.items, function(d, a) {
          if (d < c.limit) {
            if (c.cleanDescription) {
              var b = /<p>(.*?)<\/p>/g,
                e = a.description;
              b.test(e) && (a.description = e.match(b)[2], void 0 != a.description && (a.description =
                a.description.replace("<p>", "").replace("</p>", "")))
            }
            a.image_s = a.media.m.replace("_m", "_s");
            a.image_t = a.media.m.replace("_m", "_t");
            a.image_m = a.media.m.replace("_m", "_m");
            a.image = a.media.m.replace("_m", "");
            a.image_b = a.media.m.replace("_m", "_b");
            delete a.media;
            if (c.useTemplate) {
              var b = c.itemTemplate,
                h;
              for (h in a) b = b.replace(RegExp("{{" + h + "}}", "g"), a[h]);
              g.append(b)
            }
            c.itemCallback.call(f, a)
          }
        });
        b.isFunction(e) && e.call(f, d)
      })
    })
  }
})(jQuery);
// jQuery Cycle2; version: 2.1.2 build: 20140216
(function(e) {
  "use strict";

  function i(e) {
    return (e || "").toLowerCase()
  }
  var t = "2.1.2";
  e.fn.cycle = function(t) {
    var n;
    return 0 !== this.length || e.isReady ? this.each(function() {
      var n, s, o, l, c = e(this),
        r = e.fn.cycle.log;
      if (!c.data("cycle.opts")) {
        (c.data("cycle-log") === !1 || t && t.log === !1 || s && s.log === !1) && (r = e.noop), r(
          "--c2 init--"), n = c.data();
        for (var a in n) n.hasOwnProperty(a) && /^cycle[A-Z]+/.test(a) && (l = n[a], o = a.match(
          /^cycle(.*)/)[1].replace(/^[A-Z]/, i), r(o + ":", l, "(" + typeof l + ")"), n[o] = l);
        s = e.extend({}, e.fn.cycle.defaults, n, t || {}), s.timeoutId = 0, s.paused = s.paused ||
          !1, s.container = c, s._maxZ = s.maxZ, s.API = e.extend({
            _container: c
          }, e.fn.cycle.API), s.API.log = r, s.API.trigger = function(e, i) {
            return s.container.trigger(e, i), s.API
          }, c.data("cycle.opts", s), c.data("cycle.API", s.API), s.API.trigger("cycle-bootstrap", [
            s, s.API
          ]), s.API.addInitialSlides(), s.API.preInitSlideshow(), s.slides.length && s.API.initSlideshow()
      }
    }) : (n = {
      s: this.selector,
      c: this.context
    }, e.fn.cycle.log("requeuing slideshow (dom not ready)"), e(function() {
      e(n.s, n.c).cycle(t)
    }), this)
  }, e.fn.cycle.API = {
    opts: function() {
      return this._container.data("cycle.opts")
    },
    addInitialSlides: function() {
      var i = this.opts(),
        t = i.slides;
      i.slideCount = 0, i.slides = e(), t = t.jquery ? t : i.container.find(t), i.random && t.sort(
        function() {
          return Math.random() - .5
        }), i.API.add(t)
    },
    preInitSlideshow: function() {
      var i = this.opts();
      i.API.trigger("cycle-pre-initialize", [i]);
      var t = e.fn.cycle.transitions[i.fx];
      t && e.isFunction(t.preInit) && t.preInit(i), i._preInitialized = !0
    },
    postInitSlideshow: function() {
      var i = this.opts();
      i.API.trigger("cycle-post-initialize", [i]);
      var t = e.fn.cycle.transitions[i.fx];
      t && e.isFunction(t.postInit) && t.postInit(i)
    },
    initSlideshow: function() {
      var i, t = this.opts(),
        n = t.container;
      t.API.calcFirstSlide(), "static" == t.container.css("position") && t.container.css("position",
          "relative"), e(t.slides[t.currSlide]).css({
          opacity: 1,
          display: "block",
          visibility: "visible"
        }), t.API.stackSlides(t.slides[t.currSlide], t.slides[t.nextSlide], !t.reverse), t.pauseOnHover &&
        (t.pauseOnHover !== !0 && (n = e(t.pauseOnHover)), n.hover(function() {
          t.API.pause(!0)
        }, function() {
          t.API.resume(!0)
        })), t.timeout && (i = t.API.getSlideOpts(t.currSlide), t.API.queueTransition(i, i.timeout +
          t.delay)), t._initialized = !0, t.API.updateView(!0), t.API.trigger("cycle-initialized", [t]),
        t.API.postInitSlideshow()
    },
    pause: function(i) {
      var t = this.opts(),
        n = t.API.getSlideOpts(),
        s = t.hoverPaused || t.paused;
      i ? t.hoverPaused = !0 : t.paused = !0, s || (t.container.addClass("cycle-paused"), t.API.trigger(
        "cycle-paused", [t]).log("cycle-paused"), n.timeout && (clearTimeout(t.timeoutId), t.timeoutId =
        0, t._remainingTimeout -= e.now() - t._lastQueue, (0 > t._remainingTimeout || isNaN(t._remainingTimeout)) &&
        (t._remainingTimeout = void 0)))
    },
    resume: function(e) {
      var i = this.opts(),
        t = !i.hoverPaused && !i.paused;
      e ? i.hoverPaused = !1 : i.paused = !1, t || (i.container.removeClass("cycle-paused"), 0 ===
        i.slides.filter(":animated").length && i.API.queueTransition(i.API.getSlideOpts(), i._remainingTimeout),
        i.API.trigger("cycle-resumed", [i, i._remainingTimeout]).log("cycle-resumed"))
    },
    add: function(i, t) {
      var n, s = this.opts(),
        o = s.slideCount,
        l = !1;
      "string" == e.type(i) && (i = e.trim(i)), e(i).each(function() {
        var i, n = e(this);
        t ? s.container.prepend(n) : s.container.append(n), s.slideCount++, i = s.API.buildSlideOpts(
            n), s.slides = t ? e(n).add(s.slides) : s.slides.add(n), s.API.initSlide(i, n, --s._maxZ),
          n.data("cycle.opts", i), s.API.trigger("cycle-slide-added", [s, i, n])
      }), s.API.updateView(!0), l = s._preInitialized && 2 > o && s.slideCount >= 1, l && (s._initialized ?
        s.timeout && (n = s.slides.length, s.nextSlide = s.reverse ? n - 1 : 1, s.timeoutId || s.API
          .queueTransition(s)) : s.API.initSlideshow())
    },
    calcFirstSlide: function() {
      var e, i = this.opts();
      e = parseInt(i.startingSlide || 0, 10), (e >= i.slides.length || 0 > e) && (e = 0), i.currSlide =
        e, i.reverse ? (i.nextSlide = e - 1, 0 > i.nextSlide && (i.nextSlide = i.slides.length - 1)) :
        (i.nextSlide = e + 1, i.nextSlide == i.slides.length && (i.nextSlide = 0))
    },
    calcNextSlide: function() {
      var e, i = this.opts();
      i.reverse ? (e = 0 > i.nextSlide - 1, i.nextSlide = e ? i.slideCount - 1 : i.nextSlide - 1, i
        .currSlide = e ? 0 : i.nextSlide + 1) : (e = i.nextSlide + 1 == i.slides.length, i.nextSlide =
        e ? 0 : i.nextSlide + 1, i.currSlide = e ? i.slides.length - 1 : i.nextSlide - 1)
    },
    calcTx: function(i, t) {
      var n, s = i;
      return t && s.manualFx && (n = e.fn.cycle.transitions[s.manualFx]), n || (n = e.fn.cycle.transitions[
        s.fx]), n || (n = e.fn.cycle.transitions.fade, s.API.log('Transition "' + s.fx +
        '" not found.  Using fade.')), n
    },
    prepareTx: function(e, i) {
      var t, n, s, o, l, c = this.opts();
      return 2 > c.slideCount ? (c.timeoutId = 0, void 0) : (!e || c.busy && !c.manualTrump || (c.API
        .stopTransition(), c.busy = !1, clearTimeout(c.timeoutId), c.timeoutId = 0), c.busy || (0 !==
        c.timeoutId || e) && (n = c.slides[c.currSlide], s = c.slides[c.nextSlide], o = c.API.getSlideOpts(
          c.nextSlide), l = c.API.calcTx(o, e), c._tx = l, e && void 0 !== o.manualSpeed && (o.speed =
          o.manualSpeed), c.nextSlide != c.currSlide && (e || !c.paused && !c.hoverPaused && c.timeout) ?
        (c.API.trigger("cycle-before", [o, n, s, i]), l.before && l.before(o, n, s, i), t =
          function() {
            c.busy = !1, c.container.data("cycle.opts") && (l.after && l.after(o, n, s, i), c.API.trigger(
              "cycle-after", [o, n, s, i]), c.API.queueTransition(o), c.API.updateView(!0))
          }, c.busy = !0, l.transition ? l.transition(o, n, s, i, t) : c.API.doTransition(o, n, s,
            i, t), c.API.calcNextSlide(), c.API.updateView()) : c.API.queueTransition(o)), void 0)
    },
    doTransition: function(i, t, n, s, o) {
      var l = i,
        c = e(t),
        r = e(n),
        a = function() {
          r.animate(l.animIn || {
            opacity: 1
          }, l.speed, l.easeIn || l.easing, o)
        };
      r.css(l.cssBefore || {}), c.animate(l.animOut || {}, l.speed, l.easeOut || l.easing, function() {
        c.css(l.cssAfter || {}), l.sync || a()
      }), l.sync && a()
    },
    queueTransition: function(i, t) {
      var n = this.opts(),
        s = void 0 !== t ? t : i.timeout;
      return 0 === n.nextSlide && 0 === --n.loop ? (n.API.log("terminating; loop=0"), n.timeout = 0,
          s ? setTimeout(function() {
            n.API.trigger("cycle-finished", [n])
          }, s) : n.API.trigger("cycle-finished", [n]), n.nextSlide = n.currSlide, void 0) : void 0 !==
        n.continueAuto && (n.continueAuto === !1 || e.isFunction(n.continueAuto) && n.continueAuto() ===
          !1) ? (n.API.log("terminating automatic transitions"), n.timeout = 0, n.timeoutId &&
          clearTimeout(n.timeoutId), void 0) : (s && (n._lastQueue = e.now(), void 0 === t && (n._remainingTimeout =
          i.timeout), n.paused || n.hoverPaused || (n.timeoutId = setTimeout(function() {
          n.API.prepareTx(!1, !n.reverse)
        }, s))), void 0)
    },
    stopTransition: function() {
      var e = this.opts();
      e.slides.filter(":animated").length && (e.slides.stop(!1, !0), e.API.trigger(
        "cycle-transition-stopped", [e])), e._tx && e._tx.stopTransition && e._tx.stopTransition(e)
    },
    advanceSlide: function(e) {
      var i = this.opts();
      return clearTimeout(i.timeoutId), i.timeoutId = 0, i.nextSlide = i.currSlide + e, 0 > i.nextSlide ?
        i.nextSlide = i.slides.length - 1 : i.nextSlide >= i.slides.length && (i.nextSlide = 0), i.API
        .prepareTx(!0, e >= 0), !1
    },
    buildSlideOpts: function(t) {
      var n, s, o = this.opts(),
        l = t.data() || {};
      for (var c in l) l.hasOwnProperty(c) && /^cycle[A-Z]+/.test(c) && (n = l[c], s = c.match(
        /^cycle(.*)/)[1].replace(/^[A-Z]/, i), o.API.log("[" + (o.slideCount - 1) + "]", s + ":",
        n, "(" + typeof n + ")"), l[s] = n);
      l = e.extend({}, e.fn.cycle.defaults, o, l), l.slideNum = o.slideCount;
      try {
        delete l.API, delete l.slideCount, delete l.currSlide, delete l.nextSlide, delete l.slides
      } catch (r) {}
      return l
    },
    getSlideOpts: function(i) {
      var t = this.opts();
      void 0 === i && (i = t.currSlide);
      var n = t.slides[i],
        s = e(n).data("cycle.opts");
      return e.extend({}, t, s)
    },
    initSlide: function(i, t, n) {
      var s = this.opts();
      t.css(i.slideCss || {}), n > 0 && t.css("zIndex", n), isNaN(i.speed) && (i.speed = e.fx.speeds[
        i.speed] || e.fx.speeds._default), i.sync || (i.speed = i.speed / 2), t.addClass(s.slideClass)
    },
    updateView: function(e, i) {
      var t = this.opts();
      if (t._initialized) {
        var n = t.API.getSlideOpts(),
          s = t.slides[t.currSlide];
        !e && i !== !0 && (t.API.trigger("cycle-update-view-before", [t, n, s]), 0 > t.updateView) ||
          (t.slideActiveClass && t.slides.removeClass(t.slideActiveClass).eq(t.currSlide).addClass(t.slideActiveClass),
            e && t.hideNonActive && t.slides.filter(":not(." + t.slideActiveClass + ")").css(
              "visibility", "hidden"), 0 === t.updateView && setTimeout(function() {
              t.API.trigger("cycle-update-view", [t, n, s, e])
            }, n.speed / (t.sync ? 2 : 1)), 0 !== t.updateView && t.API.trigger("cycle-update-view", [
              t, n, s, e
            ]), e && t.API.trigger("cycle-update-view-after", [t, n, s]))
      }
    },
    getComponent: function(i) {
      var t = this.opts(),
        n = t[i];
      return "string" == typeof n ? /^\s*[\>|\+|~]/.test(n) ? t.container.find(n) : e(n) : n.jquery ?
        n : e(n)
    },
    stackSlides: function(i, t, n) {
      var s = this.opts();
      i || (i = s.slides[s.currSlide], t = s.slides[s.nextSlide], n = !s.reverse), e(i).css(
        "zIndex", s.maxZ);
      var o, l = s.maxZ - 2,
        c = s.slideCount;
      if (n) {
        for (o = s.currSlide + 1; c > o; o++) e(s.slides[o]).css("zIndex", l--);
        for (o = 0; s.currSlide > o; o++) e(s.slides[o]).css("zIndex", l--)
      } else {
        for (o = s.currSlide - 1; o >= 0; o--) e(s.slides[o]).css("zIndex", l--);
        for (o = c - 1; o > s.currSlide; o--) e(s.slides[o]).css("zIndex", l--)
      }
      e(t).css("zIndex", s.maxZ - 1)
    },
    getSlideIndex: function(e) {
      return this.opts().slides.index(e)
    }
  }, e.fn.cycle.log = function() {
    window.console && console.log && console.log("[cycle2] " + Array.prototype.join.call(arguments,
      " "))
  }, e.fn.cycle.version = function() {
    return "Cycle2: " + t
  }, e.fn.cycle.transitions = {
    custom: {},
    none: {
      before: function(e, i, t, n) {
        e.API.stackSlides(t, i, n), e.cssBefore = {
          opacity: 1,
          visibility: "visible",
          display: "block"
        }
      }
    },
    fade: {
      before: function(i, t, n, s) {
        var o = i.API.getSlideOpts(i.nextSlide).slideCss || {};
        i.API.stackSlides(t, n, s), i.cssBefore = e.extend(o, {
          opacity: 0,
          visibility: "visible",
          display: "block"
        }), i.animIn = {
          opacity: 1
        }, i.animOut = {
          opacity: 0
        }
      }
    },
    fadeout: {
      before: function(i, t, n, s) {
        var o = i.API.getSlideOpts(i.nextSlide).slideCss || {};
        i.API.stackSlides(t, n, s), i.cssBefore = e.extend(o, {
          opacity: 1,
          visibility: "visible",
          display: "block"
        }), i.animOut = {
          opacity: 0
        }
      }
    },
    scrollHorz: {
      before: function(e, i, t, n) {
        e.API.stackSlides(i, t, n);
        var s = e.container.css("overflow", "hidden").width();
        e.cssBefore = {
          left: n ? s : -s,
          top: 0,
          opacity: 1,
          visibility: "visible",
          display: "block"
        }, e.cssAfter = {
          zIndex: e._maxZ - 2,
          left: 0
        }, e.animIn = {
          left: 0
        }, e.animOut = {
          left: n ? -s : s
        }
      }
    }
  }, e.fn.cycle.defaults = {
    allowWrap: !0,
    autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
    delay: 0,
    easing: null,
    fx: "fade",
    hideNonActive: !0,
    loop: 0,
    manualFx: void 0,
    manualSpeed: void 0,
    manualTrump: !0,
    maxZ: 100,
    pauseOnHover: !1,
    reverse: !1,
    slideActiveClass: "cycle-slide-active",
    slideClass: "cycle-slide",
    slideCss: {
      position: "absolute",
      top: 0,
      left: 0
    },
    slides: "> img",
    speed: 500,
    startingSlide: 0,
    sync: !0,
    timeout: 4e3,
    updateView: 0
  }, e(document).ready(function() {
    e(e.fn.cycle.defaults.autoSelector).cycle()
  })
})(jQuery);
/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20140128 */
(function(e) {
  "use strict";
  var i = e.fn.cycle;
  e.fn.cycle = function(t) {
    var n, s, o, l = e.makeArray(arguments);
    return "number" == e.type(t) ? this.cycle("goto", t) : "string" == e.type(t) ? this.each(
      function() {
        var c;
        return n = t, o = e(this).data("cycle.opts"), void 0 === o ? (i.log(
          'slideshow must be initialized before sending commands; "' + n + '" ignored'), void 0) : (
          n = "goto" == n ? "jump" : n, s = o.API[n], e.isFunction(s) ? (c = e.makeArray(l), c.shift(),
            s.apply(o.API, c)) : (i.log("unknown command: ", n), void 0))
      }) : i.apply(this, arguments)
  }, e.extend(e.fn.cycle, i), e.extend(i.API, {
    next: function() {
      var e = this.opts();
      if (!e.busy || e.manualTrump) {
        var i = e.reverse ? -1 : 1;
        e.allowWrap === !1 && e.currSlide + i >= e.slideCount || (e.API.advanceSlide(i), e.API.trigger(
          "cycle-next", [e]).log("cycle-next"))
      }
    },
    prev: function() {
      var e = this.opts();
      if (!e.busy || e.manualTrump) {
        var i = e.reverse ? 1 : -1;
        e.allowWrap === !1 && 0 > e.currSlide + i || (e.API.advanceSlide(i), e.API.trigger(
          "cycle-prev", [e]).log("cycle-prev"))
      }
    },
    destroy: function() {
      this.stop();
      var i = this.opts(),
        t = e.isFunction(e._data) ? e._data : e.noop;
      clearTimeout(i.timeoutId), i.timeoutId = 0, i.API.stop(), i.API.trigger("cycle-destroyed", [
          i
        ]).log("cycle-destroyed"), i.container.removeData(), t(i.container[0], "parsedAttrs", !1),
        i.retainStylesOnDestroy || (i.container.removeAttr("style"), i.slides.removeAttr("style"),
          i.slides.removeClass(i.slideActiveClass)), i.slides.each(function() {
          e(this).removeData(), t(this, "parsedAttrs", !1)
        })
    },
    jump: function(e) {
      var i, t = this.opts();
      if (!t.busy || t.manualTrump) {
        var n = parseInt(e, 10);
        if (isNaN(n) || 0 > n || n >= t.slides.length) return t.API.log(
          "goto: invalid slide index: " + n), void 0;
        if (n == t.currSlide) return t.API.log("goto: skipping, already on slide", n), void 0;
        t.nextSlide = n, clearTimeout(t.timeoutId), t.timeoutId = 0, t.API.log("goto: ", n,
          " (zero-index)"), i = t.currSlide < t.nextSlide, t.API.prepareTx(!0, i)
      }
    },
    stop: function() {
      var i = this.opts(),
        t = i.container;
      clearTimeout(i.timeoutId), i.timeoutId = 0, i.API.stopTransition(), i.pauseOnHover && (i.pauseOnHover !==
        !0 && (t = e(i.pauseOnHover)), t.off("mouseenter mouseleave")), i.API.trigger(
        "cycle-stopped", [i]).log("cycle-stopped")
    },
    reinit: function() {
      var e = this.opts();
      e.API.destroy(), e.container.cycle()
    },
    remove: function(i) {
      for (var t, n, s = this.opts(), o = [], l = 1, c = 0; s.slides.length > c; c++) t = s.slides[
        c], c == i ? n = t : (o.push(t), e(t).data("cycle.opts").slideNum = l, l++);
      n && (s.slides = e(o), s.slideCount--, e(n).remove(), i == s.currSlide ? s.API.advanceSlide(
        1) : s.currSlide > i ? s.currSlide-- : s.currSlide++, s.API.trigger("cycle-slide-removed", [
        s, i, n
      ]).log("cycle-slide-removed"), s.API.updateView())
    }
  }), e(document).on("click.cycle", "[data-cycle-cmd]", function(i) {
    i.preventDefault();
    var t = e(this),
      n = t.data("cycle-cmd"),
      s = t.data("cycle-context") || ".cycle-slideshow";
    e(s).cycle(n, t.data("cycle-arg"))
  })
})(jQuery);
// Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20140128
(function(e) {
  "use strict";
  e.extend(e.fn.cycle.defaults, {
    next: "> .cycle-next",
    nextEvent: "click.cycle",
    disabledClass: "disabled",
    prev: "> .cycle-prev",
    prevEvent: "click.cycle",
    swipe: !1
  }), e(document).on("cycle-initialized", function(e, t) {
    if (t.API.getComponent("next").on(t.nextEvent, function(e) {
        e.preventDefault(), t.API.next()
      }), t.API.getComponent("prev").on(t.prevEvent, function(e) {
        e.preventDefault(), t.API.prev()
      }), t.swipe) {
      var i = t.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle",
        n = t.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
      t.container.on(i, function() {
        t.API.next()
      }), t.container.on(n, function() {
        t.API.prev()
      })
    }
  }), e(document).on("cycle-update-view", function(e, t) {
    if (!t.allowWrap) {
      var i = t.disabledClass,
        n = t.API.getComponent("next"),
        s = t.API.getComponent("prev"),
        o = t._prevBoundry || 0,
        c = void 0 !== t._nextBoundry ? t._nextBoundry : t.slideCount - 1;
      t.currSlide == c ? n.addClass(i).prop("disabled", !0) : n.removeClass(i).prop("disabled", !1),
        t.currSlide === o ? s.addClass(i).prop("disabled", !0) : s.removeClass(i).prop("disabled", !
          1)
    }
  }), e(document).on("cycle-destroyed", function(e, t) {
    t.API.getComponent("prev").off(t.nextEvent), t.API.getComponent("next").off(t.prevEvent), t.container
      .off(
        "swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle"
      )
  })
})(jQuery);
// jquery.tweet.js
(function(c) {
  "function" === typeof define && define.amd ? define(["jquery"], c) : c(jQuery)
})(function(c) {
  c.fn.tweet = function(n, k) {
    function f(b, a) {
      if ("string" === typeof b) {
        var e = b,
          c;
        for (c in a) var f = a[c],
          e = e.replace(RegExp("{" + c + "}", "g"), null === f ? "" : f);
        return e
      }
      return b(a)
    }

    function h(b, a) {
      return function() {
        var e = [];
        this.each(function() {
          e.push(this.replace(b, a))
        });
        return c(e)
      }
    }

    function p(b, a) {
      return b.replace(l, function(b) {
        for (var d = /^[a-z]+:/i.test(b) ? b : "http://" + b, c = 0; c < a.length; ++c) {
          var f = a[c];
          if (f.url == d && f.expanded_url) {
            d = f.expanded_url;
            b = f.display_url;
            break
          }
        }
        return '<a href="' + d.replace(/</g, "&lt;").replace(/>/g, "^&gt;") + '">' + b.replace(/</g,
          "&lt;").replace(/>/g, "^&gt;") + "</a>"
      })
    }

    function q(b) {
      var a = parseInt(((1 < arguments.length ? arguments[1] : new Date).getTime() - b) / 1E3, 10),
        c = "";
      return c = 1 > a ? "just now" : 60 > a ? a + " seconds ago" : 120 > a ? "about a minute ago" :
        2700 > a ? "about " + parseInt(a / 60, 10).toString() + " minutes ago" : 7200 > a ?
        "about an hour ago" : 86400 > a ? "about " + parseInt(a / 3600, 10).toString() + " hours ago" :
        172800 > a ? "about a day ago" : "about " + parseInt(a / 86400, 10).toString() + " days ago"
    }

    function r() {
      var d = null === b.fetch ? b.count : b.fetch,
        a = {
          include_entities: 1
        };
      if (b.list) return {
        host: b.twitter_api_url,
        url: "/1.1/lists/statuses.json",
        parameters: c.extend({}, a, {
          list_id: b.list_id,
          slug: b.list,
          owner_screen_name: b.username,
          page: b.page,
          count: d,
          include_rts: b.retweets ? 1 : 0
        })
      };
      if (b.favorites) return {
        host: b.twitter_api_url,
        url: "/1.1/favorites/list.json",
        parameters: c.extend({}, a, {
          list_id: b.list_id,
          screen_name: b.username,
          page: b.page,
          count: d
        })
      };
      if (null === b.query && 1 === b.username.length) return {
        host: b.twitter_api_url,
        url: "/1.1/statuses/user_timeline.json",
        parameters: c.extend({}, a, {
          screen_name: b.username,
          page: b.page,
          count: d,
          include_rts: b.retweets ? 1 : 0
        })
      };
      var e = b.query || "from:" + b.username.join(" OR from:");
      return {
        host: b.twitter_search_url,
        url: "/1.1/search/tweets.json",
        parameters: c.extend({}, a, {
          q: e,
          count: d
        })
      }
    }

    function m(b, a) {
      return a ? "user" in b ? b.user.profile_image_url_https : m(b, !1).replace(
          /^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/") : b
        .profile_image_url || b.user.profile_image_url
    }

    function s(d) {
      var a = {};
      a.item = d;
      a.source = d.source;
      a.name = d.from_user_name || d.user.name;
      a.screen_name = d.from_user || d.user.screen_name;
      a.avatar_size = b.avatar_size;
      a.avatar_url = m(d, "https:" === document.location.protocol);
      a.retweet = "undefined" != typeof d.retweeted_status;
      a.tweet_time = Date.parse(d.created_at.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,
        "$1,$2$4$3"));
      var e;
      "auto" == b.join_text ? (e = d.text, e = e.match(/^(@([A-Za-z0-9-_]+)) .*/i) ? b.auto_join_text_reply :
        e.match(l) ? b.auto_join_text_url : e.match(/^((\w+ed)|just) .*/im) ? b.auto_join_text_ed :
        e.match(/^(\w*ing) .*/i) ? b.auto_join_text_ing : b.auto_join_text_default) : e = b.join_text;
      a.join_text = e;
      a.tweet_id = d.id_str;
      a.twitter_base = "http://" + b.twitter_url + "/";
      a.user_url = a.twitter_base + a.screen_name;
      a.tweet_url = a.user_url + "/status/" + a.tweet_id;
      a.reply_url = a.twitter_base + "intent/tweet?in_reply_to=" + a.tweet_id;
      a.retweet_url = a.twitter_base + "intent/retweet?tweet_id=" + a.tweet_id;
      a.favorite_url = a.twitter_base + "intent/favorite?tweet_id=" + a.tweet_id;
      a.retweeted_screen_name = a.retweet && d.retweeted_status.user.screen_name;
      a.tweet_relative_time = q(a.tweet_time);
      a.entities = d.entities ? (d.entities.urls || []).concat(d.entities.media || []) : [];
      a.tweet_raw_text = a.retweet ? "RT @" + a.retweeted_screen_name + " " + d.retweeted_status.text :
        d.text;
      a.tweet_text = c([p(a.tweet_raw_text, a.entities)]).linkUser().linkHash()[0];
      a.tweet_text_fancy = c([a.tweet_text]).makeHeart()[0];
      a.user = f('<a class="tweet_user" href="{user_url}">{screen_name}</a>', a);
      a.join = b.join_text ? f(' <span class="tweet_join">{join_text}</span> ', a) : " ";
      a.avatar = a.avatar_size ? f(
        '<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',
        a) : "";
      a.time = f(
        '<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',
        a);
      a.text = f('<span class="tweet_text">{tweet_text_fancy}</span>', a);
      a.reply_action = f('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', a);
      a.retweet_action = f('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',
        a);
      a.favorite_action = f(
        '<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', a);
      return a
    }
    var b = c.extend({
        modpath: "/twitter/",
        username: null,
        list_id: null,
        list: null,
        favorites: !1,
        query: null,
        avatar_size: null,
        count: 3,
        fetch: null,
        page: 1,
        retweets: !0,
        join_text: null,
        auto_join_text_default: "i said,",
        auto_join_text_ed: "i",
        auto_join_text_ing: "i am",
        auto_join_text_reply: "i replied to",
        auto_join_text_url: "i was looking at",
        loading_text: null,
        twitter_url: "twitter.com",
        twitter_api_url: "api.twitter.com",
        twitter_search_url: "api.twitter.com",
        template: "{avatar}{time}{join}{text}",
        comparator: function(b, a) {
          return a.tweet_time - b.tweet_time
        },
        filter: function(b) {
          return !0
        }
      }, n),
      l =
      /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi;
    c.extend({
      tweet: {
        t: f
      }
    });
    c.fn.extend({
      linkUser: h(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + b.twitter_url +
        '/$2">$2</a>'),
      linkHash: h(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
        ' <a href="https://twitter.com/search?q=%23$1' + (b.username && 1 == b.username.length &&
          !b.list ? "&from=" + b.username.join("%2BOR%2B") : "") +
        '" class="tweet_hashtag">#$1</a>'),
      makeHeart: h(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    });
    return this.each(function(d, a) {
      var e = c('<div class="tweet_list">'),
        h = c('<p class="loading">' + b.loading_text + "</p>");
      b.username && "string" == typeof b.username && (b.username = [b.username]);
      b.loading_text && c(a).empty().append(h);
      c.ajax({
        dataType: "json",
        type: "post",
        async: !0,
        url: b.modpath || "/twitter/",
        data: {
          request: r()
        },
        success: function(d, h) {
          d.message && console.log(d.message);
          var g = d.response;
          c(a).empty().append(e);
          e.empty();
          resp = void 0 !== g.statuses ? g.statuses : void 0 !== g.results ? g.results : g;
          g = c.map(resp, s);
          g = c.grep(g, b.filter).sort(b.comparator).slice(0, b.count);
          e.append(c.map(g, function(a) {
            return "<div>" + f(b.template, a) + "</div>"
          }).join("")).children(":first").addClass("tweet_first").end().children(":odd").addClass(
            "tweet_even").end().children(":even").addClass("tweet_odd");
          c.isFunction(k) && k.apply(a)
        }
      })
    })
  }
});
// Hogan template-2.0.0.min.js
var Hogan = {};
(function(n, l) {
  function k(a) {
    return String(null === a || void 0 === a ? "" : a)
  }
  n.Template = function(a, b, c, d) {
    this.r = a || this.r;
    this.c = c;
    this.options = d;
    this.text = b || "";
    this.buf = l ? [] : ""
  };
  n.Template.prototype = {
    r: function(a, b, c) {
      return ""
    },
    v: function(a) {
      a = k(a);
      return p.test(a) ? a.replace(q, "&amp;").replace(r, "&lt;").replace(s, "&gt;").replace(t,
        "&#39;").replace(u, "&quot;") : a
    },
    t: k,
    render: function(a, b, c) {
      return this.ri([a], b || {}, c)
    },
    ri: function(a, b, c) {
      return this.r(a, b, c)
    },
    rp: function(a, b, c, d) {
      a = c[a];
      if (!a) return "";
      this.c && "string" == typeof a && (a = this.c.compile(a, this.options));
      return a.ri(b, c, d)
    },
    rs: function(a, b, c) {
      var d = a[a.length - 1];
      if (m(d))
        for (var f = 0; f < d.length; f++) a.push(d[f]), c(a, b, this), a.pop();
      else c(a, b, this)
    },
    s: function(a, b, c, d, f, e, g) {
      if (m(a) && 0 === a.length) return !1;
      "function" == typeof a && (a = this.ls(a, b, c, d, f, e, g));
      c = "" === a || !!a;
      !d && c && b && b.push("object" == typeof a ? a : b[b.length - 1]);
      return c
    },
    d: function(a, b, c, d) {
      var f = a.split("."),
        e = this.f(f[0], b, c, d),
        g = null;
      if ("." === a && m(b[b.length - 2])) return b[b.length - 1];
      for (a = 1; a < f.length; a++) e && "object" == typeof e && f[a] in e ? (g = e, e = e[f[a]]) :
        e = "";
      if (d && !e) return !1;
      d || "function" != typeof e || (b.push(g), e = this.lv(e, b, c), b.pop());
      return e
    },
    f: function(a, b, c, d) {
      for (var f = !1, e = null, g = !1, h = b.length - 1; 0 <= h; h--)
        if ((e = b[h]) && "object" == typeof e && a in e) {
          f = e[a];
          g = !0;
          break
        }
      if (!g) return d ? !1 : "";
      d || "function" != typeof f || (f = this.lv(f, b, c));
      return f
    },
    ho: function(a, b, c, d, f) {
      var e = this.c,
        g = this.options;
      g.delimiters = f;
      d = a.call(b, d);
      d = null == d ? String(d) : d.toString();
      this.b(e.compile(d, g).render(b, c));
      return !1
    },
    b: l ? function(a) {
      this.buf.push(a)
    } : function(a) {
      this.buf += a
    },
    fl: l ? function() {
      var a = this.buf.join("");
      this.buf = [];
      return a
    } : function() {
      var a = this.buf;
      this.buf = "";
      return a
    },
    ls: function(a, b, c, d, f, e, g) {
      b = b[b.length - 1];
      var h = null;
      if (!d && this.c && 0 < a.length) return this.ho(a, b, c, this.text.substring(f, e), g);
      h = a.call(b);
      if ("function" == typeof h) {
        if (d) return !0;
        if (this.c) return this.ho(h, b, c, this.text.substring(f, e), g)
      }
      return h
    },
    lv: function(a, b, c) {
      b = b[b.length - 1];
      a = a.call(b);
      return "function" == typeof a && (a = k(a.call(b)), this.c && ~a.indexOf("{{")) ? this.c.compile(
        a, this.options).render(b, c) : k(a)
    }
  };
  var q = /&/g,
    r = /</g,
    s = />/g,
    t = /\'/g,
    u = /\"/g,
    p = /[&<>\"\']/,
    m = Array.isArray || function(a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    }
})("undefined" !== typeof exports ? exports : Hogan);
// Froogaloop for Vimeo videos
var Froogaloop = function() {
  function e(a) {
    return new e.fn.init(a)
  }

  function h(a, c, b) {
    if (!b.contentWindow.postMessage) return !1;
    var f = b.getAttribute("src").split("?")[0],
      a = JSON.stringify({
        method: a,
        value: c
      });
    "//" === f.substr(0, 2) && (f = window.location.protocol + f);
    b.contentWindow.postMessage(a, f)
  }

  function j(a) {
    var c, b;
    try {
      c = JSON.parse(a.data), b = c.event || c.method
    } catch (f) {}
    "ready" == b && !i && (i = !0);
    if (a.origin != k) return !1;
    var a = c.value,
      e = c.data,
      g = "" === g ? null : c.player_id;
    c = g ? d[g][b] : d[b];
    b = [];
    if (!c) return !1;
    void 0 !== a && b.push(a);
    e && b.push(e);
    g && b.push(g);
    return 0 < b.length ? c.apply(null, b) : c.call()
  }

  function l(a, c, b) {
    b ? (d[b] || (d[b] = {}), d[b][a] = c) : d[a] = c
  }
  var d = {},
    i = !1,
    k = "";
  e.fn = e.prototype = {
    element: null,
    init: function(a) {
      "string" === typeof a && (a = document.getElementById(a));
      this.element = a;
      a = this.element.getAttribute("src");
      "//" === a.substr(0, 2) && (a = window.location.protocol + a);
      for (var a = a.split("/"), c = "", b = 0, f = a.length; b < f; b++) {
        if (3 > b) c += a[b];
        else break;
        2 > b && (c += "/")
      }
      k = c;
      return this
    },
    api: function(a, c) {
      if (!this.element || !a) return !1;
      var b = this.element,
        f = "" !== b.id ? b.id : null,
        d = !c || !c.constructor || !c.call || !c.apply ? c : null,
        e = c && c.constructor && c.call && c.apply ? c : null;
      e && l(a, e, f);
      h(a, d, b);
      return this
    },
    addEvent: function(a, c) {
      if (!this.element) return !1;
      var b = this.element,
        d = "" !== b.id ? b.id : null;
      l(a, c, d);
      "ready" != a ? h("addEventListener", a, b) : "ready" == a && i && c.call(null, d);
      return this
    },
    removeEvent: function(a) {
      if (!this.element) return !1;
      var c = this.element,
        b;
      a: {
        if ((b = "" !== c.id ? c.id : null) && d[b]) {
          if (!d[b][a]) {
            b = !1;
            break a
          }
          d[b][a] = null
        } else {
          if (!d[a]) {
            b = !1;
            break a
          }
          d[a] = null
        }
        b = !0
      }
      "ready" != a && b && h("removeEventListener", a, c)
    }
  };
  e.fn.init.prototype = e.fn;
  window.addEventListener ? window.addEventListener("message", j, !1) : window.attachEvent(
    "onmessage", j);
  return window.Froogaloop = window.$f = e
}();
