import React, { Fragment, Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import './login.css';
import axios from 'axios';
import {
  Form, 
  Icon, 
  Input, 
  Button,
  Checkbox 
} from 'antd';
import 'antd/dist/antd.css'; 
import { connect } from 'react-redux' ;
import * as actionCreators from './store/actionCreators.js';


class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var reg3=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    var reg2 = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,20}$/;
    if(this.props.isLoginShow){    
      this.props.form.validateFields((err, values) => {
      if (!err) {
        var formData = this.props.form.getFieldsValue();
        axios.get('/api/login.json').then((res) => {
          if(formData.userName !== res.data.data.telephone){
            alert('用户名输入错误')
          }else if(formData.password !== res.data.data.password){
            alert('密码输入错误')
          }else{
            this.props.changeToLogin()
          }
        })
      }else{
        console.log(err)
      }

    });
  }else{
    // if(!reg.test(formData.userName))
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var formData = this.props.form.getFieldsValue();
        if(!reg3.test(formData.userName2)){
          alert('用户名格式不正确，请重新输入！')
        }else if(!reg.test(formData.telephone)){
          alert('手机号格式不正确，请重新输入！')
        }else if(!reg2.test(formData.password2)){
          alert('密码格式不正确，请重新输入！')
        }else{
          this.props.changeToLogin()
        }
      }

    });
      
   }
  
}
  
  render() {
    
    const { getFieldDecorator } = this.props.form;
    let userMessage;
    let loginState;
    let registerState;

    if(this.props.isLoginShow){
       loginState = (
          <span className="login_active" onClick={this.props.handleLogin}>登录</span>
      )
    }else{
      loginState = (
        <span className="login_info" onClick={this.props.handleLogin}>登录</span>
      )
    }
    if(this.props.isRegisterShow){
      registerState = (
          <span className="register_active" onClick={this.props.handleRegister}>注册</span>
      )
    }else{
      registerState = (
        <span className="register_info" onClick={this.props.handleRegister}>注册</span>
      )
    }
    
    if(this.props.isLoginShow){
      userMessage = (
        <Form>
        <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <span className="login-form-forgot" href="">Forgot password</span>
         
        </Form.Item>
            {this.props.login ? <Redirect to='/article'><Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button></Redirect> : <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>}
            
          </Form>
      )
    }else{
      userMessage=(
        <Form>
          <Form.Item>
            {getFieldDecorator('userName2', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="输入3-15个字符的用户名"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('telephone', {
              rules: [{ required: true, message: 'Please input your telephone!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="输入11位数字的手机号码" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password2', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="输入6-20位英文和数字的密码" />
            )}
          </Form.Item>
          {this.props.login ? <Redirect to='/article'><Button type="primary" htmlType="submit" className="login-form-button">
              Register in
            </Button></Redirect> : <Button type="primary" htmlType="submit" className="login-form-button">
              Register in
            </Button>}
        </Form>
      )
    }
    return (
      <Fragment>
        <div className="login">
        <div className="login_box">
          <Form onSubmit={this.handleSubmit} className="login-form">
          <div className="formStl">
          <Form.Item className="login_title">
            {loginState}
            <i className="iconfont icon_dot">&#xe7a5;</i>
            {registerState}
          </Form.Item>
          
            {userMessage}

          </div>
          </Form>
          </div>
        </div>
      </Fragment>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(index);


const mapState = (state) => ({
  isLoginShow: state.getIn(['login','isLoginShow']),
  isRegisterShow: state.getIn(['login','isRegisterShow']),
  username: state.getIn(['login','username']),
  password: state.getIn(['login','password']),
  login: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
  handleRegister(){
    let action = actionCreators.changeLoginState()
    dispatch(action)
  },
  handleLogin(){
    let action = actionCreators.changeLogin()
    dispatch(action)
  },
  changeToLogin(){
    let action = actionCreators.change()
    dispatch(action)
  }
})

export default connect(mapState,mapDispatch)(WrappedNormalLoginForm);