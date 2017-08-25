
/**
 * Created by GuYang on 2017/8/15.
 */
export const loginRoute = {
    path:'login',
    getComponents(state,callback){
        require.ensure([],require=>{
            callback(null,require('./index').default);
        });
    }
}