import React from 'react'
import EmailSeting from '../../components/emailSettingsForm/emailSettings/EmailSeting'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'

function EmailSettings() {
    const breadCrumbsTitle = {title_1:"E-mail Settings"}
  return (
    <>
    <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
      <EmailSeting/>
    </>
  )
}

export default EmailSettings
