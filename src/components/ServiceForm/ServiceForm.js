import React, {useState, useEffect} from 'react';
import ApiServiceForm from './ApiServiceForm';
import {useCookies} from 'react-cookie'

function ServiceForm(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [token] = useCookies(['mytoken'])

    useEffect(() =>{
        setTitle(props.service.title)
        setDescription(props.service.description)
    }, [props.service])

    const updateService = () => {
        ApiServiceForm.UpdateService(props.service.id, {title, description}, token['mytoken'])
        .then (resp => props.updateInformation(resp))
    }

    const insertService = () =>{
        ApiServiceForm.InsertService({title, description}, token['mytoken'])
        .then (resp => props.insertedInfo(resp))
    }
    return (
        <div>
            {props.service ? (

                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="enter the title"
                    value = {title} onChange = {e => setTitle(e.target.value)}/>

                    <label htmlFor="description">Description</label>
                    <textarea id = "description" rows = "5" 
                     value = {description} onChange = {e => setDescription(e.target.value)}></textarea>
                    <br/>
                    {
                        props.service.id ? <button onClick = {updateService}>Update</button> : <button onClick = {insertService}>Insert Service</button>

                    }
                    
                </div>

            ) : null}
        </div>
    )
}

export default ServiceForm
