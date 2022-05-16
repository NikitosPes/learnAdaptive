import React, { useState, useEffect } from 'react'
import './Poster.scss'

interface PosterProps {
    data: Array<string>
}

const Poster: React.FC<PosterProps> = ({ data }) => {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => (prev + 1) % data.length)
        }, 4000)
        return () => clearInterval(interval);
    }, [])


    return (
        <div className='poster'>
            <div className='poster__body'>
                <div className='poster__current-item' key={count}>
                    {data[count]} 
                </div>
                <div className='poster__prev-item' key={count-1}>
                    {data[count-1]}
                </div>
            </div>
        </div>
    )
}

export default Poster