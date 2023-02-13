import { FC, useState } from 'react';
import ContactsFilter from './ContactsFilter';
import useAxios from 'axios-hooks';
import { Contact } from '../../types/Conctacts';
import ContactsTable from './ContactsTable';
import ContactPreview from './ContactPreview';

export type Filters = {
  name: string;
  city: string;
  showActive: boolean;
};

const Contacts: FC = () => {
  const [{ data, loading, error }] = useAxios<Contact[]>('/contacts');
  const cities = [...new Set(data?.map(({ city }) => city))];
  const [filters, setFilters] = useState<Filters>({ name: '', city: '', showActive: false });
  const [selectedContactId, setSelectedContactId] = useState<string>('');

  return (
    <>
      <ContactsFilter cities={cities} setFilters={setFilters} />
      <div className="ml-6 mr-20">
        <div className="relative w-full">
          <div className="absolute -top-5 flex w-full gap-3 items-start">
            <ContactsTable
              filters={filters}
              loading={loading}
              error={!!error}
              contacts={data ?? []}
              setSelectedContactId={setSelectedContactId}
            />
            {selectedContactId && <ContactPreview contactId={selectedContactId} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
