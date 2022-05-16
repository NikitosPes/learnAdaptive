import React from 'react'
import './BooksListTitle.scss'

interface BooksListTitleProps {
    title: string,
    numsOfBooks: number
}

const BooksListTitle: React.FC<BooksListTitleProps> = ({ title, numsOfBooks }) => {
    return (
        <div className="book-list-title">
            <div className='book-list-title__logo'></div>
            <h1 className='book-list-title__title'>{title}</h1>
            <a className='book-list-title__more-books-link' href="">{`VIEW LIST(${numsOfBooks} BOOKS)`}</a>
        </div>
    )
}

export default BooksListTitle