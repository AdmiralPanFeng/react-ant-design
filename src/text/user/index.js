/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
import WrappedRegistrationForm from './form';
class TextUser extends React.Component{
    render(){
        return (
            <div>
                <Breadcrumb style={{height:'42px',lineHeight:'42px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>拟写文章</Breadcrumb.Item>
                </Breadcrumb>
                <WrappedRegistrationForm/>
            </div>
        )
    }
}
export default TextUser;