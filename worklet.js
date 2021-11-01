import {
  seedPRNG,
  random,
  createVoronoiTessellation,
} from "@georgedoescode/generative-utils";

const COLORS = [...Array(8)].map((_, i) => `--fluid-pattern-color-${i + 1}`);

class FluidPattern {
  static get inputProperties() {
    return [
      "--fluid-pattern-seed",
      "--fluid-pattern-bg-color",
      "--fluid-pattern-shape-bias-circle",
      "--fluid-pattern-shape-bias-arc",
      "--fluid-pattern-shape-bias-line",
      "--fluid-pattern-shape-bias-rect",
      ...COLORS,
    ];
  }

  propToString(prop) {
    return prop.toString().trim();
  }

  getDefinedColors(props) {
    return COLORS.map((key) => {
      return this.propToString(props.get(key));
    }).filter((value) => value);
  }

  paint(ctx, geometry, props) {
    const { width, height } = geometry;

    const seed = this.propToString(props.get("--fluid-pattern-seed")) || 123456;
    seedPRNG(seed);

    const bgColor = this.propToString(props.get("--fluid-pattern-bg-color"));
    const colors = this.getDefinedColors(props);

    const shapeBiases = {
      circle:
        parseFloat(props.get("--fluid-pattern-shape-bias-circle")) ||
        random(0, 8),
      arc:
        parseFloat(props.get("--fluid-pattern-shape-bias-arc")) || random(0, 8),
      line:
        parseFloat(props.get("--fluid-pattern-shape-bias-line")) ||
        random(0, 8),
      rectangle:
        parseFloat(props.get("--fluid-pattern-shape-bias-rect")) ||
        random(0, 8),
    };

    const { cells } = createVoronoiTessellation({
      width,
      height,
      points: [...Array(24)].map(() => ({
        x: random(0, width),
        y: random(0, height),
      })),
      relaxIterations: 6,
    });

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    ctx.lineCap = "round";

    cells.forEach((cell) => {
      cell.innerCircleRadius *= 0.75;

      const shapeChoice = random(
        weightedArray([
          {
            value: "circle",
            count: shapeBiases.circle,
          },
          {
            value: "arc",
            count: shapeBiases.arc,
          },
          {
            value: "line",
            count: shapeBiases.line,
          },
          {
            value: "rectangle",
            count: shapeBiases.rectangle,
          },
        ])
      );

      ctx.lineWidth = Math.min(cell.innerCircleRadius, 40);

      const colorChoice = random(colors);
      ctx.fillStyle = colorChoice;
      ctx.strokeStyle = colorChoice;

      const radius = random(
        cell.innerCircleRadius / 1.5,
        cell.innerCircleRadius
      );
      const rotationDegrees = random(0, 360);

      ctx.save();

      rotate(ctx, cell.centroid.x, cell.centroid.y, rotationDegrees);

      switch (shapeChoice) {
        case "circle":
          circle(ctx, cell.centroid.x, cell.centroid.y, radius);

          if (random(0, 1) > 0.5) {
            ctx.fillStyle = bgColor;

            circle(ctx, cell.centroid.x, cell.centroid.y, radius / 2);
          }
          break;
        case "arc":
          semiCircle(ctx, cell.centroid.x, cell.centroid.y, radius);

          if (random(0, 1) > 0.5) {
            ctx.fillStyle = bgColor;

            semiCircle(ctx, cell.centroid.x, cell.centroid.y - 1, radius / 2);
          }
          break;
        case "line":
          line(ctx, cell.centroid.x, cell.centroid.y, radius * 0.5);
          break;
        case "rectangle":
          rectangle(ctx, cell.centroid.x, cell.centroid.y, radius);
          break;
      }

      ctx.restore();
    });

    // ctx.beginPath();
    // ctx.fillStyle = "#fff";
    // for (let i = 0; i < 100; i++) {
    //   const x = random(0, width);
    //   const y = random(0, height);

    //   ctx.moveTo(x, y);
    //   ctx.arc(x, y, 0.5, 0, Math.PI * 2);
    // }

    // ctx.fill();
  }
}

function circle(ctx, cx, cy, radius) {
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();
}

function semiCircle(ctx, cx, cy, radius) {
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 1);
  ctx.fill();
}

function line(ctx, cx, cy, length) {
  ctx.beginPath();
  ctx.moveTo(cx - length / 2, cy - length / 2);
  ctx.lineTo(cx + length, cy + length);
  ctx.stroke();
}

function rectangle(ctx, cx, cy, size) {
  ctx.fillRect(cx - size / 2, cy - size / 2, size, size);
}

function rotate(ctx, originX, originY, deg) {
  ctx.translate(originX, originY);
  ctx.rotate((deg * Math.PI) / 180);
  ctx.translate(-originX, -originY);
}

function triangle(ctx, originX, originY, size) {
  const baseX = originX - size;
  const baseY = originY - size;

  ctx.beginPath();
  ctx.moveTo(baseX, baseY);
  ctx.lineTo(baseX, baseY + size * 2);
  ctx.lineTo(baseX + size * 2, baseY);
  ctx.fill();
}

// function blob()

function weightedArray(opts) {
  const items = [];

  opts.forEach((opt) => {
    for (let i = 0; i < opt.count; i++) {
      items.push(opt.value);
    }
  });

  return items;
}

registerPaint("fluidPattern", FluidPattern);
