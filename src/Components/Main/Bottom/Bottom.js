import React from 'react';
import { assets } from '../../../assets/assets';
import '../Main.scss';
import { Context } from '../../../Context/Context';
import { useContext } from 'react';
function Bottom() {
  const {OnSent , recentPrompt , showResult , loading , resultData , setInput , input } = useContext(Context);
  return (
    <div className='main-bottom'>
        <div className='search-box'>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Enter a prompt here'/>
            <div>
                <img src={assets.gallery_icon} alt='' />
                <img src={assets.mic_icon} alt='' />
                <img onClick={()=>OnSent(input.value)} src={assets.send_icon} alt='' />
                
            </div>
        </div>
        <p className='bottom-info'>
        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps

        </p>
    </div>
  );
}

export default Bottom;