/**
 * Created by GuYang on 2017/8/10.
 */
import {aboutRoute} from '../about/router';
import {townRoute} from '../town/router';
import {loginRoute} from '../login/router';
import {textRoute} from '../text/router';
import {sceneryRoute} from '../scenery/router';
import Container from './container';
export const appRoute = {
    path:'/',
    component:Container,
    indexRoute:{onEnter:(state,replace)=>replace(townRoute.path)},
    childRoutes:[aboutRoute,townRoute,loginRoute,textRoute,sceneryRoute]
}