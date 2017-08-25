/**
 * Created by GuYang on 2017/8/15.
 */
export const textRoute = {
    path:'/text',
    indexRoute:{onEnter:(state,replace)=>replace('/text/user')},
    childRoutes:[
        {
            path:'/text/user',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./user').default)
                },'/text/user')
            }
        },
    ]
}
