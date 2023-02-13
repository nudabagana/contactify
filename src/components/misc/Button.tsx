import { ComponentProps, FC } from 'react';

const Button: FC<ComponentProps<'button'>> = ({ className, ...props }) => {
  return (
    <button
      className={`rounded bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider outline-none hover:bg-accent-dark focus:bg-accent-dark ${className}`}
      {...props}
    />
  );
};

export default Button;
