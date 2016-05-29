import Auth from 'Auth'
import ROUTES from 'admin.Config'
module.exports=(nextState, replace)=>{
    const currentPage = nextState.location.pathname
    if (!Auth.isLogged()) {
        if (currentPage!=ROUTES.login) {
            replace({
                pathname: ROUTES.login,
                state: { nextPathname: currentPage }
            })
        }
        return
    }
    if(currentPage==ROUTES.login){
        replace({
            pathname: ROUTES.users,
            state: { nextPathname: currentPage }
        })
    }
}
