/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import ContentWrap from '../contentWrap';
const MENUDATA=[
    {
        name: '世界公园',
        path: '/abouts/user'
    },
]
class ListTwo extends React.Component{
    render(){
        return (
            <ContentWrap menuData={MENUDATA} children={this.props.children}/>
        )
    }
}
export default ListTwo;