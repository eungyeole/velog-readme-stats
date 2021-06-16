const axios = require('axios')
function request(data) {
    return axios({
      url: "https://v2.velog.io/graphql",
      method: "post",
      data,
    });
}
module.exports={
    request
}