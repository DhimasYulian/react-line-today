import { Tab, TabList, Tabs } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/outline"
import { AppContext } from '../context'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [expand, setExpand] = useState(false)
    const {tab, pages, setTab} = useContext(AppContext)
    return (
        <>
            <div hidden={!expand} className="flex justify-between bg-white items-center pt-3">
                <p className="text-base ml-5">Categories</p>
                <button onClick={() => setExpand(!expand)} className="z-10 sticky right-0 top-0 p-3 bg-white border-l-1 border-gray-400"><ChevronUpIcon className="w-5 h-5"/></button>
            </div>
            <Tabs isManual variant={expand ? "soft-rounded" : "line" } bg="white" colorScheme="black.600" className={`${expand ? "p-5" : "overflow-x-auto"} hide-scrollbar sticky top-0 left-0 z-40`}>
                <TabList hidden={expand} className="relative">
                    {pages && pages.map((page) => (
                        <Tab as={Link} to={`/${page.name}`} isSelected={tab === page.id} style={{borderBottom: tab === page.id ? page.highlight ? "2px solid red" : "2px solid black" : "none"}} _active={{outline: "none"}} _focus={{outline: "none"}} onClick={() => setTab(page.id)} key={page.id}><p className={`font-semibold whitespace-nowrap ${page.highlight ?  "text-red-500" : "hover:text-black"} ${tab === page.id ? page.highlight ? "text-red-500" : "text-black" : page.highlight ? "text-red-500" : "text-gray-400"} text-base`}>{page.category}</p></Tab>
                    ))}
                    <button onClick={() => setExpand(!expand)} className="z-10 sticky right-0 top-0 p-3 bg-white border-l-1 border-gray-400"><ChevronDownIcon className="w-5 h-5"/></button>
                </TabList>
                <TabList hidden={!expand} className="relative z-10 flex-wrap mx-5">
                    {pages && pages.map((page) => (
                        <Tab as={Link} to={`/${page.name}`} isSelected={tab === page.id} style={{backgroundColor: tab === page.id && "black"}} className="m-1 border-gray-300 border hover:bg-gray-200" _active={{outline: "none"}} _focus={{outline: "none"}} onClick={() => {setTab(page.id); setExpand(!expand)}} key={page.id}><p className={`font-semibold whitespace-nowrap ${tab === page.id ? "text-white" : "text-gray-800"} text-base`}>{page.category}</p></Tab>
                    ))}
                </TabList>
            </Tabs>
        </>
    )
}

export default Navbar
