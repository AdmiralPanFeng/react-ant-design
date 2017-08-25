/**
 * Created by GuYang on 2017/8/25.
 */

import {aboutRoute} from '../../about/router';
import {townRoute} from '../../town/router';
import {loginRoute} from '../../login/router';
import {textRoute} from '../../text/router';
import {sceneryRoute} from '../../scenery/router';
import ListOne from '../allList/listOne';
export const listOneRoute = {
    path: '/list1',
    component: ListOne,
    indexRoute: {onEnter: (state, replace) => replace(townRoute.path)},
    childRoutes: [aboutRoute,townRoute, loginRoute, textRoute, sceneryRoute]
}