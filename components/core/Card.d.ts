import React from 'react';

/**
 * The Phosphorous surface tile — dark fill, glowing cyan edge, optional shimmer. Base for content tiles.
 * @startingPoint section="Core" subtitle="Glowing surface tile with shimmer border" viewport="700x200"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Show the iridescent pink→purple shimmer border. Default true. */
  iridescent?: boolean;
  /** Use the glowing cyan border (vs. a plain hairline). Default true. */
  glow?: boolean;
  /** Corner radius: 'lg' (8px) or 'xl' (12px), or any CSS length. Default 'xl'. */
  radius?: 'lg' | 'xl' | string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): React.JSX.Element;
