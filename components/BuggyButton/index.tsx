'use client';

import React from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    throw new Error('Oh no! Something went wrong.');
  }

  return <button onClick={() => setClicked(true)}>Trigger Error</button>;
}
