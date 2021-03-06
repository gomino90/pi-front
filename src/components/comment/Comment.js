import React, { Component } from 'react';
import CommentAdd from './CommentAdd';
import CommentList from './CommentList';
import axios from 'axios';
import { BOARDBACKEND } from '../../_actions/types';

class Comment extends Component {

  state = {
      comments:[]
  }
    
  componentDidMount() {
    this.handleGetList(`${BOARDBACKEND}/comments/getAll`);
  }
    // 게시글 목록 불러오기 
    handleGetList = (url) => {

      axios.get(url)
      .then(res => {
        this.setState({
          comments: res.data
        })
      })
      .catch(error => {
        console.log(error);
      });
    } 

    
  // 삭제를 클릭을 할떄 이벤트 발생(원래 코드)
  delComment = (index) => {
    const { comments } = this.state
    comments.splice(index,1)
    this.setState({comments})
  }
  

   
  // 삭제를 클릭을 할떄 axios 실행(공지사항에서 가져온 코드)
  handleDelComment = ()=>{
    const postUrl = `${BOARDBACKEND}/comments/delete/${id}`;
    axios.post(postUrl)
    .then(res => {
        window.location.href="/facit/fcSeq"
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
      const { comments } = this.state
      return (
          <div>
              <header className="site-header jumbotron">
                  <div className="container">
                      <div className="row">
                      <div className="col-xs-12">
                      </div>
                      </div>
                  </div>
              </header>
              <div className="container">
                  <CommentAdd />
                  <CommentList comments={ comments } delComment={ this.delComment } />
              </div>
          </div>
      );
  }
}

export default Comment;

