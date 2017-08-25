/**
 * Created by GuYang on 2017/8/10.
 */
import {aboutRoute} from '../about/router';
import {aboutsRoute} from '../abouts/router';
import {townRoute} from '../town/router';
import {loginRoute} from '../login/router';
import {textRoute} from '../text/router';
import {sceneryRoute} from '../scenery/router';
import Container from './index';
import ListOne from './listOne';
import ListTwo from './listTwo';
export const appRoute = {
    path: '/',
    component: Container,
    indexRoute: {onEnter: (state, replace) => replace('/list1')},
    childRoutes: [
        {
            path: '/list1',
            component: ListOne,
            indexRoute: {onEnter: (state, replace) => replace(townRoute.path)},
            childRoutes: [aboutRoute,townRoute, loginRoute, textRoute, sceneryRoute]
        },{
            path:'/list2',
            component:ListTwo,
            indexRoute: {onEnter: (state, replace) => replace(aboutsRoute.path)},
            childRoutes: [aboutsRoute]
        }
    ]
}