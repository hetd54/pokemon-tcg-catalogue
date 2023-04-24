import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className="relative flex w-full items-center justify-between bg-neutral-50 py-2 text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 dark:shadow-black/5 lg:flex-wrap lg:justify-start">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;