import { ComponentProps, FC } from 'react';

const Checkbox: FC<ComponentProps<'input'>> = ({ className, children, ...props }) => {
  return (
    <div className={`flex flex-nowrap items-center gap-2 text-xs text-white ${className}`}>
      <input
        type="checkbox"
        {...props}
        className="relative h-5 w-5 appearance-none rounded border-2 border-accent bg-white outline-none outline-2 before:transform after:absolute after:right-2 after:bottom-1 after:left-1 after:block after:h-3 after:w-2 after:rotate-45 after:border-2  after:border-t-0 after:border-l-0 after:border-white after:content-[''] checked:bg-accent after:checked:border-primary hover:outline-accent focus:outline-accent"
      />
      <label htmlFor={props.id} className={`flex items-center gap-2`}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
