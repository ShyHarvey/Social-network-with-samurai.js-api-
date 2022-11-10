import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileInfo/profileInfo";
import './profile.scss';
function Profile(props) {

    

    return (
        <div className="profile p-3">
            <ProfileInfo/>
            <MyPosts data={props.data.postsData} />
        </div>
    );
}

export default Profile;
