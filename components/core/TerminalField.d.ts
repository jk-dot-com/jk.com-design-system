import React from 'react';

export interface TerminalFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  /** Mono uppercase label rendered above the field. */
  label?: string;
  /** Show a red required asterisk on the label. */
  required?: boolean;
  /** Render a resizable textarea instead of a single-line input. */
  multiline?: boolean;
  /** Error message; also turns the field border red. */
  error?: string;
}

/** A monospace input framed as a terminal line with a cyan ">" prompt; border lights up on focus. */
export function TerminalField(props: TerminalFieldProps): React.JSX.Element;
