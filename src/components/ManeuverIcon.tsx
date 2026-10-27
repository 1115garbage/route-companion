import React from 'react';
import { 
  CornerUpRight, 
  CornerUpLeft, 
  ArrowUp, 
  RotateCcw, 
  Flag, 
  GitFork, 
  Compass, 
  CircleDot,
  ArrowUpRight,
  ArrowUpLeft
} from 'lucide-react';

interface ManeuverIconProps {
  type?: string;
  modifier?: string;
  className?: string;
}

export const ManeuverIcon: React.FC<ManeuverIconProps> = ({ 
  type = 'turn', 
  modifier = 'straight',
  className = 'w-10 h-10' 
}) => {
  const mod = (modifier || '').toLowerCase();
  const t = (type || '').toLowerCase();

  if (t === 'arrive') {
    return <Flag className={className} />;
  }

  if (t === 'roundabout' || t === 'rotary') {
    return <CircleDot className={className} />;
  }

  if (t === 'fork') {
    return <GitFork className={className} />;
  }

  if (mod.includes('uturn') || mod.includes('turnaround') || mod.includes('turn around') || t === 'turnaround') {
    return <RotateCcw className={className} />;
  }

  if (mod === 'sharp right') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 21V11a4 4 0 0 1 4-4h5" />
        <polyline points="18 4 21 7 18 10" />
      </svg>
    );
  }

  if (mod === 'sharp left') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 21V11a4 4 0 0 0-4-4H3" />
        <polyline points="6 4 3 7 6 10" />
      </svg>
    );
  }

  if (mod === 'slight right') {
    return <ArrowUpRight className={className} strokeWidth={2.75} />;
  }

  if (mod === 'slight left') {
    return <ArrowUpLeft className={className} strokeWidth={2.75} />;
  }

  if (mod === 'right') {
    return <CornerUpRight className={className} strokeWidth={2.75} />;
  }

  if (mod === 'left') {
    return <CornerUpLeft className={className} strokeWidth={2.75} />;
  }

  if (mod === 'straight' || t === 'continue' || t === 'depart') {
    return <ArrowUp className={className} strokeWidth={2.75} />;
  }

  return <Compass className={className} strokeWidth={2.5} />;
};
