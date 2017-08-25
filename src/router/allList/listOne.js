/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import ContentWrap from '../contentWrap';
const MENUDATA=[
    {
        name: '恭王府一游',
        path: '/town/user'
    }, {
        name: '世界公园',
        path: '/about/user'
    }, {
        name: '风景预览',
        path: '/scenery/user'
    }, {
        name: '拟写文章',
        path: '/text/user'
    }
]
class ListOne extends React.Component{
    render(){
        return (
            <ContentWrap menuData={MENUDATA} children={this.props.children}/>
        )
    }
}
export default ListOne;