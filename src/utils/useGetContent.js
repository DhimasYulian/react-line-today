import { useContext } from "react"
import { AppContext } from "../context"

export const useGetContent = (currentPage) => {
    const {data, pages} = useContext(AppContext)
    const visitedPage = pages && pages.find(page => page.name === currentPage.replace("/", ""))
    const categories = visitedPage && data.categories.find(category => category.id === visitedPage.id)
    const content = categories && categories.templates.filter(item => item.type !== 56 && item.type !== 86 && item.type !== 57 && item.sections[0].type !== 12)
    return content
}
