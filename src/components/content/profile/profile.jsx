import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";
import './profile.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, setStatus, updateStatus } from "../../../redux/profileReducer";
// eslint-disable-next-line no-unused-vars
import { useParams, Navigate } from "react-router-dom";



function Profile(props) {

    const profileState = useSelector(state => state.profileReducer);
    const isAuth = useSelector(state => state.authReducer.isAuth);
    let autorizedUserId = useSelector(state => state.authReducer.id)
    const dispatch = useDispatch();



    const updateProfileStatus = (status) => dispatch(updateStatus(status))

    let { id } = useParams()
    useEffect(() => {
        if(!id){
            dispatch(getProfile(autorizedUserId))
        }
        dispatch(getProfile(id))

        dispatch(setStatus(id))
    }, [id, dispatch, autorizedUserId])
    
    if (!isAuth) {
        return <Navigate to="/login"/>
    } 

    return (
        <div className="profile p-3">
            <ProfileInfo profile={profileState.profile} updateStatus={updateProfileStatus} status={profileState.status} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
