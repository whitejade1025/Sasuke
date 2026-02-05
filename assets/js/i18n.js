/**
 * English / Japanese language switcher
 */
(function () {
  "use strict";

  const translations = {
    en: {
      navHome: "Home",
      navAbout: "Uchiha",
      navToken: "Token",
      navBuy: "Buy",
      navJoin: "Join the Clan",
      heroTitle: "The path of vengeance",
      heroSubtitle: "pierced by Chidori",
      heroDesc:
        "The power of the Uchiha clan. With lightning. $SASUKE — a new era lit by Chidori.",
      heroBuy: "Buy $SASUKE",
      heroChart: "View Chart",
      aboutTitle1:
        "$SASUKE — A token of vengeance and resolve, lit by the power of the Uchiha clan.",
      aboutP1:
        "Chidori's lightning, the Sharingan's gaze. A community inspired by the legendary ninja Sasuke. Opening a new path in crypto with power and determination.",
      aboutTitle2: "Those who burn with the flame of vengeance. Gather, clan.",
      aboutP2:
        "All who admire Uchiha Sasuke, who love Chidori and the Sharingan — welcome. Join the clan on Telegram and Twitter, walk the path of lightning together.",
      sloganSpan: "Uchiha ",
      sloganMain: "$SASUKE Chidori — LIVE ON ETHEREUM!",
      aboutReason: "Why choose $SASUKE",
      reason1:
        "Contract renounced. Transparent and fair like Chidori. No sneaky changes. Trust it.",
      reason2:
        "LP burned. No liquidity withdrawal risk. The flame of vengeance never dies.",
      reason3:
        "$SASUKE is fully free to buy, sell, and trade. A path cut by power.",
      joinTitle: "Join the Clan",
      joinP:
        "$SASUKE is more than a token. The flame of vengeance, Chidori's lightning. On Ethereum, the legend of the Uchiha clan rises again. Join now, walk the path of lightning.",
      tokenTitle: "$SASUKE Tokenomics — Open, transparent, clan-led.",
      tokenP:
        "$SASUKE has a transparent and fair token distribution. Like Chidori, nothing hidden.",
      tokenName: "Sasuke",
      tokenNameLabel: "Name",
      tokenSymbolLabel: "Symbol",
      tokenNetworkLabel: "Network",
      tokenSupplyLabel: "Supply",
      tokenTaxLabel: "Tax",
      tokenSupply: "1 Billion",
      tokenTax: "Zero",
      buyHow: "How to Buy",
      buyTitle: "Gateway to $SASUKE",
      buyP: "$SASUKE token is available on Ethereum. Get Chidori with ETH.",
      buyStep1: "Step 1",
      buyStep1Title: "Get a Wallet",
      buyStep1P:
        "Store and trade $SASUKE with an Ethereum wallet like Metamask.",
      buyStep2: "Step 2",
      buyStep2Title: "Get ETH",
      buyStep2P: "Get ETH from an exchange and transfer to your wallet.",
      buyStep3: "Step 3",
      buyStep3Title: "Buy on DEX",
      buyStep3P: "Go to Uniswap, paste the CA. Connect → Swap to get Chidori.",
      footerDisclaimer:
        "Disclaimer: $SASUKE is an independent project inspired by Uchiha Sasuke. No official affiliation.",
    },
    ja: {
      navHome: "ホーム",
      navAbout: "宇智波",
      navToken: "トークン",
      navBuy: "購入",
      navJoin: "クランに参加する",
      heroTitle: "復讐の道を",
      heroSubtitle: "千鳥が貫く",
      heroDesc: "うちは一族の力。雷光と共に。 $SASUKE — 千鳥が照らす新時代。",
      heroBuy: "$SASUKE を買う",
      heroChart: "チャートを見る",
      aboutTitle1: "$SASUKE — うちは一族の力で照らす、復讐と覚悟のトークン。",
      aboutP1:
        "千鳥の雷光、写輪眼の瞳。伝説の忍者サスケに触発されたコミュニティ。力と決意で、暗号の世界に新たな道を切り開く。",
      aboutTitle2: "復讐の炎に燃える者よ。クランに集え。",
      aboutP2:
        "うちはサスケに憧れる者、千鳥と写輪眼を愛する者、すべて歓迎。TelegramとTwitterでクランに参加し、雷光の道を共に歩め。",
      sloganSpan: "うちは ",
      sloganMain: "$SASUKE 千鳥 — ETHEREUM でライブ中!",
      aboutReason: "$SASUKE を選ぶ理由",
      reason1:
        "契約は放棄済み。千鳥の如く、透明かつ公正。卑怯な変更はない。信頼せよ。",
      reason2: "LPは焼却済み。流動性引き出しのリスクなし。復讐の炎は消えない。",
      reason3: "$SASUKE は完全に自由に売買・交換可能。力で切り開く道。",
      joinTitle: "クランに参加せよ",
      joinP:
        "$SASUKE は単なるトークンではない。復讐の炎、千鳥の雷光。Ethereum チェーンで、うちは一族の伝説が蘇る。今すぐ参加し、雷光の道を歩め。",
      tokenTitle: "$SASUKE トークンノミクス — オープン、透明、クラン主導。",
      tokenP:
        "$SASUKE は透明かつ公正なトークン配布。千鳥の如く、隠すことはない。",
      tokenName: "Sasuke",
      tokenNameLabel: "名前",
      tokenSymbolLabel: "シンボル",
      tokenNetworkLabel: "通信網",
      tokenSupplyLabel: "供給",
      tokenTaxLabel: "税",
      tokenSupply: "10 億",
      tokenTax: "ゼロ",
      buyHow: "購入する方法",
      buyTitle: "$SASUKE へのゲートウェイ",
      buyP: "$SASUKE トークンは Ethereum で入手可能。ETH で千鳥を手に入れろ。",
      buyStep1: "ステップ 1",
      buyStep1Title: "財布を手に入れろ",
      buyStep1P: "Metamask などの Ethereum ウォレットで $SASUKE を保存・取引。",
      buyStep2: "ステップ 2",
      buyStep2Title: "ETH を入手",
      buyStep2P: "取引所で ETH を取得し、ウォレットに転送。",
      buyStep3: "ステップ 3",
      buyStep3Title: "DEX で購入",
      buyStep3P:
        "Uniswap で CA をコピー/ペースト。「接続」→「交換」で千鳥を手に入れろ。",
      footerDisclaimer:
        "免責事項: $SASUKE はうちはサスケに触発された独立したプロジェクトです。正式な提携はありません。",
    },
  };

  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang === "ja" ? "ja" : "en";

    const elements = {
      '[data-i18n="navHome"]': t.navHome,
      '[data-i18n="navAbout"]': t.navAbout,
      '[data-i18n="navToken"]': t.navToken,
      '[data-i18n="navBuy"]': t.navBuy,
      '[data-i18n="navJoin"]': t.navJoin,
      '[data-i18n="heroTitle"]': t.heroTitle,
      '[data-i18n="heroSubtitle"]': t.heroSubtitle,
      '[data-i18n="heroDesc"]': t.heroDesc,
      '[data-i18n="heroBuy"]': t.heroBuy,
      '[data-i18n="heroChart"]': t.heroChart,
      '[data-i18n="aboutTitle1"]': t.aboutTitle1,
      '[data-i18n="aboutP1"]': t.aboutP1,
      '[data-i18n="aboutTitle2"]': t.aboutTitle2,
      '[data-i18n="aboutP2"]': t.aboutP2,
      '[data-i18n="aboutReason"]': t.aboutReason,
      '[data-i18n="reason1"]': t.reason1,
      '[data-i18n="reason2"]': t.reason2,
      '[data-i18n="reason3"]': t.reason3,
      '[data-i18n="joinTitle"]': t.joinTitle,
      '[data-i18n="joinP"]': t.joinP,
      '[data-i18n="tokenTitle"]': t.tokenTitle,
      '[data-i18n="tokenP"]': t.tokenP,
      '[data-i18n="tokenNameLabel"]': t.tokenNameLabel,
      '[data-i18n="tokenSymbolLabel"]': t.tokenSymbolLabel,
      '[data-i18n="tokenNetworkLabel"]': t.tokenNetworkLabel,
      '[data-i18n="tokenSupplyLabel"]': t.tokenSupplyLabel,
      '[data-i18n="tokenTaxLabel"]': t.tokenTaxLabel,
      '[data-i18n="tokenSupply"]': t.tokenSupply,
      '[data-i18n="tokenTax"]': t.tokenTax,
      '[data-i18n="buyHow"]': t.buyHow,
      '[data-i18n="buyTitle"]': t.buyTitle,
      '[data-i18n="buyP"]': t.buyP,
      '[data-i18n="buyStep1"]': t.buyStep1,
      '[data-i18n="buyStep1Title"]': t.buyStep1Title,
      '[data-i18n="buyStep1P"]': t.buyStep1P,
      '[data-i18n="buyStep2"]': t.buyStep2,
      '[data-i18n="buyStep2Title"]': t.buyStep2Title,
      '[data-i18n="buyStep2P"]': t.buyStep2P,
      '[data-i18n="buyStep3"]': t.buyStep3,
      '[data-i18n="buyStep3Title"]': t.buyStep3Title,
      '[data-i18n="buyStep3P"]': t.buyStep3P,
      '[data-i18n="footerDisclaimer"]': t.footerDisclaimer,
    };

    for (const [sel, text] of Object.entries(elements)) {
      const el = document.querySelector(sel);
      if (el) el.textContent = text;
    }

    // Slogan: repeated 3x with spans
    const sloganEl = document.querySelector("[data-i18n-slogan]");
    if (sloganEl) {
      sloganEl.innerHTML = `<span>${t.sloganSpan}</span>${t.sloganMain}<span>${
        t.sloganSpan
      }</span>${t.sloganMain}<span>${t.sloganSpan.trim()}</span> ${
        t.sloganMain
      }`;
    }

    // Update active state on lang buttons
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    localStorage.setItem("sasuke-lang", lang);
  }

  // Init
  const savedLang = localStorage.getItem("sasuke-lang") || "ja";
  applyLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  window.applyLanguage = applyLanguage;
})();
