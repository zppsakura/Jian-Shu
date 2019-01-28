import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

class recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        <div className="recommend">
          {
            list.map((item) => {
              return (
                <a href="/" className="recommendItem" key={item.get('id')}>
                  <img
                  style={{"width":"280px","height":"50px"}}
                  src={item.get('imgUrl')} alt=""/>
                </a>
              )
            })
          }
          
        </div>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','recommendList'])
})
export default connect (mapState,null)(recommend);