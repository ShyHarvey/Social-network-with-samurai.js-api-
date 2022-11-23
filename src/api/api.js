import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "a0a5a163-ead6-45bf-a43d-71952bb33bb3"
    }
})

export const usersAPI = {
    getUsers(currentPage = 3, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    setPage(numberOfPage, pageSize) {
        return instance.get(`users?page=${numberOfPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id){
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
};

export const authAPI = {
    getUserData(){
        return instance.get("auth/me")
            .then(response => response.data)
    },
};


export const profileAPI = {
    getProfileById(id){
        return instance.get(`profile/${id}`)
        .then(response => response.data)
    },
    getStatusById(id){
        return instance.get(`/profile/status/${id}`)
        .then(response => response.data)
    }
}


