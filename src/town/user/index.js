/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import { LocaleProvider,Breadcrumb } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import Cardaa from './card';
class UserList extends React.Component{
    render(){
        return (
            <div>
                <LocaleProvider locale={enUS}>
                    <Breadcrumb style={{height:'42px',lineHeight:'42px' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>美女</Breadcrumb.Item>
                    </Breadcrumb>
                </LocaleProvider>
                <Cardaa/>
            </div>
        )
    }
}
export default UserList;