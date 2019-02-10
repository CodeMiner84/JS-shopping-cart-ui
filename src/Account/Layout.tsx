import * as React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
const { Content, Sider } = Layout;

export class AccountLayout extends React.Component<{}, {}> {
  render() {
    return (
      <Row>
        <Col md={{ span: 22, offset: 1 }} lg={{ span: 14, offset: 4 }}>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="1" eventKey={1}>
                  <Link to="/account">My account</Link>
                </Menu.Item>
                <Menu.Item key="2" eventKey={2}>
                  <Link to="/account/my-orders">My orders</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
              <Content>{this.props.children}</Content>
            </Layout>
          </Layout>
        </Col>
      </Row>
    );
  }
}
