//Google Analytics
try {
  var analyticsScript = document.createElement("script");
  analyticsScript.src =
    "https://www.googletagmanager.com/gtag/js?id=G-PYBNSB93F8";
  analyticsScript.async = true;
  document.head.appendChild(analyticsScript);
  var analyticsScript2 = document.createElement("script");
  analyticsScript2.innerHTML = `
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PYBNSB93F8');
`;
  document.head.appendChild(analyticsScript2);
} catch {}

let inIframe;
try {
  inIframe = window.self !== window.top;
} catch (e) {
  inIframe = true;
}

const educationalSites = [
  "https://blooket.com",
  "https://kahoot.it",
  "https://joinmyquiz.com",
  "https://deltamath.com",
  "https://quizlet.com",
  "https://drive.google.com",
  "https://docs.google.com",
  "https://forms.google.com",
  "https://classroom.google.com",
];
const colorThemes = {
  default: [
    "rgb(19, 20, 31)", //primary
    "rgb(15, 16, 25)", //secondary
    "rgba(82, 35, 163, 0.5)", //effects
    "#e9f1f7", //h1
    "#cccdce", //text
    "rgba(188, 152, 252, 0.5)", //line
  ],
  legacy: [
    "rgb(56, 67, 73)",
    "rgb(29, 30, 34)",
    "rgba(220, 204, 255, 0.5)",
    "#e9f1f7",
    "#cccdce",
    "rgba(209, 200, 228, 0.5)",
  ],
  noctura: [
    "#0d0d1a",
    "#1a1a4d",
    "rgba(26, 26, 255, 0.7)",
    "#6666ff",
    "#1a1aff",
  ],
  crimson: [
    "#330000",
    "#660000",
    "rgba(220, 20, 60, 0.7)",
    "#ff8a8a",
    "#dc143c",
  ],
  strawberry: [
    "rgb(144, 78, 85)",
    "rgb(106, 78, 85)",
    "rgba(242, 239, 233)",
    "#e9f1f7",
    "#cccdce",
  ],
  cafe: [
    "#D6C0B3",
    "#AB886D",
    "#493628",
    "#493628",
    "#493628",
  ],
  retro: [
    "#000000",
    "#111111",
    "#3EB371",
    "#3EB371",
    "#3EB371",
  ],
  oceanic: [
    "#002233",
    "#004555",
    "rgba(0, 170, 255, 0.7)",
    "#88ccff",
    "#00aaff",
    "#0081c1",
  ],
  shadow: [
    "#1c1c1c",
    "#333333",
    "rgba(189, 189, 189, 0.7)",
    "#e0e0e0",
    "#bdbdbd",
    "#909090",
  ],
  gaming: [
    "#1a1a1a",
    "#333333",
    "rgba(255, 69, 0, 0.7)",
    "#ff9e80",
    "#ff4500",
    "rgba(161, 48, 6, 0.7)",
  ],
  galaxy: [
    "#1c0033",
    "#330066",
    "rgba(150, 52, 241, 0.7)",
    "#c3a6ff",
    "#8a2be2",
    "#4c008a",
  ],
  cyberpunk: [
    "#1a001a",
    "#330033",
    "rgba(255, 0, 255, 0.7)",
    "#ff80ff",
    "#ff00ff",
  ],
  techno: [
    "#001f1f",
    "#003333",
    "rgba(0, 255, 255, 0.7)",
    "#80ffff",
    "#00ffff",
  ]
};
//primary
//secondary
//effect
//h1
//text

