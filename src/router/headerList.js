import React from 'react';
import {Link} from 'react-router';
import { Menu,} from 'antd';
const HEADERLIST = [
    {
        name: '列表一',
        path: 'list1',
        key: '1'
    }, {
        name: '列表二',
        path: 'list2',
        key: '2'
    }, {
        name: '列表三',
        path: 'list3',
        key: '3'
    },
];
class HeaderList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'mail',
        }
    }
    getHeaderList() {
        return HEADERLIST.map((item, k) => {
            return (
                <li key={k}><Link activeClassName="active_header_list" to={item.path}>{item.name}</Link></li>
            )
        })
    }
    render(){
        return (
            <ul className="header_menu">
                {this.getHeaderList()}
            </ul>
        )
    }
}
export default HeaderList;