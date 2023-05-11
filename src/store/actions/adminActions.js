import actionTypes from './actionTypes';
import { getAllCodeService, creataNewUserServie, getAllUsers, 
    deleteUserService, editUserService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService } from '../../services/userService';
import { toast } from "react-toastify";

export const fetchGenderStart =  () => {
    return async (dispatch, getState) => {
        try {
            dispatch ({type: actionTypes.FETCH_GENDER_START})
            let res = await getAllCodeService("GENDER");
            if(res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFaided());
            }
         } catch (e) {
            dispatch(fetchGenderFaided());
            console.log('fetchGenderStart error', e)
         }
    }
}


export const fetchPositionStart =  () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if(res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFaided());
            }
         } catch (e) {
            dispatch(fetchPositionFaided());
            console.log('fetchPositionStart error', e)
         }
    }
}

export const fetchRoleStart =  () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if(res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {    
                dispatch(fetchRoleFaided());
            }
         } catch (e) {
            dispatch(fetchRoleFaided());
            console.log('fetchRoleStart error', e)
         }
    }
}



export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})


export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFaided = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED
})


export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFaided = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})


export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await creataNewUserServie(data);
            if(res && res.errCode === 0) {
                toast.success("Create a new user succeed");
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart())  ;
            } else {
                toast.error("Create a new user error!");
                dispatch(saveUserFailed());
            }
         } catch (e) {
            toast.error("Create a new user error!");
            dispatch(saveUserFailed());
            console.log('saveUserFailed error', e)
         }
    }
}


export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})


export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
});


export const fetchAllUsersStart =  () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL");
            if(res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                dispatch(fetchAllUsersFaided());
            }
         } catch (e) {
            dispatch(fetchAllUsersFaided());
            console.log('fetchAllUsersFaided error', e)
         }
    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFaided = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})


export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);      
            if(res && res.errCode === 0) {
                toast.success("Delete a new user succeed");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart())  ;
            } else {
                toast.error("Delete a new user error!");
                dispatch(deleteUserFailed());
            }
         } catch (e) {
            toast.error("Delete a new user error!");
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed error', e)
         }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);      
            if(res && res.errCode === 0) {
                toast.success("Update a new user succeed");
                dispatch(EditUserSuccess());
                dispatch(fetchAllUsersStart())  ;
            } else {
                toast.error("Update a new user error!");
                dispatch(EditUserFailed());
            }
         } catch (e) {
            toast.error("Update a new user error!");
            dispatch(EditUserFailed());
            console.log('editUserFailed error', e)
         }
    }
}

export const EditUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const EditUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('');
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
                })
            }
         } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILED:', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
            })
         }
    } 
}



export const fetchAllDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
                })
            }
         } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILED:', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
            })
         }
    } 
}

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            if(res && res.errCode === 0){
                toast.success("Save infor detail doctor succeed");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,            
                })
            }else{
                console.log('err res', res)
                toast.error("Save infor detail doctor error");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                })
            }
         } catch (e) {
            toast.error("Save infor detail doctor error");
            console.log('SAVE_DETAIL_DOCTOR_FAILED:', e)
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            })
         }
    } 
}

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");
            if(res && res.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
                })
            }
         } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILED:', e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
            })
         }
    } 
}



export const getRequiredDoctorInfor =  () => {
    return async (dispatch, getState) => {
        try {
            dispatch ({type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START})
            let resPrice = await getAllCodeService("PRICE");
            let resPayment = await getAllCodeService("PAYMENT");
            let resProvince = await getAllCodeService("PROVINCE");
            if(resPrice && resPrice.errCode === 0
                && resPayment && resPayment.errCode === 0
                && resProvince && resProvince.errCode === 0
                ) {
                    let data = {
                        resPrice: resPrice.data,
                        resPayment: resPayment.data,
                        resProvince: resProvince.data
                    }
                dispatch(fetchRequiredDoctorInforSuccess(data));
            } else {
                dispatch(fetchRequiredDoctorInforFaided());
            }
         } catch (e) {
            dispatch(fetchRequiredDoctorInforFaided());
            console.log('getRequiredDoctorInfor error', e)
         }
    }
}

export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData
})

export const fetchRequiredDoctorInforFaided = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAIDED
})
