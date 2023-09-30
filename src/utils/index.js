const axios = require("axios");
function request(data) {
  return axios({
    url: "https://v2.velog.io/graphql",
    method: "post",
    data,
  });
}
function koCheck(lang) {
  var check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  return check.test(lang);
}

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

function escapeHtml(text) {
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

function getWidth(text) {
  const textContainer = document.createElement("div");
  textContainer.innerText = text;

  document.body.appendChild(textContainer);

  const width = textContainer.offsetWidth;
  document.body.removeChild(textContainer);

  return width;
}

module.exports = {
  request,
  koCheck,
  replaceAll,
  escapeHtml,
};
