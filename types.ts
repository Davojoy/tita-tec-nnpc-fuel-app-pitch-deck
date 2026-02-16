import React from 'react';

export interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

export interface SlideData {
  id: number;
  component: React.FC<SlideProps>;
  title: string;
}