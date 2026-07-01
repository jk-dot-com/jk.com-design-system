import React from 'react';

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/** The "// LABEL" divider opening each section: cyan tick + mono uppercase text + fading hairline rule. */
export function SectionLabel(props: SectionLabelProps): React.JSX.Element;
