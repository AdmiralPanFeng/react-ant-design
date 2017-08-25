/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
import GalleryByReactApp from './GalleryByReactApp';
class userList extends React.Component{
    render(){
        return (
            <div>
                <Breadcrumb style={{height:'42px',lineHeight:'42px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <GalleryByReactApp/>
            </div>

        )
    }
}
export default userList;