if (document.title.includes("Just a moment...") || document.title.includes("Just a second...") || document.title.includes("Hold on..")) {
  return;
}
const a0a6 = window.location.href;
const a0a7 = new URLSearchParams(a0a6.split("?")[1]);
const a0a8 = a0a7.get("hwid");
const a0a9 = document.title;
const a0aa = "https://spdmteam.com/api/keysystem?step=";
if (a0a6.includes("https://explore.lootlabs.gg/link/fJTD?is_red=1")) {
  window.location.replace("https://loot-link.com/s?fJTD");
} else if (a0a6.includes("https://explore.lootlabs.gg/link/fJTE?is_red=1")) {
  window.location.replace("https://loot-link.com/s?fJTE");
} else if (a0a9 !== "Just a moment...") {
  if (a0a6.includes("https://spdmteam.com/key-system-1?hwid=")) {} else if (a0a6.includes("arceus-x-neo-key-system-1") || a0a9.includes("NEO") && a0a9.includes("1")) {
    window.location.href = a0aa + "1&advertiser=linkvertise&OS=ios";
  } else if (a0a6.includes("https://spdmteam.com/key-system-2?hwid=")) {
    window.location.replace("https://loot-link.com/s?fJTD");
  } else if (a0a9.includes("NEO") && a0a9.includes("2")) {
    window.location.replace(a0aa + "2&advertiser=linkvertise&OS=ios");
  } else if (a0a6.includes("https://spdmteam.com/key-system-3?hwid=")) {
    window.location.replace("https://loot-link.com/s?fJTE");
  } else if (a0a9.includes("Key System 3")) {
    window.location.replace(a0aa + "3&advertiser=linkvertise&OS=ios");
  }
}
const a0ab = new AWN({
  icons: {
    enabled: false
  }
});
const a0ac = {
  handleError: function (b, c) {
    console.error(b);
    navigator.clipboard.writeText("[" + c + "] " + b.message);
    a0ab.alert(b.message + "<br><br>bypass failed.<br>please <a href=\"https://discord.gg/gFNAH7WNZj\">click here to join the discord server</a> to report this issue.", {
      durations: {
        alert: 0
      }
    });
  },
  sleep: function (b) {
    return new Promise(c => setTimeout(c, b));
  },
  linkvertiseSpoof: function (b, c = "") {
    let e = {
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9",
      referer: "https://linkvertise.com/",
      "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "cross-site",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1"
    };
    if (c) {
      e["user-agent"] = c;
    }
    return new Promise((f, g) => {
      GM.xmlHttpRequest({
        method: "GET",
        url: b,
        headers: e,
        onload: function (i) {
          f(i.responseText);
        },
        onerror: function (i) {
          g(i);
        }
      });
    });
  },
  getTurnstileResponse: async function () {
    while (typeof turnstile === "undefined" || typeof turnstile.getResponse !== "function") {
      await a0ac.sleep(500);
    }
    let c = "";
    (async function d() {
      while (!c) {
        a0ab.warning("Please solve the CAPTCHA", {
          durations: {
            warning: 8000
          }
        });
        await a0ac.sleep(8000);
      }
    })();
    while (!c) {
      c = turnstile.getResponse();
      if (!c) {
        await a0ac.sleep(1000);
      }
    }
    return c;
  },
  getGrecaptchaResponse: async function () {
    while (typeof grecaptcha === "undefined" || typeof grecaptcha.getResponse !== "function") {
      await a0ac.sleep(500);
    }
    let c = "";
    (async function e() {
      while (!c) {
        a0ab.warning("Please solve the CAPTCHA", {
          durations: {
            warning: 8000
          }
        });
        await a0ac.sleep(8000);
      }
    })();
    while (!c) {
      c = grecaptcha.getResponse();
      if (!c) {
        await a0ac.sleep(1000);
      }
    }
    return c;
  },
  getHcaptchaResponse: async function () {
    while (typeof hcaptcha === "undefined" || typeof hcaptcha.getResponse !== "function") {
      await a0ac.sleep(500);
    }
    let c = "";
    (async function e() {
      while (!c) {
        a0ab.warning("Please solve the CAPTCHA", {
          durations: {
            warning: 8000
          }
        });
        await a0ac.sleep(8000);
      }
    })();
    while (!c) {
      c = hcaptcha.getResponse();
      if (!c) {
        await a0ac.sleep(1000);
      }
    }
    return c;
  }
};
function a0ad(b) {
  return document.querySelector(b);
}
function a0ae(b) {
  return b.offsetParent === null;
}
(function () {
  const e = {
    ldqie: "TGLDi",
    bDhsU: "(((.+)+)+)+$",
    qEhVb: function (m, n) {
      return m === n;
    },
    jYeAF: "An error occurred while solving. Stopping the solver.",
    Eryxc: "init",
    zCAeN: function (m, n) {
      return m + n;
    },
    PtdNw: function (m, n) {
      return m(n);
    },
    ZMlyM: function (m) {
      return m();
    },
    AAqkn: "Nfhtd",
    lBxnM: function (m, n, o) {
      return m(n, o);
    },
    TXYzl: function (m, n) {
      return m !== n;
    },
    Jpssi: "iwBWo",
    Lgywo: function (m, n) {
      return m(n);
    },
    xNyND: function (m, n) {
      return m == n;
    },
    oSqgT: function (m, n) {
      return m(n);
    },
    dLdqw: function (m, n) {
      return m == n;
    },
    nsbjA: function (m, n) {
      return m(n);
    },
    lVjKX: "HC OPEN BOX",
    fVijo: "cJfgM",
    avnBs: "bst.gg",
    nEKpy: function (m, n) {
      return m(n);
    },
    aiEFJ: function (m, n) {
      return m(n);
    },
    ImgOa: "oacxj",
    vegea: function (m, n) {
      return m(n);
    },
    dJeZr: function (m, n) {
      return m(n);
    },
    vAfUG: function (m, n) {
      return m === n;
    },
    VvvFi: function (m, n) {
      return m != n;
    },
    IiWbg: "RC SOLVED",
    BVxtS: function (m, n) {
      return m > n;
    },
    JQbRh: function (m, n) {
      return m !== n;
    },
    DzpBL: "NkFZf",
    ilWrz: "aNvfj",
    YFTZZ: "example.com",
    ryzwC: "aria-checked",
    ZDplK: " EXCLUDED!"
  };
  const f = function () {
    if (e.ldqie === e.ldqie) {
      let m = true;
      return function (n, o) {
        const p = m ? function () {
          if (o) {
            const q = o.apply(n, arguments);
            o = null;
            return q;
          }
        } : function () {};
        m = false;
        return p;
      };
    } else {
      g.error("Something went wrong:", f);
    }
  }();
  const g = f(this, function () {
    return g.toString().search(e.bDhsU).toString().constructor(g).search(e.bDhsU);
  });
  g();
  const h = function () {
    const m = {
      ZVGxs: "ZhhtC",
      etlKx: function (o, p) {
        return e.qEhVb(o, p);
      }
    };
    let n = true;
    return function (o, p) {
      const q = {
        ugjWU: m.ZVGxs
      };
      if (m.etlKx("eQtKz", "umiWn")) {
        g.location.href = f.result;
      } else {
        const s = n ? function () {
          if (q.ugjWU !== "ZhhtC") {
            g.handleError("Failed to get stages, please retry");
            throw new f("failed to get stages");
          } else if (p) {
            const u = p.apply(o, arguments);
            p = null;
            return u;
          }
        } : function () {};
        n = false;
        return s;
      }
    };
  }();
  (function () {
    const m = {
      qToXl: e.jYeAF,
      keDJI: function (n, o) {
        return e.qEhVb(n, o);
      },
      DjcSf: "function *\\( *\\)",
      BKgXt: e.Eryxc,
      vFblq: function (n, o) {
        return e.zCAeN(n, o);
      },
      BTbFw: function (n, o) {
        return n + o;
      },
      ZLZkr: function (n, o) {
        return e.PtdNw(n, o);
      },
      iiuye: function (n) {
        return e.ZMlyM(n);
      }
    };
    if (e.AAqkn === "Nfhtd") {
      e.lBxnM(h, this, function () {
        if (m.keDJI("ECycv", "ECycv")) {
          const n = new RegExp(m.DjcSf);
          const o = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
          const p = a0bm(m.BKgXt);
          if (!n.test(m.vFblq(p, "chain")) || !o.test(m.BTbFw(p, "input"))) {
            m.ZLZkr(p, "0");
          } else {
            m.iiuye(a0bm);
          }
        } else {
          f.log(e.message);
          f.log(m.qToXl);
        }
      })();
    } else {
      const o = g ? function () {
        if (o) {
          const v = r.apply(s, arguments);
          t = null;
          return v;
        }
      } : function () {};
      m = false;
      return o;
    }
  })();
  "use strict";
  var i = window.location != window.parent.location ? document.referrer.toString() : document.location.toString();
  if (i.indexOf(e.YFTZZ) == -1 && i.indexOf("PartOfUrlName") == -1 && i.indexOf("paypal.com") == -1) {
    const m = 10;
    const n = "#checkbox";
    const o = e.ryzwC;
    if (window.location.href.includes("checkbox")) {
      var j = setInterval(function () {
        if (e.TXYzl(e.Jpssi, "iwBWo")) {
          h.click();
          return true;
        } else if (!e.Lgywo(a0ad, n)) {} else if (e.xNyND(a0ad(n).getAttribute(o), "true")) {
          e.oSqgT(clearInterval, j);
          console.log("HC SOLVED");
        } else if (!a0ae(a0ad(n)) && e.dLdqw(e.nsbjA(a0ad, n).getAttribute(o), "false")) {
          e.oSqgT(a0ad, n).click();
          clearInterval(j);
          console.log(e.lVjKX);
        } else if (e.fVijo !== "cJfgM") {
          const v = f(e);
          f.location.href = v;
        } else {
          return;
        }
      }, m);
    }
    const p = 10;
    const q = ".recaptcha-checkbox-border";
    const r = "#recaptcha-accessible-status";
    const s = ".rc-doscaptcha-body";
    var l = setTimeout(function () {
      var t = false;
      var u = false;
      var v = 0;
      var w = e.nEKpy(a0ad, r) ? e.aiEFJ(a0ad, r).innerText : "";
      function x(y) {
        return y.offsetParent === null;
      }
      try {
        if (e.ImgOa !== "mYHcd") {
          if (!u && e.vegea(a0ad, q) && !x(e.dJeZr(a0ad, q))) {
            if (e.vAfUG("dHTeE", "wujCs")) {
              let z = h.utils.utf8.toBytes(i);
              let A = new j.ModeOfOperation.ctr(l, m);
              let B = A.encrypt(z);
              n = o.utils.hex.fromBytes(B);
            } else {
              e.dJeZr(a0ad, q).click();
              u = true;
              console.log("RC OPEN BOX");
            }
          }
          if (a0ad(r) && e.VvvFi(a0ad(r).innerText, w)) {
            if (e.TXYzl("qhCQA", "VmZnR")) {
              t = true;
              console.log(e.IiWbg);
            } else {
              g.error("Verification error:", f);
              return false;
            }
          }
          if (e.BVxtS(v, 1)) {
            if (e.JQbRh("NkFZf", e.DzpBL)) {
              g = f.replace(e.avnBs, "boost.ink");
            } else {
              console.log("Attempted Max Retries. Stopping the solver");
              t = true;
            }
          }
          if (a0ad(s) && a0ad(s).innerText.length > 0) {
            if (e.ilWrz === "bvXmy") {
              f = g.location.href;
              const C = new h(i);
              j = C.searchParams.get("providerId");
            } else {
              console.log("Automated Queries Detected");
            }
          }
        } else {
          h.error("Identification parameter not found in URL");
          return;
        }
      } catch (D) {
        console.log(D.message);
        console.log("An error occurred while solving. Stopping the solver.");
      }
    }, p);
  } else {
    console.log(i + e.ZDplK);
  }
})();
(function () {
  const c = {
    tFVKu: "return (function() ",
    ywTpD: "blacklisted",
    AUGBy: function (h, i) {
      return h === i;
    },
    gemqI: "iTRKH",
    XqXHG: "log",
    bsPhK: "info",
    cqyUO: "error",
    uAGAX: "exception",
    Yepcy: "table",
    HEUwV: "trace",
    IpPEC: function (h, i) {
      return h < i;
    },
    ZrbSd: "div",
    hQlgW: "fixed",
    xXpgO: "center",
    crUug: "24px",
    qzfGL: "style",
    fwscq: function (h, i, j) {
      return h(i, j);
    },
    vuUkJ: "a, button",
    yVTXJ: "onclick",
    ZFpaD: "[Blocked click]",
    XWbLM: function (h) {
      return h();
    }
  };
  c.XWbLM(e);
  const f = [/https?:\/\/loot-link\.com\/s\?/, /https?:\/\/loot-links\.com\/s\?/, /https?:\/\/lootlink\.org\/s\?/, /https?:\/\/lootlinks\.co\/s\?/, /https?:\/\/lootdest\.info\/s\?/, /https?:\/\/lootdest\.org\/s\?/, /https?:\/\/lootdest\.com\/s\?/, /https?:\/\/links-loot\.com\/s\?/, /https?:\/\/linksloot\.net\/s\?/, /^https:\/\/check-whitelist\.vercel\.app\/updates\/userscript\//, /^https:\/\/bacon-userscript\.onrender\.com\/updates\/userscript\//];
  const g = window.location.href;
  if (!f.some(h => h.test(g))) {
    return;
  }
  GM_addElement("script", {
    textContent: "\n        window.open = function(url, name, specs) {\n          console.log('[Blocked window.open]', url);\n          return null;\n        };\n        history.pushState = history.replaceState = function(){};\n      "
  });
  document.addEventListener("click", function (i) {
    let j = i.target.closest(c.vuUkJ);
    if (!j) {
      return;
    }
    if (j.href || j.getAttribute(c.yVTXJ)) {
      i.stopImmediatePropagation();
      i.preventDefault();
      console.log(c.ZFpaD, j.href || j);
    }
  }, true);
})();
async function a0af() {
  const b = {
    FqyUx: function (l, m) {
      return l - m;
    },
    EynSC: function (l, m) {
      return l / m;
    },
    ybWPs: function (l, m) {
      return l + m;
    },
    Mrziz: function (l, m) {
      return l < m;
    },
    biYEd: "Invalid URL, falling back to direct redirect",
    NDiAL: "XtYxQ",
    oHiTz: "vRnqQ",
    rblse: function (l, m) {
      return l > m;
    },
    IQKHN: "nb-notification",
    srcSw: "nb-title",
    KifWM: "nb-message",
    rqPVQ: "nb-close",
    KQlaX: "&times;",
    EmnPk: "div",
    utbnu: function (l, m) {
      return l(m);
    },
    gkPdL: "mouseenter",
    kmUEQ: "nb-container",
    vqMdH: "#A3D9A5",
    npHmm: "#FDECEA",
    oBiPD: "#F5C6CB",
    tzGLu: "#AECBFA",
    BrACZ: "#1558D6",
    VVOtk: "#FFD59E",
    tCTQa: "#FF8F00",
    aAzbL: "style"
  };
  const c = [/recaptcha/, /hcaptcha-challenge/, /checkbox/, /captcha/];
  const d = window.location.href;
  const e = c.some(l => l.test(d));
  if (e) {
    return;
  }
  const f = document.createElement(b.EmnPk);
  f.className = b.kmUEQ;
  document.body.appendChild(f);
  const g = 3000;
  const h = {
    success: {
      bg: "#EDF7ED",
      border: b.vqMdH,
      text: "#2E7D32"
    },
    error: {
      bg: b.npHmm,
      border: b.oBiPD,
      text: "#C62828"
    },
    info: {
      bg: "#E8F0FE",
      border: b.tzGLu,
      text: b.BrACZ
    },
    warning: {
      bg: "#FFF4E5",
      border: b.VVOtk,
      text: b.tCTQa
    }
  };
  const i = document.createElement(b.aAzbL);
  i.textContent = "\n    .nb-container {\n      position: fixed; top: 20px; right: 20px;\n      display: flex; flex-direction: column; gap: 10px;\n      z-index: 9999;\n    }\n    .nb-notification {\n      position: relative;\n      min-width: 250px; max-width: 320px;\n      padding: 12px 16px 8px 16px;\n      border: 1px solid; border-radius: 6px;\n      box-shadow: 0 2px 6px rgba(0,0,0,0.1);\n      font-family: sans-serif; font-size: 14px;\n      overflow: hidden;\n      opacity: 0; transform: translateX(100%);\n      transition: transform 0.4s ease, opacity 0.4s ease;\n    }\n    .nb-notification.show {\n      opacity: 1; transform: translateX(0);\n    }\n    .nb-title { font-weight: bold; margin-bottom: 4px; }\n    .nb-message { line-height: 1.4; }\n    .nb-close {\n      position: absolute; top: 6px; right: 8px;\n      background: none; border: none; font-size: 16px;\n      cursor: pointer; color: inherit;\n    }\n    .nb-progress {\n      position: absolute; bottom: 0; left: 0;\n      height: 4px; background: rgba(0,0,0,0.1);\n    }\n  ";
  document.head.appendChild(i);
  function j({
    title = "",
    message = "",
    type = "info",
    duration = g
  } = {}) {
    const l = {
      qEvXz: function (z, A) {
        return z === A;
      },
      HAVIH: "oZMTp",
      arCOl: function (z, A) {
        return b.FqyUx(z, A);
      }
    };
    if (!h[type]) {
      type = "info";
    }
    const m = h[type];
    const n = document.createElement("div");
    n.className = b.IQKHN;
    n.setAttribute("role", "alert");
    n.style.background = m.bg;
    n.style.borderColor = m.border;
    n.style.color = m.text;
    if (title) {
      const z = document.createElement("div");
      z.className = b.srcSw;
      z.textContent = title;
      n.appendChild(z);
    }
    const o = document.createElement("div");
    o.className = b.KifWM;
    o.innerHTML = message;
    n.appendChild(o);
    const p = document.createElement("button");
    p.className = b.rqPVQ;
    p.innerHTML = b.KQlaX;
    p.onclick = () => y();
    n.appendChild(p);
    const q = document.createElement(b.EmnPk);
    q.className = "nb-progress";
    q.style.width = "100%";
    n.appendChild(q);
    f.appendChild(n);
    b.utbnu(requestAnimationFrame, () => n.classList.add("show"));
    const r = duration;
    let s = duration;
    let t = Date.now();
    let u;
    let v;
    function w() {
      const A = b.FqyUx(Date.now(), t);
      const B = Math.max(0, b.EynSC(s - A, r) * 100);
      q.style.width = b.ybWPs(B, "%");
      if (b.Mrziz(A, s)) {
        u = requestAnimationFrame(w);
      }
    }
    function x() {
      t = Date.now();
      v = setTimeout(y, s);
      u = requestAnimationFrame(w);
    }
    function y() {
      clearTimeout(v);
      cancelAnimationFrame(u);
      n.classList.remove("show");
      n.addEventListener("transitionend", () => n.remove());
    }
    n.addEventListener(b.gkPdL, () => {
      if (l.qEvXz(l.HAVIH, l.HAVIH)) {
        clearTimeout(v);
        cancelAnimationFrame(u);
        s -= l.arCOl(Date.now(), t);
      } else {
        b.warn("Request already sent, skipping duplicate call.");
        return null;
      }
    });
    n.addEventListener("mouseleave", () => {
      const A = {
        rByCs: "url",
        DZlsK: b.biYEd
      };
      if (b.NDiAL !== b.oHiTz) {
        if (b.rblse(s, 0)) {
          x();
        }
      } else {
        const C = h.result;
        try {
          const D = new p(C);
          const E = D.searchParams.get(A.rByCs);
          if (E) {
            const F = s(E);
            t.location.href = F;
            return;
          }
        } catch (G) {
          v.warn(A.DZlsK, G);
        }
        n.location.href = o.result;
        return;
      }
    });
    x();
  }
  window.notify = j;
  window.notify({
    title: "🎉 Premium Userscript Loaded",
    message: "Made By Bacon But Pro",
    type: "success",
    duration: 4000
  });
}
async function a0ag() {
  const b = {
    AXYaN: "#updateHiddenUnlocks",
    AxMKT: function (d, e) {
      return d !== e;
    },
    MKVKM: "bRpvf",
    fOrPR: function (d, e) {
      return d === e;
    },
    JdqRD: "InLay",
    QQJGK: "No bypass URL found.",
    WdriD: "Unlock button not found on Sub2Get."
  };
  const c = document.querySelector(b.AXYaN);
  if (c) {
    if (b.AxMKT("yUceW", b.MKVKM)) {
      const d = c.href;
      if (d) {
        if (b.fOrPR("InLay", b.JdqRD)) {
          console.log("Bypass successful! Redirecting to: " + d);
          window.location.href = d;
        } else {
          e(f);
          g("Key " + h + " copied to clipboard!");
        }
      } else {
        console.log(b.QQJGK);
      }
    } else {
      throw new b("Failed to bypass");
    }
  } else if (b.AxMKT("MxmBZ", "MxmBZ")) {
    b("Could not locate the key element on this page.", "error");
  } else {
    console.log(b.WdriD);
  }
}
async function a0ah() {
  try {
    await a0be(1000);
    const c = document.querySelectorAll("script[type=\"application/json\"]");
    for (const d of c) {
      const e = JSON.parse(d.textContent);
      const f = e?.props?.pageProps?.sink?.data?.unlocked_link;
      if (f) {
        console.log("Bypass successful! Redirecting to:", f);
        window.location.href = f;
        return;
      }
    }
    console.error("Could not find the unlocked link in the page.");
  } catch (h) {
    console.error("An error occurred while bypassing Sub2Unlock:", h);
  }
}
async function a0ai() {
  const c = document.querySelector("#file");
  if (c) {
    c.removeAttribute("disabled");
    c.click();
  }
}
async function a0aj() {
  if (window.location.href.startsWith("https://sub4unlock.com/") || window.location.href.startsWith("https://sub4unlock.pro/")) {
    const c = document.getElementsByTagName("script");
    let d = null;
    let e = null;
    for (let f of c) {
      if (f.textContent.includes("function fun9()")) {
        const g = f.textContent.match(/window\.open\("([^"]*own=owner)"/);
        if (g) {
          d = g[1];
        }
      }
      if (f.textContent.includes("function fun2()")) {
        const h = f.textContent.match(/window\.open\(['"](.*?)['"]/);
        if (h) {
          e = h[1];
        }
      }
    }
    if (d) {
      console.log("Bypassing to fun9 URL:", d);
      window.location.href = d;
    } else if (e) {
      console.log("Bypassing to fun2 URL:", e);
      window.location.href = e;
    } else {
      console.warn("No bypass URL found. The script may have changed.");
    }
  } else {
    const j = document.querySelector(".linky.buttonpanel.disabled");
    if (j) {
      const l = j.href;
      if (l) {
        console.log("Bypassed link found:", l);
        window.location.href = l;
      } else {
        console.log("Unable to find the URL behind the locked link.");
      }
    } else {
      console.log("No locked links found on this page.");
    }
  }
}
async function a0ak() {
  await a0be(1000);
  const c = () => {
    let d = document.querySelectorAll("script");
    for (let e of d) {
      if (e.textContent.includes("var click_url")) {
        let f = e.textContent.match(/var\s+click_url\s*=\s*"([^"]+)"/);
        if (f && f[1]) {
          console.log("[Adfoc.us Bypasser] Redirecting to:", f[1]);
          window.location.href = f[1];
          return;
        }
      }
    }
    setTimeout(c, 50);
  };
  c();
}
async function a0al() {
  const b = {
    HhOto: "[ℹ] Offer completion not detected.",
    rMQaH: "onclick",
    FUDQk: "GET",
    fONyE: function (s, t) {
      return s !== t;
    },
    jvpkz: "undefined",
    nIENg: "Target5",
    JhreP: function (s, t) {
      return s === t;
    },
    rQhxa: "hsNUf",
    obryz: "URL:",
    SEFMZ: "Jbuiw",
    zxuzY: "Failed encrypted URL or ID.",
    gxawX: function (s, t, u) {
      return s(t, u);
    },
    gXDcB: "text/x-component",
    XhoAI: "406ce4d1d4c630e070cdf0a1f191132710a9198ba8",
    KGOYk: "text/plain;charset=UTF-8",
    gylHS: function (s, t) {
      return s(t);
    },
    fCXRT: "POST",
    jVvys: "40d7c3ca8e2e2d2ce234548ccabcc660cb2e576f1a",
    EFKZc: "Error: ",
    ErZoE: function (s, t) {
      return s(t);
    }
  };
  const c = window.location.href;
  while (!b.fONyE(typeof __next_f, b.jvpkz) || !__next_f.join().includes(b.nIENg)) {
    await new Promise(s => setTimeout(s, 500));
  }
  const d = __next_f.join();
  const e = d.match(/"coverImage":\s*(?:null|"[^"]*"),\s*"[^"]+":"([^"]+)"/);
  const f = d.match(/"data":\{"_id":"([^"]+)"/);
  const g = d.match(/"adDestination\\":\\"(.+?)\\",\\"targetUrls\\"/);
  if (g) {
    if (b.JhreP(b.rQhxa, b.rQhxa)) {
      const s = g[1];
      console.log(b.obryz, s);
      window.location.href = s;
      return;
    } else {
      b.log(b.HhOto);
    }
  }
  if (!e || !f) {
    if (b.SEFMZ !== "fifuq") {
      alert(b.zxuzY);
      return;
    } else {
      const v = c.getAttribute(b.rMQaH);
      if (v) {
        const w = v.match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
        if (w && w[1]) {
          const x = w[1];
          const y = x.startsWith("http") ? x : "https://krnl.cat" + x;
          f.location.href = y;
          return;
        }
      }
    }
  }
  const h = e[1];
  const i = f[1];
  const j = await b.gxawX(fetch, c, {
    method: "POST",
    headers: {
      Accept: b.gXDcB,
      "Next-Action": b.XhoAI,
      "Content-Type": b.KGOYk
    },
    body: JSON.stringify([i])
  });
  const l = await j.text();
  const m = l.match(/"token":"([^"]+)"/);
  if (!m) {
    return b.gylHS(alert, "Failed extract token.");
  }
  const n = m[1];
  const o = {
    adDestination: null,
    useAdDestination: null,
    unlockerId: i,
    requestToken: n,
    encryptedUrl: h
  };
  const p = await b.gxawX(fetch, c, {
    method: b.fCXRT,
    headers: {
      Accept: b.gXDcB,
      "Next-Action": b.jVvys,
      "Content-Type": b.KGOYk
    },
    body: JSON.stringify([o])
  });
  const q = await p.text();
  const r = q.match(/"url":"([^"]+)"/);
  if (r && r[1]) {
    const v = r[1];
    window.location.href = v;
  } else {
    const x = q.match(/"error":"([^"]+)"/);
    if (x) {
      alert(b.EFKZc + x[1]);
    } else {
      b.ErZoE(alert, "Failed final URL.");
    }
  }
}
async function a0am() {
  let c = window.location.href;
  if (c.startsWith("https://trigonevo.com/getkey/?hwid=")) {
    let e = c.split("hwid=")[1];
    let f = "https://pandadevelopment.net/getkey?service=trigon-evo&hwid=" + e + "&provider=linkvertise";
    window.location.href = f;
  }
}
async function a0an() {
  const c = window.location.href;
  if (c.includes("tapvietcode.com/blog/")) {
    const g = "\n        (function () {\n            function decodeBase64URI(str) {\n                try {\n                    return decodeURIComponent(atob(str));\n                } catch (e) {\n                    return null;\n                }\n            }\n\n            const originalJSONParse = JSON.parse;\n            JSON.parse = function () {\n                const result = originalJSONParse.apply(this, arguments);\n                try {\n                    if (result?.data?.lnk?.lnk1?.url) {\n                        const decoded = decodeBase64URI(result.data.lnk.lnk1.url);\n                        if (decoded && decoded.includes(\"link4m.com\")) {\n                            console.log(\"🔗 Redirecting to:\", decoded);\n                            window.location.href = decoded;\n                        }\n                    }\n                } catch (err) {\n                    console.warn(\"⚠️ Lỗi khi phân tích data.lnk:\", err);\n                }\n                return result;\n            };\n        })();\n        ";
    const h = document.createElement("script");
    h.textContent = g;
    document.documentElement.appendChild(h);
    h.remove();
    return;
  }
  const d = new URLSearchParams(window.location.search);
  const e = d.get("a");
  if (!e) {
    return;
  }
  const f = "https://link4sub.com/stu/" + e + "/fetch-data";
  fetch(f).then(i => i.json()).then(i => {
    try {
      const j = i?.data?.data?.lnk?.lnk1?.url;
      if (!j) {
        throw new Error("Không tìm thấy lnk1.url");
      }
      const l = decodeURIComponent(atob(j));
      console.log("✅ Redirecting to:", l);
      window.location.href = l;
    } catch (m) {
      console.error("🚫 Lỗi khi lấy link:", m);
    }
  }).catch(i => {
    console.error("🚫 Lỗi khi gọi API:", i);
  });
}
async function a0ao() {
  const b = {
    QCwfB: function (c, d) {
      return c(d);
    },
    CNBWK: function (c, d) {
      return c > d;
    },
    zmjhz: function (c, d) {
      return c - d;
    },
    SdbcY: function (c, d) {
      return c || d;
    },
    ucFXC: "input.m-8fb7ebe7.mantine-Input-input[readonly]",
    DDeyZ: function (c, d) {
      return c !== d;
    },
    OFZID: "uSfBA",
    GtepE: "onclick",
    CSxCb: "xbdId",
    tQDXt: "rqDWE",
    ZiZzM: "https://link-to.net/",
    RmUke: function (c, d) {
      return c === d;
    },
    HOlRZ: "AhADb",
    QMcnt: "YmuOM",
    grwxB: "TTgri",
    xDMVn: function (c, d, e) {
      return c(d, e);
    },
    xlXCs: "baconbutpro.onrender.com",
    pJNnO: function (c, d) {
      return c === d;
    },
    aZqJj: "lmYkL",
    rjpnZ: function (c) {
      return c();
    },
    Lsahm: "div.glass-light.bg-blue-600"
  };
  if (window.location.href.includes("https://trigonevo.fun/whitelist/?HWID=") || window.location.href.includes("https://trigonevo.fun/whitelist/index.php?HWID=")) {
    let c = document.querySelectorAll(b.Lsahm);
    c.forEach(async function (d) {
      const e = {
        CwaOK: function (f, g) {
          return b.QCwfB(f, g);
        },
        NPRXw: "transitionend",
        vmRlq: "You successfully got key!",
        aYMnl: b.ucFXC,
        lRqKq: function (f, g) {
          return b.QCwfB(f, g);
        },
        MzlCT: function (f, g, h) {
          return f(g, h);
        }
      };
      if (b.DDeyZ(b.OFZID, b.OFZID)) {
        aAJqHQ.QCwfB(b, "0");
      } else {
        let g = d.getAttribute(b.GtepE);
        if (g && g.includes("https://link-to.net")) {
          if (b.CSxCb !== "xbdId") {
            const l = b.CNBWK(b.zmjhz(e.outerWidth, f.innerWidth), 160);
            const m = b.CNBWK(g.outerHeight - h.innerHeight, 160);
            return b.SdbcY(l, m);
          } else {
            let i = /window\.location\.href='(.*?)'/;
            let j = i.exec(g);
            if (j && j[1]) {
              if (b.tQDXt === "ZbVMk") {
                h(i);
                e.CwaOK(j, l);
                m.classList.remove("show");
                n.addEventListener(e.NPRXw, () => p.remove());
              } else {
                let m = j[1];
                if (m.startsWith(b.ZiZzM)) {
                  m = m.replace("https://link-to.net/", "https://linkvertise.com/");
                  m = m.replace(/dynamic\/\?r=/, "dynamic?r=").concat("&o=sharing");
                }
                let n = null;
                const o = ["" + window.BaconButProAPI + m, "" + window.BaconButProAPI2 + m];
                for (let p of o) {
                  if (b.RmUke("AhADb", b.HOlRZ)) {
                    try {
                      if (b.QMcnt === b.QMcnt) {
                        let q = {};
                        if (p.includes("baconbutpro.onrender.com")) {
                          if (b.grwxB !== "JIIpO") {
                            q = {
                              headers: {
                                "x-api-key": "" + window.BaconButProKey
                              }
                            };
                          } else {
                            const u = c[1];
                            const v = u.startsWith("http") ? u : "https://krnl.cat" + u;
                            d.location.href = v;
                            return;
                          }
                        }
                        let r = await b.xDMVn(fetch, p, q);
                        let s = await r.json();
                        if (p.includes(b.xlXCs)) {
                          if (b.pJNnO(s.status, "success") && s.result) {
                            n = s.result;
                            break;
                          }
                        } else if (b.pJNnO(s.success, "true") && s.result) {
                          n = s.result;
                          break;
                        }
                      } else {
                        c = {
                          headers: {
                            "x-api-key": "" + d.BaconButProKey
                          }
                        };
                      }
                    } catch (w) {
                      console.error("Error with API: " + p, w);
                    }
                  } else if (g.documentElement.innerHTML.includes(e.vmRlq)) {
                    const y = n.querySelector(e.aYMnl);
                    if (y && y.value) {
                      const z = y.value.trim();
                      s(z);
                      e.lRqKq(t, "Key " + z + " copied to clipboard!");
                    } else {
                      e.MzlCT(u, "The key content is empty or not found.", "error");
                    }
                    r.disconnect();
                  }
                }
                if (n) {
                  if (b.DDeyZ(b.aZqJj, b.aZqJj)) {
                    if (e) {
                      const z = i.apply(j, arguments);
                      l = null;
                      return z;
                    }
                  } else {
                    window.location.href = n;
                  }
                } else {
                  console.error("All APIs failed to bypass the URL");
                  await b.rjpnZ(a0aY);
                }
              }
            }
          }
        }
      }
    });
  }
}
async function a0ap() {
  const b = {
    hBFea: "error",
    CarXa: "https://linkvertise.com/580726/fluxus",
    aknXh: function (c, d) {
      return c(d);
    },
    znuHP: function (c) {
      return c();
    },
    rRqXV: "div.space-y-2 h3.text-lg.font-medium.text-center.text-white",
    jenhl: function (c, d) {
      return c !== d;
    },
    NNVfO: function (c, d) {
      return c === d;
    },
    tUeLj: function (c, d) {
      return c !== d;
    },
    NbJul: "undefined",
    sQFuU: function (c, d) {
      return c(d);
    },
    kHzpo: "https://getkey.farrghii.com/check1.php",
    zdLLc: function (c, d) {
      return c === d;
    },
    jQecj: "FERKV",
    CLFyG: "https://getkey.farrghii.com/check2.php",
    ZSYOx: "sGJbL",
    oCyGd: "https://link-to.net",
    iofpp: function (c, d) {
      return c !== d;
    },
    qnCLI: "PAuWP",
    XFpHw: "WitjR",
    ZlOJQ: "a[href]",
    uMlsf: "ybaiW",
    VweiG: function (c, d) {
      return c(d);
    },
    dqwGs: "NlNxd",
    mZsyv: "Error decoding base64:",
    cFJEm: function (c, d) {
      return c !== d;
    },
    buKcB: "EKEcz",
    LpdCR: "XeDxs",
    TbojR: "Continue button not found on the page"
  };
  if (window.location.href.includes(b.kHzpo)) {
    if (b.zdLLc(b.jQecj, "nyDmO")) {
      c.location.href = d;
      return;
    } else {
      window.location.href = b.CLFyG;
    }
  } else if (window.location.href.includes("https://getkey.farrghii.com/check2.php")) {
    if (b.NNVfO("irSRL", b.ZSYOx)) {
      if (h.success && i.data && j.data.key) {
        const e = p.data.key;
        q(e);
        r("Key " + e + " copied to clipboard!");
      } else {
        s("Failed to retrieve the key from the API.", b.hBFea);
      }
    } else {
      let e = document.querySelector("a[href]");
      if (e) {
        if (e.href.includes(b.oCyGd)) {
          let f = new URL(e.href);
          let g = f.searchParams.get("r");
          if (g) {
            if (b.iofpp("YvwHO", "qJLrv")) {
              try {
                let h = atob(g);
                window.location.href = h;
              } catch (i) {
                if (b.NNVfO(b.qnCLI, b.qnCLI)) {
                  console.error("Error decoding base64:", i);
                } else {
                  c(d);
                }
              }
            } else {
              c.location.href = d.result;
            }
          } else if (b.XFpHw !== "WitjR") {
            b.location.href = b.CarXa;
          } else {
            console.error("Base64 parameter 'r' not found in URL");
          }
        } else {
          window.location.href = e.href;
        }
      } else {
        console.error("Continue button not found on the page");
      }
    }
  } else if (window.location.href.includes("https://getkey.farrghii.com/check3.php")) {
    let n = document.querySelector(b.ZlOJQ);
    if (n) {
      if (b.uMlsf === "ybaiW") {
        if (n.href.includes(b.oCyGd)) {
          if (b.iofpp("MVLgP", "XnPLb")) {
            let o = new URL(n.href);
            let p = o.searchParams.get("r");
            if (p) {
              try {
                let q = b.VweiG(atob, p);
                window.location.href = q;
              } catch (r) {
                if (b.jenhl(b.dqwGs, "GlfIo")) {
                  console.error(b.mZsyv, r);
                } else {
                  b.aknXh(b, "Same bypass detected, please retry.");
                  return;
                }
              }
            } else if (b.cFJEm(b.buKcB, "EKEcz")) {
              const u = {
                ZWJAp: function (w) {
                  return b.znuHP(w);
                }
              };
              const v = f.querySelectorAll(b.rRqXV);
              v.forEach(w => {
                if (w.innerText.includes("Verification Complete")) {
                  p++;
                  if (q >= 2) {
                    t.disconnect();
                    u.ZWJAp(u);
                  }
                }
              });
            } else {
              console.error("Base64 parameter 'r' not found in URL");
            }
          } else {
            if (b.jenhl(typeof o.a, "undefined")) {
              p.a = true;
            }
            if (b.tUeLj(typeof q.b, b.NbJul)) {
              r.b = true;
            }
            if (b.jenhl(typeof s.c, "undefined")) {
              t.c = true;
            }
            if (b.NNVfO(typeof u, "function")) {
              B();
            }
            if (b.NNVfO(typeof w, "function")) {
              C();
            }
            y();
            z(A);
          }
        } else {
          window.location.href = n.href;
        }
      } else {
        b.sQFuU(b, "Bypassed successfully");
        return;
      }
    } else if (b.tUeLj("zuyjK", b.LpdCR)) {
      console.error(b.TbojR);
    } else {
      b.style.animation = "shake 0.5s ease-in-out";
    }
  }
}
async function a0aq() {
  const b = {
    hayTg: "get_security request URL:",
    NbyNP: "rukNe",
    iTJSl: "get_security JSON data:",
    wgqUw: "Error in get_security:",
    HWqse: "https://krnl.cat/checkpoint/ios/c2",
    XzqWO: "[Adfoc.us Bypasser] Redirecting to:",
    NIBov: "https://loot-links.com/s?mK6Z",
    ymkVH: "https://mobile.codex.lol/?page=tasks",
    wjXab: "https://linkvertise.com/654032/codex-gateway-2",
    rQLGW: function (v, w, x) {
      return v(w, x);
    },
    SoNYp: "aWRsO",
    jwpmZ: function (v, w) {
      return v(w);
    },
    xjJBT: "Error decoding Base64 URL:",
    gPoEZ: "luarmor.net",
    gNewk: function (v, w) {
      return v === w;
    },
    uMpJz: "cdEia",
    hHtho: "LZvuO",
    tOfhW: "Metadata missing activeRevenueProfile or not success.",
    ZlZGt: "uPTYY",
    JrmlI: "Copy",
    jVRVy: function (v, w) {
      return v !== w;
    },
    jEWQT: function (v, w) {
      return v !== w;
    },
    HLLeq: "Fingerprint data collection error:",
    pEjtt: "empty",
    sxhtv: "BQLOE",
    ZlHPL: function (v) {
      return v();
    },
    waeke: "https://krnl.cat/checkpoint/ios/c4",
    bDQSD: function (v, w, x) {
      return v(w, x);
    },
    EHMDo: "Request already sent, skipping duplicate call.",
    HPcBE: "Final step URL:",
    FYLYr: "Fetched stream data:",
    BWFKD: "RXEep",
    FygSl: "Failed to fetch stream metadata:",
    ukSLR: "PUT",
    eYMue: function (v) {
      return v();
    },
    SoxDz: "performRequest JSON data:",
    bGvKN: "jthfD",
    duDEq: "fytHM",
    aBCPZ: "gOKgz",
    Culbt: "🚫 Lỗi khi lấy link:",
    LOewI: "Unexpected status response (branchDelta2):",
    lsPfE: function (v, w) {
      return v + w;
    },
    wzqQK: ".accessBtn",
    bebnI: "SQxbC",
    JRhTH: function (v, w, x) {
      return v(w, x);
    },
    dlDvo: "BaconButProAPI JSON data:",
    ZozjX: "success",
    vYDwZ: "http://",
    uhIOK: "yldGA",
    dlnwD: "Failed to get valid result from bypass API.",
    RQSkn: "uqeIK",
    OEzqq: "cFosn",
    WGqiP: "xzhUV",
    iZCHD: "hSAvt",
    oOcpC: function (v, w) {
      return v === w;
    },
    LavWV: "branchDelta status JSON data:",
    IuELH: "wUhQO",
    PzhOU: "KEY_NOT_FOUND",
    scJLP: function (v, w) {
      return v === w;
    },
    TkoUX: function (v, w) {
      return v !== w;
    },
    NbVIS: "jZGze",
    Rkkxu: "h3.font-semibold.tracking-tight.text-2xl.text-center",
    fessC: "lvnax",
    iBYUQ: function (v, w, x) {
      return v(w, x);
    },
    PRhqb: "PnQeq",
    Kzwtv: "Free session active, no bypass needed (branchDelta).",
    ammUu: "Djkam",
    aALNz: "Unexpected status response (branchDelta):",
    sljCl: "wtmgx",
    hwMSF: "branchDelta: serviceValue not found, skip step request.",
    jAbDl: "${window.location.host}",
    oMBBi: "[Bypass] Redirecting to Linkvertise with iwantbypass (Base64):",
    fqncn: "blacklisted",
    aweXP: "diPan",
    mhxjX: "branchDelta2 status raw response:",
    XjVKn: "branchDelta2 status JSON data:",
    gjaGR: function (v, w) {
      return v === w;
    },
    whmRP: "GVdpo",
    AlEQQ: "Create your key",
    uBkUz: "iqBgX",
    ZsgbJ: function (v, w, x) {
      return v(w, x);
    },
    vQoAs: "heNnp",
    ZQbxe: function (v, w) {
      return v !== w;
    },
    kweyz: "AuBxi",
    eklVl: "Invalid redirect URL in API response (branchDelta2).",
    KnUZL: "FREE_",
    FmkSN: "Free session active, no bypass needed (branchDelta2).",
    wzWXG: "iRNuN",
    utVHm: "eyJLW",
    IqWDm: "GrqCT",
    nsuRW: "Error in branchDelta2:",
    TgTJK: "The key content is empty or not found.",
    ktqrf: "AqeAI",
    VytUF: "branchDelta2: serviceValue not found, skip step request.",
    UpDCi: "dsXHR",
    UOfFR: "auth.platorelay.com",
    DeXQF: "auth.platoboost.net",
    rQcBx: "Metadata URL:"
  };
  const c = window.location.pathname.substring(1);
  async function d() {
    const v = window.location.hostname;
    const w = "https://" + v + "/api/security?ticket=" + c;
    console.log(b.hayTg, w);
    try {
      if (b.NbyNP !== b.NbyNP) {
        this.reset();
      } else {
        const y = await fetch(w, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (!y.ok) {
          throw new Error("HTTP error! status: " + y.status);
        }
        const z = await y.json();
        console.log(b.iTJSl, z);
        return z.data;
      }
    } catch (A) {
      console.log(b.wgqUw, A);
    }
  }
  const {
    clientside_delta: e
  } = others();
  const f = e;
  const g = window.location.hostname;
  let h;
  let i;
  let j;
  if (g === b.UOfFR) {
    h = "https://auth.platorelay.com/api/session/status?ticket=" + c;
    i = "https://auth.platorelay.com/api/session/metadata?ticket=" + c;
    j = "https://auth.platorelay.com/api/session/step?ticket=" + c + "&service=";
  } else if (g === b.DeXQF) {
    h = "https://auth.platoboost.net/api/session/status?ticket=" + c;
    i = "https://auth.platoboost.net/api/session/metadata?ticket=" + c;
    j = "https://auth.platoboost.net/api/session/step?ticket=" + c + "&service=";
  } else if (b.scJLP(g, "auth.platoboost.click")) {
    if (b.ZQbxe("JvdcT", "nHuNI")) {
      h = "https://auth.platoboost.click/api/session/status?ticket=" + c;
      i = "https://auth.platoboost.click/api/session/metadata?ticket=" + c;
      j = "https://auth.platoboost.click/api/session/step?ticket=" + c + "&service=";
    } else {
      b = b.HWqse;
    }
  } else {
    h = "https://auth.platoboost.com/api/session/status?ticket=" + c;
    i = "https://auth.platoboost.com/api/session/metadata?ticket=" + c;
    j = "https://auth.platoboost.com/api/session/step?ticket=" + c + "&service=";
  }
  const l = new URLSearchParams(window.location.search);
  const m = l.get("hash");
  if (m) {
    j += "&hash=" + m;
  }
  console.log(b.rQcBx, i);
  console.log("Status URL:", h);
  console.log("Step base URL (no service yet):", j);
  let n = false;
  function o(w) {
    if (b.SoNYp !== b.SoNYp) {
      let y = d.textContent.match(/var\s+click_url\s*=\s*"([^"]+)"/);
      if (y && y[1]) {
        g.log(b.XzqWO, y[1]);
        h.location.href = y[1];
        return;
      }
    } else {
      try {
        return b.jwpmZ(decodeURIComponent, atob(w).split("").map(y => "%" + ("00" + y.charCodeAt(0).toString(16)).slice(-2)).join(""));
      } catch (y) {
        console.error(b.xjJBT, y);
        return null;
      }
    }
  }
  async function p(w) {
    try {
      const x = await b.jwpmZ(fetch, w);
      console.log("fetchMetadata raw response:", x);
      const y = await x.json();
      console.log("fetchMetadata JSON data:", y);
      if (y.success && y.data && y.data.activeRevenueProfile) {
        if (b.gNewk(b.uMpJz, b.hHtho)) {
          if (e.src.includes("imprintprototype.com") || f.src.includes(b.gPoEZ) || g.src.includes("adnxs.com")) {
            i.remove();
          }
        } else {
          return y.data.activeRevenueProfile.service;
        }
      } else {
        console.warn(b.tOfhW);
        return null;
      }
    } catch (A) {
      console.error("Error fetching metadata:", A);
      return null;
    }
  }
  async function q(w, x) {
    const y = {
      kJLoW: "[ℹ] No modal appeared.",
      Toejk: function (z, A) {
        return z(A);
      },
      qIwPJ: function (z, A, B) {
        return b.bDQSD(z, A, B);
      },
      hCitq: "javascript:(function() { window.location.href = 'https://flux.li/android/external/main.php?hash={hash}'; })();"
    };
    if (n) {
      console.warn(b.EHMDo);
      return null;
    }
    n = true;
    const z = "" + w + x;
    console.log(b.HPcBE, z);
    let A = null;
    if (i) {
      try {
        A = await p("" + i + x);
        console.log(b.FYLYr, A);
      } catch (E) {
        if (b.BWFKD === "RXEep") {
          console.warn(b.FygSl, E);
        } else {
          c(d);
        }
      }
    } else {
      console.warn("No metadataUrl provided, skipping stream fetch.");
    }
    const B = await d();
    if (!B) {
      console.warn("Security data not found, aborting request.");
      return null;
    }
    const C = () => [() => ({
      name: "screen",
      data: {
        width: screen.width,
        height: screen.height,
        availWidth: screen.availWidth,
        availHeight: screen.availHeight,
        colorDepth: screen.colorDepth,
        pixelDepth: screen.pixelDepth,
        orientation: screen.orientation ? {
          type: screen.orientation.type,
          angle: screen.orientation.angle
        } : {
          type: "empty",
          angle: 0
        }
      }
    }), () => ({
      name: "navigator",
      data: {
        userAgent: navigator.userAgent,
        platform: navigator.platform || "empty",
        maxTouchPoints: navigator.maxTouchPoints || 0,
        plugins: navigator.plugins ? {
          length: navigator.plugins.length,
          item: Object.entries(navigator.plugins || []).map(H => {
            let I = H[1];
            return {
              name: I.name,
              filename: I.filename,
              description: I.description
            };
          })
        } : {
          length: 0,
          item: []
        },
        mimeTypes: navigator.mimeTypes ? {
          length: navigator.mimeTypes.length,
          item: Object.entries(navigator.mimeTypes || []).map(H => {
            if (b.ZlZGt !== "AEbfz") {
              let I = H[1];
              return {
                type: I.type,
                description: I.description,
                suffixes: I.suffixes
              };
            } else {
              return c(d.searchParams.get("r"));
            }
          })
        } : {
          length: 0,
          item: []
        }
      }
    }), () => ({
      name: "performance",
      data: Date.now()
    }), () => ({
      name: "history",
      data: {
        length: window.history.length
      }
    }), () => ({
      name: "webdriver",
      webdriver: navigator.webdriver || false
    }), () => ({
      name: "connection",
      data: navigator.connection ? {
        effectiveType: navigator.connection.effectiveType || "empty",
        downlink: navigator.connection.downlink || 0,
        rtt: navigator.connection.rtt || 0,
        saveData: navigator.connection.saveData || false
      } : {
        effectiveType: "empty",
        downlink: 0,
        rtt: 0,
        saveData: false
      }
    })].map(H => {
      const I = {
        aQNYj: b.JrmlI
      };
      try {
        if (b.jVRVy("vkSxG", "AlVKu")) {
          return H();
        } else {
          return true;
        }
      } catch (L) {
        if (b.jEWQT("cgeMF", "CNHDh")) {
          console.warn(b.HLLeq, L);
          return {};
        } else {
          let N = "https://pandadevelopment.net/getkey?hwid=" + g + "&service=" + h + "&checkpoints=" + i;
          if (j) {
            N += "&provider=" + n;
          }
          m.location.assign(N);
        }
      }
    });
    const D = (H, I, J) => {
      let K = b.pEjtt;
      try {
        if (b.jVRVy(b.sxhtv, "DmryO")) {
          let L = aesjs.utils.utf8.toBytes(H);
          let M = new aesjs.ModeOfOperation.ctr(I, J);
          let N = M.encrypt(L);
          K = aesjs.utils.hex.fromBytes(N);
        } else {
          b("The key content is empty or not found.", "error");
        }
      } catch (P) {
        console.error("Encryption failed:", P);
      }
      return K;
    };
    try {
      const H = await fetch(z, {
        method: b.ukSLR,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          captcha: null,
          meta: D(JSON.stringify({
            browserInfo: b.eYMue(C)
          }), c.substring(0, 16).split("").map(J => J.charCodeAt(0)), c.substring(16, 32).split("").map(J => J.charCodeAt(0))),
          reference: B.reference,
          payload: B.payload,
          stream: A
        })
      });
      console.log("performRequest raw response:", H);
      const I = await H.json();
      console.log(b.SoxDz, I);
      if (I.success) {
        if (b.bGvKN === b.duDEq) {
          b.location.href = y.hCitq;
        } else {
          return I;
        }
      } else if (b.aBCPZ !== "NoGfD") {
        console.warn("Request failed (no fallback).");
        return null;
      } else {
        b.ZlHPL(b);
      }
    } catch (L) {
      console.error("Error during performRequest:", L);
      return null;
    }
  }
  async function r(w) {
    const x = {
      VXleJ: b.wzqQK
    };
    if (!w) {
      return;
    }
    let y = w.data?.url || w.result;
    if (y) {
      if (b.jVRVy("UIIHE", "UIIHE")) {
        d.textContent = "Error fetching data";
        e.error(f);
      } else {
        if (y.includes("r=")) {
          if (b.jVRVy("cmtxT", "cmtxT")) {
            const C = [...b.querySelectorAll(x.VXleJ)];
            for (const D of C) {
              if (!D.classList.contains("disabled") && !D.hasAttribute("disabled")) {
                return D;
              }
            }
            return null;
          } else {
            const C = new URL(y);
            const D = C.searchParams.get("r");
            const E = o(D);
            if (E && (E.startsWith("https://") || E.startsWith("http://"))) {
              window.location.href = E;
              return;
            } else if (b.bebnI === "ZkRGk") {
              c.error(b.Culbt, d);
            } else {
              console.warn("Failed to decode redirect URL or invalid URL.");
            }
          }
        }
        const A = b.jwpmZ(encodeURIComponent, y);
        try {
          const G = await b.JRhTH(fetch, "" + window.BaconButProAPI + A, {
            method: "GET",
            headers: {
              "x-api-key": "" + window.BaconButProKey
            }
          });
          console.log("BaconButProAPI raw response:", G);
          const H = await G.json();
          console.log(b.dlDvo, H);
          if (b.gNewk(H.status, b.ZozjX) && (H.result.startsWith("https://") || H.result.startsWith(b.vYDwZ))) {
            window.location.href = H.result;
          } else if (b.gNewk(b.uhIOK, "FYFRR")) {
            c.error(b.LOewI, d);
          } else {
            alert(b.dlnwD);
          }
        } catch (J) {
          if (b.RQSkn === b.OEzqq) {
            g = "https://auth.platoboost.net/api/session/status?ticket=" + h;
            i = "https://auth.platoboost.net/api/session/metadata?ticket=" + j;
            l = "https://auth.platoboost.net/api/session/step?ticket=" + m + "&service=";
          } else {
            console.error("Error in processing BaconButProAPI:", J);
          }
        }
      }
    } else if (b.WGqiP !== "oXGWO") {
      console.warn("Redirect URL not found in the response data.");
    } else {
      (function () {
        return false;
      }).constructor(lRbWUH.lsPfE("debu", "gger")).apply("stateObject");
    }
  }
  async function s() {
    if (b.scJLP(b.sljCl, "wtmgx")) {
      const w = await p(i);
      if (!w) {
        console.warn(b.hwMSF);
        return;
      }
      setTimeout(async () => {
        if (b.jVRVy("LmblV", b.iZCHD)) {
          try {
            if (b.oOcpC("NTHWK", "NTHWK")) {
              const y = await fetch(h);
              console.log("branchDelta status raw response:", y);
              const z = await y.json();
              console.log(b.LavWV, z);
              if (z.success === true) {
                if (b.IuELH !== "DPhnq") {
                  const A = z.data?.key;
                  if (A === b.PzhOU && b.scJLP(z.data?.minutesLeft, 0)) {
                    if (b.TkoUX(b.NbVIS, "XweFh")) {
                      const B = document.querySelector(b.Rkkxu);
                      if (B && B.textContent.includes("Create your key")) {
                        if (b.fessC !== "QjUHI") {
                          console.log("Found 'Create your key' message (branchDelta), reloading the page.");
                          await q(j, w);
                          window.location.reload();
                        } else {
                          let D = d.split(".")[1];
                          D = e(D);
                          return f.parse(D);
                        }
                      } else {
                        const D = await b.iBYUQ(q, j, w);
                        await b.jwpmZ(r, D);
                      }
                    } else {
                      c.error("Error decoding r parameter: ", d);
                    }
                  } else if (A && A.startsWith("FREE_")) {
                    if (b.PRhqb === "PnQeq") {
                      console.log(b.Kzwtv);
                    } else {
                      d.textContent = "✅ Copied!";
                      e(() => g.textContent = "📋 Copy Key", 1500);
                    }
                  } else if (b.ammUu === "Djkam") {
                    console.error(b.aALNz, z);
                  } else {
                    e.log("[Linkify Bypass] Redirecting to:", f[0]);
                    g.location.href = h[0];
                    return;
                  }
                } else {
                  b.location.replace("https://loot-link.com/s?fJTE");
                }
              } else {
                console.error("Failed to fetch status (branchDelta):", z);
              }
            } else {
              g--;
              if (h > 0) {
                n.innerText = "We will automatically redirect you in " + o + " seconds...";
              } else {
                p(q);
              }
            }
          } catch (J) {
            console.error("Error in branchDelta:", J);
          }
        } else {
          c.location.assign(d.href);
          return;
        }
      }, 4250);
    } else {
      b.style.boxShadow = "0 0 8px rgba(76, 175, 80, 0.7)";
    }
  }
  async function t() {
    const w = {
      CnGvI: "targeturl",
      Fucca: function (x, y) {
        return x(y);
      },
      zvJmq: function (x, y, z) {
        return x(y, z);
      },
      xsYJM: b.TgTJK,
      BOeXu: "error",
      LPMNo: "Failed to retrieve the key from the API."
    };
    const x = await p(i);
    if (!x) {
      if (b.ZQbxe("AqeAI", b.ktqrf)) {
        j.log("[Bypass] Continue() found. Processing redirect...");
        const z = l.match(/linkvertise_redirect\s*\(\s*\d+\s*,\s*`([^`]+)`\s*\)/);
        if (z && z[1]) {
          t = z[1].replace(b.jAbDl, u.location.host);
          const A = v(w);
          const E = "https://linkvertise.com/?iwantbypass=" + A;
          x.log(b.oMBBi, E);
          if (y.location.href !== E) {
            A.location.href = E;
          }
        }
      } else {
        console.warn(b.VytUF);
        return;
      }
    }
    setTimeout(async () => {
      const z = {
        wguYu: b.fqncn,
        QbQKi: "Fallback API response doesn't contain a valid URL or URL is detected.",
        epvJg: "Bypass error:"
      };
      if (b.aweXP !== b.aweXP) {
        if (e) {
          const B = i.apply(j, arguments);
          l = null;
          return B;
        }
      } else {
        try {
          if (b.scJLP("eaMjj", "eaMjj")) {
            const B = await fetch(h);
            console.log(b.mhxjX, B);
            const C = await B.json();
            console.log(b.XjVKn, C);
            if (C.success === true) {
              if (b.gjaGR("GVdpo", b.whmRP)) {
                const D = C.data?.key;
                if (D === b.PzhOU && b.gNewk(C.data?.minutesLeft, 0)) {
                  const E = document.querySelector("h3.font-semibold.tracking-tight.text-2xl.text-center");
                  if (E && E.textContent.includes(b.AlEQQ)) {
                    console.log("Found 'Create your key' message (branchDelta2), reloading the page.");
                    await q(j, x);
                    window.location.reload();
                  } else if (b.gNewk("hlemg", b.uBkUz)) {
                    if (d.textContent.includes(w.CnGvI)) {
                      const G = g.textContent;
                      const H = /\\"targeturl\\":\\"(.+?)\\",\\"uid/;
                      const I = G.match(H);
                      if (!I || !I[1]) {
                        return;
                      }
                      const J = I[1];
                      h.location.href = J;
                      return;
                    }
                  } else {
                    const G = await b.ZsgbJ(q, j, x);
                    if (G && G.data && G.data.url && (G.data.url.startsWith("https://") || G.data.url.startsWith(b.vYDwZ))) {
                      if (b.vQoAs !== "FCCXU") {
                        window.location.href = G.data.url;
                      } else {
                        const I = f.querySelector("input.m-8fb7ebe7.mantine-Input-input[readonly]");
                        if (I && I.value) {
                          const J = I.value.trim();
                          w.Fucca(l, J);
                          m("Key " + J + " copied to clipboard!");
                        } else {
                          w.zvJmq(n, w.xsYJM, w.BOeXu);
                        }
                        j.disconnect();
                      }
                    } else if (b.ZQbxe("AuBxi", b.kweyz)) {
                      b = "https://krnl.cat/checkpoint/ios/getkey";
                    } else {
                      console.warn(b.eklVl);
                    }
                  }
                } else if (D && D.startsWith(b.KnUZL)) {
                  console.log(b.FmkSN);
                } else if (b.gjaGR("iRNuN", b.wzWXG)) {
                  console.error(b.LOewI, C);
                } else {
                  c.warn(z.QbQKi);
                  throw new d("Fallback API response doesn't contain a valid URL or URL is detected");
                }
              } else {
                b.error("No 'cc' parameter found in the URL.");
              }
            } else {
              console.error("Failed to fetch status (branchDelta2):", C);
            }
          } else {
            w.zvJmq(b, w.LPMNo, "error");
          }
        } catch (N) {
          if (b.scJLP(b.utVHm, b.IqWDm)) {
            c.error(z.epvJg, d);
          } else {
            console.error(b.nsuRW, N);
          }
        }
      }
    }, 750);
  }
  async function u() {
    if (f) {
      if (b.UpDCi === "dsXHR") {
        await b.ZlHPL(s);
      } else {
        const x = d.apply(e, arguments);
        f = null;
        return x;
      }
    } else {
      await b.ZlHPL(t);
    }
  }
  u();
}
async function a0ar() {
  const b = {
    YZyai: "YKBrz",
    DYEfs: function (g, h) {
      return g(h);
    },
    yNfhg: "drHCn",
    eKORw: "window.location.href",
    gbIkY: "kUjTL",
    qUdLr: "[Bypass] Continue() found. Processing redirect...",
    DlwfK: "${window.location.host}",
    xwywS: "[Bypass] Redirecting to Linkvertise with iwantbypass (Base64):",
    DetMy: function (g, h) {
      return g !== h;
    }
  };
  let c = null;
  function d(g) {
    if (b.YZyai !== "nLMgO") {
      return b.DYEfs(btoa, g);
    } else {
      b.log("Free session active, no bypass needed (branchDelta).");
    }
  }
  async function e() {
    try {
      if (b.yNfhg !== "hgLGO") {
        const g = Continue?.toString?.();
        if (g && g.includes("linkvertise_redirect") && g.includes(b.eKORw)) {
          if (b.gbIkY !== "kUjTL") {
            b.location.reload();
            return;
          } else {
            console.log(b.qUdLr);
            const i = g.match(/linkvertise_redirect\s*\(\s*\d+\s*,\s*`([^`]+)`\s*\)/);
            if (i && i[1]) {
              c = i[1].replace(b.DlwfK, window.location.host);
              const j = b.DYEfs(d, c);
              const l = "https://linkvertise.com/?iwantbypass=" + j;
              console.log(b.xwywS, l);
              if (b.DetMy(window.location.href, l)) {
                window.location.href = l;
              }
            }
          }
        }
      } else {
        c = d[1];
      }
    } catch (n) {
      console.warn("[Bypass] Continue function not available yet.");
    }
  }
  const f = new MutationObserver(() => {
    e();
  });
  f.observe(document, {
    childList: true,
    subtree: true
  });
  setTimeout(e, 1000);
}
async function a0as() {
  const c = window.location.href;
  if (c.startsWith("https://flux.li/android/external/start.php?HWID=")) {
    window.location.href = "https://linkvertise.com/580726/fluxus1";
  } else if (c.startsWith("https://flux.li/android/external/check1.php")) {
    window.location.href = "https://linkvertise.com/580726/fluxus";
  } else if (c === "https://linkvertise.com/580726/fluxus1") {
    window.location.href = "javascript:(function() { window.location.href = 'https://flux.li/android/external/check1.php?hash={hash}'; })();";
  } else if (c === "https://linkvertise.com/580726/fluxus") {
    document.body.innerHTML = "";
    const e = document.createElement("div");
    e.style.display = "flex";
    e.style.flexDirection = "column";
    e.style.justifyContent = "center";
    e.style.alignItems = "center";
    e.style.height = "100vh";
    e.style.backgroundColor = "#222";
    e.style.color = "#fff";
    e.style.textAlign = "center";
    document.body.appendChild(e);
    const f = document.createElement("p");
    f.textContent = "✨ Click the Bypass Button Below! ✨";
    f.style.fontSize = "2em";
    f.style.marginBottom = "20px";
    f.style.fontWeight = "bold";
    f.style.textShadow = "2px 2px 10px rgba(255, 255, 255, 0.6)";
    e.appendChild(f);
    const g = document.createElement("button");
    g.textContent = "🚀 Bypass Now! 🚀";
    g.style.padding = "15px 40px";
    g.style.fontSize = "1.5em";
    g.style.cursor = "pointer";
    g.style.backgroundColor = "#28a745";
    g.style.color = "#ffffff";
    g.style.border = "none";
    g.style.borderRadius = "10px";
    g.style.boxShadow = "0 4px 15px rgba(0, 255, 100, 0.5)";
    g.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
    g.onmouseover = function () {
      g.style.transform = "scale(1.1)";
      g.style.boxShadow = "0 6px 20px rgba(0, 255, 100, 0.8)";
    };
    g.onmouseout = function () {
      g.style.transform = "scale(1)";
      g.style.boxShadow = "0 4px 15px rgba(0, 255, 100, 0.5)";
    };
    g.onclick = function () {
      g.style.transform = "scale(0.9)";
      g.style.boxShadow = "0 2px 10px rgba(0, 255, 100, 0.8)";
      setTimeout(() => {
        window.location.href = "javascript:(function() { window.location.href = 'https://flux.li/android/external/main.php?hash={hash}'; })();";
      }, 200);
    };
    e.appendChild(g);
  }
}
async function a0at() {
  const b = {
    wiCTy: function (o, p) {
      return o(p);
    },
    amPxZ: function (o, p, q) {
      return o(p, q);
    },
    cMzyP: "dssbZ",
    QrPDR: function (o, p) {
      return o !== p;
    },
    ygCRJ: "POaeU",
    UOXPt: "https://api.codex.lol/v1/stage/stages",
    fOKwu: "hdAne",
    zBkiO: "zeoZS",
    mCJjP: "DJwUF",
    agSge: "Failed to get stages, please retry",
    sgzCx: function (o, p, q) {
      return o(p, q);
    },
    FTgqO: "lemIr",
    zdOFn: "Failed to initiate stage, retrying...",
    EXLKT: "https://api.codex.lol/v1/stage/validate",
    coPsg: "POST",
    zPbND: function (o, p) {
      return o === p;
    },
    jAIbC: "QGefm",
    nTaeP: "mNSzZ",
    WTPOO: "Failed to authenticate, retrying...",
    sNWbm: "0 4px 15px rgba(0, 255, 100, 0.5)",
    agCEU: function (o) {
      return o();
    },
    FICKA: function (o, p) {
      return o(p);
    },
    PISKG: "hash",
    hnBBZ: "bPFOU",
    AozGF: "nYEOs",
    zxFmB: function (o, p) {
      return o(p);
    },
    BiAjM: function (o, p) {
      return o == p;
    },
    MlOwR: "Bypassed successfully",
    byOil: "ZMZQt",
    ueiBb: "ZkqJK",
    yQqqM: function (o, p) {
      return o < p;
    },
    zbuuI: "taUcQ",
    Xzlkf: function (o, p, q) {
      return o(p, q);
    },
    oKfic: function (o, p) {
      return o(p);
    },
    xoXik: "loot-links",
    yXiqs: "https://loot-links.com/",
    YJoPr: "loot-link",
    nnGcF: "fpiIv",
    WBjFN: function (o, p, q) {
      return o(p, q);
    },
    DqTSG: function (o, p) {
      return o + p;
    }
  };
  let c;
  while (!c) {
    if (b.zPbND("VEPFh", b.AozGF)) {
      const p = d.apply(e, arguments);
      f = null;
      return p;
    } else {
      c = localStorage.getItem("android-session");
      await b.zxFmB(a0be, 2500);
    }
  }
  async function d(p, q, r = 3) {
    const s = {
      lcCDx: function (t, u) {
        return b.wiCTy(t, u);
      },
      Lmwvf: function (t, u, v) {
        return b.amPxZ(t, u, v);
      },
      AWIUc: "The key content is empty or not found."
    };
    if (b.cMzyP === "dssbZ") {
      for (let t = 0; t < r; t++) {
        try {
          return await b.wiCTy(p, ...q);
        } catch (u) {
          if (b.QrPDR(b.ygCRJ, "POaeU")) {
            const w = e.getAttribute("value");
            if (w) {
              s.lcCDx(i, w);
              s.lcCDx(j, "Key " + w + " copied to clipboard!");
            } else {
              s.Lmwvf(l, s.AWIUc, "error");
            }
          } else {
            if (t === r - 1) {
              throw u;
            }
            await b.wiCTy(a0be, 1000);
          }
        }
      }
    } else {
      throw new b("Primary API returned an invalid response");
    }
  }
  async function f() {
    let p = await b.amPxZ(fetch, b.UOXPt, {
      method: "GET",
      headers: {
        "Android-Session": c
      }
    });
    let q = await p.json();
    if (q.success) {
      if (b.QrPDR(b.fOKwu, "FIoRJ")) {
        if (q.authenticated) {
          if (b.zBkiO !== b.mCJjP) {
            return [];
          } else {
            c.log("✅ Access granted! Your IP is verified!");
            d.log("IP isWhitelisted using Primary checking.");
            return;
          }
        }
        return q.stages;
      } else {
        b.location.replace("https://loot-link.com/s?fJTD");
      }
    } else {
      a0ac.handleError(b.agSge);
      throw new Error("failed to get stages");
    }
  }
  async function g(p) {
    const q = {
      CFIMt: function (t, u, v) {
        return b.amPxZ(t, u, v);
      }
    };
    let r = await b.sgzCx(fetch, "https://api.codex.lol/v1/stage/initiate", {
      method: "POST",
      headers: {
        "Android-Session": c,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stageId: p
      })
    });
    let s = await r.json();
    if (s.success) {
      if (b.QrPDR(b.FTgqO, "IoLSo")) {
        return s.token;
      } else {
        q.CFIMt(b, "Could not locate the key input element on this page.", "error");
      }
    } else {
      a0ab.warning(b.zdOFn);
      throw new Error("failed to initiate stage");
    }
  }
  async function h(p, q) {
    let r = await fetch(b.EXLKT, {
      method: b.coPsg,
      headers: {
        "Android-Session": c,
        "Content-Type": "application/json",
        "Task-Referrer": q
      },
      body: JSON.stringify({
        token: p
      })
    });
    let s = await r.json();
    if (s.success) {
      return s.token;
    } else {
      a0ab.warning("Failed to validate stage, retrying...");
      throw new Error("failed to validate stage");
    }
  }
  async function i(p) {
    let q = await fetch("https://api.codex.lol/v1/stage/authenticate", {
      method: b.coPsg,
      headers: {
        "Android-Session": c,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tokens: p
      })
    });
    let r = await q.json();
    if (r.success) {
      if (b.zPbND(b.jAIbC, b.nTaeP)) {
        b.remove();
      } else {
        return true;
      }
    } else {
      a0ab.warning(b.WTPOO);
      throw new Error("failed to authenticate");
    }
  }
  function j(p) {
    let q = p.split(".")[1];
    q = b.wiCTy(a0bk, q);
    return JSON.parse(q);
  }
  let l = await b.sgzCx(d, f, []);
  let m = 0;
  while (localStorage.getItem(l[m]) && m < l.length) {
    m++;
  }
  if (b.BiAjM(m, l.length)) {
    return;
  }
  if (document?.getElementsByTagName("a")?.length && document.getElementsByTagName("a")[0].innerHTML.includes("Get started")) {
    document.getElementsByTagName("a")[0].click();
  }
  if (document?.querySelector(".text-md.text-gray-500.text-semibold.text-center")?.innerText.includes("You have been authenticated. Please proceed back to the application.")) {
    a0ab.success(b.MlOwR, {
      durations: {
        success: 0
      }
    });
    return;
  }
  let n = [];
  try {
    if (b.byOil === b.ueiBb) {
      c.location.href = d + "1&advertiser=linkvertise&OS=ios";
    } else {
      while (b.yQqqM(m, l.length)) {
        if (b.QrPDR(b.zbuuI, "hHyDG")) {
          let q = l[m].uuid;
          let r = await b.Xzlkf(d, g, [q]);
          await a0be(5700);
          let s = b.oKfic(j, r);
          let t;
          if (s.link.includes(b.xoXik)) {
            t = b.yXiqs;
          } else if (s.link.includes(b.YJoPr)) {
            t = "https://loot-link.com/";
          } else if (b.nnGcF === "fpiIv") {
            t = "https://linkvertise.com/";
          } else if (b.zPbND(i.origin, j.endpoint) && l.data.type === "turnstile-token") {
            r.removeEventListener("message", s);
            t.remove();
            u(v.data.token);
          }
          let u = await b.WBjFN(d, h, [r, t]);
          n.push({
            uuid: q,
            token: u
          });
          a0ab.info(b.DqTSG(m, 1) + "/" + l.length + " stages completed", 5000);
          m++;
        } else {
          b.agCEU(d);
          e();
          b.FICKA(f, "❌ Oops! Invalid API Key detected.<br>🔄 Please check your key and try again.");
        }
      }
      if (await d(i, [n])) {
        a0ab.success("Bypassed successfully", {
          durations: {
            success: 0
          }
        });
        await a0be(1000);
        window.location.reload();
      }
    }
  } catch (y) {
    setTimeout(() => {
      if (b.hnBBZ === "EPfNU") {
        d.searchParams.delete(b.PISKG);
        const A = y.toString();
        f.location.href = A;
        return;
      } else {
        window.location.reload();
      }
    }, 1000);
  }
}
async function a0au() {
  const b = {
    YLWij: "Unable to find the URL behind the locked link.",
    Fpjfz: function (p, q) {
      return p(q);
    },
    kXMkU: "Fallback API response invalid.",
    nCsUn: function (p, q) {
      return p === q;
    },
    leGXe: "qQXPN",
    wLrmf: "application/x-www-form-urlencoded",
    MKxGS: "Error parsing version data:",
    SBVcd: function (p, q) {
      return p === q;
    },
    ExyHf: function (p, q) {
      return p === q;
    },
    gDKZu: "xqYxq",
    nZGuM: "skWkc",
    xTZPL: "tZapP",
    tAHox: "YGZAi",
    LJpra: "YtoTj",
    pxYoz: function (p, q) {
      return p === q;
    },
    LcJjY: "Wwokl",
    bVETa: "HXKWD",
    TsxzA: function (p, q) {
      return p !== q;
    },
    DsGll: "AlPTa",
    hYqmI: "GET",
    VRnUO: "KJfQE",
    SzQWt: "Failed to retrieve ad link.",
    AsNfv: function (p) {
      return p();
    },
    aRTFi: "[Watchdog] DevTools opened",
    hcjhy: function (p, q) {
      return p(q);
    },
    slfSl: "RiXKw",
    YHDRY: "&url=",
    OUsZQ: "var click_url",
    dPmJC: "[Adfoc.us Bypasser] Redirecting to:",
    VFCCU: "Could not locate the key element on this page.",
    cNjXy: "HfpaP",
    kCkkG: function (p, q) {
      return p != q;
    },
    OVvfA: function (p, q) {
      return p + q;
    },
    lygiu: function (p, q) {
      return p + q;
    },
    lLfbQ: "return (function() ",
    fHOVL: "translateY(0)",
    VIqFW: function (p, q) {
      return p !== q;
    },
    PwRZg: "undefined",
    EzJjW: function (p, q) {
      return p !== q;
    },
    EMktx: function (p, q) {
      return p === q;
    },
    QIBoK: "function",
    CekWW: function (p) {
      return p();
    },
    HqQay: "WNOig",
    ePwOG: function (p) {
      return p();
    },
    apLPg: function (p) {
      return p();
    },
    FEgZN: function (p, q) {
      return p(q);
    },
    YmMmY: function (p, q) {
      return p === q;
    },
    hBqCV: "XYmTp",
    VfmMj: "Utaiq",
    HhQgN: "blacklisted",
    VgfsL: "Whitelist check failed:",
    jOiTJ: "jyuaH",
    ywUpu: ".g-recaptcha",
    fCPVk: "pointer",
    BFfjC: function (p, q, r) {
      return p(q, r);
    },
    sawjR: "Failed to elapse required time, session invalidated!",
    ZDxpB: "DrRnx",
    SMiXZ: "Token mismatch, session invalidated!",
    VuxOY: function (p, q) {
      return p === q;
    },
    TGWnm: "NtVRf",
    rYSyg: function (p) {
      return p();
    },
    IhBSp: "Please solve the captcha",
    fIkzT: function (p, q) {
      return p !== q;
    },
    BEFMq: "PjHNu",
    butTX: "h1.font-semibold.text-2xl span.gradient-text",
    TYxxw: "Congratulations 🎉",
    rXAhC: "you got the key",
    jBwPs: "Bypassed successfully",
    AKMtv: "form",
    SmduR: "24 Hours Key",
    LREhn: "48 Hours Key",
    ClrvF: "span.text-base.font-semibold",
    VhjAJ: "DuqLU",
    pmubP: "Please choose providers",
    CLKiu: "hwid",
    pqiiG: "service",
    yCITx: "sessiontoken",
    HXHPH: function (p, q, r, s) {
      return p(q, r, s);
    },
    Qofhy: "dfYjc",
    CLPCp: function (p, q) {
      return p(q);
    },
    pfgWq: "Stage completed",
    wJOHM: "HjBWt",
    xVaSR: "Bypass failed:",
    PWSae: function (p, q) {
      return p(q);
    }
  };
  let c = b.BFfjC(setInterval, h, 500);
  let d = b.BFfjC(setInterval, i, 500);
  if (document.body.innerText.includes(b.sawjR)) {
    if (b.ZDxpB === "CtRdR") {
      j--;
      if (l > 0) {
        t.textContent = "Please wait " + u + "s...";
      } else {
        v(w);
        x.remove();
        y.disabled = false;
        z.style.opacity = "1";
      }
    } else {
      a0bj("Bypassing too fast might get detected.\nPlease retry or connect to bacon.");
      return;
    }
  }
  if (document.body.innerText.includes(b.SMiXZ)) {
    if (b.VuxOY("NtVRf", b.TGWnm)) {
      a0bj("Same bypass detected, please retry.");
      return;
    } else {
      b.log(b.YLWij);
    }
  }
  if (b.rYSyg(m)) {
    b.FEgZN(a0bj, b.IhBSp);
    while (!n()) {
      if (b.fIkzT(b.BEFMq, "PjHNu")) {
        const s = c[1];
        d.location.href = s;
      } else {
        await a0be(1000);
      }
    }
  }
  if (document.querySelector(b.butTX)?.innerText.includes(b.TYxxw)) {
    b.FEgZN(a0bj, "Bypassed successfully");
    return;
  }
  if (document.documentElement.innerHTML.includes(b.rXAhC)) {
    a0bj(b.jBwPs);
    return;
  } else if (!document.getElementsByTagName(b.AKMtv).length) {
    let t = Array.from(document.querySelectorAll("a"));
    let u = ["Linkvertise", "Short Jambo"];
    let v = ["6 Hours Key", "12 Hours Key", b.SmduR, b.LREhn];
    for (let w of t) {
      let x = w.querySelector(b.ClrvF);
      let y = x ? x.textContent.trim() : "";
      if (v.includes(y)) {
        if (b.VhjAJ === "DuqLU") {
          a0bj(b.pmubP);
          return;
        } else {
          c.error("An error occurred while bypassing Sub2Unlock:", d);
        }
      } else if (u.includes(y)) {
        window.location.assign(w.href);
        return;
      }
    }
  }
  function f() {
    const A = {
      yVzIf: function (D, E) {
        return D >= E;
      },
      OcbUT: function (D) {
        return D();
      },
      OxeuZ: "Copied!",
      FgKlF: b.MKxGS,
      RYkBo: "Missing provider",
      SuqZq: function (D, E) {
        return D !== E;
      },
      TgkIQ: "pQjzQ",
      PniEK: function (D, E) {
        return b.SBVcd(D, E);
      },
      SnCza: function (D, E) {
        return b.ExyHf(D, E);
      },
      LIrVU: b.gDKZu,
      PNvbO: function (D, E, F) {
        return D(E, F);
      },
      bzchz: function (D, E) {
        return D(E);
      },
      xwReo: "success",
      jImpY: b.nZGuM,
      BzXWR: b.xTZPL,
      LWzlO: function (D, E) {
        return D(E);
      },
      niXjq: b.tAHox,
      Mkujt: b.LJpra,
      DJNQD: "iXORd",
      NuHZT: function (D, E) {
        return b.pxYoz(D, E);
      },
      ZlxHv: "QYFrE",
      zxyKM: b.LcJjY,
      grJef: b.bVETa,
      SdawL: function (D, E) {
        return b.TsxzA(D, E);
      },
      NWUVv: b.DsGll,
      XHxqb: function (D, E, F) {
        return D(E, F);
      },
      FGnER: b.hYqmI,
      eCgPq: function (D, E) {
        return b.pxYoz(D, E);
      },
      pZwvZ: function (D, E) {
        return D !== E;
      },
      kKlgl: "feLsS",
      tZHMJ: function (D, E) {
        return D(E);
      },
      TiNhk: "NpFga",
      CvhMu: "Primary API failed",
      oVIxo: b.VRnUO,
      MghnN: function (D, E) {
        return b.Fpjfz(D, E);
      },
      CtMVP: "Fallback API failed",
      kmgED: b.SzQWt,
      DXmpz: function (D, E) {
        return D(E);
      }
    };
    let B = document.getElementsByTagName("form")[0];
    let C = new FormData(B);
    return new Promise((D, E) => {
      const F = {
        HkIFp: function (G, H) {
          return b.Fpjfz(G, H);
        },
        fuopU: "onclick",
        kEvHG: b.kXMkU,
        CfNcC: function (G) {
          return G();
        }
      };
      if (b.nCsUn(b.leGXe, "lbjRs")) {
        if (f.innerText.includes("Verification Complete")) {
          l++;
          if (A.yVzIf(m, 2)) {
            p.disconnect();
            A.OcbUT(q);
          }
        }
      } else {
        GM.xmlHttpRequest({
          method: "POST",
          url: B.action,
          headers: {
            "Content-Type": b.wLrmf,
            Referer: window.location.href
          },
          data: new URLSearchParams(C),
          onload: async function (H) {
            const I = {
              CiPEp: "https://nicuse.xyz/getkey/check2.php",
              iSfYF: "POST",
              ZRZYp: "form",
              wnaEg: function (J, K) {
                return J(K);
              },
              xQGik: "Key copied to clipboard",
              NUqbz: A.OxeuZ,
              poLel: A.FgKlF,
              nAOFY: A.RYkBo,
              epfyf: "✅ Copied!",
              EyzGe: function (J, K, L) {
                return J(K, L);
              }
            };
            if (A.SuqZq("pQjzQ", A.TgkIQ)) {
              F.HkIFp(c, 500).then(() => {
                e.location.href = I.CiPEp;
              });
            } else if (A.PniEK(H.status, 200)) {
              let K = H.finalUrl;
              if (K.match(/^https:\/\/(loot-link\.com|loot-links\.com|lootlink\.org|lootlinks\.co|lootdest\.info|lootdest\.org|lootdest\.com|links-loot\.com|linksloot\.net)\/s\?.*/)) {
                try {
                  if (A.SnCza(A.LIrVU, "xqYxq")) {
                    let L = await A.PNvbO(fetch, "" + window.BaconButProAPI + A.bzchz(encodeURIComponent, K), {
                      method: "GET",
                      headers: {
                        "x-api-key": "" + window.BaconButProKey
                      }
                    });
                    let M = await L.json();
                    if (M.status === A.xwReo) {
                      if (A.jImpY === "uMfrl") {
                        let O = e.target.closest("a, button");
                        if (!O) {
                          return;
                        }
                        if (O.href || O.getAttribute(F.fuopU)) {
                          i.stopImmediatePropagation();
                          j.preventDefault();
                          l.log("[Blocked click]", O.href || O);
                        }
                      } else {
                        window.location.href = M.result;
                        return;
                      }
                    } else {
                      throw new Error("Primary API failed");
                    }
                  } else {
                    const P = {
                      BAZEW: I.iSfYF
                    };
                    const Q = g.getElementsByTagName(I.ZRZYp)[0];
                    const R = new h(Q);
                    return new i((S, T) => {
                      Q.xmlHttpRequest({
                        method: P.BAZEW,
                        url: Q.action,
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                          Referer: R.location.href
                        },
                        data: new p(R),
                        onload: U => S(U.finalUrl),
                        onerror: U => T(U)
                      });
                    });
                  }
                } catch (P) {
                  if (A.BzXWR !== "VWqJN") {
                    try {
                      let Q = await A.bzchz(fetch, "" + window.BaconButProAPI2 + A.LWzlO(encodeURIComponent, K));
                      let R = await Q.json();
                      if (R.success) {
                        if (A.niXjq !== A.Mkujt) {
                          window.location.href = R.result;
                          return;
                        } else {
                          throw new b(F.kEvHG);
                        }
                      } else if (A.DJNQD === "ssDYw") {
                        h.clipboard.writeText(i).then(() => {
                          I.wnaEg(p, I.xQGik);
                          q.innerText = I.NUqbz;
                          r(() => {
                            t.innerText = "Copy";
                          }, 2000);
                        }).catch(V => {
                          p.error("Error copying key to clipboard", V);
                        });
                      } else {
                        E("Fallback API failed");
                        return;
                      }
                    } catch (U) {
                      if (A.NuHZT(A.ZlxHv, A.zxyKM)) {
                        c.error(I.poLel, d);
                      } else {
                        E("Failed to fetch both primary and fallback APIs.");
                        return;
                      }
                    }
                  } else {
                    b.warning(I.nAOFY);
                    return;
                  }
                }
              } else if (A.NuHZT("DlGsO", A.grJef)) {
                b.warn("[✖] Final \"Go To Destination\" button not found.");
                return;
              } else {
                const Y = /^https:\/\/(linkvertise\.com|link-target\.net|link-center\.net|link-hub\.net|direct-link\.net)\/.+/;
                const Z = new URL(K);
                if (Y.test(K) && !Z.searchParams.has("r")) {
                  try {
                    if (A.SdawL(A.NWUVv, A.NWUVv)) {
                      f.clipboard.writeText(g).then(() => {
                        l.textContent = I.epfyf;
                        m(() => o.textContent = "📋 Copy Key", 1500);
                      });
                    } else {
                      await a0be(8000);
                      let a1 = await A.XHxqb(fetch, "" + window.BaconButProAPI + encodeURIComponent(K), {
                        method: A.FGnER,
                        headers: {
                          "x-api-key": "" + window.BaconButProKey
                        }
                      });
                      let a2 = await a1.json();
                      if (A.eCgPq(a2.status, "success")) {
                        if (A.pZwvZ(A.kKlgl, A.kKlgl)) {
                          d(() => {
                            g.location.replace(h.redirect);
                          }, 5000);
                        } else {
                          let a4 = A.tZHMJ(btoa, a2.result);
                          window.location.href = "https://linkvertise.com/?iwantbypass=" + a4;
                          return;
                        }
                      } else if (A.TiNhk === "NpFga") {
                        throw new Error(A.CvhMu);
                      } else {
                        F.CfNcC(c);
                        d();
                        return false;
                      }
                    }
                  } catch (a6) {
                    try {
                      let a7 = await A.tZHMJ(fetch, "" + window.BaconButProAPI2 + encodeURIComponent(K));
                      let a8 = await a7.json();
                      if (a8.success) {
                        if (A.oVIxo === "tYGkl") {
                          d = a6[f];
                        } else {
                          let aa = A.MghnN(btoa, a8.result);
                          window.location.href = "https://linkvertise.com/?iwantbypass=" + aa;
                          return;
                        }
                      } else {
                        E(A.CtMVP);
                        return;
                      }
                    } catch (ab) {
                      A.tZHMJ(E, "Failed to fetch both primary and fallback APIs.");
                      return;
                    }
                  }
                } else {
                  D(K);
                }
              }
            } else {
              E(A.kmgED);
            }
          },
          onerror: async function (H) {
            A.DXmpz(E, H);
          }
        });
      }
    });
  }
  function g(A) {
    let B = new URL(b.hcjhy(encodeURI, A));
    switch (B.hostname) {
      case "linkvertise.com":
        {
          return atob(B.searchParams.get("r"));
        }
      case "short-jambo.com":
        {
          if (b.slfSl === b.slfSl) {
            return B.search.split(b.YHDRY)[1];
          } else if (b.AsNfv(g)) {
            if (!n) {
              r.warn(b.aRTFi);
              s = true;
            }
            b.AsNfv(q);
          } else {
            t = false;
          }
        }
      default:
        {
          if (new URL(window.location.href).searchParams.get("provider")) {
            return false;
          }
        }
    }
  }
  function h() {
    const A = {
      HDeCc: function (B, C, D) {
        return B(C, D);
      },
      ewlyG: b.VFCCU,
      RAXaA: "error"
    };
    if (b.cNjXy !== b.cNjXy) {
      let C = f.querySelectorAll("script");
      for (let D of C) {
        if (D.textContent.includes(b.OUsZQ)) {
          let E = D.textContent.match(/var\s+click_url\s*=\s*"([^"]+)"/);
          if (E && E[1]) {
            r.log(b.dPmJC, E[1]);
            s.location.href = E[1];
            return;
          }
        }
      }
      i(j, 50);
    } else {
      try {
        let C = document.getElementsByClassName("adblock_title")[0];
        while (b.kCkkG(C.parentElement, document.body)) {
          C = C.parentElement;
        }
        C.remove();
        clearInterval(c);
      } catch (E) {}
    }
  }
  function i() {
    'use strict';

    const A = {
      CLVJr: b.fHOVL
    };
    try {
      if (b.VIqFW(typeof window.a, b.PwRZg)) {
        window.a = true;
      }
      if (b.EzJjW(typeof window.b, b.PwRZg)) {
        window.b = true;
      }
      if (b.VIqFW(typeof window.c, b.PwRZg)) {
        window.c = true;
      }
      if (b.EMktx(typeof closeModal, b.QIBoK)) {
        b.CekWW(closeModal);
      }
      if (typeof checkAndDisplayForm === "function") {
        if (b.VIqFW("qTvzU", b.HqQay)) {
          b.ePwOG(checkAndDisplayForm);
        } else {
          let C;
          try {
            C = e(RtOnYK.OVvfA(RtOnYK.lygiu(RtOnYK.lLfbQ, "{}.constructor(\"return this\")( )"), ");"))();
          } catch (D) {
            C = g;
          }
          return C;
        }
      }
      b.apLPg(j);
      b.FEgZN(clearInterval, d);
    } catch (D) {}
  }
  function j() {
    if (b.YmMmY(b.hBqCV, b.VfmMj)) {
      c.log("[🖱️] Manual click → original button");
      d.click();
    } else {
      const B = document.querySelector("#subscribeModal");
      if (B) {
        B.style.display = "none";
      }
    }
  }
  window.addEventListener("load", function () {
    setTimeout(i, 500);
  });
  const l = new MutationObserver(j);
  l.observe(document.body, {
    childList: true,
    subtree: true
  });
  function m() {
    if (b.EMktx("yMkVy", b.jOiTJ)) {
      i.error(b.VgfsL, j);
      if (l.message === "not whitelisted" || m.message === b.HhQgN) {
        throw r;
      }
      o.clear();
      p();
      throw q;
    } else {
      return document.querySelector(".g-recaptcha");
    }
  }
  function n() {
    if (document.querySelector(b.ywUpu) && document.querySelector(".g-recaptcha-response").value) {
      return true;
    }
    return false;
  }
  if (document.getElementById("cf-turnstile")) {
    await a0bh();
  }
  if (document.querySelector(".h-captcha") || document.querySelector(".h-captcha[style=\"display: none;\"]")) {
    await a0ac.getHcaptchaResponse();
  }
  const o = {
    vegax: 11000,
    laziumtools: 11000,
    adelhub: 11000,
    neoxkey: 14000,
    infinix: 11000,
    beeconhub: 11000,
    nilhubreborn: 14000,
    evon: 11000,
    mikeyhubreal: 11000,
    goombahub1: 11000,
    eruditehub: 11000,
    rua: 11000,
    askien: 11000,
    spectrum: 11000,
    rinnshubv1: 11000,
    argon: 11000,
    elgatohub: 11000,
    omg190: 16000
  };
  try {
    let A = new URL(window.location.href);
    let B = A.searchParams.get(b.CLKiu);
    let C = A.searchParams.get(b.pqiiG);
    let D = A.searchParams.get(b.yCITx);
    let E = A.searchParams.get("provider");
    let F = A.searchParams.get("checkpoints") || 1;
    let G = await b.HXHPH(f, B, C, D);
    let H = g(G);
    if (!H) {
      let L = "https://pandadevelopment.net/getkey?hwid=" + B + "&service=" + C + "&checkpoints=" + F;
      if (E) {
        if (b.Qofhy !== "fvmxT") {
          L += "&provider=" + E;
        } else {
          h(i);
          j.innerText = "You may now redirect.";
          l = true;
          m.disabled = false;
          n.style.cursor = b.fCPVk;
          o.style.backgroundColor = "rgba(0, 128, 0, 0.9)";
        }
      }
      window.location.assign(L);
    }
    let I = 3000;
    Object.keys(o).forEach(N => {
      if (C == N) {
        I = o[N];
      }
    });
    await b.CLPCp(a0be, I);
    await a0bf(H);
    b.Fpjfz(a0bj, b.pfgWq);
    let J = new URL(H);
    D = J.searchParams.get(b.yCITx);
    let K = "https://pandadevelopment.net/getkey?hwid=" + B + "&service=" + C + "&sessiontoken=" + D + "&checkpoints=" + F;
    if (E) {
      if (b.wJOHM !== "HjBWt") {
        return;
      } else {
        K += "&provider=" + E;
      }
    }
    window.location.assign(K);
  } catch (O) {
    console.error(b.xVaSR, O);
    await b.PWSae(a0be, 3000);
    await a0au();
  }
}
async function a0av() {
  const b = {
    ktvVD: "POST",
    fXpBg: "form",
    DVLJS: "disabled",
    BindK: "RC SOLVED",
    dqsCk: function (f, g) {
      return f(g);
    },
    ToDKG: function (f, g, h) {
      return f(g, h);
    },
    DLywh: "You successfully got key!",
    JMJmx: "Bypassed successfully",
    Pajkd: function (f, g) {
      return f === g;
    },
    hRTKm: "IlPcg",
    GEQUy: "HmtyI",
    wQNAz: "hwid",
    JJtmJ: "HWID not found!",
    lTksr: "https://linkvertise.com/",
    REaAD: "xYrzC",
    wqHMh: "vPEJR",
    VPdXo: function (f, g) {
      return f === g;
    },
    uQGoW: "LhfZh",
    eowuX: "GET",
    gmOxT: "true",
    kUybW: "https://",
    KOmJj: "http://",
    cuBAt: "LYrYr",
    IUqjg: "Stages completed",
    NLQov: function (f) {
      return f();
    },
    Tptud: "Both APIs returned no valid result.",
    zegOB: function (f, g) {
      return f !== g;
    }
  };
  async function c() {
    const f = document.getElementsByTagName(b.fXpBg)[0];
    const g = new FormData(f);
    return new Promise((h, i) => {
      GM.xmlHttpRequest({
        method: b.ktvVD,
        url: f.action,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: window.location.href
        },
        data: new URLSearchParams(g),
        onload: j => h(j.finalUrl),
        onerror: j => i(j)
      });
    });
  }
  if (document.documentElement.innerHTML.includes(b.DLywh)) {
    a0ab.success(b.JMJmx, {
      durations: {
        success: 0
      }
    });
    return;
  }
  const d = {
    project_nexus: 11000,
    "L-HUB": 11000,
    butif: 11000,
    KeySystemm: 6000,
    NilHub: 16000,
    RaitoHub: 16000,
    BonezHub: 16000
  };
  try {
    let f;
    let g;
    let h = new URL(window.location.href);
    try {
      if (b.Pajkd(b.hRTKm, b.GEQUy)) {
        c.removeAttribute(b.DVLJS);
        d.click();
      } else {
        f = h.pathname.split("/")[2];
        g = document.cookie.split("; ").filter(s => s.includes(f))[0].split("=")[1];
      }
    } catch (s) {
      g = h.searchParams.get(b.wQNAz);
      if (!g) {
        throw new Error(b.JJtmJ);
      }
    }
    const i = await c();
    if (i.startsWith(b.lTksr)) {
      if (b.REaAD !== "zVoWU") {
        let t = new URL(i).searchParams;
        let u = t.get("r");
        if (u) {
          if (b.wqHMh !== "mBhxR") {
            let v = d[f] || 10000;
            await a0be(v);
            let w = b.dqsCk(atob, u);
            let x = btoa(w);
            let y = "https://linkvertise.com/?iwantbypass=" + x;
            a0ab.info("Stages completed");
            window.location.href = y;
            await a0aw();
            return;
          } else {
            return;
          }
        }
      } else {
        c = true;
        d.log(b.BindK);
      }
    }
    let j = d[f] || 6000;
    await a0be(j);
    let l;
    const m = others();
    let n = m.fallback_api ? window.BaconButProAPI2 : window.BaconButProAPI;
    let o = m.fallback_api ? window.BaconButProAPI : window.BaconButProAPI2;
    const p = b.dqsCk(encodeURIComponent, i);
    const q = "" + n + p;
    try {
      let C;
      if (b.Pajkd(n, window.BaconButProAPI)) {
        C = await fetch(q, {
          method: "GET",
          headers: {
            "x-api-key": window.BaconButProKey
          }
        });
      } else {
        C = await fetch(q);
      }
      l = await C.json();
      if (!b.VPdXo(l.status, "success") && l.success !== "true" || !l.result) {
        throw new Error("First API response is invalid or empty.");
      }
    } catch (D) {
      a0ab.warning("First API failed or returned an empty result, trying fallback API...", D);
      try {
        const E = "" + o + p;
        let F;
        if (o === window.BaconButProAPI) {
          if (b.uQGoW === b.uQGoW) {
            F = await fetch(E, {
              method: b.eowuX,
              headers: {
                "x-api-key": window.BaconButProKey
              }
            });
          } else {
            c(d);
          }
        } else {
          F = await fetch(E);
        }
        l = await F.json();
        if (!b.VPdXo(l.status, "success") || l.success !== b.gmOxT || !l.result) {
          throw new Error("Fallback API response is invalid or empty.");
        }
      } catch (H) {
        throw new Error("All APIs failed.");
      }
    }
    if (l.result) {
      let J = l.result;
      if (!J.startsWith(b.kUybW) && !J.startsWith(b.KOmJj)) {
        if (b.cuBAt !== "polOl") {
          throw new Error("Failed to bypass");
        } else {
          b.location.reload();
        }
      }
      let K = btoa(J);
      let L = "https://linkvertise.com/?iwantbypass=" + K;
      a0ab.info(b.IUqjg);
      window.location.href = L;
      await b.NLQov(a0aw);
    } else {
      throw new Error(b.Tptud);
    }
  } catch (N) {
    if (b.zegOB("jWNzH", "jWNzH")) {
      c.log("Attempted Max Retries. Stopping the solver");
      d = true;
    } else {
      a0bd(N);
    }
  }
}
async function a0aw() {
  try {
    let c = new URL(window.location.href);
    if (!c.href.startsWith("https://linkvertise.com/?iwantbypass=")) {
      console.log("URL does not start with the required prefix. Exiting...");
      return;
    }
    let d = c.searchParams.get("iwantbypass");
    if (!d) {
      console.error("Encoded URL not found in query parameters.");
    }
    let f = atob(d);
    console.log("Decoded URL: " + f);
    if (f.startsWith("https://quartyz.dev/validate?t=")) {
      await a0be(2000);
    }
    window.location.href = f;
  } catch (g) {
    console.error("Failed to decode and redirect:", g);
    a0bd(g);
  }
}
a0aw();
async function a0ax() {
  function c(d) {
    return new Promise(e => setTimeout(e, d));
  }
  window.addEventListener("load", async function () {
    const d = {
      BkOBI: function (e, f) {
        return e(f);
      },
      doczQ: "Linkvertise",
      EeFnc: "6 Hours Key"
    };
    try {
      let e = false;
      const f = others();
      while (true) {
        console.log("Checking for button and URLs...");
        await c(2000);
        const h = document.getElementById("nextbtn");
        if (!h) {
          console.log("Button not found. Retrying...");
          continue;
        }
        const i = document.querySelector("button.btn.btn-success.btn-sm.mb-0.mx-1");
        if (i) {
          console.log("Bypass successfully!");
          a0ab.success("Bypassed successfully", {
            durations: {
              success: 0
            }
          });
          break;
        }
        const j = document.querySelector("button.btn.btn-sm.mb-0.btn-info");
        if (j) {
          console.log("Bypass successfully!");
          a0ab.success("Bypassed successfully", {
            durations: {
              success: 0
            }
          });
          break;
        }
        const l = document.querySelector("#nextbtn.btn-outline-success[style*='cursor: not-allowed']") && document.getElementById("nextbtn").innerHTML.includes("hourglass_bottom");
        if (l) {
          e = true;
          a0ab.warning("Please wait until the cooldown ends before starting bypass.");
          console.log("Cooldown detected. Waiting...");
          await c(5000);
          continue;
        } else {
          e = false;
        }
        const m = h.getAttribute("onclick");
        if (!m) {
          console.log("No onclick attribute found. Retrying...");
          continue;
        }
        const n = /'(https?:\/\/[^']+)'/g;
        const o = [];
        let p;
        while ((p = n.exec(m)) !== null) {
          o.push(p[1]);
        }
        if (o.length > 0) {
          console.log("URLs found in the onclick attribute, clicking the button instead of redirecting...");
          h.click();
        } else {
          console.log("No URLs found. Retrying...");
          continue;
        }
        await c(5000);
        console.log("Closing tab...");
        window.close();
        break;
      }
    } catch (v) {
      a0ac.handleError(v);
    }
  });
}
async function a0ay() {
  const b = {
    kBdyk: function (i, j) {
      return i > j;
    },
    IIORk: function (i, j, l) {
      return i(j, l);
    },
    FzljL: "hwid",
    ggjaT: "input#textToCopy",
    qTjKd: function (i, j) {
      return i(j);
    },
    CUUCM: ".error-message",
    cfHMb: "LOOTLABS_FAILED_",
    tziLQ: function (i, j) {
      return i === j;
    },
    JUqvE: "CAPTCHA_FAILED",
    VmLOJ: "pZVeT",
    xNjbk: "button",
    IohvQ: "https://krnl.cat/",
    UaFFB: "NJmhD",
    iwGtO: "http",
    CLKRP: function (i) {
      return i();
    },
    IRaQS: function (i, j) {
      return i !== j;
    },
    rxDQk: "KmkBp",
    wUihq: "nfemB"
  };
  const c = window.location.href;
  const d = new URL(c);
  const e = d.searchParams.get(b.FzljL);
  function f(i) {
    const j = i.split("?");
    let l;
    if (b.kBdyk(j.length, 1)) {
      l = j[0].split("/");
    } else {
      l = i.split("/");
    }
    const m = l[l.length - 1];
    return {
      lastPathSegment: m
    };
  }
  if (document.querySelector(b.ggjaT)) {
    a0ab.success("bypassed successfully", {
      durations: {
        success: 0
      }
    });
    return;
  }
  const g = b.qTjKd(f, c);
  if (g.lastPathSegment.match(/c[1-4]+/) && g.lastPathSegment.includes("hwid")) {
    window.location.href = "https://krnl.cat/checkpoint/reset-progress?hwid=" + e;
    return;
  }
  const h = document.querySelector(b.CUUCM);
  if (h && (h.innerHTML.includes(b.cfHMb) || h.innerHTML.includes("LINKVERTISE_FAILED"))) {
    const i = document.documentElement.innerHTML;
    const j = /const\s+redirect\s*=\s*['"]([^'"]+)['"]/;
    const l = i.match(j);
    if (l && l[1]) {
      if (b.tziLQ("xHqjw", "xHqjw")) {
        window.location.href = l[1];
        return;
      } else {
        c.location.replace(d + "2&advertiser=linkvertise&OS=ios");
      }
    }
  }
  if (h && h.innerHTML.includes(b.JUqvE)) {
    if (b.VmLOJ !== "pZVeT") {
      b.IIORk(b, "The key content is empty or not found.", "error");
    } else {
      const o = [...document.querySelectorAll(b.xNjbk)].find(p => p.innerText.includes("GO BACK"));
      if (o && c.startsWith(b.IohvQ)) {
        const p = o.getAttribute("onclick");
        if (p) {
          if (b.UaFFB === "ENpqE") {
            if (c.authenticated) {
              return [];
            }
            return d.stages;
          } else {
            const r = p.match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
            if (r && r[1]) {
              const s = r[1];
              const t = s.startsWith(b.iwGtO) ? s : "https://krnl.cat" + s;
              window.location.href = t;
              return;
            }
          }
        }
      }
    }
  }
  try {
    let u;
    if (document.getElementsByClassName("cf-turnstile").length > 0) {
      u = await b.CLKRP(a0bh);
    }
    await a0be(500);
    const v = Array.from(document.querySelectorAll("button")).find(w => w.textContent.trim() === "Next Checkpoint");
    if (v) {
      v.click();
    } else {
      console.warn("Next Checkpoint button not found!");
    }
  } catch (w) {
    if (b.IRaQS(b.rxDQk, b.wUihq)) {
      console.error(w);
    } else {
      b++;
    }
  }
}
async function a0az() {
  const b = {
    aZEWs: "Open button clicked in the success container!",
    tPemq: function (j, l, m) {
      return j(l, m);
    },
    yJnSZ: "div.text-center.mb-8.space-y-2 h1",
    cqYzV: function (j, l) {
      return j === l;
    },
    FYUeA: "ANrlz",
    fWWIn: "KSZZM",
    bFlFr: function (j, l) {
      return j(l);
    },
    BYcsu: "button",
    yctwQ: "https://krnl.cat/",
    mZhgU: "branchDelta: serviceValue not found, skip step request.",
    rdFWt: function (j, l) {
      return j * l;
    },
    BfjAC: function (j, l) {
      return j < l;
    },
    UTJNM: "&url=",
    tfXgh: function (j, l) {
      return j * l;
    },
    AZHMx: function (j, l) {
      return j(l);
    },
    XgjxT: "Choose Your Provider",
    JBhYR: "Please choose your Provider",
    XTdiQ: "Verification Complete",
    GbSEW: "TjHnY",
    IvSrY: "bypassed successfully",
    VYogi: "Expires in",
    lwJaw: function (j, l) {
      return j(l);
    },
    WiTvu: "providerId",
    bmxTz: "p.text-base.text-muted-foreground",
    rlDuy: "EQMMj",
    tALxc: "Missing provider",
    AcwVH: function (j, l) {
      return j !== l;
    },
    PdhKs: "PiHbj",
    kDhBR: "hash",
    xYAGe: "HTTP error! status: ",
    BJYWJ: "PlhHg",
    YsgUw: function (j, l) {
      return j + l;
    },
    fIXoD: "fAZzZ",
    VjbAx: "zzJKF",
    YdMsT: function (j, l) {
      return j(l);
    },
    WXWtL: "bypass started!",
    kvIwO: function (j, l, m) {
      return j(l, m);
    },
    wcfzt: function (j, l) {
      return j(l);
    },
    kEcXc: "WmOkE",
    pOPYY: function (j, l) {
      return j in l;
    },
    vogiO: "status",
    ydwbi: function (j, l) {
      return j !== l;
    },
    DPIqT: "tBxrq",
    EvDwM: "PQsNS",
    WiArp: "stages completed",
    tapip: function (j, l) {
      return j(l);
    },
    qnzIg: "Zqohi",
    rzCQZ: "QDbRJ",
    aGYWm: "Fallback API Response Status:",
    Uezce: "success",
    vJTiW: function (j, l) {
      return j !== l;
    },
    OaCbO: function (j, l) {
      return j !== l;
    },
    wAzfV: "PKKVU",
    oNhZy: "MISmA",
    pwcew: "Error"
  };
  let c = window.location.href;
  const d = new URL(c);
  const e = time_config();
  const f = b.tfXgh(e.keyguardian, 1000);
  let g = "";
  await b.AZHMx(a0be, 400);
  const h = document.querySelector(b.yJnSZ);
  if (h && h.textContent.includes(b.XgjxT)) {
    a0ab.warning(b.JBhYR);
    const j = b.tPemq(setInterval, () => {
      const l = {
        XArNm: ".open__button--inlay",
        OLNGh: b.aZEWs,
        adist: function (n, o, p) {
          return b.tPemq(n, o, p);
        },
        iJPWD: "Open button not found, retrying..."
      };
      const m = document.querySelector(b.yJnSZ);
      if (m && m.textContent.includes("Choose Your Provider")) {
        if (b.cqYzV(b.FYUeA, "iXFlc")) {
          const o = j.querySelector(l.XArNm);
          if (o) {
            o.click();
            t.log(l.OLNGh);
            l.adist(u, () => {
              x.log("Waiting 3 seconds before closing the webpage...");
              y.close();
            }, 3000);
          } else {
            x.log(l.iJPWD);
            l.adist(y, z, A);
          }
        } else {
          a0ab.warning("Please choose your Provider");
        }
      } else if (b.fWWIn === "KSZZM") {
        b.bFlFr(clearInterval, j);
      } else {
        throw new b("All APIs failed.");
      }
    }, 5000);
  }
  const i = document.querySelector("h3.text-lg.font-medium.text-center.text-white");
  if (i && i.textContent.includes(b.XTdiQ)) {
    if (b.GbSEW !== "HzzCj") {
      a0ab.success(b.IvSrY, {
        durations: {
          success: 0
        }
      });
    } else {
      e.click();
      f.log("First button clicked – bypass initiated!");
      g(h, 2000);
    }
  }
  if (!d.searchParams.get("providerId") && !document.body.textContent.includes(b.VYogi)) {
    while (!g) {
      try {
        c = window.location.href;
        const n = new URL(c);
        g = n.searchParams.get("providerId");
      } catch (o) {}
      await b.lwJaw(a0be, 700);
    }
  }
  try {
    c = window.location.href;
    const p = new URL(c);
    const q = p.pathname.split("/")[2];
    const r = p.searchParams.get("id");
    const s = p.searchParams.get(b.WiTvu);
    const t = p.searchParams.get("hash");
    if (!q) {
      a0ab.warning("Missing service id");
      return;
    } else if (!r) {
      a0ab.warning("Missing hwid");
      return;
    } else if (document.querySelector(b.bmxTz) && !s) {
      if (b.rlDuy === "EQMMj") {
        a0ab.warning(b.tALxc);
        return;
      } else {
        let y = b[1];
        return {
          name: y.name,
          filename: y.filename,
          description: y.description
        };
      }
    } else if (t) {
      if (b.AcwVH("LZzzC", b.PdhKs)) {
        p.searchParams.delete(b.kDhBR);
        const y = p.toString();
        window.location.href = y;
        return;
      } else {
        c.error("Error fetching version:", d.status);
        return;
      }
    }
    const u = await fetch("https://keyguardian.org/api/session/auth/" + q + "/" + s + "/" + r, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        captcha: "DISABLE",
        token: ""
      })
    });
    if (!u.ok) {
      console.error(b.xYAGe + u.status);
      return;
    }
    const v = await u.json();
    if (v.message && v.message.includes("Failed to find checkpoint")) {
      if (b.BJYWJ === "slAab") {
        c(d);
        return;
      } else {
        window.location.reload();
        return;
      }
    }
    const w = v.link;
    if (w.includes("link-to") || w.includes("linkvertise")) {
      const B = others();
      let C = B.fallback_api ? window.BaconButProAPI2 : window.BaconButProAPI;
      let D = B.fallback_api ? window.BaconButProAPI : window.BaconButProAPI2;
      const E = b.YsgUw(C, encodeURIComponent(w));
      try {
        if (b.fIXoD !== b.VjbAx) {
          await b.YdMsT(a0be, f);
          a0ab.info(b.WXWtL);
          let F;
          if (C === window.BaconButProAPI) {
            F = await b.kvIwO(fetch, E, {
              method: "GET",
              headers: {
                "x-api-key": window.BaconButProKey
              }
            });
          } else {
            F = await b.wcfzt(fetch, E);
          }
          console.log("Primary API Response Status:", F.status);
          if (!F.ok) {
            if (b.kEcXc === "cLGvy") {
              d(() => {
                g.location.href = h;
              }, 2000);
            } else {
              throw new Error("Primary API error: " + F.status);
            }
          }
          const G = await F.json();
          const H = G && (b.pOPYY(b.vogiO, G) ? G.status === "success" : true) && G.result;
          if (!H) {
            if (b.ydwbi(b.DPIqT, b.EvDwM)) {
              throw new Error("Primary API returned invalid data");
            } else {
              const L = [...d.querySelectorAll(b.BYcsu)].find(M => M.innerText.includes("GO BACK"));
              if (L && e.startsWith(b.yctwQ)) {
                const M = L.getAttribute("onclick");
                if (M) {
                  const N = M.match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
                  if (N && N[1]) {
                    const O = N[1];
                    const P = O.startsWith("http") ? O : "https://krnl.cat" + O;
                    i.location.href = P;
                    return;
                  }
                }
              }
            }
          }
          await a0ab.info(b.WiArp);
          await b.tapip(a0be, 1500);
          window.location.href = G.result;
          return;
        } else {
          b.warn(b.mZhgU);
          return;
        }
      } catch (M) {
        console.error("Primary API failed:", M);
        try {
          if (b.qnzIg !== b.rzCQZ) {
            const N = D + encodeURIComponent(w);
            let O;
            if (D === window.BaconButProAPI) {
              O = await fetch(N, {
                method: "GET",
                headers: {
                  "x-api-key": window.BaconButProKey
                }
              });
            } else {
              O = await b.AZHMx(fetch, N);
            }
            console.log(b.aGYWm, O.status);
            if (!O.ok) {
              throw new Error("Fallback API error: " + O.status);
            }
            const P = await O.json();
            const Q = P && (b.vogiO in P ? b.cqYzV(P.status, b.Uezce) : true) && P.result;
            if (Q) {
              if (b.vJTiW("kFnol", "gCTmV")) {
                await a0ab.info(b.WiArp);
                await a0be(1500);
                window.location.href = P.result;
                return;
              } else {
                const S = l.now() - m;
                const T = n.max(0, b.rdFWt((o - S) / p, 100));
                q.style.width = T + "%";
                if (b.BfjAC(S, r)) {
                  s = b.bFlFr(t, u);
                }
              }
            } else {
              await a0ab.warning("Bypass API Failed");
              window.location.href = w;
              return;
            }
          } else {
            c += "&provider=" + d;
          }
        } catch (T) {
          console.error("Fallback API failed:", T);
          await a0ab.warning("API Fetch Error");
          window.location.href = w;
          return;
        }
      }
    } else {
      window.location.href = w;
    }
  } catch (U) {
    if (b.OaCbO(b.wAzfV, b.oNhZy)) {
      console.error(b.pwcew, U);
    } else {
      return b.search.split(b.UTJNM)[1];
    }
  }
}
async function a0aA() {
  const b = {
    wmtZc: function (h, i) {
      return h(i);
    },
    hdzqD: function (h, i) {
      return h !== i;
    },
    MFZmb: function (h, i, j) {
      return h(i, j);
    },
    uKdwT: "https://arc-hub.xyz/key-system/checkverify",
    EXdmq: "POST",
    yTSMe: "application/json",
    etjVp: "✅ Key found:",
    VreDG: "Verification error:",
    iBvus: function (h) {
      return h();
    },
    bajNq: "bypassed successfully",
    HnUxB: "hwid",
    BJuUu: ".text-2xl.font-semibold",
    nnJpo: function (h, i) {
      return h === i;
    },
    CcfGO: function (h, i) {
      return h(i);
    },
    AJmzh: function (h) {
      return h();
    },
    HIHeZ: "iframe",
    iXSqP: "https://arc-hub.xyz/key-system/verify",
    dZyFt: "linkvertise",
    ziTjO: "Arc Hub verification failed.",
    fBcdC: "dAGAJ",
    rBXqH: function (h, i) {
      return h === i;
    },
    TcHqH: "GET",
    WzSLA: "nHskB",
    ugIZt: "success",
    txiiT: function (h, i) {
      return h === i;
    },
    BztXC: "true",
    EMeKl: "Primary API response invalid.",
    UYbDh: "Primary API failed, trying fallback...",
    WIxou: "EMWqc",
    nsQXT: function (h, i) {
      return h(i);
    },
    mPind: "Fallback API response invalid.",
    ZBfGl: "vVnJN",
    lKINK: "SSdLh",
    vYKBI: function (h, i) {
      return h !== i;
    },
    tGhkx: "OZsXH"
  };
  const c = new URL(window.location.href);
  const d = b.wmtZc(atob, c.searchParams.get(b.HnUxB) || "");
  if (!d) {
    return;
  }
  const f = async h => {
    const i = {
      FKdUM: function (j, l) {
        return b.wmtZc(j, l);
      },
      ALbrN: "Text copied to clipboard!"
    };
    while (!document.querySelector(h)) {
      if (b.hdzqD("xRmlC", "OlfRM")) {
        await new Promise(j => setTimeout(j, 100));
      } else {
        e.clipboard.writeText(f).then(() => {
          i.FKdUM(i, i.ALbrN);
        }).catch(l => {
          i.error("Failed to copy: ", l);
        });
      }
    }
  };
  const g = async () => {
    const h = {
      KBZsg: function (i, j) {
        return b.wmtZc(i, j);
      }
    };
    try {
      const i = await b.MFZmb(fetch, b.uKdwT, {
        method: b.EXdmq,
        headers: {
          "Content-Type": b.yTSMe
        },
        body: JSON.stringify({
          hwid: d,
          verifyId: "",
          hash: ""
        })
      });
      if (!i.ok) {
        return false;
      }
      const j = await i.json();
      const l = j.success;
      console.log(b.etjVp, l);
      return true;
    } catch (n) {
      console.error(b.VreDG, n);
      return false;
    }
  };
  if (!document.querySelector(b.BJuUu)) {
    if (b.nnJpo("XQRwb", "bvQce")) {
      return [];
    } else {
      await b.CcfGO(f, ".text-2xl.font-semibold");
    }
  }
  if (await b.AJmzh(g)) {
    return;
  }
  try {
    const i = document.querySelector(".flex.items-center.space-x-4.rounded-md.border.p-4");
    let j = "";
    if (i?.querySelector(b.HIHeZ)) {
      j = await a0ac.getHcaptchaResponse();
    }
    const l = await fetch(b.iXSqP, {
      method: "POST",
      headers: {
        "Content-Type": b.yTSMe
      },
      body: JSON.stringify({
        hcaptcha: j,
        hwid: d,
        type: b.dZyFt
      })
    });
    if (!l.ok) {
      throw new Error(b.ziTjO);
    }
    const m = await l.json();
    const n = m?.redirect;
    if (!n) {
      throw new Error("No adlink returned.");
    }
    const o = b.CcfGO(encodeURIComponent, n);
    const p = b.iBvus(others);
    const q = p.fallback_api ? window.BaconButProAPI2 : window.BaconButProAPI;
    const r = p.fallback_api ? window.BaconButProAPI : window.BaconButProAPI2;
    const s = "" + q + o;
    let t;
    try {
      if (b.fBcdC === "ilXfX") {
        const v = e.value.trim();
        if (v) {
          i(v);
          j("Key " + v + " copied to clipboard!");
        } else {
          l("The key content is empty or not found.", "error");
        }
      } else {
        let v;
        if (b.rBXqH(q, window.BaconButProAPI)) {
          v = await fetch(s, {
            method: b.TcHqH,
            headers: {
              "x-api-key": window.BaconButProKey
            }
          });
        } else if (b.hdzqD(b.WzSLA, "nHskB")) {
          b.iBvus(b);
        } else {
          v = await fetch(s);
        }
        t = await v.json();
        if (t.status !== b.ugIZt && !b.txiiT(t.success, b.BztXC) || !t.result) {
          throw new Error(b.EMeKl);
        }
      }
    } catch (x) {
      console.warn(b.UYbDh, x);
      try {
        if (b.WIxou !== "EMWqc") {
          c.location.replace(d.link.url);
        } else {
          const z = "" + r + o;
          let A;
          if (r === window.BaconButProAPI) {
            A = await fetch(z, {
              method: b.TcHqH,
              headers: {
                "x-api-key": window.BaconButProKey
              }
            });
          } else {
            A = await b.nsQXT(fetch, z);
          }
          t = await A.json();
          if (!b.nnJpo(t.status, "success") || t.success !== b.BztXC || !t.result) {
            throw new Error(b.mPind);
          }
        }
      } catch (D) {
        if (b.ZBfGl !== b.lKINK) {
          console.error("All APIs failed to bypass adlink:", D);
          return;
        } else {
          b.log("[ℹ] No YouTube step detected.");
        }
      }
    }
    window.location.href = t.result;
  } catch (F) {
    if (b.vYKBI(b.tGhkx, b.tGhkx)) {
      b.success(b.bajNq, {
        durations: {
          success: 0
        }
      });
    } else {
      console.error("Bypass error:", F);
    }
  }
}
async function a0aB() {
  const b = {
    auscG: "script[src]",
    UswfS: "czlsE",
    ygYHp: "✓ Task Completed!",
    idPaW: "RLQMt",
    DpfUx: "hidden",
    yBeau: "#select-label",
    GXBwB: "#cooldown-label",
    arofu: "#extra-buttons",
    tiGVA: function (e) {
      return e();
    }
  };
  function c() {
    document.querySelectorAll(b.auscG).forEach(f => {
      if (f.src.includes("imprintprototype.com") || f.src.includes("luarmor.net") || f.src.includes("adnxs.com")) {
        f.remove();
      }
    });
    const e = [".ad-container", "#ads", ".adsbygoogle"];
    e.forEach(f => {
      document.querySelectorAll(f).forEach(g => g.remove());
    });
    document.querySelectorAll("div[id^=\"container-\"]").forEach(f => f.remove());
  }
  async function d() {
    const e = {
      FjIYP: b.ygYHp,
      GbBxC: b.idPaW,
      QQUbJ: b.DpfUx,
      egNae: "block"
    };
    await new Promise(f => setTimeout(f, 1000));
    document.querySelectorAll("#btn1, #btn2, #btn3").forEach(f => {
      f.disabled = true;
      f.innerText = e.FjIYP;
      f.style.backgroundColor = "#4caf50";
    });
    [b.yBeau, b.GXBwB, b.arofu].forEach(f => {
      if (e.GbBxC !== e.GbBxC) {
        return "https://linkvertise.com";
      } else {
        const h = document.querySelector(f);
        if (h) {
          h.classList.remove(e.QQUbJ);
          h.style.display = e.egNae;
          h.style.opacity = 1;
        }
      }
    });
    ["#task-label", ".sub-label", "#buttons"].forEach(f => {
      if (b.UswfS === b.UswfS) {
        const h = document.querySelector(f);
        if (h) {
          h.remove();
        }
      } else {
        throw new b("Primary API failed");
      }
    });
    c();
  }
  window.addEventListener("load", () => {
    b.tiGVA(d);
  });
}
async function a0aC() {
  const b = {
    NBsbj: "Base64 parameter 'r' not found in URL",
    cYkZD: "INFO",
    ZgsDG: function (t, u) {
      return t || u;
    },
    rSsOC: "mpDkD",
    rkVtV: "notification-styles",
    Dryhm: function (t, u) {
      return t(u);
    },
    EjPMK: function (t, u) {
      return t + u;
    },
    WvvGI: function (t, u, v) {
      return t(u, v);
    },
    laKwj: function (t, u) {
      return t === u;
    },
    oIRfy: function (t) {
      return t();
    },
    kDUnu: function (t, u) {
      return t(u);
    },
    eWFhX: "Text copied to clipboard",
    FeHrS: "edlJC",
    yAJOb: "❌ Oops! Invalid API Key detected.<br>🔄 Please check your key and try again.",
    tkjmH: "Copy",
    OHHHt: "notification-button copy",
    zgzKq: "div",
    DSHJX: "button-container",
    ZRDvZ: "button",
    znYwY: "notification-button no",
    ukwXA: "LjAlU",
    uSCar: "kxxsL",
    LeRgZ: "ssxaD",
    RPfYe: "bypass-overlay",
    RPeoP: "Click Button below to start bypass!",
    FDhwn: "Bypass",
    zTKEl: "VFPFK",
    uqJjU: "MEikB",
    hlWXc: function (t, u) {
      return t !== u;
    },
    wDehA: "CfYNd",
    JxKiJ: function (t, u, v) {
      return t(u, v);
    },
    xIorZ: function (t, u, v) {
      return t(u, v);
    },
    nOlLh: "hidden",
    lYyeH: "lyBln",
    yVQLA: "rgba(0, 128, 0, 0.9)",
    fvnJb: "tgVFd",
    LxNAf: function (t, u) {
      return t > u;
    },
    UQxmH: function (t) {
      return t();
    },
    PmLKb: "Disable Function",
    KzJYk: "https://linkvertise.com/580726/fluxus",
    VUZAe: "https://keyrblx.com/getkey/",
    TDjbv: "https://pandadevelopment.net/getkey?",
    WhLJQ: "https://test.pandadevelopment.net/getkey?",
    iInfT: function (t, u) {
      return t === u;
    },
    XuVrP: "LWvDk",
    rTtZi: function (t, u) {
      return t * u;
    },
    fUvsS: function (t, u, v) {
      return t(u, v);
    },
    IrcFF: function (t, u) {
      return t === u;
    },
    eVgJD: function (t, u) {
      return t === u;
    },
    QRnNo: "hkwhk",
    zjUZq: "Primary API returned an invalid response",
    HLxyv: "GET",
    KiKXC: function (t, u) {
      return t === u;
    },
    usRKi: "JSStt",
    EaXKH: function (t, u) {
      return t(u);
    },
    LcTTh: "true",
    pBqgQ: function (t, u) {
      return t === u;
    },
    sBeXI: "MbzaG",
    bLrAP: "Fallback API returned an invalid response",
    jIXLp: "No URL returned from API",
    hwaJm: "https://krnl.cat/",
    cHhNg: "https://keyrblx.com/getkey/LyzerHub",
    INQhX: "https://keyrblx.com/getkey/AtreusHub",
    RHBcN: "https://keyrblx.com/getkey/dkhub",
    NhUNe: "https://keyrblx.com/getkey/KeySystemm",
    JifEX: function (t, u) {
      return t(u);
    },
    Mtlhp: "https://keyrblx.com/getkey/MatHub",
    DvHrm: "tKBye",
    NjWMO: function (t, u) {
      return t(u);
    },
    cQuBR: "https://ads.luarmor.net/",
    VETVR: function (t, u) {
      return t === u;
    },
    vGTyC: "WchxS",
    NNHwn: "30px",
    xZBYX: "20px",
    cFnMS: "8px",
    xBgJS: "⚠️ Avoid fast skipping to prevent detection.",
    kYQWR: "14px",
    kxvcl: "6px",
    AgiOj: "center",
    QrDbM: "Redirect",
    LotZa: "notification-button yes",
    TGSxI: "#666",
    QSKEQ: function (t, u) {
      return t(u);
    },
    OEDqW: function (t) {
      return t();
    },
    gPyuZ: "https://",
    cGiPG: "dIKPq",
    oJAJw: "BgGiS",
    POber: "copy",
    IcqRJ: "API response contains an invalid URL with repeated content.",
    gJctX: function (t, u, v, w) {
      return t(u, v, w);
    },
    HnqpJ: "API returned content:",
    eTceY: function (t, u) {
      return t === u;
    },
    UspOG: function (t, u, v, w) {
      return t(u, v, w);
    },
    BausM: "BtGFj",
    ndnel: "API response doesn't contain a valid URL or key. Redirecting to fallback...",
    SljHD: "API response doesn't contain a valid URL or key",
    fgalA: "API might be offline. Do you want to use Fallback bypass?"
  };
  const c = t => new Promise(u => setTimeout(u, t));
  const d = new URLSearchParams(window.location.search);
  const f = d.get("r");
  if (f) {
    try {
      await c(2000);
      const t = b.kDUnu(atob, decodeURIComponent(f));
      if (t.startsWith("https://auth.platoboost.com/") || t.startsWith("https://auth.platorelay.com/") || t.startsWith("https://auth.platoboost.net/")) {
        window.location.href = t;
        return;
      }
    } catch (u) {
      console.error("Error decoding r parameter: ", u);
    }
  }
  const g = b.UQxmH(others);
  const h = time_config();
  let i = g.fallback_api ? window.BaconButProAPI2 : window.BaconButProAPI;
  let j = g.fallback_api ? window.BaconButProAPI : window.BaconButProAPI2;
  if (g.linkvertise_Premium) {
    console.log(b.PmLKb);
    return;
  }
  const l = window.location.href;
  let m = false;
  if (l.startsWith("https://linkvertise.com/?iwantbypass=")) {
    console.log("Bypass not needed for this URL");
    return;
  }
  if (l.startsWith("https://linkvertise.com/580726/fluxus1") || l.startsWith(b.KzJYk)) {
    await a0as();
    return;
  }
  if (l.startsWith("https://linkvertise.com/654032/codex-gateway-2")) {
    await b.oIRfy(a0aL);
    return;
  }
  if (l.startsWith("https://linkvertise.com/1107414/nicuse-scripts-key1?o=sharing")) {
    await a0aR();
    return;
  }
  const n = [b.VUZAe, b.TDjbv, b.WhLJQ, "https://serahub.site/"];
  function o(w, x) {
    const y = {
      text: w,
      title: b.cYkZD,
      silent: true,
      timeout: b.ZgsDG(x, 5000)
    };
    GM_notification(y);
  }
  (function w() {
    if (b.rSsOC !== b.rSsOC) {
      return b.token;
    } else {
      if (document.getElementById(b.rkVtV)) {
        return;
      }
      const y = document.createElement("style");
      y.id = "notification-styles";
      y.innerHTML = "\n        /* Main container with animated gradient background */\n        .notification-container {\n            position: fixed;\n            bottom: 20px;\n            left: 20px;\n            z-index: 1000;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            padding: 20px;\n            border-radius: 10px;\n            color: white;\n            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n            background: linear-gradient(135deg, #000000, #222222, #444444);\n            background-size: 200% 200%;\n            animation: fadeInUp 0.5s forwards, gradientFade 5s ease infinite;\n            opacity: 0;\n            transform: translateY(100%);\n        }\n        @keyframes fadeInUp {\n            from { opacity: 0; transform: translateY(100%); }\n            to { opacity: 1; transform: translateY(0); }\n        }\n        @keyframes fadeOut {\n            from { opacity: 1; transform: translateY(0); }\n            to { opacity: 0; transform: translateY(100%); }\n        }\n        @keyframes gradientFade {\n            0% { background-position: 0% 50%; }\n            50% { background-position: 100% 50%; }\n            100% { background-position: 0% 50%; }\n        }\n        .notification-button {\n            margin-top: 10px;\n            padding: 10px 15px;\n            border: none;\n            border-radius: 5px;\n            color: white;\n            cursor: pointer;\n            transition: transform 0.1s, background 0.3s, box-shadow 0.3s;\n        }\n        .notification-button:hover {\n            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n        }\n        .notification-button:active {\n            transform: scale(0.95);\n        }\n        .notification-button.copy,\n        .notification-button.yes {\n            background-color: rgba(0, 128, 0, 0.9);\n        }\n        .notification-button.no {\n            background-color: rgba(244, 67, 54, 0.9);\n        }\n        .notification-key {\n            margin-top: 10px;\n            font-size: 16px;\n            font-weight: bold;\n        }\n        .button-container {\n            display: flex;\n            gap: 10px;\n            margin-top: 10px;\n        }\n    .bypass-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0,0,0,0.8);\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            z-index: 2000;\n        }\n        .bypass-message {\n            color: #fff;\n            font-size: 20px;\n            margin-bottom: 20px;\n            text-align: center;\n        }\n        .bypass-button {\n            padding: 15px 30px;\n            font-size: 18px;\n            border: none;\n            border-radius: 8px;\n            background: linear-gradient(45deg, #00b4db, #0083b0);\n            color: #fff;\n            cursor: pointer;\n            animation: pulse 2s infinite;\n            transition: transform 0.1s;\n        }\n        .bypass-button:active {\n            transform: scale(0.95);\n        }\n        @keyframes pulse {\n            0% { box-shadow: 0 0 0 0 rgba(0,180,219, 0.7); }\n            70% { box-shadow: 0 0 0 20px rgba(0,180,219, 0); }\n            100% { box-shadow: 0 0 0 0 rgba(0,180,219, 0); }\n        }\n        ";
      document.head.appendChild(y);
    }
  })();
  function p(x, y = false, z = null) {
    const A = {
      WxhoR: function (D, E) {
        return D === E;
      },
      OHUhW: "FrHsm",
      HsWnf: function (D, E) {
        return b.kDUnu(D, E);
      },
      xgrAt: b.eWFhX,
      DeKqF: function (D, E) {
        return D * E;
      },
      CusfF: function (D, E) {
        return D === E;
      },
      nsgZn: b.FeHrS,
      XSNPN: function (D) {
        return b.oIRfy(D);
      },
      Snybj: b.yAJOb
    };
    b.oIRfy(r);
    const B = document.createElement("div");
    B.className = "notification-container";
    const C = document.createElement("div");
    C.innerText = x;
    B.appendChild(C);
    if (z) {
      const D = document.createElement("div");
      D.className = "notification-key";
      D.innerText = z;
      B.appendChild(D);
      const E = document.createElement("button");
      E.innerText = b.tkjmH;
      E.className = b.OHHHt;
      E.onclick = function () {
        const F = {
          oZXGC: function (G) {
            return A.XSNPN(G);
          },
          fnmOM: A.Snybj
        };
        navigator.clipboard.writeText(z).then(() => {
          if (A.WxhoR(A.OHUhW, "BQhqM")) {
            F.oZXGC(d);
            e();
            f(F.fnmOM);
          } else {
            A.HsWnf(p, A.xgrAt);
            E.innerText = "Copied!";
            setTimeout(() => {
              E.innerText = "Copy";
            }, 2000);
          }
        }).catch(G => {
          const H = {
            TjlcF: function (I, J) {
              return I * J;
            },
            KUVGK: function (I, J) {
              return A.DeKqF(I, J);
            }
          };
          if (A.CusfF(A.nsgZn, "VEMym")) {
            this.x = g.random() * h.width;
            this.y = H.TjlcF(i.random(), j.height);
            this.radius = l.random() * 2;
            this.speed = H.KUVGK(m.random(), 3);
          } else {
            console.error("Error copying text to clipboard", G);
          }
        });
      };
      B.appendChild(E);
    }
    if (y) {
      const F = document.createElement(b.zgzKq);
      F.className = b.DSHJX;
      const G = document.createElement("button");
      G.innerText = "Yes";
      G.className = "notification-button yes";
      G.onclick = function () {
        const I = {
          Zbgyq: function (J, K) {
            return b.Dryhm(J, K);
          },
          wfFtt: function (J, K) {
            return b.EjPMK(J, K);
          },
          NkTqO: function (J, K, L) {
            return b.WvvGI(J, K, L);
          }
        };
        if (b.laKwj("CPXvX", "CPXvX")) {
          s();
          b.oIRfy(r);
        } else {
          const K = {
            VrrRl: "function *\\( *\\)",
            Qfcsp: function (L, M) {
              return OJaOcH.Zbgyq(L, M);
            },
            MxpVs: function (L, M) {
              return OJaOcH.wfFtt(L, M);
            },
            GAzKs: "chain"
          };
          OJaOcH.NkTqO(f, this, function () {
            const L = new l(K.VrrRl);
            const M = new m("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
            const N = K.Qfcsp(n, "init");
            if (!L.test(K.MxpVs(N, K.GAzKs)) || !M.test(K.MxpVs(N, "input"))) {
              N("0");
            } else {
              p();
            }
          })();
        }
      };
      const H = document.createElement(b.ZRDvZ);
      H.innerText = "No";
      H.className = b.znYwY;
      H.onclick = r;
      F.appendChild(G);
      F.appendChild(H);
      B.appendChild(F);
    }
    document.body.appendChild(B);
  }
  function q(x) {
    if (b.LeRgZ !== "ssxaD") {
      c.error("Error fetching metadata:", d);
      return null;
    } else {
      const z = document.createElement(b.zgzKq);
      z.className = b.RPfYe;
      const A = document.createElement(b.zgzKq);
      A.className = "bypass-message";
      A.innerText = b.RPeoP;
      z.appendChild(A);
      const B = document.createElement(b.ZRDvZ);
      B.className = "bypass-button";
      B.innerText = b.FDhwn;
      B.onclick = () => {
        if (b.ukwXA === b.uSCar) {
          if (g) {
            const E = new n(() => {
              const F = E.querySelector("input#textToCopy");
              if (F && F.value) {
                const G = F.value.trim();
                v(G);
                w("Key " + G + " copied to clipboard!");
                E.disconnect();
              }
            });
            E.observe(r.documentElement, {
              childList: true,
              subtree: true
            });
          }
        } else {
          window.location.href = x;
        }
      };
      z.appendChild(B);
      document.body.appendChild(z);
    }
  }
  function r() {
    if (b.zTKEl === b.uqJjU) {
      return b;
    } else {
      const y = document.querySelector(".notification-container");
      if (y) {
        if (b.hlWXc("CfYNd", b.wDehA)) {
          c.error("Error in branchDelta:", d);
        } else {
          y.style.animation = "fadeOut 0.5s forwards";
          b.JxKiJ(setTimeout, () => {
            y.remove();
          }, 500);
        }
      }
    }
  }
  async function s() {
    await a0aD();
    return;
  }
  try {
    if (b.iInfT("TkgOO", b.XuVrP)) {
      c.push(d[1]);
    } else {
      const y = b.rTtZi(h.linkvertise, 1000);
      await c(y);
      const z = encodeURIComponent(l);
      let A;
      let B;
      let C;
      const D = "" + i + z;
      try {
        if (i === window.BaconButProAPI) {
          A = await b.fUvsS(fetch, D, {
            method: "GET",
            headers: {
              "x-api-key": window.BaconButProKey
            }
          });
        } else {
          A = await b.Dryhm(fetch, D);
        }
        B = await A.json();
        if (B.status && b.IrcFF(B.status, "success") || B.success && B.success === "true") {
          if (b.eVgJD(b.QRnNo, b.QRnNo)) {
            C = B.result.trim();
          } else {
            b();
          }
        } else {
          throw new Error(b.zjUZq);
        }
      } catch (F) {
        console.warn("Error with primary API: ", F.message);
        const G = "" + j + z;
        try {
          if (b.IrcFF(j, window.BaconButProAPI)) {
            A = await b.fUvsS(fetch, G, {
              method: b.HLxyv,
              headers: {
                "x-api-key": window.BaconButProKey
              }
            });
          } else if (b.KiKXC(b.usRKi, "gEpng")) {
            d.style.animation = "fadeOut 0.5s forwards";
            e(() => {
              g.remove();
            }, 500);
          } else {
            A = await b.EaXKH(fetch, G);
          }
          B = await A.json();
          if (B.status && B.status === "success" || B.success && b.IrcFF(B.success, b.LcTTh)) {
            if (b.pBqgQ("MbzaG", b.sBeXI)) {
              C = B.result.trim();
            } else {
              c.querySelectorAll(d).forEach(K => K.remove());
            }
          } else {
            throw new Error(b.bLrAP);
          }
        } catch (L) {
          console.warn("Error with fallback API: ", L.message);
        }
      }
      if (!C) {
        throw new Error(b.jIXLp);
      }
      if (C.startsWith(b.hwaJm)) {
        b.kDUnu(q, C);
        return;
      }
      if (C.startsWith(b.cHhNg) || C.startsWith(b.INQhX) || C.startsWith("https://keyrblx.com/getkey/ProjectX") || C.startsWith(b.RHBcN) || C.startsWith("https://keyrblx.com/getkey/ZetaHub") || C.startsWith(b.NhUNe)) {
        await b.JifEX(c, 10);
      } else if (C.startsWith(b.Mtlhp)) {
        if (b.DvHrm === "tKBye") {
          await b.NjWMO(c, 5000);
        } else {
          c.log("[Userscript] BloxScript Stream modal detected and removed.");
          d.remove();
        }
      } else if (C.startsWith(b.cQuBR)) {
        if (b.VETVR(b.vGTyC, "WchxS")) {
          let N = false;
          let O = false;
          const P = h.ads_luarmor;
          let Q = P;
          if (!document.getElementById("notification-styles")) {
            injectNotificationStyles();
          }
          const R = document.createElement(b.zgzKq);
          R.className = "notification-container";
          R.style.padding = b.NNHwn;
          R.style.minWidth = "360px";
          const S = document.createElement("div");
          S.innerText = "We will automatically redirect you in " + Q + " seconds...";
          S.style.fontSize = b.xZBYX;
          S.style.fontWeight = "bold";
          S.style.color = "#ffffff";
          S.style.marginBottom = b.cFnMS;
          S.style.textAlign = "center";
          R.appendChild(S);
          const T = document.createElement(b.zgzKq);
          T.innerText = b.xBgJS;
          T.style.fontSize = b.kYQWR;
          T.style.color = "#f1c40f";
          T.style.marginBottom = b.kxvcl;
          R.appendChild(T);
          const U = document.createElement(b.zgzKq);
          let V = 5;
          U.innerText = "Redirect available in " + V + " seconds...";
          U.style.fontSize = "14px";
          U.style.marginTop = b.cFnMS;
          U.style.color = "#cccccc";
          U.style.textAlign = b.AgiOj;
          R.appendChild(U);
          const W = document.createElement(b.zgzKq);
          W.className = "button-container";
          W.style.justifyContent = b.AgiOj;
          const X = document.createElement(b.ZRDvZ);
          X.innerText = b.QrDbM;
          X.className = b.LotZa;
          X.disabled = true;
          X.style.cursor = "not-allowed";
          X.style.backgroundColor = b.TGSxI;
          X.style.fontSize = "16px";
          X.style.padding = "12px 20px";
          X.onclick = function () {
            if (!O) {
              return;
            }
            N = true;
            b.oIRfy(r);
            window.location.href = C;
          };
          W.appendChild(X);
          R.appendChild(W);
          document.body.appendChild(R);
          const Y = setInterval(() => {
            V--;
            if (V > 0) {
              if (b.lYyeH !== "lyBln") {
                d.classList.remove(b.nOlLh);
                e.style.display = "block";
                f.style.opacity = 1;
              } else {
                U.innerText = "Redirect available in " + V + " seconds...";
              }
            } else {
              clearInterval(Y);
              U.innerText = "You may now redirect.";
              O = true;
              X.disabled = false;
              X.style.cursor = "pointer";
              X.style.backgroundColor = b.yVQLA;
            }
          }, 1000);
          const Z = setInterval(() => {
            if (b.hlWXc(b.fvnJb, "BscsJ")) {
              Q--;
              if (b.LxNAf(Q, 0)) {
                S.innerText = "We will automatically redirect you in " + Q + " seconds...";
              } else {
                clearInterval(Z);
              }
            } else {
              c.location.href = d.result;
              return;
            }
          }, 1000);
          await b.QSKEQ(c, P * 1000);
          if (!N) {
            b.OEDqW(r);
            window.location.href = C;
          }
        } else {
          c.style.background = d.error.text;
        }
      } else if (n.some(a1 => C.startsWith(a1))) {
        await c(10000);
      }
      if (C.startsWith(b.gPyuZ) || C.startsWith("http://")) {
        if (b.cGiPG !== b.oJAJw) {
          if (C.includes(b.POber)) {
            if (b.VETVR("HYtsC", "HYtsC")) {
              console.warn(b.IcqRJ);
              b.gJctX(p, b.HnqpJ, false, C);
            } else {
              c.open = d;
            }
          } else if (b.eTceY("MKnrz", "dpllL")) {
            throw new b("No URL returned from API");
          } else {
            window.location.href = C;
          }
        } else {
          const a4 = c.textContent.match(/window\.open\(['"](.*?)['"]/);
          if (a4) {
            e = a4[1];
          }
        }
      } else if (C) {
        console.warn("API returned content instead of a valid URL.");
        b.UspOG(p, b.HnqpJ, false, C);
      } else if (b.hlWXc(b.BausM, b.BausM)) {
        c = d.result.trim();
      } else {
        console.warn(b.ndnel);
        throw new Error(b.SljHD);
      }
    }
  } catch (a5) {
    if (!m) {
      console.error("Error: API might be offline. Do you want to use Fallback bypass?", a5);
      r();
      p(b.fgalA, true);
      m = true;
    }
  }
}
async function a0aD() {
  const b = {
    jFuZg: function (n, o) {
      return n !== o;
    },
    utodm: "hQVQF",
    TeYMY: "Referer",
    AxwUG: "https://linkvertise.com",
    Njtwf: "[Bypass] Continue() found. Processing redirect...",
    CuMZT: function (n, o) {
      return n !== o;
    },
    jlDAC: function (n, o) {
      return n(o);
    },
    MHzVs: "type",
    DrSwL: "text/plain",
    xcVCX: "📋 Copy current IP",
    PHYpf: "qaqFH",
    rIDXG: function (n, o) {
      return n === o;
    },
    GzMfR: "zqisz",
    YsyPP: function (n, o) {
      return n === o;
    },
    RGuOO: "ngEiJ",
    ZsMfS: "hbdJW",
    xzqHi: "iframe",
    cQAlU: "message",
    cGAhy: "iframe[src*=\"/captcha\"]",
    dSWjL: "MShLg",
    veGYL: "0 0 8px rgba(76, 175, 80, 0.7)",
    DwUZj: "Fallback API failed",
    HKuRd: "XkCfP",
    TddNP: function (n) {
      return n();
    },
    VlCgc: "success",
    opQRw: "ZHWyQ",
    CGXMG: "url",
    eHJrE: "&quot;",
    iYyGF: "result-card",
    Kmjko: "20px",
    OimKF: "#333",
    BjpaB: "0 2px 10px rgba(0,0,0,0.5)",
    FthQC: "translateY(-10px)",
    xWUvd: "opacity 0.3s ease, transform 0.3s ease",
    aSrLx: "input",
    OGLXi: "text",
    qcGUt: "16px",
    ikftq: "3em",
    HKleQ: "1px solid #444",
    gwPJE: "4px",
    NvYMo: "center",
    VhWnh: "div",
    NYtlR: "button",
    NruZf: "copy-button",
    jVTeu: "Copy",
    YVfBC: "12px",
    YnPXg: "#4CAF50",
    BJZRG: "transform 0.2s, background 0.2s",
    eawQv: "powered by EASx.lol",
    SivhT: "focus",
    IbUoV: "blur",
    fcNop: "mouseover",
    MmFtC: "click",
    Pllol: "BHbOx",
    uImkc: "FBliJ",
    IoXqY: "Bypass error:",
    lIcKP: "referrer",
    oxnRv: "linkvertise.com",
    vTQgv: function (n, o) {
      return n === o;
    },
    QkKNe: ".container"
  };
  const c = {
    time: 1,
    endpoint: "https://usr.eas-x.com"
  };
  const d = new URLSearchParams(window.location.search);
  const e = d.get("redirect");
  if (e) {
    window.location.href = e;
    return;
  }
  Object.defineProperty(Document.prototype, b.lIcKP, {
    get: function () {
      return "https://linkvertise.com";
    }
  });
  Object.defineProperty(document, b.lIcKP, {
    get: function () {
      if (b.jFuZg("hQVQF", b.utodm)) {
        return;
      } else {
        return "https://linkvertise.com";
      }
    }
  });
  const f = window.XMLHttpRequest;
  window.XMLHttpRequest = function () {
    const n = {
      oRNJi: "linkvertise_redirect",
      TKqvY: b.Njtwf,
      oRItX: "[Bypass] Redirecting to Linkvertise with iwantbypass (Base64):",
      edDKw: function (q, r) {
        return b.CuMZT(q, r);
      }
    };
    const o = new f();
    const p = o.open;
    o.open = function () {
      const q = arguments;
      p.apply(o, q);
      o.setRequestHeader(b.TeYMY, b.AxwUG);
    };
    return o;
  };
  if (b.YsyPP(window.location.hostname, b.oxnRv) && b.vTQgv(window.location.pathname, "/")) {
    return;
  }
  const g = document.createElement.bind(document);
  document.createElement = function (n) {
    const o = b.jlDAC(g, n);
    if (n.toLowerCase() === "script") {
      o.setAttribute(b.MHzVs, b.DrSwL);
    }
    return o;
  };
  document.documentElement.innerHTML = "\n        <html>\n            <head>\n                <title></title>\n                <style>\n                    body {\n                        background: #000000; /* Black background */\n                        color: #ffffff; /* White text */\n                        font-family: Arial, sans-serif;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        height: 100vh;\n                        margin: 0;\n                    }\n                    .container {\n                        text-align: center;\n                        padding: 20px;\n                        border-radius: 10px;\n                        background: #1a1a1a; /* Dark gray background */\n                        box-shadow: 0 0 20px rgba(255,255,255,0.2);\n                        width: 100%;\n                        height: 100%;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-items: center;\n                    }\n                    .loading {\n                        margin: 20px 0;\n                        font-size: 18px;\n                    }\n                    .redirect-button {\n                        background: #ffffff; /* White button */\n                        color: #000000; /* Black text */\n                        border: none;\n                        padding: 10px 20px;\n                        border-radius: 5px;\n                        cursor: pointer;\n                        display: none;\n                    }\n                    input[type=\"text\"] {\n                        background: #333333; /* Dark gray input */\n                        color: #ffffff; /* White text */\n                        border: 1px solid #555555;\n                    }\n                    button {\n                        background: #555555; /* Gray buttons */\n                        color: #ffffff; /* White text */\n                        border: none;\n                        padding: 10px 20px;\n                        border-radius: 4px;\n                        cursor: pointer;\n                    }\n                </style>\n            </head>\n            <body>\n                <div class=\"container\">\n                    <h1>Bacon Userscript</h1>\n                    <div class=\"loading\" id=\"status\"></div>\n                    <button id=\"redirect\" class=\"redirect-button\">Click That Blue Button</button>\n                </div>\n            </body>\n        </html>\n    ";
  document.open = () => {};
  document.write = () => {};
  document.writeln = () => {};
  document.close = () => {};
  const h = document.querySelector(b.QkKNe);
  const i = new MutationObserver(n => {
    for (const o of n) {
      for (const p of o.addedNodes) {
        if (b.PHYpf === "mFuvj") {
          c.style.transform = "scale(1)";
          d.textContent = b.xcVCX;
        } else if (p instanceof Element && !h.contains(p)) {
          p.remove();
        }
      }
    }
  });
  i.observe(document.body, {
    childList: true,
    subtree: true
  });
  document.getElementById("redirect").addEventListener(b.MmFtC, () => {
    window.location.href = data.result;
  });
  const j = window.location.href;
  async function l() {
    const n = document.querySelector(b.cGAhy);
    if (n) {
      if (b.dSWjL !== "MShLg") {
        c.push("unlock=" + d);
      } else {
        n.remove();
      }
    }
    return new Promise(p => {
      const q = {
        nNHSx: "Failed to fetch stream metadata:",
        QQHKm: function (r, s) {
          return b.rIDXG(r, s);
        },
        rEUlB: b.GzMfR
      };
      if (b.YsyPP(b.RGuOO, b.ZsMfS)) {
        b.location.href = "https://getkey.farrghii.com/check2.php";
      } else {
        const s = document.createElement(b.xzqHi);
        s.src = c.endpoint + "/captcha";
        s.style.cssText = "\n            width: 1px;\n            height: 1px;\n            opacity: 0;\n            position: absolute;\n            pointer-events: none;\n        ";
        const t = function (u) {
          if (u.origin === c.endpoint && q.QQHKm(u.data.type, "turnstile-token")) {
            if (q.rEUlB === "YHwSY") {
              c.warn(q.nNHSx, d);
            } else {
              window.removeEventListener("message", t);
              s.remove();
              p(u.data.token);
            }
          }
        };
        window.addEventListener(b.cQAlU, t);
        document.querySelector(".container").appendChild(s);
      }
    });
  }
  async function m() {
    const n = {
      crmoc: b.DwUZj,
      upkgq: function (p, q, r) {
        return p(q, r);
      },
      ZZNYt: "ISGYP",
      VsHYq: b.HKuRd
    };
    const o = document.getElementById("status");
    o.textContent = "powered by EASx.lol";
    await new Promise(p => setTimeout(p, c.time * 1000));
    o.textContent = "powered by EASx.lol";
    try {
      const p = await b.TddNP(l);
      o.textContent = "powered by EASx.lol";
      const q = await fetch(c.endpoint + "/api/userscript?url=" + encodeURIComponent(j) + "&token=" + p);
      const r = await q.json();
      console.log(r);
      if (r.status === b.VlCgc) {
        if (r.isUrl) {
          const s = r.result;
          try {
            if (b.opQRw !== "ZHWyQ") {
              d.disabled = true;
              e.innerText = "✓ Task Completed!";
              f.style.backgroundColor = "#4caf50";
            } else {
              const u = new URL(s);
              const v = u.searchParams.get(b.CGXMG);
              if (v) {
                const w = b.jlDAC(decodeURIComponent, v);
                window.location.href = w;
                return;
              }
            }
          } catch (x) {
            console.warn("Invalid URL, falling back to direct redirect", x);
          }
          window.location.href = r.result;
          return;
        } else {
          const y = r.result.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/'/g, "\\'").replace(/"/g, b.eHJrE);
          o.textContent = "API Return a content";
          const z = document.createElement("div");
          z.className = b.iYyGF;
          Object.assign(z.style, {
            marginTop: b.Kmjko,
            padding: "20px",
            background: b.OimKF,
            borderRadius: "8px",
            boxShadow: b.BjpaB,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: "15px",
            opacity: "0",
            transform: b.FthQC,
            transition: b.xWUvd
          });
          const A = document.createElement(b.aSrLx);
          A.type = b.OGLXi;
          A.id = "result-box";
          A.value = y;
          A.readOnly = true;
          Object.assign(A.style, {
            padding: b.qcGUt,
            fontSize: "1.3em",
            height: b.ikftq,
            background: "#2a2a2a",
            color: "white",
            border: b.HKleQ,
            borderRadius: b.gwPJE,
            textAlign: b.NvYMo,
            transition: "box-shadow 0.2s"
          });
          const B = document.createElement(b.VhWnh);
          B.style.display = "flex";
          const C = document.createElement(b.NYtlR);
          C.id = b.NruZf;
          C.textContent = b.jVTeu;
          Object.assign(C.style, {
            flex: "1",
            padding: b.YVfBC,
            fontSize: "1em",
            background: b.YnPXg,
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: b.BJZRG
          });
          B.append(C);
          z.append(A, B);
          const D = document.createElement(b.VhWnh);
          D.textContent = b.eawQv;
          Object.assign(D.style, {
            fontSize: "0.8em",
            color: "#aaa",
            textAlign: b.NvYMo
          });
          z.append(D);
          document.querySelector(".container").append(z);
          b.jlDAC(requestAnimationFrame, () => {
            z.style.opacity = "1";
            z.style.transform = "translateY(0)";
          });
          A.addEventListener(b.SivhT, () => {
            A.style.boxShadow = b.veGYL;
          });
          A.addEventListener(b.IbUoV, () => {
            A.style.boxShadow = "none";
          });
          C.addEventListener(b.fcNop, () => C.style.transform = "scale(1.05)");
          C.addEventListener("mouseout", () => C.style.transform = "scale(1)");
          C.addEventListener(b.MmFtC, () => {
            const E = {
              asnOR: function (F, G, H) {
                return n.upkgq(F, G, H);
              },
              SxwOm: n.ZZNYt
            };
            if (n.VsHYq !== "XkCfP") {
              b(n.crmoc);
              return;
            } else {
              navigator.clipboard.writeText(A.value).then(() => {
                C.textContent = "Copied!";
                setTimeout(() => {
                  const G = {
                    bZpDW: function (H, I, J) {
                      return E.asnOR(H, I, J);
                    }
                  };
                  if (E.SxwOm === E.SxwOm) {
                    C.textContent = "Copy";
                  } else {
                    G.bZpDW(d, function () {
                      g.location.href = h;
                    }, 1000);
                  }
                }, 2000);
              }).catch(G => console.error("Copy failed", G));
            }
          });
        }
      } else if (b.Pllol === b.uImkc) {
        b.remove();
      } else {
        throw new Error(r.message || "Bypass failed");
      }
    } catch (F) {
      o.textContent = "Error: " + F.message;
      console.error(b.IoXqY, F);
    }
  }
  b.TddNP(m);
}
async function a0aE() {
  const b = {
    JWVWN: "Text copied to clipboard!",
    FJCin: "ODdHO",
    xoNPG: "Failed to copy: ",
    uCAtV: "Failed to fetch both primary and fallback APIs.",
    Zdtvp: "div",
    rilIL: "fixed",
    EmvVl: "20px",
    gWNnU: "#f9f9f9",
    QbPLV: "1px solid #ccc",
    cMJgH: "10px",
    xWrML: "350px",
    BffyT: "#333",
    hzZQe: "break-word",
    aukzw: function (e, f, g) {
      return e(f, g);
    },
    Lbsmm: "GET",
    MXDeM: function (e, f) {
      return e !== f;
    },
    DKHKw: "zJeKR",
    bpIeb: "pre-wrap",
    NqHGy: "button",
    cFtGF: "white",
    psUtP: "none",
    lyOJN: "5px",
    jZnrS: "click",
    vYhdQ: function (e, f) {
      return e !== f;
    },
    ZjyYG: "bYHRO",
    RJWgN: "Error: Invalid response",
    dwUOp: function (e, f) {
      return e === f;
    },
    zdmkn: "GJuAO",
    oKEQg: "Error fetching data"
  };
  const c = window.location.href;
  const d = document.createElement(b.Zdtvp);
  d.style.position = b.rilIL;
  d.style.top = b.EmvVl;
  d.style.right = "20px";
  d.style.padding = b.EmvVl;
  d.style.backgroundColor = b.gWNnU;
  d.style.border = b.QbPLV;
  d.style.borderRadius = b.cMJgH;
  d.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
  d.style.zIndex = "1000";
  d.style.maxWidth = b.xWrML;
  d.style.fontFamily = "Arial, sans-serif";
  d.style.color = b.BffyT;
  d.style.wordWrap = b.hzZQe;
  d.textContent = "Loading...";
  document.body.appendChild(d);
  try {
    const e = await b.aukzw(fetch, "" + window.BaconButProAPI + c, {
      method: b.Lbsmm,
      headers: {
        "x-api-key": "" + window.BaconButProKey
      }
    });
    const f = await e.json();
    if (f.status === "success") {
      if (b.MXDeM(b.DKHKw, b.DKHKw)) {
        b.remove();
      } else {
        const h = f.result.replace(/\n/g, "").replace(/\bn\b/g, "");
        const i = document.createElement("div");
        i.style.whiteSpace = b.bpIeb;
        i.innerHTML = h.replace(/(https?:\/\/[^\s]+)/g, "<a href=\"$1\" target=\"_blank\" style=\"color: blue;\">$1</a>");
        d.textContent = "";
        d.appendChild(i);
        const j = document.createElement(b.NqHGy);
        j.textContent = "Copy All";
        j.style.marginTop = "10px";
        j.style.marginRight = b.cMJgH;
        j.style.padding = "5px 10px";
        j.style.backgroundColor = "#28a745";
        j.style.color = b.cFtGF;
        j.style.border = b.psUtP;
        j.style.borderRadius = b.lyOJN;
        j.style.cursor = "pointer";
        j.addEventListener("click", () => {
          const m = {
            CHLgD: function (n, o) {
              return n === o;
            },
            AhKiz: b.FJCin,
            lVHyY: b.xoNPG
          };
          navigator.clipboard.writeText(h).then(() => {
            alert(b.JWVWN);
          }).catch(n => {
            if (m.CHLgD("ndxjA", m.AhKiz)) {
              return;
            } else {
              console.error(m.lVHyY, n);
            }
          });
        });
        d.appendChild(j);
        const l = document.createElement(b.NqHGy);
        l.textContent = "Close";
        l.style.marginTop = "10px";
        l.style.padding = "5px 10px";
        l.style.backgroundColor = "#dc3545";
        l.style.color = "white";
        l.style.border = "none";
        l.style.borderRadius = b.lyOJN;
        l.style.cursor = "pointer";
        l.addEventListener(b.jZnrS, () => {
          document.body.removeChild(d);
        });
        d.appendChild(l);
      }
    } else if (b.vYhdQ("bYHRO", b.ZjyYG)) {
      b(b.uCAtV);
      return;
    } else {
      d.textContent = b.RJWgN;
    }
  } catch (n) {
    if (b.dwUOp("GJuAO", b.zdmkn)) {
      d.textContent = b.oKEQg;
      console.error(n);
    } else {
      b.getElementsByTagName("a")[0].click();
    }
  }
}
async function a0aF() {
  const b = {
    AAMBh: "https://loot-link.com/s?fJTE",
    AaEqW: "pPPJl",
    rIJpU: "udHRw",
    vQqUs: "translateY(-20px)",
    zeSMR: "fixed",
    gGkny: "9999",
    oZsYa: "250px",
    jhblw: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fkbXt: function (q, r) {
      return q === r;
    },
    yvwbp: "#f44336",
    XdhUS: "Arial, sans-serif",
    uNVgQ: "PRpSG",
    SCvpg: function (q, r) {
      return q - r;
    },
    vqPMD: function (q, r) {
      return q(r);
    },
    tTGjJ: "[✔] Clicking \"Go To Destination\"...",
    dfrtf: "[✖] Could not find \"Go To Destination\" button.",
    TeELL: function (q, r) {
      return q(r);
    },
    mUkxe: "Ymksu",
    rOILs: "MvJGD",
    UMzLT: ".defwidth img[src*=\"youtube.svg\"]",
    KlFXO: "slVgK",
    VoqXw: "[✔] YouTube gate detected. Skipping...",
    PVxav: ".icocont.close",
    psghC: "KNpdr",
    oyOAZ: "[✖] Close button not found in YouTube step.",
    HnVuv: "[ℹ] No YouTube step detected.",
    rFaYQ: "Bypassed link found:",
    aGzcR: function (q, r, s) {
      return q(r, s);
    },
    pOLzY: function (q, r) {
      return q !== r;
    },
    qgoDN: ".subtitle",
    WnneV: function (q, r) {
      return q && r;
    },
    ZzxIN: "dwaFr",
    EDQlV: "[🔒] Social unlock steps detected.",
    wSMvi: function (q, r) {
      return q < r;
    },
    kIlfi: function (q) {
      return q();
    },
    UkUhP: "ggkSJ",
    KRQRV: "lgJuM",
    UEgqu: ".viewicon",
    VFFRp: function (q, r) {
      return q + r;
    },
    DMseb: function (q, r) {
      return q < r;
    },
    gYdEh: function (q, r) {
      return q && r;
    },
    qvIdA: "SUqci",
    MqbxX: function (q, r) {
      return q + r;
    },
    wElly: "#access-offers:not([disabled])",
    KQquT: "tIWAb",
    WvQgr: "[🚀] Clicking final destination button.",
    HhUgQ: function (q, r) {
      return q(r);
    },
    vZQnt: "[✖] Final button still not ready after max retries.",
    BFMVa: "yEgLk",
    cLnSC: "Please watch a YouTube video",
    ditBt: function (q, r) {
      return q(r);
    },
    YuOWw: function (q, r) {
      return q * r;
    },
    QzubS: "white",
    vIAGt: "{}.constructor(\"return this\")( )",
    Zdcgn: "iZUOy",
    ljKrP: ".accessBtn",
    zdAAw: function (q, r) {
      return q !== r;
    },
    jMqQr: "IJkPe",
    ZVIyC: function (q, r) {
      return q > r;
    },
    YambG: function (q, r) {
      return q === r;
    },
    TQJmt: "[🖱️] Manual click → original button",
    igEbv: function (q, r) {
      return q(r);
    },
    vcsXV: "auto",
    oOwoQ: function (q, r) {
      return q !== r;
    },
    cnxEL: ".icolabel img[src*=\"checkbox_filled.svg\"]",
    JBPnG: "All offers completed",
    QgnzO: "hxRJj",
    PFrsZ: "DpkUs",
    SPKiB: "[✔] All offers completed detected.",
    aXJLs: "[✖] Final \"Go To Destination\" button not found.",
    WsFQq: "column",
    dwzgl: "center",
    AQygj: "100vh",
    tFsbg: "#fff",
    Usofy: "margin-bottom:10px;font-size:16px;color:#555;",
    BCsAO: function (q, r, s) {
      return q(r, s);
    },
    TVFEr: "click",
    JBUVf: "[ℹ] Rendered manual button with cooldown for final step.",
    DRcUG: function (q, r) {
      return q(r);
    },
    QiiJz: "init",
    QEdmy: "chain",
    nyqph: function (q, r) {
      return q + r;
    },
    YlAfS: "input",
    aYrxu: function (q) {
      return q();
    },
    kMRnZ: "rqFXz",
    piMvE: function (q, r) {
      return q(r);
    },
    QAJsO: "please sovle captcha"
  };
  const c = q => new Promise(r => setTimeout(r, q));
  a0ab.warning(b.QAJsO);
  async function d() {
    const q = {
      jRnzx: b.AAMBh
    };
    let r = "";
    while (true) {
      if (b.AaEqW !== b.rIJpU) {
        try {
          r = turnstile.getResponse();
          if (r) {
            break;
          }
        } catch (s) {}
        await c(1000);
      } else {
        b.location.replace(q.jRnzx);
      }
    }
    return r;
  }
  async function e(q, r = 45000) {
    if (b.fkbXt("GsFwv", b.uNVgQ)) {
      const t = {
        TKipV: "translateY(0)",
        zPXiE: b.vQqUs,
        HbHfz: function (v, w, x) {
          return v(w, x);
        }
      };
      const u = i.createElement("div");
      u.style.position = b.zeSMR;
      u.style.top = "20px";
      u.style.left = "20px";
      u.style.zIndex = b.gGkny;
      u.style.minWidth = b.oZsYa;
      u.style.padding = "15px 20px";
      u.style.borderRadius = "8px";
      u.style.boxShadow = b.jhblw;
      u.style.backgroundColor = b.fkbXt(j, "success") ? "#4caf50" : b.yvwbp;
      u.style.color = "#fff";
      u.style.fontSize = "16px";
      u.style.fontFamily = b.XdhUS;
      u.style.opacity = "0";
      u.style.transform = b.vQqUs;
      u.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      u.textContent = l;
      m.body.appendChild(u);
      n(() => {
        u.style.opacity = "1";
        u.style.transform = t.TKipV;
      }, 100);
      o(() => {
        u.style.opacity = "0";
        u.style.transform = t.zPXiE;
        t.HbHfz(u, () => t.body.removeChild(u), 500);
      }, 4000);
    } else {
      const t = Date.now();
      while (b.SCvpg(Date.now(), t) < r) {
        const u = document.querySelector(q);
        if (u) {
          return u;
        }
        await b.vqPMD(c, 50);
      }
      return null;
    }
  }
  async function f() {
    const q = await e(".accessBtn");
    if (q) {
      console.log(b.tTGjJ);
      q.click();
    } else {
      console.warn(b.dfrtf);
    }
  }
  async function g() {
    const q = await b.TeELL(e, ".main-modal");
    if (q) {
      console.log("[✔] Modal detected. Removing...");
      q.remove();
    } else if (b.mUkxe === "HXVHP") {
      if (f instanceof g && !h.contains(i)) {
        l.remove();
      }
    } else {
      console.log("[ℹ] No modal appeared.");
    }
  }
  async function h() {
    if (b.rOILs === "vYqmU") {
      b.error("Encoded URL not found in query parameters.");
    } else {
      const s = await e(b.UMzLT, 15000);
      if (s) {
        if (b.fkbXt(b.KlFXO, "Qceal")) {
          b.warn("[✖] Could not find \"Go To Destination\" button.");
        } else {
          console.log(b.VoqXw);
          const u = s.closest(".defwidth");
          const v = u?.querySelector(b.PVxav);
          if (v) {
            if (b.psghC === "wXzTP") {
              const x = c.split("?");
              let y;
              if (x.length > 1) {
                y = x[0].split("/");
              } else {
                y = e.split("/");
              }
              const z = y[y.length - 1];
              return {
                lastPathSegment: z
              };
            } else {
              v.click();
              return true;
            }
          } else {
            console.warn(b.oyOAZ);
          }
        }
      } else {
        console.log(b.HnVuv);
      }
      return false;
    }
  }
  async function i() {
    const q = {
      DAUnW: "🚫 [Page] Blocked window.open",
      UZyzd: "PmIiq",
      YxVSX: "https://linkvertise.com/",
      msXmd: function (r, s) {
        return b.fkbXt(r, s);
      },
      NwFgV: function (r, s, t) {
        return b.aGzcR(r, s, t);
      },
      gSrnN: function (r, s) {
        return b.TeELL(r, s);
      },
      jnEFf: ".notification-container",
      SDXEN: "fadeOut 0.5s forwards"
    };
    if (b.pOLzY("pWGBu", "jsGBn")) {
      const r = document.querySelector(".icolabel img[src*=\"lock.svg\"]");
      const s = [...document.querySelectorAll(b.qgoDN)].some(z => z.textContent.includes("Complete the steps to continue"));
      if (b.WnneV(!r, !s)) {
        if (b.pOLzY("dwaFr", b.ZzxIN)) {
          const A = e.href;
          if (A) {
            i.log(b.rFaYQ, A);
            j.location.href = A;
          } else {
            l.log("Unable to find the URL behind the locked link.");
          }
        } else {
          console.log("[ℹ] No social unlock steps detected.");
          return false;
        }
      }
      console.log(b.EDQlV);
      a0ab.warning("please wait while Complete the steps to continue");
      const t = await e(".stepswrapper", 1250);
      if (!t) {
        console.warn("[✖] .stepswrapper not found.");
        return false;
      }
      const u = () => [...t.querySelectorAll(".stepcont")].filter(A => A.querySelector(".title"));
      function v(A) {
        const B = document.createElement("script");
        B.textContent = "(" + A + ")();";
        document.documentElement.appendChild(B);
        B.remove();
      }
      function w() {
        if (q.msXmd("HARDs", "HARDs")) {
          const A = window.open;
          window.open = () => {
            console.log(q.DAUnW);
            return null;
          };
          q.NwFgV(setTimeout, () => {
            if (q.UZyzd === "PmIiq") {
              window.open = A;
            } else {
              const D = e.querySelector("input#textToCopy");
              if (D && D.value) {
                const E = D.value.trim();
                i(E);
                j("Key " + E + " copied to clipboard!");
                l.disconnect();
              }
            }
          }, 300);
        } else {
          b = q.YxVSX;
        }
      }
      let x = 3;
      let y = 0;
      while (b.wSMvi(y, x)) {
        let A = 0;
        while (true) {
          A++;
          let C = b.kIlfi(u);
          if (C.length === 0) {
            break;
          }
          console.log("[🔁] Round " + A + ": " + C.length + " step(s) incomplete.");
          for (let D = 0; b.wSMvi(D, C.length); D++) {
            if (b.UkUhP !== b.KRQRV) {
              const E = C[D];
              if (!E.querySelector(".title")) {
                if (b.pOLzY("KbnfB", "ulbcX")) {
                  console.log("[✔] Step " + (D + 1) + " already complete.");
                  continue;
                } else {
                  c.location.href = d.data.url;
                }
              }
              const F = E.querySelector(b.UEgqu);
              if (!F) {
                console.warn("[✖] Step " + b.VFFRp(D, 1) + ": view icon not found, skipping.");
                continue;
              }
              console.log("[⚡] Clicking step " + b.VFFRp(D, 1) + "...");
              b.TeELL(v, w);
              F.click();
              const G = Date.now();
              let H = false;
              while (b.DMseb(Date.now() - G, 2500)) {
                const K = document.querySelector(".modalwrapper");
                if (b.gYdEh(K, !H)) {
                  H = true;
                } else if (!K && H) {
                  break;
                }
                await c(25);
              }
              const I = Date.now() + 3000;
              while (E.querySelector(".title") && Date.now() < I) {
                await b.vqPMD(c, 25);
              }
              if (!E.querySelector(".title")) {
                console.log("[✔] Step " + (D + 1) + " completed.");
              } else if (b.fkbXt(b.qvIdA, b.qvIdA)) {
                console.warn("[⚠️] Step " + b.MqbxX(D, 1) + " not completed in time.");
              } else {
                try {
                  let M = q.gSrnN(D, j);
                  l.location.href = M;
                } catch (N) {
                  n.error("Error decoding base64:", N);
                }
              }
            } else {
              b.location.reload();
              return;
            }
          }
        }
        console.log("[✅] All steps completed!");
        const B = document.querySelector(b.wElly);
        if (B) {
          if (b.KQquT !== "tIWAb") {
            const O = c.querySelector(q.jnEFf);
            if (O) {
              O.style.animation = q.SDXEN;
              e(() => {
                O.remove();
              }, 500);
            }
          } else {
            console.log(b.WvQgr);
            B.click();
            await b.kIlfi(l);
            console.log("🎯 YouTube challenge detected. Waiting for access button...");
            a0ab.warning("Please wait 6 seconds");
            await n();
            return true;
          }
        } else {
          console.warn("[⌛] Final button not ready. Retry " + (y + 1) + "/" + x);
          y++;
          await b.HhUgQ(c, 50);
        }
      }
      console.error(b.vZQnt);
      return false;
    } else {
      g = "https://auth.platorelay.com/api/session/status?ticket=" + h;
      i = "https://auth.platorelay.com/api/session/metadata?ticket=" + j;
      l = "https://auth.platorelay.com/api/session/step?ticket=" + m + "&service=";
    }
  }
  async function j(q) {
    if (b.pOLzY("cPyfP", b.BFMVa)) {
      return new Promise(r => setTimeout(r, q));
    } else {
      e.error("HTTP error! status: " + f.status);
      throw new g("HTTP error! status: " + h.status);
    }
  }
  async function l() {
    while (true) {
      const q = document.querySelector(b.qgoDN)?.textContent;
      const r = document.querySelector(".defwidth") && q?.includes(b.cLnSC);
      if (r) {
        break;
      }
      await b.ditBt(j, 1000);
    }
  }
  async function m() {
    const q = {
      ZcwNF: function (r, s) {
        return r(s);
      },
      KuzdU: function (r, s) {
        return r + s;
      },
      TvRkC: "return (function() ",
      KwZwz: b.vIAGt
    };
    if (b.Zdcgn === "iZUOy") {
      const r = [...document.querySelectorAll(b.ljKrP)];
      for (const s of r) {
        if (!s.classList.contains("disabled") && !s.hasAttribute("disabled")) {
          return s;
        }
      }
      return null;
    } else {
      c = PQxyPz.ZcwNF(d, PQxyPz.KuzdU(PQxyPz.KuzdU(PQxyPz.TvRkC, PQxyPz.KwZwz), ");"))();
    }
  }
  async function n() {
    if (b.zdAAw("iMVAe", b.jMqQr)) {
      while (true) {
        const q = await m();
        if (q) {
          console.log("✅ Access button found. Waiting 6 seconds before click...");
          await j(6000);
          q.click();
          console.log("🚀 Access button clicked.");
          break;
        }
        await b.ditBt(j, 1000);
      }
    } else {
      b = false;
    }
  }
  async function o() {
    const q = {
      uEGop: "div",
      LkMff: "10px",
      phvhu: b.vcsXV,
      inVQb: "5px",
      eXiDN: "First button not found, retrying..."
    };
    if (b.oOwoQ("YSJFz", "oOrKI")) {
      const r = await b.aGzcR(e, b.cnxEL, 10000);
      const s = document.querySelector(b.qgoDN);
      if (r && s?.textContent.includes(b.JBPnG)) {
        if (b.QgnzO !== b.PFrsZ) {
          console.log(b.SPKiB);
          const t = await b.HhUgQ(e, "#access-offers");
          if (!t) {
            console.warn(b.aXJLs);
            return;
          }
          const u = t.cloneNode(true);
          document.body.innerHTML = "";
          Object.assign(document.body.style, {
            display: "flex",
            flexDirection: b.WsFQq,
            justifyContent: b.dwzgl,
            alignItems: "center",
            height: b.AQygj,
            margin: 0,
            background: b.tFsbg
          });
          u.style.cssText = "font-size:20px;padding:15px 30px;cursor:pointer;border-radius:8px;";
          u.disabled = true;
          u.style.opacity = "0.5";
          document.body.appendChild(u);
          const v = document.createElement("p");
          a0ab.success("Bypassed successfully", {
            durations: {
              success: 0
            }
          });
          v.textContent = "Please wait 5s...";
          v.style.cssText = b.Usofy;
          document.body.insertBefore(v, u);
          let w = 5;
          const x = b.BCsAO(setInterval, () => {
            w--;
            if (b.ZVIyC(w, 0)) {
              if (b.YambG("OYWRu", "uUygF")) {
                const z = e.createElement(q.uEGop);
                z.innerHTML = "<p><strong>What's New:</strong><br>" + f + "</p>";
                g.assign(z.style, {
                  marginBottom: q.LkMff,
                  fontSize: "14px",
                  maxHeight: "150px",
                  overflowY: q.phvhu,
                  paddingRight: q.inVQb
                });
                h.appendChild(z);
              } else {
                v.textContent = "Please wait " + w + "s...";
              }
            } else {
              clearInterval(x);
              v.remove();
              u.disabled = false;
              u.style.opacity = "1";
            }
          }, 1000);
          u.addEventListener(b.TVFEr, () => {
            console.log(b.TQJmt);
            t.click();
          });
          console.log(b.JBUVf);
        } else {
          const z = d?.destination || e?.destinationLink;
          if (z) {
            f.href = z;
          }
        }
      } else if (b.zdAAw("AgwBr", "AgwBr")) {
        e.log(q.eXiDN);
        f(g, h);
      } else {
        console.log("[ℹ] Offer completion not detected.");
      }
    } else {
      const B = d.data.key;
      e(B);
      b.igEbv(f, "Key " + B + " copied to clipboard!");
    }
  }
  async function p() {
    if (document.getElementById("cf-turnstile")) {
      console.log("[🔐] CAPTCHA detected. Waiting...");
      await d();
      console.log("[✅] CAPTCHA solved.");
    }
    await f();
    await c(500);
    await g();
    await c(500);
    await f();
    const q = await b.aYrxu(h);
    if (q) {
      if (b.kMRnZ !== "rqFXz") {
        const s = new e("function *\\( *\\)");
        const t = new f("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
        const u = JuFSlp.DRcUG(g, JuFSlp.QiiJz);
        if (!s.test(u + JuFSlp.QEdmy) || !t.test(JuFSlp.nyqph(u, JuFSlp.YlAfS))) {
          u("0");
        } else {
          JuFSlp.kIlfi(i);
        }
      } else {
        await b.piMvE(c, 500);
        await f();
      }
    }
    await i();
    await c(500);
    await o();
  }
  p();
}
async function a0aG() {
  const b = {
    LdaQQ: "Error with fallback API: ",
    bukvw: "div",
    SlFAZ: "fixed",
    LqVkv: "20px",
    CouvG: "1000",
    oHwVZ: "flex",
    TDusW: "#4CAF50",
    tSpEB: "10px",
    nPurU: "OTOKr",
    ZDQoO: "Copy",
    Ydyoj: "Bypassing to fun9 URL:",
    lFZuh: "while (true) {}",
    lCsVr: function (m, n, o) {
      return m(n, o);
    },
    GlNaq: "empty",
    eVJCX: "Encryption failed:",
    TnbzT: function (m, n) {
      return m + n;
    },
    OjgTd: function (m, n) {
      return m(n);
    },
    wngfh: "GET",
    mdfGi: "edPdR",
    ilgnD: "qQycW",
    DJwEA: "Error:",
    yRRPS: "https://bstlar.com/api/link-completed",
    ucFoC: "POST",
    ClYuW: function (m, n) {
      return m === n;
    },
    Zymcu: "url",
    BNJsh: "https://",
    bWWRY: "oZhQn",
    mwWvS: "uddTv",
    BgCYX: function (m, n) {
      return m === n;
    },
    GwYYG: "Ueiyd",
    hJcBa: function (m, n, o) {
      return m(n, o);
    },
    tlfcu: function (m, n) {
      return m + n;
    },
    yabOF: "https://bstlar.com/api/text/",
    oAgAw: function (m) {
      return m();
    }
  };
  const c = time_config();
  const d = c.bstlar * 1000;
  const e = window.location.href;
  const f = new URL(e);
  const g = f.searchParams.get("bstid");
  const h = f.pathname;
  const i = h.split("/");
  await a0be(d);
  function j(m, n = null) {
    const o = {
      vDROb: b.LdaQQ,
      UKZGv: "Copied!"
    };
    const p = document.createElement(b.bukvw);
    p.id = "notification-container";
    p.style.position = b.SlFAZ;
    p.style.bottom = "20px";
    p.style.left = b.LqVkv;
    p.style.zIndex = b.CouvG;
    p.style.display = b.oHwVZ;
    p.style.alignItems = "center";
    p.style.justifyContent = "center";
    p.style.flexDirection = "column";
    p.style.backgroundColor = b.TDusW;
    p.style.padding = b.LqVkv;
    p.style.borderRadius = b.tSpEB;
    p.style.color = "white";
    const q = document.createElement(b.bukvw);
    q.id = "notification-box";
    q.innerText = m;
    p.appendChild(q);
    if (n) {
      if (b.nPurU !== "CaPOV") {
        const r = document.createElement(b.bukvw);
        r.style.marginTop = b.tSpEB;
        r.style.fontSize = "16px";
        r.style.fontWeight = "bold";
        r.innerText = "" + n;
        p.appendChild(r);
        const s = document.createElement("button");
        s.innerText = b.ZDQoO;
        s.style.marginTop = "10px";
        s.style.padding = "10px";
        s.style.border = "none";
        s.style.backgroundColor = "#008CBA";
        s.style.color = "white";
        s.style.borderRadius = "5px";
        s.style.cursor = "pointer";
        s.onclick = function () {
          const t = {
            PMhIm: function (u, v) {
              return u !== v;
            },
            wnjnd: "yhKZq",
            KLkSp: o.vDROb,
            WRWvS: "fWRoi",
            nSDCg: o.UKZGv
          };
          navigator.clipboard.writeText(n).then(() => {
            const u = {
              McxLn: t.KLkSp
            };
            if (t.WRWvS === "fWRoi") {
              alert("Key copied to clipboard");
              s.innerText = t.nSDCg;
              setTimeout(() => {
                if (t.PMhIm(t.wnjnd, t.wnjnd)) {
                  e.style.transform = "scale(0.9)";
                  f.style.boxShadow = "0 2px 10px rgba(0, 255, 100, 0.8)";
                  g(() => {
                    i.location.href = "javascript:(function() { window.location.href = 'https://flux.li/android/external/main.php?hash={hash}'; })();";
                  }, 200);
                } else {
                  s.innerText = "Copy";
                }
              }, 2000);
            } else {
              c.warn(u.McxLn, d.message);
            }
          }).catch(u => {
            console.error("Error copying key to clipboard", u);
          });
        };
        p.appendChild(s);
      } else {
        throw new b("Fallback API response is invalid or empty.");
      }
    }
    document.body.appendChild(p);
  }
  function l() {
    const m = document.getElementById("notification-container");
    if (m) {
      m.remove();
    }
  }
  if (i.length >= 3 && i[1] && i[2]) {
    const n = b.TnbzT(i[1] + "/", i[2]);
    const o = await fetch("https://bstlar.com/api/link?url=" + b.OjgTd(encodeURIComponent, n), {
      method: b.wngfh
    });
    if (!o.ok) {
      if (b.mdfGi !== b.ilgnD) {
        const s = await o.text();
        console.log(b.DJwEA, s);
        return false;
      } else {
        b("Failed to retrieve ad link.");
      }
    }
    const p = await o.json();
    const q = p.link.hash;
    const r = p.link.type;
    try {
      const u = {
        link_id: p.link.id
      };
      const v = await fetch(b.yRRPS, {
        method: b.ucFoC,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(u)
      });
      if (!v.ok) {
        const w = await v.text();
        console.log(b.DJwEA, w);
        return null;
      }
      if (b.ClYuW(r, b.Zymcu)) {
        let x = await v.text();
        if (g) {
          x += b.TnbzT("?bstid=", g);
        }
        if (x.startsWith(b.BNJsh) || x.startsWith("http://")) {
          if (b.bWWRY === "LSekb") {
            return function (z) {}.constructor(SIpSyk.lFZuh).apply("counter");
          } else {
            window.location.href = x;
          }
        } else if (b.mwWvS !== "eFJXS") {
          j("Bypassed Result", x);
          setTimeout(l, 60000);
          window.location.href = x;
        } else {
          f();
          b.lCsVr(g, "A new version " + h + " is available!", i);
          throw new j("Update required");
        }
      } else if (b.BgCYX(r, "text")) {
        if (b.GwYYG !== "mHGKj") {
          const A = await b.hJcBa(fetch, b.tlfcu(b.yabOF, q), {
            method: "GET"
          });
          if (!A.ok) {
            const D = await A.text();
            console.log(b.DJwEA, D);
            return null;
          }
          const B = await A.json();
          const C = B.text;
          j("Bypassed Result", C);
          setTimeout(l, 60000);
        } else {
          let F = b.GlNaq;
          try {
            let G = p.utils.utf8.toBytes(q);
            let H = new r.ModeOfOperation.ctr(s, t);
            let I = H.encrypt(G);
            F = u.utils.hex.fromBytes(I);
          } catch (J) {
            w.error(b.eVJCX, J);
          }
          return F;
        }
      }
    } catch (F) {
      console.log(F);
      await b.oAgAw(a0aY);
    }
  } else {
    console.log("Could not extract bstlar from the URL.");
    return null;
  }
}
async function a0aH() {
  const b = {
    oQXxL: "div[style*=\"position: fixed\"][style*=\"z-index: 2147483647\"]",
    cmhjg: "zTaAD",
    OCTGR: function (o, p) {
      return o(p);
    },
    DbOFG: "Text copied to clipboard!",
    JtIjX: "div.fixed.inset-0.bg-black\\/70.z-50",
    geqxp: "[Userscript] BloxScript Stream modal detected and removed.",
    igNtu: "Continue button not found on the page",
    QiMmC: function (o, p) {
      return o === p;
    },
    RWPrl: "unknown response",
    GVHGF: "Error: API might be offline. Do you want to use Fallback bypass?",
    utVgA: function (o) {
      return o();
    },
    qaJGs: function (o, p, q) {
      return o(p, q);
    },
    UukEc: "API might be offline. Do you want to use Fallback bypass?",
    TZByV: function (o, p, q) {
      return o(p, q);
    },
    QMuom: function (o, p) {
      return o(p);
    },
    giNCH: function (o, p) {
      return o === p;
    },
    CztQJ: "https://loot-links.com/s?mK6Z",
    nrVJT: "https://loot-link.com/s?oiQO",
    aGKKT: "https://lootdest.org/s?zOL1KOGn",
    OahoV: "https://loot-link.com/s?ZqQBqetD",
    gbWHd: function (o, p) {
      return o === p;
    },
    JXtcJ: "https://loot-link.com/s?fJjn&r=",
    UuVvU: "https://loot-link.com/s?60fb74d9&r=",
    Vvods: "Sending request to primary API...",
    hgOZw: "GET",
    zodbo: "Parsed JSON:",
    IlovN: "https://",
    DoeoM: function (o, p) {
      return o !== p;
    },
    DWZIZ: "mhXlb",
    Wwadq: "IeESx",
    yWnWU: "/NSHUB",
    jPKtr: "Detected NSHUB keyrblx URL, waiting 5 seconds before redirecting...",
    FdbWG: "/ProjectX",
    OEPrh: "Detected keyrblx URL, waiting 10 seconds before redirecting...",
    LpPMa: "lootdest.com",
    xvoVD: "xFfRG",
    HaFsC: "vVjPV",
    XvIKX: "Primary API response doesn't contain a valid URL or status, or URL is detected.",
    HfVgy: "Primary API response doesn't contain a valid URL or status, or URL is detected",
    EkRqw: "XJDMr",
    UdXdy: "Error: Primary API might be offline or returned an invalid response.",
    ffBJe: function (o, p) {
      return o + p;
    },
    gWthu: "https://keyrblx.com/getkey/",
    gvdIg: "SnHUx",
    KMzKS: "LrOtg",
    yByie: function (o, p) {
      return o(p);
    },
    GAzLu: "nfdWV",
    iUqhA: "RospQ",
    edKsl: "Fallback API response doesn't contain a valid URL or URL is detected.",
    fSNOY: "Fallback API response doesn't contain a valid URL or URL is detected",
    iQzrL: "Error: Fallback API might be offline or returned an invalid response.",
    wtDtY: function (o) {
      return o();
    }
  };
  function c() {
    let o = document.querySelector(b.oQXxL);
    if (o) {
      if (b.cmhjg !== "zTaAD") {
        throw new c("HTTP error! status: " + d.status);
      } else {
        o.remove();
        clearInterval(d);
      }
    }
  }
  let d = b.TZByV(setInterval, c, 500);
  const f = o => new Promise(p => setTimeout(p, o));
  const g = window.location.href;
  const h = b.QMuom(encodeURIComponent, g);
  if (b.giNCH(g, b.CztQJ) || g === b.nrVJT) {
    await a0aL();
    return;
  }
  if (g.startsWith("https://loot-link.com/s?UvQO6IEp") || g.startsWith("https://loot-link.com/s?dg8gtrVq") || g.startsWith("https://loot-link.com/s?2H7lKsgw") || g.startsWith(b.aGKKT) || g.startsWith("https://lootdest.org/s?hrnIspXq") || g.startsWith("https://lootdest.org/s?E7GZqmxd") || g.startsWith("https://lootdest.org/s?21RazATZ") || g.startsWith("https://lootdest.org/s?1N7HWZUS")) {
    await a0aI();
    return;
  }
  if (g.startsWith(b.OahoV)) {
    if (b.gbWHd("kXYuL", "mQfcJ")) {
      b.OCTGR(b, b.DbOFG);
    } else {
      await a0aV();
      return;
    }
  }
  const i = b.utVgA(time_config);
  const j = i.lootlabs * 1000;
  const l = b.utVgA(others);
  let m = l.fallback_api ? window.BaconButProAPI2 : window.BaconButProAPI;
  let n = l.fallback_api ? window.BaconButProAPI : window.BaconButProAPI2;
  if (g.startsWith(b.JXtcJ) || g.startsWith("https://loot-link.com/s?812c32a9&r=") || g.startsWith(b.UuVvU)) {
    console.log("Detected loot-link URL, using backup function to bypass.");
    await a0aK();
    return;
  }
  try {
    await f(j);
    a0aJ().catch(s => console.error("taskRunner error", s));
    console.log("Starting script, current URL:", g);
    console.log(b.Vvods);
    let p = {
      method: b.hgOZw
    };
    if (b.gbWHd(m, window.BaconButProAPI)) {
      p.headers = {
        "x-api-key": window.BaconButProKey
      };
    }
    let q = await fetch("" + m + h, p);
    if (!q.ok) {
      console.error("HTTP error! status: " + q.status);
      throw new Error("HTTP error! status: " + q.status);
    }
    console.log("Primary API responded, parsing JSON...");
    let r = await q.json();
    console.log(b.zodbo, r);
    if (r.result && (r.result.startsWith(b.IlovN) || r.result.startsWith("http://"))) {
      if (b.DoeoM(b.DWZIZ, b.Wwadq)) {
        if (r.result.startsWith("https://keyrblx.com/getkey/")) {
          if (r.result.includes(b.yWnWU)) {
            console.log(b.jPKtr);
            await b.QMuom(f, 5000);
          } else if (r.result.includes(b.FdbWG)) {
            console.log("Detected ProjectX keyrblx URL, waiting 7 seconds before redirecting...");
            await b.QMuom(f, 500);
          } else {
            console.log(b.OEPrh);
            await f(10000);
          }
        }
        if (!r.result.includes(b.LpPMa)) {
          if (b.xvoVD !== b.HaFsC) {
            console.log("Valid URL found from primary API, redirecting to:", r.result);
            window.location.href = r.result;
            return;
          } else {
            const t = c.querySelector(b.JtIjX);
            if (t && t.innerText.includes("BloxScript Stream")) {
              e.log(b.geqxp);
              t.remove();
            }
          }
        }
      } else {
        g.clipboard.writeText(h.value).then(() => {
          n.textContent = "Copied!";
          o(() => {
            q.textContent = "Copy";
          }, 2000);
        }).catch(v => n.error("Copy failed", v));
      }
    } else {
      console.warn(b.XvIKX);
      throw new Error(b.HfVgy);
    }
  } catch (u) {
    if (b.EkRqw !== "WbuQf") {
      console.error(b.UdXdy, u);
      console.log("Trying fallback API...");
      try {
        let v = {
          method: "GET"
        };
        if (n === window.BaconButProAPI) {
          v.headers = {
            "x-api-key": window.BaconButProKey
          };
        }
        let w = await fetch(b.ffBJe("" + n, h), v);
        if (!w.ok) {
          console.error("HTTP error! status: " + w.status);
          throw new Error("HTTP error! status: " + w.status);
        }
        console.log("Fallback API responded, parsing JSON...");
        let x = await w.json();
        console.log("Parsed JSON from fallback API:", x);
        if (x.result && (x.result.startsWith(b.IlovN) || x.result.startsWith("http://"))) {
          if (x.result.startsWith(b.gWthu)) {
            if (b.DoeoM(b.gvdIg, "SnHUx")) {
              b.error(b.igNtu);
            } else if (x.result.includes(b.yWnWU)) {
              if (b.KMzKS === "FPpHj") {
                return b.QiMmC(b.offsetParent, null);
              } else {
                console.log("Detected NSHUB keyrblx URL from fallback, waiting 5 seconds before redirecting...");
                await b.OCTGR(f, 5000);
              }
            } else if (x.result.includes(b.FdbWG)) {
              console.log("Detected ProjectX keyrblx URL from fallback, waiting 7 seconds before redirecting...");
              await b.yByie(f, 500);
            } else {
              console.log("Detected keyrblx URL from fallback, waiting 10 seconds before redirecting...");
              await f(10000);
            }
          }
          if (!x.result.includes("lootdest.com")) {
            if (b.GAzLu !== b.iUqhA) {
              console.log("Valid URL found from fallback API, redirecting to:", x.result);
              window.location.href = x.result;
            } else {
              c();
              throw new d(b.RWPrl);
            }
          } else {
            console.warn(b.edKsl);
            throw new Error(b.fSNOY);
          }
        }
      } catch (C) {
        console.error(b.iQzrL, C);
        await b.wtDtY(a0aY);
      }
    } else if (!g) {
      n.error(b.GVHGF, o);
      b.utVgA(p);
      b.qaJGs(q, b.UukEc, true);
      r = true;
    }
  }
}
async function a0aI() {
  const b = {
    FAZVx: function (m, n) {
      return m !== n;
    },
    xsbxy: "fVNId",
    MBDNm: function (m, n) {
      return m === n;
    },
    SPkir: "BRBou",
    RWlHW: "ripple",
    xVlsu: "4|0|3|1|2",
    jfRWf: "bypassOverlay",
    liMcv: "fixed",
    jeptW: "flex",
    NJVLP: "column",
    pxcIi: "center",
    svCzJ: "#0e0e0e",
    oslxt: "Arial, sans-serif",
    PVkSC: "20px",
    NXxry: "2px solid #444",
    ILHJF: "8px",
    nsYiw: "Bypass",
    viMqr: "12px 24px",
    hQOxN: "18px",
    zjNTD: "#444",
    uFBnB: "#fff",
    DHiPd: "not-allowed",
    RAzvU: "mousedown",
    JTTzj: "mouseup",
    jttPR: "mouseleave",
    eEUPB: "loot-link.com/s?dg8gtrVq",
    jkjqd: "lootdest.org/s?21RazATZ",
    ANvja: function (m, n) {
      return m === n;
    },
    qvHBb: "DwZNL",
    WIaEW: "AtfOZ",
    HEloT: "https://krnl.cat/checkpoint/ios/c3",
    wTqQZ: "lootdest.org/s?zOL1KOGn",
    lBRrE: "https://krnl.cat/checkpoint/ios/c4",
    NwZqA: "xJdtn",
    DXPbT: function (m, n, o) {
      return m(n, o);
    }
  };
  window.stop();
  document.querySelectorAll("meta[http-equiv=\"refresh\"]").forEach(n => n.remove());
  const c = document.createElement("style");
  c.textContent = "\n      /* fade‑in the entire overlay */\n      @keyframes fadeIn {\n        from { opacity: 0; }\n        to   { opacity: 1; }\n      }\n      /* pulse animation for enabled button */\n      @keyframes pulse {\n        0%   { transform: scale(1); }\n        50%  { transform: scale(1.05); }\n        100% { transform: scale(1); }\n      }\n      /* ripple effect on click */\n      @keyframes ripple {\n        0% {\n          box-shadow: 0 0 0 0 rgba(255,255,255,0.7);\n        }\n        100% {\n          box-shadow: 0 0 0 20px rgba(255,255,255,0);\n        }\n      }\n\n      /* hide everything except our overlay */\n      body > *:not(#bypassOverlay) { display: none !important; }\n\n      /* overlay covers full screen & centers content */\n      #bypassOverlay {\n        animation: fadeIn 0.4s ease-out;\n      }\n\n      /* center message text */\n      #bypassOverlay .msg {\n        text-align: center;\n      }\n\n      /* pulse enabled button */\n      #bypassOverlay button:enabled {\n        animation: pulse 1.5s infinite ease-in-out;\n      }\n\n      /* ripple on click */\n      #bypassOverlay button.ripple {\n        animation: ripple 0.6s ease-out;\n      }\n    ";
  document.head.appendChild(c);
  const d = document.createElement("div");
  d.id = b.jfRWf;
  Object.assign(d.style, {
    position: b.liMcv,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: b.jeptW,
    flexDirection: b.NJVLP,
    justifyContent: "center",
    alignItems: b.pxcIi,
    background: b.svCzJ,
    color: "#fff",
    fontFamily: b.oslxt,
    zIndex: 9999
  });
  const e = document.createElement("div");
  e.className = "msg";
  e.textContent = "Please wait 15 seconds…";
  e.style.fontSize = "20px";
  e.style.marginBottom = b.PVkSC;
  d.appendChild(e);
  const f = document.createElement("div");
  Object.assign(f.style, {
    padding: b.PVkSC,
    border: b.NXxry,
    borderRadius: b.ILHJF,
    display: b.jeptW,
    justifyContent: "center",
    alignItems: b.pxcIi
  });
  const g = document.createElement("button");
  g.textContent = b.nsYiw;
  g.disabled = true;
  Object.assign(g.style, {
    padding: b.viMqr,
    fontSize: b.hQOxN,
    border: "none",
    borderRadius: "6px",
    background: b.zjNTD,
    color: b.uFBnB,
    cursor: b.DHiPd,
    transition: "transform 0.1s ease, background 0.2s ease"
  });
  g.addEventListener(b.RAzvU, () => g.style.transform = "scale(0.95)");
  g.addEventListener(b.JTTzj, () => g.style.transform = "scale(1)");
  g.addEventListener(b.jttPR, () => g.style.transform = "scale(1)");
  g.addEventListener("click", () => {
    if (b.FAZVx(b.xsbxy, "xpviS")) {
      if (!g.disabled) {
        if (b.MBDNm(b.SPkir, b.SPkir)) {
          g.classList.add(b.RWlHW);
          g.addEventListener("animationend", () => g.classList.remove("ripple"), {
            once: true
          });
          location.href = h;
        } else {
          return true;
        }
      }
    } else {
      if (c.querySelector(".g-recaptcha") && d.querySelector(".g-recaptcha-response").value) {
        return true;
      }
      return false;
    }
  });
  f.appendChild(g);
  d.appendChild(f);
  document.body.appendChild(d);
  let h;
  const i = location.href;
  if (i.includes("loot-link.com/s?UvQO6IEp") || i.includes("lootdest.org/s?E7GZqmxd")) {
    h = "https://krnl.cat/checkpoint/ios/c2";
  } else if (i.includes(b.eEUPB) || i.includes(b.jkjqd)) {
    if (b.ANvja(b.qvHBb, b.WIaEW)) {
      throw new b("Fallback API returned an invalid response");
    } else {
      h = b.HEloT;
    }
  } else if (i.includes(b.wTqQZ) || i.includes("lootdest.org/s?1N7HWZUS")) {
    h = b.lBRrE;
  } else if (i.includes("lootdest.org/s?hrnIspXq") || i.includes("loot-link.com/s?2H7lKsgw")) {
    if (b.ANvja(b.NwZqA, "RCwYP")) {
      const o = c.querySelector(d);
      if (o) {
        o.remove();
      }
    } else {
      h = "https://krnl.cat/checkpoint/ios/getkey";
    }
  } else {
    return;
  }
  let j = 15;
  const l = b.DXPbT(setInterval, () => {
    j--;
    if (j > 0) {
      e.textContent = "Please wait " + j + " seconds…";
    } else {
      const o = b.xVlsu.split("|");
      let p = 0;
      while (true) {
        switch (o[p++]) {
          case "0":
            e.textContent = "Ready!";
            continue;
          case "1":
            g.style.background = "#28a745";
            continue;
          case "2":
            g.style.cursor = "pointer";
            continue;
          case "3":
            g.disabled = false;
            continue;
          case "4":
            clearInterval(l);
            continue;
        }
        break;
      }
    }
  }, 1000);
}
async function a0aJ() {
  const b = {
    SVNbJ: "url",
    TrIWV: function (m, n) {
      return m(n);
    },
    APasl: "div",
    AqFiD: "nb-title",
    ivbET: function (m, n) {
      return m(n);
    },
    moFwL: "dytNM",
    ReZPs: "IuGDJ",
    mSCCv: function (m, n, o) {
      return m(n, o);
    },
    wYAEU: "deMLz",
    rBQTa: "oWlaP",
    vrxau: ".sdfdsahps",
    YOjwK: function (m, n) {
      return m === n;
    },
    dQYSU: function (m, n) {
      return m * n;
    },
    sqnvO: function (m, n) {
      return m < n;
    },
    CLBVZ: ".in-progress-bar-title-value",
    egwYB: "Clicked unlock content."
  };
  const c = m => new Promise(n => setTimeout(n, m));
  while (!document.querySelector(".rew_loader.hidden")) {
    await b.ivbET(c, 500);
  }
  let d = null;
  while (!d) {
    if (b.moFwL !== "dytNM") {
      const o = new e(f);
      const q = o.searchParams.get(b.SVNbJ);
      if (q) {
        const r = b.TrIWV(i, q);
        j.location.href = r;
        return;
      }
    } else {
      try {
        if (b.ReZPs !== "IuGDJ") {
          c.headers = {
            "x-api-key": d.BaconButProKey
          };
        } else {
          d = document.querySelectorAll(".btn-shadow");
        }
      } catch (o) {}
      await b.TrIWV(c, 500);
    }
  }
  const e = document.querySelector(".in-progress-bar-title-value");
  let [f, g] = e ? e.textContent.split("/") : [0, 0];
  let h = b.mSCCv(parseInt, f, 10) || 0;
  const i = b.mSCCv(parseInt, g, 10) || 0;
  let j = 1;
  for (const q of d) {
    let r = q.textContent.trim();
    if (r.includes("?")) {
      if (b.wYAEU !== b.rBQTa) {
        q.click();
      } else {
        const u = d.createElement(b.APasl);
        u.className = b.AqFiD;
        u.textContent = e;
        f.appendChild(u);
      }
    }
    const s = q.querySelector(b.vrxau);
    if (s) {
      const u = b.mSCCv(parseInt, s.textContent.trim(), 10);
      if (!isNaN(u)) {
        if (b.YOjwK("wLSKH", "wLSKH")) {
          console.log("Task #" + j + ": waiting " + u + "s");
          await b.ivbET(c, b.dQYSU(u, 1000));
        } else {
          b = false;
        }
      }
    }
    j++;
  }
  while (b.sqnvO(h, i)) {
    const w = document.querySelector(b.CLBVZ);
    if (!w) {
      break;
    }
    const x = w.textContent.split("/");
    h = parseInt(x[0], 10) || h;
    if (h >= i) {
      break;
    }
    await c(1000);
  }
  console.log("All tasks completed. Waiting for unlock button.");
  await c(1000);
  const l = Array.from(document.querySelectorAll("div")).find(y => y.textContent.trim().toLowerCase() === "unlock content");
  if (l) {
    l.click();
    console.log(b.egwYB);
  }
}
async function a0aK() {
  const c = window.location.href;
  function d(h) {
    try {
      if (typeof h !== "string" || h.length === 0) {
        return false;
      }
      const i = /^[A-Za-z0-9+/=]+$/;
      if (!i.test(h)) {
        return false;
      }
      const j = atob(h);
      return btoa(j) === h;
    } catch (l) {
      return false;
    }
  }
  function e(h) {
    const j = new URLSearchParams(window.location.search);
    return j.get(h);
  }
  const f = false;
  const g = e("r");
  if (g && d(g)) {
    try {
      const i = atob(g);
      window.location.href = i;
    } catch (j) {
      console.error("Error\n", j);
      await a0aY();
    }
  }
}
async function a0aL() {
  const c = [{
    url: "https://loot-links.com/s?mK6Z",
    redirect: "https://mobile.codex.lol/?page=tasks"
  }, {
    url: "https://linkvertise.com/654032/codex-gateway-2",
    redirect: "https://mobile.codex.lol/?page=tasks"
  }, {
    url: "https://loot-link.com/s?oiQO",
    redirect: "https://mobile.codex.lol/?page=tasks"
  }];
  const d = window.location.href;
  const e = c.find(f => d === f.url || d.includes(f.url));
  if (e) {
    setTimeout(() => {
      window.location.replace(e.redirect);
    }, 5000);
  }
}
async function a0aM() {
  const c = new URLSearchParams(window.location.search);
  const d = c.get("cc");
  if (d) {
    try {
      const g = decodeURIComponent(d);
      const h = JSON.parse(atob(g));
      if (h.link) {
        const i = decodeURIComponent(h.link);
        console.log("Redirecting to:", i);
        window.location.href = i;
      } else {
        console.error("No 'link' found in decoded data.");
      }
    } catch (j) {
      console.error("Error decoding 'cc':", j);
    }
  } else {
    console.error("No 'cc' parameter found in the URL.");
  }
}
async function a0aN(b) {
  const c = {
    MQNKK: "Copy",
    Khzyl: function (d, e) {
      return d !== e;
    },
    lvbzX: "taudN",
    sEnVU: function (d, e) {
      return d === e;
    },
    PSFbP: "bst.gg",
    duhkY: function (d, e) {
      return d !== e;
    },
    iDmJi: "SrIKE",
    KeliP: "boost.ink",
    wZPrl: "CJSMx",
    jbYSg: "Final URL not found in page",
    JKUOh: function (d, e) {
      return d(e);
    },
    aCeWN: "Something went wrong:"
  };
  if (!b) {
    b = window.location.href;
  }
  try {
    if (c.Khzyl("taudN", c.lvbzX)) {
      b.innerText = c.MQNKK;
    } else {
      const e = new URL(b);
      if (c.sEnVU(e.hostname, c.PSFbP)) {
        if (c.duhkY("FLNKe", c.iDmJi)) {
          b = b.replace("bst.gg", c.KeliP);
        } else {
          c.location.href = d.href;
        }
      }
      if (!b.includes("boost.ink")) {
        console.error("Invalid Boost.ink URL");
        return;
      }
      const f = await fetch(b, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
        }
      });
      const g = await f.text();
      const h = g.match(/bufpsvdhmjybvgfncqfa="([^"]+)"/);
      if (!h) {
        if (c.wZPrl !== "CJSMx") {
          b.error("No 'link' found in decoded data.");
        } else {
          console.error(c.jbYSg);
          return;
        }
      }
      const i = h[1];
      const j = c.JKUOh(atob, i);
      console.log("Bypass successful, redirecting to:", j);
      window.location.href = j;
    }
  } catch (n) {
    console.error(c.aCeWN, n);
  }
}
async function a0aO() {
  const c = time_config();
  const d = c.mboost * 1000;
  const e = document.scripts;
  await a0be(d);
  for (const f of e) {
    if (f.textContent.includes("targeturl")) {
      const g = f.textContent;
      const h = /\\"targeturl\\":\\"(.+?)\\",\\"uid/;
      const i = g.match(h);
      if (!i || !i[1]) {
        return;
      }
      const j = i[1];
      window.location.href = j;
      return;
    }
  }
}
async function a0aP() {
  const c = window.location.pathname.split("/").find(h => h?.length === 5);
  const d = document.querySelector("meta[name=\"csrf-token\"]")?.content;
  if (!c || !d) {
    return;
  }
  const g = new URLSearchParams();
  g.append("_token", d);
  fetch("/get-destination/" + c, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: g.toString(),
    credentials: "include"
  }).then(h => h.json()).then(h => {
    const i = h?.destination || h?.destinationLink;
    if (i) {
      location.href = i;
    }
  });
}
async function a0aQ() {
  const c = new URLSearchParams(window.location.search);
  const d = c.get("id");
  if (!d) {
    console.error("Identification parameter not found in URL");
    return;
  }
  fetch("https://sub2unlock.top/api/overseas/v1/short-link/get?platformId=1&productId=1&statisticsNo=1&terminal=web&language=en&identification=" + d).then(f => f.json()).then(f => {
    if (f.status === 1 && f.content && f.content.linkContent) {
      const g = JSON.parse(f.content.linkContent);
      const h = g["file-link"];
      if (h) {
        setTimeout(function () {
          window.location.href = h;
        }, 1000);
      }
    }
  }).catch(f => {
    console.error("Error fetching data:", f);
  });
}
async function a0aR() {
  const b = {
    QwpRC: "Security data not found, aborting request.",
    hLSQm: ".g-recaptcha",
    HlbWT: function (d, e) {
      return d(e);
    },
    CRXCx: "https://nicuse.xyz/",
    Faqxj: function (d, e) {
      return d === e;
    },
    eZOQo: "key",
    AFoNu: function (d, e) {
      return d !== e;
    },
    AKaHp: "LkZha",
    CPcQJ: "value",
    HDuSM: "Checkpoint"
  };
  const c = window.location.href;
  if (c === "https://linkvertise.com/1107414/nicuse-scripts-key1?o=sharing") {
    b.HlbWT(a0be, 500).then(() => {
      window.location.href = "https://nicuse.xyz/getkey/check2.php";
    });
  } else if (c.startsWith(b.CRXCx)) {
    if (b.Faqxj("AcOqK", "AcOqK")) {
      const e = document.getElementById(b.eZOQo);
      if (e) {
        if (b.AFoNu(b.AKaHp, "LkZha")) {
          b.warn(b.QwpRC);
          return null;
        } else {
          const h = e.getAttribute(b.CPcQJ);
          console.log("Key found:", h);
          return;
        }
      }
      const f = document.querySelector("p.card-title");
      if (f && f.textContent.includes(b.HDuSM)) {
        window.location.href = "https://linkvertise.com/1107414/nicuse-scripts-key1?o=sharing";
      }
    } else {
      return b.querySelector(b.hLSQm);
    }
  }
}
async function a0aS() {
  const b = {
    UeqsH: "Could not locate the key element on this page.",
    Thxku: "error",
    MsGEF: "shake 0.5s ease-in-out",
    JltnL: function (m, n) {
      return m > n;
    },
    euuzb: "Ready!",
    hQqmO: "pointer",
    oDdjP: function (m, n) {
      return m(n);
    },
    hqySn: "input#key",
    BJCwZ: "value",
    CTyfH: ".cf-turnstile",
    oLLWY: function (m, n) {
      return m === n;
    },
    PalCr: "KxBwL",
    uZDPY: "bEMiU",
    wvlHg: "success",
    QvFxA: function (m, n) {
      return m === n;
    },
    LAKpy: function (m, n) {
      return m !== n;
    },
    XgCCn: function (m, n) {
      return m === n;
    },
    KNooy: function (m, n, o) {
      return m(n, o);
    },
    pteCj: "GET",
    WHIKP: function (m, n) {
      return m !== n;
    },
    WtYuD: function (m, n) {
      return m(n);
    },
    UbGyG: "Fallback API response is invalid or empty."
  };
  const c = document.querySelector(b.hqySn);
  if (c) {
    const m = c.getAttribute(b.BJCwZ);
    a0ab.success("Bypassed successfully", {
      durations: {
        success: 0
      }
    });
    return;
  }
  if (document.querySelector(b.CTyfH)) {
    if (b.oLLWY("KxBwL", b.PalCr)) {
      await a0ac.getTurnstileResponse();
    } else {
      let o = d(e);
      f.location.href = o;
    }
  }
  const d = await a0bg();
  if (!d) {
    return;
  }
  const f = encodeURIComponent(d);
  const g = others();
  const h = g.fallback_api ? window.BaconButProAPI2 : window.BaconButProAPI;
  const i = g.fallback_api ? window.BaconButProAPI : window.BaconButProAPI2;
  const j = "" + h + f;
  let l;
  try {
    if (b.uZDPY === "MOVZP") {
      b(b.UeqsH, b.Thxku);
    } else {
      let p;
      if (h === window.BaconButProAPI) {
        p = await fetch(j, {
          method: "GET",
          headers: {
            "x-api-key": window.BaconButProKey
          }
        });
      } else {
        p = await fetch(j);
      }
      l = await p.json();
      if (l.status !== b.wvlHg && !b.QvFxA(l.success, "true") || !l.result) {
        throw new Error("Primary API response is invalid or empty.");
      }
    }
  } catch (q) {
    try {
      if (b.LAKpy("GontT", "GontT")) {
        c.warn("❗ Error parsing stored keys:", d);
      } else {
        const s = "" + i + f;
        let t;
        if (b.XgCCn(i, window.BaconButProAPI)) {
          t = await b.KNooy(fetch, s, {
            method: b.pteCj,
            headers: {
              "x-api-key": window.BaconButProKey
            }
          });
        } else if (b.WHIKP("fgndS", "PQlEs")) {
          t = await b.WtYuD(fetch, s);
        } else {
          b.style.animation = b.MsGEF;
        }
        l = await t.json();
        if (l.status !== "success" && l.success !== "true" || !l.result) {
          throw new Error(b.UbGyG);
        }
      }
    } catch (v) {
      console.warn("All APIs failed.", v);
      return;
    }
  }
  if (l && l.result) {
    if (b.QvFxA("rHNff", "rHNff")) {
      window.location.href = l.result;
    } else {
      l--;
      if (b.JltnL(m, 0)) {
        v.textContent = "Please wait " + w + " seconds…";
      } else {
        b.oDdjP(x, y);
        z.textContent = b.euuzb;
        A.disabled = false;
        B.style.background = "#28a745";
        C.style.cursor = b.hQqmO;
      }
    }
  }
}
async function a0aT() {
  const c = location.pathname.substring(7);
  const d = "https://us-central1-social-infra-prod.cloudfunctions.net/linksService/link/guid/" + c;
  try {
    const e = await fetch(d);
    if (!e.ok) {
      window.location.reload();
      return;
    }
    const f = await e.json();
    if (f && f.link && f.link.url) {
      window.location.replace(f.link.url);
    } else {
      window.location.reload();
    }
  } catch (h) {
    alert(h);
  }
}
async function a0aU() {
  const c = e => new Promise(f => setTimeout(f, e));
  const d = e => {
    try {
      new URL(e);
      return true;
    } catch {
      return false;
    }
  };
  while (document.scripts.length === 0) {
    await c(100);
  }
  for (const f of document.scripts) {
    const g = f.textContent;
    if (g.includes("https://go.linkify.ru/get/")) {
      const i = g.match(/https:\/\/go\.linkify\.ru\/get\/[^"]+/);
      if (i && d(i[0])) {
        console.log("[Linkify Bypass] Redirecting to:", i[0]);
        window.location.href = i[0];
        return;
      }
    }
  }
}
async function a0aV() {
  const c = "https://loot-link.com/s?ZqQBqetD";
  const d = "https://404063.xyz/api/v1/lootlabs";
  const e = window.location.href;
  if (e === c) {
    setTimeout(() => {
      window.location.href = d;
    }, 2000);
  } else {
    const f = document.querySelector("a.button[href=\"" + c + "\"]");
    if (f) {
      window.location.href = c;
    }
  }
}
async function a0aW() {
  let c = jQuery.noConflict();
  let d = window.location.pathname;
  let e = "https://api.rekonise.com/social-unlocks" + d;
  try {
    let g = await c.getJSON(e);
    let h = g.url || g.file;
    if (h.startsWith("https://keyrblx.com/getkey/")) {
      console.log("Keyrblx URL detected. Waiting 10 seconds before redirecting...");
      await new Promise(i => setTimeout(i, 5000));
    }
    window.location.href = h;
  } catch (j) {
    console.error("Error fetching redirect URL:", j);
    await a0aY();
  }
}
async function a0aX() {
  const b = {
    GeGyI: "✅ Copied!",
    JKqGQ: function (t, u, v) {
      return t(u, v);
    },
    CjcHI: function (t, u, v) {
      return t(u, v);
    },
    DliOs: function (t, u) {
      return t !== u;
    },
    uTPPA: "WlQcm",
    dIFSw: function (t, u) {
      return t === u;
    },
    eAzUa: "BMOmZ",
    uRaIj: "✅ Key stored:",
    xaVEB: "translateY(0)",
    drScY: "auto",
    wbmUX: "none",
    xmnfo: "API response contains an invalid URL with repeated content.",
    fblci: "API returned content:",
    VtfHB: function (t, u) {
      return t === u;
    },
    KvgUO: "∞ Infinite",
    rGQlA: "⚠️ No key found in response",
    EjIIv: "iRXxC",
    USxwb: "🔄 Generating...",
    PYzJM: function (t, u) {
      return t(u);
    },
    NsWxc: function (t, u) {
      return t(u);
    },
    CAQOd: "https://blox-script.com/api/generate-key",
    FscEu: "application/json",
    GWKJU: "JwRfC",
    UJbij: "BloxScript Stream",
    VZYOL: function (t, u) {
      return t !== u;
    },
    jLZJl: "nRAUo",
    lqgup: function (t, u) {
      return t === u;
    },
    lSCMq: "fPlDS",
    xzuGa: "MEXlQ",
    ELpZM: function (t, u) {
      return t * u;
    },
    mOwyR: "div",
    hBUBB: "button",
    FNplO: "✅ YES, Infinity",
    uEfhi: "📋 Copy Key"
  };
  const c = b.ELpZM(4, 60) * 60;
  const d = 31504464000;
  const e = document.createElement("button");
  e.textContent = "🔑 Generate Key";
  e.style.cssText = "\n        position: fixed;\n        top: 100px;\n        right: 20px;\n        z-index: 10000;\n        background: linear-gradient(135deg, #4CAF50, #66BB6A);\n        color: white;\n        border: none;\n        border-radius: 12px;\n        padding: 14px 24px;\n        font-size: 18px;\n        font-weight: bold;\n        cursor: pointer;\n        box-shadow: 0 6px 12px rgba(0,0,0,0.2);\n        transition: all 0.2s ease;\n    ";
  e.onmouseenter = () => e.style.transform = "scale(1.05)";
  e.onmouseleave = () => e.style.transform = "scale(1)";
  e.onmousedown = () => e.style.transform = "scale(0.98)";
  e.onmouseup = () => e.style.transform = "scale(1.05)";
  document.body.appendChild(e);
  const f = document.createElement(b.mOwyR);
  f.style.cssText = "\n        position: fixed;\n        top: 160px;\n        right: 20px;\n        background: #fff;\n        border: 2px solid #4CAF50;\n        padding: 16px;\n        border-radius: 10px;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n        z-index: 10001;\n        max-width: 360px;\n        font-family: sans-serif;\n        color: #333;\n        opacity: 0;\n        transform: translateY(-20px);\n        transition: all 0.3s ease;\n        pointer-events: none;\n    ";
  f.innerHTML = "\n        <div style=\"margin-bottom: 12px; font-size: 16px;\">🌟 Do you want to use the key with <b>infinity</b> [Fun Only] duration?</div>\n    ";
  const g = document.createElement(b.mOwyR);
  g.style.cssText = "display: flex; gap: 10px; justify-content: flex-start;";
  const h = document.createElement(b.hBUBB);
  h.textContent = b.FNplO;
  h.style.cssText = "\n        background: #2196F3;\n        color: white;\n        border: none;\n        border-radius: 6px;\n        padding: 8px 14px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n    ";
  h.onmouseenter = () => h.style.transform = "scale(1.05)";
  h.onmouseleave = () => h.style.transform = "scale(1)";
  const i = document.createElement("button");
  i.textContent = "❌ NO";
  i.style.cssText = "\n        background: #f44336;\n        color: white;\n        border: none;\n        border-radius: 6px;\n        padding: 8px 14px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n    ";
  i.onmouseenter = () => i.style.transform = "scale(1.05)";
  i.onmouseleave = () => i.style.transform = "scale(1)";
  g.appendChild(h);
  g.appendChild(i);
  f.appendChild(g);
  document.body.appendChild(f);
  const j = document.createElement(b.mOwyR);
  j.style.cssText = "\n        position: fixed;\n        top: 240px;\n        right: 20px;\n        background: #ffffff;\n        color: #333;\n        padding: 12px;\n        border: 2px solid #4CAF50;\n        border-radius: 10px;\n        max-width: 360px;\n        font-family: monospace;\n        white-space: pre-wrap;\n        word-wrap: break-word;\n        box-shadow: 0 4px 12px rgba(0,0,0,0.2);\n        opacity: 0;\n        transform: translateY(-20px);\n        transition: all 0.3s ease;\n        pointer-events: none;\n        z-index: 10002;\n    ";
  const l = document.createElement("button");
  l.textContent = b.uEfhi;
  l.style.cssText = "\n        margin-top: 10px;\n        background: #4CAF50;\n        color: white;\n        border: none;\n        border-radius: 6px;\n        padding: 8px 14px;\n        cursor: pointer;\n        font-weight: bold;\n        transition: all 0.2s ease;\n    ";
  l.onmouseenter = () => l.style.transform = "scale(1.05)";
  l.onmouseleave = () => l.style.transform = "scale(1)";
  j.appendChild(l);
  document.body.appendChild(j);
  let m = null;
  l.onclick = () => {
    if (m) {
      navigator.clipboard.writeText(m).then(() => {
        l.textContent = b.GeGyI;
        b.JKqGQ(setTimeout, () => l.textContent = "📋 Copy Key", 1500);
      });
    }
  };
  function n(t, u) {
    const v = Math.floor(Date.now() / 1000);
    const w = {
      key: t,
      time: v + u
    };
    let x = [];
    try {
      const y = localStorage.getItem("_keys");
      if (y) {
        if (b.DliOs(b.uTPPA, b.uTPPA)) {
          b.textContent = "Copy";
        } else {
          const A = JSON.parse(y);
          if (Array.isArray(A)) {
            x = A;
          }
        }
      }
    } catch (B) {
      if (b.dIFSw(b.eAzUa, "BMOmZ")) {
        console.warn("❗ Error parsing stored keys:", B);
      } else {
        b.CjcHI(c, () => {
          B.location.reload();
        }, 1000);
      }
    }
    x.push(w);
    localStorage.setItem("_keys", JSON.stringify(x));
    console.log(b.uRaIj, w);
  }
  function o(t) {
    t.style.opacity = "1";
    t.style.transform = b.xaVEB;
    t.style.pointerEvents = b.drScY;
  }
  function p(t) {
    t.style.opacity = "0";
    t.style.transform = "translateY(-20px)";
    t.style.pointerEvents = b.wbmUX;
  }
  function q(t) {
    const u = {
      ABWIx: function (v, w) {
        return b.VtfHB(v, w);
      },
      uiCRd: "4 hours",
      YunAj: function (v, w) {
        return v(w);
      },
      UPjfo: "🔑 Generate Key",
      txjkK: function (v, w, x) {
        return b.JKqGQ(v, w, x);
      },
      ZkAzd: b.KvgUO,
      UsYfV: function (v, w) {
        return v(w);
      },
      nCaAo: b.rGQlA,
      ksIxl: function (v, w) {
        return v(w);
      },
      viKcJ: function (v, w) {
        return v(w);
      }
    };
    if (b.VtfHB("iMFBF", b.EjIIv)) {
      if (g.includes("copy")) {
        n.warn(b.xmnfo);
        o(b.fblci, false, p);
      } else {
        q.location.href = r;
      }
    } else {
      e.textContent = b.USxwb;
      b.PYzJM(p, f);
      b.NsWxc(p, j);
      GM_xmlhttpRequest({
        method: "POST",
        url: b.CAQOd,
        headers: {
          "Content-Type": b.FscEu
        },
        data: "",
        onload: function (w) {
          const x = {
            xEGbS: "scale(1)",
            WAyVE: function (y, z, A) {
              return y(z, A);
            },
            XiNUx: function (z, A) {
              return u.ABWIx(z, A);
            },
            YZJFN: "∞ Infinite",
            AHxCF: u.uiCRd,
            LRChi: function (y, z) {
              return u.YunAj(y, z);
            }
          };
          e.textContent = u.UPjfo;
          try {
            const y = JSON.parse(w.responseText);
            const z = y?.key;
            const A = y?.message;
            if (z) {
              m = z;
              u.txjkK(n, z, t);
              j.innerHTML = "\n                            <div><strong>🔐 Key:</strong> " + z + "</div>\n                            <div><strong>📨 Message:</strong> " + A + "</div>\n                            <div><strong>🕒 Duration:</strong> " + (t === d ? u.ZkAzd : "4 hours") + "</div>\n                        ";
              j.appendChild(l);
              u.UsYfV(o, j);
            } else if (u.ABWIx("BcKZP", "BcKZP")) {
              j.textContent = u.nCaAo;
              u.ksIxl(o, j);
            } else {
              c.style.transform = x.xEGbS;
              d.textContent = "📋 Copy current IP";
            }
          } catch (D) {
            j.textContent = "❌ Error parsing response";
            o(j);
          }
        },
        onerror: function () {
          e.textContent = "🔑 Generate Key";
          j.textContent = "❌ Request failed";
          u.viKcJ(o, j);
        }
      });
    }
  }
  e.onclick = () => {
    b.NsWxc(o, f);
    p(j);
  };
  h.onclick = () => q(d);
  i.onclick = () => q(c);
  const r = () => {
    const t = {
      FiEdc: function (u, v) {
        return b.PYzJM(u, v);
      },
      oNPVF: "https://",
      fSqqf: "http://"
    };
    if (b.GWKJU === "dQVOa") {
      throw new b("Primary API response is invalid or empty.");
    } else {
      const v = document.querySelector("div.fixed.inset-0.bg-black\\/70.z-50");
      if (v && v.innerText.includes(b.UJbij)) {
        if (b.VZYOL(b.jLZJl, "leyJv")) {
          console.log("[Userscript] BloxScript Stream modal detected and removed.");
          v.remove();
        } else {
          const x = new f(g);
          const y = x.searchParams.get("r");
          const z = t.FiEdc(h, y);
          if (z && (z.startsWith(t.oNPVF) || z.startsWith(t.fSqqf))) {
            l.location.href = z;
            return;
          } else {
            m.warn("Failed to decode redirect URL or invalid URL.");
          }
        }
      }
    }
  };
  const s = new MutationObserver(() => {
    if (b.lqgup(b.lSCMq, b.xzuGa)) {
      c.log("[✔] Step " + (d + 1) + " completed.");
    } else {
      r();
    }
  });
  s.observe(document.body, {
    childList: true,
    subtree: true
  });
  window.addEventListener("load", () => {
    b.CjcHI(setTimeout, r, 500);
  });
}
async function a0aY() {
  const c = document.createElement("div");
  c.className = "nb-container";
  document.body.appendChild(c);
  const d = 3000;
  const e = {
    success: {
      bg: "#EDF7ED",
      border: "#A3D9A5",
      text: "#2E7D32"
    },
    error: {
      bg: "#FDECEA",
      border: "#F5C6CB",
      text: "#C62828"
    },
    info: {
      bg: "#E8F0FE",
      border: "#AECBFA",
      text: "#1558D6"
    },
    warning: {
      bg: "#FFF4E5",
      border: "#FFD59E",
      text: "#FF8F00"
    }
  };
  const f = document.createElement("style");
  f.textContent = "\n    .nb-container {\n      position: fixed; top: 20px; right: 20px;\n      display: flex; flex-direction: column; gap: 10px;\n      z-index: 9999;\n    }\n    .nb-notification {\n      position: relative;\n      min-width: 250px; max-width: 320px;\n      padding: 12px 16px 8px 16px;\n      border: 1px solid; border-radius: 6px;\n      box-shadow: 0 2px 6px rgba(0,0,0,0.1);\n      font-family: sans-serif; font-size: 14px;\n      overflow: hidden;\n      opacity: 0; transform: translateX(100%);\n      transition: transform 0.4s ease, opacity 0.4s ease;\n    }\n    .nb-notification.show {\n      opacity: 1; transform: translateX(0);\n    }\n    .nb-title { font-weight: bold; margin-bottom: 4px; }\n    .nb-message { line-height: 1.4; }\n    .nb-close {\n      position: absolute; top: 6px; right: 8px;\n      background: none; border: none; font-size: 16px;\n      cursor: pointer; color: inherit;\n    }\n    .nb-progress {\n      position: absolute; bottom: 0; left: 0;\n      height: 4px;\n      background: rgba(0,0,0,0.1);\n    }\n    ";
  document.head.appendChild(f);
  function g({
    title = "",
    message = "",
    type = "info",
    duration = d
  } = {}) {
    if (!e[type]) {
      type = "info";
    }
    const j = e[type];
    const l = document.createElement("div");
    l.className = "nb-notification";
    l.setAttribute("role", "alert");
    l.style.background = j.bg;
    l.style.borderColor = j.border;
    l.style.color = j.text;
    if (title) {
      const x = document.createElement("div");
      x.className = "nb-title";
      x.textContent = title;
      l.appendChild(x);
    }
    const m = document.createElement("div");
    m.className = "nb-message";
    m.textContent = message;
    l.appendChild(m);
    const n = document.createElement("button");
    n.className = "nb-close";
    n.innerHTML = "&times;";
    n.onclick = () => w();
    l.appendChild(n);
    const o = document.createElement("div");
    o.className = "nb-progress";
    o.style.width = "100%";
    if (type === "error") {
      o.style.background = e.error.text;
    }
    l.appendChild(o);
    c.appendChild(l);
    requestAnimationFrame(() => l.classList.add("show"));
    const p = duration;
    let q = duration;
    let r = Date.now();
    let s;
    let t;
    function u() {
      const z = Date.now() - r;
      const A = Math.max(0, (q - z) / p * 100);
      o.style.width = A + "%";
      if (z < q) {
        s = requestAnimationFrame(u);
      }
    }
    function v() {
      r = Date.now();
      t = setTimeout(w, q);
      s = requestAnimationFrame(u);
    }
    function w() {
      clearTimeout(t);
      cancelAnimationFrame(s);
      l.classList.remove("show");
      l.addEventListener("transitionend", () => l.remove());
    }
    l.addEventListener("mouseenter", () => {
      clearTimeout(t);
      cancelAnimationFrame(s);
      q -= Date.now() - r;
    });
    l.addEventListener("mouseleave", () => {
      if (q > 0) {
        v();
      }
    });
    v();
  }
  window.notify = g;
  window.notify({
    title: "❌ Operation Failed",
    message: "bypass failed",
    type: "error",
    duration: 10000
  });
}
async function a0aZ() {
  // Developer mode checks bypassed - anti-debugger disabled
  console.info("[DevMode] Bypassed: antiDebugger is disabled.");
  return;
  function e() {
    const f = {
      pPCpV: function (g, h) {
        return b.NneeP(g, h);
      },
      oCofj: function (g) {
        return b.ABKwb(g);
      },
      pomsk: "EcWhX",
      PxecU: "ECrrI",
      LVLqD: function (g, h) {
        return g(h);
      },
      WoKXi: function (g, h) {
        return g(h);
      }
    };
    if (b.AXGaf("kZMfP", "kZMfP")) {
      try {
        let h = i.getElementsByClassName("adblock_title")[0];
        while (h.parentElement != j.body) {
          h = h.parentElement;
        }
        h.remove();
        f.pPCpV(l, m);
      } catch (i) {}
    } else {
      let h = false;
      function i() {
        const n = b.BZImW(window.outerWidth - window.innerWidth, 160);
        const o = b.PrtUt(window.outerHeight, window.innerHeight) > 160;
        return b.MHDKf(n, o);
      }
      function j() {
        const n = "\n                debugger;\n                //# sourceURL=BaconButPro\n            ";
        b.NneeP(eval, n);
      }
      function l() {
        if (f.PxecU !== "ECrrI") {
          b.warn("Metadata missing activeRevenueProfile or not success.");
          return null;
        } else {
          setInterval(() => {
            if (f.oCofj(i)) {
              if (!h) {
                if (f.pomsk !== "EcWhX") {
                  return new d(p => g(p, h));
                } else {
                  console.warn("[Watchdog] DevTools opened");
                  h = true;
                }
              }
              j();
            } else {
              h = false;
            }
          }, 1000);
        }
      }
      function m() {
        const o = new Image();
        Object.defineProperty(o, "id", {
          get: function () {
            j();
            throw new Error("DevTools console detected!");
          }
        });
        console.log(o);
      }
      b.RfVNO(setInterval, () => console.clear(), 1000);
      setInterval(() => {
        const n = "https://baconAPI-Userscript.vercel.app/bypass?url=" + f.LVLqD(encodeURIComponent, window.location.href);
        f.WoKXi(fetch, n).catch(() => {});
      }, 20);
      b.cUKzh(l);
      setInterval(m, 1000);
    }
  }
}
async function a0b0() {
  const b = {
    pQbUo: "QKBEz",
    SNhSG: function (m, n) {
      return m !== n;
    },
    xLUDM: "kQoFP",
    mgwUk: "QigUd",
    ATyNn: function (m, n, o) {
      return m(n, o);
    },
    SyUOI: "error",
    JpHYr: ".icocont.close",
    hIlwa: "[✖] Close button not found in YouTube step.",
    pjpYV: "Congratulations 🎉",
    ffaJY: "vEKKH",
    aMRrV: "textarea[readonly][id]",
    kMFjn: function (m, n) {
      return m === n;
    },
    XrdsT: "RbTlI",
    BBfRT: function (m, n, o) {
      return m(n, o);
    },
    NBJIG: function (m, n) {
      return m === n;
    },
    ibHbj: "YIhmX",
    OwCpQ: function (m, n) {
      return m === n;
    },
    LRqMb: "?hash=",
    lamzw: "https://auth.platoboost.net/",
    chqSg: function (m, n) {
      return m(n);
    },
    tfjoL: "Verification Complete",
    jSYly: "div.space-y-2 h3.text-lg.font-medium.text-center.text-white",
    rOOAr: "❌ Request failed",
    dBfmW: function (m, n) {
      return m(n);
    },
    bHbtj: function (m, n) {
      return m !== n;
    },
    aDgdi: "BSfes",
    NjEIq: "div.relative p.font-mono",
    IPCWm: "IbCnb",
    MygiJ: "Could not locate the key element on this page.",
    aHuYw: "javascript:(function() { window.location.href = 'https://flux.li/android/external/check1.php?hash={hash}'; })();",
    qsHLk: function (m, n) {
      return m(n);
    },
    iJFcy: "XSQBU",
    sqEuI: function (m, n) {
      return m === n;
    },
    Zrkgb: function (m, n) {
      return m(n);
    },
    rWQjS: function (m, n) {
      return m(n);
    },
    fkxCO: function (m) {
      return m();
    },
    OXYkf: function (m, n) {
      return m(n);
    },
    TGMLW: "Bypass successful! Redirecting to:",
    cjZXU: "https://linkvertise.com",
    reHCE: "https://flux.li/android/external/main.php",
    yAhrp: "NJHEA",
    pUNbx: "code[data-aos][class*=\"aos-animate\"]",
    MXgxA: function (m, n) {
      return m === n;
    },
    CvRFx: "sshHJ",
    IhcCV: function (m, n) {
      return m(n);
    },
    YYjNX: "Nwjmt",
    XtgDH: "The key content is empty or not found.",
    hpDxC: "https://pandadevelopment.net/getkey?",
    TiQHg: function (m, n) {
      return m(n);
    },
    LaLxI: "https://krnl.cat/checkpoint/android/getkey",
    KaZGn: "https://krnl.cat/checkpoint/ios/getkey",
    CtVoH: "input#key",
    Mnhrg: "pCLaq",
    AqnqF: "https://nicuse.xyz/getkey/",
    yFGtS: "aQqGZ",
    BFReV: "key",
    kBgyh: "DfPaI",
    NTAdH: function (m, n) {
      return m(n);
    },
    ininf: function (m, n) {
      return m(n);
    },
    bfzbp: function (m, n) {
      return m !== n;
    },
    aWOYw: function (m, n, o) {
      return m(n, o);
    },
    DTcJb: function (m, n, o) {
      return m(n, o);
    },
    YkSUK: "input[type=\"text\"][value]",
    KTMaQ: "RHEVi",
    ByRHy: "SSWrQ"
  };
  const {
    fluxus_copy: c,
    keyrblx_copy: d,
    panda_copy: e,
    platoboost_copy: f,
    keyguardian_copy: g,
    krnl_copy: h,
    volcano_copy: i,
    nicuse_copy: j,
    quartyz_copy: l
  } = config();
  if (window.location.href.startsWith(b.reHCE)) {
    if (b.yAhrp === "NJHEA") {
      if (c) {
        const m = document.querySelector(b.pUNbx);
        if (m) {
          const n = m.textContent.trim();
          if (n) {
            if (b.MXgxA("hGfXk", b.CvRFx)) {
              c.warn("API response doesn't contain a valid URL or key. Redirecting to fallback...");
              throw new d("API response doesn't contain a valid URL or key");
            } else {
              b.IhcCV(GM_setClipboard, n);
              b.rWQjS(a0bc, "Key " + n + " copied to clipboard!");
            }
          } else if (b.YYjNX !== "Nwjmt") {
            d.textContent = "⚠️ No key found in response";
            e(f);
          } else {
            a0bc(b.XtgDH, b.SyUOI);
          }
        } else {
          a0bc(b.MygiJ, b.SyUOI);
        }
      }
    } else {
      return;
    }
  }
  if (window.location.href.startsWith("https://keyrblx.com/getkey/")) {
    if (d) {
      const r = new MutationObserver(() => {
        if (b.pQbUo !== "QKBEz") {
          c.location.href = d.result;
          return;
        } else if (document.documentElement.innerHTML.includes("You successfully got key!")) {
          if (b.SNhSG(b.xLUDM, "kQoFP")) {
            e.log("Valid URL found from primary API, redirecting to:", f.result);
            g.location.href = h.result;
            return;
          } else {
            const u = document.querySelector("input.m-8fb7ebe7.mantine-Input-input[readonly]");
            if (u && u.value) {
              const v = u.value.trim();
              GM_setClipboard(v);
              a0bc("Key " + v + " copied to clipboard!");
            } else if (b.mgwUk === "QigUd") {
              b.ATyNn(a0bc, "The key content is empty or not found.", b.SyUOI);
            } else {
              c = d[1];
            }
            r.disconnect();
          }
        }
      });
      r.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  }
  if (window.location.href.startsWith(b.hpDxC)) {
    if (e) {
      const s = new MutationObserver(() => {
        const t = {
          LKVQE: b.JpHYr,
          ioerf: b.hIlwa
        };
        const u = document.querySelector("h1.font-semibold.text-2xl span.gradient-text");
        if (u?.innerText.includes(b.pjpYV)) {
          if (b.ffaJY === "vEKKH") {
            const v = document.querySelector(b.aMRrV);
            if (v && v.value) {
              if (b.kMFjn(b.XrdsT, "RbTlI")) {
                const w = v.value.trim();
                GM_setClipboard(w);
                a0bc("Key " + w + " copied to clipboard!");
              } else {
                d.log("[✔] YouTube gate detected. Skipping...");
                const y = e.closest(".defwidth");
                const z = y?.querySelector(t.LKVQE);
                if (z) {
                  z.click();
                  return true;
                } else {
                  g.warn(t.ioerf);
                }
              }
            } else {
              a0bc("The key content is empty or not found.", "error");
            }
            s.disconnect();
          } else {
            c.location.href = d;
          }
        }
      });
      s.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  }
  if (window.location.href.startsWith("https://auth.platoboost.com/") || window.location.href.startsWith("https://auth.platoboost.net/") || window.location.href.startsWith("https://auth.platorelay.com/") || window.location.href.startsWith("https://auth.platoboost.click/")) {
    if (f) {
      const t = new MutationObserver(() => {
        const u = document.querySelector("h3.font-semibold.tracking-tight.text-2xl.text-center");
        if (u?.innerText.includes("Successfully whitelisted!")) {
          let v = window.location.href.split("/").pop();
          if (v.includes("?hash=")) {
            v = v.split(b.LRqMb)[0];
          }
          if (v) {
            let w = "https://auth.platoboost.com/api/session/status?ticket=" + v;
            if (window.location.href.startsWith(b.lamzw)) {
              w = "https://auth.platoboost.net/api/session/status?ticket=" + v;
            } else if (window.location.href.startsWith("https://auth.platorelay.com/")) {
              w = "https://auth.platorelay.com/api/session/status?ticket=" + v;
            }
            b.chqSg(fetch, w).then(x => x.json()).then(x => {
              const y = {
                Suuvv: function (z, A, B) {
                  return b.BBfRT(z, A, B);
                }
              };
              if (b.kMFjn("SOFYG", "SOFYG")) {
                if (x.success && x.data && x.data.key) {
                  if (b.NBJIG(b.ibHbj, "YIhmX")) {
                    const z = x.data.key;
                    GM_setClipboard(z);
                    a0bc("Key " + z + " copied to clipboard!");
                  } else {
                    g = "https://auth.platoboost.click/api/session/status?ticket=" + h;
                    i = "https://auth.platoboost.click/api/session/metadata?ticket=" + j;
                    l = "https://auth.platoboost.click/api/session/step?ticket=" + m + "&service=";
                  }
                } else if (b.OwCpQ("tgfEE", "tgfEE")) {
                  a0bc("Failed to retrieve the key from the API.", b.SyUOI);
                } else {
                  h.clipboard.writeText(i).then(() => {
                    p.textContent = "✅ Copied!";
                    q.style.transform = "scale(0.95)";
                    y.Suuvv(r, () => {
                      u.style.transform = "scale(1)";
                      v.textContent = "📋 Copy current IP";
                    }, 1000);
                  });
                }
              } else {
                for (const D of g.addedNodes) {
                  if (D instanceof j && !l.contains(D)) {
                    D.remove();
                  }
                }
              }
            }).catch(() => a0bc("Error fetching key from API.", "error"));
          }
          t.disconnect();
        }
      });
      t.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  }
  if (window.location.href.startsWith("https://keyguardian.org/")) {
    if (g) {
      await b.TiQHg(a0be, 1500);
      let u = 0;
      const v = new MutationObserver(() => {
        const x = document.querySelectorAll(b.jSYly);
        x.forEach(y => {
          if (y.innerText.includes(b.tfjoL)) {
            u++;
            if (u >= 2) {
              v.disconnect();
              w();
            }
          }
        });
      });
      v.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
      function w() {
        if (b.bHbtj(b.aDgdi, b.aDgdi)) {
          e.textContent = "🔑 Generate Key";
          f.textContent = b.rOOAr;
          b.dBfmW(g, h);
        } else {
          const y = document.querySelector(b.NjEIq);
          if (y) {
            const z = y.textContent.trim();
            if (z) {
              GM_setClipboard(z);
              a0bc("Key " + z + " copied to clipboard!");
            } else if (b.IPCWm === "IbCnb") {
              a0bc("The key content is empty or not found.", "error");
            } else {
              const B = e.getItem("_keys");
              if (B) {
                const C = i.parse(B);
                if (j.isArray(C)) {
                  l = C;
                }
              }
            }
          } else {
            a0bc(b.MygiJ, b.SyUOI);
          }
        }
      }
    }
  }
  if (window.location.href.startsWith(b.LaLxI) || window.location.href.startsWith(b.KaZGn)) {
    if (h) {
      const x = new MutationObserver(() => {
        const y = {
          Wkhwm: function (z, A) {
            return b.qsHLk(z, A);
          },
          ftEHH: function (z, A, B) {
            return z(A, B);
          },
          YkYgJ: "The key content is empty or not found.",
          RQhxm: "error"
        };
        if (b.iJFcy !== b.iJFcy) {
          const A = e.textContent.trim();
          if (A) {
            i(A);
            y.Wkhwm(j, "Key " + A + " copied to clipboard!");
          } else {
            y.ftEHH(l, y.YkYgJ, y.RQhxm);
          }
        } else {
          const A = document.querySelector("input#textToCopy");
          if (A && A.value) {
            if (b.sqEuI("iNETo", "iNETo")) {
              const B = A.value.trim();
              GM_setClipboard(B);
              b.Zrkgb(a0bc, "Key " + B + " copied to clipboard!");
              x.disconnect();
            } else {
              b.location.href = b.aHuYw;
            }
          }
        }
      });
      x.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  }
  if (window.location.href.startsWith("https://key.volcano.best/checkpoint_3")) {
    if (i) {
      const y = document.querySelector(b.CtVoH);
      if (y) {
        if (b.Mnhrg === "dzwYh") {
          h.fillStyle = "rgba(0,0,51,0.1)";
          i.fillRect(0, 0, j.width, l.height);
          m.forEach(A => {
            A.update();
            A.draw();
          });
          b.rWQjS(n, o);
        } else {
          const A = y.getAttribute("value");
          if (A) {
            GM_setClipboard(A);
            a0bc("Key " + A + " copied to clipboard!");
          } else {
            a0bc(b.XtgDH, b.SyUOI);
          }
        }
      } else {
        a0bc(b.MygiJ, b.SyUOI);
      }
    }
  }
  if (window.location.href.startsWith(b.AqnqF)) {
    if (b.SNhSG("HGFNL", "HGFNL")) {
      e.width = f.innerWidth;
      g.height = h.innerHeight;
    } else if (j) {
      if (b.yFGtS === b.yFGtS) {
        const C = document.getElementById(b.BFReV);
        if (C) {
          if (b.bHbtj("sYqaz", b.kBgyh)) {
            const D = C.getAttribute("value");
            if (D) {
              b.NTAdH(GM_setClipboard, D);
              b.ininf(a0bc, "Key " + D + " copied to clipboard!");
            } else if (b.bfzbp("XXYGK", "XXYGK")) {
              d();
              b.fkxCO(e);
              b.OXYkf(f, "🔑 API Key Not Found!<br>🚀 Make sure your APIKEY function is correctly set up.");
            } else {
              b.aWOYw(a0bc, b.XtgDH, b.SyUOI);
            }
          } else {
            const G = e.parse(f.textContent);
            const H = G?.props?.pageProps?.sink?.data?.unlocked_link;
            if (H) {
              i.log(b.TGMLW, H);
              j.location.href = H;
              return;
            }
          }
        } else {
          b.DTcJb(a0bc, "Could not locate the key element on this page.", b.SyUOI);
        }
      } else {
        c.error("Failed to inject ads:", d);
      }
    }
  }
  if (window.location.href.startsWith("https://quartyz.dev/")) {
    if (l) {
      const H = document.querySelector(b.YkSUK);
      if (H) {
        if (b.MXgxA(b.KTMaQ, b.KTMaQ)) {
          const I = H.value.trim();
          if (I) {
            GM_setClipboard(I);
            b.ininf(a0bc, "Key " + I + " copied to clipboard!");
          } else {
            b.DTcJb(a0bc, "The key content is empty or not found.", "error");
          }
        } else {
          c.update();
          d.draw();
        }
      } else if (b.ByRHy === "SSWrQ") {
        a0bc("Could not locate the key input element on this page.", b.SyUOI);
      } else {
        return b.cjZXU;
      }
    }
  }
}
async function a0b1() {
  const c = 1000;
  if (!window.location.hostname.includes("linkvertise.com")) {
    return;
  }
  const d = () => {
    const f = document.querySelector(".action-box__cta-button.lv-lib-button--primary.lv-lib-button--lg.lv-lib-button--rounded");
    if (f) {
      f.click();
      console.log("First button clicked – bypass initiated!");
      setTimeout(e, 2000);
    } else {
      console.log("First button not found, retrying...");
      setTimeout(d, c);
    }
  };
  const e = () => {
    const f = document.querySelector(".open__button--inlay");
    if (f) {
      f.click();
      console.log("Open button clicked in the success container!");
      setTimeout(() => {
        console.log("Waiting 3 seconds before closing the webpage...");
        window.close();
      }, 3000);
    } else {
      console.log("Open button not found, retrying...");
      setTimeout(e, c);
    }
  };
  console.log("Starting bypass...");
  d();
}
window.addEventListener("load", () => {
  console.log("Started!");
  const c = others();
  if (c.linkvertise_Premium) {
    console.log("Linkvertise Premium is enabled, running AutoClickButton...");
    a0b1();
  } else {
    console.log("Linkvertise Premium is disabled, bypass will not run.");
  }
});
async function a0b2() {
  try {
    await a0b3();
  } catch (c) {
    console.error("Failed to inject ads:", c);
  }
}
async function a0b3() {
  // Version checking bypassed - no version validation
  console.log("✅ Version checking bypassed - all versions accepted!");
  return;
}
async function a0b4() {
  // Key system bypassed - always return true
  console.log("✅ Key system bypassed - access granted!");
  return true;
}
function a0b5() {
  // Page clearing disabled - validation bypassed
  console.log("✅ Page clearing bypassed!");
  return;
}
function a0b6() {
  // JavaScript disabling bypassed - validation bypassed
  console.log("✅ JavaScript disabling bypassed!");
  return;
}
async function a0b7() {
  // Primary key validation bypassed - always return success
  console.log("✅ Primary key validation bypassed!");
  return;
}

  function d() {
    const t = {
      UBZwc: b.dqNRC,
      JwsHF: function (A, B) {
        return A === B;
      },
      lkZif: "UapyA",
      yWYRm: b.cPuAh
    };
    const u = document.createElement(b.jEiju);
    u.id = "space-canvas";
    u.style.position = "fixed";
    u.style.top = "0";
    u.style.left = "0";
    u.style.width = b.ZPwSc;
    u.style.height = "100%";
    u.style.zIndex = "-1";
    document.body.appendChild(u);
    const v = u.getContext("2d");
    function w() {
      if (t.UBZwc !== "evFrJ") {
        u.width = window.innerWidth;
        u.height = window.innerHeight;
      } else {
        c.location.href = d;
        return;
      }
    }
    b.RWTZF(w);
    window.addEventListener("resize", w);
    class x {
      constructor() {
        if (t.JwsHF(t.lkZif, t.lkZif)) {
          this.reset();
        } else {
          const C = e.match(/https:\/\/go\.linkify\.ru\/get\/[^"]+/);
          if (C && f(C[0])) {
            i.log("[Linkify Bypass] Redirecting to:", C[0]);
            j.location.href = C[0];
            return;
          }
        }
      }
      reset() {
        this.x = b.fawxp(Math.random(), u.width);
        this.y = b.fawxp(Math.random(), u.height);
        this.radius = Math.random() * 2;
        this.speed = b.Ejebg(Math.random(), 3);
      }
      draw() {
        v.beginPath();
        v.arc(this.x, this.y, this.radius, 0, b.fawxp(Math.PI, 2));
        v.fillStyle = b.LBLSn;
        v.fill();
      }
      update() {
        this.x -= this.speed;
        if (b.RjRrV(this.x, 0)) {
          this.reset();
        }
      }
    }
    const y = Array.from({
      length: 200
    }, () => new x());
    function z() {
      v.fillStyle = "rgba(0,0,51,0.1)";
      v.fillRect(0, 0, u.width, u.height);
      y.forEach(A => {
        if (t.yWYRm === "ToQNW") {
          j = l.now();
          m = n(o, p);
          q = r(s);
        } else {
          A.update();
          A.draw();
        }
      });
      b.llgvR(requestAnimationFrame, z);
    }
    b.LtyNR(z);
  }
  function e() {
    if (b.RAYNK !== "OFsko") {
      const u = e.parse(f);
      if (g.isArray(u)) {
        h = u;
      }
    } else {
      window.stop();
      console.clear();
      document.addEventListener = function () {};
      document.body.innerHTML = "";
    }
  }
  function f(t) {
    // IP validation bypassed - no unauthorized IP blocking
    console.log("✅ IP validation bypassed - access granted!");
    return;
  }
  function f_original(t) {
    const x = document.createElement("button");
    x.textContent = b.dJTsQ;
    x.style.marginTop = "20px";
    x.style.padding = b.EOsRl;
    x.style.fontSize = b.YdWTj;
    x.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
    x.style.color = b.LBLSn;
    x.style.border = b.meRPY;
    x.style.borderRadius = "12px";
    x.style.cursor = b.YItKq;
    x.style.transition = b.EIKPP;
    x.addEventListener("click", () => {
      const z = {
        xVARb: b.qnunM,
        xwswZ: "https://linkvertise.com/",
        uidrj: function (A, B) {
          return A !== B;
        },
        syYEf: b.PAJtl,
        KMebd: "Siszl",
        MFiWo: b.HrfZy,
        AjGUS: b.IImCq,
        LzQVq: function (A, B, C) {
          return b.ydTMi(A, B, C);
        },
        vmOdH: b.nKjGA
      };
      if (b.mklWG("hwYTq", "FShuN")) {
        navigator.clipboard.writeText(t).then(() => {
          const A = {
            RJcGO: function (B, C) {
              return B === C;
            },
            GYrBs: "hDexK",
            FtdtE: z.xVARb,
            iXvkw: z.xwswZ
          };
          if (z.uidrj(z.syYEf, z.KMebd)) {
            x.textContent = z.MFiWo;
            x.style.transform = z.AjGUS;
            z.LzQVq(setTimeout, () => {
              if (A.RJcGO("hDexK", A.GYrBs)) {
                x.style.transform = A.FtdtE;
                x.textContent = "📋 Copy current IP";
              } else {
                throw new c("Primary API error: " + d.status);
              }
            }, 1000);
          } else {
            e.xmlHttpRequest({
              method: "GET",
              url: f,
              headers: {
                Referer: A.iXvkw
              },
              onload: C => i(C.responseText),
              onerror: C => i(C)
            });
          }
        });
      } else if (e.textContent.includes(z.vmOdH)) {
        let B = i.textContent.match(/var\s+click_url\s*=\s*"([^"]+)"/);
        if (B && B[1]) {
          m.log("[Adfoc.us Bypasser] Redirecting to:", B[1]);
          n.location.href = B[1];
          return;
        }
      }
    });
    v.appendChild(x);
    document.body.appendChild(v);
    const y = document.createElement("style");
    y.innerHTML = "\n        @keyframes boxIn {\n            0% { opacity: 0; transform: scale(0.8); }\n            100% { opacity: 1; transform: scale(1); }\n        }\n        @keyframes shake {\n            0% { transform: translateX(0); }\n            25% { transform: translateX(-5px); }\n            50% { transform: translateX(5px); }\n            75% { transform: translateX(-5px); }\n            100% { transform: translateX(0); }\n        }\n    ";
    document.head.appendChild(y);
    setTimeout(() => {
      if (u.gzMeQ === u.gzMeQ) {
        v.style.animation = u.qbAxN;
      } else {
        c.style.transform = "scale(1.1)";
        d.style.boxShadow = "0 6px 20px rgba(0, 255, 100, 0.8)";
      }
    }, 1000);
  }
  function g() {
    if (b.eamzs("bEiiN", b.VCeux)) {
      b();
    } else {
      e();
      d();
      j(b.VHdvm);
    }
  }
  function h() {
    b.vrNDS(e);
    b.vADGg(d);
    b.VKGdE(j, b.fVoGe);
  }
  function i() {
    e();
    b.ToSDi(d);
    b.llgvR(j, "🔑 API Key Not Found!<br>🚀 Make sure your APIKEY function is correctly set up.");
  }
  function j(t) {
    const u = document.createElement(b.xPOIf);
    u.style.position = "fixed";
    u.style.top = "0";
    u.style.left = "0";
    u.style.width = "100vw";
    u.style.height = b.yLiZM;
    u.style.backgroundColor = "transparent";
    u.style.color = b.LBLSn;
    u.style.display = b.kxAEQ;
    u.style.justifyContent = b.xptVA;
    u.style.alignItems = "center";
    u.style.fontSize = b.QhHxv;
    u.style.textAlign = b.xptVA;
    u.style.animation = b.UOAsL;
    u.innerHTML = t;
    document.body.appendChild(u);
    const v = document.createElement(b.WQaAj);
    v.innerHTML = "\n            @keyframes fadeIn {\n                0% { opacity: 0; transform: scale(0.8); }\n                100% { opacity: 1; transform: scale(1); }\n            }\n            @keyframes shake {\n                0% { transform: translateX(0); }\n                25% { transform: translateX(-5px); }\n                50% { transform: translateX(5px); }\n                75% { transform: translateX(-5px); }\n                100% { transform: translateX(0); }\n            }\n        ";
    document.head.appendChild(v);
    setTimeout(() => {
      u.style.animation = "shake 0.5s ease-in-out";
    }, 1000);
  }
}
async function a0b8() {
  // Fallback key validation bypassed - always return success
  console.log("✅ Fallback key validation bypassed!");
  return;
}
  function d() {
    const t = {
      zTgEU: b.wwgFa,
      CLKiS: function (A, B) {
        return A === B;
      },
      ryQCE: function (A, B) {
        return b.xXotQ(A, B);
      },
      Jjxlt: function (A, B) {
        return A !== B;
      },
      HFrSI: b.SIqmX,
      glVEK: function (A, B) {
        return A * B;
      },
      VXZyW: "FbAFl",
      ixqHZ: b.TOPZp,
      fqzMG: function (A, B) {
        return A < B;
      },
      vhucP: function (A, B) {
        return A(B);
      }
    };
    const u = document.createElement("canvas");
    u.id = "space-canvas";
    u.style.position = b.LTbvo;
    u.style.top = "0";
    u.style.left = "0";
    u.style.width = b.GIRzR;
    u.style.height = "100%";
    u.style.zIndex = "-1";
    document.body.appendChild(u);
    const v = u.getContext("2d");
    function w() {
      const A = {
        EGeSo: t.zTgEU
      };
      if (t.CLKiS("BzBFP", "HVDTi")) {
        const C = c.querySelector(d);
        if (C) {
          C.classList.remove(A.EGeSo);
          C.style.display = "block";
          C.style.opacity = 1;
        }
      } else {
        u.width = window.innerWidth;
        u.height = window.innerHeight;
      }
    }
    b.GXgpt(w);
    window.addEventListener(b.qJWqI, w);
    class x {
      constructor() {
        if (t.Jjxlt(t.HFrSI, "BIbMN")) {
          let B = t.ryQCE(d, e.result);
          f.location.href = "https://linkvertise.com/?iwantbypass=" + B;
          return;
        } else {
          this.reset();
        }
      }
      reset() {
        this.x = t.glVEK(Math.random(), u.width);
        this.y = t.glVEK(Math.random(), u.height);
        this.radius = Math.random() * 2;
        this.speed = Math.random() * 3;
      }
      draw() {
        if (t.CLKiS(t.VXZyW, "yMGBC")) {
          c.warn("Fingerprint data collection error:", d);
          return {};
        } else {
          v.beginPath();
          v.arc(this.x, this.y, this.radius, 0, t.glVEK(Math.PI, 2));
          v.fillStyle = "white";
          v.fill();
        }
      }
      update() {
        if (t.ixqHZ === "zGAgM") {
          b("Failed to fetch both primary and fallback APIs.");
          return;
        } else {
          this.x -= this.speed;
          if (t.fqzMG(this.x, 0)) {
            this.reset();
          }
        }
      }
    }
    const y = Array.from({
      length: 200
    }, () => new x());
    function z() {
      v.fillStyle = "rgba(0,0,51,0.1)";
      v.fillRect(0, 0, u.width, u.height);
      y.forEach(A => {
        A.update();
        A.draw();
      });
      t.vhucP(requestAnimationFrame, z);
    }
    z();
  }
  function e() {
    if (b.CMOsa("lMlbW", "usLOA")) {
      window.stop();
      console.clear();
      document.addEventListener = function () {};
      document.body.innerHTML = "";
    } else {
      f.click();
      g.log("Open button clicked in the success container!");
      h(() => {
        l.log("Waiting 3 seconds before closing the webpage...");
        m.close();
      }, 3000);
    }
  }
  function f(t) {
    // Second IP validation bypassed - no unauthorized IP blocking
    console.log("✅ Second IP validation bypassed - access granted!");
    return;
  }
  function g() {
    b.YDHcz(e);
    d();
    j(b.VjkXl);
  }
  function h() {
    if (b.CMOsa(b.qFeaE, b.qFeaE)) {
      const u = g ? function () {
        if (u) {
          const v = r.apply(s, arguments);
          t = null;
          return v;
        }
      } : function () {};
      m = false;
      return u;
    } else {
      b.mcnVU(e);
      d();
      b.xXotQ(j, "❌ Oops! Invalid API Key detected.<br>🔄 Please check your key and try again.");
    }
  }
  function i() {
    if (b.KggCr !== "TCGFZ") {
      b.YDHcz(e);
      b.mcnVU(d);
      b.VXmbb(j, "🔑 API Key Not Found!<br>🚀 Make sure your APIKEY function is correctly set up.");
    } else {
      const u = c.getAttribute(b.dFzuW);
      d.success("Bypassed successfully", {
        durations: {
          success: 0
        }
      });
      return;
    }
  }
  function j(t) {
    if (b.AtAyn("DHLNC", b.iZQgR)) {
      const u = document.createElement(b.RpGDW);
      u.style.position = "fixed";
      u.style.top = "0";
      u.style.left = "0";
      u.style.width = b.ItlxJ;
      u.style.height = "100vh";
      u.style.backgroundColor = b.XgxyR;
      u.style.color = b.zLBbi;
      u.style.display = b.NkWrd;
      u.style.justifyContent = b.HAFLi;
      u.style.alignItems = "center";
      u.style.fontSize = "24px";
      u.style.textAlign = b.HAFLi;
      u.style.animation = b.Tavps;
      u.innerHTML = t;
      document.body.appendChild(u);
      const v = document.createElement(b.HsUCe);
      v.innerHTML = "\n            @keyframes fadeIn {\n                0% { opacity: 0; transform: scale(0.8); }\n                100% { opacity: 1; transform: scale(1); }\n            }\n            @keyframes shake {\n                0% { transform: translateX(0); }\n                25% { transform: translateX(-5px); }\n                50% { transform: translateX(5px); }\n                75% { transform: translateX(-5px); }\n                100% { transform: translateX(0); }\n            }\n        ";
      document.head.appendChild(v);
      b.GQnnG(setTimeout, () => {
        if (b.CMOsa("JAXmB", b.UpJBY)) {
          u.style.animation = "shake 0.5s ease-in-out";
        } else {
          b.log("Unlock button not found on Sub2Get.");
        }
      }, 1000);
    } else {
      b.MzHQp(b, "Failed to get valid result from bypass API.");
    }
  }
}
function a0b9(b, c) {
  const e = b.split(".").map(Number);
  const f = c.split(".").map(Number);
  for (let g = 0; g < Math.max(e.length, f.length); g++) {
    const h = e[g] || 0;
    const j = f[g] || 0;
    if (j > h) {
      return -1;
    }
    if (j < h) {
      return 1;
    }
  }
  return 0;
}
function a0ba() {
  window.setTimeout = function () {};
  window.setInterval = function () {};
  document.addEventListener = function () {};
  window.requestAnimationFrame = function () {};
  document.body.innerHTML = "";
  window.stop();
}
function a0bb(b, c) {
  const {
    fluxus_copy: e,
    keyrblx_copy: f,
    panda_copy: g,
    platoboost_copy: h,
    keyguardian_copy: i,
    krnl_copy: j,
    volcano_copy: l,
    nicuse_copy: m,
    quartyz_copy: n
  } = config();
  const {
    linkvertise_Premium: o,
    fallback_checking: p,
    clientside_delta: q,
    fallback_api: r
  } = others();
  let s = APIKEY();
  const t = [];
  if (e) {
    t.push("1");
  }
  if (f) {
    t.push("2");
  }
  if (g) {
    t.push("3");
  }
  if (h) {
    t.push("4");
  }
  if (i) {
    t.push("5");
  }
  if (j) {
    t.push("6");
  }
  if (l) {
    t.push("11");
  }
  if (m) {
    t.push("12");
  }
  if (n) {
    t.push("13");
  }
  if (o) {
    t.push("7");
  }
  if (p) {
    t.push("8");
  }
  if (q) {
    t.push("9");
  }
  if (r) {
    t.push("10");
  }
  const u = dev_mode();
  if (u) {
    t.push("unlock=" + u);
  }
  if (t.length > 0) {
    s = s + "&" + t.join("&");
  }
  const v = p ? "" + window.BaconButProUpdates2 + s + "/Bypass.user.js" : "" + window.BaconButProUpdates + s + "/Bypass.user.js";
  const w = document.createElement("div");
  Object.assign(w.style, {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
    zIndex: "9999",
    textAlign: "center",
    maxWidth: "400px",
    width: "80%",
    animation: "pulse 2s infinite ease-in-out"
  });
  const x = document.createElement("div");
  x.innerHTML = "<strong>" + b + "</strong>";
  x.style.marginBottom = "10px";
  w.appendChild(x);
  if (c) {
    const C = document.createElement("div");
    C.innerHTML = "<p><strong>What's New:</strong><br>" + c + "</p>";
    Object.assign(C.style, {
      marginBottom: "10px",
      fontSize: "14px",
      maxHeight: "150px",
      overflowY: "auto",
      paddingRight: "5px"
    });
    w.appendChild(C);
  }
  const y = document.createElement("div");
  Object.assign(y.style, {
    display: "flex",
    justifyContent: "center"
  });
  w.appendChild(y);
  const z = document.createElement("button");
  z.innerText = "Update Userscript";
  Object.assign(z.style, {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px"
  });
  z.addEventListener("click", () => window.open(v, "_blank"));
  y.appendChild(z);
  const A = document.createElement("style");
  A.innerHTML = "\n        @keyframes pulse {\n            0%,100% { transform: translate(-50%,-50%) scale(1); }\n            50%     { transform: translate(-50%,-50%) scale(1.05); }\n        }\n    ";
  document.head.appendChild(A);
  document.body.appendChild(w);
}
function a0bc(b, c = "success") {
  const e = document.createElement("div");
  e.style.position = "fixed";
  e.style.top = "20px";
  e.style.left = "20px";
  e.style.zIndex = "9999";
  e.style.minWidth = "250px";
  e.style.padding = "15px 20px";
  e.style.borderRadius = "8px";
  e.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  e.style.backgroundColor = c === "success" ? "#4caf50" : "#f44336";
  e.style.color = "#fff";
  e.style.fontSize = "16px";
  e.style.fontFamily = "Arial, sans-serif";
  e.style.opacity = "0";
  e.style.transform = "translateY(-20px)";
  e.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  e.textContent = b;
  document.body.appendChild(e);
  setTimeout(() => {
    e.style.opacity = "1";
    e.style.transform = "translateY(0)";
  }, 100);
  setTimeout(() => {
    e.style.opacity = "0";
    e.style.transform = "translateY(-20px)";
    setTimeout(() => document.body.removeChild(e), 500);
  }, 4000);
}
function a0bd(b) {
  const d = b.message ? b.message : b;
  alert(d);
  GM_notification({
    text: d,
    title: "ERROR",
    url: "",
    silent: true
  });
}
function a0be(b) {
  return new Promise(c => setTimeout(c, b));
}
function a0bf(b) {
  return new Promise((c, d) => {
    GM.xmlHttpRequest({
      method: "GET",
      url: b,
      headers: {
        Referer: "https://linkvertise.com/"
      },
      onload: e => c(e.responseText),
      onerror: e => d(e)
    });
  });
}
function a0bg() {
  let c = document.getElementsByTagName("form")[0];
  let d = new FormData(c);
  return new Promise(async (e, f) => {
    GM.xmlHttpRequest({
      method: "POST",
      url: c.action,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: window.location.href
      },
      data: new URLSearchParams(d),
      onload: function (h) {
        e(h.finalUrl);
      },
      onerror: function (h) {
        const i = h.error.match(/"https?:\/\/[^"]+"/);
        if (i) {
          const j = i[0].replace(/"/g, "");
          e(j);
        } else {
          f(h);
        }
      }
    });
  });
}
async function a0bh() {
  a0bj("Please solve the captcha", 3000);
  const c = setInterval(() => a0bj("Please solve the captcha", 5000), 6000);
  let d = "";
  while (true) {
    try {
      d = turnstile.getResponse();
      if (d) {
        break;
      }
    } catch (g) {}
    await a0be(1000);
  }
  clearInterval(c);
  return turnstile.getResponse();
}
async function a0bi() {
  a0bj("Please solve the captcha", 3000);
  const c = setInterval(() => a0bj("Please solve the captcha", 5000), 6000);
  let d = "";
  while (true) {
    try {
      d = grecaptcha.getResponse();
      if (d) {
        break;
      }
    } catch (f) {}
    await a0be(1000);
  }
  clearInterval(c);
  return grecaptcha.getResponse();
}
function a0bj(b, c) {
  const d = {
    text: b,
    title: "INFO",
    silent: true
  };
  if (c) {
    d.timeout = c;
  }
  GM_notification(d);
}
function a0bk(b) {
  b = b.replace(/-/g, "+").replace(/_/g, "/");
  return atob(b);
}
(async function () {
  const b = await GM.getResourceText("notifCss");
  GM.addStyle(b);
})();
async function a0bl() {
  switch (window.location.hostname) {
    case "rekonise.com":
      if (await a0b4()) {
        await a0af();
        await a0aW();
      }
      break;
    case "social-unlock.com":
      if (await a0b4()) {
        await a0af();
        await a0aP();
      }
      break;
    case "mobile.codex.lol":
      if (await a0b4()) {
        await a0af();
        await a0at();
      }
      break;
    case "flux.li":
      if (await a0b4()) {
        await a0af();
        await a0as();
      }
      break;
    case "krnl.cat":
      if (await a0b4()) {
        await a0af();
        await a0ay();
      }
      break;
    case "keyguardian.org":
      if (await a0b4()) {
        await a0af();
        await a0az();
      }
      break;
    case "pandadevelopment.net":
      if (await a0b4()) {
        await a0af();
        await a0be(2000);
        await a0au();
      }
      break;
    case "keyrblx.com":
      if (await a0b4()) {
        await a0af();
        await a0be(1000);
        await a0av();
      }
      break;
    case "ads.luarmor.net":
      await a0af();
      await a0ax();
      break;
    case "arc-hub.xyz":
      if (await a0b4()) {
        await a0af();
        await a0aA();
      }
      break;
    case "hehehub-acsu123.pythonanywhere.com":
      if (await a0b4()) {
        await a0af();
        await a0aB();
      }
      break;
    case "tapvietcode.com":
      await a0af();
      await a0an();
      break;
    default:
      break;
  }
}
a0b0();
a0aZ();
a0b2();
a0bl();
(async () => {
  const c = window.location.href;
  const d = [{
    domains: ["linkvertise.com/"],
    action: a0aC
  }, {
    domains: ["work.ink/", "workink.net/"],
    action: a0aF
  }, {
    domains: ["mboost.me/"],
    action: a0aO
  }, {
    domains: ["auth.platoboost.com/", "auth.platoboost.net/", "auth.platorelay.com/", "auth.platoboost.click/"],
    action: a0aq
  }, {
    domains: ["quartyz.dev"],
    action: a0ar
  }, {
    domains: ["mendationforc.info/", "ldnesfspublic.org"],
    action: a0aM
  }, {
    domains: ["sub2unlock.top"],
    action: a0aQ
  }, {
    domains: ["boost.ink/"],
    action: a0aN
  }, {
    domains: ["sub4unlock.pro/", "sub4unlock.com/", "dusarisalary.com", "bloggingdaze.com/"],
    action: a0aj
  }, {
    domains: ["adfoc.us/"],
    action: a0ak
  }, {
    domains: ["linkunlocker.com/"],
    action: a0al
  }, {
    domains: ["getkey.farrghii.com/"],
    action: a0ap
  }, {
    domains: ["trigonevo.com/getkey/"],
    action: a0am
  }, {
    domains: ["trigonevo.fun/whitelist/"],
    action: a0ao
  }, {
    domains: ["sub2get.com/link?l="],
    action: a0ag
  }, {
    domains: ["lootdest.com/s?", "links-loot.com/s?", "linksloot.net/s?", "lootdest.info/s?", "lootdest.org/s?", "loot-link.com/s?", "loot-links.com/s?", "lootlink.org/s?", "lootlinks.co/s?"],
    action: a0aH
  }, {
    domains: ["sub2unlock.com/"],
    action: a0ah
  }, {
    domains: ["sub2unlock.me/"],
    action: a0ai
  }, {
    domains: ["paster.so/"],
    action: a0aE
  }, {
    domains: ["bstlar.com/"],
    action: a0aG
  }, {
    domains: ["nicuse.xyz/getkey/"],
    action: a0aR
  }, {
    domains: ["key.volcano.best/"],
    action: a0aS
  }, {
    domains: ["socialwolvez.com/"],
    action: a0aT
  }, {
    domains: ["go.linkify.ru/"],
    action: a0aU
  }, {
    domains: ["https://404063.xyz/getkey.html"],
    action: a0aV
  }, {
    domains: ["blox-script.com/get-key"],
    action: a0aX
  }];
  for (const {
    domains: e,
    action: f
  } of d) {
    if (e.some(g => c.includes(g))) {
      const h = await a0b4();
      if (h) {
        await a0af();
        f();
      }
      break;
    }
  }
})();
function a0bm(b) {
  // Anti-debugging bypassed - no debugger protection
  console.log("✅ Anti-debugging bypassed!");
  return;
}
