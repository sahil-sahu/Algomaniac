import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useState} from 'react'
import ImageLight from '../assets/img/create-account-office.jpeg'
import ImageDark from '../assets/img/create-account-office-dark.jpeg'
//import { GithubIcon, TwitterIcon } from '../icons'
import { Input, Label,Button } from '@windmill/react-ui'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [typeuser,setTypeUser] = useState('false');
  const history = useHistory()
  

  const RegisterUser = async () =>{
    let formField = new FormData()
    formField.append('email',email)
    formField.append('name',name)
    formField.append('number',number)
    formField.append('password',password)
    formField.append('password2',password2)
    formField.append('typeuser',typeuser)
    if(password!==password2)
    {
      alert("Confirm Password Do not match!!")
    }
    else
    {
      await axios({
        method:'post',
        url:'http://127.0.0.1:8000/api/',
        data: formField
      }).then((response) => {
        console.log(response.data);
        history.push('/')
      })
    }
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
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" id="email" type="email" placeholder="john@doe.com" onChange={(e) => setEmail(e.target.value)} value={email} />
              </Label>
              <Label>
                <span>Name</span>
                <Input className="mt-1" type="text" placeholder="Example" id="name" onChange = {(e) => setName(e.target.value)} value={name} />
              </Label>
              <Label>
                <span>Number</span>
                <Input className="mt-1" type="number" placeholder="1234567890" id="number" onChange = {(e) => setNumber(e.target.value)} value={number}  />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" placeholder="***************" type="password" id="password" onChange = {(e) => setPassword(e.target.value)} value={password}  />
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input className="mt-1" placeholder="***************" type="password" id="password2" onChange = {(e) => setPassword2(e.target.value)} value={password2} />
              </Label>

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button tag={Link} to="/login" block className="mt-4" onClick = {RegisterUser}>
                Create account
              </Button>

              <hr className="my-8" />

              {/* <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button block className="mt-4" layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button> */}

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
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
