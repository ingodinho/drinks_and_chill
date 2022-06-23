import './Footer.scss';
import { FacebookLogo, TwitterLogo, InstagramLogo } from 'phosphor-react';

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="h2Footer">Enjoyment has various facets ...</h2>
            <p className='pFooter'>...but not without the right moderation!</p>
            <p className='pFooter'>Cocktails can be enjoyed with all the senses. The Enjoyment of Cocktails also includes the looks, the color and the many aromas, which all awake naturally new associations and subliminally also influence the taste.</p>
            <div className="social_media_icons">
                <FacebookLogo size={48} weight="fill" />
                <TwitterLogo size={48} weight="fill" />
                <InstagramLogo size={48} weight="fill" />
            </div>
        </div>
    );
}

export default Footer;