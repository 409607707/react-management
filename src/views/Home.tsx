import React, { useState } from 'react'
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem
}

const items: MenuItem[] = [
	getItem('Option 1', '/user', <PieChartOutlined />),
	getItem('Option 2', '/about', <DesktopOutlined />),
	getItem('User', 'sub1', <UserOutlined />, [
		getItem('Tom', '3'),
		getItem('Bill', '4'),
		getItem('Alex', '5'),
	]),
	getItem('Team', 'sub2', <TeamOutlined />, [
		getItem('Team 1', '6'),
		getItem('Team 2', '8'),
	]),
	getItem('Files', '9', <FileOutlined />),
]

const View: React.FC = () => {
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  console.log(pathname)
	const [collapsed, setCollapsed] = useState(false)
	const {
		token: { colorBgContainer },
	} = theme.useToken()
  const changeMenu = (e: {key: string}) => {
    navigate(e.key)
  }
  const defaultSelectedKeys = [pathname]
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<div
					style={{
						height: 32,
						margin: 16,
						background: 'rgba(255, 255, 255, 0.2)',
					}}
				/>
				<Menu
					theme='dark'
					defaultSelectedKeys={defaultSelectedKeys}
					mode='inline'
					items={items}
          onClick={changeMenu}
				/>
			</Sider>
			<Layout className='site-layout'>
				<Header style={{ padding: 0, background: '#ccc' }}>
					<Breadcrumb style={{ marginLeft: '16px', lineHeight: '64px' }}>
						<Breadcrumb.Item>User</Breadcrumb.Item>
						<Breadcrumb.Item>Bill</Breadcrumb.Item>
					</Breadcrumb>
				</Header>
				<Content style={{ margin: '16px 16px 0 16px', backgroundColor: '#ccc' }}>
					<div
						style={{
							height: '100%',
							// background: colorBgContainer,
              backgroundColor: '#ccc'
						}}
					>
            <Outlet />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center', padding: 0, height: 48, lineHeight: '48px' }}>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	)
}

export default View
