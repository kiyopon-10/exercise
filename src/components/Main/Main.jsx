import './Main.css'
import main_image from '../../../public/assets/main_image.png';
import Play from '../../../public/assets/Play.png'


function Main(){
    return (
        <div className="main">
            <img src={main_image} alt=""/>
            <img src={Play} alt="" style={{height: '5rem', width:'5rem', position: 'relative', top: '37vh', right: '36vw', zIndex: '3'}}/>
        </div>
    )
}

export default Main