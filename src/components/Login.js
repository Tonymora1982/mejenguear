import React from 'react';
export default

function Login() {
 return (
 <div className='contenedor-login'>
    <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
        
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
   
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
       <div>
        <a className=''> Olvido su contraseña? </a>
       </div>
     </form>
 </div>   
 )

}