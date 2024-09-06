import React, { useState } from 'react'
import MastersForm from './mastersForm/MastersForm'
import ApiMasterForm from './apiMasterForm/ApiMasterForm'
import SettingMaster from './settingsForm/SettingMaster'
import WebsiteMaster from './websiteMaster/WebsiteMaster'
import Members from './members/Members'
import Reports from './reports/Reports'
import Payment from './payment/Payment'
import Dispute from './dispute/Dispute'
import Leadgenerations from './leadgenerations/Leadgenerations'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'


const TAB = ["MASTER", "API MASTERS", "SETTINGS", "WEBSITE MASTER", 'MEMBER', "REPORT", "PAYMENT", "DISPUTE"];
const breadCrumbsTitle = {
  id: "1",
  title_1: "Master",
  title_2: "Company Staff",
  title_3:'Company Staff Permission'
}

function Master() {
  const [selectedTabPosition, setSelectedTabPosition] = useState(0);
  const tabChange = (position) => {

    setSelectedTabPosition(position);
  };
  return (
    <>
      <section className="CreateUserDistributer ">
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
        <div className="row m-4">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1 " >
                  <div className="tbl-caption tbl-caption-2" id="justify-none_Tab1">
                    {TAB.map((item, index) => (
                      <button
                        className={`heading mb-0 ${selectedTabPosition === index ? "active" : ""
                          }`}
                        // disabled={selectedTabPosition !== index}
                        onClick={() => tabChange(index)}
                        key={`tab_${index}`}
                      >
                        <b>{item}</b>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedTabPosition === 0 && (
                  <MastersForm
                  // initialValues={initialValues.basicDetails}
                  />
                )}
                {selectedTabPosition === 1 && (
                  <ApiMasterForm
                  // initialValues={initialValues.permanentDetails}
                  />
                )}
                {selectedTabPosition === 2 && (
                  <SettingMaster
                  // initialValues={initialValues.service}
                  />
                )}
                {selectedTabPosition === 3 && (
                  <WebsiteMaster
                  // initialValues={initialValues.service}s
                  />
                )}
                {selectedTabPosition === 4 && (
                  <Members
                  // initialValues={initialValues.service}
                  />
                )}
                {selectedTabPosition === 5 && (
                  <Reports
                  // initialValues={initialValues.service}
                  />
                )}
                {selectedTabPosition === 6 && (
                  <Payment
                  // initialValues={initialValues.service}
                  />
                )}
                {selectedTabPosition === 7 && (
                  <Dispute
                  // initialValues={initialValues.service}
                  />
                )}
                {/* {selectedTabPosition === 7 && (
                  <Leadgenerations
                  // initialValues={initialValues.service}
                  />
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <MastersForm /> */}
      {/* <ApiMasterForm /> */}
      {/* <SettingMaster /> */}
      {/* <WebsiteMaster /> */}
      {/* <Members /> */}
      {/* <Reports /> */}
      {/* <Payment /> */}
      {/* <Dispute /> */}
      {/* <Leadgenerations /> */}
    </>

  )
}

export default Master
