import React, { useRef } from 'react'
import BookListItem from '../BookListItem/BookListItem'

import rightButtonIcon from '../../../Assets/Icons/arrow-right.svg'
import leftButtonIcon from '../../../Assets/Icons/arrow-left.svg'

interface BookListContentProps {
    books: Array<string>
} 

const BookListContent: React.FC<BookListContentProps> = ({ books }) => {

    const scroll = useRef<HTMLDivElement | null>(null);
    const MAX_LIST_LENGTH = 20;

    const isBookInRange = (bookIndex: number): boolean => {
        return bookIndex < MAX_LIST_LENGTH; 
    }

    const displayBooksInRange = () => {
        return books.filter((book, index) => isBookInRange(index))
            .map((book, index) => <BookListItem title={book} key={index}/>);
    }

    const rightButtonClickHandler = () => {
        if(scroll.current) {
            scroll.current.scrollLeft += 210;
        }
    }

    const leftButtonClickHandler = () => {
        if(scroll.current) {
            scroll.current.scrollLeft -= 200;
        }
    }

    return (
        <>
            <button className='books-list__nav-button books-list__nav-button--left' onClick={() => leftButtonClickHandler()}>
                <img src={leftButtonIcon}/>
            </button>
            <div ref={scroll} className="books-list__content" >
                {displayBooksInRange()}
            </div>
            <button className='books-list__nav-button books-list__nav-button--right' onClick={() => rightButtonClickHandler()}>
                <img src={rightButtonIcon}/>
            </button>
        </>
    )
}

export default BookListContent