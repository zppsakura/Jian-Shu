import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators.js'
class list extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { list } = this.props
    return (
      <Fragment>
        <div className="list">
          {
            list.map((item,index) => {
              return(
                  <Link to={`/detail/${item.get('id')}`} key={index}>
                    <div className="listItem">
                      <div className="listLeft">
                        <h2 className="title">{item.get('title')}</h2>
                        <p className="desc">{item.get('desc')}</p>
                        <div className="list_lin">
                          <div className="list_a" href="/">{item.get('name')}</div>
                          <div className="list_a" href="/">
                            <i className="iconfont icon-message">&#xe7ec;</i>
                            <span>{item.get('message')}</span>
                          </div>
                          <div className="list_a" href="/">
                            <i className="iconfont icon-love">&#xe65c;</i>
                            <span>{item.get('love')}</span>
                          </div>
                        </div>
                      </div>
                      <div className="listRight">
                        <img src={item.get('imgUrl')}
                        alt=""
                        style={{"width":"150px","height":"100px","borderRadius":"4px","border":"1px solid #f0f0f0"}}
                        />
                      </div>
                    </div>
                  </Link>
              
              )
            })
          }
          
        </div>
      
          <div className="readMore" onClick={() => this.props.getMoreList(this.props.page)}>阅读更多</div>
      </Fragment>
    );
  }
}
const mapState = (state) => ({
  list: state.get('home').get('articleList'),
  page: state.get('home').get('page')
})
const mapDispatch = (dispatch) => ({
  getMoreList(page){
    let action = actionCreators.getHomeList(page)
    dispatch(action)
  }
})
export default connect(mapState,mapDispatch)(list);