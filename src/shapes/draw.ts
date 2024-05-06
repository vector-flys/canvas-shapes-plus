import { CanvasRenderingContext2D } from "canvas";

export function fill(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = color;
  ctx.fill();
}

export function outline(
  ctx: CanvasRenderingContext2D,
  color: string,
  bColor: string = "white"
) {
  fill(ctx, color);
  stroke(ctx, bColor);
}

export function stroke(ctx: CanvasRenderingContext2D, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.stroke();
}
