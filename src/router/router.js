import {ListOneRouter} from './allRouter/listOneRouter';
import {ListTwoRouter} from './allRouter/listTwoRouter';
import Container from './index';
let childRoutes = [
    ListOneRouter,
    ListTwoRouter,
];
export const appRoute = {
    path: '/',
    component: Container,
    indexRoute: {onEnter: (state, replace) => replace('/list1')},
    childRoutes: childRoutes
}