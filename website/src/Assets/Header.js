import './Header.css'
import { Link } from 'react-router-dom'
import logo from './MintLogoWhiteBG.png'

export default function Header() {
    return (
        <header className="HeaderMain">
            <nav className="navMenu">
                <img src={logo} alt="MINT Logo" className="logoimg"/>
                <div className="Nav">
                    <Link to='/'>Homepage</Link>
                    <Link to='/AboutMint'>About MINT</Link>
                    <Link to='/Projects'>Our Projects</Link>
                    <Link to='/GetInvolved'>Get Involved</Link>
                </div>
            </nav>
        </header>
    )
}