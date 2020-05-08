import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { wmkClass } from "../../logic";
//import postscribe from "postscribe";

const SSFormEmbed = React.forwardRef(
  ({ account, formID, width, height, domain, hidden, className }, ref) => {
    const formRef = useRef();
    useEffect(() => {
      const target = formRef.current;
      window.ss_form = {
        account,
        formID,
        width,
        height,
        domain,
        hidden
      };



      // const domainIdSplit = domain.split(".")[0];
      // const domainId = domainIdSplit.substr(4, domain.length - 4);
      // const src = `https://koi-${domainId}.marketingautomation.services/client/form.js?ver=2.0.1`

      // const script = document.createElement("script")

      // script.src = src
      // script.type = "text/javascript"
      // script.async = false

      // target.appendChild(script)

    //   postscribe(
    //     target,
    //     `<script type="text/javascript" src="https://koi-${domainId}.marketingautomation.services/client/form.js?ver=2.0.1"></script>`
    //   );

      return () => empty(target);
    });
    return (
      <div
        className={wmkClass("form-embed", "sharpspring", className)}
        ref={ref}
      >
        <div ref={formRef}></div>
      </div>
    );
  }
);

export default SSFormEmbed;

SSFormEmbed.propTypes = {
  account: PropTypes.string.isRequired,
  formID: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  domain: PropTypes.string.isRequired,
  hidden: PropTypes.object
};

SSFormEmbed.defaultProps = {
  width: "100%",
  height: 1,
  hidden: null
};

const empty = tar => {
  while (tar.firstChild) tar.removeChild(tar.firstChild);
  return tar;
};

const copiedSSForm = !(function(e) {
  var t,
    n,
    o,
    r,
    i,
    a,
    d,
    c,
    s = document.referrer,
    h = [],
    l = function(e) {
      if (e) {
        var t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
        return t ? unescape(t[2]) : null;
      }
      return document.cookie;
    },
    m = function() {
      var i;
      if (e.target_id) {
        if (!(i = document.getElementById(e.target_id))) return;
        if (i.getAttribute("ssformAdded")) return;
        i.setAttribute("ssformAdded", 1);
      } else e.polling = !1;
      e.intervalId &&
        !e.polling &&
        (clearInterval(e.intervalId), (e.intervalId = 0));
      var a = l("__ss_tk");
      "http:" === window.location.protocol && h.push("_noSsl=1"),
        a && h.push("_tk=" + a);
      var c = h.length ? "?" + h.join("&") : "",
        s = [
          '<iframe id="ssf_',
          n,
          '" src="',
          d,
          t,
          "/",
          n,
          c,
          '" style="overflow-y: auto" frameborder="0" height="',
          r || 1e3,
          '" width="',
          o || 500,
          '"></iframe>',
        ].join("");
      i ? (i.innerHTML = s) : document.write(s),
        "function" != typeof window.postMessage &&
          setInterval(function() {
            window.location.hash.match(/^#redirectURL=(.*)/) &&
              (window.top.location = RegExp.$1);
          }, 500);
    },
    p = function(e) {
      var t = e.data;
      if (t && "redirect" === t.action && t.url) {
        if ("/" === t.url.charAt(0)) {
          var o = document.createElement("a");
          if (
            ((o.href = window.top.location), "pages.services" === o.hostname)
          ) {
            var r = o.pathname.split("/", 2);
            2 === r.length &&
              -1 === t.url.indexOf(r[1]) &&
              (t.url = "/" + r[1] + t.url);
          }
        }
        window.top.location = t.url;
      } else
        t &&
          t.formID &&
          t.formID === n &&
          ((c = document.getElementById("ssf_" + t.formID)),
          t.force
            ? (c.height = t.height || c.height)
            : (c.height = Math.max(t.height, c.height)),
          c.parentNode &&
            ((c.parentNode.style.minHeight = t.height + "px"),
            c.parentNode.parentNode &&
              (c.parentNode.parentNode.style.minHeight = t.height + "px")));
    };
  !(function() {
    if (
      ((t = e.account),
      (n = e.formID),
      (o = e.width || "100%"),
      (r = e.height || 200),
      (i = e.domain),
      (a = e.hidden),
      (d = "https://"),
      t && n && i)
    ) {
      if (
        ((d += i
          ? i + "/prospector/form/"
          : "app.sharpspring.com/prospector/form/"),
        a)
      )
        for (var c in a)
          a.hasOwnProperty(c) &&
            h.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
      s && h.push("rf__sb=" + encodeURIComponent(s)),
        void 0 !== window.addEventListener
          ? window.addEventListener("message", p, !1)
          : void 0 !== window.attachEvent && window.attachEvent("onmessage", p),
        "complete" !== document.readyState && e.target_id
          ? document.addEventListener
            ? document.addEventListener("DOMContentLoaded", function() {
                e.intervalId = setInterval(function() {
                  m();
                }, 100);
              })
            : document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && m();
              })
          : m();
    } else
      console &&
        console.warn &&
        console.warn(
          "It seems that the embed code was not implemented correctly. "
        );
  })();
})(ss_form);

