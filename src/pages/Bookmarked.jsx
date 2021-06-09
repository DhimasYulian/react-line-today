import React, { useContext } from 'react'
import BookmarkedItem from '../components/BookmarkedItem'
import Header from '../components/Header'
import { AppContext } from '../context'

const Bookmarked = () => {
    const {bookmarked} = useContext(AppContext)
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            {
                bookmarked ? (
                    <div className="grid grid-flow-row grid-cols-2 gap-6 mx-4 my-3">
                        {
                            bookmarked.map((item, idx) => (
                                <BookmarkedItem item={item} key={idx} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-screen">
                        <p className="text-lg font-semibold">No Bookmarked Item Available.</p>
                    </div>
                )
            }
        </div>
    )
}

export default Bookmarked
