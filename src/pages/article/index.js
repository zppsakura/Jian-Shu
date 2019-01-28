import React, { Fragment, Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState  } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import ColorPic from './reactColor';
import { Button } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css'; 
import './article.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      editorState: EditorState.createEmpty(),
      send: false
     };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,

    });
  };

  formSubmit = () => {
    var editorContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    // this.props.saveSys({roomnotes: editorContent})
    if(editorContent.length < 50){
      alert('字数不够，请再增加点内容')
    }else{
      this.setState({
        send: true
      })
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.getSysResult!==nextProps.getSysResult && nextProps.getSysResult.data) {
      // 匹配富文本编辑器格式，回显保存的内容
      const contentBlock = htmlToDraft(nextProps.getSysResult.data.roomnotes);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState })
      }
    }
  }

  render() {
    let messageInfo;
    if(this.props.login){
      messageInfo = (
        <div>
        <Editor
        initialEditorState={editorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
       onEditorStateChange={this.onEditorStateChange}
       toolbar={{
         colorPicker: { component: ColorPic },
         inline: { inDropdown: true },
         list: { inDropdown: true },
         textAlign: { inDropdown: true },
         link: { inDropdown: true },
         history: { inDropdown: true },
       }}
     />
     {this.state.send ? 
      <Redirect to = '/'><Button className="send" onClick={this.formSubmit}>发布</Button></Redirect> : 
      <Button className="send" onClick={this.formSubmit}>发布</Button>
    }
    </div>
     
    )
    }else{
      
        messageInfo = (
          <div className="acticle_login">请先登录。。。。。</div>
        )
      
    }
    const { editorState } = this.state;
    return (
      <Fragment>
        
        <div className="article">
       {messageInfo}


      </div>

      </Fragment>
    );
  }
}

const mapState = (state) => ({
  login: state.getIn(['login','login'])
})

export default connect(mapState,null)(index);