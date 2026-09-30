import { useEffect, useRef } from 'react';

function drawChurn(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  const t = Date.now() / 1000;
  const bars = [0.45, 0.72, 0.38, 0.85, 0.61, 0.9, 0.55];
  const bw = (w / bars.length) * 0.55;
  const gap = w / bars.length;
  bars.forEach((v, i) => {
    const bh = (h - 30) * v * (0.9 + 0.1 * Math.sin(t * 1.2 + i));
    const x = gap * i + (gap - bw) / 2;
    const y = h - bh - 10;
    const alpha = i === 5 ? 1 : 0.35 + i * 0.08;
    ctx.fillStyle = i === 5 ? `rgba(139, 92, 246, ${alpha})` : `rgba(139, 92, 246, ${alpha * 0.5})`;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, bw, bh, 3);
    } else {
      ctx.rect(x, y, bw, bh);
    }
    ctx.fill();
  });
  ctx.fillStyle = 'rgba(139, 92, 246, 0.7)';
  ctx.font = '11px Inter,sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CHURN RISK SEGMENTATION', w / 2, 18);
}

function drawBI(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  const t = Date.now() / 1000;
  const pts = [0.3, 0.45, 0.38, 0.55, 0.5, 0.68, 0.6, 0.78, 0.72, 0.85];
  ctx.strokeStyle = 'rgba(52, 211, 153, 0.8)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  pts.forEach((v, i) => {
    const x = 20 + (i * (w - 40)) / (pts.length - 1);
    const y = h - 20 - (h - 40) * v;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  const idx = Math.floor(t * 1.5) % pts.length;
  const dx = 20 + (idx * (w - 40)) / (pts.length - 1);
  const dy = h - 20 - (h - 40) * pts[idx];
  ctx.beginPath();
  ctx.arc(dx, dy, 4, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(52, 211, 153, 1)';
  ctx.fill();

  ctx.strokeStyle = 'rgba(52, 211, 153, 0.07)';
  ctx.lineWidth = 0.5;
  for (let i = 1; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(20, (h / 4) * i);
    ctx.lineTo(w - 20, (h / 4) * i);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(52, 211, 153, 0.6)';
  ctx.font = '11px Inter,sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('GLOBAL REVENUE TREND', w / 2, 18);
}

function drawNIDS(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  const t = Date.now() / 1000;
  const layers = [[h / 2], [h / 3, h / 2, (2 * h) / 3], [h * 0.25, h * 0.42, h * 0.58, h * 0.75], [h / 2]];
  const xs = [w * 0.1, w * 0.35, w * 0.65, w * 0.9];
  layers.forEach((layer, li) => {
    if (li === layers.length - 1) return;
    layer.forEach((y1) => {
      layers[li + 1].forEach((y2) => {
        const pulse = Math.sin(t * 2 + y1 + y2) > 0.5 ? 1 : 0.08;
        ctx.strokeStyle = `rgba(248, 113, 113, ${pulse * 0.5})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(xs[li], y1);
        ctx.lineTo(xs[li + 1], y2);
        ctx.stroke();
      });
    });
  });
  layers.forEach((layer, li) => {
    layer.forEach((y) => {
      const r = li === 0 || li === 3 ? 7 : 5;
      ctx.beginPath();
      ctx.arc(xs[li], y, r, 0, Math.PI * 2);
      ctx.fillStyle = li === 0 || li === 3 ? 'rgba(248, 113, 113, 0.9)' : 'rgba(248, 113, 113, 0.6)';
      ctx.fill();
    });
  });
  ctx.fillStyle = 'rgba(248, 113, 113, 0.7)';
  ctx.font = '11px Inter,sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('AUTOENCODER ARCHITECTURE', w / 2, 18);
}

function drawNLP(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  const t = Date.now() / 1000;
  const tokens = ['INPUT', '[CLS]', 'EMAIL', 'TOKEN', 'BERT', '→', 'CLASS'];
  const tw = Math.floor((w - 40) / tokens.length);
  tokens.forEach((tok, i) => {
    const x = 20 + i * tw;
    const y = h / 2 - 14;
    const alpha = 0.15 + 0.2 * Math.abs(Math.sin(t * 0.8 + i));
    ctx.fillStyle = `rgba(167, 139, 250, ${alpha})`;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x + 2, y, tw - 4, 28, 4);
    } else {
      ctx.rect(x + 2, y, tw - 4, 28);
    }
    ctx.fill();
    ctx.strokeStyle = `rgba(167, 139, 250, ${alpha + 0.2})`;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x + 2, y, tw - 4, 28, 4);
    } else {
      ctx.rect(x + 2, y, tw - 4, 28);
    }
    ctx.stroke();
    ctx.fillStyle = 'rgba(167, 139, 250, 0.9)';
    ctx.font = `9px Inter,sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText(tok, x + tw / 2, h / 2 + 3);
  });
  ctx.fillStyle = 'rgba(167, 139, 250, 0.7)';
  ctx.font = '11px Inter,sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('DISTILBERT FINE-TUNING PIPELINE', w / 2, 18);
}

function drawRec(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  const t = Date.now() / 1000;
  const books = 7;
  const bw = 24, bh = 36, gap = 10;
  const totalW = books * (bw + gap) - gap;
  const startX = (w - totalW) / 2;
  for (let i = 0; i < books; i++) {
    const x = startX + i * (bw + gap);
    const y = h / 2 - bh / 2 + Math.sin(t + i * 0.5) * 5;
    const hues = [
      'rgba(52,211,153',
      'rgba(16,185,129',
      'rgba(5,150,105',
      'rgba(4,120,87',
      'rgba(6,95,70',
      'rgba(16,185,129',
      'rgba(52,211,153'
    ];
    ctx.fillStyle = `${hues[i]},0.4)`;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, bw, bh, 2);
    } else {
      ctx.rect(x, y, bw, bh);
    }
    ctx.fill();
    ctx.strokeStyle = `${hues[i]},0.7)`;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, bw, bh, 2);
    } else {
      ctx.rect(x, y, bw, bh);
    }
    ctx.stroke();
    ctx.strokeStyle = `${hues[i]},0.5)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 4, y + 4);
    ctx.lineTo(x + 4, y + bh - 4);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(52, 211, 153, 0.7)';
  ctx.font = '11px Inter,sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('CONTENT-BASED RECOMMENDER', w / 2, 18);
}

function drawChat(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  const t = Date.now() / 1000;
  const bubbles = [
    { x: 20, y: 30, w: w * 0.55, user: false },
    { x: w - 20 - w * 0.45, y: 72, w: w * 0.45, user: true },
    { x: 20, y: 112, w: w * 0.6, user: false }
  ];
  bubbles.forEach((b, i) => {
    const alpha = 0.15 + 0.05 * Math.sin(t + i);
    ctx.fillStyle = b.user ? `rgba(56, 189, 248, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(b.x, b.y, b.w, 28, 14);
    } else {
      ctx.rect(b.x, b.y, b.w, 28);
    }
    ctx.fill();
    ctx.strokeStyle = b.user ? `rgba(56, 189, 248, 0.3)` : `rgba(255, 255, 255, 0.1)`;
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(b.x, b.y, b.w, 28, 14);
    } else {
      ctx.rect(b.x, b.y, b.w, 28);
    }
    ctx.stroke();
    for (let d = 0; d < 3; d++) {
      ctx.beginPath();
      ctx.arc(b.x + (b.user ? b.w - 30 : 20) + d * 10, b.y + 14, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = b.user ? `rgba(56, 189, 248, 0.8)` : `rgba(255, 255, 255, 0.5)`;
      ctx.fill();
    }
  });
  ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
  ctx.font = '11px Inter,sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('WORD2VEC Q&A RETRIEVAL', w / 2, h - 10);
}

const drawFns = {
  churn: drawChurn,
  bi: drawBI,
  nids: drawNIDS,
  nlp: drawNLP,
  rec: drawRec,
  chat: drawChat
};

export default function ProjectCanvas({ type }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const drawFn = drawFns[type];
    if (!drawFn || !ctx) return;

    let animationFrameId;

    const resizeAndDraw = () => {
      canvas.width = canvas.offsetWidth || 360;
      canvas.height = canvas.offsetHeight || 180;
    };

    resizeAndDraw();

    const loop = () => {
      drawFn(ctx, canvas.width, canvas.height);
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    window.addEventListener('resize', resizeAndDraw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeAndDraw);
    };
  }, [type]);

  return <canvas className="pv-canvas" ref={canvasRef}></canvas>;
}
