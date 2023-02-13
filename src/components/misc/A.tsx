import { FC, useState, useEffect, ComponentProps } from 'react';

const A: FC<ComponentProps<'a'>> = ({ className, ...props }) => {
  return <a className={`cursor-pointer text-primary-light underline ${className}`} {...props} />;
};

export default A;
