import { BookmarkIcon } from "@heroicons/react/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/solid";
import React, {useContext} from "react";
import { formatTitle } from "../utils/formatText";
import Carousel from "./Carousel";
import { AppContext } from '../context'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ContentItem = ({ sections, title }) => {
const {bookmarkedId, bookmark, unbookmark} = useContext(AppContext)
  if (sections.length < 2) {
    return (
      <>
        {sections[0].type === 11 ? (
          <div className="w-full mb-4">
            <Carousel autoplay={true} show={1}>
              {sections[0].articles.map((item, i) => {
                return (
                  <a href={item.url.url} className="place-content-center" key={i}>
                    <img className="w-full h-96 bg-contain bg-center z-0" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w1200`} alt={item.url.url} />
                    <div className="flex items-center w-11/12 rounded-md min-h-[100px] bg-white mx-auto transform -translate-y-16 p-2">
                      <p className="font-medium text-xl md:text-2xl p-2">
                        {formatTitle(item.title)}
                      </p>
                    </div>
                  </a>
                );
              })}
            </Carousel>
          </div>
        ) : (
          <>
            {sections[0].type === 6 && sections[0].articles.length > 2 ? (
              <div className="w-full mb-4">
                <Carousel show={2} duo>
                  {sections[0].articles.map((item, i) => {
                    return (
                      <a href={item.url.url} className="w-full px-1" key={i}>
                        <img className="w-full h-40 rounded-sm bg-contain bg-center" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w1200`} alt={item.url.url}/>
                        <div className="h-18 bg-white mx-2 rounded-sm transform -translate-y-12 p-2">
                          <p className="font-small">
                            {formatTitle(item.title)}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </Carousel>
              </div>
            ) : (
              <div hidden={sections[0].articles.length === 0} className="w-full">
                <section className="bg-white my-4 mx-4 md:mx-7 p-2 rounded">
                  <h1 className="text-2xl font-semibold text-gray-800 p-6">
                    {title ? title : "Another Articles"}
                  </h1>
                  <div className="grid grid-flow-row grid-cols-2 gap-6 mx-4 my-3">
                    {sections[0].articles.map((item, i) => {
                      return (
                        <a href={item.url.url} key={i}>
                          <LazyLoadImage className="w-full h-24 md:h-44 rounded" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w580`} alt={item.url.url} />
                          {/* <img className="w-full h-24 md:h-44 rounded" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w580`} alt={item.url.url}/> */}
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
                      );
                    })}
                  </div>
                </section>
              </div>
            )}
          </>
        )}
      </>
    );
  }
      return (
        <>
          {sections[0].articles.length >= 2 ? (
            <div className="w-full mb-4">
              <Carousel autoplay={true} show={1}>
                {sections[0].articles.map((item, i) => {
                  return (
                    <a href={item.url.url} className="place-content-center" key={i}>
                      <img className="w-full h-96 bg-contain bg-center z-0" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w1200`} alt={item.url.url} />
                      <div className="flex items-center w-11/12 rounded-md min-h-[100px] bg-white mx-auto transform -translate-y-16 p-2">
                        <p className="font-medium text-xl md:text-2xl p-2">
                          {formatTitle(item.title)}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </Carousel>
            </div>
          ) : (
            <div hidden={sections[0].articles.length === 0} className="w-full">
              <section className="bg-white p-4 rounded">
                <div className="grid grid-flow-row grid-cols-2 gap-3">
                  {sections[0].articles.map((item, i) => {
                    return (
                      <div className="articles-item-wrapper">
                        <a href={item.url.url} className="articles-item" key={i}>
                          <LazyLoadImage className="w-36 h-24 rounded-lg" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w580`} alt={item.url.url} />
                          {/* <img className="w-36 h-24 rounded-lg" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w580`} alt={item.url.url}/> */}
                          <div className="flex-grow">
                            <div className="grid grid-cols-10">
                                <p className="col-span-9 text-sm md:text-lg font-semibold text-black">
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
                            <p className="text-normal text-gray-400">
                              {item.publisher}
                            </p>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}
          <div hidden={sections[1].articles.length === 0} className="w-ful mt-12">
            <section className="w-full">
              <div className="flex flex-wrap">
                {sections[1].articles.map((item, i) => {
                  return (
                    <div className="w-full">
                      <a href={item.url.url} className="h-full flex items-center p-4 rounded-lg" key={i}>
                      <LazyLoadImage className="w-36 h-24 bg-gray-100 bg-cover flex-shrink-0 mr-4 rounded" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w580`} alt={item.url.url} />
                        {/* <img className="w-36 h-24 bg-gray-100 bg-cover flex-shrink-0 mr-4 rounded" src={`https://obs.line-scdn.net/${item.thumbnail.hash}/w580`} alt={item.url.url}/> */}
                        <div className="flex-grow">
                            <div className="grid grid-cols-10">
                                <p className="col-span-9 text-sm md:text-lg font-semibold text-black">
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
                          <p className="text-normal text-gray-400">
                            {item.publisher}
                          </p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </>
      );
};

export default ContentItem;
