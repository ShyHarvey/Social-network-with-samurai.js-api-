import React from 'react';
import Posts from './MyPosts';
import "./posts.scss";
import{changeNewPostTextActionCreator,addPostActionCreator} from '../../../../redux/profileReducer';
import {useDispatch, useSelector} from 'react-redux'

function PostsContainer(props) {

    const dispatch = useDispatch();
    let postsData = useSelector(state => state.profileReducer.postsData);
    let newPostText = useSelector(state => state.profileReducer.newPostText);
    
    let onPostChange = (text) =>{
        dispatch(changeNewPostTextActionCreator(text))
    };

    let addPost = () =>{ 
        dispatch(addPostActionCreator())
    } ;

    return (
        <Posts newPostText={newPostText} addPost={addPost} onPostChange={onPostChange}  data={postsData} />
    )

}
export default React.memo(PostsContainer);