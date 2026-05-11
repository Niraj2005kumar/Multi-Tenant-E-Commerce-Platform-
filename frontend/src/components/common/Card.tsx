import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

function Card({ children, className }: Props) {
  return <div className={`glass-card ${className ?? ''}`}>{children}</div>;
}

export default Card;
