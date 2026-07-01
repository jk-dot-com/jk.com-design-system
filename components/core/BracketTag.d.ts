import React from 'react';

export interface BracketTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/** A [BRACKETED] mono tag whose bracket glyphs glow brighter on hover — hero role tokens & portfolio tech tags. */
export function BracketTag(props: BracketTagProps): React.JSX.Element;
