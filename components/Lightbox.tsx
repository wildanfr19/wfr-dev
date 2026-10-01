'use client';
import { useCallback, useEffect, useRef } from 'react';
import type { Shot } from '@/lib/gallery';
import { ChevronLeft, ChevronRight, Close } from './Icons';

type Props = {
  title: string;
  shots: Shot[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
};

export default function Lightbox({ title, shots, index, onIndex, onClose }: Props) {
  const stripRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const shot = shots[index];
  const multiple = shots.length > 1;

  const go = useCallback(
    (step: number) => onIndex((index + step + shots.length) % shots.length),
    [index, shots.length, onIndex],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // keep the active thumbnail visible and warm up neighbouring images
  useEffect(() => {
    stripRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    [index + 1, index - 1].forEach(i => {
      const s = shots[(i + shots.length) % shots.length];
      if (s) new Image().src = s.src;
    });
  }, [index, shots]);

  const groups = shots.reduce<{ name: string; start: number; count: number }[]>((acc, s, i) => {
    const last = acc[acc.length - 1];
    if (last && last.name === s.group) last.count++;
    else acc.push({ name: s.group, start: i, count: 1 });
    return acc;
  }, []);

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={`${title} screenshots`}>
      <div className="lb-top">
        <div className="lb-title">
          <b>{title}</b>
          <span>{index + 1} / {shots.length}</span>
        </div>
        {groups.length > 1 && (
          <div className="lb-groups">
            {groups.map(g => (
              <button
                key={g.name}
                className={`lb-group ${shot.group === g.name ? 'active' : ''}`}
                onClick={() => onIndex(g.start)}
              >
                {g.name} · {g.count}
              </button>
            ))}
          </div>
        )}
        <button className="lb-close" onClick={onClose} aria-label="Close gallery">
          <Close />
        </button>
      </div>

      <div
        className="lb-stage"
        onClick={e => e.target === e.currentTarget && onClose()}
        onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={e => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <img key={shot.src} src={shot.src} alt={shot.caption} width={shot.w} height={shot.h} />
        {multiple && (
          <>
            <button className="lb-nav prev" onClick={() => go(-1)} aria-label="Previous screenshot"><ChevronLeft /></button>
            <button className="lb-nav next" onClick={() => go(1)} aria-label="Next screenshot"><ChevronRight /></button>
          </>
        )}
      </div>

      <p className="lb-caption">
        <span>{shot.group}</span>
        {shot.caption}
      </p>

      {multiple && (
        <div className="lb-strip" ref={stripRef}>
          {shots.map((s, i) => (
            <button key={s.src} className={i === index ? 'active' : ''} onClick={() => onIndex(i)} aria-label={s.caption}>
              <img src={s.thumb} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
