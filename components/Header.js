import Link from 'next/link';

const Header = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold">Starship For Sale</h1>
      </div>
      <div className="flex justify-end mr-2 space-x-4 text-xs italic">
        <Link
          href="https://community.starshipfor.sale"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:underline hover:text-yellow-600"
        >
          <a>Forum</a>
        </Link>
        <Link
          href="https://starshipfor.sale/about"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-400 hover:underline hover:text-yellow-600"
        >
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
