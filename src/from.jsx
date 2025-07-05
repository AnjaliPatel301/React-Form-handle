import React, { useState } from 'react'

function form() {

  let [email,setemail] = useState('Aanj@gamil.com')
  let [password,setpassword] = useState('62Sg@221')
  let [city,setcity] = useState('indore')
  let [address,setaddress] = useState('tejaji nagar')


  function handleForm(e){
    e.preventDefault()
  }
  return (
    <>
<div>
 <h1 class="text-center mb-7 text-primary fw-bold" >Login Page</h1>
                  <form class="row g-3 px-5" onSubmit={handleForm}>
  <div class="col-md-6">
    <label for="inputEmail4" className="form-label" >Email</label>
    <input type="email" class="form-control" id="inputEmail4" 
    value={email}
     onChange={((e)=>
      {setemail(e.target.value)})}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" 
    value={password}
    onChange={((e)=>
      {setpassword(e.target.value)})}
    />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" 
    value={address}
    onChange={((e)=>
      {setaddress(e.target.value)})}
    />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"
     value={city}
     onChange={((e)=>
      {setcity(e.target.value)})}
     />
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
         
</div>
    </>
  )
}

export default form
