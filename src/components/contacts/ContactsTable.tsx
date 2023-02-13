import { FC, useState } from 'react';
import { Contact } from '../../types/Conctacts';
import { makeFullName } from '../../utils/nameUtils';
import Table, { Cell, HCell } from '../misc/Table';
import grayEye from './../../assets/images/eye-gray-icon.svg';
import eye from './../../assets/images/eye-icon.svg';
import arrowUp from './../../assets/images/arrow-up-icon.svg';
import arrowDown from './../../assets/images/arrow-down-icon.svg';
import { Filters } from './Contacts';
import CheckboxDropdown from '../misc/CheckboxDropdown';
import { useStateWithLocalStorage } from '@nudabagana/useful-hooks';

const COL_KEY = 'filter-by-column-key';
const NAME_KEY = 'name';
const CITY_KEY = 'city';
const ICON_KEY = 'icon';
const EMAIL_KEY = 'email';
const PHONE_KEY = 'phone';
const HIDABLE_COLS = [NAME_KEY, CITY_KEY, EMAIL_KEY, PHONE_KEY];

const HEADER_CELLS: HCell[] = [
  { key: CITY_KEY, node: 'City' },
  { key: ICON_KEY, node: <img src={eye} alt="eye" /> },
  { key: EMAIL_KEY, node: 'Email' },
  { key: PHONE_KEY, node: 'Phone', ta: 'right' },
];

type Props = {
  filters: Filters;
  loading: boolean;
  error: boolean;
  contacts: Contact[];
  setSelectedContactId: React.Dispatch<React.SetStateAction<string>>;
};

const ContactsTable: FC<Props> = ({ contacts, filters, setSelectedContactId }) => {
  const [sortName, setSortName] = useState<'asc' | 'desc'>();
  const [cols, setCols] = useStateWithLocalStorage(COL_KEY, HIDABLE_COLS);
  const filteredContacts = contacts.filter(filterFunc(filters));
  sortName && filteredContacts.sort(sortName === 'asc' ? sortAsc : sortDesc);

  const toggleSortName = () => {
    setSortName(val => (!val ? 'asc' : val === 'asc' ? 'desc' : undefined));
  };

  const headerCells = [
    {
      key: NAME_KEY,
      node: (
        <div className="flex">
          Name {sortName && <img src={sortName === 'desc' ? arrowUp : arrowDown} alt="arrow" />}
        </div>
      ),
      onClick: toggleSortName,
    },
    ...HEADER_CELLS,
    {
      key: 'button',
      node: (
        <CheckboxDropdown
          options={[
            { value: NAME_KEY, text: 'Name' },
            { value: CITY_KEY, text: 'City' },
            { value: EMAIL_KEY, text: 'Email' },
            { value: PHONE_KEY, text: 'Phone' },
          ]}
          defaultSelection={cols}
          onChange={val => setCols(val)}
        />
      ),
      noPad: true,
      w: '48px',
    },
  ];

  return (
    <div className="basis-3/4 overflow-clip overflow-visible rounded bg-white shadow-lg">
      <Table
        headerCells={headerCells.filter(
          ({ key }) => !HIDABLE_COLS.includes(key) || cols.includes(key),
        )}
        tableRows={filteredContacts.map(({ name, surname, city, isActive, email, phone, id }) => ({
          key: id,
          onClick: () => setSelectedContactId(id),
          cells: (
            [
              { key: NAME_KEY, node: makeFullName({ name, surname }) },
              { key: CITY_KEY, node: city },
              { key: ICON_KEY, node: isActive ? <img src={grayEye} alt="eye" /> : <></> },
              { key: EMAIL_KEY, node: email },
              { key: PHONE_KEY, node: phone, ta: 'right' },
            ] as Cell[]
          ).filter(({ key }) => !HIDABLE_COLS.includes(key) || cols.includes(key)),
        }))}
      />
    </div>
  );
};

export default ContactsTable;

const filterFunc =
  (filters: Filters) =>
  ({ isActive, name, surname, city }: Contact) =>
    (!filters.showActive || (filters.showActive && isActive)) &&
    (!filters.city || filters.city === city) &&
    (!filters.name || makeFullName({ name, surname }).includes(filters.name));

const sortAsc = (a: Contact, b: Contact) => makeFullName(a).localeCompare(makeFullName(b));
const sortDesc = (a: Contact, b: Contact) => makeFullName(b).localeCompare(makeFullName(a));
