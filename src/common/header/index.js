import React, { Fragment, Component } from 'react';
import logo from '../../static/logo.png';
import './header.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as loginActionCreators from '../../pages/login/store/actionCreators.js'
import * as actionCreater from './store/actionCreater.js';

class Index extends Component {
   getListArea = () => {
     const pageList = []
     const newList = this.props.list.toJS();
     if(newList){
      for(let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++){
        if(newList[i]){
          pageList.push(
            <a href="/" key={newList[i]}>{newList[i]}</a>
          )
        }
      }
    }
    if(this.props.focused || this.props.mouseIn){
    return (
      <div className="searchInfo" onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
        <div className="searchTop">
          <span className="searchLeft">
            热门搜索
          </span>
          <span className="searchRight" onClick={() => this.props.handleListChange(this.props.page,this.props.totalPage) }>
            换一批
          </span>
        </div>
        <div className="content">
         {pageList}
        </div>
      </div>
    )
  }else {
    return null;
  }
  }
//使用thunk定义的函数

componentDidMount(){
  
}
 
  render() {
    return(
      <Fragment>
        <div className="header">
          <Link to = '/'>
            <img className="logo" src={logo} alt=""/>
          </Link>
          <div className="nav">
            <span className="left active">首页</span>
            <span className="left">下载App</span>
              {this.props.login ?
              <Link to = '/'> 
              <span className="right" onClick={this.props.handleLogout}>退出</span>
              </Link> : <Link to = '/login'><span className="right">登录</span> </Link>}
            <i className="iconfont right"> &#xe636;</i>
            <div>
              <div 
              className={this.props.focused ? 'focus' : ''} 
              onFocus={() => this.props.handleInputFocus(this.props.list)}
              onBlur={this.props.handleInputBlur}
              >
                <CSSTransition
                  in={this.props.focused}
                  timeout={300}
                  classNames="slide"
                >
                  <input className="search" type="text" placeholder="搜索"/>
                </CSSTransition>
                <i className="iconfont icon-user">&#xe642;</i>
              </div>
              </div>
              {/* 根据条件判断何时显示 */}
              {this.getListArea()}
          </div>
          <Link to='/login'>
            <button className="btn">注册</button>
          </Link>
          {this.props.login ? <Link to='/article'>
          <button className="btn btn2">
          <i className="iconfont"> &#xe624; </i>
          写文章
          </button>
          </Link> : <Link to='/login'>
          <button className="btn btn2">
          <i className="iconfont"> &#xe624; </i>
          写文章
          </button>
          </Link>}
          
          
        </div>
      </Fragment>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused'),
    // list: state.get('header').get('list')
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    mouseIn: state.getIn(['header','mouseIn']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    login: state.getIn(['login','login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list){
      if(list.size === 0){
        dispatch(actionCreater.getList())
      }
      dispatch(actionCreater.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreater.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreater.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreater.mouseLeave())
    },
    handleLogout(){
      dispatch(loginActionCreators.logout())
    },
    handleListChange(page,totalPage){
      if(page < totalPage){
        dispatch(actionCreater.listChange(page + 1))
      }else{
        dispatch(actionCreater.listChange(1))
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index);