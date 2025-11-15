import { useEffect, useRef } from 'react';

interface WaterAnimationProps {
  onAnimationComplete?: () => void;
}

export function WaterAnimation({ onAnimationComplete }: WaterAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);
  const entranceCompleteRef = useRef<boolean>(false);
  const scrollGlowRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = Math.min(window.scrollY / (window.innerHeight * 0.8), 1);
      scrollGlowRef.current = scrollPercent;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawCausticPattern = (time: number, glowIntensity: number) => {
      const causticCount = 8;
      const baseOpacity = 0.03 + (glowIntensity * 0.08);
      
      for (let i = 0; i < causticCount; i++) {
        const offsetX = Math.sin(time * 0.3 + i * 2) * 100;
        const offsetY = Math.cos(time * 0.2 + i * 3) * 50;
        const scale = 1 + Math.sin(time * 0.5 + i) * 0.3;
        
        ctx.save();
        ctx.globalAlpha = baseOpacity * (1 + Math.sin(time * 0.4 + i) * 0.5);
        ctx.translate(
          (canvas.width / causticCount) * i + offsetX,
          canvas.height * 0.4 + offsetY
        );
        ctx.scale(scale, scale);
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 200);
        gradient.addColorStop(0, `rgba(96, 165, 250, ${0.4 + glowIntensity * 0.3})`);
        gradient.addColorStop(0.3, `rgba(59, 130, 246, ${0.2 + glowIntensity * 0.2})`);
        gradient.addColorStop(0.6, `rgba(37, 99, 235, ${0.1 + glowIntensity * 0.1})`);
        gradient.addColorStop(1, 'rgba(14, 82, 184, 0)');
        
        ctx.beginPath();
        ctx.arc(0, 0, 200, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }
    };

    const drawRealisticWave = (
      time: number,
      baseY: number,
      amplitude: number,
      frequency: number,
      speed: number,
      phase: number,
      layer: number,
      glowIntensity: number
    ) => {
      const points: { x: number; y: number }[] = [];
      const segments = Math.floor(canvas.width / 3);
      
      for (let i = 0; i <= segments; i++) {
        const x = (canvas.width / segments) * i;
        const normalizedX = x / canvas.width;
        
        const primaryWave = Math.sin(normalizedX * frequency * Math.PI * 2 + time * speed + phase);
        const secondaryWave = Math.sin(normalizedX * frequency * Math.PI * 4 + time * speed * 1.3 + phase * 2) * 0.3;
        const tertiaryWave = Math.sin(normalizedX * frequency * Math.PI * 6 + time * speed * 0.7 + phase * 1.5) * 0.15;
        
        const combinedWave = primaryWave + secondaryWave + tertiaryWave;
        const y = baseY + combinedWave * amplitude;
        
        points.push({ x, y });
      }
      
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        
        if (i === 0) {
          ctx.lineTo(point.x, point.y);
        } else {
          const prevPoint = points[i - 1];
          const cpX = (prevPoint.x + point.x) / 2;
          const cpY = (prevPoint.y + point.y) / 2;
          ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cpX, cpY);
        }
      }
      
      const lastPoint = points[points.length - 1];
      ctx.lineTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      
      const gradient = ctx.createLinearGradient(0, baseY - amplitude * 2, 0, canvas.height);
      
      const baseBlue = layer === 0 ? 0.15 : layer === 1 ? 0.12 : 0.08;
      const glowBoost = glowIntensity * 0.25;
      
      if (layer === 0) {
        gradient.addColorStop(0, `rgba(96, 165, 250, ${baseBlue + glowBoost + 0.05})`);
        gradient.addColorStop(0.2, `rgba(59, 130, 246, ${baseBlue + glowBoost + 0.08})`);
        gradient.addColorStop(0.5, `rgba(37, 99, 235, ${baseBlue + glowBoost + 0.1})`);
        gradient.addColorStop(0.8, `rgba(29, 78, 216, ${baseBlue + glowBoost + 0.12})`);
        gradient.addColorStop(1, `rgba(30, 64, 175, ${baseBlue + glowBoost + 0.15})`);
      } else if (layer === 1) {
        gradient.addColorStop(0, `rgba(59, 130, 246, ${baseBlue + glowBoost})`);
        gradient.addColorStop(0.3, `rgba(37, 99, 235, ${baseBlue + glowBoost + 0.05})`);
        gradient.addColorStop(0.7, `rgba(29, 78, 216, ${baseBlue + glowBoost + 0.08})`);
        gradient.addColorStop(1, `rgba(30, 58, 138, ${baseBlue + glowBoost + 0.12})`);
      } else {
        gradient.addColorStop(0, `rgba(37, 99, 235, ${baseBlue + glowBoost})`);
        gradient.addColorStop(0.4, `rgba(29, 78, 216, ${baseBlue + glowBoost + 0.04})`);
        gradient.addColorStop(0.8, `rgba(30, 64, 175, ${baseBlue + glowBoost + 0.06})`);
        gradient.addColorStop(1, `rgba(23, 37, 84, ${baseBlue + glowBoost + 0.1})`);
      }
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      if (layer === 0) {
        ctx.save();
        ctx.globalAlpha = 0.4 + glowIntensity * 0.3;
        ctx.strokeStyle = `rgba(165, 215, 255, ${0.3 + glowIntensity * 0.4})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = `rgba(96, 165, 250, ${0.5 + glowIntensity * 0.5})`;
        ctx.shadowBlur = 15 + glowIntensity * 20;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        
        for (let i = 1; i < points.length; i++) {
          const point = points[i];
          const prevPoint = points[i - 1];
          const cpX = (prevPoint.x + point.x) / 2;
          const cpY = (prevPoint.y + point.y) / 2;
          ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cpX, cpY);
        }
        
        ctx.stroke();
        ctx.restore();
        
        for (let i = 0; i < points.length; i += 3) {
          const point = points[i];
          if (i > 0) {
            const prevPoint = points[i - 1];
            const waveHeight = prevPoint.y - point.y;
            
            if (waveHeight > amplitude * 0.3) {
              ctx.save();
              ctx.globalAlpha = (0.2 + glowIntensity * 0.3) * Math.random();
              const foamGradient = ctx.createRadialGradient(
                point.x, point.y, 0,
                point.x, point.y, 8
              );
              foamGradient.addColorStop(0, `rgba(200, 230, 255, ${0.8 + glowIntensity * 0.2})`);
              foamGradient.addColorStop(0.5, `rgba(165, 215, 255, ${0.4 + glowIntensity * 0.2})`);
              foamGradient.addColorStop(1, 'rgba(96, 165, 250, 0)');
              ctx.fillStyle = foamGradient;
              ctx.beginPath();
              ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          }
        }
      }
    };

    const drawFloatingParticles = (time: number, glowIntensity: number) => {
      const particleCount = 40;
      
      for (let i = 0; i < particleCount; i++) {
        const x = ((time * 10 + i * 100) % (canvas.width + 200)) - 100;
        const y = (canvas.height * 0.3) + Math.sin(time * 0.5 + i) * 150 + (i * 20);
        const size = 2 + Math.sin(time + i) * 1.5;
        const opacity = (0.3 + Math.sin(time * 0.7 + i * 2) * 0.2) * (0.5 + glowIntensity * 0.5);
        
        ctx.save();
        ctx.globalAlpha = opacity;
        const particleGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
        particleGradient.addColorStop(0, `rgba(165, 215, 255, ${0.9 + glowIntensity * 0.1})`);
        particleGradient.addColorStop(0.4, `rgba(96, 165, 250, ${0.6 + glowIntensity * 0.3})`);
        particleGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = particleGradient;
        ctx.beginPath();
        ctx.arc(x, y, size * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    const animate = () => {
      timeRef.current += 0.012;
      const entranceProgress = Math.min(timeRef.current / 3.5, 1);
      
      if (entranceProgress >= 1 && !entranceCompleteRef.current) {
        entranceCompleteRef.current = true;
        onAnimationComplete?.();
      }

      const glowIntensity = Math.max(entranceProgress * 0.3, scrollGlowRef.current);
      
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#04101f');
      bgGradient.addColorStop(0.3, '#051224');
      bgGradient.addColorStop(0.6, '#0a1e3a');
      bgGradient.addColorStop(1, '#0d2240');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drawCausticPattern(timeRef.current, glowIntensity);
      drawFloatingParticles(timeRef.current, glowIntensity);
      
      const waveTransition = Math.pow(entranceProgress, 1.8);
      const baseY = canvas.height * (1.4 - waveTransition * 0.4);
      
      drawRealisticWave(timeRef.current, baseY + 120, 35, 1.2, 0.4, 0, 2, glowIntensity * 0.6);
      drawRealisticWave(timeRef.current, baseY + 60, 45, 0.8, 0.5, 1.5, 1, glowIntensity * 0.8);
      drawRealisticWave(timeRef.current, baseY, 60, 0.5, 0.6, 3, 0, glowIntensity);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [onAnimationComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
