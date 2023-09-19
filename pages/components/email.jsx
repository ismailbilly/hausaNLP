import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url} style={{ padding: '16 32', borderRadius: 2, backgroundColor: 'orange', color: 'white'}}>Click me</Button>
    </Html>
  );
}
