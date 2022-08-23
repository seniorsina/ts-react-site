import  LogoImg from '../../src/asset/Logo/zoomit_logo_h.svg'
import SearchBox from './SearchBox';
const NavBar = () =>
{
  return(
  <div className="NavBar">
    <img className='NavLogo' src={LogoImg} alt="logo " />
    <a href="/">خانه </a>
    <a href="/about">درباره ما</a>
    <SearchBox />
  </div>
)
}

export default NavBar;