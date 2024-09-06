import { Pagination } from "antd";

function NotificationItem({ type, title, subject, to, updatedAt, isOpen, sendFrom, message }) {


    return (
        <div className={`notification  ${isOpen && 'openNote'}`}>
            {/* <div className={getIconClass(type)}></div> */}
            <div className={`content`}>
                {/* <h4>{type}</h4> */}
                <h6>{subject}</h6>
                <p>{message}</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}> <div className="user">{sendFrom}</div>
                    <div className="time">{updatedAt}</div></div>
            </div>

        </div>
    );
}
export default NotificationItem;