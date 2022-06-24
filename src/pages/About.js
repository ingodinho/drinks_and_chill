import './About.scss';

const About = () => {
	return (
		<div className='about_container'>
			<h2>About</h2>
			<p>
				Long ago, the three programming languages HTML/CSS/JS lived
				together in harmony. Then everything changed when React.js
				attacked. Only these three Nerds, master of all important
				programming languages, could stop it.
			</p>

			<div className='about_images_container'>
				<div className='about_flex_wrapper'>
					<div className='about_image_ingo about_image'></div>
					<p className='about_image_headline'>Professor X-code</p>
				</div>
				<div className='about_flex_wrapper'>
					<div className='about_image_kadi about_image'></div>
					<p className='about_image_headline'>SCSS Power-Ranger</p>
				</div>
				<div className='about_flex_wrapper'>
					<div className='about_image_cipi about_image'></div>
					<p className='about_image_headline'>The Dark (K)night-Coder</p>
				</div>
			</div>
		</div>
	);
};

export default About;
