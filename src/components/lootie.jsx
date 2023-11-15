import React from 'react'
import Lottie from 'lottie-react';

function Get_Lootie({src}) {
  return (
    <div>
         <Lottie
                     animationData={src}
                     className="flex justify-center items-center"
                     loop={true}
                  />
    </div>
  )
}

export default Get_Lootie