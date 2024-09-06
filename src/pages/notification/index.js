import { useEffect, useState } from "react";
import NotificationItem from "../../components/notification/NotificationItem";
import { getsNotification } from "../../api/login/Login";
import { Pagination } from "antd";
const notifications = [
  {
    type: 'new-user',
    title: 'New Registration: Finibus Bonorum',
    message: 'Sed ut perspiciatis unde omnis ilaudantium',
    user: 'Allen Deu',
    isOpen: true,
    time: '24 Nov 2018 at 9:30 AM'
  },
  {
    type: 'message',
    title: 'Darren Smith sent new message',
    message: 'Sed ut perspiciatis unde laudantium',
    user: 'Darren',
    isOpen: true,
    time: '24 Nov 2018 at 9:30 AM'
  },
  {
    type: 'comment',
    title: 'Arin Ganshiram Commented on post',
    message: 'Sed ut perspiciatis unde laudantium',
    user: 'Arin Ganshiram',
    isOpen: false,
    time: '24 Nov 2018 at 9:30 AM'
  },
  {
    type: 'connect',
    title: 'Jullet Den Connect Allen Depk',
    message: 'Sed ut perspiciatis unde laudantium',
    user: 'Jullet Den',
    isOpen: false,
    time: '24 Nov 2018 at 9:30 AM'
  },
  {
    type: 'connect',
    title: 'Jullet Den Connect Allen Depk',
    message: 'Sed ut perspiciatis unde laudantium',
    user: 'Jullet Den',
    isOpen: false,
    time: '24 Nov 2018 at 9:30 AM'
  }
];
function NotificationPage() {


  const [notifications, setNotifications] = useState([]);
  const [totalCount, setTotalCount] = useState(null)
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const getNotification = async (inp) => {
    const val = { page: page, count: count }
    try {
      const data = await getsNotification({ page: inp, count: count });
      setNotifications(data?.data?.notification);
      setTotalCount(data?.data?.count)
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeVal = (e) => {
    setPage(e - 1)
    getNotification(e - 1)
  }
  useEffect(() => {
    getNotification(0)
  }, [])

  // const getNotificationn = async (page) => {
  //   try {
  //     const data = await getsNotification({ page, count });
  //     setNotifications((prevNotifications) => [
  //       ...prevNotifications,
  //       ...data?.data?.notification,
  //     ]);
  //     setTotalCount(data?.data?.count);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };


  // const handleLoadMore = () => {
  //   setPage((prevPage) => {
  //     const newPage = prevPage + 1;
  //     getNotificationn(newPage);
  //     return newPage;
  //   });
  // };

  // useEffect(() => {
  //   getNotificationn(0); // Load the first page of notifications on component mount
  // }, []);



  return (
    <div className="">
      {notifications?.length ? notifications?.map((notif, index) => (
        <NotificationItem key={index} {...notif} />
      )) : "No Notification"}

      {/* {notifications.length < totalCount && (
        <button onClick={handleLoadMore}>Load More</button>
      )} */}
      <div className="dataTables_info_page">
        <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
          Total {totalCount}  entries
        </div>
        <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
          <Pagination
            // showSizeChanger
            // onShowSizeChange={''}

            defaultCurrent={1}
            onChange={onChangeVal}
            total={totalCount}
          />
        </div>
      </div>
    </div>
  )
}
export default NotificationPage