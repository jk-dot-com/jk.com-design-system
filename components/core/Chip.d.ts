import React from 'react';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Override text/glyph color (defaults to cyan). */
  color?: string;
  /** Override border color. */
  borderColor?: string;
  children?: React.ReactNode;
}

/** Mono, uppercase, pill-shaped tag with a faint cyan fill — for tech labels & status markers. */
export function Chip(props: ChipProps): React.JSX.Element;
