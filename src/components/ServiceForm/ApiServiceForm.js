export default class ApiServiceForm{
    static UpdateService(service_id, body, token){
        return fetch (`http://127.0.0.1:8000/api/services/${service_id}/`, {
        'method':'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(body)
    }) .then(resp => resp.json())
}

    static InsertService (body, token){
        return fetch(`http://127.0.0.1:8000/api/services/`, {
            'method':'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteService (service_id, token){
        return fetch (`http://127.0.0.1:8000/api/services/${service_id}/`, {
        'method':'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        }
        
    }) .then(resp => resp.json())

    }

    static LoginUser (body){
        return fetch(`http://127.0.0.1:8000/auth/`, {
            'method':'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static RegisterUser (body){
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            'method':'POST',
        headers: {
            'Content-Type': 'application/json',
            },
        body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}