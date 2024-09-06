import HeaderLogo from "./headerLogo/HeaderLogo";
import profile from "../../assets/images/logo/profile.jpg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { countNotification, getUpdateProfile } from "../../api/login/Login";
import { baseUrlImage } from "../../baseUrl";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../slice/auth";
import { removeItemFromLocalStorage } from "../../utils/localStorage";
import Offcanvas from 'react-bootstrap/Offcanvas';
import NotificationPage from "../../pages/notification";
import { Spinner } from "react-bootstrap";
function Header({ showAsideBar, toggle, setToggle }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [data, setData] = useState(null);
  // console.log(data?.profile);
  const dispatch = useDispatch();
  const toggleFullscreen = () => {
    const element = document.documentElement;

    if (isFullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  };

  const profileOn = () => {
    setToggle(!toggle);
  };

  const userGetHeading = async () => {
    try {
      const data = await getUpdateProfile();
      setData(data?.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const [dataCount, setDataCount] = useState(null);

  const getCountNotification = async () => {
    try {
      const data = await countNotification();
      setDataCount(data?.data);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    userGetHeading();
    getCountNotification();
  }, []);


  const handleLogOut = () => {
    // removeItemFromLocalStorage("userToken");
    localStorage.clear()
    dispatch(setIsLogin({ isLogin: false }));

  };
  const navigate = useNavigate()
  const changeRoute = (route) => {
    navigate('/notification')
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <HeaderLogo showAsideBar={showAsideBar} />
      <div className="header" id="abc">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <form>
                  <div className="input-group search-area">
                    <span className="input-group-text">
                      <button className="bg-transparent border-0">
                        <svg
                          width={19}
                          height={19}
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="8.78605"
                            cy="8.78605"
                            r="8.23951"
                            stroke="blue"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.5168 14.9447L17.7471 18.1667"
                            stroke="blue"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </span>
                    <input
                      type="search"
                      className="form-control "
                      id="search-inp"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown notification_dropdown">
                  <a
                    className="nav-link "
                    href="javascript:void(0);"
                    data-bs-toggle="dropdown"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.8067 7.62358L20.1842 6.54349C19.6577 5.62957 18.4907 5.31429 17.5755 5.83869V5.83869C17.1399 6.09531 16.6201 6.16812 16.1307 6.04106C15.6413 5.91399 15.2226 5.59749 14.9668 5.16134C14.8023 4.88412 14.7139 4.56836 14.7105 4.24601V4.24601C14.7254 3.72919 14.5304 3.22837 14.17 2.85764C13.8096 2.48691 13.3145 2.27783 12.7975 2.27805H11.5435C11.037 2.27804 10.5513 2.47988 10.194 2.83891C9.83669 3.19795 9.63717 3.68456 9.63961 4.19109V4.19109C9.6246 5.23689 8.77248 6.07678 7.72657 6.07667C7.40421 6.07332 7.08846 5.98491 6.81123 5.82038V5.82038C5.89606 5.29598 4.72911 5.61126 4.20254 6.52519L3.53435 7.62358C3.00841 8.53636 3.3194 9.70258 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2056 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2346C4.41265 17.6798 4.8266 18.0083 5.31619 18.1474C5.80578 18.2866 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9489 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70286 21.3264 8.54346 20.8067 7.63274V7.63274V7.62358Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12.1751"
                        cy="11.889"
                        r="2.63616"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div
                      id="DZ_W_TimeLine02"
                      className="widget-timeline dz-scroll style-1 p-3 height370"
                    >
                      <ul className="timeline">
                        <li>
                          <div className="timeline-badge primary" />
                          <a
                            className="timeline-panel text-muted"
                            href="javascript:void(0);"
                          >
                            <span>10 minutes ago</span>
                            <h6 className="mb-0">
                              Youtube, a video-sharing website, goes live{" "}
                              <strong className="text-primary">$500</strong>.
                            </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge info"></div>
                          <a
                            className="timeline-panel text-muted"
                            href="javascript:void(0);"
                          >
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                              New order placed{" "}
                              <strong className="text-info">#XF-2356.</strong>
                            </h6>
                            <p className="mb-0">
                              Quisque a consequat ante Sit amet magna at
                              volutapt...
                            </p>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge danger"></div>
                          <a
                            className="timeline-panel text-muted"
                            href="javascript:void(0);"
                          >
                            <span>30 minutes ago</span>
                            <h6 className="mb-0">
                              john just buy your product{" "}
                              <strong className="text-warning">
                                Sell $250
                              </strong>
                            </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge success"></div>
                          <a
                            className="timeline-panel text-muted"
                            href="javascript:void(0);"
                          >
                            <span>15 minutes ago</span>
                            <h6 className="mb-0">
                              StumbleUpon is acquired by eBay.{" "}
                            </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge warning"></div>
                          <a
                            className="timeline-panel text-muted"
                            href="javascript:void(0);"
                          >
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                              Mashable, a news website and blog, goes live.
                            </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge dark"></div>
                          <a
                            className="timeline-panel text-muted"
                            href="javascript:void(0);"
                          >
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">
                              Mashable, a news website and blog, goes live.
                            </h6>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown notification_dropdown" onClick={handleShow}>
                  <a
                    className="nav-link d-flex"
                    href="javascript:void(0);"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    {/* <div className="text-primary border">{dataCount?.count}</div> */}
                    {/* <Spinner animation="grow" size="sm" aria-hidden="true" role="status">
                      <span className="visually-hidden">0</span>
                      <span className="visually-visible z-10">
                        {dataCount?.count}
                      </span>
                    </Spinner> */}
                    <button class="notification-button" aria-label="Кнопка">{dataCount?.count}</button>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div
                      id="DZ_W_Notification1"
                      className="widget-media dz-scroll p-3"
                      style={{ height: 380 }}
                    >
                      <ul className="timeline">
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2">
                              <img
                                alt="image"
                                width={50}
                                src="images/avatar/1.jpg"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Dr sultads Send you Photo
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-info">KG</div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Resport created successfully
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-success">
                              <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Reminder : Treatment Time!
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2">
                              <img
                                alt="image"
                                width={50}
                                src="images/avatar/1.jpg"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Dr sultads Send you Photo
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-danger">KG</div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Resport created successfully
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-primary">
                              <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Reminder : Treatment Time!
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2">
                              <img
                                alt="image"
                                width={50}
                                src="images/avatar/1.jpg"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Dr sultads Send you Photo
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-info">KG</div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Resport created successfully
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-success">
                              <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Reminder : Treatment Time!
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2">
                              <img
                                alt="image"
                                width={50}
                                src="images/avatar/1.jpg"
                              />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Dr sultads Send you Photo
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-danger">KG</div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Resport created successfully
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media me-2 media-primary">
                              <i className="fa fa-home" />
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">
                                Reminder : Treatment Time!
                              </h6>
                              <small className="d-block">
                                29 July 2020 - 02:26 PM
                              </small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <a className="all-notification" href="javascript:void(0);">
                      See all notifications <i className="ti-arrow-end" />
                    </a>
                  </div>
                </li>


                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      <h2>Notification</h2>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <NotificationPage />
                  </Offcanvas.Body>
                </Offcanvas>



                <li className="nav-item dropdown notification_dropdown">
                  <a className="nav-link bell-link" href="javascript:void(0);">
                    <svg
                      width={20}
                      height={22}
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.9026 6.85114L12.4593 10.4642C11.6198 11.1302 10.4387 11.1302 9.59922 10.4642L5.11844 6.85114"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item dropdown notification_dropdown">
                  <a
                    className="nav-link bell dz-fullscreen"
                    href="#"
                    onClick={toggleFullscreen}
                  >
                    <svg
                      id="icon-full"
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      stroke="currentColor"
                      strokeWidth={2}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <path
                        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                        style={{
                          strokeDasharray: "37, 57",
                          strokeDashoffset: 0,
                        }}
                      />
                    </svg>
                    <svg
                      id="icon-minimize"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="A098AE"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-minimize"
                    >
                      <path
                        d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                        style={{
                          strokeDasharray: "37, 57",
                          strokeDashoffset: 0,
                        }}
                      />
                    </svg>
                  </a>
                </li>
                <li className="nav-item ps-3">
                  <div className="dropdown header-profile2">
                    <Link
                      className="nav-link"
                      to="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={profileOn}
                    >
                      <div className="header-info2 d-flex align-items-center">
                        <div className="header-media">
                          {data?.profile ? (
                            <img
                              src={`${baseUrlImage}${data?.profile}`}
                              alt="profile"

                            />
                          ) : (
                            <img src={profile} alt="profile" />
                          )}
                        </div>
                        <div className="header-info">
                          <h6 className="text-light">{data?.name}</h6>
                          <p>{data?.email}</p>
                        </div>
                      </div>
                    </Link>
                    {toggle ? (
                      <div
                        className="dropdown-menu dropdown-menu-end dropdown-menu-2 cusDIv"
                        style={{}}
                      >

                        <div className="card border-0 mb-0">
                          <div className="card-header py-2">
                            <div className="products">
                              {data?.profile ? (
                                <img
                                  src={`${baseUrlImage}${data?.profile}`}
                                  alt="profile"
                                  style={{
                                    width: "55px",
                                    height: "55px",
                                    borderRadius: "100%"
                                  }}
                                />
                              ) : (
                                <img src={profile} alt="profile" />
                              )}
                              <div>
                                <h6 className="">{data?.name}</h6>
                                <p>{data?.email}</p>
                              </div>
                            </div>
                          </div>
                          <div className="card-body px-0 py-2" onClick={() => setToggle(!toggle)}>
                            <Link
                              to="profile"
                              className="dropdown-item ai-icon "
                            >
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.9848 15.3462C8.11714 15.3462 4.81429 15.931 4.81429 18.2729C4.81429 20.6148 8.09619 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9848 15.3462Z"
                                  stroke="var(--primary)"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38857 4.8716 7.38857 7.40969C7.38 9.93922 9.42381 11.9973 11.9524 12.0059H11.9848Z"
                                  stroke="var(--primary)"
                                  strokeWidth="1.42857"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="ms-2">Profile </span>
                            </Link>

                          </div>
                          <div className="card-body px-0 py-2" onClick={() => setToggle(!toggle)}>
                            <Link
                              to="staff-kyc_details"
                              className="dropdown-item ai-icon "
                            >
                              <svg
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.9848 15.3462C8.11714 15.3462 4.81429 15.931 4.81429 18.2729C4.81429 20.6148 8.09619 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9848 15.3462Z"
                                  stroke="var(--primary)"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38857 4.8716 7.38857 7.40969C7.38 9.93922 9.42381 11.9973 11.9524 12.0059H11.9848Z"
                                  stroke="var(--primary)"
                                  strokeWidth="1.42857"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <span className="ms-2">Staff KYC </span>
                            </Link>

                          </div>
                          <div className="card-footer px-0 py-2">

                            <a
                              href="#"
                              className="dropdown-item ai-icon"
                              onClick={handleLogOut}
                            >
                              <svg
                                className="profle-logout"
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#ff7979"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" />
                                <line x1={21} y1={12} x2={9} y2={12} />
                              </svg>
                              <span className="ms-2 text-danger">Logout </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </li>
              </ul>
            </div>

          </nav>
        </div>
      </div>
    </>
  );
}
export default Header;
