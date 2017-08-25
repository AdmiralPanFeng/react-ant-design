/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import './style.css';
import { Link } from 'react-router';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class Container extends React.Component{
    render(){
        return (
            <Layout>
                <Header style={{color:'#fff',background:'#9C27B0'}}>
                    <div style={{float:'left'}}>
                        Giggle丶__
                    </div>
                </Header>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider width={100} style={{ background: '#fff',width:'' }}>
                        <ul className="menu">
                            <li><Link activeClassName="active_link" to="/town/user">恭王府一游</Link></li>
                            <li><Link activeClassName="active_link" to="/about/user">世界公园</Link></li>
                            <li><Link activeClassName="active_link" to="/scenery/user">风景预览</Link></li>
                            <li><Link activeClassName="active_link" to="/text/user">拟写文章</Link></li>
                        </ul>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {this.props.children}
                    </Content>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}
export default Container;