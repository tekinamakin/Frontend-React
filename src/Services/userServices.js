
import axios from 'axios';

const baseUrl = require('../config/key').baseUrl
const token = localStorage.getItem('token')

export function createNote(title, description) {
    console.log("data in service" + title);
    var createNoteData = {
        title: title,
        description: description
    }

    return axios.post(baseUrl + 'createnote', createNoteData, {
        headers: {
            "token": token
        }
    }
    )
}


export function userRegister(data) {
    return axios.post(baseUrl + `register`, data);
}
//send login data to server

export function userLogin(data) {
    console.log("data in service  ===>", data);

    return axios.post(baseUrl + 'login', data);
}

export function userForgot(data) {
    console.log("data in service  ===>", data);

    return axios.post(baseUrl + 'forgetPassword', data);
}

export function trashNote(data) {
    console.log("token in trashNote frontend service" + token);

    return axios.post(baseUrl + 'deletenote', data, {
        headers: {

            "token": token
        }
    })
}

export function getAllNotes() {
    console.log("token===>" + token);

    return axios.get(baseUrl + 'getAllNotes', {
        headers: {
            "token": token
        }
    })

}

export function updateNote(data) {
    console.log("printing data in updateNote", JSON.stringify(data));


    return axios.post(baseUrl + "updateNote", data, {
        headers: {
            "token": token
        }
    }
    )
}

export function getAllTrashedNotes() {

    return axios.get(baseUrl + 'getAllTrashed', {
        headers: {
            "token": token
        }
    })


}

export function noteArchived(data) {
    console.log("token in trashNote frontend service" + token);

    return axios.post(baseUrl + 'archive', data, {
        headers: {

            "token": token
        }
    })
}

export function getAllArchived() {
    console.log("Inside of service getAllArchive react");

    return axios.get(baseUrl + "getArchivedNotes", {

        headers: {
            "token": token
        }
    })


}

export function getAllReminder() {
    return axios.get(baseUrl + "getAllReminder", {
        headers: {
            "token": token
        }
    })

}

export function DrawerLabelGet() {
    return axios.get(baseUrl + "getLabel", {
        headers: {
            "token": token
        }
    })


}

export function CreateLabel(data) {
    return axios.post(baseUrl + "createlabel", data, {
        headers: {
            "token": token
        }
    })

}