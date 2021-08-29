import React, { FC } from 'react';

interface Props {
  onClick?(event: any): void;
}

export const Button: FC<Props> = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);
