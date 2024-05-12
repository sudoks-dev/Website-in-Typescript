// import meter1 from "../assets/img/meter1.png";
// import meter2 from "../assets/img/meter2.png";
// import meter3 from "../assets/img/meter3.png";
// about
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {

  const colorSharp =  require("../assets/img/color-sharp.png")

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
