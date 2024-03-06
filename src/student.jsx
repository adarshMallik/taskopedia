import React from "react"

export default function Students({fullname,programmingExp,headshot,children}){
  
    return(
      <div className="col-4 p-1">
          
         <div className="row border">
         <div className="col-2">
           <img src={headshot} className="w-100 py-2"></img>
         </div>
         <div className="col-8">
          {fullname}<br/>
          Programming experience {programmingExp} years
         </div>
         <div className="col-2">{children}</div>
     
         </div>
         
      </div>
    )
  }