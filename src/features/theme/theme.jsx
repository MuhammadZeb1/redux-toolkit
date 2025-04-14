import React, { useState } from 'react'
import { themeConvert } from './themeSlice.jsx'
import { useDispatch } from 'react-redux'

function Theme() {
    const [theme, setTheme] = useState("white")
    const dispatch = useDispatch()
    
    return (
        <>
            <input 
                type="text" 
                className='bg-amber-100' 
                onChange={(e) => setTheme(e.target.value)} 
            />
            
            <button 
                className='bg-amber-300' 
                onClick={() => dispatch(themeConvert(theme))}
            >
                Apply the color
            </button>
        </>
    )
}

export default Theme
