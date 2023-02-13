import { FC, useState } from 'react';
import Button from '../misc/Button';
import Checkbox from '../misc/Checkbox';
import Input from '../misc/Input';
import Select from '../misc/Select';
import imgUrl from './../../assets/images/eye-icon.svg';
import { Filters } from './Contacts';

type Props = {
  cities?: string[];
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

const ContactsFilter: FC<Props> = ({ cities, setFilters }) => {
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [showActive, setshowActive] = useState(false);

  const onClick = () => {
    setFilters({ city, name, showActive });
  };

  return (
    <div className="flex flex-wrap items-center justify-start gap-4 bg-primary px-6 pt-8 pb-12">
      <Input id="name" value={name} onChange={e => setName(e.target.value)} label="Name" />
      <Select id="city" value={city} onChange={e => setCity(e.target.value)} label="City">
        <option value="">All</option>
        {cities?.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </Select>
      <Checkbox id="active" checked={showActive} onChange={e => setshowActive(e.target.checked)}>
        Show active <img src={imgUrl} alt="eye" />
      </Checkbox>
      <Button onClick={onClick} className="ml-6">
        Filter
      </Button>
    </div>
  );
};

export default ContactsFilter;
