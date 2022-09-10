import React, { useCallback, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  ProFormCheckbox,
  ProFormText,
  PageContainer,
} from '@ant-design/pro-components';
import { message, Button, Space } from 'antd';
import { Login } from '@/services/login';
import { history } from 'umi';

export default () => {
  const onSubmit = async (values: any) => {
    const useLogin = async () => {
      return await Login(values);
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useLogin()
      .then((response) => {
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

  const register = useCallback(() => {
    history.push('/userregister');
  }, []);

  return (
    <PageContainer ghost>
      <div>
        <div>
          <LoginForm
            title="Welcome to MovieBook!"
            subTitle="Please login into your account"
            actions={
              <Button
                onClick={() => register()}
                type="primary"
                style={{
                  marginBottom: '10px',
                  width: 328,
                  height: 40,
                }}
              >
                <span style={{ fontSize: 16 }}>注册</span>
              </Button>
            }
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
                placeholder={'用户名: admin or user'}
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'密码'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
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
