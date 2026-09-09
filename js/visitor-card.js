(() => {
  "use strict";

  const CONFIG = {
    // 博主坐标
    blogLatitude: 40.13845,
    blogLongitude: 116.23488,

    // 访客 IP / 地理位置接口
    apiUrl: "https://ipapi.co/json/",

    // false = 显示完整 IP
    // true  = 例如 211.173.xxx.xxx
    maskIp: false,

    // 首页路径
    // 如果你的博客直接部署在域名根目录，保持 "/" 即可
    homePath: "/",

    // 缓存访客信息，避免 PJAX 来回切换重复请求
    cacheTime: 30 * 60 * 1000
  };

  const CACHE_KEY = "baiybVisitorAuroraData";
  const CACHE_TIME_KEY = "baiybVisitorAuroraTime";

  /* ===============================
     是否为真正的首页
     =============================== */

  function isHomePage() {
    const path = window.location.pathname;

    const isRoot =
      path === CONFIG.homePath ||
      path === CONFIG.homePath + "index.html";

    const hasRecentPosts =
      document.querySelector("#recent-posts") !== null;

    const isPost =
      document.querySelector("#post") !== null;

    return isRoot && hasRecentPosts && !isPost;
  }

  /* ===============================
     距离计算
     =============================== */

  function getDistanceKm(lat1, lon1, lat2, lon2) {
    const R = 6371.0088;
    const toRad = value => value * Math.PI / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );

    return Math.round(R * c);
  }

  /* ===============================
     IP 显示
     =============================== */

  function formatIp(ip) {
    if (!ip) return "未知";

    if (!CONFIG.maskIp) {
      return ip;
    }

    if (ip.includes(".")) {
      const parts = ip.split(".");

      if (parts.length === 4) {
        return `${parts[0]}.${parts[1]}.xxx.xxx`;
      }
    }

    if (ip.includes(":")) {
      const parts =
        ip
          .split(":")
          .filter(Boolean);

      return `${parts.slice(0, 3).join(":")}::****`;
    }

    return ip;
  }

  /* ===============================
     地区
     =============================== */

  function buildLocation(data) {
    const parts = [
      data.country_name,
      data.region,
      data.city
    ].filter(Boolean);

    return [...new Set(parts)].join(" · ") || "未知地区";
  }

  /* ===============================
     当地时间
     =============================== */

  function getHour(timeZone) {
    try {
      const parts =
        new Intl.DateTimeFormat(
          "zh-CN",
          {
            timeZone: timeZone || undefined,
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

      return Number.isFinite(hour)
        ? hour
        : new Date().getHours();

    } catch {
      return new Date().getHours();
    }
  }

  function getGreeting(timeZone) {
    const hour = getHour(timeZone);

    if (hour >= 5 && hour < 9) {
      return {
        icon: "☀️",
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

  /* ===============================
     创建卡片
     =============================== */

  function createCard() {
    if (!isHomePage()) {
      return null;
    }

    const old =
      document.getElementById(
        "baiyb-visitor-card"
      );

    if (old) {
      return old;
    }

    const card =
      document.createElement("div");

    /*
     * Butterfly 原生 card-widget
     * 保证宽度、圆角、阴影、外边距一致
     */
    card.id = "baiyb-visitor-card";
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
            你好，远道而来的朋友
            <span>👋</span>
          </div>

          <div class="visitor-aurora-subtitle">
            来自
            <strong id="visitor-country">
              神秘地区
            </strong>
            的一次小小相遇
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

    /*
     * 优先插在公告下面
     */
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

    /*
     * 没有公告时，插在 sticky_layout 前
     * 但绝不进入 sticky_layout
     */
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

  /* ===============================
     更新卡片
     =============================== */

  function updateCard(data) {
    if (!data) return;

    const country =
      data.country_name ||
      "神秘地区";

    const location =
      buildLocation(data);

    const ip =
      formatIp(data.ip);

    const countryEl =
      document.getElementById(
        "visitor-country"
      );

    const locationEl =
      document.getElementById(
        "visitor-location"
      );

    const ipEl =
      document.getElementById(
        "visitor-ip"
      );

    const distanceEl =
      document.getElementById(
        "visitor-distance"
      );

    if (countryEl) {
      countryEl.textContent = country;
    }

    if (locationEl) {
      locationEl.textContent = location;
    }

    if (ipEl) {
      ipEl.textContent = ip;
    }

    const lat =
      Number(data.latitude);

    const lon =
      Number(data.longitude);

    if (
      distanceEl &&
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

      distanceEl.textContent =
        `约 ${distance.toLocaleString("zh-CN")} 公里`;

    } else if (distanceEl) {
      distanceEl.textContent =
        "暂时无法计算";
    }

    const greeting =
      getGreeting(
        data.timezone
      );

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

  /* ===============================
     缓存
     =============================== */

  function getCache() {
    try {
      const data =
        sessionStorage.getItem(
          CACHE_KEY
        );

      const time =
        Number(
          sessionStorage.getItem(
            CACHE_TIME_KEY
          )
        );

      if (!data || !time) {
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

      return JSON.parse(data);

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

  /* ===============================
     加载访客数据
     =============================== */

  async function loadVisitorData() {
    const cache = getCache();

    if (cache) {
      updateCard(cache);
      return;
    }

    try {
      const response =
        await fetch(
          CONFIG.apiUrl,
          {
            cache: "no-store",
            headers: {
              Accept: "application/json"
            }
          }
        );

      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}`
        );
      }

      const data =
        await response.json();

      if (data.error) {
        throw new Error(
          data.reason ||
          "API Error"
        );
      }

      saveCache(data);
      updateCard(data);

    } catch (error) {
      console.warn(
        "[Visitor Aurora]",
        error
      );

      const country =
        document.getElementById(
          "visitor-country"
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

      if (country) {
        country.textContent =
          "互联网";
      }

      if (location) {
        location.textContent =
          "来自互联网的朋友";
      }

      if (ip) {
        ip.textContent =
          "获取失败";
      }

      if (distance) {
        distance.textContent =
          "暂时无法计算";
      }

      const greeting =
        getGreeting();

      const icon =
        document.getElementById(
          "visitor-greeting-icon"
        );

      const text =
        document.getElementById(
          "visitor-greeting"
        );

      if (icon) {
        icon.textContent =
          greeting.icon;
      }

      if (text) {
        text.textContent =
          greeting.text;
      }
    }
  }

  /* ===============================
     删除
     =============================== */

  function removeCard() {
    const card =
      document.getElementById(
        "baiyb-visitor-card"
      );

    if (card) {
      card.remove();
    }
  }

  /* ===============================
     初始化
     =============================== */

  async function init() {
    if (!isHomePage()) {
      removeCard();
      return;
    }

    const existing =
      document.getElementById(
        "baiyb-visitor-card"
      );

    if (existing) {
      return;
    }

    const card = createCard();

    if (!card) {
      return;
    }

    await loadVisitorData();
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

  /*
   * Butterfly PJAX
   */
  document.addEventListener(
    "pjax:complete",
    () => {
      requestAnimationFrame(
        init
      );
    }
  );

})();