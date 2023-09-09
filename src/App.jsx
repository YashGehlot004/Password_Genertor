import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpperCase ,LowerCase,Number,Symbols } from "./Password/Password";
import copy from 'copy-to-clipboard';



export function App() {
    let [uppercheck,setUppercheck] = useState(false);
    let [lowercheck,setLowercheck] = useState(false);
    let [numbercheck,setNumbercheck] = useState(false);
    let [symbols,setsymbols] = useState(false);
    let [paslength,setPaslength] = useState('')
    let [passwd,setpasswd] = useState('')
    
  let checkData=()=>{
     if(uppercheck===false && lowercheck===false && numbercheck===false && symbols===false){
        toast.error('Please Checked ')
     }
     else{

      let PasswordData = ''
      if(uppercheck){
        PasswordData = PasswordData+UpperCase
      }
      if(lowercheck){
        PasswordData = PasswordData+LowerCase
      }
      if(numbercheck){
        PasswordData = PasswordData+Number
      }
      if(symbols){
        PasswordData = PasswordData+Symbols
      }
      PassCreate(PasswordData)
     
     }

     }
     
     let PassCreate=(passdata)=>{
      let PassLengtn = passdata.length
      let finalPass = ''
      for(let i=0; i<paslength; i++){
        let RandomInd = Math.round(Math.random()*PassLengtn)
        finalPass = finalPass+passdata.charAt(RandomInd)
        setpasswd(finalPass)
      } 
   
  }



      let getValue=()=>{
       copy(passwd)
       toast.success('Copied to Clipboard')
      }



  return (
    <div className='container  '>
      <div className="center max-w-[350px] mx-auto shadow-lg rounded-md m-[60px] p-5 bg-white">
        <h2 className="text-center py-2 text-red-800 font-semibold text-[25px]">Password Generator</h2>
        <div className="flex justify-between number">
          <span className="text-center py-2 text-red-800 font-semibold"> Password Length</span>
          <input value={paslength} onChange={(e)=>setPaslength(e.target.value)} className=" text-center text-red-800 font-semibold  border-red-800  border-2  max-w-[50px]" type="number" />
        </div>
        <div className="flex justify-between">

          <span className="text-center py-2 text-red-800 font-semibold ">Include Uppercase</span>
          <input className=' border-red-800 w-[20px]' onChange={(e)=>setUppercheck(e.target.checked)} type="checkbox" checked={uppercheck}  />

        </div>
        <div className="flex justify-between">

          <span className="text-center py-2 text-red-800 font-semibold ">Include Lowercase</span>
          <input className=' border-red-800 w-[20px]' onChange={(e)=>setLowercheck(e.target.checked)} type="checkbox" checked={lowercheck} />

        </div>
        <div className="flex justify-between ">

          <span className="text-center py-2 text-red-800 font-semibold ">Include Numbers</span>
          <input className=' border-red-800 w-[20px]' onChange={(e)=>setNumbercheck(e.target.checked)} type="checkbox" checked={numbercheck} />

        </div>
        <div className="flex justify-between">

          <span className="text-center py-2 text-red-800 font-semibold ">Include Symbols</span>
          <input className=' border-red-800 w-[20px]' onChange={(e)=>setsymbols(e.target.checked)} type="checkbox" checked={symbols} />

        </div>
        <div className="py-2 ">
          <div className="field relative">
            <input  value={passwd} className=" w-[100%] border-2 px-3 text-[20px] py-2 text-red-800 font-semibold  border-red-800" type="text" placeholder="Password" />
            <svg onClick={getValue} className="icon absolute top-3 text-yellow-300 right-2" viewBox="0 0 384 512" width="12" title="clipboard">
              <path d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z" />
            </svg>
          </div>
          <div className="text-center my-3">
            <button onClick={checkData} className="text-center p-3  rounded-md bg-gradient-to-r from-sky-500 to-indigo-500  font-sans   text-white font-semibold" >Generate Password</button>
          
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}


