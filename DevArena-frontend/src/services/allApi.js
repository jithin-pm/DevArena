import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";


//for student registration
export const studentRegistrationApi = async (reqBody) => {
    return await commonApi("post", `${BASE_URL}/studentRegistration`, reqBody, "")
}

//for contact data submission
export const sendContactMessageApi = async (reqBody) => {
    return await commonApi("post", `${BASE_URL}/sendContactMessage`, reqBody, "")
}

//admin Login
export const adminLoginApi = async(loginData)=>{
    console.log("loginData:::",loginData);
return await commonApi("post",`${BASE_URL}/admin/login`,loginData,"")
}


//fetch registered student
export const fetchRegisteredStudentsApi =async () => {
    return await commonApi("get",`${BASE_URL}/admin/registeredStudents`,"","")
}

//delete registered students
export const deleteRegisteredStudentsApi = async (studentId) => {
  return await commonApi("delete", `${BASE_URL}/admin/deleteStudent/${studentId}`);
};
