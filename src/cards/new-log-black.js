import { koCheck, replaceAll } from "../utils/index.js";

const createCardTitle = (username, likes) => {
  const likeX = likes > 99 ? 365 : likes > 9 ? 370 : 380;
  return `
        <g data-testid="card-title" transform="translate(25, 35)">
        <g transform="translate(0, 0)">
                <text x="0" y="0" class="header" data-testid="header">${username}.log</text>
                <svg width="30" x="390" y="-10" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 0L7.5 2.26044L3.75 0L0 2.82555V6.78133L7.5 12.4324L15 6.78133V2.82555L11.25 0Z" fill="#20c997"/>
                </svg>
                <text x="${likeX}" class="heart-count" data-testid="heart-count">${likes}</text>
            </g>
        </g>
    `;
};

const createCardBody = ({ title, short_description }) => {
  return `
        <g data-testid="main-card-body" transform="translate(0, 45)">
        <svg data-testid="lang-items" x="25" width="400" height="40" viewBox="0 0 400 40">
            <g transform="translate(0, 0)">
                <text data-testid="lang-name" x="2" y="15" class="log-title">${escapeHtml(
                  title
                )}</text>
                <text ata-testid="lang-description" x="2" y="35" class="log-description">${escapeHtml(
                  short_description
                )}</text>
            </g>
        </svg>
        </g>
    `;
};

const createCardBottom = ({ tags }) => {
  let prev = 25;
  return `
        <g data-testid="main-card-bottom" transform="translate(0, 40)">
            ${tags.map((element) => {
              const text = replaceAll(element, " ", "");
              const blakSize = element.length - text.length;
              const size =
                (koCheck(text) ? text.length * 12 + 12 : text.length * 9 + 5) +
                blakSize * 2;
              const pos = prev;
              if (prev + size > 400) return;
              else prev += size + 5;
              return `
                        <svg data-testid="lang-items" x="${pos}" width="${size}" viewBox="0 0 ${size} 19">
                            <g style="position: relative;">
                                <rect width="${size}" height="19.5367" rx="9.76834" fill="#44474B"/>
                                <text data-testid="lang-name" text-anchor="middle" x="${
                                  size / 2
                                }" y="13" class="tag-item">${element}</text>
                            </g>
                        </svg>
                    `;
            })}
        </g>
    `;
};

const cardStyle = `
    <style>
        .header {
            font: bold 14px 'Segoe UI', Ubuntu, Sans-Serif;
            fill: #20c997;
            animation: fadeInAnimation 0.8s ease-in-out forwards;
        }
        .log-title { font: bold 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: white }
        .log-description { font-size: 12px; fill: white}
        .tag-item { font-size: 12px; fill: #BCBCBC;}
        .heart-count { font-size: 12px; fill: #20c997;}
    </style>
`;
const createCardDark = (data) => {
  return `
        <svg xmlns="http://www.w3.org/2000/svg" width="450" height="130" viewBox="0 0 450 130" fill="none">
            ${cardStyle}
            <rect data-testid="card-bg" x="0.5" y="0.5" rx="4.5" height="99%" stroke="#30363d" width="449" fill="#24292e" stroke-opacity="1"/>
            ${createCardTitle(data.user.username, data.likes)}
            ${createCardBody(data)}
            ${createCardBottom(data)}
        </svg>
    `;
};

export default createCardDark;
