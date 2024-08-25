import React from 'react';

export interface ClassNameProp {
  className?: string;
}

export interface CompType extends ClassNameProp {
  children?: React.ReactNode;
}
