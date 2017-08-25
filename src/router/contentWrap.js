/**
 * Created by GuYang on 2017/8/15.
 */
import React from 'react';
import { Link } from 'react-router';
import { Row, Col ,Layout} from 'antd';
const { Sider } = Layout;
class ContentWrap extends React.Component{
    render(){
        let {menuData=[]} = this.props;
        return (
            <Layout style={{ padding: '24px 0', background: '#fff', }}>
                    <Menu menuData={menuData}/>
                    <div className="content">
                        {this.props.children}
                    </div>
                    <footer className="footer">Ant Design ©2016 Created by Ant UED</footer>
            </Layout>
        )
    }
}
class Menu extends React.Component{
    getMenuList(){
        let {menuData=[]} = this.props;
        return menuData.map((item,k)=>{
            return (
                <li key={k}><Link activeClassName="active_link" to={item.path}>{item.name}</Link></li>
            )
        })
    }
    render(){
        return (
                <ul className="menu">
                    {this.getMenuList()}
                </ul>
        )
    }
}
export default ContentWrap;