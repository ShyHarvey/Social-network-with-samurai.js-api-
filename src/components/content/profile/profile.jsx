import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";
import './profile.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../redux/profileReducer";
import { useParams } from "react-router-dom";



function Profile(props) {

    const profileState = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();

    let { id } = useParams()
    useEffect(() => {
        dispatch(getProfile(id))
    }, [id, dispatch])

    return (
        <div className="profile p-3">
            <ProfileInfo profile={profileState.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
