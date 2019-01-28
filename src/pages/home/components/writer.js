import React, { Fragment, Component } from 'react';
import * as actionCreators from '../store/actionCreators.js'
import { connect } from 'react-redux';
class writer extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Fragment>
        <div className="writer">
          <div className="writerTop">
            <img
             style={{"width":"280px","height":"160px","borderRadius":"6px"}}
             src="https://upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          </div>
          <div className="writerCottent">
            <div className="cottentTop">
              <p>推荐作者</p>
              <p className="change">换一批</p>
            </div>
            {
              this.props.users.map((item) => {
                return (
                  <div className="writerItem" key={item.get('id')}>
                    <img 
                    className="writerItemImg"
                    src={item.get('avatar_source')} alt=""/>
                    <p className="writerItemTitle">{item.get('nickname')}</p>
                    <span className="writerItemDesc">写了{item.get('total_wordage')}字 · {item.get('total_likes_count')}喜欢</span>
                    <a className="writerItemLink" href="/">+关注</a>
                </div>
                )
              })
            }
           
            
            </div>
          <div className="watchAll" onClick={this.props.text === '查看全部 >' ? this.props.handleAllList : this.props.handleStopList}>
            {this.props.text}
          </div>
          <div className="writerBottom">
            <img
            style={{"width":"280px","height":"160px","borderRadius":"6px"}}
            src="https://upload.jianshu.io/admin_banners/web_images/4601/3f4d6684a208a27d92ea7b5b9759c9dc5049d4c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  users: state.get('home').get('users'),
  text: state.get('home').get('text')
})
const mapDispatch = (dispatch) => ({
  handleAllList(){
    let action = actionCreators.getAllWriterList();
    dispatch(action)
  },
  handleStopList(){
    let action = actionCreators.getStopWriterList();
    dispatch(action)
  }
})
export default connect(mapState,mapDispatch)(writer);