/*! selectize.js - v0.12.6 | https://github.com/selectize/selectize.js | Apache License (v2) */
!function (a, b) { "function" == typeof define && define.amd ? define("sifter", b) : "object" == typeof exports ? module.exports = b() : a.Sifter = b(); }(this, function () { var a = function (a, b) { this.items = a, this.settings = b || { diacritics: !0 }; }; a.prototype.tokenize = function (a) { if (!(a = e(String(a || "").toLowerCase())) || !a.length)
    return []; var b, c, d, g, i = [], j = a.split(/ +/); for (b = 0, c = j.length; b < c; b++) {
    if (d = f(j[b]), this.settings.diacritics)
        for (g in h)
            h.hasOwnProperty(g) && (d = d.replace(new RegExp(g, "g"), h[g]));
    i.push({ string: j[b], regex: new RegExp(d, "i") });
} return i; }, a.prototype.iterator = function (a, b) { var c; c = g(a) ? Array.prototype.forEach || function (a) { for (var b = 0, c = this.length; b < c; b++)
    a(this[b], b, this); } : function (a) { for (var b in this)
    this.hasOwnProperty(b) && a(this[b], b, this); }, c.apply(a, [b]); }, a.prototype.getScoreFunction = function (a, b) { var c, e, f, g, h; c = this, a = c.prepareSearch(a, b), f = a.tokens, e = a.options.fields, g = f.length, h = a.options.nesting; var i = function (a, b) { var c, d; return a ? (a = String(a || ""), -1 === (d = a.search(b.regex)) ? 0 : (c = b.string.length / a.length, 0 === d && (c += .5), c)) : 0; }, j = function () { var a = e.length; return a ? 1 === a ? function (a, b) { return i(d(b, e[0], h), a); } : function (b, c) { for (var f = 0, g = 0; f < a; f++)
    g += i(d(c, e[f], h), b); return g / a; } : function () { return 0; }; }(); return g ? 1 === g ? function (a) { return j(f[0], a); } : "and" === a.options.conjunction ? function (a) { for (var b, c = 0, d = 0; c < g; c++) {
    if ((b = j(f[c], a)) <= 0)
        return 0;
    d += b;
} return d / g; } : function (a) { for (var b = 0, c = 0; b < g; b++)
    c += j(f[b], a); return c / g; } : function () { return 0; }; }, a.prototype.getSortFunction = function (a, c) { var e, f, g, h, i, j, k, l, m, n, o; if (g = this, a = g.prepareSearch(a, c), o = !a.query && c.sort_empty || c.sort, m = function (a, b) { return "$score" === a ? b.score : d(g.items[b.id], a, c.nesting); }, i = [], o)
    for (e = 0, f = o.length; e < f; e++)
        (a.query || "$score" !== o[e].field) && i.push(o[e]); if (a.query) {
    for (n = !0, e = 0, f = i.length; e < f; e++)
        if ("$score" === i[e].field) {
            n = !1;
            break;
        }
    n && i.unshift({ field: "$score", direction: "desc" });
}
else
    for (e = 0, f = i.length; e < f; e++)
        if ("$score" === i[e].field) {
            i.splice(e, 1);
            break;
        } for (l = [], e = 0, f = i.length; e < f; e++)
    l.push("desc" === i[e].direction ? -1 : 1); return j = i.length, j ? 1 === j ? (h = i[0].field, k = l[0], function (a, c) { return k * b(m(h, a), m(h, c)); }) : function (a, c) { var d, e, f; for (d = 0; d < j; d++)
    if (f = i[d].field, e = l[d] * b(m(f, a), m(f, c)))
        return e; return 0; } : null; }, a.prototype.prepareSearch = function (a, b) { if ("object" == typeof a)
    return a; b = c({}, b); var d = b.fields, e = b.sort, f = b.sort_empty; return d && !g(d) && (b.fields = [d]), e && !g(e) && (b.sort = [e]), f && !g(f) && (b.sort_empty = [f]), { options: b, query: String(a || "").toLowerCase(), tokens: this.tokenize(a), total: 0, items: [] }; }, a.prototype.search = function (a, b) { var c, d, e, f, g = this; return d = this.prepareSearch(a, b), b = d.options, a = d.query, f = b.score || g.getScoreFunction(d), a.length ? g.iterator(g.items, function (a, e) { c = f(a), (!1 === b.filter || c > 0) && d.items.push({ score: c, id: e }); }) : g.iterator(g.items, function (a, b) { d.items.push({ score: 1, id: b }); }), e = g.getSortFunction(d, b), e && d.items.sort(e), d.total = d.items.length, "number" == typeof b.limit && (d.items = d.items.slice(0, b.limit)), d; }; var b = function (a, b) { return "number" == typeof a && "number" == typeof b ? a > b ? 1 : a < b ? -1 : 0 : (a = i(String(a || "")), b = i(String(b || "")), a > b ? 1 : b > a ? -1 : 0); }, c = function (a, b) { var c, d, e, f; for (c = 1, d = arguments.length; c < d; c++)
    if (f = arguments[c])
        for (e in f)
            f.hasOwnProperty(e) && (a[e] = f[e]); return a; }, d = function (a, b, c) { if (a && b) {
    if (!c)
        return a[b];
    for (var d = b.split("."); d.length && (a = a[d.shift()]);)
        ;
    return a;
} }, e = function (a) { return (a + "").replace(/^\s+|\s+$|/g, ""); }, f = function (a) { return (a + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); }, g = Array.isArray || "undefined" != typeof $ && $.isArray || function (a) { return "[object Array]" === Object.prototype.toString.call(a); }, h = { a: "[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]", b: "[b␢βΒB฿𐌁ᛒ]", c: "[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]", d: "[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]", e: "[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]", f: "[fƑƒḞḟ]", g: "[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]", h: "[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]", i: "[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]", j: "[jȷĴĵɈɉʝɟʲ]", k: "[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]", l: "[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]", n: "[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]", o: "[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]", p: "[pṔṕṖṗⱣᵽƤƥᵱ]", q: "[qꝖꝗʠɊɋꝘꝙq̃]", r: "[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]", s: "[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]", t: "[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]", u: "[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]", v: "[vṼṽṾṿƲʋꝞꝟⱱʋ]", w: "[wẂẃẀẁŴŵẄẅẆẇẈẉ]", x: "[xẌẍẊẋχ]", y: "[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]", z: "[zŹźẐẑŽžŻżẒẓẔẕƵƶ]" }, i = function () { var a, b, c, d, e = "", f = {}; for (c in h)
    if (h.hasOwnProperty(c))
        for (d = h[c].substring(2, h[c].length - 1), e += d, a = 0, b = d.length; a < b; a++)
            f[d.charAt(a)] = c; var g = new RegExp("[" + e + "]", "g"); return function (a) { return a.replace(g, function (a) { return f[a]; }).toLowerCase(); }; }(); return a; }), function (a, b) { "function" == typeof define && define.amd ? define("microplugin", b) : "object" == typeof exports ? module.exports = b() : a.MicroPlugin = b(); }(this, function () { var a = {}; a.mixin = function (a) { a.plugins = {}, a.prototype.initializePlugins = function (a) { var c, d, e, f = this, g = []; if (f.plugins = { names: [], settings: {}, requested: {}, loaded: {} }, b.isArray(a))
    for (c = 0, d = a.length; c < d; c++)
        "string" == typeof a[c] ? g.push(a[c]) : (f.plugins.settings[a[c].name] = a[c].options, g.push(a[c].name));
else if (a)
    for (e in a)
        a.hasOwnProperty(e) && (f.plugins.settings[e] = a[e], g.push(e)); for (; g.length;)
    f.require(g.shift()); }, a.prototype.loadPlugin = function (b) { var c = this, d = c.plugins, e = a.plugins[b]; if (!a.plugins.hasOwnProperty(b))
    throw new Error('Unable to find "' + b + '" plugin'); d.requested[b] = !0, d.loaded[b] = e.fn.apply(c, [c.plugins.settings[b] || {}]), d.names.push(b); }, a.prototype.require = function (a) { var b = this, c = b.plugins; if (!b.plugins.loaded.hasOwnProperty(a)) {
    if (c.requested[a])
        throw new Error('Plugin has circular dependency ("' + a + '")');
    b.loadPlugin(a);
} return c.loaded[a]; }, a.define = function (b, c) { a.plugins[b] = { name: b, fn: c }; }; }; var b = { isArray: Array.isArray || function (a) { return "[object Array]" === Object.prototype.toString.call(a); } }; return a; }), function (a, b) { "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], b) : "object" == typeof exports ? module.exports = b(require("jquery"), require("sifter"), require("microplugin")) : a.Selectize = b(a.jQuery, a.Sifter, a.MicroPlugin); }(this, function (a, b, c) {
    "use strict";
    var d = function (a, b) { if ("string" != typeof b || b.length) {
        var c = "string" == typeof b ? new RegExp(b, "i") : b, d = function (a) { var b = 0; if (3 === a.nodeType) {
            var e = a.data.search(c);
            if (e >= 0 && a.data.length > 0) {
                var f = a.data.match(c), g = document.createElement("span");
                g.className = "highlight";
                var h = a.splitText(e), i = (h.splitText(f[0].length), h.cloneNode(!0));
                g.appendChild(i), h.parentNode.replaceChild(g, h), b = 1;
            }
        }
        else if (1 === a.nodeType && a.childNodes && !/(script|style)/i.test(a.tagName) && ("highlight" !== a.className || "SPAN" !== a.tagName))
            for (var j = 0; j < a.childNodes.length; ++j)
                j += d(a.childNodes[j]); return b; };
        return a.each(function () { d(this); });
    } };
    a.fn.removeHighlight = function () { return this.find("span.highlight").each(function () { this.parentNode.firstChild.nodeName; var a = this.parentNode; a.replaceChild(this.firstChild, this), a.normalize(); }).end(); };
    var e = function () { };
    e.prototype = { on: function (a, b) { this._events = this._events || {}, this._events[a] = this._events[a] || [], this._events[a].push(b); }, off: function (a, b) { var c = arguments.length; return 0 === c ? delete this._events : 1 === c ? delete this._events[a] : (this._events = this._events || {}, void (a in this._events != !1 && this._events[a].splice(this._events[a].indexOf(b), 1))); }, trigger: function (a) { if (this._events = this._events || {}, a in this._events != !1)
            for (var b = 0; b < this._events[a].length; b++)
                this._events[a][b].apply(this, Array.prototype.slice.call(arguments, 1)); } }, e.mixin = function (a) { for (var b = ["on", "off", "trigger"], c = 0; c < b.length; c++)
        a.prototype[b[c]] = e.prototype[b[c]]; };
    var f = /Mac/.test(navigator.userAgent), g = f ? 91 : 17, h = f ? 18 : 17, i = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity, j = function (a) { return void 0 !== a; }, k = function (a) { return void 0 === a || null === a ? null : "boolean" == typeof a ? a ? "1" : "0" : a + ""; }, l = function (a) { return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }, m = {};
    m.before = function (a, b, c) { var d = a[b]; a[b] = function () { return c.apply(a, arguments), d.apply(a, arguments); }; }, m.after = function (a, b, c) { var d = a[b]; a[b] = function () { var b = d.apply(a, arguments); return c.apply(a, arguments), b; }; };
    var n = function (a) { var b = !1; return function () { b || (b = !0, a.apply(this, arguments)); }; }, o = function (a, b) { var c; return function () { var d = this, e = arguments; window.clearTimeout(c), c = window.setTimeout(function () { a.apply(d, e); }, b); }; }, p = function (a, b, c) { var d, e = a.trigger, f = {}; a.trigger = function () { var c = arguments[0]; if (-1 === b.indexOf(c))
        return e.apply(a, arguments); f[c] = arguments; }, c.apply(a, []), a.trigger = e; for (d in f)
        f.hasOwnProperty(d) && e.apply(a, f[d]); }, q = function (a, b, c, d) { a.on(b, c, function (b) { for (var c = b.target; c && c.parentNode !== a[0];)
        c = c.parentNode; return b.currentTarget = c, d.apply(this, [b]); }); }, r = function (a) { var b = {}; if ("selectionStart" in a)
        b.start = a.selectionStart, b.length = a.selectionEnd - b.start;
    else if (document.selection) {
        a.focus();
        var c = document.selection.createRange(), d = document.selection.createRange().text.length;
        c.moveStart("character", -a.value.length), b.start = c.text.length - d, b.length = d;
    } return b; }, s = function (a, b, c) { var d, e, f = {}; if (c)
        for (d = 0, e = c.length; d < e; d++)
            f[c[d]] = a.css(c[d]);
    else
        f = a.css(); b.css(f); }, t = function (b, c) { return b ? (w.$testInput || (w.$testInput = a("<span />").css({ position: "absolute", top: -99999, left: -99999, width: "auto", padding: 0, whiteSpace: "pre" }).appendTo("body")), w.$testInput.text(b), s(c, w.$testInput, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]), w.$testInput.width()) : 0; }, u = function (a) { var b = null, c = function (c, d) { var e, f, g, h, i, j, k, l; c = c || window.event || {}, d = d || {}, c.metaKey || c.altKey || (d.force || !1 !== a.data("grow")) && (e = a.val(), c.type && "keydown" === c.type.toLowerCase() && (f = c.keyCode, g = f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 96 && f <= 111 || f >= 186 && f <= 222 || 32 === f, 46 === f || 8 === f ? (l = r(a[0]), l.length ? e = e.substring(0, l.start) + e.substring(l.start + l.length) : 8 === f && l.start ? e = e.substring(0, l.start - 1) + e.substring(l.start + 1) : 46 === f && void 0 !== l.start && (e = e.substring(0, l.start) + e.substring(l.start + 1))) : g && (j = c.shiftKey, k = String.fromCharCode(c.keyCode), k = j ? k.toUpperCase() : k.toLowerCase(), e += k)), h = a.attr("placeholder"), !e && h && (e = h), (i = t(e, a) + 4) !== b && (b = i, a.width(i), a.triggerHandler("resize"))); }; a.on("keydown keyup update blur", c), c(); }, v = function (a) { var b = document.createElement("div"); return b.appendChild(a.cloneNode(!0)), b.innerHTML; }, w = function (c, d) { var e, f, g, h, i = this; h = c[0], h.selectize = i; var j = window.getComputedStyle && window.getComputedStyle(h, null); if (g = j ? j.getPropertyValue("direction") : h.currentStyle && h.currentStyle.direction, g = g || c.parents("[dir]:first").attr("dir") || "", a.extend(i, { order: 0, settings: d, $input: c, tabIndex: c.attr("tabindex") || "", tagType: "select" === h.tagName.toLowerCase() ? 1 : 2, rtl: /rtl/i.test(g), eventNS: ".selectize" + ++w.count, highlightedValue: null, isBlurring: !1, isOpen: !1, isDisabled: !1, isRequired: c.is("[required]"), isInvalid: !1, isLocked: !1, isFocused: !1, isInputHidden: !1, isSetup: !1, isShiftDown: !1, isCmdDown: !1, isCtrlDown: !1, ignoreFocus: !1, ignoreBlur: !1, ignoreHover: !1, hasOptions: !1, currentResults: null, lastValue: "", caretPos: 0, loading: 0, loadedSearches: {}, $activeOption: null, $activeItems: [], optgroups: {}, options: {}, userOptions: {}, items: [], renderCache: {}, onSearchChange: null === d.loadThrottle ? i.onSearchChange : o(i.onSearchChange, d.loadThrottle) }), i.sifter = new b(this.options, { diacritics: d.diacritics }), i.settings.options) {
        for (e = 0, f = i.settings.options.length; e < f; e++)
            i.registerOption(i.settings.options[e]);
        delete i.settings.options;
    } if (i.settings.optgroups) {
        for (e = 0, f = i.settings.optgroups.length; e < f; e++)
            i.registerOptionGroup(i.settings.optgroups[e]);
        delete i.settings.optgroups;
    } i.settings.mode = i.settings.mode || (1 === i.settings.maxItems ? "single" : "multi"), "boolean" != typeof i.settings.hideSelected && (i.settings.hideSelected = "multi" === i.settings.mode), i.initializePlugins(i.settings.plugins), i.setupCallbacks(), i.setupTemplates(), i.setup(); };
    return e.mixin(w), void 0 !== c ? c.mixin(w) : function (a, b) { b || (b = {}); console.error("Selectize: " + a), b.explanation && (console.group && console.group(), console.error(b.explanation), console.group && console.groupEnd()); }("Dependency MicroPlugin is missing", { explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.' }), a.extend(w.prototype, { setup: function () { var b, c, d, e, j, k, l, m, n, o, p = this, r = p.settings, s = p.eventNS, t = a(window), v = a(document), w = p.$input; if (l = p.settings.mode, m = w.attr("class") || "", b = a("<div>").addClass(r.wrapperClass).addClass(m).addClass(l), c = a("<div>").addClass(r.inputClass).addClass("items").appendTo(b), d = a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", w.is(":disabled") ? "-1" : p.tabIndex), k = a(r.dropdownParent || b), e = a("<div>").addClass(r.dropdownClass).addClass(l).hide().appendTo(k), j = a("<div>").addClass(r.dropdownContentClass).appendTo(e), (o = w.attr("id")) && (d.attr("id", o + "-selectized"), a("label[for='" + o + "']").attr("for", o + "-selectized")), p.settings.copyClassesToDropdown && e.addClass(m), b.css({ width: w[0].style.width }), p.plugins.names.length && (n = "plugin-" + p.plugins.names.join(" plugin-"), b.addClass(n), e.addClass(n)), (null === r.maxItems || r.maxItems > 1) && 1 === p.tagType && w.attr("multiple", "multiple"), p.settings.placeholder && d.attr("placeholder", r.placeholder), !p.settings.splitOn && p.settings.delimiter) {
            var x = p.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
            p.settings.splitOn = new RegExp("\\s*" + x + "+\\s*");
        } w.attr("autocorrect") && d.attr("autocorrect", w.attr("autocorrect")), w.attr("autocapitalize") && d.attr("autocapitalize", w.attr("autocapitalize")), d[0].type = w[0].type, p.$wrapper = b, p.$control = c, p.$control_input = d, p.$dropdown = e, p.$dropdown_content = j, e.on("mouseenter mousedown click", "[data-disabled]>[data-selectable]", function (a) { a.stopImmediatePropagation(); }), e.on("mouseenter", "[data-selectable]", function () { return p.onOptionHover.apply(p, arguments); }), e.on("mousedown click", "[data-selectable]", function () { return p.onOptionSelect.apply(p, arguments); }), q(c, "mousedown", "*:not(input)", function () { return p.onItemSelect.apply(p, arguments); }), u(d), c.on({ mousedown: function () { return p.onMouseDown.apply(p, arguments); }, click: function () { return p.onClick.apply(p, arguments); } }), d.on({ mousedown: function (a) { a.stopPropagation(); }, keydown: function () { return p.onKeyDown.apply(p, arguments); }, keyup: function () { return p.onKeyUp.apply(p, arguments); }, keypress: function () { return p.onKeyPress.apply(p, arguments); }, resize: function () { p.positionDropdown.apply(p, []); }, blur: function () { return p.onBlur.apply(p, arguments); }, focus: function () { return p.ignoreBlur = !1, p.onFocus.apply(p, arguments); }, paste: function () { return p.onPaste.apply(p, arguments); } }), v.on("keydown" + s, function (a) { p.isCmdDown = a[f ? "metaKey" : "ctrlKey"], p.isCtrlDown = a[f ? "altKey" : "ctrlKey"], p.isShiftDown = a.shiftKey; }), v.on("keyup" + s, function (a) { a.keyCode === h && (p.isCtrlDown = !1), 16 === a.keyCode && (p.isShiftDown = !1), a.keyCode === g && (p.isCmdDown = !1); }), v.on("mousedown" + s, function (a) { if (p.isFocused) {
            if (a.target === p.$dropdown[0] || a.target.parentNode === p.$dropdown[0])
                return !1;
            p.$control.has(a.target).length || a.target === p.$control[0] || p.blur(a.target);
        } }), t.on(["scroll" + s, "resize" + s].join(" "), function () { p.isOpen && p.positionDropdown.apply(p, arguments); }), t.on("mousemove" + s, function () { p.ignoreHover = !1; }), this.revertSettings = { $children: w.children().detach(), tabindex: w.attr("tabindex") }, w.attr("tabindex", -1).hide().after(p.$wrapper), a.isArray(r.items) && (p.setValue(r.items), delete r.items), i && w.on("invalid" + s, function (a) { a.preventDefault(), p.isInvalid = !0, p.refreshState(); }), p.updateOriginalInput(), p.refreshItems(), p.refreshState(), p.updatePlaceholder(), p.isSetup = !0, w.is(":disabled") && p.disable(), p.on("change", this.onChange), w.data("selectize", p), w.addClass("selectized"), p.trigger("initialize"), !0 === r.preload && p.onSearchChange(""); }, setupTemplates: function () { var b = this, c = b.settings.labelField, d = b.settings.optgroupLabelField, e = { optgroup: function (a) { return '<div class="optgroup">' + a.html + "</div>"; }, optgroup_header: function (a, b) { return '<div class="optgroup-header">' + b(a[d]) + "</div>"; }, option: function (a, b) { return '<div class="option">' + b(a[c]) + "</div>"; }, item: function (a, b) { return '<div class="item">' + b(a[c]) + "</div>"; }, option_create: function (a, b) { return '<div class="create">Add <strong>' + b(a.input) + "</strong>&hellip;</div>"; } }; b.settings.render = a.extend({}, e, b.settings.render); }, setupCallbacks: function () { var a, b, c = { initialize: "onInitialize", change: "onChange", item_add: "onItemAdd", item_remove: "onItemRemove", clear: "onClear", option_add: "onOptionAdd", option_remove: "onOptionRemove", option_clear: "onOptionClear", optgroup_add: "onOptionGroupAdd", optgroup_remove: "onOptionGroupRemove", optgroup_clear: "onOptionGroupClear", dropdown_open: "onDropdownOpen", dropdown_close: "onDropdownClose", type: "onType", load: "onLoad", focus: "onFocus", blur: "onBlur" }; for (a in c)
            c.hasOwnProperty(a) && (b = this.settings[c[a]]) && this.on(a, b); }, onClick: function (a) { var b = this; b.isFocused && b.isOpen || (b.focus(), a.preventDefault()); }, onMouseDown: function (b) { var c = this, d = b.isDefaultPrevented(); a(b.target); if (c.isFocused) {
            if (b.target !== c.$control_input[0])
                return "single" === c.settings.mode ? c.isOpen ? c.close() : c.open() : d || c.setActiveItem(null), !1;
        }
        else
            d || window.setTimeout(function () { c.focus(); }, 0); }, onChange: function () { this.$input.trigger("change"); }, onPaste: function (b) { var c = this; if (c.isFull() || c.isInputHidden || c.isLocked)
            return void b.preventDefault(); c.settings.splitOn && setTimeout(function () { var b = c.$control_input.val(); if (b.match(c.settings.splitOn))
            for (var d = a.trim(b).split(c.settings.splitOn), e = 0, f = d.length; e < f; e++)
                c.createItem(d[e]); }, 0); }, onKeyPress: function (a) { if (this.isLocked)
            return a && a.preventDefault(); var b = String.fromCharCode(a.keyCode || a.which); return this.settings.create && "multi" === this.settings.mode && b === this.settings.delimiter ? (this.createItem(), a.preventDefault(), !1) : void 0; }, onKeyDown: function (a) { var b = (a.target, this.$control_input[0], this); if (b.isLocked)
            return void (9 !== a.keyCode && a.preventDefault()); switch (a.keyCode) {
            case 65:
                if (b.isCmdDown)
                    return void b.selectAll();
                break;
            case 27: return void (b.isOpen && (a.preventDefault(), a.stopPropagation(), b.close()));
            case 78: if (!a.ctrlKey || a.altKey)
                break;
            case 40:
                if (!b.isOpen && b.hasOptions)
                    b.open();
                else if (b.$activeOption) {
                    b.ignoreHover = !0;
                    var c = b.getAdjacentOption(b.$activeOption, 1);
                    c.length && b.setActiveOption(c, !0, !0);
                }
                return void a.preventDefault();
            case 80: if (!a.ctrlKey || a.altKey)
                break;
            case 38:
                if (b.$activeOption) {
                    b.ignoreHover = !0;
                    var d = b.getAdjacentOption(b.$activeOption, -1);
                    d.length && b.setActiveOption(d, !0, !0);
                }
                return void a.preventDefault();
            case 13: return void (b.isOpen && b.$activeOption && (b.onOptionSelect({ currentTarget: b.$activeOption }), a.preventDefault()));
            case 37: return void b.advanceSelection(-1, a);
            case 39: return void b.advanceSelection(1, a);
            case 9: return b.settings.selectOnTab && b.isOpen && b.$activeOption && (b.onOptionSelect({ currentTarget: b.$activeOption }), b.isFull() || a.preventDefault()), void (b.settings.create && b.createItem() && a.preventDefault());
            case 8:
            case 46: return void b.deleteSelection(a);
        } return !b.isFull() && !b.isInputHidden || (f ? a.metaKey : a.ctrlKey) ? void 0 : void a.preventDefault(); }, onKeyUp: function (a) { var b = this; if (b.isLocked)
            return a && a.preventDefault(); var c = b.$control_input.val() || ""; b.lastValue !== c && (b.lastValue = c, b.onSearchChange(c), b.refreshOptions(), b.trigger("type", c)); }, onSearchChange: function (a) { var b = this, c = b.settings.load; c && (b.loadedSearches.hasOwnProperty(a) || (b.loadedSearches[a] = !0, b.load(function (d) { c.apply(b, [a, d]); }))); }, onFocus: function (a) { var b = this, c = b.isFocused; if (b.isDisabled)
            return b.blur(), a && a.preventDefault(), !1; b.ignoreFocus || (b.isFocused = !0, "focus" === b.settings.preload && b.onSearchChange(""), c || b.trigger("focus"), b.$activeItems.length || (b.showInput(), b.setActiveItem(null), b.refreshOptions(!!b.settings.openOnFocus)), b.refreshState()); }, onBlur: function (a, b) { var c = this; if (c.isFocused && (c.isFocused = !1, !c.ignoreFocus)) {
            if (!c.ignoreBlur && document.activeElement === c.$dropdown_content[0])
                return c.ignoreBlur = !0, void c.onFocus(a);
            var d = function () { c.close(), c.setTextboxValue(""), c.setActiveItem(null), c.setActiveOption(null), c.setCaret(c.items.length), c.refreshState(), b && b.focus && b.focus(), c.isBlurring = !1, c.ignoreFocus = !1, c.trigger("blur"); };
            c.isBlurring = !0, c.ignoreFocus = !0, c.settings.create && c.settings.createOnBlur ? c.createItem(null, !1, d) : d();
        } }, onOptionHover: function (a) { this.ignoreHover || this.setActiveOption(a.currentTarget, !1); }, onOptionSelect: function (b) { var c, d, e = this; b.preventDefault && (b.preventDefault(), b.stopPropagation()), d = a(b.currentTarget), d.hasClass("create") ? e.createItem(null, function () { e.settings.closeAfterSelect && e.close(); }) : void 0 !== (c = d.attr("data-value")) && (e.lastQuery = null, e.setTextboxValue(""), e.addItem(c), e.settings.closeAfterSelect ? e.close() : !e.settings.hideSelected && b.type && /mouse/.test(b.type) && e.setActiveOption(e.getOption(c))); }, onItemSelect: function (a) { var b = this; b.isLocked || "multi" === b.settings.mode && (a.preventDefault(), b.setActiveItem(a.currentTarget, a)); }, load: function (a) { var b = this, c = b.$wrapper.addClass(b.settings.loadingClass); b.loading++, a.apply(b, [function (a) { b.loading = Math.max(b.loading - 1, 0), a && a.length && (b.addOption(a), b.refreshOptions(b.isFocused && !b.isInputHidden)), b.loading || c.removeClass(b.settings.loadingClass), b.trigger("load", a); }]); }, setTextboxValue: function (a) { var b = this.$control_input; b.val() !== a && (b.val(a).triggerHandler("update"), this.lastValue = a); }, getValue: function () { return 1 === this.tagType && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter); }, setValue: function (a, b) { p(this, b ? [] : ["change"], function () { this.clear(b), this.addItems(a, b); }); }, setActiveItem: function (b, c) { var d, e, f, g, h, i, j, k, l = this; if ("single" !== l.settings.mode) {
            if (b = a(b), !b.length)
                return a(l.$activeItems).removeClass("active"), l.$activeItems = [], void (l.isFocused && l.showInput());
            if ("mousedown" === (d = c && c.type.toLowerCase()) && l.isShiftDown && l.$activeItems.length) {
                for (k = l.$control.children(".active:last"), g = Array.prototype.indexOf.apply(l.$control[0].childNodes, [k[0]]), h = Array.prototype.indexOf.apply(l.$control[0].childNodes, [b[0]]), g > h && (j = g, g = h, h = j), e = g; e <= h; e++)
                    i = l.$control[0].childNodes[e], -1 === l.$activeItems.indexOf(i) && (a(i).addClass("active"), l.$activeItems.push(i));
                c.preventDefault();
            }
            else
                "mousedown" === d && l.isCtrlDown || "keydown" === d && this.isShiftDown ? b.hasClass("active") ? (f = l.$activeItems.indexOf(b[0]), l.$activeItems.splice(f, 1), b.removeClass("active")) : l.$activeItems.push(b.addClass("active")[0]) : (a(l.$activeItems).removeClass("active"), l.$activeItems = [b.addClass("active")[0]]);
            l.hideInput(), this.isFocused || l.focus();
        } }, setActiveOption: function (b, c, d) { var e, f, g, h, i, k = this; k.$activeOption && k.$activeOption.removeClass("active"), k.$activeOption = null, b = a(b), b.length && (k.$activeOption = b.addClass("active"), !c && j(c) || (e = k.$dropdown_content.height(), f = k.$activeOption.outerHeight(!0), c = k.$dropdown_content.scrollTop() || 0, g = k.$activeOption.offset().top - k.$dropdown_content.offset().top + c, h = g, i = g - e + f, g + f > e + c ? k.$dropdown_content.stop().animate({ scrollTop: i }, d ? k.settings.scrollDuration : 0) : g < c && k.$dropdown_content.stop().animate({ scrollTop: h }, d ? k.settings.scrollDuration : 0))); }, selectAll: function () { var a = this; "single" !== a.settings.mode && (a.$activeItems = Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")), a.$activeItems.length && (a.hideInput(), a.close()), a.focus()); }, hideInput: function () { var a = this; a.setTextboxValue(""), a.$control_input.css({ opacity: 0, position: "absolute", left: a.rtl ? 1e4 : -1e4 }), a.isInputHidden = !0; }, showInput: function () { this.$control_input.css({ opacity: 1, position: "relative", left: 0 }), this.isInputHidden = !1; }, focus: function () { var a = this; a.isDisabled || (a.ignoreFocus = !0, a.$control_input[0].focus(), window.setTimeout(function () { a.ignoreFocus = !1, a.onFocus(); }, 0)); }, blur: function (a) { this.$control_input[0].blur(), this.onBlur(null, a); }, getScoreFunction: function (a) { return this.sifter.getScoreFunction(a, this.getSearchOptions()); }, getSearchOptions: function () { var a = this.settings, b = a.sortField; return "string" == typeof b && (b = [{ field: b }]), { fields: a.searchField, conjunction: a.searchConjunction, sort: b, nesting: a.nesting }; }, search: function (b) { var c, d, e, f = this, g = f.settings, h = this.getSearchOptions(); if (g.score && "function" != typeof (e = f.settings.score.apply(this, [b])))
            throw new Error('Selectize "score" setting must be a function that returns a function'); if (b !== f.lastQuery ? (f.lastQuery = b, d = f.sifter.search(b, a.extend(h, { score: e })), f.currentResults = d) : d = a.extend(!0, {}, f.currentResults), g.hideSelected)
            for (c = d.items.length - 1; c >= 0; c--)
                -1 !== f.items.indexOf(k(d.items[c].id)) && d.items.splice(c, 1); return d; }, refreshOptions: function (b) { var c, e, f, g, h, i, j, l, m, n, o, p, q, r, s, t; void 0 === b && (b = !0); var u = this, w = a.trim(u.$control_input.val()), x = u.search(w), y = u.$dropdown_content, z = u.$activeOption && k(u.$activeOption.attr("data-value")); for (g = x.items.length, "number" == typeof u.settings.maxOptions && (g = Math.min(g, u.settings.maxOptions)), h = {}, i = [], c = 0; c < g; c++)
            for (j = u.options[x.items[c].id], l = u.render("option", j), m = j[u.settings.optgroupField] || "", n = a.isArray(m) ? m : [m], e = 0, f = n && n.length; e < f; e++)
                m = n[e], u.optgroups.hasOwnProperty(m) || (m = ""), h.hasOwnProperty(m) || (h[m] = document.createDocumentFragment(), i.push(m)), h[m].appendChild(l); for (this.settings.lockOptgroupOrder && i.sort(function (a, b) { return (u.optgroups[a].$order || 0) - (u.optgroups[b].$order || 0); }), o = document.createDocumentFragment(), c = 0, g = i.length; c < g; c++)
            m = i[c], u.optgroups.hasOwnProperty(m) && h[m].childNodes.length ? (p = document.createDocumentFragment(), p.appendChild(u.render("optgroup_header", u.optgroups[m])), p.appendChild(h[m]), o.appendChild(u.render("optgroup", a.extend({}, u.optgroups[m], { html: v(p), dom: p })))) : o.appendChild(h[m]); if (y.html(o), u.settings.highlight && (y.removeHighlight(), x.query.length && x.tokens.length))
            for (c = 0, g = x.tokens.length; c < g; c++)
                d(y, x.tokens[c].regex); if (!u.settings.hideSelected)
            for (c = 0, g = u.items.length; c < g; c++)
                u.getOption(u.items[c]).addClass("selected"); q = u.canCreate(w), q && (y.prepend(u.render("option_create", { input: w })), t = a(y[0].childNodes[0])), u.hasOptions = x.items.length > 0 || q, u.hasOptions ? (x.items.length > 0 ? (s = z && u.getOption(z), s && s.length ? r = s : "single" === u.settings.mode && u.items.length && (r = u.getOption(u.items[0])), r && r.length || (r = t && !u.settings.addPrecedence ? u.getAdjacentOption(t, 1) : y.find("[data-selectable]:first"))) : r = t, u.setActiveOption(r), b && !u.isOpen && u.open()) : (u.setActiveOption(null), b && u.isOpen && u.close()); }, addOption: function (b) { var c, d, e, f = this; if (a.isArray(b))
            for (c = 0, d = b.length; c < d; c++)
                f.addOption(b[c]);
        else
            (e = f.registerOption(b)) && (f.userOptions[e] = !0, f.lastQuery = null, f.trigger("option_add", e, b)); }, registerOption: function (a) { var b = k(a[this.settings.valueField]); return void 0 !== b && null !== b && !this.options.hasOwnProperty(b) && (a.$order = a.$order || ++this.order, this.options[b] = a, b); }, registerOptionGroup: function (a) { var b = k(a[this.settings.optgroupValueField]); return !!b && (a.$order = a.$order || ++this.order, this.optgroups[b] = a, b); }, addOptionGroup: function (a, b) { b[this.settings.optgroupValueField] = a, (a = this.registerOptionGroup(b)) && this.trigger("optgroup_add", a, b); }, removeOptionGroup: function (a) { this.optgroups.hasOwnProperty(a) && (delete this.optgroups[a], this.renderCache = {}, this.trigger("optgroup_remove", a)); }, clearOptionGroups: function () { this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear"); }, updateOption: function (b, c) { var d, e, f, g, h, i, j, l = this; if (b = k(b), f = k(c[l.settings.valueField]), null !== b && l.options.hasOwnProperty(b)) {
            if ("string" != typeof f)
                throw new Error("Value must be set in option data");
            j = l.options[b].$order, f !== b && (delete l.options[b], -1 !== (g = l.items.indexOf(b)) && l.items.splice(g, 1, f)), c.$order = c.$order || j, l.options[f] = c, h = l.renderCache.item, i = l.renderCache.option, h && (delete h[b], delete h[f]), i && (delete i[b], delete i[f]), -1 !== l.items.indexOf(f) && (d = l.getItem(b), e = a(l.render("item", c)), d.hasClass("active") && e.addClass("active"), d.replaceWith(e)), l.lastQuery = null, l.isOpen && l.refreshOptions(!1);
        } }, removeOption: function (a, b) { var c = this; a = k(a); var d = c.renderCache.item, e = c.renderCache.option; d && delete d[a], e && delete e[a], delete c.userOptions[a], delete c.options[a], c.lastQuery = null, c.trigger("option_remove", a), c.removeItem(a, b); }, clearOptions: function () { var b = this; b.loadedSearches = {}, b.userOptions = {}, b.renderCache = {}; var c = b.options; a.each(b.options, function (a, d) { -1 == b.items.indexOf(a) && delete c[a]; }), b.options = b.sifter.items = c, b.lastQuery = null, b.trigger("option_clear"); }, getOption: function (a) { return this.getElementWithValue(a, this.$dropdown_content.find("[data-selectable]")); }, getAdjacentOption: function (b, c) { var d = this.$dropdown.find("[data-selectable]"), e = d.index(b) + c; return e >= 0 && e < d.length ? d.eq(e) : a(); }, getElementWithValue: function (b, c) { if (void 0 !== (b = k(b)) && null !== b)
            for (var d = 0, e = c.length; d < e; d++)
                if (c[d].getAttribute("data-value") === b)
                    return a(c[d]); return a(); }, getItem: function (a) { return this.getElementWithValue(a, this.$control.children()); }, addItems: function (b, c) { this.buffer = document.createDocumentFragment(); for (var d = this.$control[0].childNodes, e = 0; e < d.length; e++)
            this.buffer.appendChild(d[e]); for (var f = a.isArray(b) ? b : [b], e = 0, g = f.length; e < g; e++)
            this.isPending = e < g - 1, this.addItem(f[e], c); var h = this.$control[0]; h.insertBefore(this.buffer, h.firstChild), this.buffer = null; }, addItem: function (b, c) { p(this, c ? [] : ["change"], function () { var d, e, f, g, h, i = this, j = i.settings.mode; if (b = k(b), -1 !== i.items.indexOf(b))
            return void ("single" === j && i.close()); i.options.hasOwnProperty(b) && ("single" === j && i.clear(c), "multi" === j && i.isFull() || (d = a(i.render("item", i.options[b])), h = i.isFull(), i.items.splice(i.caretPos, 0, b), i.insertAtCaret(d), (!i.isPending || !h && i.isFull()) && i.refreshState(), i.isSetup && (f = i.$dropdown_content.find("[data-selectable]"), i.isPending || (e = i.getOption(b), g = i.getAdjacentOption(e, 1).attr("data-value"), i.refreshOptions(i.isFocused && "single" !== j), g && i.setActiveOption(i.getOption(g))), !f.length || i.isFull() ? i.close() : i.isPending || i.positionDropdown(), i.updatePlaceholder(), i.trigger("item_add", b, d), i.isPending || i.updateOriginalInput({ silent: c })))); }); }, removeItem: function (b, c) { var d, e, f, g = this; d = b instanceof a ? b : g.getItem(b), b = k(d.attr("data-value")), -1 !== (e = g.items.indexOf(b)) && (d.remove(), d.hasClass("active") && (f = g.$activeItems.indexOf(d[0]), g.$activeItems.splice(f, 1)), g.items.splice(e, 1), g.lastQuery = null, !g.settings.persist && g.userOptions.hasOwnProperty(b) && g.removeOption(b, c), e < g.caretPos && g.setCaret(g.caretPos - 1), g.refreshState(), g.updatePlaceholder(), g.updateOriginalInput({ silent: c }), g.positionDropdown(), g.trigger("item_remove", b, d)); }, createItem: function (b, c) { var d = this, e = d.caretPos; b = b || a.trim(d.$control_input.val() || ""); var f = arguments[arguments.length - 1]; if ("function" != typeof f && (f = function () { }), "boolean" != typeof c && (c = !0), !d.canCreate(b))
            return f(), !1; d.lock(); var g = "function" == typeof d.settings.create ? this.settings.create : function (a) { var b = {}; return b[d.settings.labelField] = a, b[d.settings.valueField] = a, b; }, h = n(function (a) { if (d.unlock(), !a || "object" != typeof a)
            return f(); var b = k(a[d.settings.valueField]); if ("string" != typeof b)
            return f(); d.setTextboxValue(""), d.addOption(a), d.setCaret(e), d.addItem(b), d.refreshOptions(c && "single" !== d.settings.mode), f(a); }), i = g.apply(this, [b, h]); return void 0 !== i && h(i), !0; }, refreshItems: function () { this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput(); }, refreshState: function () { this.refreshValidityState(), this.refreshClasses(); }, refreshValidityState: function () { if (!this.isRequired)
            return !1; var a = !this.items.length; this.isInvalid = a, this.$control_input.prop("required", a), this.$input.prop("required", !a); }, refreshClasses: function () { var b = this, c = b.isFull(), d = b.isLocked; b.$wrapper.toggleClass("rtl", b.rtl), b.$control.toggleClass("focus", b.isFocused).toggleClass("disabled", b.isDisabled).toggleClass("required", b.isRequired).toggleClass("invalid", b.isInvalid).toggleClass("locked", d).toggleClass("full", c).toggleClass("not-full", !c).toggleClass("input-active", b.isFocused && !b.isInputHidden).toggleClass("dropdown-active", b.isOpen).toggleClass("has-options", !a.isEmptyObject(b.options)).toggleClass("has-items", b.items.length > 0), b.$control_input.data("grow", !c && !d); }, isFull: function () {
            return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems;
        }, updateOriginalInput: function (a) { var b, c, d, e, f = this; if (a = a || {}, 1 === f.tagType) {
            for (d = [], b = 0, c = f.items.length; b < c; b++)
                e = f.options[f.items[b]][f.settings.labelField] || "", d.push('<option value="' + l(f.items[b]) + '" selected="selected">' + l(e) + "</option>");
            d.length || this.$input.attr("multiple") || d.push('<option value="" selected="selected"></option>'), f.$input.html(d.join(""));
        }
        else
            f.$input.val(f.getValue()), f.$input.attr("value", f.$input.val()); f.isSetup && (a.silent || f.trigger("change", f.$input.val())); }, updatePlaceholder: function () { if (this.settings.placeholder) {
            var a = this.$control_input;
            this.items.length ? a.removeAttr("placeholder") : a.attr("placeholder", this.settings.placeholder), a.triggerHandler("update", { force: !0 });
        } }, open: function () { var a = this; a.isLocked || a.isOpen || "multi" === a.settings.mode && a.isFull() || (a.focus(), a.isOpen = !0, a.refreshState(), a.$dropdown.css({ visibility: "hidden", display: "block" }), a.positionDropdown(), a.$dropdown.css({ visibility: "visible" }), a.trigger("dropdown_open", a.$dropdown)); }, close: function () { var a = this, b = a.isOpen; "single" === a.settings.mode && a.items.length && (a.hideInput(), a.isBlurring || a.$control_input.blur()), a.isOpen = !1, a.$dropdown.hide(), a.setActiveOption(null), a.refreshState(), b && a.trigger("dropdown_close", a.$dropdown); }, positionDropdown: function () { var a = this.$control, b = "body" === this.settings.dropdownParent ? a.offset() : a.position(); b.top += a.outerHeight(!0), this.$dropdown.css({ width: a[0].getBoundingClientRect().width, top: b.top, left: b.left }); }, clear: function (a) { var b = this; b.items.length && (b.$control.children(":not(input)").remove(), b.items = [], b.lastQuery = null, b.setCaret(0), b.setActiveItem(null), b.updatePlaceholder(), b.updateOriginalInput({ silent: a }), b.refreshState(), b.showInput(), b.trigger("clear")); }, insertAtCaret: function (a) { var b = Math.min(this.caretPos, this.items.length), c = a[0], d = this.buffer || this.$control[0]; 0 === b ? d.insertBefore(c, d.firstChild) : d.insertBefore(c, d.childNodes[b]), this.setCaret(b + 1); }, deleteSelection: function (b) { var c, d, e, f, g, h, i, j, k, l = this; if (e = b && 8 === b.keyCode ? -1 : 1, f = r(l.$control_input[0]), l.$activeOption && !l.settings.hideSelected && (i = l.getAdjacentOption(l.$activeOption, -1).attr("data-value")), g = [], l.$activeItems.length) {
            for (k = l.$control.children(".active:" + (e > 0 ? "last" : "first")), h = l.$control.children(":not(input)").index(k), e > 0 && h++, c = 0, d = l.$activeItems.length; c < d; c++)
                g.push(a(l.$activeItems[c]).attr("data-value"));
            b && (b.preventDefault(), b.stopPropagation());
        }
        else
            (l.isFocused || "single" === l.settings.mode) && l.items.length && (e < 0 && 0 === f.start && 0 === f.length ? g.push(l.items[l.caretPos - 1]) : e > 0 && f.start === l.$control_input.val().length && g.push(l.items[l.caretPos])); if (!g.length || "function" == typeof l.settings.onDelete && !1 === l.settings.onDelete.apply(l, [g]))
            return !1; for (void 0 !== h && l.setCaret(h); g.length;)
            l.removeItem(g.pop()); return l.showInput(), l.positionDropdown(), l.refreshOptions(!0), i && (j = l.getOption(i), j.length && l.setActiveOption(j)), !0; }, advanceSelection: function (a, b) { var c, d, e, f, g, h = this; 0 !== a && (h.rtl && (a *= -1), c = a > 0 ? "last" : "first", d = r(h.$control_input[0]), h.isFocused && !h.isInputHidden ? (f = h.$control_input.val().length, (a < 0 ? 0 === d.start && 0 === d.length : d.start === f) && !f && h.advanceCaret(a, b)) : (g = h.$control.children(".active:" + c), g.length && (e = h.$control.children(":not(input)").index(g), h.setActiveItem(null), h.setCaret(a > 0 ? e + 1 : e)))); }, advanceCaret: function (a, b) { var c, d, e = this; 0 !== a && (c = a > 0 ? "next" : "prev", e.isShiftDown ? (d = e.$control_input[c](), d.length && (e.hideInput(), e.setActiveItem(d), b && b.preventDefault())) : e.setCaret(e.caretPos + a)); }, setCaret: function (b) { var c = this; if (b = "single" === c.settings.mode ? c.items.length : Math.max(0, Math.min(c.items.length, b)), !c.isPending) {
            var d, e, f, g;
            for (f = c.$control.children(":not(input)"), d = 0, e = f.length; d < e; d++)
                g = a(f[d]).detach(), d < b ? c.$control_input.before(g) : c.$control.append(g);
        } c.caretPos = b; }, lock: function () { this.close(), this.isLocked = !0, this.refreshState(); }, unlock: function () { this.isLocked = !1, this.refreshState(); }, disable: function () { var a = this; a.$input.prop("disabled", !0), a.$control_input.prop("disabled", !0).prop("tabindex", -1), a.isDisabled = !0, a.lock(); }, enable: function () { var a = this; a.$input.prop("disabled", !1), a.$control_input.prop("disabled", !1).prop("tabindex", a.tabIndex), a.isDisabled = !1, a.unlock(); }, destroy: function () { var b = this, c = b.eventNS, d = b.revertSettings; b.trigger("destroy"), b.off(), b.$wrapper.remove(), b.$dropdown.remove(), b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({ tabindex: d.tabindex }).show(), b.$control_input.removeData("grow"), b.$input.removeData("selectize"), 0 == --w.count && w.$testInput && (w.$testInput.remove(), w.$testInput = void 0), a(window).off(c), a(document).off(c), a(document.body).off(c), delete b.$input[0].selectize; }, render: function (b, c) { var d, e, f = "", g = !1, h = this; return "option" !== b && "item" !== b || (d = k(c[h.settings.valueField]), g = !!d), g && (j(h.renderCache[b]) || (h.renderCache[b] = {}), h.renderCache[b].hasOwnProperty(d)) ? h.renderCache[b][d] : (f = a(h.settings.render[b].apply(this, [c, l])), "option" === b || "option_create" === b ? c[h.settings.disabledField] || f.attr("data-selectable", "") : "optgroup" === b && (e = c[h.settings.optgroupValueField] || "", f.attr("data-group", e), c[h.settings.disabledField] && f.attr("data-disabled", "")), "option" !== b && "item" !== b || f.attr("data-value", d || ""), g && (h.renderCache[b][d] = f[0]), f[0]); }, clearCache: function (a) { var b = this; void 0 === a ? b.renderCache = {} : delete b.renderCache[a]; }, canCreate: function (a) { var b = this; if (!b.settings.create)
            return !1; var c = b.settings.createFilter; return a.length && ("function" != typeof c || c.apply(b, [a])) && ("string" != typeof c || new RegExp(c).test(a)) && (!(c instanceof RegExp) || c.test(a)); } }), w.count = 0, w.defaults = { options: [], optgroups: [], plugins: [], delimiter: ",", splitOn: null, persist: !0, diacritics: !0, create: !1, createOnBlur: !1, createFilter: null, highlight: !0, openOnFocus: !0, maxOptions: 1e3, maxItems: null, hideSelected: null, addPrecedence: !1, selectOnTab: !1, preload: !1, allowEmptyOption: !1, closeAfterSelect: !1, scrollDuration: 60, loadThrottle: 300, loadingClass: "loading", dataAttr: "data-data", optgroupField: "optgroup", valueField: "value", labelField: "text", disabledField: "disabled", optgroupLabelField: "label", optgroupValueField: "value", lockOptgroupOrder: !1, sortField: "$order", searchField: ["text"], searchConjunction: "and", mode: null, wrapperClass: "selectize-control", inputClass: "selectize-input", dropdownClass: "selectize-dropdown", dropdownContentClass: "selectize-dropdown-content", dropdownParent: null, copyClassesToDropdown: !0, render: {} }, a.fn.selectize = function (b) { var c = a.fn.selectize.defaults, d = a.extend({}, c, b), e = d.dataAttr, f = d.labelField, g = d.valueField, h = d.disabledField, i = d.optgroupField, j = d.optgroupLabelField, l = d.optgroupValueField, m = function (b, c) { var h, i, j, k, l = b.attr(e); if (l)
        for (c.options = JSON.parse(l), h = 0, i = c.options.length; h < i; h++)
            c.items.push(c.options[h][g]);
    else {
        var m = a.trim(b.val() || "");
        if (!d.allowEmptyOption && !m.length)
            return;
        for (j = m.split(d.delimiter), h = 0, i = j.length; h < i; h++)
            k = {}, k[f] = j[h], k[g] = j[h], c.options.push(k);
        c.items = j;
    } }, n = function (b, c) { var m, n, o, p, q = c.options, r = {}, s = function (a) { var b = e && a.attr(e); return "string" == typeof b && b.length ? JSON.parse(b) : null; }, t = function (b, e) { b = a(b); var j = k(b.val()); if (j || d.allowEmptyOption)
        if (r.hasOwnProperty(j)) {
            if (e) {
                var l = r[j][i];
                l ? a.isArray(l) ? l.push(e) : r[j][i] = [l, e] : r[j][i] = e;
            }
        }
        else {
            var m = s(b) || {};
            m[f] = m[f] || b.text(), m[g] = m[g] || j, m[h] = m[h] || b.prop("disabled"), m[i] = m[i] || e, r[j] = m, q.push(m), b.is(":selected") && c.items.push(j);
        } }; for (c.maxItems = b.attr("multiple") ? null : 1, p = b.children(), m = 0, n = p.length; m < n; m++)
        o = p[m].tagName.toLowerCase(), "optgroup" === o ? function (b) { var d, e, f, g, i; for (b = a(b), f = b.attr("label"), f && (g = s(b) || {}, g[j] = f, g[l] = f, g[h] = b.prop("disabled"), c.optgroups.push(g)), i = a("option", b), d = 0, e = i.length; d < e; d++)
            t(i[d], f); }(p[m]) : "option" === o && t(p[m]); }; return this.each(function () { if (!this.selectize) {
        var e = a(this), f = this.tagName.toLowerCase(), g = e.attr("placeholder") || e.attr("data-placeholder");
        g || d.allowEmptyOption || (g = e.children('option[value=""]').text());
        var h = { placeholder: g, options: [], optgroups: [], items: [] };
        "select" === f ? n(e, h) : m(e, h), new w(e, a.extend(!0, {}, c, h, b));
    } }); }, a.fn.selectize.defaults = w.defaults, a.fn.selectize.support = { validity: i }, w.define("drag_drop", function (b) { if (!a.fn.sortable)
        throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".'); if ("multi" === this.settings.mode) {
        var c = this;
        c.lock = function () { var a = c.lock; return function () { var b = c.$control.data("sortable"); return b && b.disable(), a.apply(c, arguments); }; }(), c.unlock = function () { var a = c.unlock; return function () { var b = c.$control.data("sortable"); return b && b.enable(), a.apply(c, arguments); }; }(), c.setup = function () { var b = c.setup; return function () { b.apply(this, arguments); var d = c.$control.sortable({ items: "[data-value]", forcePlaceholderSize: !0, disabled: c.isLocked, start: function (a, b) { b.placeholder.css("width", b.helper.css("width")), d.css({ overflow: "visible" }); }, stop: function () { d.css({ overflow: "hidden" }); var b = c.$activeItems ? c.$activeItems.slice() : null, e = []; d.children("[data-value]").each(function () { e.push(a(this).attr("data-value")); }), c.setValue(e), c.setActiveItem(b); } }); }; }();
    } }), w.define("dropdown_header", function (b) { var c = this; b = a.extend({ title: "Untitled", headerClass: "selectize-dropdown-header", titleRowClass: "selectize-dropdown-header-title", labelClass: "selectize-dropdown-header-label", closeClass: "selectize-dropdown-header-close", html: function (a) { return '<div class="' + a.headerClass + '"><div class="' + a.titleRowClass + '"><span class="' + a.labelClass + '">' + a.title + '</span><a href="javascript:void(0)" class="' + a.closeClass + '">&times;</a></div></div>'; } }, b), c.setup = function () { var d = c.setup; return function () { d.apply(c, arguments), c.$dropdown_header = a(b.html(b)), c.$dropdown.prepend(c.$dropdown_header); }; }(); }), w.define("optgroup_columns", function (b) { var c = this; b = a.extend({ equalizeWidth: !0, equalizeHeight: !0 }, b), this.getAdjacentOption = function (b, c) { var d = b.closest("[data-group]").find("[data-selectable]"), e = d.index(b) + c; return e >= 0 && e < d.length ? d.eq(e) : a(); }, this.onKeyDown = function () { var a = c.onKeyDown; return function (b) { var d, e, f, g; return !this.isOpen || 37 !== b.keyCode && 39 !== b.keyCode ? a.apply(this, arguments) : (c.ignoreHover = !0, g = this.$activeOption.closest("[data-group]"), d = g.find("[data-selectable]").index(this.$activeOption), g = 37 === b.keyCode ? g.prev("[data-group]") : g.next("[data-group]"), f = g.find("[data-selectable]"), e = f.eq(Math.min(f.length - 1, d)), void (e.length && this.setActiveOption(e))); }; }(); var d = function () { var a, b = d.width, c = document; return void 0 === b && (a = c.createElement("div"), a.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', a = a.firstChild, c.body.appendChild(a), b = d.width = a.offsetWidth - a.clientWidth, c.body.removeChild(a)), b; }, e = function () { var e, f, g, h, i, j, k; if (k = a("[data-group]", c.$dropdown_content), (f = k.length) && c.$dropdown_content.width()) {
        if (b.equalizeHeight) {
            for (g = 0, e = 0; e < f; e++)
                g = Math.max(g, k.eq(e).height());
            k.css({ height: g });
        }
        b.equalizeWidth && (j = c.$dropdown_content.innerWidth() - d(), h = Math.round(j / f), k.css({ width: h }), f > 1 && (i = j - h * (f - 1), k.eq(f - 1).css({ width: i })));
    } }; (b.equalizeHeight || b.equalizeWidth) && (m.after(this, "positionDropdown", e), m.after(this, "refreshOptions", e)); }), w.define("remove_button", function (b) { b = a.extend({ label: "&times;", title: "Remove", className: "remove", append: !0 }, b); if ("single" === this.settings.mode)
        return void function (b, c) { c.className = "remove-single"; var d = b, e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + l(c.title) + '">' + c.label + "</a>", f = function (b, c) { return a("<span>").append(b).append(c); }; b.setup = function () { var g = d.setup; return function () { if (c.append) {
            var h = a(d.$input.context).attr("id"), i = (a("#" + h), d.settings.render.item);
            d.settings.render.item = function (a) { return f(i.apply(b, arguments), e); };
        } g.apply(b, arguments), b.$control.on("click", "." + c.className, function (a) { a.preventDefault(), d.isLocked || d.clear(); }); }; }(); }(this, b); !function (b, c) { var d = b, e = '<a href="javascript:void(0)" class="' + c.className + '" tabindex="-1" title="' + l(c.title) + '">' + c.label + "</a>", f = function (a, b) { var c = a.search(/(<\/[^>]+>\s*)$/); return a.substring(0, c) + b + a.substring(c); }; b.setup = function () { var g = d.setup; return function () { if (c.append) {
        var h = d.settings.render.item;
        d.settings.render.item = function (a) { return f(h.apply(b, arguments), e); };
    } g.apply(b, arguments), b.$control.on("click", "." + c.className, function (b) { if (b.preventDefault(), !d.isLocked) {
        var c = a(b.currentTarget).parent();
        d.setActiveItem(c), d.deleteSelection() && d.setCaret(d.items.length);
    } }); }; }(); }(this, b); }), w.define("restore_on_backspace", function (a) { var b = this; a.text = a.text || function (a) { return a[this.settings.labelField]; }, this.onKeyDown = function () { var c = b.onKeyDown; return function (b) { var d, e; return 8 === b.keyCode && "" === this.$control_input.val() && !this.$activeItems.length && (d = this.caretPos - 1) >= 0 && d < this.items.length ? (e = this.options[this.items[d]], this.deleteSelection(b) && (this.setTextboxValue(a.text.apply(this, [e])), this.refreshOptions(!0)), void b.preventDefault()) : c.apply(this, arguments); }; }(); }), w;
});
$(document).ready(function () {
    Selectize.define('no_results', function (options) {
        var self = this;
        options = $.extend({
            message: 'No match found',
            html: function (data) {
                return ('<div class="selectize-dropdown ' + data.classNames + '">' +
                    '<div class="selectize-dropdown-content">' +
                    '<div class="no-results">' + data.message + '</div>' +
                    '</div>' +
                    '</div>');
            }
        }, options);
        self.displayEmptyResultsMessage = function () {
            this.$empty_results_container.css('top', this.$control.outerHeight());
            this.$empty_results_container.css('width', this.$control.outerWidth());
            this.$empty_results_container.show();
            this.$control.addClass("dropdown-active");
            this.$dropdown.attr('data-no-match-found', 'true');
        };
        self.refreshOptions = (function () {
            var original = self.refreshOptions;
            return function () {
                original.apply(self, arguments);
                if (this.hasOptions || !this.lastQuery) {
                    this.$empty_results_container.hide();
                    self.$dropdown.removeAttr('data-no-match-found');
                }
                else {
                    this.displayEmptyResultsMessage();
                }
            };
        })();
        self.onKeyDown = (function () {
            var original = self.onKeyDown;
            return function (e) {
                original.apply(self, arguments);
                if (e.keyCode === 27) {
                    this.$empty_results_container.hide();
                }
            };
        })();
        self.onBlur = (function () {
            var original = self.onBlur;
            return function () {
                original.apply(self, arguments);
                this.$empty_results_container.hide();
                this.$control.removeClass("dropdown-active");
            };
        })();
        self.setup = (function () {
            var original = self.setup;
            return function () {
                original.apply(self, arguments);
                self.$empty_results_container = $(options.html($.extend({
                    classNames: self.$input.attr('class')
                }, options)));
                self.$empty_results_container.insertBefore(self.$dropdown);
                self.$empty_results_container.hide();
            };
        })();
    });
    Selectize.define("start_typing", function (options) {
        var self = this;
        var KEY_BACKSPACE = 8;
        this.onKeyDown = (function (e) {
            var original = self.onKeyDown;
            return function (e) {
                if ((self.settings.maxItems === null || self.settings.maxItems === 1) && (self.isFull() || self.isInputHidden)) {
                    var oldargs = arguments, keycode = e.keyCode, valid = (keycode > 47 && keycode < 58) ||
                        (keycode === 32) ||
                        (keycode > 64 && keycode < 91) ||
                        (keycode > 95 && keycode < 112) ||
                        (keycode > 185 && keycode < 193) ||
                        (keycode > 218 && keycode < 223);
                    if (valid) {
                        e.keyCode = KEY_BACKSPACE;
                        self.deleteSelection(e);
                    }
                }
                return original.apply(self, arguments);
            };
        })();
    });
    Selectize.define('dropdown_direction', function (options) {
        var self = this;
        self.on('dropdown_open', function () {
            setTimeout(function () {
                self.calculatePositionDropdown();
            });
        });
        self.calculatePositionDropdown = (function () {
            return function () {
                var $control = self.$control, $dropdown = self.$dropdown, p = getPositions(), direction = getDropdownDirection(p);
                if (direction === 'up') {
                    $dropdown.addClass('direction-up').removeClass('direction-down');
                }
                else {
                    $dropdown.addClass('direction-down').removeClass('direction-up');
                }
                $control.attr('data-dropdown-direction', direction);
                var isParentBody = self.settings.dropdownParent === 'body', offset = isParentBody ? $control.offset() : $control.position(), fittedHeight;
                switch (direction) {
                    case 'up':
                        offset.top -= p.dropdown.height + 10;
                        if (p.dropdown.height > p.control.above) {
                            fittedHeight = p.control.above - 15;
                        }
                        break;
                    case 'down':
                        offset.top += p.control.height;
                        if (p.dropdown.height > p.control.below) {
                            fittedHeight = p.control.below - 15;
                        }
                        break;
                }
                if (fittedHeight) {
                    self.$dropdown_content.css({ 'max-height': fittedHeight });
                }
                if (offset.top) {
                    self.$dropdown.css({ top: offset.top });
                }
                if (offset.left) {
                    self.$dropdown.css({ left: offset.left });
                }
                self.$dropdown.css({ width: $control.outerWidth() });
                self.$wrapper.removeClass('dropdown-direction-plugin');
            };
        })();
        function getDropdownDirection(positions) {
            var direction = self.settings.dropdownDirection;
            if (typeof direction === 'undefined') {
                direction = 'auto';
            }
            if (direction === 'auto') {
                if (positions.control.below > positions.dropdown.height) {
                    direction = 'down';
                }
                else {
                    direction = (positions.control.above > positions.control.below) ? 'up' : 'down';
                }
            }
            return direction;
        }
        function getPositions() {
            var $control = self.$control, $window = $(window), control_height = $control.outerHeight(false), control_above = $control.offset().top - $window.scrollTop(), control_below = $window.height() - control_above - control_height, dropdown_height = self.$dropdown.outerHeight(false);
            return {
                control: {
                    height: control_height,
                    above: control_above,
                    below: control_below
                },
                dropdown: {
                    height: dropdown_height
                }
            };
        }
    });
    Selectize.define("scroll_dropdown_view_on_selected_item_top", function (options) {
        var self = this;
        self.on('dropdown_open', function () {
            setTimeout(function () {
                scrollDropdownViewToItemTop(self);
            });
        });
        function scrollDropdownViewToItemTop(select) {
            var option_select;
            if (select.$activeOption && !select.settings.hideSelected) {
                option_select = select.getAdjacentOption(select.$activeOption, 0).attr('data-value');
            }
            if (option_select) {
                var height_menu, height_item, y;
                var scroll_top, scroll_bottom;
                height_menu = select.$dropdown_content.height();
                height_item = select.$activeOption.outerHeight(true);
                scroll = select.$dropdown_content.scrollTop() || 0;
                y = select.$activeOption.offset().top - select.$dropdown_content.offset().top + scroll;
                scroll_top = y;
                scroll_bottom = y - height_menu + height_item;
                select.$dropdown_content.stop().animate({ scrollTop: scroll_top }, 0);
            }
        }
    });
});
var ContextMenu = (function () {
    function ContextMenu(config, jq, id) {
        this.items = [];
        this.selectedOptionIndex = null;
        this.id = id;
        this.config = config || [];
        this.modal = document.createElement('div');
        this.rootElement = document.createElement('div');
        this.modal.appendChild(this.rootElement);
        this.modal.className = 'ui-context-menu';
        this.rootElement.className = 'context-menu';
        this.rootElement.id = id;
        this.jq = jq;
        this.modal.tabIndex = 0;
        this.initializeItems();
        this.initializeEvents();
        if (!ContextMenu.isBodyEventAdded) {
            this.jq(document.body).on('mousewheel', '.ui-context-menu', function (e) {
                if (this === (e.target || e.srcElement)) {
                    ContextMenu.closeAll();
                }
            });
            ContextMenu.isBodyEventAdded = true;
        }
    }
    ContextMenu.prototype.initializeItems = function () {
        for (var i = 0, len = this.config.length; i < len; i++) {
            if (typeof this.items[i] === 'undefined') {
                this.items.push((function (config) {
                    var option = document.createElement('div');
                    if (config === null) {
                        option.className = 'separator';
                    }
                    else {
                        var icon = document.createElement('span'), label = document.createTextNode(config.label);
                        option.className = 'option';
                        option.setAttribute('data-role', config.action);
                        icon.className = config.icon;
                        option.appendChild(icon);
                        option.appendChild(label);
                        if (config.disabled) {
                            option.classList.add('disabled');
                        }
                    }
                    return option;
                })(this.config[i]));
            }
            if (this.config[i] !== null) {
                if (!this.config[i].visible) {
                    this.items[i].style.display = 'none';
                }
                else {
                    this.items[i].style.display = 'block';
                }
            }
            this.items[i].setAttribute('option-index', String(i));
            this.rootElement.appendChild(this.items[i]);
        }
    };
    ContextMenu.prototype.initializeEvents = function () {
        (function (self) {
            self.jq(self.rootElement).on('mouseenter', '.option', function (e) {
                var optionIndex = ~~self.jq(this).attr('option-index');
                self.setSelectedOption(optionIndex);
            });
            self.jq(self.rootElement).on('click', '.option', function (e) {
                var optionIndex = ~~self.jq(this).attr('option-index');
                self.fireItemByIndex(optionIndex);
            });
            self.jq(self.modal).on('mouseup', function (ev) {
                var target = ev.target || ev.srcElement;
                if (target === self.modal) {
                    self.close();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            });
            self.modal.addEventListener('keydown', function (ev) {
                var code = ev.keyCode || ev.charCode;
                switch (code) {
                    case 13:
                        self.fireCurrentItemIfPossible();
                        break;
                    case 27:
                        self.close();
                        break;
                    case 40:
                        self.focusNext();
                        break;
                    case 38:
                        self.focusPrev();
                        break;
                    case 39:
                        break;
                    case 37:
                        break;
                    default:
                        console.log(code);
                        break;
                }
                ev.preventDefault();
                ev.stopPropagation();
            }, true);
        })(this);
    };
    ContextMenu.prototype.getNextFocusableOptionIndex = function (relativeTo, direction) {
        var startIndex = -1, stopIndex = 0;
        if (relativeTo === null) {
            switch (direction) {
                case -1:
                    startIndex = this.config.length - 1;
                    stopIndex = 0;
                    break;
                case 1:
                    startIndex = 0;
                    stopIndex = this.config.length - 1;
                    break;
            }
        }
        else {
            startIndex = relativeTo + direction;
            stopIndex = relativeTo;
        }
        while (startIndex !== stopIndex) {
            if (startIndex < 0) {
                startIndex = this.config.length - 1;
            }
            else {
                if (startIndex >= this.config.length) {
                    startIndex = 0;
                }
            }
            if (this.isSelectable(startIndex)) {
                return startIndex;
            }
            startIndex += direction;
        }
        return null;
    };
    ContextMenu.prototype.focusPrev = function () {
        var opt = this.getNextFocusableOptionIndex(this.selectedOptionIndex, -1);
        if (opt !== null) {
            this.setSelectedOption(opt);
        }
    };
    ContextMenu.prototype.focusNext = function () {
        var opt = this.getNextFocusableOptionIndex(this.selectedOptionIndex, 1);
        if (opt !== null) {
            this.setSelectedOption(opt);
        }
    };
    ContextMenu.prototype.withConfig = function (config) {
        this.config = config;
        this.initializeItems();
        return this;
    };
    ContextMenu.prototype.resetCSSPosition = function () {
        this.rootElement.style.left = this.rootElement.style.right = this.rootElement.style.bottom = this.rootElement.style.top = '';
    };
    ContextMenu.prototype.anchorToElement = function (element) {
        if (!element) {
            return;
        }
        var elementWindow = element.getBoundingClientRect(), menuWindow = this.rootElement.getBoundingClientRect(), windowRect = this.modal.getBoundingClientRect(), elementWindowHorizontal = {
            "left": elementWindow.left,
            "top": elementWindow.top - ContextMenu.anchorDistance,
            "right": elementWindow.right,
            "bottom": elementWindow.bottom + ContextMenu.anchorDistance,
            "width": elementWindow.width,
            "height": elementWindow.height + 2 * ContextMenu.anchorDistance
        }, elementWindowVertical = {
            "left": elementWindow.left - ContextMenu.anchorDistance,
            "top": elementWindow.top,
            "right": elementWindow.right + ContextMenu.anchorDistance,
            "bottom": elementWindow.bottom,
            "width": elementWindow.width + 2 * ContextMenu.anchorDistance,
            "height": elementWindow.height
        };
        if (elementWindowHorizontal.left + menuWindow.width < windowRect.width && elementWindowHorizontal.bottom + menuWindow.height < windowRect.height) {
            this.rootElement.style.left = elementWindowHorizontal.left + "px";
            this.rootElement.style.top = elementWindowHorizontal.bottom + "px";
            return;
        }
        if (elementWindowVertical.left + menuWindow.width < windowRect.width && elementWindowVertical.top - menuWindow.height > 0) {
            this.rootElement.style.left = elementWindowHorizontal.left + "px";
            this.rootElement.style.top = elementWindowHorizontal.top - menuWindow.height + "px";
            return;
        }
        if (elementWindowHorizontal.right - menuWindow.width > 0 && elementWindowHorizontal.bottom + menuWindow.height < windowRect.height) {
            this.rootElement.style.left = elementWindowHorizontal.right - menuWindow.width + "px";
            this.rootElement.style.top = elementWindowHorizontal.bottom + "px";
            return;
        }
        if (elementWindowHorizontal.right - menuWindow.width > 0 && elementWindowHorizontal.top - menuWindow.height > 0) {
            this.rootElement.style.left = elementWindowHorizontal.right - menuWindow.width + "px";
            this.rootElement.style.top = elementWindowHorizontal.top - menuWindow.height + "px";
            return;
        }
        var x = ~~(windowRect.width / 2 - menuWindow.width / 2), y = ~~(windowRect.height / 2 - menuWindow.height / 2);
        if (x < 0) {
            x = 0;
        }
        if (y < 0) {
            y = 0;
        }
        if (elementWindowVertical.right + menuWindow.width < windowRect.width) {
            x = elementWindowVertical.right;
        }
        else if (elementWindowVertical.left - menuWindow.width > 0) {
            x = elementWindowVertical.left - menuWindow.width;
        }
        this.rootElement.style.left = x + "px";
        this.rootElement.style.top = y + "px";
    };
    ContextMenu.prototype.openAt = function (element) {
        this.anchorElement = element;
        this.resetCSSPosition();
        this.jq(this.anchorElement).addClass('pressed');
        this.selectedOptionIndex = null;
        this.setSelectedOption(null);
        this.jq(document.body).addClass('has-context-menu').addClass(this.id);
        document.body.appendChild(this.modal);
        this.anchorToElement(element);
        (function (self) {
            setTimeout(function () {
                self.modal.focus();
            }, 10);
        })(this);
        return this;
    };
    ContextMenu.prototype.isSelectable = function (itemIndex) {
        return this.config[itemIndex] && this.config[itemIndex].visible && !this.config[itemIndex].disabled;
    };
    ContextMenu.prototype.setSelectedOption = function (index) {
        for (var i = 0, len = this.items.length; i < len; i++) {
            if (i !== index) {
                this.jq(this.items[i]).removeClass('selected');
            }
        }
        if (this.isSelectable(index)) {
            this.jq(this.items[index]).addClass('selected');
            this.selectedOptionIndex = index;
        }
    };
    ContextMenu.prototype.fireCurrentItemIfPossible = function () {
        this.fireItemByIndex(this.selectedOptionIndex);
    };
    ContextMenu.prototype.fireItemByIndex = function (itemIndex) {
        if (this.isSelectable(itemIndex)) {
            if (this.config[itemIndex].callback) {
                this.config[itemIndex].callback(this.config[itemIndex].action);
            }
            this.close();
        }
    };
    ContextMenu.prototype.close = function () {
        if (this.modal.parentNode) {
            this.modal.parentNode.removeChild(this.modal);
        }
        if (this.anchorElement) {
            this.jq(this.anchorElement).removeClass('pressed');
        }
        this.jq(document.body).removeClass('has-context-menu').removeClass(this.id);
        return this;
    };
    ContextMenu.withJQuery = function (jq) {
        ContextMenu.JQuery = jq;
        return ContextMenu;
    };
    ContextMenu.createAt = function (element, contextMenuId, contextMenuConfig) {
        if (ContextMenu.instances[contextMenuId]) {
            return ContextMenu.instances[contextMenuId].withConfig(contextMenuConfig).openAt(element);
        }
        else {
            return ContextMenu.instances[contextMenuId] = new ContextMenu(contextMenuConfig, ContextMenu.JQuery, contextMenuId).openAt(element);
        }
    };
    ContextMenu.closeAll = function () {
        for (var k in ContextMenu.instances) {
            if (ContextMenu.instances.hasOwnProperty(k)) {
                ContextMenu.instances[k].close();
            }
        }
    };
    ContextMenu.anchorDistance = 4;
    ContextMenu.instances = {};
    ContextMenu.JQuery = null;
    ContextMenu.isBodyEventAdded = false;
    return ContextMenu;
}());
window.addEventListener('resize', function (e) {
    ContextMenu.closeAll();
});
var EDialogButtonType;
(function (EDialogButtonType) {
    EDialogButtonType[EDialogButtonType["OK"] = 0] = "OK";
    EDialogButtonType[EDialogButtonType["CANCEL"] = 1] = "CANCEL";
    EDialogButtonType[EDialogButtonType["YES"] = 2] = "YES";
    EDialogButtonType[EDialogButtonType["NO"] = 3] = "NO";
    EDialogButtonType[EDialogButtonType["ABORT"] = 4] = "ABORT";
    EDialogButtonType[EDialogButtonType["RETRY"] = 5] = "RETRY";
    EDialogButtonType[EDialogButtonType["IGNORE"] = 6] = "IGNORE";
    EDialogButtonType[EDialogButtonType["SAVE"] = 7] = "SAVE";
    EDialogButtonType[EDialogButtonType["CHANGE"] = 8] = "CHANGE";
    EDialogButtonType[EDialogButtonType["DELETE"] = 9] = "DELETE";
    EDialogButtonType[EDialogButtonType["DOWNLOAD"] = 10] = "DOWNLOAD";
    EDialogButtonType[EDialogButtonType["CLOSE"] = 11] = "CLOSE";
    EDialogButtonType[EDialogButtonType["ENABLE_COMPLIANCE"] = 12] = "ENABLE_COMPLIANCE";
    EDialogButtonType[EDialogButtonType["DISABLE_COMPLIANCE"] = 13] = "DISABLE_COMPLIANCE";
    EDialogButtonType[EDialogButtonType["CREATE"] = 14] = "CREATE";
    EDialogButtonType[EDialogButtonType["DONE"] = 15] = "DONE";
    EDialogButtonType[EDialogButtonType["TRY_FORM"] = 16] = "TRY_FORM";
    EDialogButtonType[EDialogButtonType["NO_THANKS"] = 17] = "NO_THANKS";
    EDialogButtonType[EDialogButtonType["MAYBE_LATER"] = 18] = "MAYBE_LATER";
    EDialogButtonType[EDialogButtonType["UPDATE"] = 19] = "UPDATE";
    EDialogButtonType[EDialogButtonType["UPGRADE_NOW"] = 20] = "UPGRADE_NOW";
    EDialogButtonType[EDialogButtonType["UPGRADE_NOW_PAYWALL"] = 21] = "UPGRADE_NOW_PAYWALL";
    EDialogButtonType[EDialogButtonType["CONTINUE"] = 22] = "CONTINUE";
    EDialogButtonType[EDialogButtonType["KEEP_EDITING_FORM"] = 23] = "KEEP_EDITING_FORM";
    EDialogButtonType[EDialogButtonType["CLOSE_EDITOR"] = 24] = "CLOSE_EDITOR";
    EDialogButtonType[EDialogButtonType["IMPORT"] = 25] = "IMPORT";
    EDialogButtonType[EDialogButtonType["ADD_DOMAIN"] = 26] = "ADD_DOMAIN";
    EDialogButtonType[EDialogButtonType["VALIDATE"] = 27] = "VALIDATE";
    EDialogButtonType[EDialogButtonType["FORM_MIGRATE"] = 28] = "FORM_MIGRATE";
    EDialogButtonType[EDialogButtonType["UPGRADE_TO_ENTERPRISE"] = 29] = "UPGRADE_TO_ENTERPRISE";
    EDialogButtonType[EDialogButtonType["REQUEST_A_DEMO_CORPORATE_PAYWALL"] = 30] = "REQUEST_A_DEMO_CORPORATE_PAYWALL";
    EDialogButtonType[EDialogButtonType["CONTACT_SUPPORT"] = 31] = "CONTACT_SUPPORT";
})(EDialogButtonType || (EDialogButtonType = {}));
var ENotificationStyle;
(function (ENotificationStyle) {
    ENotificationStyle[ENotificationStyle["DEFAULT"] = 0] = "DEFAULT";
    ENotificationStyle[ENotificationStyle["SUCCESS"] = 1] = "SUCCESS";
    ENotificationStyle[ENotificationStyle["ERROR"] = 2] = "ERROR";
})(ENotificationStyle || (ENotificationStyle = {}));
var EFileClass;
(function (EFileClass) {
    EFileClass[EFileClass["VIDEO"] = 0] = "VIDEO";
    EFileClass[EFileClass["AUDIO"] = 1] = "AUDIO";
    EFileClass[EFileClass["DOCUMENT"] = 2] = "DOCUMENT";
    EFileClass[EFileClass["PICTURE"] = 3] = "PICTURE";
    EFileClass[EFileClass["OTHER"] = 4] = "OTHER";
})(EFileClass || (EFileClass = {}));
var EDataGridColumnType;
(function (EDataGridColumnType) {
    EDataGridColumnType[EDataGridColumnType["STRING"] = 0] = "STRING";
    EDataGridColumnType[EDataGridColumnType["NUMBER"] = 1] = "NUMBER";
    EDataGridColumnType[EDataGridColumnType["BOOLEAN"] = 2] = "BOOLEAN";
    EDataGridColumnType[EDataGridColumnType["UNKNOWN"] = 3] = "UNKNOWN";
})(EDataGridColumnType || (EDataGridColumnType = {}));
var EHTTPCodes;
(function (EHTTPCodes) {
    EHTTPCodes[EHTTPCodes["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
})(EHTTPCodes || (EHTTPCodes = {}));
var EI18nLanguageSubset;
(function (EI18nLanguageSubset) {
    EI18nLanguageSubset[EI18nLanguageSubset["ALL"] = 0] = "ALL";
    EI18nLanguageSubset[EI18nLanguageSubset["JS_STRINGS_ONLY"] = 1] = "JS_STRINGS_ONLY";
    EI18nLanguageSubset[EI18nLanguageSubset["VIEW_FORM_SUBSET"] = 2] = "VIEW_FORM_SUBSET";
})(EI18nLanguageSubset || (EI18nLanguageSubset = {}));
var ERecentActivityIntervalKeys;
(function (ERecentActivityIntervalKeys) {
    ERecentActivityIntervalKeys["TODAY"] = "today";
    ERecentActivityIntervalKeys["YESTERDAY"] = "yesterday";
    ERecentActivityIntervalKeys["THE_DAY_BEFORE_YESTERDAY"] = "the_day_before_yesterday";
    ERecentActivityIntervalKeys["THIS_WEEK"] = "this_week";
    ERecentActivityIntervalKeys["PREVIOUS_WEEK"] = "previous_week";
    ERecentActivityIntervalKeys["TWO_WEEKS_AGO"] = "two_weeks_ago";
    ERecentActivityIntervalKeys["THIS_MONTH"] = "this_month";
    ERecentActivityIntervalKeys["PREVIOUS_MONTH"] = "previous_month";
    ERecentActivityIntervalKeys["TWO_MONTHS_AGO"] = "two_months_ago";
})(ERecentActivityIntervalKeys || (ERecentActivityIntervalKeys = {}));
var EBuilderPublishTabs;
(function (EBuilderPublishTabs) {
    EBuilderPublishTabs["PUBLISH_EMBED"] = "page_view_publish_embed";
    EBuilderPublishTabs["JAVASCRIPT"] = "javascript-publish-method";
    EBuilderPublishTabs["SHOPIFY_PLATFORM"] = "PublishPlatformsOnShopify";
    EBuilderPublishTabs["SHOPIFY_PUBLISH"] = "shopify-publish-method";
    EBuilderPublishTabs["BIG_COMMERCE_PLATFORM"] = "PublishPlatformsOnBigCommerce";
    EBuilderPublishTabs["BIG_COMMERCE_PUBLISH"] = "bigcommerce-publish-method";
    EBuilderPublishTabs["FACEBOOK_PLATFORM"] = "PublishFacebook";
    EBuilderPublishTabs["FACEBOOK_PUBLISH"] = "facebook-publish-method";
    EBuilderPublishTabs["BLOGGER"] = "blogger-publish-method";
    EBuilderPublishTabs["WORDPRESS"] = "wordpress-publish-method";
    EBuilderPublishTabs["JOOMLA"] = "joomla-publish-method";
    EBuilderPublishTabs["SALESFORCE"] = "salesforce-publish-method";
    EBuilderPublishTabs["SALESFORCE_COMMUNITY"] = "salesforce-community-publish-method";
    EBuilderPublishTabs["UNBOUNCE"] = "unbounce-publish-method";
    EBuilderPublishTabs["GOOGLE"] = "google-sites-publish-method";
    EBuilderPublishTabs["TWITTER"] = "twitter-publish-method";
})(EBuilderPublishTabs || (EBuilderPublishTabs = {}));
var ECookieSameSite;
(function (ECookieSameSite) {
    ECookieSameSite["COOKIE_SAME_SITE_STRICT"] = "Strict";
    ECookieSameSite["COOKIE_SAME_SITE_LAX"] = "Lax";
    ECookieSameSite["COOKIE_SAME_SITE_NONE"] = "None";
})(ECookieSameSite || (ECookieSameSite = {}));
var EErrorPriority;
(function (EErrorPriority) {
    EErrorPriority["DEBUG"] = "debug";
    EErrorPriority["INFO"] = "info";
    EErrorPriority["NOTICE"] = "notice";
    EErrorPriority["WARNING"] = "warning";
    EErrorPriority["ERROR"] = "error";
    EErrorPriority["CRITICAL"] = "critical";
    EErrorPriority["ALERT"] = "alert";
    EErrorPriority["EMERGENCY"] = "emergency";
})(EErrorPriority || (EErrorPriority = {}));
var PlatformMetricPrefixes;
(function (PlatformMetricPrefixes) {
    PlatformMetricPrefixes["NO_PLATFORM"] = "";
    PlatformMetricPrefixes["WEEBLY"] = "weebly_";
    PlatformMetricPrefixes["WIX"] = "wix_";
    PlatformMetricPrefixes["SHOPIFY"] = "shopify_";
    PlatformMetricPrefixes["BIG_COMMERCE"] = "bigcommerce_";
})(PlatformMetricPrefixes || (PlatformMetricPrefixes = {}));
var ETranslationType;
(function (ETranslationType) {
    ETranslationType["FORM_FIELD"] = "field";
    ETranslationType["FORM_FIELD_INSTRUCTION"] = "instruction";
    ETranslationType["EMAIL_NOTIFICATION"] = "email_notification";
    ETranslationType["SYSTEM_MESSAGE"] = "system_message";
    ETranslationType["PAYMENT_MESSAGE"] = "payment_message";
})(ETranslationType || (ETranslationType = {}));
var EPaymentsUnitTypes;
(function (EPaymentsUnitTypes) {
    EPaymentsUnitTypes[EPaymentsUnitTypes["PERCENTAGE"] = 0] = "PERCENTAGE";
    EPaymentsUnitTypes[EPaymentsUnitTypes["FIXED_VALUE"] = 1] = "FIXED_VALUE";
})(EPaymentsUnitTypes || (EPaymentsUnitTypes = {}));
var ETagValueType;
(function (ETagValueType) {
    ETagValueType["TEXT"] = "text";
    ETagValueType["TAG"] = "tag";
})(ETagValueType || (ETagValueType = {}));
var UIElementType;
(function (UIElementType) {
    UIElementType["SEARCHABLE_DROPDOWN"] = "searchable-dropdown";
    UIElementType["DROPDOWN"] = "dropdown";
    UIElementType["COLOR"] = "color";
    UIElementType["DATE"] = "date";
    UIElementType["TIME"] = "time";
    UIElementType["FILE"] = "file";
    UIElementType["STAR_RATING"] = "star-rating";
    UIElementType["TAGS"] = "tags";
    UIElementType["TAGS_LIST"] = "tags-list";
    UIElementType["SINGLE_TAGS_LIST"] = "single-tags-list";
    UIElementType["TAG"] = "tag";
})(UIElementType || (UIElementType = {}));
var EMenuPanelItemIconType;
(function (EMenuPanelItemIconType) {
    EMenuPanelItemIconType[EMenuPanelItemIconType["ICON"] = 0] = "ICON";
    EMenuPanelItemIconType[EMenuPanelItemIconType["ICONFONT"] = 1] = "ICONFONT";
})(EMenuPanelItemIconType || (EMenuPanelItemIconType = {}));
var ELightboxOverlayLinkType;
(function (ELightboxOverlayLinkType) {
    ELightboxOverlayLinkType[ELightboxOverlayLinkType["TEXT"] = 0] = "TEXT";
    ELightboxOverlayLinkType[ELightboxOverlayLinkType["IMAGE"] = 1] = "IMAGE";
    ELightboxOverlayLinkType[ELightboxOverlayLinkType["AUTO_POPUP"] = 2] = "AUTO_POPUP";
    ELightboxOverlayLinkType[ELightboxOverlayLinkType["FLOATING_BUTTON"] = 3] = "FLOATING_BUTTON";
})(ELightboxOverlayLinkType || (ELightboxOverlayLinkType = {}));
var ELinkToFormOverlayLinkType;
(function (ELinkToFormOverlayLinkType) {
    ELinkToFormOverlayLinkType[ELinkToFormOverlayLinkType["TEXT"] = 0] = "TEXT";
    ELinkToFormOverlayLinkType[ELinkToFormOverlayLinkType["IMAGE"] = 1] = "IMAGE";
})(ELinkToFormOverlayLinkType || (ELinkToFormOverlayLinkType = {}));
var EPanelTypes;
(function (EPanelTypes) {
    EPanelTypes["PUBLISH"] = "publish-form";
    EPanelTypes["NOTIFICATIONS"] = "notifications";
    EPanelTypes["EDITOR"] = "editor";
    EPanelTypes["TRANSLATIONS"] = "translations";
    EPanelTypes["ITEM"] = "item";
    EPanelTypes["PRODUCTS"] = "productsDialog";
})(EPanelTypes || (EPanelTypes = {}));
var EMenuPanelType;
(function (EMenuPanelType) {
    EMenuPanelType[EMenuPanelType["ABSTRACT_CHILD"] = 0] = "ABSTRACT_CHILD";
    EMenuPanelType[EMenuPanelType["ABSTRACT_CHILD_THAT_SUPPORTS_CHILDREN"] = 1] = "ABSTRACT_CHILD_THAT_SUPPORTS_CHILDREN";
    EMenuPanelType[EMenuPanelType["BUTTON_COMPONENT"] = 2] = "BUTTON_COMPONENT";
    EMenuPanelType[EMenuPanelType["CHECKBOX_COMPONENT"] = 3] = "CHECKBOX_COMPONENT";
    EMenuPanelType[EMenuPanelType["COMPONENT"] = 4] = "COMPONENT";
    EMenuPanelType[EMenuPanelType["CONTAINER"] = 5] = "CONTAINER";
    EMenuPanelType[EMenuPanelType["DIVIDER"] = 6] = "DIVIDER";
    EMenuPanelType[EMenuPanelType["DROPDOWN"] = 7] = "DROPDOWN";
    EMenuPanelType[EMenuPanelType["EXTENSION"] = 8] = "EXTENSION";
    EMenuPanelType[EMenuPanelType["HEADER"] = 9] = "HEADER";
    EMenuPanelType[EMenuPanelType["HEADING"] = 10] = "HEADING";
    EMenuPanelType[EMenuPanelType["ITEM"] = 11] = "ITEM";
    EMenuPanelType[EMenuPanelType["OVERLAY"] = 12] = "OVERLAY";
    EMenuPanelType[EMenuPanelType["SCROLLABLE"] = 13] = "SCROLLABLE";
})(EMenuPanelType || (EMenuPanelType = {}));
var EJQLMathOperator;
(function (EJQLMathOperator) {
    EJQLMathOperator[EJQLMathOperator["ADD"] = 0] = "ADD";
    EJQLMathOperator[EJQLMathOperator["SUBSTRACT"] = 1] = "SUBSTRACT";
    EJQLMathOperator[EJQLMathOperator["MULTIPLY"] = 2] = "MULTIPLY";
    EJQLMathOperator[EJQLMathOperator["DIVIDE"] = 3] = "DIVIDE";
})(EJQLMathOperator || (EJQLMathOperator = {}));
var ECSSUnit;
(function (ECSSUnit) {
    ECSSUnit[ECSSUnit["PX"] = 0] = "PX";
    ECSSUnit[ECSSUnit["PERCENT"] = 1] = "PERCENT";
    ECSSUnit[ECSSUnit["EM"] = 2] = "EM";
    ECSSUnit[ECSSUnit["CM"] = 3] = "CM";
    ECSSUnit[ECSSUnit["MM"] = 4] = "MM";
    ECSSUnit[ECSSUnit["IN"] = 5] = "IN";
    ECSSUnit[ECSSUnit["PT"] = 6] = "PT";
})(ECSSUnit || (ECSSUnit = {}));
var E_OS_TYPE;
(function (E_OS_TYPE) {
    E_OS_TYPE[E_OS_TYPE["ANDROID"] = 0] = "ANDROID";
    E_OS_TYPE[E_OS_TYPE["IOS"] = 1] = "IOS";
    E_OS_TYPE[E_OS_TYPE["MAC"] = 2] = "MAC";
    E_OS_TYPE[E_OS_TYPE["WINDOWS_MOBILE"] = 3] = "WINDOWS_MOBILE";
    E_OS_TYPE[E_OS_TYPE["WINDOWS"] = 4] = "WINDOWS";
    E_OS_TYPE[E_OS_TYPE["LINUX"] = 5] = "LINUX";
    E_OS_TYPE[E_OS_TYPE["UNIX"] = 6] = "UNIX";
    E_OS_TYPE[E_OS_TYPE["OTHER"] = 7] = "OTHER";
})(E_OS_TYPE || (E_OS_TYPE = {}));
var E_OS_VERSION;
(function (E_OS_VERSION) {
    E_OS_VERSION[E_OS_VERSION["WIN_95"] = 0] = "WIN_95";
    E_OS_VERSION[E_OS_VERSION["WIN_98"] = 1] = "WIN_98";
    E_OS_VERSION[E_OS_VERSION["WIN_2000"] = 2] = "WIN_2000";
    E_OS_VERSION[E_OS_VERSION["WIN_NT"] = 3] = "WIN_NT";
    E_OS_VERSION[E_OS_VERSION["WIN_ME"] = 4] = "WIN_ME";
    E_OS_VERSION[E_OS_VERSION["WIN_XP"] = 5] = "WIN_XP";
    E_OS_VERSION[E_OS_VERSION["WIN_SERVER_2003"] = 6] = "WIN_SERVER_2003";
    E_OS_VERSION[E_OS_VERSION["WIN_VISTA"] = 7] = "WIN_VISTA";
    E_OS_VERSION[E_OS_VERSION["WIN_7"] = 8] = "WIN_7";
    E_OS_VERSION[E_OS_VERSION["WIN_8"] = 9] = "WIN_8";
    E_OS_VERSION[E_OS_VERSION["WIN_10"] = 10] = "WIN_10";
    E_OS_VERSION[E_OS_VERSION["WIN_OTHER"] = 11] = "WIN_OTHER";
    E_OS_VERSION[E_OS_VERSION["UNKNOWN"] = 12] = "UNKNOWN";
})(E_OS_VERSION || (E_OS_VERSION = {}));
var E_BROWSER_TYPE;
(function (E_BROWSER_TYPE) {
    E_BROWSER_TYPE[E_BROWSER_TYPE["CHROME"] = 0] = "CHROME";
    E_BROWSER_TYPE[E_BROWSER_TYPE["FIREFOX"] = 1] = "FIREFOX";
    E_BROWSER_TYPE[E_BROWSER_TYPE["MSIE"] = 2] = "MSIE";
    E_BROWSER_TYPE[E_BROWSER_TYPE["EDGE"] = 3] = "EDGE";
    E_BROWSER_TYPE[E_BROWSER_TYPE["SAFARI"] = 4] = "SAFARI";
    E_BROWSER_TYPE[E_BROWSER_TYPE["OPERA"] = 5] = "OPERA";
    E_BROWSER_TYPE[E_BROWSER_TYPE["UNKNOWN"] = 6] = "UNKNOWN";
})(E_BROWSER_TYPE || (E_BROWSER_TYPE = {}));
var E_DEVICE_TYPE;
(function (E_DEVICE_TYPE) {
    E_DEVICE_TYPE[E_DEVICE_TYPE["DESKTOP"] = 0] = "DESKTOP";
    E_DEVICE_TYPE[E_DEVICE_TYPE["MOBILE"] = 1] = "MOBILE";
    E_DEVICE_TYPE[E_DEVICE_TYPE["SMART_TV"] = 2] = "SMART_TV";
})(E_DEVICE_TYPE || (E_DEVICE_TYPE = {}));
var E_DETECTION_ERROR;
(function (E_DETECTION_ERROR) {
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_NONE"] = 0] = "E_NONE";
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_SYNTAX_ERROR"] = 1] = "E_SYNTAX_ERROR";
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_BAD_OS"] = 2] = "E_BAD_OS";
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_MOBILE_APP"] = 3] = "E_MOBILE_APP";
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_DESKTOP_APP"] = 4] = "E_DESKTOP_APP";
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_BAD_CPU_CLASS"] = 5] = "E_BAD_CPU_CLASS";
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_BROWSER_VERSION"] = 6] = "E_BROWSER_VERSION";
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_BROWSER_TYPE"] = 7] = "E_BROWSER_TYPE";
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_API_MISSING"] = 8] = "E_API_MISSING";
    E_DETECTION_ERROR[E_DETECTION_ERROR["E_UNKNOWN_ERROR"] = 9] = "E_UNKNOWN_ERROR";
})(E_DETECTION_ERROR || (E_DETECTION_ERROR = {}));
var EElementRendererType;
(function (EElementRendererType) {
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_TOP_INSTRUCTIONS_BELOW_LABEL"] = 0] = "LABEL_PLACEMENT_TOP_INSTRUCTIONS_BELOW_LABEL";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_TOP_INSTRUCTIONS_BELOW_FIELD"] = 1] = "LABEL_PLACEMENT_TOP_INSTRUCTIONS_BELOW_FIELD";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_LEFT_INSTRUCTIONS_BELOW_LABEL"] = 2] = "LABEL_PLACEMENT_LEFT_INSTRUCTIONS_BELOW_LABEL";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_LEFT_INSTRUCTIONS_BELOW_FIELD"] = 3] = "LABEL_PLACEMENT_LEFT_INSTRUCTIONS_BELOW_FIELD";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_RIGHT_INSTRUCTIONS_BELOW_LABEL"] = 4] = "LABEL_PLACEMENT_RIGHT_INSTRUCTIONS_BELOW_LABEL";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_RIGHT_INSTRUCTIONS_BELOW_FIELD"] = 5] = "LABEL_PLACEMENT_RIGHT_INSTRUCTIONS_BELOW_FIELD";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_TOP_INSTRUCTIONS_BELOW_LABEL_COMPACT_FIELD"] = 6] = "LABEL_PLACEMENT_TOP_INSTRUCTIONS_BELOW_LABEL_COMPACT_FIELD";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_TOP_INSTRUCTIONS_BELOW_FIELD_COMPACT_FIELD"] = 7] = "LABEL_PLACEMENT_TOP_INSTRUCTIONS_BELOW_FIELD_COMPACT_FIELD";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_LEFT_INSTRUCTIONS_BELOW_LABEL_COMPACT_FIELD"] = 8] = "LABEL_PLACEMENT_LEFT_INSTRUCTIONS_BELOW_LABEL_COMPACT_FIELD";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_LEFT_INSTRUCTIONS_BELOW_FIELD_COMPACT_FIELD"] = 9] = "LABEL_PLACEMENT_LEFT_INSTRUCTIONS_BELOW_FIELD_COMPACT_FIELD";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_RIGHT_INSTRUCTIONS_BELOW_LABEL_COMPACT_FIELD"] = 10] = "LABEL_PLACEMENT_RIGHT_INSTRUCTIONS_BELOW_LABEL_COMPACT_FIELD";
    EElementRendererType[EElementRendererType["LABEL_PLACEMENT_RIGHT_INSTRUCTIONS_BELOW_FIELD_COMPACT_FIELD"] = 11] = "LABEL_PLACEMENT_RIGHT_INSTRUCTIONS_BELOW_FIELD_COMPACT_FIELD";
    EElementRendererType[EElementRendererType["CUSTOM_CONTROL_RENDERER"] = 12] = "CUSTOM_CONTROL_RENDERER";
})(EElementRendererType || (EElementRendererType = {}));
var EElementEdge;
(function (EElementEdge) {
    EElementEdge[EElementEdge["TOP"] = 0] = "TOP";
    EElementEdge[EElementEdge["RIGHT"] = 1] = "RIGHT";
    EElementEdge[EElementEdge["BOTTOM"] = 2] = "BOTTOM";
    EElementEdge[EElementEdge["LEFT"] = 3] = "LEFT";
})(EElementEdge || (EElementEdge = {}));
var EResizingCapability;
(function (EResizingCapability) {
    EResizingCapability[EResizingCapability["NONE"] = 0] = "NONE";
    EResizingCapability[EResizingCapability["TOP_AND_BOTTOM"] = 1] = "TOP_AND_BOTTOM";
    EResizingCapability[EResizingCapability["LEFT_AND_RIGHT"] = 2] = "LEFT_AND_RIGHT";
    EResizingCapability[EResizingCapability["TOP_ONLY"] = 3] = "TOP_ONLY";
    EResizingCapability[EResizingCapability["LEFT_ONLY"] = 4] = "LEFT_ONLY";
    EResizingCapability[EResizingCapability["RIGHT_ONLY"] = 5] = "RIGHT_ONLY";
    EResizingCapability[EResizingCapability["BOTTOM_ONLY"] = 6] = "BOTTOM_ONLY";
    EResizingCapability[EResizingCapability["ALL"] = 7] = "ALL";
})(EResizingCapability || (EResizingCapability = {}));
var EInputWidth;
(function (EInputWidth) {
    EInputWidth[EInputWidth["FULL"] = 0] = "FULL";
    EInputWidth[EInputWidth["THIRD"] = 1] = "THIRD";
    EInputWidth[EInputWidth["HALF"] = 2] = "HALF";
    EInputWidth[EInputWidth["QUARTER"] = 3] = "QUARTER";
    EInputWidth[EInputWidth["FILL"] = 4] = "FILL";
    EInputWidth[EInputWidth["ONE_UNIT"] = 5] = "ONE_UNIT";
    EInputWidth[EInputWidth["TWO_UNITS"] = 6] = "TWO_UNITS";
    EInputWidth[EInputWidth["THREE_UNITS"] = 7] = "THREE_UNITS";
    EInputWidth[EInputWidth["FOUR_UNITS"] = 8] = "FOUR_UNITS";
})(EInputWidth || (EInputWidth = {}));
var ELayoutDirection;
(function (ELayoutDirection) {
    ELayoutDirection[ELayoutDirection["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
    ELayoutDirection[ELayoutDirection["TOP_TO_BOTTOM"] = 1] = "TOP_TO_BOTTOM";
})(ELayoutDirection || (ELayoutDirection = {}));
var ELoaderDependency;
(function (ELoaderDependency) {
    ELoaderDependency[ELoaderDependency["EDITOR_PLATFORM_DETAILS"] = 0] = "EDITOR_PLATFORM_DETAILS";
    ELoaderDependency[ELoaderDependency["PAYMENT_PROCESSORS_LIST"] = 1] = "PAYMENT_PROCESSORS_LIST";
    ELoaderDependency[ELoaderDependency["SELECTED_PAYMENT_PROCESSOR_TYPE_ID"] = 2] = "SELECTED_PAYMENT_PROCESSOR_TYPE_ID";
    ELoaderDependency[ELoaderDependency["SELECTED_PAYMENT_PROCESSOR_EXTRA_DATA"] = 3] = "SELECTED_PAYMENT_PROCESSOR_EXTRA_DATA";
    ELoaderDependency[ELoaderDependency["INITIAL_QUIZ_TIMER"] = 4] = "INITIAL_QUIZ_TIMER";
    ELoaderDependency[ELoaderDependency["CURRENT_QUIZ_TIMER"] = 5] = "CURRENT_QUIZ_TIMER";
    ELoaderDependency[ELoaderDependency["SESSION_ID"] = 6] = "SESSION_ID";
    ELoaderDependency[ELoaderDependency["I18N"] = 7] = "I18N";
    ELoaderDependency[ELoaderDependency["USER_INTERFACE"] = 8] = "USER_INTERFACE";
    ELoaderDependency[ELoaderDependency["SKIP_CAPTCHA"] = 9] = "SKIP_CAPTCHA";
    ELoaderDependency[ELoaderDependency["TRANSLATIONS_LANGUAGE_CODES"] = 10] = "TRANSLATIONS_LANGUAGE_CODES";
    ELoaderDependency[ELoaderDependency["CURRENT_EDITABLE_ELEMENT"] = 11] = "CURRENT_EDITABLE_ELEMENT";
    ELoaderDependency[ELoaderDependency["DEFAULT_USER_PREFERENCES"] = 12] = "DEFAULT_USER_PREFERENCES";
    ELoaderDependency[ELoaderDependency["VIEW_FORM_CONTEXT"] = 13] = "VIEW_FORM_CONTEXT";
    ELoaderDependency[ELoaderDependency["SUBMISSION_XML_DATETIME_START"] = 14] = "SUBMISSION_XML_DATETIME_START";
    ELoaderDependency[ELoaderDependency["PAYMENTS_COUPON_CODE_CONFIGURATION"] = 15] = "PAYMENTS_COUPON_CODE_CONFIGURATION";
    ELoaderDependency[ELoaderDependency["SUBMISSION_ID"] = 16] = "SUBMISSION_ID";
    ELoaderDependency[ELoaderDependency["FORM_SETTINGS"] = 17] = "FORM_SETTINGS";
    ELoaderDependency[ELoaderDependency["SHOW_REALTIME_CALCULATIONS"] = 18] = "SHOW_REALTIME_CALCULATIONS";
    ELoaderDependency[ELoaderDependency["DETAILED_INVOICE_OPTIONS"] = 19] = "DETAILED_INVOICE_OPTIONS";
    ELoaderDependency[ELoaderDependency["LAST_CALCULATION_HTML_MARKUP"] = 20] = "LAST_CALCULATION_HTML_MARKUP";
    ELoaderDependency[ELoaderDependency["SHOW_DOWNGRADE_NOTIFICATION"] = 21] = "SHOW_DOWNGRADE_NOTIFICATION";
    ELoaderDependency[ELoaderDependency["UNDO_SERVICE"] = 22] = "UNDO_SERVICE";
    ELoaderDependency[ELoaderDependency["FONTS_MANAGER"] = 23] = "FONTS_MANAGER";
    ELoaderDependency[ELoaderDependency["GEOLOCATION_USER_COUNTRY_CODE"] = 24] = "GEOLOCATION_USER_COUNTRY_CODE";
    ELoaderDependency[ELoaderDependency["WIX_AUTHORIZED_REQUEST_DETAILS"] = 25] = "WIX_AUTHORIZED_REQUEST_DETAILS";
    ELoaderDependency[ELoaderDependency["THEME_STRATEGY"] = 26] = "THEME_STRATEGY";
    ELoaderDependency[ELoaderDependency["EXTERNAL_THEME_INITIAL_PROPERTIES"] = 27] = "EXTERNAL_THEME_INITIAL_PROPERTIES";
    ELoaderDependency[ELoaderDependency["EDITOR_SETTINGS_PANEL"] = 28] = "EDITOR_SETTINGS_PANEL";
    ELoaderDependency[ELoaderDependency["IS_HIPAA_FORM"] = 29] = "IS_HIPAA_FORM";
    ELoaderDependency[ELoaderDependency["DIFFERENCE_BETWEEN_CLIENT_AND_SERVER_TIME"] = 30] = "DIFFERENCE_BETWEEN_CLIENT_AND_SERVER_TIME";
    ELoaderDependency[ELoaderDependency["RULES_QUERY_BUILDER"] = 31] = "RULES_QUERY_BUILDER";
    ELoaderDependency[ELoaderDependency["VIEW_FORM_CONTEXT_OPTIONS"] = 32] = "VIEW_FORM_CONTEXT_OPTIONS";
    ELoaderDependency[ELoaderDependency["EDITOR_HEADER"] = 33] = "EDITOR_HEADER";
    ELoaderDependency[ELoaderDependency["IS_WORKFLOWS_VIEW_FORM_EMBED"] = 34] = "IS_WORKFLOWS_VIEW_FORM_EMBED";
    ELoaderDependency[ELoaderDependency["WORKFLOWS_USERS_LIST"] = 35] = "WORKFLOWS_USERS_LIST";
    ELoaderDependency[ELoaderDependency["POPUP_NOTIFICATIONS"] = 36] = "POPUP_NOTIFICATIONS";
    ELoaderDependency[ELoaderDependency["USER_FEATURES"] = 37] = "USER_FEATURES";
    ELoaderDependency[ELoaderDependency["DISABLED_MOBILE_INTERACTION"] = 38] = "DISABLED_MOBILE_INTERACTION";
    ELoaderDependency[ELoaderDependency["USER_PLAN_NAME"] = 39] = "USER_PLAN_NAME";
    ELoaderDependency[ELoaderDependency["DEFAULT_NOTIFICATIONS_PREFERENCES"] = 40] = "DEFAULT_NOTIFICATIONS_PREFERENCES";
    ELoaderDependency[ELoaderDependency["USER_DETAILS"] = 41] = "USER_DETAILS";
    ELoaderDependency[ELoaderDependency["SHOULD_SHOW_PAYMENT_SUMMARY"] = 42] = "SHOULD_SHOW_PAYMENT_SUMMARY";
    ELoaderDependency[ELoaderDependency["HAS_ENABLED_PAYMENT_PROCESSORS"] = 43] = "HAS_ENABLED_PAYMENT_PROCESSORS";
    ELoaderDependency[ELoaderDependency["HAS_CALCULATE_BUTTON"] = 44] = "HAS_CALCULATE_BUTTON";
})(ELoaderDependency || (ELoaderDependency = {}));
var EFormLoaderType;
(function (EFormLoaderType) {
    EFormLoaderType[EFormLoaderType["VIEW"] = 0] = "VIEW";
    EFormLoaderType[EFormLoaderType["EDIT"] = 1] = "EDIT";
})(EFormLoaderType || (EFormLoaderType = {}));
var EFormLabelPlacement;
(function (EFormLabelPlacement) {
    EFormLabelPlacement[EFormLabelPlacement["LEFT_ALIGNED"] = 0] = "LEFT_ALIGNED";
    EFormLabelPlacement[EFormLabelPlacement["TOP_ALIGNED"] = 1] = "TOP_ALIGNED";
    EFormLabelPlacement[EFormLabelPlacement["RIGHT_ALIGNED"] = 2] = "RIGHT_ALIGNED";
})(EFormLabelPlacement || (EFormLabelPlacement = {}));
var ETextAlignment;
(function (ETextAlignment) {
    ETextAlignment[ETextAlignment["LEFT"] = 0] = "LEFT";
    ETextAlignment[ETextAlignment["RIGHT"] = 1] = "RIGHT";
    ETextAlignment[ETextAlignment["CENTER"] = 2] = "CENTER";
    ETextAlignment[ETextAlignment["JUSTIFY"] = 3] = "JUSTIFY";
})(ETextAlignment || (ETextAlignment = {}));
var EFormInstructionsPlacement;
(function (EFormInstructionsPlacement) {
    EFormInstructionsPlacement[EFormInstructionsPlacement["BELOW_LABEL"] = 0] = "BELOW_LABEL";
    EFormInstructionsPlacement[EFormInstructionsPlacement["BELOW_FIELD"] = 1] = "BELOW_FIELD";
})(EFormInstructionsPlacement || (EFormInstructionsPlacement = {}));
var EFormTextDirection;
(function (EFormTextDirection) {
    EFormTextDirection[EFormTextDirection["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
    EFormTextDirection[EFormTextDirection["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
})(EFormTextDirection || (EFormTextDirection = {}));
var EElementKind;
(function (EElementKind) {
    EElementKind[EElementKind["CONTROL"] = 0] = "CONTROL";
    EElementKind[EElementKind["CONTAINER"] = 1] = "CONTAINER";
})(EElementKind || (EElementKind = {}));
var EEditorMouseOperationType;
(function (EEditorMouseOperationType) {
    EEditorMouseOperationType[EEditorMouseOperationType["NONE"] = 0] = "NONE";
    EEditorMouseOperationType[EEditorMouseOperationType["ELEMENT_RESIZE"] = 1] = "ELEMENT_RESIZE";
    EEditorMouseOperationType[EEditorMouseOperationType["LABEL_RESIZE"] = 2] = "LABEL_RESIZE";
    EEditorMouseOperationType[EEditorMouseOperationType["DRAG"] = 3] = "DRAG";
    EEditorMouseOperationType[EEditorMouseOperationType["SELECT"] = 4] = "SELECT";
})(EEditorMouseOperationType || (EEditorMouseOperationType = {}));
var EMouseEventType;
(function (EMouseEventType) {
    EMouseEventType[EMouseEventType["MOUSE_MOVE"] = 0] = "MOUSE_MOVE";
    EMouseEventType[EMouseEventType["MOUSE_DOWN"] = 1] = "MOUSE_DOWN";
    EMouseEventType[EMouseEventType["MOUSE_UP"] = 2] = "MOUSE_UP";
})(EMouseEventType || (EMouseEventType = {}));
var EMouseButton;
(function (EMouseButton) {
    EMouseButton[EMouseButton["NONE"] = 0] = "NONE";
    EMouseButton[EMouseButton["LEFT"] = 1] = "LEFT";
    EMouseButton[EMouseButton["RIGHT"] = 2] = "RIGHT";
    EMouseButton[EMouseButton["BOTH"] = 3] = "BOTH";
})(EMouseButton || (EMouseButton = {}));
var EDragAndDropSource;
(function (EDragAndDropSource) {
    EDragAndDropSource[EDragAndDropSource["STARTED_FROM_EDITOR_PANEL"] = 0] = "STARTED_FROM_EDITOR_PANEL";
    EDragAndDropSource[EDragAndDropSource["STARTED_FROM_FORM"] = 1] = "STARTED_FROM_FORM";
})(EDragAndDropSource || (EDragAndDropSource = {}));
var EFormSubmitAction;
(function (EFormSubmitAction) {
    EFormSubmitAction[EFormSubmitAction["SUBMIT"] = 0] = "SUBMIT";
    EFormSubmitAction[EFormSubmitAction["UPDATE"] = 1] = "UPDATE";
    EFormSubmitAction[EFormSubmitAction["SWITCH_PAGE"] = 2] = "SWITCH_PAGE";
    EFormSubmitAction[EFormSubmitAction["SAVE_FOR_LATER"] = 3] = "SAVE_FOR_LATER";
    EFormSubmitAction[EFormSubmitAction["SUBMIT_QUIZ"] = 4] = "SUBMIT_QUIZ";
    EFormSubmitAction[EFormSubmitAction["APPROVE"] = 5] = "APPROVE";
    EFormSubmitAction[EFormSubmitAction["REJECT"] = 6] = "REJECT";
    EFormSubmitAction[EFormSubmitAction["CALCULATE_QUIZ_SCORE"] = 7] = "CALCULATE_QUIZ_SCORE";
})(EFormSubmitAction || (EFormSubmitAction = {}));
var EInvoiceItemType;
(function (EInvoiceItemType) {
    EInvoiceItemType[EInvoiceItemType["UNKNOWN"] = 0] = "UNKNOWN";
    EInvoiceItemType[EInvoiceItemType["FIXED_AMOUNT"] = 1] = "FIXED_AMOUNT";
    EInvoiceItemType[EInvoiceItemType["PRODUCT"] = 2] = "PRODUCT";
    EInvoiceItemType[EInvoiceItemType["PRODUCT_DISCOUNT"] = 3] = "PRODUCT_DISCOUNT";
    EInvoiceItemType[EInvoiceItemType["PRODUCT_TAX"] = 4] = "PRODUCT_TAX";
    EInvoiceItemType[EInvoiceItemType["INVOICE_COUPON"] = 5] = "INVOICE_COUPON";
    EInvoiceItemType[EInvoiceItemType["INVOICE_DISCOUNT"] = 6] = "INVOICE_DISCOUNT";
    EInvoiceItemType[EInvoiceItemType["INVOICE_TAX"] = 7] = "INVOICE_TAX";
    EInvoiceItemType[EInvoiceItemType["SUBTOTAL"] = 8] = "SUBTOTAL";
    EInvoiceItemType[EInvoiceItemType["INVOICE_FEE"] = 9] = "INVOICE_FEE";
    EInvoiceItemType[EInvoiceItemType["PRODUCT_FORMULA"] = 10] = "PRODUCT_FORMULA";
})(EInvoiceItemType || (EInvoiceItemType = {}));
var EInvoiceValueType;
(function (EInvoiceValueType) {
    EInvoiceValueType[EInvoiceValueType["PERCENT"] = 0] = "PERCENT";
    EInvoiceValueType[EInvoiceValueType["FIXED"] = 1] = "FIXED";
})(EInvoiceValueType || (EInvoiceValueType = {}));
var EFormResponseAction;
(function (EFormResponseAction) {
    EFormResponseAction[EFormResponseAction["SHOW_TEXT"] = 0] = "SHOW_TEXT";
    EFormResponseAction[EFormResponseAction["REDIRECT"] = 1] = "REDIRECT";
    EFormResponseAction[EFormResponseAction["TEXT_AND_REDIRECT"] = 2] = "TEXT_AND_REDIRECT";
    EFormResponseAction[EFormResponseAction["SHOW_REPORT"] = 3] = "SHOW_REPORT";
    EFormResponseAction[EFormResponseAction["SHOW_QUIZ_RESULTS"] = 4] = "SHOW_QUIZ_RESULTS";
    EFormResponseAction[EFormResponseAction["SHOW_HTML"] = 5] = "SHOW_HTML";
    EFormResponseAction[EFormResponseAction["VALIDATION_SUCCESSFUL"] = 6] = "VALIDATION_SUCCESSFUL";
})(EFormResponseAction || (EFormResponseAction = {}));
var EColorPickerTargetControl;
(function (EColorPickerTargetControl) {
    EColorPickerTargetControl[EColorPickerTargetControl["NONE"] = 0] = "NONE";
    EColorPickerTargetControl[EColorPickerTargetControl["HUE"] = 1] = "HUE";
    EColorPickerTargetControl[EColorPickerTargetControl["SATURATION"] = 2] = "SATURATION";
    EColorPickerTargetControl[EColorPickerTargetControl["LIGHT"] = 3] = "LIGHT";
    EColorPickerTargetControl[EColorPickerTargetControl["ALPHA"] = 4] = "ALPHA";
})(EColorPickerTargetControl || (EColorPickerTargetControl = {}));
var EColorModel;
(function (EColorModel) {
    EColorModel[EColorModel["RGBA"] = 0] = "RGBA";
    EColorModel[EColorModel["HSLA"] = 1] = "HSLA";
})(EColorModel || (EColorModel = {}));
var EViewFormContext;
(function (EViewFormContext) {
    EViewFormContext[EViewFormContext["VIEW_FORM"] = 0] = "VIEW_FORM";
    EViewFormContext[EViewFormContext["EDIT_FORM"] = 1] = "EDIT_FORM";
    EViewFormContext[EViewFormContext["EDIT_SUBMISSION"] = 2] = "EDIT_SUBMISSION";
    EViewFormContext[EViewFormContext["APPROVAL"] = 3] = "APPROVAL";
    EViewFormContext[EViewFormContext["QUIZ"] = 4] = "QUIZ";
    EViewFormContext[EViewFormContext["SAVE_FOR_LATER"] = 5] = "SAVE_FOR_LATER";
    EViewFormContext[EViewFormContext["PDF_EXPORT"] = 6] = "PDF_EXPORT";
    EViewFormContext[EViewFormContext["EDIT_LATER"] = 7] = "EDIT_LATER";
    EViewFormContext[EViewFormContext["VIEW_FORM_OFFLINE"] = 8] = "VIEW_FORM_OFFLINE";
})(EViewFormContext || (EViewFormContext = {}));
var EViewFormEnvironmentContext;
(function (EViewFormEnvironmentContext) {
    EViewFormEnvironmentContext[EViewFormEnvironmentContext["DEFAULT"] = 0] = "DEFAULT";
    EViewFormEnvironmentContext[EViewFormEnvironmentContext["MOBILE_APP"] = 1] = "MOBILE_APP";
    EViewFormEnvironmentContext[EViewFormEnvironmentContext["MOBILE_APP_OFFLINE"] = 2] = "MOBILE_APP_OFFLINE";
})(EViewFormEnvironmentContext || (EViewFormEnvironmentContext = {}));
var ERuleActionType;
(function (ERuleActionType) {
    ERuleActionType[ERuleActionType["SHOW_CONTROL"] = 0] = "SHOW_CONTROL";
    ERuleActionType[ERuleActionType["HIDE_CONTROL"] = 1] = "HIDE_CONTROL";
    ERuleActionType[ERuleActionType["CALCULATE"] = 2] = "CALCULATE";
})(ERuleActionType || (ERuleActionType = {}));
var EPaymentProcessorDisplayType;
(function (EPaymentProcessorDisplayType) {
    EPaymentProcessorDisplayType[EPaymentProcessorDisplayType["DISPLAY_ONLY_AS_RADIO"] = 0] = "DISPLAY_ONLY_AS_RADIO";
    EPaymentProcessorDisplayType[EPaymentProcessorDisplayType["DISPLAY_BOTH_AS_RADIO_AND_AS_DROPDOWN"] = 1] = "DISPLAY_BOTH_AS_RADIO_AND_AS_DROPDOWN";
    EPaymentProcessorDisplayType[EPaymentProcessorDisplayType["DISPLAY_ONLY_AS_DROPDOWN"] = 2] = "DISPLAY_ONLY_AS_DROPDOWN";
})(EPaymentProcessorDisplayType || (EPaymentProcessorDisplayType = {}));
var EDatePartRole;
(function (EDatePartRole) {
    EDatePartRole[EDatePartRole["DAY"] = 0] = "DAY";
    EDatePartRole[EDatePartRole["MONTH"] = 1] = "MONTH";
    EDatePartRole[EDatePartRole["YEAR"] = 2] = "YEAR";
    EDatePartRole[EDatePartRole["HOUR_24"] = 3] = "HOUR_24";
    EDatePartRole[EDatePartRole["HOUR_12"] = 4] = "HOUR_12";
    EDatePartRole[EDatePartRole["MINUTE"] = 5] = "MINUTE";
    EDatePartRole[EDatePartRole["SECOND"] = 6] = "SECOND";
    EDatePartRole[EDatePartRole["MILLISECOND"] = 7] = "MILLISECOND";
    EDatePartRole[EDatePartRole["AM_PM"] = 8] = "AM_PM";
})(EDatePartRole || (EDatePartRole = {}));
var EDatePickerSelectionPhase;
(function (EDatePickerSelectionPhase) {
    EDatePickerSelectionPhase[EDatePickerSelectionPhase["DAY"] = 0] = "DAY";
    EDatePickerSelectionPhase[EDatePickerSelectionPhase["MONTH"] = 1] = "MONTH";
    EDatePickerSelectionPhase[EDatePickerSelectionPhase["YEAR"] = 2] = "YEAR";
    EDatePickerSelectionPhase[EDatePickerSelectionPhase["TIME"] = 3] = "TIME";
})(EDatePickerSelectionPhase || (EDatePickerSelectionPhase = {}));
var EDateWeekStart;
(function (EDateWeekStart) {
    EDateWeekStart[EDateWeekStart["SUNDAY"] = 0] = "SUNDAY";
    EDateWeekStart[EDateWeekStart["MONDAY"] = 1] = "MONDAY";
})(EDateWeekStart || (EDateWeekStart = {}));
var EUploadState;
(function (EUploadState) {
    EUploadState[EUploadState["NOT_STARTED"] = 0] = "NOT_STARTED";
    EUploadState[EUploadState["PROGRESS"] = 1] = "PROGRESS";
    EUploadState[EUploadState["SUCCESS"] = 2] = "SUCCESS";
    EUploadState[EUploadState["REMOVED"] = 3] = "REMOVED";
    EUploadState[EUploadState["ERROR"] = 4] = "ERROR";
})(EUploadState || (EUploadState = {}));
var ECaptchaType;
(function (ECaptchaType) {
    ECaptchaType[ECaptchaType["ALWAYS"] = 0] = "ALWAYS";
    ECaptchaType[ECaptchaType["RESERVED"] = 1] = "RESERVED";
    ECaptchaType[ECaptchaType["NONE"] = 2] = "NONE";
    ECaptchaType[ECaptchaType["DAILY"] = 3] = "DAILY";
    ECaptchaType[ECaptchaType["SMART"] = 4] = "SMART";
    ECaptchaType[ECaptchaType["RECAPTCHA"] = 5] = "RECAPTCHA";
})(ECaptchaType || (ECaptchaType = {}));
var EStarRatingDisplayMode;
(function (EStarRatingDisplayMode) {
    EStarRatingDisplayMode[EStarRatingDisplayMode["STARS"] = 0] = "STARS";
    EStarRatingDisplayMode[EStarRatingDisplayMode["ADULTS"] = 1] = "ADULTS";
    EStarRatingDisplayMode[EStarRatingDisplayMode["CHILDREN"] = 2] = "CHILDREN";
})(EStarRatingDisplayMode || (EStarRatingDisplayMode = {}));
var EElementVisibilityMode;
(function (EElementVisibilityMode) {
    EElementVisibilityMode[EElementVisibilityMode["SHOWN"] = 0] = "SHOWN";
    EElementVisibilityMode[EElementVisibilityMode["HIDDEN"] = 1] = "HIDDEN";
    EElementVisibilityMode[EElementVisibilityMode["REMOVED"] = 2] = "REMOVED";
    EElementVisibilityMode[EElementVisibilityMode["COMPACT"] = 3] = "COMPACT";
    EElementVisibilityMode[EElementVisibilityMode["OTHER"] = 4] = "OTHER";
})(EElementVisibilityMode || (EElementVisibilityMode = {}));
var EEditorUserAccessMode;
(function (EEditorUserAccessMode) {
    EEditorUserAccessMode[EEditorUserAccessMode["NO_ACCESS"] = 0] = "NO_ACCESS";
    EEditorUserAccessMode[EEditorUserAccessMode["VIEW_ONLY"] = 1] = "VIEW_ONLY";
    EEditorUserAccessMode[EEditorUserAccessMode["FULL_EDIT"] = 2] = "FULL_EDIT";
})(EEditorUserAccessMode || (EEditorUserAccessMode = {}));
var EFormPaginationType;
(function (EFormPaginationType) {
    EFormPaginationType[EFormPaginationType["NONE"] = 0] = "NONE";
    EFormPaginationType[EFormPaginationType["STEPS"] = 1] = "STEPS";
    EFormPaginationType[EFormPaginationType["PERCENTAGE"] = 2] = "PERCENTAGE";
    EFormPaginationType[EFormPaginationType["PAGE_NUMBERS"] = 3] = "PAGE_NUMBERS";
})(EFormPaginationType || (EFormPaginationType = {}));
var EPadType;
(function (EPadType) {
    EPadType[EPadType["LEFT"] = 0] = "LEFT";
    EPadType[EPadType["RIGHT"] = 1] = "RIGHT";
})(EPadType || (EPadType = {}));
var EFormWidthType;
(function (EFormWidthType) {
    EFormWidthType[EFormWidthType["PIXELS"] = 0] = "PIXELS";
    EFormWidthType[EFormWidthType["PERCENTS"] = 1] = "PERCENTS";
})(EFormWidthType || (EFormWidthType = {}));
var EAddressFieldType;
(function (EAddressFieldType) {
    EAddressFieldType[EAddressFieldType["ADDRESS_1"] = 0] = "ADDRESS_1";
    EAddressFieldType[EAddressFieldType["ADDRESS_2"] = 1] = "ADDRESS_2";
    EAddressFieldType[EAddressFieldType["CITY"] = 2] = "CITY";
    EAddressFieldType[EAddressFieldType["ZONE"] = 3] = "ZONE";
    EAddressFieldType[EAddressFieldType["ZIP_CODE"] = 4] = "ZIP_CODE";
    EAddressFieldType[EAddressFieldType["COUNTRY"] = 5] = "COUNTRY";
    EAddressFieldType[EAddressFieldType["ALL"] = 6] = "ALL";
})(EAddressFieldType || (EAddressFieldType = {}));
var ESocialPlatform;
(function (ESocialPlatform) {
    ESocialPlatform[ESocialPlatform["GOOGLE_PLUS"] = 0] = "GOOGLE_PLUS";
    ESocialPlatform[ESocialPlatform["LINKEDIN"] = 1] = "LINKEDIN";
    ESocialPlatform[ESocialPlatform["TWITTER"] = 2] = "TWITTER";
    ESocialPlatform[ESocialPlatform["FACEBOOK_LIKE"] = 3] = "FACEBOOK_LIKE";
    ESocialPlatform[ESocialPlatform["FACEBOOK_SHARE"] = 4] = "FACEBOOK_SHARE";
})(ESocialPlatform || (ESocialPlatform = {}));
var EChoiceDefaultOptionInputType;
(function (EChoiceDefaultOptionInputType) {
    EChoiceDefaultOptionInputType[EChoiceDefaultOptionInputType["CHECKBOX"] = 0] = "CHECKBOX";
    EChoiceDefaultOptionInputType[EChoiceDefaultOptionInputType["RADIO"] = 1] = "RADIO";
    EChoiceDefaultOptionInputType[EChoiceDefaultOptionInputType["DROPDOWN"] = 2] = "DROPDOWN";
    EChoiceDefaultOptionInputType[EChoiceDefaultOptionInputType["SCALE"] = 3] = "SCALE";
})(EChoiceDefaultOptionInputType || (EChoiceDefaultOptionInputType = {}));
var EGroupedAnswersSeparator;
(function (EGroupedAnswersSeparator) {
    EGroupedAnswersSeparator[EGroupedAnswersSeparator["NEW_LINE"] = 0] = "NEW_LINE";
    EGroupedAnswersSeparator[EGroupedAnswersSeparator["SEMICOLON"] = 1] = "SEMICOLON";
    EGroupedAnswersSeparator[EGroupedAnswersSeparator["COMMA"] = 2] = "COMMA";
    EGroupedAnswersSeparator[EGroupedAnswersSeparator["TAB"] = 3] = "TAB";
})(EGroupedAnswersSeparator || (EGroupedAnswersSeparator = {}));
var EFormPropertyOrderPlacement;
(function (EFormPropertyOrderPlacement) {
    EFormPropertyOrderPlacement[EFormPropertyOrderPlacement["BEFORE"] = 0] = "BEFORE";
    EFormPropertyOrderPlacement[EFormPropertyOrderPlacement["AFTER"] = 1] = "AFTER";
})(EFormPropertyOrderPlacement || (EFormPropertyOrderPlacement = {}));
var ENameControlOptionalFields;
(function (ENameControlOptionalFields) {
    ENameControlOptionalFields[ENameControlOptionalFields["INITIALS"] = 0] = "INITIALS";
    ENameControlOptionalFields[ENameControlOptionalFields["MIDDLE_NAME"] = 1] = "MIDDLE_NAME";
    ENameControlOptionalFields[ENameControlOptionalFields["TITLE"] = 2] = "TITLE";
})(ENameControlOptionalFields || (ENameControlOptionalFields = {}));
var EActionBarConfigurableButtons;
(function (EActionBarConfigurableButtons) {
    EActionBarConfigurableButtons[EActionBarConfigurableButtons["APPROVE"] = 0] = "APPROVE";
    EActionBarConfigurableButtons[EActionBarConfigurableButtons["CALCULATE"] = 1] = "CALCULATE";
    EActionBarConfigurableButtons[EActionBarConfigurableButtons["PREVIEW"] = 2] = "PREVIEW";
    EActionBarConfigurableButtons[EActionBarConfigurableButtons["PRINT"] = 3] = "PRINT";
    EActionBarConfigurableButtons[EActionBarConfigurableButtons["RESET"] = 4] = "RESET";
    EActionBarConfigurableButtons[EActionBarConfigurableButtons["SAVE_FOR_LATER"] = 5] = "SAVE_FOR_LATER";
    EActionBarConfigurableButtons[EActionBarConfigurableButtons["PURCHASE"] = 6] = "PURCHASE";
})(EActionBarConfigurableButtons || (EActionBarConfigurableButtons = {}));
var EActionBarButton;
(function (EActionBarButton) {
    EActionBarButton[EActionBarButton["APPROVE"] = 0] = "APPROVE";
    EActionBarButton[EActionBarButton["CALCULATE"] = 1] = "CALCULATE";
    EActionBarButton[EActionBarButton["PREVIEW"] = 2] = "PREVIEW";
    EActionBarButton[EActionBarButton["PRINT"] = 3] = "PRINT";
    EActionBarButton[EActionBarButton["RESET"] = 4] = "RESET";
    EActionBarButton[EActionBarButton["SAVE_FOR_LATER"] = 5] = "SAVE_FOR_LATER";
    EActionBarButton[EActionBarButton["SHOW_SUMMARY"] = 6] = "SHOW_SUMMARY";
    EActionBarButton[EActionBarButton["SUBMIT"] = 7] = "SUBMIT";
    EActionBarButton[EActionBarButton["NEXT_PAGE"] = 8] = "NEXT_PAGE";
    EActionBarButton[EActionBarButton["PREVIOUS_PAGE"] = 9] = "PREVIOUS_PAGE";
})(EActionBarButton || (EActionBarButton = {}));
var EInputErrorState;
(function (EInputErrorState) {
    EInputErrorState[EInputErrorState["UNFILLED"] = 0] = "UNFILLED";
    EInputErrorState[EInputErrorState["ERROR"] = 1] = "ERROR";
    EInputErrorState[EInputErrorState["FILLED"] = 2] = "FILLED";
})(EInputErrorState || (EInputErrorState = {}));
var ETimeAntiPostMeridian;
(function (ETimeAntiPostMeridian) {
    ETimeAntiPostMeridian[ETimeAntiPostMeridian["AM"] = 0] = "AM";
    ETimeAntiPostMeridian[ETimeAntiPostMeridian["PM"] = 1] = "PM";
})(ETimeAntiPostMeridian || (ETimeAntiPostMeridian = {}));
var EFileTransferType;
(function (EFileTransferType) {
    EFileTransferType[EFileTransferType["UPLOAD"] = 0] = "UPLOAD";
    EFileTransferType[EFileTransferType["DOWNLOAD"] = 1] = "DOWNLOAD";
})(EFileTransferType || (EFileTransferType = {}));
var EURLType;
(function (EURLType) {
    EURLType[EURLType["YOUTUBE_VIDEO"] = 0] = "YOUTUBE_VIDEO";
    EURLType[EURLType["VIMEO_VIDEO"] = 1] = "VIMEO_VIDEO";
    EURLType[EURLType["TED_TALKS_VIDEO"] = 2] = "TED_TALKS_VIDEO";
    EURLType[EURLType["NFB_VIDEO"] = 3] = "NFB_VIDEO";
    EURLType[EURLType["KICKSTARTER_VIDEO"] = 4] = "KICKSTARTER_VIDEO";
    EURLType[EURLType["DAILYMOTION_VIDEO"] = 5] = "DAILYMOTION_VIDEO";
    EURLType[EURLType["WORDPRESS_TV_VIDEO"] = 6] = "WORDPRESS_TV_VIDEO";
    EURLType[EURLType["TWITCH_VIDEO"] = 7] = "TWITCH_VIDEO";
    EURLType[EURLType["SOUNDCLOUD_AUDIO"] = 8] = "SOUNDCLOUD_AUDIO";
    EURLType[EURLType["MIXCLOUD_AUDIO"] = 9] = "MIXCLOUD_AUDIO";
    EURLType[EURLType["FACEBOOK_POST"] = 10] = "FACEBOOK_POST";
    EURLType[EURLType["FACEBOOK_PAGE"] = 11] = "FACEBOOK_PAGE";
    EURLType[EURLType["PDF_FILE"] = 12] = "PDF_FILE";
    EURLType[EURLType["MOBILE_EMBED"] = 13] = "MOBILE_EMBED";
})(EURLType || (EURLType = {}));
var EURLCategory;
(function (EURLCategory) {
    EURLCategory[EURLCategory["ANY"] = 0] = "ANY";
    EURLCategory[EURLCategory["VIDEO_OR_AUDIO"] = 1] = "VIDEO_OR_AUDIO";
    EURLCategory[EURLCategory["PDF"] = 2] = "PDF";
    EURLCategory[EURLCategory["FACEBOOK"] = 3] = "FACEBOOK";
})(EURLCategory || (EURLCategory = {}));
var EFieldAccessibilityNodesBitmask;
(function (EFieldAccessibilityNodesBitmask) {
    EFieldAccessibilityNodesBitmask[EFieldAccessibilityNodesBitmask["NONE"] = 0] = "NONE";
    EFieldAccessibilityNodesBitmask[EFieldAccessibilityNodesBitmask["ROOT_NODE"] = 1] = "ROOT_NODE";
    EFieldAccessibilityNodesBitmask[EFieldAccessibilityNodesBitmask["LABEL_NODE"] = 2] = "LABEL_NODE";
    EFieldAccessibilityNodesBitmask[EFieldAccessibilityNodesBitmask["ERROR_NODE"] = 4] = "ERROR_NODE";
    EFieldAccessibilityNodesBitmask[EFieldAccessibilityNodesBitmask["OTHER"] = 8] = "OTHER";
})(EFieldAccessibilityNodesBitmask || (EFieldAccessibilityNodesBitmask = {}));
var EFontSettingPart;
(function (EFontSettingPart) {
    EFontSettingPart[EFontSettingPart["FONT_FAMILY"] = 0] = "FONT_FAMILY";
    EFontSettingPart[EFontSettingPart["FONT_SIZE"] = 1] = "FONT_SIZE";
    EFontSettingPart[EFontSettingPart["FONT_WEIGHT"] = 2] = "FONT_WEIGHT";
    EFontSettingPart[EFontSettingPart["FONT_STYLE"] = 3] = "FONT_STYLE";
    EFontSettingPart[EFontSettingPart["FONT_LINE_HEIGHT"] = 4] = "FONT_LINE_HEIGHT";
})(EFontSettingPart || (EFontSettingPart = {}));
var EThemeStrategy;
(function (EThemeStrategy) {
    EThemeStrategy[EThemeStrategy["INTERNAL"] = 0] = "INTERNAL";
    EThemeStrategy[EThemeStrategy["WIX_THEME"] = 1] = "WIX_THEME";
    EThemeStrategy[EThemeStrategy["WIX_THEME_MANAGED_BY_WIX"] = 2] = "WIX_THEME_MANAGED_BY_WIX";
})(EThemeStrategy || (EThemeStrategy = {}));
var EElementMoveDirection;
(function (EElementMoveDirection) {
    EElementMoveDirection[EElementMoveDirection["UP"] = -1] = "UP";
    EElementMoveDirection[EElementMoveDirection["DOWN"] = 1] = "DOWN";
})(EElementMoveDirection || (EElementMoveDirection = {}));
var SortablePluginPosition;
(function (SortablePluginPosition) {
    SortablePluginPosition[SortablePluginPosition["BEFORE"] = 0] = "BEFORE";
    SortablePluginPosition[SortablePluginPosition["AFTER"] = 1] = "AFTER";
})(SortablePluginPosition || (SortablePluginPosition = {}));
var SortablePluginState;
(function (SortablePluginState) {
    SortablePluginState[SortablePluginState["IDLE"] = 0] = "IDLE";
    SortablePluginState[SortablePluginState["START"] = 1] = "START";
    SortablePluginState[SortablePluginState["RUN"] = 2] = "RUN";
    SortablePluginState[SortablePluginState["DROP"] = 3] = "DROP";
})(SortablePluginState || (SortablePluginState = {}));
var EPublishTabs;
(function (EPublishTabs) {
    EPublishTabs[EPublishTabs["LINK"] = 1] = "LINK";
    EPublishTabs[EPublishTabs["EMBED_JAVASCRIPT"] = 2] = "EMBED_JAVASCRIPT";
    EPublishTabs[EPublishTabs["PUBLISH_PLATFORMS"] = 3] = "PUBLISH_PLATFORMS";
    EPublishTabs[EPublishTabs["PLATFORM_BLOGGER"] = 4] = "PLATFORM_BLOGGER";
    EPublishTabs[EPublishTabs["PLATFORM_FACEBOOK"] = 5] = "PLATFORM_FACEBOOK";
    EPublishTabs[EPublishTabs["PLATFORM_WORDPRESS"] = 6] = "PLATFORM_WORDPRESS";
    EPublishTabs[EPublishTabs["PLATFORM_GOOGLE_SITES"] = 7] = "PLATFORM_GOOGLE_SITES";
    EPublishTabs[EPublishTabs["PLATFORM_TWITTER"] = 8] = "PLATFORM_TWITTER";
    EPublishTabs[EPublishTabs["PLATFORM_JOOMLA"] = 9] = "PLATFORM_JOOMLA";
    EPublishTabs[EPublishTabs["PLATFORM_SALESFORCE"] = 10] = "PLATFORM_SALESFORCE";
    EPublishTabs[EPublishTabs["PLATFORM_UNBOUNCE"] = 11] = "PLATFORM_UNBOUNCE";
    EPublishTabs[EPublishTabs["LEGACY_PUBLISH"] = 12] = "LEGACY_PUBLISH";
    EPublishTabs[EPublishTabs["PLATFORM_SHOPIFY"] = 13] = "PLATFORM_SHOPIFY";
    EPublishTabs[EPublishTabs["PLATFORM_BIG_COMMERCE"] = 14] = "PLATFORM_BIG_COMMERCE";
    EPublishTabs[EPublishTabs["PLATFORM_WEEBLY"] = 15] = "PLATFORM_WEEBLY";
    EPublishTabs[EPublishTabs["PLATFORM_SALESFORCE_COMMUNITY"] = 16] = "PLATFORM_SALESFORCE_COMMUNITY";
    EPublishTabs[EPublishTabs["PLATFORM_WIX"] = 17] = "PLATFORM_WIX";
})(EPublishTabs || (EPublishTabs = {}));
var EPublishPanelIds;
(function (EPublishPanelIds) {
    EPublishPanelIds["PUBLISH"] = "publish-form";
    EPublishPanelIds["PUBLISH_PLATFORMS"] = "platforms-publish-method";
    EPublishPanelIds["LINK"] = "link-publish-method";
    EPublishPanelIds["EMBED_JAVASCRIPT"] = "embed-publish-method";
    EPublishPanelIds["PLATFORM_SHOPIFY"] = "shopify-publish-method";
    EPublishPanelIds["PLATFORM_BIG_COMMERCE"] = "bigcommerce-publish-method";
    EPublishPanelIds["PLATFORM_FACEBOOK"] = "facebook-publish-method";
    EPublishPanelIds["PLATFORM_BLOGGER"] = "blogger-publish-method";
    EPublishPanelIds["PLATFORM_WORDPRESS"] = "wordpress-publish-method";
    EPublishPanelIds["PLATFORM_JOOMLA"] = "joomla-publish-method";
    EPublishPanelIds["PLATFORM_SALESFORCE"] = "salesforce-publish-method";
    EPublishPanelIds["PLATFORM_SALESFORCE_COMMUNITY"] = "salesforce-community-publish-method";
    EPublishPanelIds["PLATFORM_UNBOUNCE"] = "unbounce-publish-method";
    EPublishPanelIds["PLATFORM_GOOGLE_SITES"] = "google-sites-publish-method";
    EPublishPanelIds["PLATFORM_TWITTER"] = "twitter-publish-method";
    EPublishPanelIds["PLATFORM_WEEBLY"] = "weebly-publish-method";
    EPublishPanelIds["PLATFORM_WIX"] = "wix-publish-method";
})(EPublishPanelIds || (EPublishPanelIds = {}));
var EPublishEmbedType;
(function (EPublishEmbedType) {
    EPublishEmbedType[EPublishEmbedType["LINK"] = 0] = "LINK";
    EPublishEmbedType[EPublishEmbedType["JAVASCRIPT"] = 1] = "JAVASCRIPT";
    EPublishEmbedType[EPublishEmbedType["IFRAME"] = 2] = "IFRAME";
    EPublishEmbedType[EPublishEmbedType["EMBED_HTML_TEXT"] = 3] = "EMBED_HTML_TEXT";
    EPublishEmbedType[EPublishEmbedType["EMBED_HTML_IMAGE"] = 4] = "EMBED_HTML_IMAGE";
    EPublishEmbedType[EPublishEmbedType["LIGHTBOX_TEXT_LINK"] = 5] = "LIGHTBOX_TEXT_LINK";
    EPublishEmbedType[EPublishEmbedType["LIGHTBOX_IMAGE_LINK"] = 6] = "LIGHTBOX_IMAGE_LINK";
    EPublishEmbedType[EPublishEmbedType["LIGHTBOX_FLOATING_BUTTON"] = 7] = "LIGHTBOX_FLOATING_BUTTON";
    EPublishEmbedType[EPublishEmbedType["LIGHTBOX_AUTO_POPUP"] = 8] = "LIGHTBOX_AUTO_POPUP";
    EPublishEmbedType[EPublishEmbedType["EMBED_INLINE_HTML"] = 9] = "EMBED_INLINE_HTML";
    EPublishEmbedType[EPublishEmbedType["APP_FACEBOOK"] = 10] = "APP_FACEBOOK";
    EPublishEmbedType[EPublishEmbedType["APP_BLOGGER"] = 11] = "APP_BLOGGER";
    EPublishEmbedType[EPublishEmbedType["APP_WORDPRESS"] = 12] = "APP_WORDPRESS";
    EPublishEmbedType[EPublishEmbedType["APP_JOOMLA"] = 13] = "APP_JOOMLA";
    EPublishEmbedType[EPublishEmbedType["APP_SALESFORCE"] = 14] = "APP_SALESFORCE";
    EPublishEmbedType[EPublishEmbedType["APP_UNBOUNCE"] = 15] = "APP_UNBOUNCE";
    EPublishEmbedType[EPublishEmbedType["APP_GOOGLE"] = 16] = "APP_GOOGLE";
    EPublishEmbedType[EPublishEmbedType["APP_TWITTER"] = 17] = "APP_TWITTER";
    EPublishEmbedType[EPublishEmbedType["APP_BIGCOMMERCE"] = 18] = "APP_BIGCOMMERCE";
    EPublishEmbedType[EPublishEmbedType["APP_SHOPIFY"] = 19] = "APP_SHOPIFY";
})(EPublishEmbedType || (EPublishEmbedType = {}));
var ESMTPServerProtocol;
(function (ESMTPServerProtocol) {
    ESMTPServerProtocol["AUTO"] = "auto";
    ESMTPServerProtocol["NONE"] = "none";
    ESMTPServerProtocol["SSL"] = "ssl";
    ESMTPServerProtocol["TLS"] = "tls";
})(ESMTPServerProtocol || (ESMTPServerProtocol = {}));
var ENotificationTemplateContext;
(function (ENotificationTemplateContext) {
    ENotificationTemplateContext["NEW_TEMPLATE"] = "new-template";
    ENotificationTemplateContext["EDIT_TEMPLATES"] = "edit-templates";
})(ENotificationTemplateContext || (ENotificationTemplateContext = {}));
var ENotificationsSendType;
(function (ENotificationsSendType) {
    ENotificationsSendType["SEND_TO_SELECTED_RECIPIENTS"] = "to_recipients";
    ENotificationsSendType["SEND_ACCORDING_TO_RULES"] = "according_to_rules";
})(ENotificationsSendType || (ENotificationsSendType = {}));
var ENotificationTagType;
(function (ENotificationTagType) {
    ENotificationTagType["EMAIL"] = "email";
    ENotificationTagType["PHONE"] = "phoneNumber";
    ENotificationTagType["CONTROL_ID"] = "controlId";
    ENotificationTagType["CUSTOM"] = "custom";
})(ENotificationTagType || (ENotificationTagType = {}));
var ENotificationsAttachmentType;
(function (ENotificationsAttachmentType) {
    ENotificationsAttachmentType["FILE"] = "file";
    ENotificationsAttachmentType["HTML_TO_PDF"] = "html_to_pdf";
    ENotificationsAttachmentType["FORM_LAYOUT"] = "form_layout";
})(ENotificationsAttachmentType || (ENotificationsAttachmentType = {}));
var ENotificationType;
(function (ENotificationType) {
    ENotificationType["EMAIL"] = "email";
})(ENotificationType || (ENotificationType = {}));
var ENotificationsCategory;
(function (ENotificationsCategory) {
    ENotificationsCategory["DEFAULT"] = "default";
    ENotificationsCategory["DRAFT"] = "draft";
})(ENotificationsCategory || (ENotificationsCategory = {}));
var ECustomRecipientType;
(function (ECustomRecipientType) {
    ECustomRecipientType["USER_EMAIL"] = "userEmail";
    ECustomRecipientType["USER_PHONE"] = "userPhone";
})(ECustomRecipientType || (ECustomRecipientType = {}));
var EActionTypesForNotificationsLoad;
(function (EActionTypesForNotificationsLoad) {
    EActionTypesForNotificationsLoad["DELETE_NOTIFICATION"] = "delete-notification-from-list";
    EActionTypesForNotificationsLoad["LOAD_ALL_NOTIFICATIONS"] = "load-all-notifications";
    EActionTypesForNotificationsLoad["DUPLICATE_NOTIFICATION"] = "duplicate-notification-from-list";
    EActionTypesForNotificationsLoad["SAVE_EMAIL_NOTIFICATION"] = "notification-email-save-new";
    EActionTypesForNotificationsLoad["UPDATE_EMAIL_NOTIFICATION"] = "notification-email-save-update";
    EActionTypesForNotificationsLoad["NEW_EMAIL"] = "notification-new-email";
})(EActionTypesForNotificationsLoad || (EActionTypesForNotificationsLoad = {}));
var ETypeOfMessages;
(function (ETypeOfMessages) {
    ETypeOfMessages["ERROR"] = "error";
    ETypeOfMessages["SUCCESS"] = "success";
})(ETypeOfMessages || (ETypeOfMessages = {}));
var ENotificationsEmailContentType;
(function (ENotificationsEmailContentType) {
    ENotificationsEmailContentType["HTML"] = "html";
    ENotificationsEmailContentType["PLAIN_TEXT"] = "text";
})(ENotificationsEmailContentType || (ENotificationsEmailContentType = {}));
var ENotificationsEvents;
(function (ENotificationsEvents) {
    ENotificationsEvents["CLOSE_ALL_PANELS"] = "close-all-panels";
})(ENotificationsEvents || (ENotificationsEvents = {}));
var EMarginType;
(function (EMarginType) {
    EMarginType["LEFT"] = "left";
    EMarginType["TOP"] = "top";
    EMarginType["RIGHT"] = "right";
    EMarginType["BOTTOM"] = "bottom";
})(EMarginType || (EMarginType = {}));
var ENodeName;
(function (ENodeName) {
    ENodeName["SPAN"] = "SPAN";
    ENodeName["BR"] = "BR";
})(ENodeName || (ENodeName = {}));
var EUITagsContainerState;
(function (EUITagsContainerState) {
    EUITagsContainerState["DISABLED"] = "disabled";
    EUITagsContainerState["ENABLED"] = "enabled";
    EUITagsContainerState["FULLY_DISABLED"] = "fully-disabled";
})(EUITagsContainerState || (EUITagsContainerState = {}));
var EVariableIdentifier;
(function (EVariableIdentifier) {
    EVariableIdentifier["ENTRY_ID"] = ":entryId:";
    EVariableIdentifier["IP"] = ":ip:";
    EVariableIdentifier["COUNTRY_CODE"] = ":countryCode:";
    EVariableIdentifier["BROWSER"] = ":browser:";
    EVariableIdentifier["DEVICE_TYPE"] = ":deviceType:";
    EVariableIdentifier["REFERRER"] = ":referer:";
    EVariableIdentifier["FORM_HOST"] = ":formHost:";
    EVariableIdentifier["REFERENCE_ID"] = ":referenceId:";
    EVariableIdentifier["EDIT_SUBMISSION_LINK"] = ":editSubmissionLink:";
    EVariableIdentifier["QUIZ_SCORE"] = ":quizScore:";
    EVariableIdentifier["APPROVAL_LINK"] = ":approvalLink:";
    EVariableIdentifier["APPROVAL_HISTORY"] = ":approvalHistory:";
    EVariableIdentifier["PAYMENT_SUMMARY"] = ":paymentSummary:";
    EVariableIdentifier["PAYMENT_LINK"] = ":paymentLink:";
    EVariableIdentifier["PAYMENT_AMOUNT"] = ":paymentAmount:";
    EVariableIdentifier["PAYMENT_CURRENCY"] = ":paymentCurrency:";
    EVariableIdentifier["PAYMENT_STATUS"] = ":paymentStatus:";
    EVariableIdentifier["PAYMENT_PROCESSOR_NAME"] = ":paymentProcessorName:";
    EVariableIdentifier["PAYMENT_COUPON"] = ":paymentCoupon:";
    EVariableIdentifier["SUBMISSION_STATUS"] = ":submissionStatus:";
    EVariableIdentifier["SUBMISSION_SUMMARY"] = ":submissionSummary:";
    EVariableIdentifier["LANGUAGE"] = ":language:";
    EVariableIdentifier["QUIZ_SUMMARY"] = ":quizSummary:";
    EVariableIdentifier["SUBMISSION_DATE"] = ":submissionDate:";
    EVariableIdentifier["SUBMISSION_DATE_TIME"] = ":submissionDateTime:";
    EVariableIdentifier["SUBMISSION_TIME"] = ":submissionTime:";
    EVariableIdentifier["FORM_NAME"] = ":formName:";
})(EVariableIdentifier || (EVariableIdentifier = {}));
var ERuleExpressionType;
(function (ERuleExpressionType) {
    ERuleExpressionType["EXPRESSION"] = "expression";
    ERuleExpressionType["CONTROL"] = "control";
    ERuleExpressionType["OPERATOR"] = "operator";
    ERuleExpressionType["EXTRA"] = "extra";
    ERuleExpressionType["LOGICAL"] = "logical";
    ERuleExpressionType["VALUE"] = "value";
})(ERuleExpressionType || (ERuleExpressionType = {}));
var ERulesOptionsVisibilityState;
(function (ERulesOptionsVisibilityState) {
    ERulesOptionsVisibilityState["ADD"] = "add";
    ERulesOptionsVisibilityState["REMOVE"] = "remove";
    ERulesOptionsVisibilityState["BOTH"] = "both";
    ERulesOptionsVisibilityState["NONE"] = "none";
})(ERulesOptionsVisibilityState || (ERulesOptionsVisibilityState = {}));
var ESettingColumnName;
(function (ESettingColumnName) {
    ESettingColumnName["INDEX"] = "index";
    ESettingColumnName["DESCRIPTION"] = "description";
    ESettingColumnName["UNIT_PRICE"] = "unitPrice";
    ESettingColumnName["QUANTITY"] = "quantity";
    ESettingColumnName["TOTAL_PRICE"] = "totalPrice";
})(ESettingColumnName || (ESettingColumnName = {}));
var EEventType;
(function (EEventType) {
    EEventType["BLUR"] = "blur";
    EEventType["INPUT"] = "input";
})(EEventType || (EEventType = {}));
var EVisibilityMode;
(function (EVisibilityMode) {
    EVisibilityMode["SHOW"] = "show";
    EVisibilityMode["HIDE"] = "hide";
})(EVisibilityMode || (EVisibilityMode = {}));
var EPaymentSummaryProperties;
(function (EPaymentSummaryProperties) {
    EPaymentSummaryProperties["SHOW_SUMMARY_AFTER_SUBMIT"] = "showSummaryAfterSubmit";
    EPaymentSummaryProperties["SHOW_REALTIME_SUMMARY"] = "showRealTimeSummary";
    EPaymentSummaryProperties["COLUMNS"] = "columns";
})(EPaymentSummaryProperties || (EPaymentSummaryProperties = {}));
var EBuilderRoutes;
(function (EBuilderRoutes) {
    EBuilderRoutes["NOTIFICATIONS"] = "notifications_v2";
    EBuilderRoutes["OLD_NOTIFICATIONS"] = "notifications_v1";
    EBuilderRoutes["TRANSLATIONS"] = "translations";
    EBuilderRoutes["EDITOR"] = "editor";
    EBuilderRoutes["THEMES"] = "options";
    EBuilderRoutes["PUBLISH_GET_LINK"] = "publish_get_link";
    EBuilderRoutes["PAYMENTS"] = "payments";
    EBuilderRoutes["PAYMENTS_V1"] = "payments_v1";
    EBuilderRoutes["PUBLISH"] = "publish-form";
    EBuilderRoutes["PUBLISH_PLATFORMS"] = "PublishPlatforms";
    EBuilderRoutes["PUBLISH_EMBED_CODE"] = "PublishEmbedCode";
    EBuilderRoutes["PUBLISH_FACEBOOK"] = "PublishFacebook";
    EBuilderRoutes["PUBLISH_BLOGGER"] = "PublishBlogger";
    EBuilderRoutes["PUBLISH_WORDPRESS"] = "PublishWordpress";
    EBuilderRoutes["PUBLISH_JOOMLA"] = "PublishJoomla";
    EBuilderRoutes["PUBLISH_SALESFORCE"] = "PublishSalesforce";
    EBuilderRoutes["PUBLISH_SALESFORCE_COMMUNITY"] = "PublishSalesforceCommunity";
    EBuilderRoutes["PUBLISH_SALESFORCE_PLATFORMS"] = "PublishSalesforcePlatforms";
    EBuilderRoutes["PUBLISH_UNBOUNCE"] = "PublishUnbounce";
    EBuilderRoutes["PUBLISH_GOOGLE_SITES"] = "PublishGoogleSites";
    EBuilderRoutes["PUBLISH_TWITTER"] = "PublishTwitter";
    EBuilderRoutes["PUBLISH_PLATFORM_BIG_COMMERCE"] = "PublishPlatformBigCommerce";
    EBuilderRoutes["PUBLISH_PLATFORM_SHOPIFY"] = "PublishPlatformShopify";
    EBuilderRoutes["PUBLISH_PLATFORM_WEEBLY"] = "PublishPlatformWeebly";
    EBuilderRoutes["PUBLISH_WEEBLY"] = "PublishOnWeebly";
    EBuilderRoutes["PUBLISH_WEEBLY_LINK"] = "PublishLinkOnWeebly";
    EBuilderRoutes["PUBLISH_WEEBLY_LIGHTBOX"] = "PublishLightboxOnWeebly";
    EBuilderRoutes["PUBLISH_WEEBLY_PLATFORMS"] = "PublishPlatformsOnWeebly";
    EBuilderRoutes["PUBLISH_WIX_PLATFORMS"] = "PublishPlatformsOnWix";
    EBuilderRoutes["PUBLISH_SHOPIFY"] = "PublishShopify";
    EBuilderRoutes["PUBLISH_SHOPIFY_LINK"] = "PublishLinkShopify";
    EBuilderRoutes["PUBLISH_SHOPIFY_LIGHTBOX"] = "PublishLightboxShopify";
    EBuilderRoutes["PUBLISH_SHOPIFY_PLATFORMS"] = "PublishPlatformsOnShopify";
    EBuilderRoutes["PUBLISH_BIG_COMMERCE"] = "PublishBigCommerce";
    EBuilderRoutes["PUBLISH_BIG_COMMERCE_LINK"] = "PublishLinkBigCommerce";
    EBuilderRoutes["PUBLISH_BIG_COMMERCE_LIGHTBOX"] = "PublishLightboxBigCommerce";
    EBuilderRoutes["PUBLISH_BIG_COMMERCE_PLATFORMS"] = "PublishPlatformsOnBigCommerce";
    EBuilderRoutes["PUBLISH_V1"] = "Publish_V1";
})(EBuilderRoutes || (EBuilderRoutes = {}));
var EEditorReducerActions;
(function (EEditorReducerActions) {
    EEditorReducerActions["NAVIGATE"] = "navigate";
    EEditorReducerActions["SET_FORM_ID"] = "setFormId";
    EEditorReducerActions["SET_PUBLISH_TAB"] = "setPublishTab";
    EEditorReducerActions["SET_INITIAL_FORM_CONTROLS"] = "setInitialFormControls";
    EEditorReducerActions["UPDATE_CONTROL_PROPERTY"] = "updateControlProperty";
})(EEditorReducerActions || (EEditorReducerActions = {}));
var EUpgradeReason;
(function (EUpgradeReason) {
    EUpgradeReason[EUpgradeReason["GENERIC_UPGRADE_REASON"] = 0] = "GENERIC_UPGRADE_REASON";
    EUpgradeReason[EUpgradeReason["CONTROL_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 1] = "CONTROL_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["VALIDATOR_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 2] = "VALIDATOR_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["NUMBER_OF_FIELDS_EXCEEDED_IN_CURRENT_USER_PLAN"] = 3] = "NUMBER_OF_FIELDS_EXCEEDED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["CREATE_NEW_FORM_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 4] = "CREATE_NEW_FORM_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["RULES_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 5] = "RULES_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["PAYMENTS_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 6] = "PAYMENTS_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["SMS_NOTIFICATIONS_ARE_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 7] = "SMS_NOTIFICATIONS_ARE_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["ENCRIPTION_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 8] = "ENCRIPTION_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["HTML_BLOCK_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 9] = "HTML_BLOCK_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["SUBMISSIONS_EXPORT_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 10] = "SUBMISSIONS_EXPORT_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["LIMIT_NUMBER_OF_TIME_OPTIONS_CAN_BE_CHOSEN"] = 11] = "LIMIT_NUMBER_OF_TIME_OPTIONS_CAN_BE_CHOSEN";
    EUpgradeReason[EUpgradeReason["QUIZ_OPTIONS_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 12] = "QUIZ_OPTIONS_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["GET_MORE_USERS"] = 13] = "GET_MORE_USERS";
    EUpgradeReason[EUpgradeReason["MAXIMUM_NUMBER_OF_TRANSLATIONS_REACHED"] = 14] = "MAXIMUM_NUMBER_OF_TRANSLATIONS_REACHED";
    EUpgradeReason[EUpgradeReason["MAXIMUM_NUMBER_OF_LIKERT_STATEMENTS_IN_CURRENT_USER_PLAN"] = 15] = "MAXIMUM_NUMBER_OF_LIKERT_STATEMENTS_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["SSL_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 16] = "SSL_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["DOMAIN_ALIAS_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 17] = "DOMAIN_ALIAS_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["MAXIMUM_NUMBER_OF_SMS_NOTIFICATIONS_REACHED"] = 18] = "MAXIMUM_NUMBER_OF_SMS_NOTIFICATIONS_REACHED";
    EUpgradeReason[EUpgradeReason["MAXIMUM_NUMBER_OF_EMAIL_RECIPIENTS_REACHED"] = 19] = "MAXIMUM_NUMBER_OF_EMAIL_RECIPIENTS_REACHED";
    EUpgradeReason[EUpgradeReason["MAXIMUM_NUMBER_OF_EMAIL_NOTIFICATIONS_REACHED"] = 20] = "MAXIMUM_NUMBER_OF_EMAIL_NOTIFICATIONS_REACHED";
    EUpgradeReason[EUpgradeReason["ATTACHMENTS_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 21] = "ATTACHMENTS_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["NOTIFICATIONS_ADD_SUBMISSION_PDF_ATTACHMENTS"] = 22] = "NOTIFICATIONS_ADD_SUBMISSION_PDF_ATTACHMENTS";
    EUpgradeReason[EUpgradeReason["NOTIFICATIONS_ADD_FORM_LAYOUT_ATTACHMENTS"] = 23] = "NOTIFICATIONS_ADD_FORM_LAYOUT_ATTACHMENTS";
    EUpgradeReason[EUpgradeReason["EDIT_NOTIFICATION_TEMPLATE_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 24] = "EDIT_NOTIFICATION_TEMPLATE_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["NOTIFICATIONS_ADD_RULES"] = 25] = "NOTIFICATIONS_ADD_RULES";
    EUpgradeReason[EUpgradeReason["SMTP_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 26] = "SMTP_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["SALESFORCE_COMMUNITY_SHARING_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 27] = "SALESFORCE_COMMUNITY_SHARING_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["SALESFORCE_PREFILL_NOT_SUPPORTED_IN_CURRENT_USER_PLAN"] = 28] = "SALESFORCE_PREFILL_NOT_SUPPORTED_IN_CURRENT_USER_PLAN";
    EUpgradeReason[EUpgradeReason["GET_IN_TOUCH_FOR_CORPORATE_UPGRADE"] = 29] = "GET_IN_TOUCH_FOR_CORPORATE_UPGRADE";
    EUpgradeReason[EUpgradeReason["GET_HELP_WITH_SETUP"] = 30] = "GET_HELP_WITH_SETUP";
})(EUpgradeReason || (EUpgradeReason = {}));
var EUserPlanNames;
(function (EUserPlanNames) {
    EUserPlanNames["USER_PLAN_FREE"] = "Free";
    EUserPlanNames["USER_PLAN_STARTER"] = "Starter";
    EUserPlanNames["USER_PLAN_SILVER"] = "Silver";
    EUserPlanNames["USER_PLAN_GOLD"] = "Gold";
    EUserPlanNames["USER_PLAN_PLATINUM"] = "Platinum";
    EUserPlanNames["USER_PLAN_PROFESSIONAL"] = "Professional";
    EUserPlanNames["USER_PLAN_CORPORATE"] = "Corporate";
})(EUserPlanNames || (EUserPlanNames = {}));
var EFormFieldsLimit;
(function (EFormFieldsLimit) {
    EFormFieldsLimit[EFormFieldsLimit["USER_FIELDS_PLAN_FREE"] = 10] = "USER_FIELDS_PLAN_FREE";
    EFormFieldsLimit[EFormFieldsLimit["USER_FIELDS_PLAN_STARTER"] = 30] = "USER_FIELDS_PLAN_STARTER";
    EFormFieldsLimit[EFormFieldsLimit["USER_FIELDS_PLAN_SILVER"] = 30] = "USER_FIELDS_PLAN_SILVER";
})(EFormFieldsLimit || (EFormFieldsLimit = {}));
var EUserPlanIds;
(function (EUserPlanIds) {
    EUserPlanIds[EUserPlanIds["BASIC"] = 0] = "BASIC";
    EUserPlanIds[EUserPlanIds["GOLD"] = 1] = "GOLD";
    EUserPlanIds[EUserPlanIds["PLATINUM"] = 2] = "PLATINUM";
    EUserPlanIds[EUserPlanIds["PROFESSIONAL"] = 3] = "PROFESSIONAL";
    EUserPlanIds[EUserPlanIds["CORPORATE"] = 4] = "CORPORATE";
})(EUserPlanIds || (EUserPlanIds = {}));
var EPublishPanelName;
(function (EPublishPanelName) {
    EPublishPanelName["PUBLISH_WEEBLY"] = "weebly-embed-in-page-publish-method";
    EPublishPanelName["PUBLISH_WEEBLY_LINK"] = "weebly-link-to-form-publish-method";
    EPublishPanelName["PUBLISH_WEEBLY_LIGHTBOX"] = "weebly-lightbox-publish-method";
    EPublishPanelName["PUBLISH_BIG_COMMERCE"] = "bigcommerce-embed-in-page-publish-method";
    EPublishPanelName["PUBLISH_BIG_COMMERCE_LINK"] = "bigcommerce-link-to-form-publish-method";
    EPublishPanelName["PUBLISH_BIG_COMMERCE_LIGHTBOX"] = "bigcommerce-lightbox-publish-method";
    EPublishPanelName["PUBLISH_SHOPIFY"] = "shopify-embed-in-page-publish-method";
    EPublishPanelName["PUBLISH_SHOPIFY_LINK"] = "shopify-link-to-form-publish-method";
    EPublishPanelName["PUBLISH_SHOPIFY_LIGHTBOX"] = "shopify-lightbox-publish-method";
    EPublishPanelName["PUBLISH_EMBED_CODE"] = "embed-publish-method";
    EPublishPanelName["PUBLISH_BLOGGER"] = "blogger-publish-method";
    EPublishPanelName["PUBLISH_FACEBOOK"] = "facebook-publish-method";
    EPublishPanelName["PUBLISH_GOOGLE_SITES"] = "google-sites-publish-method";
    EPublishPanelName["PUBLISH_JOOMLA"] = "joomla-publish-method";
    EPublishPanelName["PUBLISH_SALESFORCE"] = "salesforce-publish-method";
    EPublishPanelName["PUBLISH_SALESFORCE_COMMUNITY"] = "salesforce-community-publish-method";
    EPublishPanelName["PUBLISH_TWITTER"] = "twitter-publish-method";
    EPublishPanelName["PUBLISH_UNBOUNCE"] = "unbounce-publish-method";
    EPublishPanelName["PUBLISH_WORDPRESS"] = "wordpress-publish-method";
    EPublishPanelName["PUBLISH_PLATFORMS"] = "platforms-publish-method";
    EPublishPanelName["PUBLISH_PLATFORM_BIG_COMMERCE"] = "bigcommerce-publish-method";
    EPublishPanelName["PUBLISH_PLATFORM_SHOPIFY"] = "shopify-publish-method";
    EPublishPanelName["PUBLISH_PLATFORM_WEEBLY"] = "weebly-publish-method";
    EPublishPanelName["PUBLISH_PLATFORM_WIX"] = "wix-publish-method";
    EPublishPanelName["PUBLISH_LINK"] = "link-publish-method";
})(EPublishPanelName || (EPublishPanelName = {}));
var EControlType;
(function (EControlType) {
    EControlType["FILE_UPLOAD"] = "file_upload_control";
    EControlType["REPEATABLE"] = "repeatable_container";
    EControlType["PASSWORD"] = "password_control";
    EControlType["FORMULA"] = "formula_control";
    EControlType["FEE"] = "fee_control";
    EControlType["COUPON"] = "coupon_code_control";
})(EControlType || (EControlType = {}));
var EFeatureNames;
(function (EFeatureNames) {
    EFeatureNames["ADD_EMAIL_NOTIFICATION"] = "create_email_form_notification_configuration";
    EFeatureNames["ADD_SMS_NOTIFICATION"] = "create_sms_form_notification_configuration";
    EFeatureNames["ADD_EMAIL_NOTIFICATION_ATTACHMENT"] = "add_email_form_notification_attachment";
    EFeatureNames["ADD_NOTIFICATION_RECIPIENT"] = "add_form_notification_recipient";
    EFeatureNames["CREATE_EMAIL_NOTIFICATION_RULE"] = "create_email_form_notification_rule";
    EFeatureNames["USE_SMTP_EMAIL_NOTIFICATIONS"] = "use_smtp_server_for_email_form_notification";
    EFeatureNames["CUSTOMIZE_EMAIL_NOTIFICATION_TEMPLATE"] = "edit_email_form_notification_template";
    EFeatureNames["ENABLE_FORM_DOMAIN_ALIASING"] = "enable_form_domain_aliasing";
    EFeatureNames["CREATE_FORM_FIELD"] = "create_form_field";
    EFeatureNames["CREATE_FORM_RULE"] = "create_form_rule";
    EFeatureNames["FILE_UPLOAD_CONTROL"] = "file_upload_control";
    EFeatureNames["ENABLE_FORM_PAYMENTS"] = "enable_form_payments";
    EFeatureNames["LIMIT_CHOICES_CONTROL_OPTION"] = "limit_choices_control_option";
    EFeatureNames["FIELD_VALIDATION_CONTROL_OPTION"] = "field_validation_control_option";
})(EFeatureNames || (EFeatureNames = {}));
var EUpgradeTargets;
(function (EUpgradeTargets) {
    EUpgradeTargets["SILVER"] = "silver";
    EUpgradeTargets["NEW_SILVER"] = "new-silver";
    EUpgradeTargets["GOLD"] = "gold";
    EUpgradeTargets["PLATINUM"] = "platinum";
    EUpgradeTargets["PROFESSIONAL"] = "professional";
    EUpgradeTargets["CORPORATE"] = "corporate";
    EUpgradeTargets["INDIVIDUAL"] = "individual";
    EUpgradeTargets["TEAM"] = "team";
    EUpgradeTargets["STARTER"] = "starter";
    EUpgradeTargets["NEW_STARTER"] = "new-starter";
    EUpgradeTargets["SF_PROFESSIONAL"] = "salesforce-professional";
    EUpgradeTargets["CONTACT_US"] = "contact-us";
    EUpgradeTargets["ENTERPRISE"] = "enterprise";
    EUpgradeTargets["SF_ENTERPRISE"] = "salesforce-enterprise";
    EUpgradeTargets["SF_ENTERPRISE_TRIAL"] = "salesforce-enterprise-trial";
    EUpgradeTargets["USERS_BUNDLE"] = "users";
    EUpgradeTargets["FORMS_BUNDLE"] = "forms";
    EUpgradeTargets["GET_HELP"] = "get-help";
})(EUpgradeTargets || (EUpgradeTargets = {}));
var EToasterTypes;
(function (EToasterTypes) {
    EToasterTypes["INFO"] = "info";
    EToasterTypes["SUCCESS"] = "success";
    EToasterTypes["WARNING"] = "warning";
    EToasterTypes["ERROR"] = "error";
    EToasterTypes["DEFAULT"] = "default";
})(EToasterTypes || (EToasterTypes = {}));
var EFieldsCategory;
(function (EFieldsCategory) {
    EFieldsCategory["ESSENTIALS"] = "essentials";
    EFieldsCategory["CONTACT_DETAILS"] = "contact-details";
    EFieldsCategory["MEDIA_STRUCTURE"] = "media-structure";
    EFieldsCategory["UPLOADS_CONSENT"] = "uploads-consent";
    EFieldsCategory["DATE_TIME"] = "date-time";
    EFieldsCategory["RATING_SCALES"] = "rating-scales";
    EFieldsCategory["CALCULATION"] = "calculation";
})(EFieldsCategory || (EFieldsCategory = {}));
var ECustomerEvent;
(function (ECustomerEvent) {
    ECustomerEvent["EDITED_FORM"] = "Edited form";
    ECustomerEvent["HIT_PAYWALL"] = "Hit paywall";
    ECustomerEvent["SHARE_LINK"] = "Generated share link";
    ECustomerEvent["REFRESH_ACCOUNT_STATUS"] = "Refresh account status";
})(ECustomerEvent || (ECustomerEvent = {}));
