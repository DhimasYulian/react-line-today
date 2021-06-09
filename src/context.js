import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [data, setData] = useState({}) 
    const [tab, setTab] = useState(null)
    const [pages, setPages] = useState([])
    const [bookmarked, setBookmarked] = useState(localStorage.getItem("bookmarkedArticle"))
    const [bookmarkedId, setBookmarkedId] = useState(localStorage.getItem("bookmarkedArticleId"))
    const history = useHistory()

    const bookmark = (e, article) => {
        e.preventDefault()
        if(!bookmarked) {
            localStorage.setItem("bookmarkedArticle", JSON.stringify([article]))
            localStorage.setItem("bookmarkedArticleId", JSON.stringify([article.id]))
        }else{
            localStorage.setItem("bookmarkedArticle", JSON.stringify([...bookmarked, article]))
            localStorage.setItem("bookmarkedArticleId", JSON.stringify([...bookmarkedId, article.id]))
        }
        setBookmarkedId(JSON.parse(localStorage.getItem("bookmarkedArticleId")))
        setBookmarked(JSON.parse(localStorage.getItem("bookmarkedArticle")))
    }

    const unbookmark = (e, article) => {
        e.preventDefault()
        if(bookmarked.length === 1) {
            localStorage.clear()
        }else{
            let filData = bookmarked.filter(item => item.id !== article.id)
            let filId = bookmarkedId.filter(item => item !== article.id)
            localStorage.setItem("bookmarkedArticle", JSON.stringify(filData))
            localStorage.setItem("bookmarkedArticleId", JSON.stringify(filId))
        }
        setBookmarkedId(JSON.parse(localStorage.getItem("bookmarkedArticleId")))
        setBookmarked(JSON.parse(localStorage.getItem("bookmarkedArticle")))
    }
    const fetchData = async () => {
        try {
            const response = await axios.get("https://today.line.me/id/portaljson")
            setData(response.data.result)
            let pageArr = []
            response.data.result.categoryList.map(page => {
                let name = page.name.toLowerCase().replaceAll(" ","-")
                let highlight = page.highlight ? page.highlight.enable : false
                return pageArr.push({id: page.id, name, category: page.name, highlight})
            })
            setPages(pageArr)
            let tab = pageArr[0].id
            const path = window.location.pathname.replace("/", "")
            if(path){
                const validTab = pageArr.find(item => item.name === path)
                if(validTab){
                    tab = validTab.id
                }else{
                    history.push("/")
                }
            }
            setTab(tab)
        } catch (error) {
            throw new Error(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const AppState = {
        data,
        tab,
        pages,
        bookmarked,
        bookmarkedId,
        bookmark,
        unbookmark,
        setTab,
        setData
    } 

    return (
        <AppContext.Provider value={AppState}>
            {props.children}
        </AppContext.Provider>
    )
}