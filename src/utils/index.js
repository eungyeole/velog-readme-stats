export function request(data, headers) {
    return axios({
      url: "https://v2.velog.io/graphql",
      method: "post",
      headers,
      data,
    });
}