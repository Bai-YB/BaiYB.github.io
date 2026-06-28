(function () {
  var current = document.currentScript;
  var endpoint = current && current.getAttribute("data-endpoint");
  if (!endpoint) return;
  function visitorId() {
    var key = "hexo-lite-visitor-id";
    var value = localStorage.getItem(key);
    if (!value) {
      value = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
      localStorage.setItem(key, value);
    }
    return value;
  }
  function collectUrl() {
    var url = new URL(endpoint, location.origin);
    if (!/\/collect\/?$/.test(url.pathname)) {
      url.pathname = url.pathname.replace(/\/$/, "") + "/collect";
    }
    return url.toString();
  }
  var payload = {
    path: location.pathname,
    title: document.title,
    referrer: document.referrer,
    visitorId: visitorId(),
    timestamp: new Date().toISOString()
  };
  var body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    navigator.sendBeacon(collectUrl(), new Blob([body], { type: "application/json" }));
    return;
  }
  fetch(collectUrl(), { method: "POST", headers: { "content-type": "application/json" }, body: body, keepalive: true }).catch(function () {});
})();