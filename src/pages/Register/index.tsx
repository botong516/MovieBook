import React, { useCallback, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { message, Form, Input, Button } from 'antd';
import { postRegister } from '@/services/register';
import { history } from 'umi';

export default () => {
  const onSubmit = async (values: any) => {
    console.log(1111, values);
    const useRegister = async () => {
      return await postRegister(values);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useRegister()
      .then((response) => {
        console.log(1111, response.json());
        if (response.status === 200) {
          message.success('Register successful!');
          history.push('/userlogin');
        } else {
          message.error('Register failed, username occupied');
        }
      })
      .catch((error) => {
        console.error(error);
        message.error('Register failed: Please try again');
      });
  };

  const onFocus = () => {};

  return (
    <PageContainer ghost>
      <div>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            autoComplete="off"
            style={{
              marginLeft: '500px',
              marginTop: '100px',
              width: 490,
              height: 40,
            }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  marginBottom: '10px',
                  width: 328,
                  height: 40,
                }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </PageContainer>
  );
};
