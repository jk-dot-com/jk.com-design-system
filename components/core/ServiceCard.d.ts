import React from 'react';

/**
 * An offering tile — emoji icon, title, description, mono tech tags. Built on Card.
 * @startingPoint section="Core" subtitle="Service offering tile with icon + tech tags" viewport="700x260"
 */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Emoji or glyph icon shown top-left (the site uses emoji here). */
  icon?: React.ReactNode;
  title: string;
  description: string;
  /** Mono tech tags pinned to the bottom of the card. */
  tags?: string[];
}

export function ServiceCard(props: ServiceCardProps): React.JSX.Element;
