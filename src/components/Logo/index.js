import './index.scss';
import bannerLogo from '../../assets/images/banner-logo-two.jpg'

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className='banner-logo' src={bannerLogo} alt='banner-logo' />
        </div>
    )
}
export default Logo;
