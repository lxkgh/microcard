import Auth from 'Auth'
import ROUTES from 'web.Config'
module.exports=(nextState, replace)=>{
    const currentPage = nextState.location.pathname
    if (!Auth.isLogged()) {
        if (currentPage!=ROUTES.login&&currentPage!=ROUTES.register) {
            replace({
                pathname: ROUTES.login,
                state: { nextPathname: currentPage }
            })
        }
        return
    }
    if(currentPage==ROUTES.login||currentPage==ROUTES.register){
        replace({
            pathname: ROUTES.home,
            state: { nextPathname:currentPage }
        })
    }
}
