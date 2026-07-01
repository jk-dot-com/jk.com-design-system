import React from 'react';

export interface StatusReadoutProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** ONLINE (cyan) vs OFFLINE flag. Default true. */
  online?: boolean;
  /** "//"-separated mono segments after the flag, e.g. ['LOCATION: CHARLOTTE, NC', 'STATUS: AVAILABLE']. */
  segments?: string[];
}

/** The signature terminal telemetry chip — pulsing cyan dot, ONLINE flag, "//"-separated mono segments. */
export function StatusReadout(props: StatusReadoutProps): React.JSX.Element;
