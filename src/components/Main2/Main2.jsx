import './Main2.css'

import right_arrow from '../../../public/assets/right_arrow.png'
import main2 from '../../../public/assets/main2.png'
import ellipse from '../../../public/assets/ellipse.png'
import indicator_left from '../../../public/assets/indicator-left.png'
import indicator_right from '../../../public/assets/indicator-right.png'
import section_1 from '../../../public/assets/Section-1.png'
import instruction_perform from '../../../public/assets/instruction_perform.png'
import tips from '../../../public/assets/tips.png'

function Main2(){
    return (
        <div className="main2">
            <div className="header" style={{display: 'flex', position: 'relative', top: '11vh', left: '37vw'}}>
                <div className="header_each" style={{display: 'flex', position: 'relative', top: '2.5vh'}}>
                    <p>Home</p>
                    <img src={right_arrow} alt="" style={{height: '1rem', width: '1rem', position: 'relative', top: '2.5vh'}}/>
                </div>
                <div className="header_each" style={{display: 'flex', position: 'relative', top: '2.5vh'}}>
                    <p>Exercise</p>
                    <img src={right_arrow} alt="" style={{height: '1rem', width: '1rem', position: 'relative', top: '2.5vh'}}/>
                </div>
                <div className="header_each" style={{display: 'flex', position: 'relative', top: '2.5vh'}}>
                    <p>Bicep</p>
                    <img src={right_arrow} alt="" style={{height: '1rem', width: '1rem', position: 'relative', top: '2.5vh'}}/>
                </div>
                <div className="header_each" style={{display: 'flex', position: 'relative', top: '2.5vh'}}>
                    <p>Barbell Bicep Curl</p>
                </div>
            </div>
            <div className="header2">
                <div className='heading' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    Barbell Bicep Curl
                </div>
                <div className="heading-text" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1.2vh'}}>
                    <span>
                        The barbell curl is a classic and effective bicep exercise that targets the muscles in the front of your upper arms,
                        </span><span>specifically the biceps brachii.
                    </span>
                </div>
            </div>
            <div className="image" style={{position: 'relative', top: '-25vh'}}>
                <div className="four" style={{position: 'relative', left: '18vw', top: '45vh'}}>
                    <h3 style={{marginBottom: '0px'}}>Bicep Development</h3>
                    <img src={indicator_left} alt="" />
                    <div className='four-text'
                        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '280px',
                                position: 'relative', top: '-7vh'
                    }}>
                        he barbell bicep curl specifically targets the biceps brachii, contributing to their development and definition
                    </div>
                </div>
                <div className="four" style={{position: 'relative', left: '18vw', top: '50vh'}}>
                    <h3 style={{marginBottom: '0px'}}>Strengthen Building</h3>
                    <img src={indicator_left} alt="" />
                    <div className='four-text'
                        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '280px',
                                position: 'relative', top: '-7vh'
                    }}>
                        The exercise allows for heavy resistance, promoting strength gains in the biceps and surrounding muscle groups
                    </div>
                </div>

                <img src={ellipse} alt="" style={{position: 'relative', left: '38vw', top: '4vh'}}/>
                <img src={main2} alt="" style={{position: 'relative', left: '13.5vw', top: '3.7vh'}}/>

                <div className="four" style={{position: 'relative', left: '59.5vw', top: '-47vh'}}>
                    <h3 style={{marginBottom: '-1vh', position: 'relative', right: '-6.5vw'}}>Increased Muscle Engagement</h3>
                    <img src={indicator_right} alt="" />
                    <div className='four-text'
                        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '280px',
                                position: 'relative', top: '-9vh', right: '-6.5vw'
                    }}>
                        By maintaining strict form and controlling the weight, you ensure that the biceps are doing the majority of the work, leading to better muscle engagement and growth.
                    </div>
                </div>
                <div className="four" style={{position: 'relative', left: '59.5vw', top: '-47vh'}}>
                    <h3 style={{marginBottom: '-1vh', position: 'relative', right: '-6.5vw'}}>Compound Movement</h3>
                    <img src={indicator_right} alt="" />
                    <div className='four-text'
                        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '280px',
                                position: 'relative', top: '-9vh', right: '-6.5vw'
                        }}>
                        While primarily an isolation exercise for the biceps, the barbell curl involves other muscles to a lesser extent, such as the forearms, shoulders, and upper back. This makes it a compound movement that engages multiple muscle groups
                    </div>
                </div>
            </div>
            <div className="last" style={{display: 'flex', flexDirection: 'column'}}>
                <img src={section_1} alt="" style={{position: 'relative', top: '-80vh', left: '-0.9vw', transform: 'scale(0.45)'}}/>
                <div className="last-text" style={{position: 'relative', top: '-88vh', left: '27vw'}}>
                    <h3>Target Area</h3>
                    <p>
                        Biceps brachii and  forearm muscles
                    </p>
                </div>
                <div className="last-text" style={{position: 'relative', top: '-91vh', left: '27vw'}}>
                    <h3>Level for difficulty</h3>
                    <p>
                        Beginner friendly  
                    </p>
                </div>
                <div className="last-text" style={{position: 'relative', top: '-94vh', left: '27vw'}}>
                    <h3>Number of set</h3>
                    <p>
                        3
                    </p>
                </div>
                <div className="last-text" style={{position: 'relative', top: '-98.5vh', left: '27vw'}}>
                    <h3>Duration</h3>
                    <p>
                        20 minutes
                    </p>
                </div>
                <div className="last-text" style={{position: 'relative', top: '-101.5vh', left: '27vw'}}>
                    <h3>Calories burn</h3>
                    <p>
                        150 cal
                    </p>
                </div>
                <div className="last-text" style={{position: 'relative', top: '-104vh', left: '27vw'}}>
                    <h3>Equiment needed</h3>
                    <p>
                        Barbell
                    </p>
                </div>
                <div className="last-text" style={{position: 'relative', top: '-106.5vh', left: '27vw'}}>
                    <h3>Instruction to perform</h3>
                    <img src={instruction_perform} alt="" style={{position: 'relative', top: '4vh'}}/>
                </div>
                <div className="last-text" style={{position: 'relative', top: '-103vh', left: '27vw'}}>
                    <h3>Tips</h3>
                    <img src={tips} alt="" style={{position: 'relative', top: '4vh'}}/>
                </div>
                
            </div>
        </div>
    )
}

export default Main2