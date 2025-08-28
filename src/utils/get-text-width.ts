import canvas from "canvas";

export function getTextWidth(text: string, font: number) {
  const ctx = canvas.createCanvas(1, 1).getContext("2d");
  ctx.font = `${font}px -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji`;
  const textMetrics = ctx.measureText(text);

  return textMetrics.width;
}
