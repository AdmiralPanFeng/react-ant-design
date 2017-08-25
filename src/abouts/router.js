/**
 * Created by GuYang on 2017/8/15.
 */
export const aboutRoute = {
    path:'/about',
    indexRoute:{onEnter:(state,replace)=>replace('/about/user')},
    childRoutes:[
        {
            path:'/about/user',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./user').default)
                },'/about/user')
            }
        },
    ]
}
