import React from 'react';
import {useState, useEffect} from 'react';
import ServiceForm from '../components/ServiceForm/ServiceForm';
import ApiServiceForm from '../components/ServiceForm/ApiServiceForm';
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'


function ServiceSection() {

    const [services, setServices] = useState ([])
    const [editService, setEditService] = useState(null)

    const [token , setToken, removeToken] = useCookies(['mytoken'])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/services/',{
            'method':'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token['mytoken']}`
            }
        })
        .then(resp => resp.json())
        .then(resp => setServices(resp))
        .catch(error => console.log(error))

    }, [])

    useEffect(()=>{
        if(!token['mytoken']){
            window.location.href = '/'
        }
    }, [token])

    let history = useHistory()

    const editBtn = (service) =>{
        setEditService(service)
    }

    const updateInformation = (service) =>{
        const new_service = services.map(my_service => {
            if (my_service.id === service.id){
                return service
            }
            else{
                return my_service
            }
        })

        setServices(new_service)
    }
    
    const formService = () =>{
        setEditService({title:'', description:''})
    }

    const insertedInfo = (service) => {
        const new_services = [...services, service ]
        setServices(new_services)
    }

    // función delete en desarrollo.

    const deleteBtn = (service)=>{
        //futura renderización de los aliminados

        const new_services = services.filter(myservice => {
            if (myservice.id === service.id){
                return false
            }
            return true;
        })
        ApiServiceForm.DeleteService(service.id, token['mytoken'])
        .then (() => deleteBtn(service))
        .catch (error => console.log(error))

        setServices(new_services)
    }
    const logoutBtn = () =>{
        removeToken(['mytoken'])
    }

    return (
        <div>
            <h1>Servicios disponibles</h1>
            {services.map(service => {
                return(
                    <div key = {service.id}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>

                        <div>
                            <button onClick = {()=>editBtn(service)}>Update</button>
                            <button onClick = {()=>deleteBtn(service)}>Delete</button>
                        </div>

                        <hr/>
                       
                    </div>
                    )
            })}
            {editService ? <ServiceForm service = {editService} updateInformation = {updateInformation} insertedInfo = {insertedInfo}/> : null}
            <br/>
            <div>
                <button onClick = {formService}>Add a new service</button>
            </div>
            <br/>
            <hr/>
            <div>
                <button onClick = {logoutBtn}>Logout</button>
            </div>

        </div>
    )
}

export default ServiceSection;
