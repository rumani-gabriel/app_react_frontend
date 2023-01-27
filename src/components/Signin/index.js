import React, {useEffect, useState} from 'react'
import { FormButton, Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, Text  } from './SigninElements'
import ApiServiceForm from '../ServiceForm/ApiServiceForm'
import {useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'
import emailjs from 'emailjs-com'


const SignIn = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')

    let history = useHistory()

    
    function sendEmail(e) {
        e.preventDefault();
           
        emailjs.sendForm(
         'service_u5ong4i',
         'template_fzqp01x',
          e.target,
          'user_XgmLd6R7ZJgNOjGiux5Ei')
          .then((result) => {
              alert('We send you a email')
          }
          );
      }

    useEffect(()=>{
        if(token['mytoken']){
            history.push('/servicesection')
        }
    }, [token])


    const loginBtn = () =>{
        ApiServiceForm.LoginUser({username, password})
        .then(resp => setToken('mytoken', resp.token))
        .catch(error => console.log(error))
    }
    
    const registernBtn = () =>{
        ApiServiceForm.RegisterUser({username, password})
        .then(() => loginBtn())
        .catch(error => console.log(error))
                        
    }

                                    
    return (
        <>
          <Container>
              <FormWrap>
              <Icon to="/">LOGO</Icon>
              <FormContent>
                  { isLogin ? <Form action='#'>
                    <FormH1>Please Login</FormH1>
                    <FormLabel htmlFor='username'>Username</FormLabel>
                      <FormInput type='text' id="username" value={username} onChange = {e => setUsername(e.target.value)}/>

                    <FormLabel htmlFor='password'>Password</FormLabel>
                      <FormInput type='password' id="password" value={password} onChange = {e => setPassword (e.target.value)}/>
                      <FormButton onClick = {loginBtn}>Login</FormButton>
                      <Text>If you don't have Account, please <FormButton onClick = {()=>setIsLogin(false)}>Register</FormButton></Text>

                  </Form> :
                  <Form  onSubmit={sendEmail} action='#'>
                      <FormH1>Please Register</FormH1>
                      <FormLabel htmlFor='email'>Email</FormLabel>
                      <FormInput type='text' id="email" name="email" value={email} onChange = {e => setEmail(e.target.value)}/> 
                      <FormLabel htmlFor='username'>Username</FormLabel>
                      <FormInput type='text' id="username" name="username" value={username} onChange = {e => setUsername(e.target.value)}/>

                      <FormLabel htmlFor='password'>Password</FormLabel>
                      <FormInput type='password' id="password" name="password" value={password} onChange = {e => setPassword (e.target.value)}/>
                      
                      <FormButton  onClick = {registernBtn} type="submit" value="Send" >Register</FormButton>

                      <Text>If you have an Account, please <FormButton onClick = {()=>setIsLogin(true)}>Login</FormButton></Text>                      

                      </Form>}
                
              </FormContent>
            </FormWrap>
          </Container>  
        </>
    )
}

export default SignIn
