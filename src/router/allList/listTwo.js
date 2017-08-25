/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import './style.css';
import { Link } from 'react-router';
import 'antd/dist/antd.css';
import { Layout, } from 'antd';
const {  Content, Sider } = Layout;
class ListTwo extends React.Component{
    render(){
        return (
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={100} style={{ background: '#fff',width:'' }}>
                        <ul className="menu">
                        <li><Link activeClassName="active_link" to="/abouts/user">shijie</Link></li>
                    </ul>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
        )
    }
}
export default ListTwo;