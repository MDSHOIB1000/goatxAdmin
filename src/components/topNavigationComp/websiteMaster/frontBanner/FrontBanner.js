import FrontBannerList from "./frontBannerList/FrontBannerList"
import UploadFrontBanner from "./uploadFrontBanner/UploadFrontBanner"

function FrontBanner() {
    return (
        <>
            <UploadFrontBanner />
            <FrontBannerList />
        </>
    )
}
export default FrontBanner