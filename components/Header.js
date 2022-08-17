import Image from 'next/image';
import Link from 'next/link';
import starship from '../public/starship.png';
const Header = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="w-1/3 pl-2 pt-2 flex flex-row">
        <Image
          alt="starship for sale"
          src={starship}
          width={150}
          height={150}
        />
        <div className='my-auto pl-4'>
          <h1 className="text-3xl font-semibold text-center">For Sale</h1>
        </div>
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
