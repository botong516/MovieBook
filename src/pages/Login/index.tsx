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
          message.success('恭喜登陆成功！');
          history.push('/home');
        } else {
          message.error('登陆失败，请重新登陆');
        }
      })
      .catch((error) => {
        console.error(error);
        message.error('登陆失败，请重新登陆');
      });
  };

  const onFocus = () => {};

  return (
    <PageContainer ghost>
      <div>
        {' '}
        <div>
          <LoginForm
            title="欢迎来到MovieBook"
            subTitle="请登陆"
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
                自动登录
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                忘记密码
              </a>
            </div>
          </LoginForm>
        </div>
      </div>
    </PageContainer>
  );
};