function ABCloak(redirectToEducationalSite) {
  try {
    if (!inIframe) {
      const popup = open("about:blank", "_blank");
      if (popup) {
        const doc = popup.document;
        const iframe = doc.createElement("iframe");
        const style = iframe.style;
        const link = doc.createElement("link");

        var name = "Classroom";
        var icon =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsklEQVQYV6WPMY9MYRSGnzO5K5mrsczINCujkBh3ihU1CX9BMSsKtqTQ6mzDr5BFQiLRSkRoFRu7icIQ3YoCESHL3DEbmfMqzjc3d1BxmvPlS97nPK9J4n8mm75Yvsz00zkzYTYPkwypAbJ4e2xkyBuw0LpvPzfaMpURrgMUAIhgBZGBGgGznIzpGMx4OW7xatLGbBYGJJTecoHHu2h+pZ/vgP8gQ4YQw3GbB1+OQgIgkS80kYvR7igBHLkzaImi+Q1kZKEJuJB71WDvnpy1M1dBsPb0BqNJiWpGqSWN6GRJ05ELubiwvEJ33xLdxSVWT5xHVRclw8ilCoY89STwt7fu0V08BMD687thKM1biKhgM3CtwmhScu3xdSRR7pZVuPInDicDknoA+p0eRecY/U4PgOGH12y83WT783aAHDSrIBlAquBcOXmJ00dOUZ+i02Nw/CwPh4+4+exWfMqQjExuYIDC4vdwfQ7v786FEWSoAYiiucPgwDuGb9bnQlVloCw/stJ+T5F/j4MyrHxyUKCw+NsIIK4pbbAAy8gkWwUu2uzSDKT6+jMIINkdU93xH+YXTrImgXmBBtYAAAAASUVORK5CYII=";
        if (localStorage.getItem("cloakTitle") !== null) {
          name = localStorage.getItem("cloakTitle");
          icon = localStorage.getItem("cloakIcon");
        }
        doc.title = name;
        link.rel = "icon";
        link.href = icon;

        iframe.src = location.href;
        style.border = style.outline = "none";
        style.width = style.height = "100%";
        style.overflow = "hidden";
        doc.body.style.margin = style.margin = 0;
        style.padding = 0;
        doc.head.appendChild(link);
        doc.body.appendChild(iframe);
        doc.URLBeforeCloak = location.href;

        var script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML =
          `
          window.onmessage = function (e) {
            if (e.data == 'cancelABCloak') {
              location.replace("` +
          location.href +
          `");
            } else {
              try {
                var msg = JSON.parse(e.data);
                if (msg.msg === "changeCloak") {
                  document.title = msg.title
                  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                  link.type = 'image/x-icon';
                  link.rel = 'shortcut icon';
                  link.href = msg.icon;
                  document.getElementsByTagName('head')[0].appendChild(link);
                }
              } catch { }
            }
          };`;
        doc.body.append(script);

        if (redirectToEducationalSite)
          location.replace(
            educationalSites[
              Math.floor(Math.random() * educationalSites.length)
            ]
          );
      }
    }
  } catch {
    ABCloak(true);
  }
}

if (localStorage.getItem("autoAB") == "true") {
  ABCloak(true);
}
function panic() {
  if (!Boolean(localStorage.chosenRedirect)) {
  //fallback redirect
    localStorage.chosenRedirect = 'https://classroom.google.com'
}
window.top.location.href = localStorage.chosenRedirect; 
}
// init panic listener
if (Boolean(localStorage.panicBool )) {
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'g') {
    event.preventDefault(); 
    panic()
  }
});
}
try {
  navigator.serviceWorker.register(stockSW || "/uv/sw.js", {
    scope: __uv$config.prefix,
  });
} catch {}

try {
  if (sessionStorage.getItem("firstVisit") === null) {
    setTimeout(showPage, 2200);
    sessionStorage.setItem("firstVisit", "false");
  } else {
    showPage();
  }
} catch {}

function showPage() {
  if (document.readyState === "complete" || document.readyState === "loaded") {
    document.getElementsByClassName("loadcenter")[0].style.display = "none";
  } else {
    addEventListener("DOMContentLoaded", () => {
      document.getElementsByClassName("loadcenter")[0].style.display = "none";
    });
  }
}

function loadColorTheme() {
  var theme = localStorage.getItem("theme");
  if (theme === null || !colorThemes[theme]) {
    theme = "default";
  }
  document.documentElement.style.setProperty(
    "--primary",
    colorThemes[theme][0]
  );
  document.documentElement.style.setProperty(
    "--secondary",
    colorThemes[theme][1]
  );
  document.documentElement.style.setProperty(
    "--effects",
    colorThemes[theme][2]
  );
  document.documentElement.style.setProperty("--h1", colorThemes[theme][3]);
  document.documentElement.style.setProperty("--text", colorThemes[theme][4]);
  document.documentElement.style.setProperty("--bgline", colorThemes[theme][5]);
}

loadColorTheme();

function setColorTheme(theme) {
  localStorage.setItem("theme", theme);
  loadColorTheme();
}

function setFavicon(url, doc = document) {
  let link =
    doc.querySelector("link[rel*='icon']") || doc.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = url;
  doc.getElementsByTagName("head")[0].appendChild(link);
}

function loadTabCloak() {
  if (localStorage.getItem("cloakTitle") !== null) {
    document.title = localStorage.getItem("cloakTitle");
    setFavicon(localStorage.getItem("cloakIcon"));
  }
}

loadTabCloak();
