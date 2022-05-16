import React from 'react'
import BooksListTitle from '../BooksListTitle/BooksListTitle'
import BooksSectionItem from './BooksSectionItem/BooksSectionItem'

import './BooksSection.scss'

interface BooksSectionProps {
    title: string,
    books: Array<string>
}

const BooksSection: React.FC<BooksSectionProps> = ({ title, books }) => {

    const BOOKS_IN_SECTION = 6;

    const getTopFistBooks = (): Array<string> => {
        return books.slice(0, BOOKS_IN_SECTION)
    }

    const displaySectionBooks = () => {
        return getTopFistBooks().map((book, index) => <BooksSectionItem book={book} key={index}/>)
    }

    return (
        <div className="books-section">
            <div className="books-section__container">
                <BooksListTitle title={title} numsOfBooks={books.length}/>
                <div className="books-section__body">
                    {displaySectionBooks()}
                </div>
            </div>
        </div>
    )
}

export default BooksSection