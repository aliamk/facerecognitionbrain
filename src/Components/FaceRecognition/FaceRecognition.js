import React from 'react';
import './FaceRecognition.css'



const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className="absolute mt2">
        <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  )
}

export default FaceRecognition

//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNBQIVt5nHut7ku-MewbsOxfL-Uap-QorMsL2MTnbdmZaH6yY3&usqp=CAU