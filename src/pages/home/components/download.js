import React, { Fragment, Component } from 'react';
class download extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Fragment>
        <a href="/" className="downLoad">
          <div className="downloadLeft">
            <img 
            style={{"width":"60px","height":"60px"}}
            src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          </div>
          <div className="downloadRight">
            <h2 className="downloadTitle">下载简书手机App ></h2>
            <p className="downloadDesc">随时随地发现和创作内容</p>
          </div>
        </a>
      </Fragment>
    );
  }
}

export default download;