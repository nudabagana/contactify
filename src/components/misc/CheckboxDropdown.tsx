import { FC, useState, useEffect } from 'react';
import burgerBlueUrl from './../../assets/images/burger-blue-icon.svg';
import burgerUrl from './../../assets/images/burger-icon.svg';
import { useCloseOnClick } from '@nudabagana/useful-hooks';
import Checkbox from './Checkbox';

type Props = {
  options: { value: string; text?: string }[];
  defaultSelection?: string[];
  onChange?(values: string[]): void;
};

const CheckboxDropdown: FC<Props> = ({ onChange, options, defaultSelection }) => {
  const [selected, setSelected] = useState(defaultSelection ?? []);
  const [open, onClick] = useCloseOnClick();
  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  const onCheckboxClick = (val: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.target.checked) {
      setSelected(s => [...s, val]);
    } else {
      setSelected(s => [...s.filter(str => str !== val)]);
    }
  };

  return (
    <div className="relative">
      <img
        src={open ? burgerBlueUrl : burgerUrl}
        alt="burger"
        onClick={onClick}
        className={`${open ? 'bg-white' : ''} p-3`}
      />
      {open && (
        <div className="absolute right-0 z-10 min-w-150 bg-white shadow-lg">
          {options.map(({ value, text }) => (
            <Checkbox
              key={value}
              id={value}
              className="border-b-1 p-3 [&>label]:text-black"
              onChange={onCheckboxClick(value)}
              checked={selected.includes(value)}
            >
              {text ?? value}
            </Checkbox>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckboxDropdown;
