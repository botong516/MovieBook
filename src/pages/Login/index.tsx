import React, { useCallback, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
  PageContainer,
} from '@ant-design/pro-components';
import { message, Space } from 'antd';
import { Login } from '@/services/login';
import { history } from 'umi';

export default () => {
  const [httpCode, setHttpCode] = useState<number>();

  const onSubmit = async (values: any) => {
    const useLogin = async () => {
      return await Login(values);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useLogin()
      .then((response) => {
        setHttpCode(response.status);
        if (response.status === 200) {
          message.success('Login successful!');
          history.push('/home');
        } else {
          message.error('Login failed: Please try again');
        }
      })
      .catch((error) => {
        console.error(error);
        message.error('Login failed: Please try again');
      });
  };

  const onFocus = () => {};

  return (
    <PageContainer ghost>
      <div>
        {' '}
        <div>
          <LoginForm
            title="Welcome to MovieBook!"
            subTitle="Please login into your account"
            // actions={<Space>注册</Space>}
            onFinish={onSubmit}
            onFocus={onFocus}
          >
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'Username'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your username!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'Password'}
                rules={[
                  {
                    required: true,
                    message: 'Please enter your password!',
                  },
                ]}
              />
            </>
            <div
              style={{
                marginBlockEnd: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                Remember me
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                Forget your password?
              </a>
            </div>
          </LoginForm>
        </div>
      </div>
    </PageContainer>
  );
};
