import React from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'red';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Phosphorous CTA button — uppercase Space Grotesk, tight 4px radius, neon glow, -1px hover lift.
 * @startingPoint section="Core" subtitle="Primary, outline & red CTAs with neon glow" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. primary = Azure→cyan gradient, outline = cyan stroke + glow, red = the booking/transmit CTA. */
  variant?: ButtonVariant;
  /** Padding + font-size preset. */
  size?: ButtonSize;
  /** Adds the iridescent pink→purple shimmer streak across the border. */
  iridescent?: boolean;
  /** Render as a different element (e.g. 'a' for links). */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): React.JSX.Element;
