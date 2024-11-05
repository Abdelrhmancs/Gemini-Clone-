import React, { useContext } from 'react';
import './Main.scss';
import { assets } from '../../assets/assets';
import Card from './Cards/Card';
import Bottom from './Bottom/Bottom';
import { Context } from '../../Context/Context';
const Main = () => {

    const { recentPrompt , showResult , loading , resultData  } = useContext(Context);
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt=''/>
        </div>
        <div className='main-container'>
        {!showResult ? 
            <>
            <div className='greet'>
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className='cards'>
                <Card title ="Suggest beautiful places to see on an upcoming road trip" image ={assets.compass_icon}/>
                <Card title ="Briefly summarize this concept: urban planning" image ={assets.bulb_icon} />
                <Card title ="Brainstorm team bonding activities for our work retreat" image ={assets.message_icon} />
                <Card title ="Tell me about React js and React native" image ={assets.code_icon} />
            </div>
            </>:
            <div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt=''/>
                    <p>{recentPrompt}</p>
                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon}alt=''/>
                    {loading ? 
                        <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
            </div>
        }
            <Bottom/>
        </div>
       
    </div>
  );
}

export default Main;