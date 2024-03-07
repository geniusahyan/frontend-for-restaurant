import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { login, logout } from '../features/AuthSlice';
import Background from '/background.jpg';
import { addUser, getUser } from '../api/route';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({islogin, login, logout}) => {

  const notify = (message) => toast(message);
  
  const [username, setUsername] = useState('')
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [LogSign, setLogSign] = useState(true);
  
  let localLogin = localStorage.getItem("loginEmail");
  useEffect(()=>{
    if (localLogin) {
      login();
    }else{
      logout();
    }
  },[localLogin])

  const handlePassChange = (data)=>{
    setPassword(data.target.value);
  }
  const handleUsernameChange = (data)=>{
    setUsername(data.target.value);
  }
  const handleEmailChange = (data)=>{
    setemail(data.target.value);
  }
  const handleLoginSubmit = async (e)=>{
    e.preventDefault();
    const user = await getUser({email,password})
    setemail('');
    setPassword('');
    if (user != undefined) {
      localStorage.setItem('loginEmail', email);
      login() ;
    }else{
      notify("Invalid email or password")
    }
  }
  const handleSignSubmit = async (e)=>{
    e.preventDefault();
    await addUser({username, email, password})
    console.log(username, email, password)
    setemail('');
    setPassword('');
    setUsername('');
    localStorage.setItem('loginEmail', email);
  }



  const signinpage = (
    <div className="glass md:w-[30rem] w-[20rem]  h-[40rem] bg-[#2ba9ad7a] p-2 box-border rounded-sm  ">
        <h1 className="text-4xl mx-auto w-[16rem] uppercase font-bold text-[#2bc8d3] mt-8" >Restaurant</h1>
        <h1 className="text-4xl font-bold text-[#2bc8d3] mt-8">Sign In</h1>
        <form onSubmit={handleSignSubmit} className="flex  flex-col gap-y-5 mt-10">

          {/* email */}
            <input 
            type="text" 
            name="username" 
            id="username" 
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter Your Username" 
            className="input input-bordered h-16 text-xl text-white bg-transparent input-info mx-5" required />

            <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={handleEmailChange}
            placeholder="Email Address" 
            className="input input-bordered h-16 text-xl text-white bg-transparent input-info mx-5" required/>

          {/* password */}
            <input 
            type="password" 
            onChange={handlePassChange}
            name="password" 
            value={password}
            id="password" 
            placeholder="Enter Your Password" 
            className="input  h-16 input-bordered input-info mx-5 text-xl bg-transparent" required/>

            <button type='submit' className='btn bg-blue-200 w-[12rem] border-none text-xl hover:bg-blue-400 mx-auto ' > Create </button>
        </form>
        <div className=" text-center flex flex-col gap-6 text-white my-4  "> 
          <p className="text-xl text-[#0000009d]">Already have an account?</p>
          <button onClick={()=>setLogSign(!LogSign)} className='btn bg-blue-200 w-[18rem] md:w-[20rem] border-none text-xl hover:bg-blue-400 mx-auto ' > Log In </button>
        </div>
    </div>
)
const loginpage = (
    <div className="glass md:w-[30rem] w-[20rem] h-[40rem] bg-[#2ba9ad7a] p-2 box-border rounded-sm  ">
        <h1 className="text-4xl mx-auto w-[16rem] uppercase font-bold text-[#2bc8d3] mt-8" >Restaurant</h1>
        <h1 className="text-4xl font-bold text-[#2bc8d3] mt-8">Login</h1>
        <form onSubmit={handleLoginSubmit} className="flex  flex-col gap-y-10 mt-16">

          {/* email */}
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={handleEmailChange}
            placeholder="Email Address" 
            className="input input-bordered h-16 text-xl text-white bg-transparent input-info mx-5" />

          {/* password */}
            <input 
            type="password" 
            onChange={handlePassChange}
            name="password" 
            value={password}
            id="password" 
            placeholder="Enter Your Password" 
            className="input  h-16 input-bordered input-info mx-5 text-xl bg-transparent" />

            <button type='submit' className='btn bg-blue-200 w-[12rem] border-none text-xl hover:bg-blue-400 mx-auto ' > Login </button>
        </form>
        <div className=" text-center flex flex-col gap-6 text-white my-4  "> 
          <p className="text-xl text-[#0000009d]">Don't have an account?</p>
          <button onClick={()=>setLogSign(!LogSign)} className='btn bg-blue-200 w-[18rem] md:w-[20rem] border-none text-xl hover:bg-blue-400 mx-auto ' > Sign In </button>
        </div>
    </div>
)


  return (
    <div className={`w-screen h-screen  bg-[url('${Background}')] bg-cover box-border flex justify-center items-center`} >
        {
          LogSign ? loginpage : signinpage 
        }
        <ToastContainer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  islogin: state.auth.islogin,
});

export default connect(mapStateToProps, { login, logout })(Login);