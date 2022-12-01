import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import {useState} from 'react'
import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'
import axios from 'axios'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const history = useHistory();
  const LoginUser = async () =>{
    console.log(email,password)
    let formField = new FormData()
    formField.append('email',email)
    formField.append('password',password)

    await axios({
      method:'post',
      url:'http://127.0.0.1:8000/api/',
      data: formField
    }).then((response) => {
      console.log(response.data);
      // if(typeof(response.data)==Boolean){
      //   alert("User Does Not Exist!! Please Create an Account");
      //   history.push('/create-account')}
      // else if (typeof(response.data)==String){
      //   history.push({pathname:'/app',state:response.data})
      // }
      // else
        history.push('/');
    })
  };
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" id="email" type="email" placeholder="john@doe.com" onChange = {(e) => setEmail(e.target.value)} value={email}/>
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" id="password" type="password" placeholder="***************" onChange = {(e) => setPassword(e.target.value)} value={password} />
              </Label>

              <Button className="mt-4" onClick = {LoginUser}>
                Log in
              </Button>

              <hr className="my-8" />

              {/* <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button className="mt-4" block layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button> */}

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
