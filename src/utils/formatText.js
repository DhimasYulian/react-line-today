export const formatTitle = (title) => {
    if(title.length > 40){
        return title.slice(0, 64) + "..."
    }else{
        return title
    }
}