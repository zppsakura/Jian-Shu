import React, { Fragment, Component } from 'react';
import '../home.css'
import { connect } from 'react-redux'
class topic extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { list } = this.props
    return (
      <Fragment>
        <div className="topic">
          { list.map((item) => {
            return (
              <div className="topicItem" key={item.get('id')}>
              <img 
                style={{"width":"32px","height":"32px","display":"block","float":"left","marginRight":"10px"}}
                src={item.get('imgUrl')} 
                alt=""
              />
              {item.get('title')}
            </div>
            )
          }) }
         
        </div>
      </Fragment>
    );
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList')
})

export default connect(mapState,null)(topic);