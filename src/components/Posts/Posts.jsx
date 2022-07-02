import React from "react";
import s from './Posts.module.css'
import Post from './Post'
import {updatePostSymbolsCreator} from './../../bll/state'
import {sendPostCreator} from './../../bll/state'
const Posts = (props) => {

    let newPostsArray=props.posts.map(el => <Post message={el.message} />);
    let newPost=React.createRef();
    const sendPost = () => {
    props.dispatch(sendPostCreator())
    }
    let currentSymbols = () => {
        let text = newPost.current.value;
        props.dispatch(updatePostSymbolsCreator(text));


 
    }

    return (<div className={s.posts}>
        <div>
            {newPostsArray}
        </div>
        <textarea ref={newPost} onChange={currentSymbols} value={props.currentSymbolsInArea}/>
        <div><button onClick={ sendPost }>Send</button></div>
        
</div>
    )
}
export default Posts;