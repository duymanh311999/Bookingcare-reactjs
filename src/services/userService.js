import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', {email: userEmail, password: userPassword})
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`, )
}

const creataNewUserServie = (data) => {
    console.log('check data from vervice:', data)
    return axios.post('/api/create-new-users', data)
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', 
    {
        data: {
            id: userId
        }
    });
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`, )
}

const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}

const saveDetailDoctorService = (data) => {
    return axios.post('/api/save-infor-doctors', data)
}

const getDetailInforDoctor = (inPutId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inPutId}`)
}



export {handleLoginApi, getAllUsers, creataNewUserServie, deleteUserService,
     editUserService, getAllCodeService, getTopDoctorHomeService, getAllDoctors, 
     saveDetailDoctorService, getDetailInforDoctor,
    }