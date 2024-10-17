import './Home.scss';
import Banner from '../components/Banner/Banner';
import Gallery from '../components/Gallery/Gallery';

function Home() {
  return (
    <section className="home">
      <Banner/>
      <Gallery/>
    </section>
  );
}

export default Home;