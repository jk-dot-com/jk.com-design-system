import React from 'react';

/**
 * An offering tile — mono-glyph icon, title, description, mono tech tags. Built on Card.
 * @startingPoint section="Core" subtitle="Service offering tile with icon + tech tags" viewport="700x260"
 */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono-glyph icon shown top-left (see ICONOGRAPHY in readme.md — emoji require sign-off via issue/PR). */
  icon?: React.ReactNode;
  title: string;
  description: string;
  /** Mono tech tags pinned to the bottom of the card. */
  tags?: string[];
}

export function ServiceCard(props: ServiceCardProps): React.JSX.Element;
