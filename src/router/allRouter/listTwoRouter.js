/**
 * Created by GuYang on 2017/8/25.
 */
import {aboutsRouter} from '../../abouts/router';
import ListTwo from '../allList/listTwo';
export const ListTwoRouter = {
    path: '/list2',
    component: ListTwo,
    indexRoute: {onEnter: (state, replace) => replace(aboutsRouter.path)},
    childRoutes: [aboutsRouter]
}