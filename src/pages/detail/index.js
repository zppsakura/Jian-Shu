import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'
import './detail.css';
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    //获取当前页面的id值
    // console.log('====================================');
    // console.log(this.props.match.params.id);
    // console.log('====================================');
    return (
      <Fragment>
        <div className="detail">
          <div className="title">
            <h2>{this.props.title}</h2>
          </div>
          <div className="content" dangerouslySetInnerHTML={{__html:this.props.content}} />
        </div>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
})


export default connect(mapState,null)(index);