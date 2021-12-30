import React from 'react';
import {Form, Input} from 'antd';
import { EmailIcon, LogoIcon, PassIcon } from 'helper/constant';
import '../scss/Auth.scss';
import PrimaryButton from 'common/PrimaryButton';
import { useDispatch } from 'react-redux'
import { submitLoginDetailsRedcuer } from 'redux/reducer';
// import {useState} from 'react';

// const RegisterComponent = React.lazy(() =>import('./Register'))

interface ILoginProps {}


const Login:React.FunctionComponent<ILoginProps> = () => {
  // const count = useSelector((state) => state)
  const dispatch = useDispatch()
  const [form] = Form.useForm();



  const onSubmitHandler = (values) => {
    console.log("valieee",values)
    dispatch(submitLoginDetailsRedcuer(
      values,
      'LOGIN'
    ))
  }

    return(
        // <>
      <div className="auth_container">
          <div className="login-modal text-center">
            <div className="mb20">
              <img src={LogoIcon} alt="logo"/>
            </div>
            <Form 
              className="app-form-inputs"
              form={form}
              onFinish={onSubmitHandler}
              >
              <Form.Item
                name="Username">
                <Input 
                  prefix={
                    <img src={EmailIcon} alt="email"/>
                  }
                  />
              </Form.Item>
              <Form.Item name="password">
                <Input 
                  type="password"
                  placeholder="Password"
                  prefix={
                    <img src={PassIcon} alt="pasa"/>
                  }
                  />  
              </Form.Item>
              <div className="align-right">
                <PrimaryButton htmlType="submit">Login</PrimaryButton>
              </div>
            </Form>
          </div>
      </div>
        //   {/* <input type="range" min="1" max="100" value="25" onChange={() => console.log()}/> */}
        // {/* <Suspense fallback={<div>Loading...</div>}><RegisterComponent/></Suspense> */}
        // {/* </> */}
    )
}

export default Login;