import { ComponentProps, FC } from 'react';

type Props = { label?: string } & ComponentProps<'select'>;

const Select: FC<Props> = ({ label, className, children, ...props }) => {
  return (
    <div className={`flex flex-nowrap items-center ${className} relative w-full max-w-200`}>
      <select
        style={{}}
        {...props}
        className="w-full rounded border-1 border-solid border-white bg-transparent px-2 py-1 font-openSans text-white outline-none focus:border-2 [&>*]:text-black"
      >
        {children}
      </select>
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

export default Select;
