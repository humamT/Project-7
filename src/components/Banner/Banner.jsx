import './Banner.scss';
import Banner_img from '../../assets/images/Banner.svg'
import Banner_overlay from '../../assets/images/fond-noir-banner.png'

function Banner() {
    return (
      <section className="banner">
        <img src={Banner_img} alt="Banner background" />

        <h1>Chez vous, partout et ailleurs</h1>
      </section>
    );
  }

  export default Banner;