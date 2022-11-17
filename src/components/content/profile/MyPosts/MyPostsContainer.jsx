import React from 'react';
import Posts from './MyPosts';
import "./posts.scss";
import{changeNewPostTextActionCreator,addPostActionCreator} from '../../../../redux/profileReducer';
import {useDispatch, useSelector} from 'react-redux'

function PostsContainer(props) {
    
    const dispatch = useDispatch();
    let state = useSelector(state => state.profileReducer);
    
    let onPostChange = (text) =>{
        dispatch(changeNewPostTextActionCreator(text))
    };

    let addPost = () =>{ 
        dispatch(addPostActionCreator())
    } ;

    return (
        <Posts newPostText={state.newPostText} addPost={addPost} onPostChange={onPostChange}  data={state.postsData} />
    )

}
export default PostsContainer;