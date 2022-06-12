import { Button, Card, Checkbox, Form, Input } from 'antd';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Login = () => (
  <Main
    meta={
      <Meta
        title="Đăng nhập"
        description="Đăng nhập vào để trải nghiệp ứng dụng của chúng tôi"
      />
    }
  >
    <Card
      bordered={true}
      style={{
        width: 400,
        height: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1
          style={{ marginBottom: 50, marginTop: 25 }}
          className="text-center text-lg"
        >
          Đăng nhập
        </h1>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Tên đăng nhập không được để trống',
            },
          ]}
        >
          <Input
            style={{ width: 300, height: 45, borderRadius: 10 }}
            placeholder="Tên đăng nhập/Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Mật khẩu không được để trống' }]}
        >
          <Input.Password
            style={{ width: 300, height: 45, borderRadius: 10 }}
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item className="text-center">
          <Button
            style={{
              height: 48,
              borderRadius: 10,
              backgroundColor: '#E03C31',
              borderColor: '#E03C31',
              fontWeight: 700,
            }}
            className="w-full text-base"
            type="primary"
            htmlType="submit"
          >
            Đăng nhập
          </Button>
        </Form.Item>
        <div className="flex">
          <Form.Item
            className="text-left"
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Nhớ tài khoản</Checkbox>
          </Form.Item>
          <div className="ml-auto pt-1">
            <a style={{ color: '#E03C31' }} href="/forgot-password">
              Quên mật khẩu?
            </a>
          </div>
        </div>
      </Form>
    </Card>
  </Main>
);

export default Login;
