(() => {
  "use strict";

  const CONFIG = {
    workerUrl:
      "https:" +
      "//baiyb-visitor-api.2191724299.workers.dev",

    blogLatitude: 40.13845,
    blogLongitude: 116.23488,

    cacheTime: 10 * 60 * 1000,
    requestTimeout: 5000,

    // false = 完整显示 IP
    // true = 对 IP 打码
    maskIp: false
  };

  const CACHE_KEY = "baiybVisitorWorkerData";
  const CACHE_TIME_KEY = "baiybVisitorWorkerTime";

  /* =========================
     判断是否主页
     ========================= */

  function isHomePage() {
    return (
      (
        location.pathname === "/" ||
        location.pathname === "/index.html"
      ) &&
      document.querySelector("#recent-posts") !== null &&
      document.querySelector("#post") === null
    );
  }

  /* =========================
     IP 处理
     ========================= */

  function isIPv4(ip) {
    return (
      typeof ip === "string" &&
      /^(\d{1,3}\.){3}\d{1,3}$/.test(ip)
    );
  }

  function isIPv6(ip) {
    return (
      typeof ip === "string" &&
      ip.includes(":")
    );
  }

  function formatIp(ip) {
    if (!ip) {
      return "未知";
    }

    if (!CONFIG.maskIp) {
      return ip;
    }

    if (isIPv4(ip)) {
      const parts = ip.split(".");

      return (
        parts[0] +
        "." +
        parts[1] +
        ".xxx.xxx"
      );
    }

    if (isIPv6(ip)) {
      const parts =
        ip
          .split(":")
          .filter(Boolean);

      return (
        parts
          .slice(0, 3)
          .join(":") +
        "::****"
      );
    }

    return ip;
  }

  /* =========================
     距离
     ========================= */

  function getDistanceKm(
    lat1,
    lon1,
    lat2,
    lon2
  ) {
    const R = 6371.0088;

    const rad =
      value =>
        value * Math.PI / 180;

    const dLat =
      rad(lat2 - lat1);

    const dLon =
      rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLon / 2) ** 2;

    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

    return Math.round(R * c);
  }

  /* =========================
     地区文字
     ========================= */

  function buildLocation(data) {
    const parts = [
      data.country_name,
      data.region,
      data.city
    ].filter(Boolean);

    return (
      [...new Set(parts)].join(" · ") ||
      "暂时无法定位"
    );
  }

  /* =========================
     时间 / 问候
     ========================= */

  function getHour(timezone) {
    try {
      const parts =
        new Intl.DateTimeFormat(
          "zh-CN",
          {
            timeZone: timezone || undefined,
            hour: "2-digit",
            hourCycle: "h23"
          }
        ).formatToParts(new Date());

      const hour =
        Number(
          parts.find(
            item => item.type === "hour"
          )?.value
        );

      if (Number.isFinite(hour)) {
        return hour;
      }
    } catch {}

    return new Date().getHours();
  }

  function getGreeting(timezone) {
    const hour = getHour(timezone);

    if (hour >= 5 && hour < 9) {
      return {
        icon: "🌅",
        text: "早上好，新的一天开始了！"
      };
    }

    if (hour >= 9 && hour < 12) {
      return {
        icon: "☀️",
        text: "上午好，愿今天一切顺利！"
      };
    }

    if (hour >= 12 && hour < 14) {
      return {
        icon: "🍚",
        text: "中午好，记得好好吃饭！"
      };
    }

    if (hour >= 14 && hour < 18) {
      return {
        icon: "🌤️",
        text: "下午好，今天也要加油！"
      };
    }

    if (hour >= 18 && hour < 23) {
      return {
        icon: "🌙",
        text: "晚上好，欢迎来逛逛！"
      };
    }

    return {
      icon: "✨",
      text: "夜深了，也要记得早点休息！"
    };
  }

  /* =========================
     创建卡片
     ========================= */

  function createCard() {
    if (!isHomePage()) {
      return null;
    }

    const existing =
      document.getElementById(
        "baiyb-visitor-card"
      );

    if (existing) {
      return existing;
    }

    const card =
      document.createElement("div");

    card.id =
      "baiyb-visitor-card";

    card.className =
      "card-widget baiyb-visitor-aurora";

    card.innerHTML = `
      <div class="visitor-aurora-bg"></div>

      <div class="visitor-aurora-top">

        <div class="visitor-aurora-title-area">

          <div class="visitor-aurora-eyebrow">
            VISITOR INSIGHT
          </div>

          <div class="visitor-aurora-title">
            欢迎来自
            <span id="visitor-title-country">
              神秘地区
            </span>
            的朋友 👋
          </div>

          <div
            class="visitor-aurora-subtitle"
            id="visitor-title-location"
          >
            正在确认你从哪里来...
          </div>

        </div>

        <div class="visitor-aurora-orb">
          🌍
        </div>

      </div>

      <div class="visitor-aurora-location">

        <div class="visitor-aurora-label">
          📍 当前位置
        </div>

        <div
          class="visitor-aurora-main-value"
          id="visitor-location"
        >
          正在获取...
        </div>

      </div>

      <div class="visitor-aurora-grid">

        <div class="visitor-aurora-metric">

          <div class="visitor-aurora-label">
            🌐 IP 地址
          </div>

          <div
            class="visitor-aurora-value"
            id="visitor-ip"
          >
            正在获取...
          </div>

        </div>

        <div class="visitor-aurora-metric">

          <div class="visitor-aurora-label">
            🧭 距离博主
          </div>

          <div
            class="visitor-aurora-value"
            id="visitor-distance"
          >
            正在计算...
          </div>

        </div>

      </div>

      <div class="visitor-aurora-greeting">

        <span
          class="visitor-aurora-greeting-icon"
          id="visitor-greeting-icon"
        >
          ☀️
        </span>

        <div class="visitor-aurora-greeting-content">

          <div class="visitor-aurora-label">
            此刻
          </div>

          <div
            class="visitor-aurora-greeting-text"
            id="visitor-greeting"
          >
            欢迎来到我的博客
          </div>

        </div>

      </div>
    `;

    const aside =
      document.querySelector(
        "#aside-content"
      );

    if (!aside) {
      return null;
    }

    const announcement =
      aside.querySelector(
        ".card-announcement"
      );

    if (announcement) {
      announcement.insertAdjacentElement(
        "afterend",
        card
      );

      return card;
    }

    const sticky =
      aside.querySelector(
        ".sticky_layout"
      );

    if (sticky) {
      sticky.insertAdjacentElement(
        "beforebegin",
        card
      );

      return card;
    }

    aside.appendChild(card);

    return card;
  }

  /* =========================
     更新卡片
     ========================= */

  function updateCard(data) {
    const country =
      data.country_name ||
      data.country_code ||
      "未知地区";

    const locationText =
      buildLocation(data);

    /* 顶部动态国家 */

    const titleCountry =
      document.getElementById(
        "visitor-title-country"
      );

    if (titleCountry) {
      titleCountry.textContent =
        country;
    }

    /* 顶部动态城市 */

    const titleLocation =
      document.getElementById(
        "visitor-title-location"
      );

    if (titleLocation) {
      titleLocation.textContent =
        locationText;
    }

    /* 当前位置 */

    const locationElement =
      document.getElementById(
        "visitor-location"
      );

    if (locationElement) {
      locationElement.textContent =
        locationText;
    }

    /* IP */

    const ipElement =
      document.getElementById(
        "visitor-ip"
      );

    if (ipElement) {
      ipElement.textContent =
        formatIp(data.ip);

      ipElement.title =
        data.ip || "";

      if (isIPv6(data.ip)) {
        ipElement.style.fontSize =
          "9px";
      } else {
        ipElement.style.fontSize =
          "";
      }
    }

    /* 距离 */

    const lat =
      Number(data.latitude);

    const lon =
      Number(data.longitude);

    const distanceElement =
      document.getElementById(
        "visitor-distance"
      );

    if (
      Number.isFinite(lat) &&
      Number.isFinite(lon)
    ) {
      const distance =
        getDistanceKm(
          lat,
          lon,
          CONFIG.blogLatitude,
          CONFIG.blogLongitude
        );

      if (distanceElement) {
        distanceElement.textContent =
          `约 ${distance.toLocaleString("zh-CN")} 公里`;
      }
    } else if (distanceElement) {
      distanceElement.textContent =
        "暂时无法计算";
    }

    /* 问候 */

    const greeting =
      getGreeting(data.timezone);

    const greetingIcon =
      document.getElementById(
        "visitor-greeting-icon"
      );

    const greetingText =
      document.getElementById(
        "visitor-greeting"
      );

    if (greetingIcon) {
      greetingIcon.textContent =
        greeting.icon;
    }

    if (greetingText) {
      greetingText.textContent =
        greeting.text;
    }
  }

  /* =========================
     缓存
     ========================= */

  function getCache() {
    try {
      const json =
        sessionStorage.getItem(
          CACHE_KEY
        );

      const time =
        Number(
          sessionStorage.getItem(
            CACHE_TIME_KEY
          )
        );

      if (!json || !time) {
        return null;
      }

      if (
        Date.now() - time >
        CONFIG.cacheTime
      ) {
        sessionStorage.removeItem(
          CACHE_KEY
        );

        sessionStorage.removeItem(
          CACHE_TIME_KEY
        );

        return null;
      }

      return JSON.parse(json);

    } catch {
      return null;
    }
  }

  function saveCache(data) {
    try {
      sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify(data)
      );

      sessionStorage.setItem(
        CACHE_TIME_KEY,
        String(Date.now())
      );
    } catch {}
  }

  /* =========================
     Worker
     ========================= */

  async function getVisitorInfo() {
    const controller =
      new AbortController();

    const timer =
      setTimeout(
        () => controller.abort(),
        CONFIG.requestTimeout
      );

    try {
      const response =
        await fetch(
          CONFIG.workerUrl,
          {
            cache: "no-store",
            signal: controller.signal,
            headers: {
              Accept: "application/json"
            }
          }
        );

      if (!response.ok) {
        throw new Error(
          `Worker HTTP ${response.status}`
        );
      }

      const data =
        await response.json();

      if (!data.success) {
        throw new Error(
          "Worker 返回失败"
        );
      }

      console.log(
        "[Visitor Card] Worker 数据：",
        data
      );

      return data;

    } finally {
      clearTimeout(timer);
    }
  }

  /* =========================
     加载数据
     ========================= */

  async function loadVisitorData() {
    const cached =
      getCache();

    if (cached) {
      updateCard(cached);
      return;
    }

    try {
      const data =
        await getVisitorInfo();

      saveCache(data);
      updateCard(data);

    } catch (error) {
      console.error(
        "[Visitor Card] Worker 请求失败：",
        error
      );

      const titleCountry =
        document.getElementById(
          "visitor-title-country"
        );

      const titleLocation =
        document.getElementById(
          "visitor-title-location"
        );

      const location =
        document.getElementById(
          "visitor-location"
        );

      const ip =
        document.getElementById(
          "visitor-ip"
        );

      const distance =
        document.getElementById(
          "visitor-distance"
        );

      if (titleCountry) {
        titleCountry.textContent =
          "神秘地区";
      }

      if (titleLocation) {
        titleLocation.textContent =
          "暂时无法确认位置";
      }

      if (location) {
        location.textContent =
          "暂时无法定位";
      }

      if (ip) {
        ip.textContent =
          "暂时无法获取";
      }

      if (distance) {
        distance.textContent =
          "暂时无法计算";
      }
    }
  }

  /* =========================
     初始化
     ========================= */

  function removeCard() {
    document
      .getElementById(
        "baiyb-visitor-card"
      )
      ?.remove();
  }

  async function init() {
    if (!isHomePage()) {
      removeCard();
      return;
    }

    if (
      document.getElementById(
        "baiyb-visitor-card"
      )
    ) {
      return;
    }

    const card =
      createCard();

    if (card) {
      await loadVisitorData();
    }
  }

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      {
        once: true
      }
    );
  } else {
    init();
  }

  document.addEventListener(
    "pjax:complete",
    () => {
      requestAnimationFrame(init);
    }
  );
})();