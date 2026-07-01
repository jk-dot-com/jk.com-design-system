import React from 'react';

export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "40%", "1,200", "14yr". */
  stat: React.ReactNode;
  /** Mono caption beneath it, e.g. "Cost reduction". */
  label: React.ReactNode;
  align?: 'left' | 'right' | 'center';
}

/** A gradient-text metric over a mono caption — the proof numbers on portfolio case studies. */
export function StatBlock(props: StatBlockProps): React.JSX.Element;
