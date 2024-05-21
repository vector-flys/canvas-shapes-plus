// deno-lint-ignore-file no-this-alias
import { CanvasRenderingContext2D } from "canvas";
import { fill, outline, stroke } from "./draw";

/**
 * Equilateral triangle (centered at x, y)
 *
 * This is a separate function because I could not get the generic
 * one to draw the triangle consistently for all drawTypes.
 *
 * @param ctx
 * @param options
 * @returns
 */
export function createEquiTriangle(
  ctx: CanvasRenderingContext2D,
  options: EquiTriangleOptions
): EquiTriangleReturn {
  if (!options) options = {};
  if (!options.x) options.x = 0;
  if (!options.y) options.y = 0;
  if (!options.color) options.color = "black";
  if (!options.height && options.height != 0) options.height = 50;

  return {
    x: options.x,
    y: options.y,
    height: options.height,
    color: options.color,
    draw(_options: EquiTriangleDrawOptions): EquiTriangleReturn {
      if (!_options) _options = {};
      if (!_options.drawType) _options.drawType = "fill";
      const x = _options.x == 0 ? 0 : _options.x || (options.x as number);
      const y = _options.y == 0 ? 0 : _options.y || (options.y as number);
      const height = _options.height || (options.height as number);
      const color = _options.color || (options.color as string);
      const bColor = _options.bColor || (options.bColor as string);

      // Create a path for an equilateral triangle of height "h" centered at (x, y)
      const radius = height / 2;
      const x1 = x - radius;
      const y1 = y + radius;
      const x2 = x;
      const y2 = y - radius;
      const x3 = x + radius;
      const y3 = y + radius;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.lineTo(x1, y1);
      ctx.closePath();

      if (_options.drawType == "fill") fill(ctx, color);
      else if (_options.drawType == "stroke") stroke(ctx, color);
      else if (_options.drawType == "outline") {
        outline(ctx, color, bColor);
      }
      const draw = this;
      return {
        x,
        y,
        height,
        color,
        draw(options: EquiTriangleDrawOptions): EquiTriangleReturn {
          return draw.draw(options);
        },
      };
    },
  };
}

export interface EquiTriangleOptions {
  x?: number;
  y?: number;
  color?: string;
  bColor?: string;
  height?: number;
}

export interface EquiTriangleDrawOptions extends EquiTriangleOptions {
  drawType?: "fill" | "stroke" | "outline";
}

export interface EquiTriangleReturn extends EquiTriangleOptions {
  draw(options?: EquiTriangleDrawOptions): this;
}

/**
 * Generic triangle
 * @param ctx
 * @param options
 * @returns
 */
export function createTriangle(
  ctx: CanvasRenderingContext2D,
  options: TriangleOptions
): TriangleReturn {
  if (!options) options = {};
  if (!options.x) options.x = 0;
  if (!options.y) options.y = 0;
  if (!options.sideAB) options.sideAB = 0;
  if (!options.sideAC) options.sideAC = 0;
  if (!options.sideBC) options.sideBC = 0;
  if (!options.rotate) options.rotate = 0;
  if (!options.color) options.color = "black";
  if (!options.size && options.size != 0) options.size = 50;

  return {
    x: options.x,
    y: options.y,
    color: options.color,
    sideAB: options.sideAB,
    sideAC: options.sideAC,
    sideBC: options.sideBC,
    rotate: options.rotate,
    size: options.size,
    draw(_options: TriangleDrawOptions): TriangleReturn {
      if (!_options) _options = {};
      const bColor = _options.bColor || (options.bColor as string);
      const size =
          _options.size == 0 ? 0 : _options.size || (options.size as number),
        x = _options.x == 0 ? 0 : _options.x || (options.x as number),
        y = _options.y == 0 ? 0 : _options.y || (options.y as number),
        rotate = (
          _options.rotate == 0 ? 0 : _options.rotate || options.rotate == 0
        ) as number,
        color = _options.color || (options.color as string);
      let sideAB = (
          _options.sideAB == 0 ? 0 : _options.sideAB || options.sideAB == 0
        ) as number,
        sideAC = (
          _options.sideAC == 0 ? 0 : _options.sideAC || options.sideAC == 0
        ) as number,
        sideBC = (
          _options.sideBC == 0 ? 0 : _options.sideBC || options.sideBC == 0
        ) as number;
      sideAB = sideAB / 100;
      sideAC = sideAC / 100;
      sideBC = sideBC / 200;
      const v = [
        [sideAB - sideAC, -sideAB - sideAC - 1],
        [-sideAB - sideBC - 0.6, sideAB],
        [0.6 + sideAC + sideBC, sideAC],
      ];
      // ctx.beginPath();
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotate * Math.PI) / 180);
      ctx.scale(size, size);

      ctx.beginPath();
      ctx.moveTo(v[0][0], v[0][1]);
      ctx.lineTo(v[1][0], v[1][1]);
      ctx.lineTo(v[2][0], v[2][1]);
      ctx.closePath();

      ctx.lineWidth = 2;
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      if (_options.drawType == "fill") ctx.fill();
      else if (_options.drawType == "stroke") ctx.stroke();
      else if (_options.drawType == "outline") {
        ctx.strokeStyle = bColor;
        ctx.fill();
        ctx.stroke();
      }
      ctx.restore();

      const draw = this;
      return {
        x,
        y,
        size,
        sideAB,
        sideAC,
        sideBC,
        draw(options: TriangleDrawOptions): TriangleReturn {
          return draw.draw(options);
        },
      };
    },
  };
}

export interface TriangleOptions {
  x?: number;
  y?: number;
  color?: string;
  bColor?: string;
  sideAB?: number;
  sideAC?: number;
  sideBC?: number;
  rotate?: number;
  size?: number;
}

export interface TriangleDrawOptions extends TriangleOptions {
  drawType?: "fill" | "stroke" | "outline";
}

export interface TriangleReturn extends TriangleOptions {
  draw(options?: TriangleDrawOptions): this;
}
