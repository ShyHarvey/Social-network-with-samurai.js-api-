import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";
import './profile.scss';
function Profile(props) {

    return (
        <div className="profile p-3">
            <ProfileInfo/>
            <MyPostsContainer newPostText={props.data.newPostText} dispatch={props.dispatch} data={props.data.postsData} />
        </div>
    );
}

export default Profile;
