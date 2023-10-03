import { escapeHtml } from "../utils/index.js";

const createLatestCardTitle = (username) => {
  return `
    <g data-testid="card-title" transform="translate(25, 35)">
        <g transform="translate(0, 0)">
          <text x="0" y="0" class="header" data-testid="header">${username}.log 's latest posts</text>
        </g>
    </g>
    `;
};

const createLatestCardBody = ({ posts }) => {
  const postUrls = posts.map(
    (post) => `https://velog.io/@${post.user.username}/` + post.url_slug
  );

  return `
  <g data-testid="main-card-body" transform="translate(0, 45)">
  <svg data-testid="lang-items" x="25" width="400" height="400" viewBox="0 0 400 400">
      <g transform="translate(0, 0)">
          ${postUrls.map((url, index) => {
            return `
              <text data-testid="lang-list" class="list-style" x="5" y="${
                20 + index * 23
              }">•</text>
              <a href="${url}">
                  <text data-testid="lang-name" x="20" y="${
                    20 + index * 23
                  }" class="log-title">${
              escapeHtml(posts[index]?.title) || "-"
            }</text>
              </a>
            `;
          })}
      </g>
  </svg>
</g>
    `;
};

const latestCardStyle = `
    <style>
        .header {
            font: bold 14px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: #343A40;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
        }
        .log-title { font: bold 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #212529 }
        .log-description { font-size: 12px; fill: #495057}
        .tag-item { font-size: 12px; fill: #0CA678;}
        .heart-count { font-size: 12px; fill: #495057;}
        .log-title:hover{ fill: #0CA678; text-decoration: underline;}
        .list-style{font-size:14px; fill: #212529; }
    </style>
`;
const createLatestCard = (data) => {
  console.log(data);
  return `
        <svg xmlns="http://www.w3.org/2000/svg" width="430" height="160" viewBox="0 0 430 160" fill="none">
            ${latestCardStyle}
            <rect data-testid="card-bg" x="0.5" y="0.5" rx="4.5" height="99%" stroke="#e4e2e2" width="429" fill="#fffefe" stroke-opacity="1"/>
            ${createLatestCardTitle(data.posts[0].user.username)}
            ${createLatestCardBody(data)}
        </svg>
    `;
};

export default createLatestCard;
