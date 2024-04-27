import React from 'react'
import '../css-files/ErrorPage.scss'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
export const ErrorPage = () => {
    const ct = 'PAGE NOT EXIST :('
    const name = 'Go back to home';
    const navigate = useNavigate();
    const clickHandler=()=>{
      navigate('/');
    }
  return (
    <div className="error-page">
        <div className='error-type'>404</div>
        <div className="error-content">{ct}</div>
        <div className='warning-content'>The page you are looking for does not exist. How you got here is mystery. But you can click the button to go back to homepage.</div>
        <div className='error-button' onClick={clickHandler}>
            <Button name={name}/>
          </div>
    </div>
  )
}
