import { getTextWidth } from "../utils/index.js";

const createBadge = (name) => {
  const size = getTextWidth(name, "13px --apple-system") * 1.1;

  const rectWidth = size + 16;
  const rectX = 22;
  const containerWidth = rectWidth + rectX;

  return `
        <svg width="${containerWidth}" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .name{ fill: #ffffff; font-weight: 500; font-size: 13px;}
            </style>
            <g>
                <g fill="#20C997">
                    <rect x="${rectX}" width="${rectWidth}" height="25" />
                    <text x="${
                      rectX + 8
                    }" y="17" textLength="${size}" class="name">${name}</text>
                </g>
                <path d="M3.125 0H21.875C23.6009 0 25 1.39911 25 3.125V21.875C25 23.6009 23.6009 25 21.875 25H3.125C1.39911 25 0 23.6009 0 21.875V3.125C0 1.39911 1.39911 0 3.125 0Z" fill="#20C997"/>
                <path d="M18.6199 8.526V7.54163C17.9949 7.3385 17.2605 7.11975 16.4167 6.88538C15.573 6.63538 15.0027 6.51038 14.7058 6.51038C14.0496 6.51038 13.6589 6.82288 13.5339 7.44788L12.0105 16.0963C11.5261 15.4557 11.1277 14.9166 10.8152 14.4791C10.3308 13.7916 9.8855 13.0026 9.47925 12.1119C9.05737 11.2213 8.84644 10.4244 8.84644 9.72131C8.84644 9.29944 8.96362 8.9635 9.198 8.7135C9.41675 8.44788 9.83081 8.11194 10.4402 7.70569C9.81519 6.90881 9.03393 6.51038 8.09643 6.51038C7.59644 6.51038 7.18237 6.65881 6.85425 6.95569C6.5105 7.25256 6.33862 7.69006 6.33862 8.26819C6.33862 9.23694 6.74487 10.4479 7.55737 11.901C8.35425 13.3385 9.89331 15.5026 12.1746 18.3932L14.4949 18.5573L16.2761 8.526H18.6199Z" fill="white"/>
            </g>
        </svg>
    `;
};

export default createBadge;
