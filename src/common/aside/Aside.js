import { Link, useNavigate, useParams } from "react-router-dom";
import { getN, navigationData } from "./navigationData/NavigationData";
import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { Button, Spinner } from "react-bootstrap";
import { removeItemFromLocalStorage } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../../slice/auth";
import { getLength, getMenusdata } from "../../api/login/Login";
import asidemainmodicon from "../../assets/icons/aside-icon/admin.svg"
let asideMenu = [];
function Aside({ showAsideBar }) {
  const [parentId, setParentId] = useState(null);
  const [childId, setChildId] = useState(null);
  const [countLaenData, setCountLenData] = useState(null);
  const [mainMenus, setMainMenus] = useState();
  const [tokenUpdated, setTokenUpdated] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  console.log(location, "location");

  const menuClicked = (parentId) => {
    setParentId((prev) => (prev === parentId ? null : parentId));
    setChildId(null);
  };
  const subMenuClicked = (e, childId) => {
    setChildId((prev) => (prev === childId ? null : childId));
    e.stopPropagation();
  };

  const handleLogOut = () => {
    removeItemFromLocalStorage("userToken");
    dispatch(setIsLogin({ isLogin: false }));
  };

  useEffect(() => {
    const modifiedPath = location.pathname.replace("/", "");
    asideMenu.forEach((item) => {
      item?.subMenus.map((submenu) => {
        if (submenu.path === modifiedPath) {
          setChildId(submenu.uniqueId);
          setParentId(item.uniqueId);
        }
      });
    });
  }, []);
  const getCountData = async () => {
    try {
      const response = await getLength()
      setCountLenData(response?.data)
    } catch (error) {
      alert(error.message)
    }
  }


  asideMenu = navigationData(countLaenData)

  //  ------------------Navigation Data Apis------------

  const getMensAllData = async () => {
    try {
      const menusRes = await getMenusdata()
      setMainMenus(menusRes?.data)
    } catch (error) {
      alert(error?.message)
    }
  }


  useEffect(() => {
   
    getCountData()
    const modifiedPath = location.pathname.replace("/", "");

    const foundSubMenu = asideMenu
      .flatMap((item) => item?.subMenus || [])
      .find((submenu) => submenu.path === modifiedPath);

    if (foundSubMenu) {
      setChildId(foundSubMenu.uniqueId);
      const parentItem = asideMenu.find((item) =>
        item.subMenus?.includes(foundSubMenu)
      );
      if (parentItem) {
        setParentId(parentItem.uniqueId);
      }
    }
  }, []);
  useEffect(() => {
    getMensAllData()
    setTokenUpdated(location.state)
  }, [])
  return (
    <>
      <div
        className={`deznav ${!showAsideBar ? "showMenu" : "hideMenu"}`}
        id="abcd"
      >
        <div className="deznav-scroll mm-active d-flex flex-column justify-content-between ">
          <ul className="metismenu mm-show flex-1" id="menu">
            <li className={`mm-active hideDarrow  ${!showAsideBar ? "hide" : ""}`}>
              <Link className="" to={"/"} aria-expanded="false">
                <span className="menu-icon">
                  <MdDashboard />
                </span>
                <span className={`nav-text`}> {t("Dashboard")} </span>
              </Link>
            </li>
            {mainMenus ? (<>
              {mainMenus?.map((item, i) => {
                return (
                  <li
                    className={`mm-active ${!showAsideBar ? "hide" : ""} ${parentId === item.uniqueId ? "active" : ""
                      }`}
                    onClick={() => menuClicked(item.uniqueId)}
                    key={i}
                  >
                    <Link className="has-arrow" aria-expanded="false">
                      <div className="">
                        <div className="menu-icon">
                          {/* <span>{item?.icon}</span> */}
                          <span>{"⍟"}</span>
                          {/* <span>
                          <img src={asidemainmodicon} alt="" width={15}/>
                        </span> */}
                        </div>
                        <span className={`nav-text`}>  {t(item?.title)}</span>
                      </div>
                    </Link>

                    <ul
                      aria-expanded="false"
                      className={`mm-collapse left ${item.uniqueId === parentId ? "mm-show" : ""
                        }`}
                    >
                      {item?.subMenus?.map((subItem, i) => {
                        return (
                          <li
                            className={`mm-active sidebar-content ${childId === subItem.uniqueId ? "active" : ""
                              }`}
                            onClick={(e) => subMenuClicked(e, subItem.uniqueId)}
                          >
                            <Link to={subItem?.path} className="mm-active">
                              {t(subItem?.title)}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </>) : <span className={`nav-text`} style={{ padding: "0.825rem 1.875rem" }}><Spinner animation="grow" size="sm" className="me-2" /><small>Loading ...... </small></span>}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Aside;
