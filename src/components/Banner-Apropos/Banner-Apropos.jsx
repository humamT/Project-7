import './Banner-Apropos.scss'
import Banner_Apropos_img from '../../assets/images/image-source-2.svg'

function Banner_Apropos() {
    return (
      <section className="banner_apropos">
        <img src={Banner_Apropos_img} alt="Banner background" />
      </section>
    );
  }

  export default Banner_Apropos;