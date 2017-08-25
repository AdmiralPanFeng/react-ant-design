/**
 * Created by GuYang on 2017/8/15.
 */
export const townRouter = {
    path:'/town',
    indexRoute:{onEnter:(state,replace)=>replace('/town/user')},
    childRoutes:[
        {
            path:'/town/user',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./user').default)
                },'/town/user')
            }
        },
    ]
}