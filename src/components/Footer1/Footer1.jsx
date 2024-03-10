import './Footer1.css'
import f1_header1 from '../../../public/assets/f1_header1.png'
import app_store from '../../../public/assets/app_store.png'
import google_play from '../../../public/assets/google_play.png'
import phone1 from '../../../public/assets/phone1.png'
import phone2 from '../../../public/assets/phone2.png'
import f1_sec2 from '../../../public/assets/f1_sec2.png'
import f1_img1 from '../../../public/assets/f1_img1.png'
import f1_img2 from '../../../public/assets/f1_img2.png'
import f1_img3 from '../../../public/assets/f1_img3.png'
import r_arrow from '../../../public/assets/r_arrow.png'
import footer2 from '../../../public/assets/footer2.png'
import button_submit from '../../../public/assets/button-submit.png'

function Footer1(){
    return (
        <div className="footer1">
            <img src={f1_header1} alt="" style={{width: '100vw'}}/>
            <div className="images" style={{display: 'flex', position: 'relative', top: '-24.5vh', left: '3.5vw'}}>
                <button style={{width: '11vw', border: 'none', backgroundColor: 'transparent', position: 'relative', left: '-1vw', cursor: 'pointer'}}>
                    <img src={app_store} alt="" style={{height: '7vh', width: '11vw', marginInline: '2.5vw'}}/>
                </button>
                <button style={{width: '12vw', border: 'none', backgroundColor: 'transparent', position: 'relative', left: '5vw', cursor: 'pointer'}}>
                    <img src={google_play} alt="" style={{height: '7vh', width: '11vw'}}/>
                </button>
            </div>
            <img src={phone1} alt="" style={{position: 'relative', top: '-64vh', left: '60vw', transform: 'scale(1.2)'}}/>
            <img src={phone2} alt="" style={{position: 'relative', top: '-57vh', left: '63vw', transform: 'scale(1.2)'}}/>
            <img src={f1_sec2} alt="" style={{position: 'relative', left: '-7.5vw', top: '-33vh'}}/>
            <div className="header2" style={{position: 'relative', top: '-30vh', left: '35vw'}}>
                Discover the other exercise at FitSnap
            </div>
            <div className="last" style={{display: 'flex'}}>
                <div className="each">
                    <img src={f1_img1} alt="" style={{transform: 'scale(1.3)'}}/>
                    <h3>Chest press</h3>
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
                    </p>
                    <a href="">
                        Read More
                        <img src={r_arrow} alt="" style={{position: 'relative', top: '0.3vh', left: '0.4vw'}}/>
                    </a>
                </div>
                <div className="each two" style={{position: 'relative', left: '22vw'}}>
                    <img src={f1_img2} alt="" style={{transform: 'scale(1.3)'}}/>
                    <h3 style={{position: 'relative', left: '2vw', top: '-1vh'}}>Straight leg deadlift</h3>
                    <p style={{position: 'relative', left: '4vw'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
                    </p>
                    <a href="" style={{position: 'relative', left: '2vw'}}>
                        Read More
                        <img src={r_arrow} alt="" style={{position: 'relative', top: '0.3vh', left: '0.4vw'}}/>
                    </a>
                    
                </div>
                <div className="each three" style={{position: 'relative', left: '34vw'}}>
                    <img src={f1_img3} alt="" style={{transform: 'scale(1.3)'}}/>
                    <h3>Crunches</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum
                    </p>
                    <a href="">
                        Read More
                        <img src={r_arrow} alt="" style={{position: 'relative', top: '0.3vh', left: '0.4vw'}}/>
                    </a>
                </div>
            </div>
            <img src={footer2} alt="" style={{width: '100vw'}}/>
            <form action="">
                <input type="text" style ={{height: '8vh', width: '23.8vw', position: 'relative', left: '67.5vw', top: '-32.4vh'}} 
                    placeholder='Your email address'
                />
            </form>
            <button style={{border: 'none', position: 'relative', left: '88vw', top: '-39vh', backgroundColor: 'transparent', cursor: 'pointer'}}>
                <img src={button_submit} alt="" />
            </button>
        </div>
    )
}

export default Footer1