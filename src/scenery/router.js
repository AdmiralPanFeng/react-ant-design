/**
 * Created by GuYang on 2017/8/15.
 */
export const sceneryRouter = {
    path:'/scenery',
    indexRoute:{onEnter:(state,replace)=>replace('/scenery/user')},
    childRoutes:[
        {
            path:'/scenery/user',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./user').default)
                },'/scenery/user')
            }
        },
    ]
}
