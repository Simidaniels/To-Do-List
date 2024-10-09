import React from "react";

 const ProgressBoard = () => {
     return (
         <div className="profile-wrapper">
         <div className="profile">
             <img src={require('./dread.png')} alt='' className='img' />
             <div className="profile-txt">
                 <h2>Daniel Adepitan</h2>
                 <p>Front-End Developer</p>
             </div>
         </div>
         <div className="rng-container">
             <h2>Task Progress</h2>
             <p>Management Activities<small>37%</small></p>
             <input
                 className="rng col-1"
                 type="range"
                 min='0'
                 max='50'
             />
             <p>Project Planning<small>8%</small></p>
             <input
                 className="rng col-2"
                 type="range"
                 min='0'
                 max='50'
             />
             <p>Build/Develop<small>34%</small></p>
             <input
                 className="rng col-3"
                 type="range"
                 min='0'
                 max='50'
             />
             <p>Integration Test<small>35%</small></p>
             <input
                 className="rng col-4"
                 type="range"
                 min='0'
                 max='50'
             />
             <p>Integration Planning<small>12%</small></p>
             <input
                 className="rng col-5"
                 type="range"
                 min='0'
                 max='50'
             />
             <p>Training Planning<small>18%</small></p>
             <input
                 className="rng col-6"
                 type="range"
                 min='0'
                 max='50'
             />
             <p>Proof of Concept<small>20%</small></p>
             <input
                 className="rng col-7"
                 type="range"
                 min='0'
                 max='50'
             />    
         </div>
         </div>
     )
 }
 export default ProgressBoard;

