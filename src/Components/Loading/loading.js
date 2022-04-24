import './loading.scss'
import logo_1 from "../Images/logo.JPG"
import logo_2 from "../Images/logo2.JPG"
import logo_3 from "../Images/logo3.JPG"

const Loading = () => {
    return(
        <div className='loading-container'>
            <div className='loading-content'>
                <div className='content'>
                    <div className='container'>
                        <div className='loader'>
                            <p className='loader--dot'></p>
                            <p className='loader--dot'></p>
                            <p className='loader--dot'></p>
                            <p className='loader--dot'></p>
                            <p className='loader--dot'></p>
                            <p className='loader--dot'></p>
                            <p className='loader--text'></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loading;