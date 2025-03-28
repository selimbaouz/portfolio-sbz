import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}
const Container = ({children}: ContainerProps) => {
  return (
    <div className={cn("py-6 px-5", "md:px-10", "lg:px-20")}>
      {children}
    </div>
  );
};

export default Container;