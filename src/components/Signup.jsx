import React, {useState} from 'react'

const Signup = () => {
    const [state,setState] = useState({fname:"",lname:"",dob:"",gender:"",phone:"",password:"",cpass:""});

    const [error,setError] = useState("")

    const handleRadio = (e) => {
        if(e.target.checked)
        {
            setState({...state,gender:e.target.value});
        }
    }
    const handleCurrentPassword = (e)=>
    {
        // if(e.target.value === state.password)
        // {
        //     setState({...state,cpass:e.target.value});
        // }
        if (state.password && e.target.value !== state.password) {
           setError("Password and Confirm Password does not match.");
        }
        else
        {
            setState({...state,cpass:e.target.value});
        }
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(state);
        setState({...state,fname:"",lname:"",dob:"",gender:"",phone:"",password:"",cpass:""});
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 bg-info p-5'>
                        <h1 className='text-center text-danger'>SIGN UP FORM {state.cpass} {state.password}</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6 mt-4'>
                                    <label className="form-label">First Name</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="firstName" 
                                    required={true}
                                    onChange={(e)=>setState({...state,fname:e.target.value})}
                                    value={state.fname}
                                    />
                                </div>
                                <div className='col-md-6 mt-4'>
                                    <label className="form-label">Last Name</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastName"
                                    required={true} 
                                    onChange={(e)=>setState({...state,lname:e.target.value})}
                                    value={state.lname}
                                    />
                                </div>
                                <div className='col-md-6 mt-4'>
                                    <label className="form-label">Date Of Birth</label>
                                    <input 
                                    type="datetime-local"
                                    name='dob' 
                                    className="form-control" 
                                    id="dob" 
                                    required={true}
                                    onChange={(e)=>setState({...state,dob:e.target.value})}
                                    value={state.dob}
                                    />
                                </div>
                                <div className='col-md-6 mt-4'>
                                    <label className="form-label">Choose Gender</label>
                                    <div id='gen'>
                                        <input 
                                        type={"radio"} 
                                        name='gender' 
                                        value={"Male"}
                                        required={true}
                                        onChange={handleRadio} 
                                        />
                                        <label className='ms-2'>Male</label>
                                        <input 
                                        type={"radio"} 
                                        className="ms-3" 
                                        name='gender' 
                                        value={"Female"} 
                                        required={true}
                                        onChange={handleRadio}
                                        />
                                        <label className='ms-2'>Female</label>
                                    </div>
                                </div>
                                <div className='col-md-12 mt-4'>
                                    <label className="form-label">Phone Number</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="phoneNumber" 
                                    name='number'
                                    required={true}
                                    onChange={(e)=>setState({...state,phone:e.target.value})}
                                    value={state.phone}
                                    />
                                </div>
                                <div className='col-md-6 mt-4'>
                                    <label className="form-label">Password</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="pass"
                                    required={true}
                                    onChange={(e)=>setState({...state,password:e.target.value})}
                                    value={state.password}
                                    />
                                </div>
                                <div className='col-md-6 mt-4'>
                                    <label className="form-label">Confirm Password</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="cpass"
                                    required={true}
                                    onChange={handleCurrentPassword}
                                    />
                                    {error && <span style={{color:"red"}}>{error}</span>}
                                </div>
                                <div className='col-md-12 mt-5'>
                                    <button className='btn btn-primary btn-lg w-100' >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup