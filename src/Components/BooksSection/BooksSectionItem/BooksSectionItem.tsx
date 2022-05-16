import React from 'react'

interface BooksSectionItemProps {
    book: string,
}

const BooksSectionItem: React.FC<BooksSectionItemProps> = ({ book }) => {
    return (
        <div className="books-section-item">
            <div className="books-section-item__book-img"></div>
            <div className="books-section-item__description">
                <div className="books-section-item__book-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                <div className="books-section-item__book-author">Lorem, ipsum.</div>
                <div className="books-section-item__book-price">$20.00</div>
            </div>
        </div>
    )
}

export default BooksSectionItem