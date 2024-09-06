import { Link } from 'react-router-dom'
// import logo from '../../../assets/images/logo/logo.png'
import logo from '../../../assets/logo/logo.svg'
function HeaderLogo({showAsideBar}) {

    return (
        <>
            <div className="nav-header">
                <Link to="/" className="brand-logo justify-content-center">
                    {/* <img src={logo} alt="" style={{ width: '50%' }} /> */}
                    <img src={logo} alt="" style={{ width: '68%' }} />
                </Link>
                <div className="nav-control" onClick={showAsideBar}>
                    <div className="hamburger">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderLogo