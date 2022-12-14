import Comments from '../components/Comments';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => (
  <div className="heropattern-wiggle-neutral-100 h-screen overflow-y-scroll">
    <div>
      <Header />
    </div>
    <div className="max-w-6xl md:mx-auto bg-slate-200 rounded-lg px-2 mt-4 mx-1 ">
      <h1 className="uppercase font-bold">Starship for sale!!!!</h1>

      <div className="text-white">
        <p className="uppercase">for sale:</p>
        <p className="italic">
          One moderately used,{' '}
          <span className="font-semibold">fully-functional </span>starship.
          Originally designed for use in the film{' '}
          <span className="font-semibold">Space Aces Need Love Too</span>, this
          starship is both one of a kind and an important piece of movie-making
          lore...
        </p>
      </div>
    </div>

    <div className="text-center pt-8">
      <p className="pb-8">
        Welcome to a fan site for the book series: Starship For Sale by{' '}
        <span className="font-semibold italic">M.R. Forbes</span>
      </p>
    </div>

    <hr />

    <div className="w-4/5 mx-auto py-10">
      <Comments />
    </div>

    <div className="fixed bottom-0 w-full">
      <Footer />
    </div>
  </div>
);

export default Index;
