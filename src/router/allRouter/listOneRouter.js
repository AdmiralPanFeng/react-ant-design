/**
 * Created by GuYang on 2017/8/25.
 */
import {aboutRouter} from '../../about/router';
import {townRouter} from '../../town/router';
import {textRouter} from '../../text/router';
import {sceneryRouter} from '../../scenery/router';
import ListOne from '../allList/listOne';
export const ListOneRouter = {
    path: '/list1',
    component: ListOne,
    indexRoute: {onEnter: (state, replace) => replace(townRouter.path)},
    childRoutes: [aboutRouter,townRouter, textRouter, sceneryRouter]
}