
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import DmtCommisionForm from './dmtCommisionForm/DmtCommisionForm';
import DmtCommisionlist from './dmtCommisionList/DmtCommisionlist';


function DmtCommision() {
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={""} />
            <DmtCommisionlist/>
        </>
    )
}

export default DmtCommision