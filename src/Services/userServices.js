
import axios from 'axios';
const token=localStorage.getItem('token')
//const baseUrl = "http://localhost:7777"
//used to send registered data to server

export function getAllNotes(){
console.log("token===>"+token);

return axios.get('http://localhost:7777/getAllNotes',{
    headers : {
            "token" : token
        }
})

}


export function createNote(title,description){
    console.log("data in service"+title);
    var createNoteData={
        title:title,
        description:description
    }
    
    return axios.post('http://localhost:7777/createnote',createNoteData,{
        headers : {
            "token" : token
        }
    }
        )
}


export function userRegister(data) {
    return axios.post(`http://localhost:7777/register`,data);
}
//send login data to server

export function userLogin(data) {
    console.log("data in service  ===>",data);
    
    return axios.post('http://localhost:7777/login', data);
}

export function userForgot(data) {
    console.log("data in service  ===>",data);
    
    return axios.post('http://localhost:7777/forgetPassword', data);
}

export function trashNote(data){
    console.log("token in trashNote frontend service"+token);
    
    return axios.post('http://localhost:7777/deletenote',data,{
    headers:{
    
        "token":token
    }
    })
}