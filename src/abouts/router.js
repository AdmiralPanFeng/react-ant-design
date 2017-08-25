/**
 * Created by GuYang on 2017/8/15.
 */
export const aboutsRouter = {
    path:'/abouts',
    indexRoute:{onEnter:(state,replace)=>replace('/abouts/user')},
    childRoutes:[
        {
            path:'/abouts/user',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./user').default)
                },'/abouts/user')
            }
        },
    ]
}
