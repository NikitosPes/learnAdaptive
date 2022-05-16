import React from 'react'

interface BookListItemProps {
    title: string
}

const BookListItem: React.FC<BookListItemProps> = ({ title }) => {
    return(
        <div className='books-list-item'>
            {title}
        </div>
    )
}

export default BookListItem;