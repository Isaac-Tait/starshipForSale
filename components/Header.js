import Image from 'next/image';
import Link from 'next/link';

import starship from '../public/starship.png';

const Header = () => {
  return (
    <div className="grid justify-center md:grid-cols-2">
      <div className="md:w-1/3 pl-2 pt-2 flex flex-row">
        <Image
          alt="starship for sale"
          src={starship}
          width={150}
          height={150}
        />
        <div className="my-auto pl-4">
          <h1 className="text-3xl font-semibold text-center">For Sale</h1>
        </div>
      </div>
      <div className="flex justify-between md:justify-end md:mr-2 md:space-x-4 text-xs md:text-base italic md:font-normal">
        <Link
          href="https://wormwoodsaga.com"
          className="text-red-400 hover:underline hover:text-yellow-600"
        >
          <a target="_blank" rel="noopener noreferrer">
            My Novel
          </a>
        </Link>
        <Link
          href="/about"
          className="text-red-400 hover:underline hover:text-yellow-600"
        >
          <a>About</a>
        </Link>
        <Link
          href="https://github.com/Isaac-Tait/starshipForSale/discussions"
          className="text-red-400 hover:underline hover:text-yellow-600"
        >
          <a target="_blank" rel="noopener noreferrer">
            Get in touch
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
