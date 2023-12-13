// import axios from "axios"
// import { method } from "../../Utils/utils"

// export const getData = ()=>{
//     return {
//         type: method.get,
//     }
// }

// export const postData = (obj)=>{
//     return {
//         type: method.post,
//         payload: obj
//     }
// }

// export const putDataById = (id,result)=>{
//     return {
//         type: method.put,
//         payload: {id,result}
//     }
// }

// export const deleteDataById = (id)=>{
//     return {
//         type: method.delete,
//         payload: id
//     }
// }

// export const changeStatus = (id ,checked) =>{
//     return {
//         type:`${method.put}/done`,
//         payload:{id, checked}
//     }
// }

// export const clearStatus = () =>{
//     return {
//         type:`${method.put}/restore-done`,
//     }
// }


// // export const GetTodos = () => {
// //     console.log("GetTodos");

// //     return dispatch => {
// //         console.log("GetUsers dispatch");

// //         axios.get(`https://reqres.in/api/users`)
// //         .then(res => {
// //             const persons = res.data;

// //             dispatch({
// //                 type: GET_USERS,
// //                 users: response
// //             });
// //         })
// //     };
// // };

// // export const AddUser = (params) => {
// //     console.log("AddUser");

// //     return dispatch => {
// //         console.log("Add User dispatch");

// //         axios.post(`https://reqres.in/api/users`, {params})
// //         .then(response => {
// //             console.log(response);

// //             axios.get(`https://reqres.in/api/users`)
// //             .then(res => {
// //                 console.log(res);

// //                 dispatch({
// //                     type: GET_USERS,
// //                     users: response
// //                 });
// //             })
// //         })
// //     };
// // };