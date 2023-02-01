import React from 'react'
import {FaSearch} from "react-icons/fa"

const SignUp = () => {
  return (
    <div style={{height:'200px',gap:'24px',margin:'30px auto',textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div>
            <div style={{fontSize:'2rem',fontWeight:'800'}}>Stay In The Know</div>
            <div style={{fontSize:'0.8rem',fontWeight:'500'}}>Sign up to get first dibs on new launches, promos, 20% off your first purchase, and other news.</div>
        </div>
        <div>
            <div style={{fontSize:'0.65rem',color:'#34495e',fontWeight:'700',width:'24%',margin:'auto',textAlign:'left',marginBottom:'3px',textTransform:'uppercase'}}>Email Adderss</div>
            <div className="Search_bar" style={{border:'1px solid black',margin:'auto'}}>
                <input type="text" name='signup' placeholder="" />
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'16px'}}>
                <button className='Search_bar' style={{marginLeft:'0',background:'#34495e',border:'none',textTransform:'uppercase',fontWeight:'600',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'0.7rem'}}>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp