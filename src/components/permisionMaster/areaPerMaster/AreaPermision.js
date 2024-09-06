import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { message } from 'antd';
import AreaPermisionForm from './areaPermisionForm/AreaPermisionForm'
import AreaPermisionList from './areaPermisionList/AreaPermisionList'
import { addAreaMaster, deleteAreaMaster, getAreaMaster, getAreaMasterId, updateAreaMaster } from '../../../api/login/Login';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

function AreaPermision() {
  const breadCrumbsTitle = {
    id: "1",
    title_2: "Area Master",
  }
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [totalCount, setTotalCount] = useState()
  const [initialValues, setInitialValues] = useState({
    name: "",
    isActive: false,
  });
  const params = useParams();
  const navigate = useNavigate()
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Floor Name Is Required";
    }
    return errors;
  };

  // ----------list Api----------
  const getAreaMasters = async (page) => {
    setLoading(true)
    try {
      const res = await getAreaMaster(page, count)
      setTotalCount(res?.totalCount)
      setPage(page)
      setData(res)
    } catch (error) {

    }
    setLoading(false)
  }
  // add Area


  const toastSuccessMessage = (message) => {
    toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
      position: "top-right",
    });
  };
  const toastErrorMessage = () => {
    toast.error(`${params?.id ? "Update" : "Add"} Block Master Successfully.`, {
      position: "top-right",
    });
  };
  const blankBtn = () => {
    setInitialValues({ name: "", isActive: "" });
  };

  const submitForm = async (values) => {
    try {
      if (!params?.id) {
        try {
          const res = await addAreaMaster(values);
          if (res?.statusCode == "200") {
            toastSuccessMessage("Area Successfully");
            getAreaMasters(page)
            blankBtn()
          }
        } catch (error) {
          alert(error.message)
        }

      } else {
        try {
          const res = await updateAreaMaster(params.id, values);
          toastSuccessMessage("Area Successfully");
          if (res?.statusCode == "200") {
            getAreaMasters(page)
            navigate(`/area-master`)
            blankBtn()
          }
        } catch (error) {

        }

      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        if (params?.id) {
          const response = await getAreaMasterId(params.id);
          const currencyData = response.data;
          setInitialValues(currencyData);
        } else {
          setInitialValues({
            name: "",
            isActive: true
          });
        }
      } catch (error) {
        console.error("Error fetching currency:", error);
      }
    };

    fetchCurrency();
  }, [params?.id]);


  const onChangeVal = (e) => {
    getAreaMasters(e - 1)

  };
  const deleteBlockAdd = async (id) => {
    console.log(id);
    setLoading(true)
    try {
      await deleteAreaMaster(id)
      let backList = totalCount % 11 === 0 ? page - 1 : page
      getAreaMasters(backList)
    } catch (error) {
      toastSuccessMessage(error.message)
    }
    setLoading(false)
  }

  const confirm = (id) => {
    console.log(id);
    deleteBlockAdd(id)
    message.success('Delete Successfull!');

  };
  const cancel = (e) => {
    // console.log(e);
    message.error('Cancle Successfull!');
  };
  const cancelBtn = () => {
    setInitialValues({ name: "", isActive: "" });
    message.error('Cancel Successful!');
    navigate(`/area-master`)
  };

  useEffect(() => {
    getAreaMasters(page)
  }, [])

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AreaPermisionForm validate={validate} initialValues={initialValues} params={params} submitForm={submitForm} cancelBtn={cancelBtn} />
      <AreaPermisionList data={data} page={page} count={count} confirm={confirm} cancel={cancel} loading={loading} onChangeVal={onChangeVal} totalCount={totalCount} />
    </>
  )
}

export default AreaPermision
