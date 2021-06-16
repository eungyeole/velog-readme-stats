const axios = require('axios')
function request(data) {
    return axios({
      url: "https://v2.velog.io/graphql",
      method: "post",
      data,
    });
}
function koCheck(lang){
    var check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return check.test(lang)
}
module.exports={
    request,
    koCheck

}

