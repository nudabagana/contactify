import { ComponentProps, FC } from 'react';

type Props = { label?: string } & ComponentProps<'input'>;

const Input: FC<Props> = ({ label, className, children, ...props }) => {
  return (
    <div className={`flex flex-nowrap items-center ${className} relative w-full max-w-200`}>
      <input
        {...props}
        className="w-full rounded border-1 border-solid border-white bg-transparent px-2 py-1 font-openSans text-white outline-none focus:border-2"
      >
        {children}
      </input>
      {label && (
        <label
          htmlFor={props.id}
          className="absolute -top-2 left-2 bg-primary px-1 text-xs text-white"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
