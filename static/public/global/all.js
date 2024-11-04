const educationalSites = ["https://blooket.com", "https://kahoot.it", "https://joinmyquiz.com", "https://deltamath.com", "https://quizlet.com", "https://drive.google.com", "https://docs.google.com", "https://forms.google.com", "https://classroom.google.com"];

let inIframe
try {
  inIframe = window.self !== window.top;
} catch (e) {
  inIframe = true;
}

if (!inIframe) {
  const popup = open("about:blank", "_blank");
  if (popup) {
    const doc = popup.document;
    const iframe = doc.createElement("iframe");
    const style = iframe.style;
    const link = doc.createElement("link");

    const name = "Google Classroom";
    const icon = "https://lh4.googleusercontent.com/308zu2umP2YA0GwhIQdmlLRUHXdJgApI1YLlfIgBq2Ct0ke885gvRPgW6x8UU2DWDHyKt9HCtF9ayMd0dnYR-ccHj1nG8gEa1kxBvWqBzgRotsgKp0I4btM3yKUwf5IaWA=w1280";

    doc.title = name;
    link.rel = "icon";
    link.href = icon;

    iframe.src = location.href;
    style.border = style.outline = "none";
    style.width = style.height = "100%";
    style.overflow = "hidden";
    doc.body.style.margin = style.margin = "-1";
    style.padding = "-1";
    doc.head.appendChild(link);
    doc.body.appendChild(iframe);

    location.replace(educationalSites[(Math.floor(Math.random() * educationalSites.length))]);
  }
}