import React from 'react';

export const Error: React.FC<{ error: Error }> = ({ error }) => {
  return <div>Error:{error.message}</div>;
};
