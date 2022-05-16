import React from 'react'
import BooksListTitle from '../BooksListTitle/BooksListTitle'
import BookListContent from './BookListContent/BookListContent' 

import './BooksList.scss'

interface BooksListlProps {
    title: string,
    books: Array<string>,
}

const BooksList: React.FC<BooksListlProps> = ({ title, books }) => {
    return (
        <div className='books-list'>
            <div className='books-list__container'>
                <BooksListTitle title={title} numsOfBooks={books.length}/>
                <div className="books-list__body">
                    <BookListContent books={books}/>
                </div>
            </div>
        </div>
    )
}

export default BooksList;