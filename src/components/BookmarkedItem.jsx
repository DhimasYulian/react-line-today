import { BookmarkIcon } from '@heroicons/react/outline'
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/react/solid'
import React, { useContext } from 'react'
import { AppContext } from '../context'
import { formatTitle } from '../utils/formatText'

const BookmarkedItem = ({item}) => {
    const {bookmarkedId, bookmark, unbookmark} = useContext(AppContext)
    return (
        <>
            <a href={item.url.url}>
                <img className="w-full h-24 md:h-44 rounded" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w580`} alt={item.url.url}/>
                <div className="grid grid-cols-10">
                    <p className="col-span-9 text-sm md:text-base mt-2 font-medium leading-5">
                        {formatTitle(item.title)}
                    </p>
                    <div className="col-span-1">
                        {
                            bookmarkedId && bookmarkedId.indexOf(item.id) !== -1 ? (
                                <SolidBookmarkIcon onClick={(e) => unbookmark(e, item)} className="h-5 w-5 mt-3 float-right" />
                            ) : (
                                <BookmarkIcon onClick={(e) => bookmark(e, item)} className="h-5 w-5 text-gray-500 mt-3 float-right" />
                            )
                        }
                    </div>
                </div>
                <p className="text-sm mt-1 text-gray-400">
                    {item.publisher}
                </p>
            </a>

        </>
    )
}

export default BookmarkedItem
