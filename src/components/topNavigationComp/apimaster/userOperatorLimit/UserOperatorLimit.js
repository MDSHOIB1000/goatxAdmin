import UserOperatorLimitList from "./userOperatorLimitList/UserOperatorLimitList"
import SearchUserOperator from "./userOperatorLimitList/searchUserOperator/SearchUserOperator"


function UserOperatorLimit() {
    return (
        <>
        <SearchUserOperator/>
            <UserOperatorLimitList />
        </>
    )
}
export default UserOperatorLimit