import Footer from '../components/Footer';
import Header from '../components/Header';

const Index = () => (
  <div className="heropattern-wiggle-neutral-100 h-screen">
    <div>
      <Header />
    </div>
    <div className="max-w-6xl mx-auto bg-slate-200 rounded-lg px-2">
      <p>
        Welcome to a fan site for the book series: Starship For Sale by{' '}
        <span className="font-semibold italic">M.R. Forbes</span>
      </p>
    </div>
    <div className="fixed bottom-0 w-full">
      <Footer />
    </div>
  </div>
);

export default Index;
