import { FC } from 'react';

const Header: FC = () => {
  return (
    <div
      className="flex h-12 cursor-pointer items-center justify-start bg-primary-dark px-6 text-2xl font-bold uppercase tracking-wider text-white"
      onClick={() => (window.location.href = '/')}
    >
      Contactify
    </div>
  );
};

export default Header;
