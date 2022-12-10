import { Link } from "react-router-dom"
import './Post.css';

const Landing = ()=> {
    return (
        <div>
            <div className={'landing'}>
                <div>
                    <img id={'fstpage'} src={'https://mfiles.alphacoders.com/982/982807.jpg'} alt=""></img>
                </div>
                <div className="para">
                    <div><b>Welcome to 10x Academy </b></div>
                    <p>  <Link to={'./post'}> Enter</Link> </p>
                </div>
          </div>
        </div>
    )
}
export default Landing;