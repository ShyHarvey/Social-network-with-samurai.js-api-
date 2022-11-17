import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";
import './profile.scss';
function Profile() {

    return (
        <div className="profile p-3">
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
