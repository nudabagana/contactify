import useAxios from 'axios-hooks';
import { FC } from 'react';
import { Contact } from '../../types/Conctacts';
import { makeFullName } from '../../utils/nameUtils';
import A from '../misc/A';
import ErrorBox from '../misc/ErrorBox';
import userImg from './../../assets/images/user.png';

type Props = { contactId: string };

const ContactPreview: FC<Props> = ({ contactId }) => {
  const [{ data, error }] = useAxios<Contact>(`/contacts/${contactId}`);
  const { name, surname, city, email, phone } = data ?? {};
  const fullName = name && surname ? makeFullName({ name, surname }): '';
  return (
    <div className="flex basis-1/4 flex-col justify-center overflow-clip rounded bg-white pb-4 shadow-lg">
      <img src={userImg} alt="user-image" />
      <div className="flex flex-col items-center justify-center text-xs ">
        {error ? (
          <ErrorBox />
        ) : (
          <>
            <h2 className="py-4 text-center text-xl">{fullName}</h2>
            <table className="text-blur [&>*>*>*:first-child]:text-right [&>*>*>*:last-child]:pl-6">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{fullName}</td>
                </tr>
                <tr>
                  <td>City:</td>
                  <td>{city}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <A href={`mailto:${email}`}>{email}</A>
                  </td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>{phone}</td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactPreview;
