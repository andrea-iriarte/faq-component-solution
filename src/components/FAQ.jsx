import React from 'react'
import { faqs } from '../data/data'
import { useState } from 'react'
import downArrow from '../images/icon-arrow-down.svg'

const FAQCard = ({ question, answer, id, activeQuestion, setActiveQuestion }) => {

    const isActive = (id == activeQuestion);
    
    const handleClick = () => {
        if (id == activeQuestion) {
            setActiveQuestion(undefined);
        }
        else {
            setActiveQuestion(id);
        }
    }
    return (
        <div className='faq-item'>
            <div className='question'>
                <p 
                    onClick={handleClick}
                    style={{fontWeight: isActive ? '700' : '' }}
                    className='question-text'
                >
                    {question}
                </p>  
                <img src={downArrow} alt="" onClick={handleClick} style={{transform: isActive? 'rotate(180deg)' : ''}}  className='arrow'/>
            </div>

            {isActive && <p className='answer'>{answer}</p>}

            <hr className='rule'/>
            
        </div>
    )
}

const FAQ = () => {

    const [activeQuestion, setActiveQuestion] = useState(undefined);
  
    return (

        <div className='FAQ'>
            <h1 className='FAQHeader'>FAQ</h1>
            <div className='FAQList'>
                {faqs.map((item) => (
                <FAQCard key={item.id} {...item} activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} />
                ))}
            </div>
            
        </div>
        
    )
}

export default FAQ