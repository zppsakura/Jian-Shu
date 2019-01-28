import React, { Fragment, Component } from 'react';
import List from './components/list';
import Recommend from './components/recommend';
import Topic from './components/topic';
import Writer from './components/writer';
import Download from './components/download';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators.js';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './home.css';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount(){
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 2000,
      },
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'my-bullet-active',
      },
    });
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollState)
  }
  handleCrollTop = () => {
    window.scrollTo(0,0);
  }
  render() {
  
    return (
      <Fragment>
        <div className="home">
          <div className="homeLeft">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img 
                style={{'width':'625px','height':'270px'}}
                src="https://upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""
                />
              </div>
              <div className="swiper-slide">
                <img 
                  style={{'width':'625px','height':'270px'}}
                  src="https://upload.jianshu.io/admin_banners/web_images/4588/c9d175a9865206d371742d53c41ed4a042c5d00b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""
                />
              </div>
              <div className="swiper-slide">
                <img 
                  style={{'width':'625px','height':'270px'}}
                  src="https://upload.jianshu.io/admin_banners/web_images/4601/3f4d6684a208a27d92ea7b5b9759c9dc5049d4c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""
                />
              </div>
            </div>
            <div className="swiper-pagination banner-pagination"></div>
          </div>
            
            
            <Topic />
            <List />
          </div>
          <div className="homeRight">
            <Recommend />
            <Download />
            <Writer />
          </div>
          {this.props.showScroll ? <div className="backToTop" onClick={this.handleCrollTop}>回到顶部</div> : null}
          
        </div>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  showScroll: state.get('home').get('showScroll')
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
   let action = actionCreators.getHomeInfo();
   dispatch(action)
  },
  changeScrollState(){
    if(document.documentElement.scrollTop > 200){
      let action = actionCreators.changeScroll(true)
      dispatch(action)
    }else{
      let action = actionCreators.changeScroll(false)
      dispatch(action)
    }
  }
})
export default connect(mapState,mapDispatch)(index);