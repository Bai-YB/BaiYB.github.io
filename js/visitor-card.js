(() => {
  "use strict";

  /* =========================================================
     BaiYB Visitor Card
     Hexo + Butterfly
     Aurora Glass / Multi-IP Version

     功能：
     1. 只在真正首页显示
     2. 优先获取公网 IPv6
     3. 同时获取公网 IPv4
     4. 自动协议作为备用
     5. 使用具体 IP 查询地理位置
     6. IPv6 定位失败自动尝试 IPv4
     7. 定位彻底失败仍然显示真实公网 IP
     8. PJAX 兼容
     9. 30 分钟缓存
     ========================================================= */

  const CONFIG = {

    /* =========================
       博主坐标
       ========================= */

    // 北纬
    blogLatitude: 40.13845,

    // 东经
    blogLongitude: 116.23488,


    /* =========================
       首页路径
       ========================= */

    homePath: "/",


    /* =========================
       IP 显示
       ========================= */

    // false：完整 IP
    // true ：打码 IP
    maskIp: false,


    /* =========================
       IP 获取接口
       ========================= */

    // IPv6 ONLY
    ipv6Api:
      "https://api6.ipify.org?format=json",

    // IPv4 ONLY
    ipv4Api:
      "https://api.ipify.org?format=json",

    // IPv4 / IPv6 自动
    universalApi:
      "https://api64.ipify.org?format=json",


    /* =========================
       请求超时
       ========================= */

    // 校园网没有 IPv6 时，
    // api6 不能一直拖着页面
    requestTimeout: 3500,


    /* =========================
       缓存
       ========================= */

    cacheTime:
      30 * 60 * 1000
  };


  const CACHE_KEY =
    "baiybVisitorAuroraMultiIp";

  const CACHE_TIME_KEY =
    "baiybVisitorAuroraMultiIpTime";


  /* =========================================================
     判断首页
     ========================================================= */

  function isHomePage() {

    const path =
      window.location.pathname;

    const isRoot =
      path === CONFIG.homePath ||
      path ===
        CONFIG.homePath +
        "index.html";

    const hasRecentPosts =
      document.querySelector(
        "#recent-posts"
      ) !== null;

    const isPost =
      document.querySelector(
        "#post"
      ) !== null;

    return (
      isRoot &&
      hasRecentPosts &&
      !isPost
    );
  }


  /* =========================================================
     带超时的 Fetch
     ========================================================= */

  async function fetchWithTimeout(
    url,
    options = {},
    timeout = CONFIG.requestTimeout
  ) {

    const controller =
      new AbortController();

    const timer =
      setTimeout(
        () => controller.abort(),
        timeout
      );

    try {

      const response =
        await fetch(
          url,
          {
            ...options,

            signal:
              controller.signal,

            cache:
              "no-store"
          }
        );

      return response;

    } finally {

      clearTimeout(timer);
    }
  }


  /* =========================================================
     获取 JSON
     ========================================================= */

  async function fetchJson(
    url,
    timeout
  ) {

    const response =
      await fetchWithTimeout(
        url,
        {
          headers: {
            Accept:
              "application/json"
          }
        },
        timeout
      );

    if (!response.ok) {

      throw new Error(
        `HTTP ${response.status}`
      );
    }

    return await response.json();
  }


  /* =========================================================
     判断 IPv4 / IPv6
     ========================================================= */

  function isIPv4(ip) {

    if (!ip) {
      return false;
    }

    return (
      /^(\d{1,3}\.){3}\d{1,3}$/
        .test(ip)
    );
  }


  function isIPv6(ip) {

    if (!ip) {
      return false;
    }

    return (
      ip.includes(":")
    );
  }


  /* =========================================================
     获取单个公网 IP
     ========================================================= */

  async function requestIp(
    url,
    type
  ) {

    try {

      const data =
        await fetchJson(
          url,
          CONFIG.requestTimeout
        );

      const ip =
        data?.ip;

      if (!ip) {

        throw new Error(
          "接口没有返回 IP"
        );
      }


      if (
        type === "ipv4" &&
        !isIPv4(ip)
      ) {

        throw new Error(
          "返回结果不是 IPv4"
        );
      }


      if (
        type === "ipv6" &&
        !isIPv6(ip)
      ) {

        throw new Error(
          "返回结果不是 IPv6"
        );
      }


      return ip;

    } catch (error) {

      console.debug(
        `[Visitor Card] ${type} 获取失败`,
        error
      );

      return null;
    }
  }


  /* =========================================================
     同时获取 IPv6 / IPv4 / Universal
     ========================================================= */

  async function getPublicIps() {

    /*
     * 三个请求并行。
     *
     * 不让 IPv6 检测阻塞 IPv4。
     */

    const [
      ipv6,
      ipv4,
      universal
    ] =
      await Promise.all([

        requestIp(
          CONFIG.ipv6Api,
          "ipv6"
        ),

        requestIp(
          CONFIG.ipv4Api,
          "ipv4"
        ),

        requestIp(
          CONFIG.universalApi,
          "universal"
        )
      ]);


    let finalIPv6 =
      ipv6;

    let finalIPv4 =
      ipv4;


    /*
     * Universal 结果补位
     */

    if (
      universal &&
      isIPv6(universal) &&
      !finalIPv6
    ) {

      finalIPv6 =
        universal;
    }


    if (
      universal &&
      isIPv4(universal) &&
      !finalIPv4
    ) {

      finalIPv4 =
        universal;
    }


    /*
     * 显示优先级：
     *
     * IPv6
     * ↓
     * IPv4
     * ↓
     * Universal
     */

    const displayIp =
      finalIPv6 ||
      finalIPv4 ||
      universal ||
      null;


    return {
      ipv6:
        finalIPv6,

      ipv4:
        finalIPv4,

      universal,

      displayIp
    };
  }


  /* =========================================================
     IP 打码
     ========================================================= */

  function formatIp(ip) {

    if (!ip) {
      return "未知";
    }


    if (!CONFIG.maskIp) {
      return ip;
    }


    /* IPv4 */

    if (isIPv4(ip)) {

      const parts =
        ip.split(".");

      return (
        parts[0] +
        "." +
        parts[1] +
        ".xxx.xxx"
      );
    }


    /* IPv6 */

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


  /* =========================================================
     IP 地理位置查询
     ========================================================= */

  async function lookupIpLocation(
    ip
  ) {

    if (!ip) {
      return null;
    }


    try {

      /*
       * ipapi 支持：
       *
       * https://ipapi.co/8.8.8.8/json/
       *
       * IPv6 同样支持。
       */

      const url =
        "https://ipapi.co/" +
        encodeURIComponent(ip) +
        "/json/";


      const data =
        await fetchJson(
          url,
          5000
        );


      if (
        data?.error
      ) {

        throw new Error(
          data.reason ||
          "ipapi 返回错误"
        );
      }


      /*
       * 至少要有一些有效的位置数据
       */

      if (
        !data.country_name &&
        !data.city &&
        !data.latitude
      ) {

        throw new Error(
          "地理位置数据为空"
        );
      }


      return data;

    } catch (error) {

      console.debug(
        "[Visitor Card] IP 定位失败：",
        ip,
        error
      );

      return null;
    }
  }


  /* =========================================================
     多级定位
     ========================================================= */

  async function getBestLocation(
    ipInfo
  ) {

    /*
     * 定位优先级：
     *
     * IPv6
     * ↓
     * IPv4
     * ↓
     * Universal
     *
     * 每一个失败都会自动继续。
     */


    const candidates = [
      ipInfo.ipv6,
      ipInfo.ipv4,
      ipInfo.universal
    ];


    /*
     * 去掉：
     *
     * null
     * 重复 IP
     */

    const unique =
      [
        ...new Set(
          candidates.filter(Boolean)
        )
      ];


    for (
      const ip of unique
    ) {

      const location =
        await lookupIpLocation(ip);


      if (location) {

        return {
          ...location,

          lookupIp:
            ip
        };
      }
    }


    /*
     * 最后一个兜底：
     *
     * 让 ipapi 自己判断客户端 IP。
     */

    try {

      const data =
        await fetchJson(
          "https://ipapi.co/json/",
          5000
        );


      if (
        !data.error &&
        (
          data.country_name ||
          data.city ||
          data.latitude
        )
      ) {

        return {
          ...data,

          lookupIp:
            data.ip ||
            null
        };
      }

    } catch (error) {

      console.debug(
        "[Visitor Card] ipapi 自动定位也失败",
        error
      );
    }


    return null;
  }


  /* =========================================================
     经纬度距离
     ========================================================= */

  function getDistanceKm(
    lat1,
    lon1,
    lat2,
    lon2
  ) {

    const R =
      6371.0088;


    const toRad =
      value =>
        value *
        Math.PI /
        180;


    const dLat =
      toRad(
        lat2 - lat1
      );


    const dLon =
      toRad(
        lon2 - lon1
      );


    const a =
      Math.sin(
        dLat / 2
      ) ** 2 +

      Math.cos(
        toRad(lat1)
      ) *

      Math.cos(
        toRad(lat2)
      ) *

      Math.sin(
        dLon / 2
      ) ** 2;


    const c =
      2 *
      Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
      );


    return Math.round(
      R * c
    );
  }


  /* =========================================================
     地区文本
     ========================================================= */

  function buildLocation(
    data
  ) {

    if (!data) {

      return (
        "暂时无法定位"
      );
    }


    const parts = [
      data.country_name,
      data.region,
      data.city
    ].filter(Boolean);


    const unique =
      [
        ...new Set(parts)
      ];


    return (
      unique.join(" · ") ||
      "暂时无法定位"
    );
  }


  /* =========================================================
     时间
     ========================================================= */

  function getHour(
    timeZone
  ) {

    try {

      const parts =
        new Intl.DateTimeFormat(
          "zh-CN",
          {
            timeZone:
              timeZone ||
              undefined,

            hour:
              "2-digit",

            hourCycle:
              "h23"
          }
        ).formatToParts(
          new Date()
        );


      const hour =
        Number(
          parts.find(
            item =>
              item.type ===
              "hour"
          )?.value
        );


      if (
        Number.isFinite(hour)
      ) {

        return hour;
      }

    } catch {}


    return (
      new Date()
        .getHours()
    );
  }


  /* =========================================================
     问候语
     ========================================================= */

  function getGreeting(
    timeZone
  ) {

    const hour =
      getHour(
        timeZone
      );


    if (
      hour >= 5 &&
      hour < 9
    ) {

      return {
        icon:
          "☀️",

        text:
          "早上好，新的一天开始了！"
      };
    }


    if (
      hour >= 9 &&
      hour < 12
    ) {

      return {
        icon:
          "☀️",

        text:
          "上午好，愿今天一切顺利！"
      };
    }


    if (
      hour >= 12 &&
      hour < 14
    ) {

      return {
        icon:
          "🍚",

        text:
          "中午好，记得好好吃饭！"
      };
    }


    if (
      hour >= 14 &&
      hour < 18
    ) {

      return {
        icon:
          "🌤️",

        text:
          "下午好，今天也要加油！"
      };
    }


    if (
      hour >= 18 &&
      hour < 23
    ) {

      return {
        icon:
          "🌙",

        text:
          "晚上好，欢迎来逛逛！"
      };
    }


    return {
      icon:
        "✨",

      text:
        "夜深了，也要记得早点休息！"
    };
  }


  /* =========================================================
     创建 Aurora 卡片
     ========================================================= */

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
      document.createElement(
        "div"
      );


    card.id =
      "baiyb-visitor-card";


    card.className =
      "card-widget baiyb-visitor-aurora";


    /*
     * 这里的 HTML Class
     * 与你现在的 Aurora CSS 完全一致。
     *
     * 所以 CSS 不需要任何修改。
     */

    card.innerHTML = `

      <div
        class="visitor-aurora-bg"
      ></div>


      <div
        class="visitor-aurora-top"
      >

        <div
          class="visitor-aurora-title-area"
        >

          <div
            class="visitor-aurora-eyebrow"
          >
            VISITOR INSIGHT
          </div>


          <div
            class="visitor-aurora-title"
          >
            你好，远道而来的朋友
            <span>👋</span>
          </div>


          <div
            class="visitor-aurora-subtitle"
          >
            来自

            <strong
              id="visitor-country"
            >
              神秘地区
            </strong>

            的一次小小相遇
          </div>

        </div>


        <div
          class="visitor-aurora-orb"
        >
          🌍
        </div>

      </div>


      <div
        class="visitor-aurora-location"
      >

        <div
          class="visitor-aurora-label"
        >
          📍 当前位置
        </div>


        <div
          class="visitor-aurora-main-value"
          id="visitor-location"
        >
          正在获取...
        </div>

      </div>


      <div
        class="visitor-aurora-grid"
      >


        <div
          class="visitor-aurora-metric"
        >

          <div
            class="visitor-aurora-label"
          >
            🌐 IP 地址
          </div>


          <div
            class="visitor-aurora-value"
            id="visitor-ip"
            title=""
          >
            正在获取...
          </div>

        </div>


        <div
          class="visitor-aurora-metric"
        >

          <div
            class="visitor-aurora-label"
          >
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


      <div
        class="visitor-aurora-greeting"
      >

        <span
          class="visitor-aurora-greeting-icon"
          id="visitor-greeting-icon"
        >
          ☀️
        </span>


        <div
          class="visitor-aurora-greeting-content"
        >

          <div
            class="visitor-aurora-label"
          >
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
     * 公告下面
     */

    const announcement =
      aside.querySelector(
        ".card-announcement"
      );


    if (announcement) {

      announcement
        .insertAdjacentElement(
          "afterend",
          card
        );


      return card;
    }


    /*
     * 没有公告时：
     *
     * 放 sticky_layout 前，
     * 不进入 sticky_layout。
     */

    const sticky =
      aside.querySelector(
        ".sticky_layout"
      );


    if (sticky) {

      sticky
        .insertAdjacentElement(
          "beforebegin",
          card
        );


      return card;
    }


    aside.appendChild(
      card
    );


    return card;
  }


  /* =========================================================
     页面内容更新
     ========================================================= */

  function updateCard(
    result
  ) {

    if (!result) {

      return;
    }


    const {
      ipInfo,
      location
    } =
      result;


    /*
     * =========================
     * IP
     * =========================
     */

    const rawIp =
      ipInfo?.displayIp ||
      location?.ip ||
      null;


    const ip =
      formatIp(
        rawIp
      );


    const ipElement =
      document.getElementById(
        "visitor-ip"
      );


    if (ipElement) {

      ipElement.textContent =
        ip;


      /*
       * 鼠标悬停可以看到完整 IP
       * 避免窄侧栏 IPv6 被省略。
       */

      ipElement.title =
        rawIp ||
        "";
    }


    /*
     * 如果是 IPv6，
     * 让窄侧栏稍微缩小字号。
     *
     * 不修改 CSS 文件。
     */

    if (
      ipElement &&
      isIPv6(rawIp)
    ) {

      ipElement.style.fontSize =
        "9px";

    } else if (
      ipElement
    ) {

      ipElement.style.fontSize =
        "";
    }


    /*
     * =========================
     * 国家
     * =========================
     */

    const country =
      location?.country_name ||
      "未知地区";


    const countryElement =
      document.getElementById(
        "visitor-country"
      );


    if (countryElement) {

      countryElement.textContent =
        country;
    }


    /*
     * =========================
     * 地区
     * =========================
     */

    const locationElement =
      document.getElementById(
        "visitor-location"
      );


    if (locationElement) {

      locationElement.textContent =
        buildLocation(
          location
        );
    }


    /*
     * =========================
     * 距离
     * =========================
     */

    const distanceElement =
      document.getElementById(
        "visitor-distance"
      );


    const latitude =
      Number(
        location?.latitude
      );


    const longitude =
      Number(
        location?.longitude
      );


    if (
      distanceElement &&
      Number.isFinite(latitude) &&
      Number.isFinite(longitude)
    ) {

      const distance =
        getDistanceKm(
          latitude,
          longitude,

          CONFIG.blogLatitude,
          CONFIG.blogLongitude
        );


      distanceElement.textContent =
        `约 ${
          distance.toLocaleString(
            "zh-CN"
          )
        } 公里`;

    } else if (
      distanceElement
    ) {

      distanceElement.textContent =
        "暂时无法计算";
    }


    /*
     * =========================
     * 问候
     * =========================
     */

    const greeting =
      getGreeting(
        location?.timezone
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


  /* =========================================================
     缓存
     ========================================================= */

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


      if (
        !json ||
        !time
      ) {

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


      return JSON.parse(
        json
      );

    } catch {

      return null;
    }
  }


  function saveCache(
    result
  ) {

    try {

      sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify(result)
      );


      sessionStorage.setItem(
        CACHE_TIME_KEY,
        String(Date.now())
      );

    } catch {}
  }


  /* =========================================================
     完整网络检测
     ========================================================= */

  async function detectVisitor() {

    /*
     * Step 1
     *
     * 获取公网地址。
     */

    const ipInfo =
      await getPublicIps();


    console.debug(
      "[Visitor Card] 网络地址：",
      {
        IPv6:
          ipInfo.ipv6,

        IPv4:
          ipInfo.ipv4,

        Universal:
          ipInfo.universal
      }
    );


    /*
     * 即使三个 IP API 全失败，
     * 仍然尝试 ipapi 自动识别。
     */

    let location =
      await getBestLocation(
        ipInfo
      );


    /*
     * 如果 ipify 都失败，
     * 但 ipapi 成功，
     * 使用 ipapi 返回的 IP。
     */

    if (
      !ipInfo.displayIp &&
      location?.ip
    ) {

      ipInfo.displayIp =
        location.ip;


      if (
        isIPv6(location.ip)
      ) {

        ipInfo.ipv6 =
          location.ip;

      } else if (
        isIPv4(location.ip)
      ) {

        ipInfo.ipv4 =
          location.ip;
      }
    }


    return {
      ipInfo,
      location
    };
  }


  /* =========================================================
     加载数据
     ========================================================= */

  async function loadVisitorData() {

    /*
     * 优先缓存。
     */

    const cache =
      getCache();


    if (cache) {

      updateCard(
        cache
      );

      return;
    }


    try {

      const result =
        await detectVisitor();


      /*
       * 只要拿到了任何 IP
       * 或者地理数据，就缓存。
       */

      if (
        result.ipInfo?.displayIp ||
        result.location
      ) {

        saveCache(
          result
        );
      }


      updateCard(
        result
      );


    } catch (error) {

      console.warn(
        "[Visitor Card] 网络检测失败",
        error
      );


      /*
       * 即使全部失败，
       * 不再显示“互联网”这种容易误解的文字。
       */

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
          "未知地区";
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


      const greeting =
        getGreeting();


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
  }


  /* =========================================================
     删除卡片
     ========================================================= */

  function removeCard() {

    const card =
      document.getElementById(
        "baiyb-visitor-card"
      );


    if (card) {

      card.remove();
    }
  }


  /* =========================================================
     初始化
     ========================================================= */

  async function init() {

    /*
     * 非首页主动删除。
     */

    if (!isHomePage()) {

      removeCard();

      return;
    }


    /*
     * 避免重复插入。
     */

    const existing =
      document.getElementById(
        "baiyb-visitor-card"
      );


    if (existing) {

      return;
    }


    const card =
      createCard();


    if (!card) {

      return;
    }


    await loadVisitorData();
  }


  /* =========================================================
     首次加载
     ========================================================= */

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


  /* =========================================================
     Butterfly PJAX
     ========================================================= */

  document.addEventListener(
    "pjax:complete",
    () => {

      requestAnimationFrame(
        init
      );
    }
  );

})();