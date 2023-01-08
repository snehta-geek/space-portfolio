import React,{useState} from 'react'
import { imageAssests } from '../Assets/imageConst'

const Accordian = ({title,content}) => {
    const [isActive, setisActive] = useState(false)
    return (
        <div className='accordian-item'>
            <div className='accordian-header' onClick={() => setisActive(!isActive)}>
                <div className='acc-title'>{title}</div>
                <div>{isActive ? <img src={imageAssests.upArrow} width="25px" height="25px"/> : 
                <img src={imageAssests.downArrow} width="25px" height="25px"/>}
                </div>
            </div>
            {isActive &&
                <div className='content'>
                    {content}
                </div>
            }
        </div>
    )
}

export default Accordian