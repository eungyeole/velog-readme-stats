import axios from "axios";
import canvas from "@napi-rs/canvas";

export function request(data) {
  return axios({
    url: "https://v2.velog.io/graphql",
    method: "post",
    data,
  });
}

export function koCheck(lang) {
  var check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return check.test(lang);
}

export function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

export function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, function (m) {
    return map[m];
  });
}

export function getTextWidth(text, font) {
  const ctx = canvas.createCanvas(1, 1).getContext("2d");
  ctx.font = font;
  const textMetrics = ctx.measureText(text);

  return textMetrics.width;
}
