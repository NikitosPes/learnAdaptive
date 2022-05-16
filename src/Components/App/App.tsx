import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import BooksList from '../BooksList/BooksList'
import Poster from '../Poster/Poster'
import BooksSection from '../BooksSection/BooksSection'

import './App.scss'

import { books } from '../../data'

const App: React.FC = () => {
    return(
        <div className='wrapper'>
            <Header />
            <div className='main'>
                <Poster data={['poster 1', 'poster 2', 'poster 3']}/>
                <div className='main__body'>
                    <BooksList title='carousel' books={books}/>
                    <BooksSection title='section' books={books}/>
                </div>
            </div>
                <Footer />
        </div>
    )
}

export default App;