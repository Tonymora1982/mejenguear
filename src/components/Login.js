import React from 'react';
export default

function Login(props) {
 return (
 <div className="Login" >
    <form>
       <div className="input-container">
         <label>Usuario </label>
         <input type="text" name="uname" required />
        
       </div>
       <div className="input-container">
         <label>Contraseña </label>
         <input type="password" name="pass" required />
   
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>

       <div>
        <a href=''> Olvido su contraseña? </a>
       </div>
     </form>
 </div>   
 )

}