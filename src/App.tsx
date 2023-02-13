import Contacts from './components/contacts/Contacts';
import Header from './components/Header';
import { initAxios } from './utils/axiosUtils';

initAxios();

const App = () => {
  return (
    <>
      <Header />
      <Contacts />
    </>
  );
};

export default App;
