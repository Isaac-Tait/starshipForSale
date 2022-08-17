import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => (
  <div className="heropattern-wiggle-neutral-100 h-screen">
    <div>
      <Header />
    </div>
    <div className="max-w-6xl mx-auto bg-slate-200 rounded-xl">
      <p className="pl-1">To be continued...</p>
    </div>
    <div className="fixed bottom-0 w-full">
      <Footer />
    </div>
  </div>
);

export default About;
