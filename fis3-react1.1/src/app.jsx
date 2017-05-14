/**
 * @module app
 * @author 小虎牙
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Routes } from '/src/routes';
import configureStore from '/src/store';
import { Icon, Layout, Menu } from 'antd';
const  { Sider, Header, Content, Footer } = Layout;
const  { SubMenu } = Menu;



export default class extends Component {

    state = {
        collapsed: false,
        openKeys: [],
        selectedKeys: []
    };


    /**
     * @desc JSX
     */
    render() {
        const menuProps = {
            mode: 'inline',
            theme: 'dark',
            openKeys: this.state.openKeys,
            selectedKeys: this.state.selectedKeys,
            onOpenChange: openKeys => this.setState({ openKeys: [ openKeys.pop() ] }),
            onClick: e => this.setState({ selectedKeys: [ e.key ] })
        };
        return (
            <Router>
                <Provider store={configureStore()}>
                    <Layout id="layout">
                        <Sider id="sider" collapsedWidth="0" collapsed={this.state.collapsed}>
                            <Link to="/">
                                <div id="logo" style={{left: this.state.collapsed ? -333 : 0}}>logo</div>
                            </Link>
                            <Menu id="menu" {...menuProps}>
                                <SubMenu key="01" title={<span><Icon type="user" /><span>一个菜单</span></span>}>
                                    <Menu.Item key="01-01"><Link to="/dome1">DOME1</Link></Menu.Item>
                                    <Menu.Item key="01-02"><Link to="/dome2">DOME2</Link></Menu.Item>
                                    <Menu.Item key="01-03"><Link to="/dome3">DOME3</Link></Menu.Item>
                                    <Menu.Item key="01-03"><Link to="/dome4">DOME4</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="02" title={<span><Icon type="laptop" /><span>两个菜单</span></span>}>
                                    <Menu.Item key="02-01"><Link to="/dome1">DOME1</Link></Menu.Item>
                                    <Menu.Item key="02-02"><Link to="/dome2">DOME2</Link></Menu.Item>
                                    <Menu.Item key="02-03"><Link to="/dome3">DOME3</Link></Menu.Item>
                                    <Menu.Item key="01-03"><Link to="/dome4">DOME4</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="03" title={<span><Icon type="notification" /><span>三个菜单</span></span>}>
                                    <Menu.Item key="03-01"><Link to="/dome1">DOME1</Link></Menu.Item>
                                    <Menu.Item key="03-02"><Link to="/dome2">DOME2</Link></Menu.Item>
                                    <Menu.Item key="03-03"><Link to="/dome3">DOME3</Link></Menu.Item>
                                    <Menu.Item key="01-03"><Link to="/dome4">DOME4</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout id="container">
                            <Header id="header">
                                <div id="components-layout-demo-custom-trigger">
                                    <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={() => this.setState({collapsed: !this.state.collapsed})} />
                                    <span>react project scaffolding</span>
                                </div>
                            </Header>
                            <Content id="content">
                                <Routes />
                            </Content>
                            <Footer id="footer">
                                <p>Ant Design@2.10.0 ©2016 Created by Ant UED</p>
                            </Footer>
                        </Layout>
                    </Layout>
                </Provider>
            </Router>
        );
    }
}