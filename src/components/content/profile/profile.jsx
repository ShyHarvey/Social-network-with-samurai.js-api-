import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";
import './profile.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfileAC } from "../../../redux/profileReducer";
import { profileAPI } from "../../../api/api";
import { useParams } from "react-router-dom";



function Profile(props) {

    const profileState = useSelector(state => state.profileReducer);
    const dispatch = useDispatch();

    let setUserProfile = (profile) => dispatch(setUserProfileAC(profile));
    let { id } = useParams()
    useEffect(() => {
        profileAPI.getProfileById(id)
            .then((data) => {
                    setUserProfile(data)
            })
    }, [id])

    return (
        <div className="profile p-3">
            <ProfileInfo profile={profileState.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
