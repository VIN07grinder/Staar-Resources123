"use strict";

function showProxy() {
  let div = document.getElementById("proxy-div");
  div.classList = ["show-proxy-div"];
}

async function openApp(url) {
  try {
    await registerSW();
  } catch (err) {
    alert("Error. Please contact a server administrator. Error Message: " + err.message);
  }
  
  showProxy();

  let frame = document.getElementById("uv-frame");
  frame.src = "/tab?page=" + __uv$config.encodeUrl(url);
}
