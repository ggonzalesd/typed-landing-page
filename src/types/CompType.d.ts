import React from 'react';

export interface ClassNameProp {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface CompType extends ClassNameProp {
  children?: React.ReactNode;
}
