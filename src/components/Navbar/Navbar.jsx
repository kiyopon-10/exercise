import './Navbar.css'

import logo from '../../../public/assets/logo.png';
import login_icon from '../../../public/assets/login_icon.png'

function Navbar(){
    return(
        <div className="navbar-main">
            <img src={logo} alt="" style={{position: 'relative', top: '-8vh'}}/>
            <div className="right" style={{display: 'flex', position: 'relative', top: '-23vh', right: '-44vw'}}>
                <p>HOME</p>
                <p>WORKOUT PLAN</p>
                <p>AI TRACKER</p>
                <p>EXERCISE</p>
                <p>ABOUT</p>
                <button className='button'
                    style={{width: '5.5vw', height: '5vh', border: 'solid 1px #2E2E44',borderRadius: '6px',
                    position: 'relative', top: '0.5vh', right: '-2vw',backgroundColor: '#2E2E44', display: 'flex', alignItems: 'center'
                }}>
                    <img src={login_icon} alt="" style={{}}/>
                    <p style={{position: 'relative', right: '1.6vw'}}>LOGIN</p>
                </button>
            </div>
        </div>
    )
}

export default Navbar