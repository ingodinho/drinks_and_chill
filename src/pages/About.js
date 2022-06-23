import './About.scss'

const About = () => {
    return (
        <div className="about_container">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus rem nemo sapiente molestias maxime id voluptatum, autem placeat labore explicabo!</p>

            <div className="about_images_container">
                <div className="about_flex_wrapper">
                    <div className="about_image_ingo about_image"></div>
                    <p className="about_image_headline">text</p>
                </div>
                <div className="about_flex_wrapper">
                    <div className="about_image_kadi about_image"></div>
                    <p className="about_image_headline">text</p>
                </div>
                <div className="about_flex_wrapper">
                    <div className="about_image_cipi about_image"></div>
                    <p className="about_image_headline">text</p>
                </div>
            </div>
        </div>
    );
}

export default About;
