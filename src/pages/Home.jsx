import { Spinner } from '@chakra-ui/spinner'
import React from 'react'
import { useLocation } from 'react-router'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useGetContent } from '../utils/useGetContent'

const Home = () => {
    const location = useLocation()
    let page = location.pathname
    if(page === "/") page = "/top"
    const content = useGetContent(page)
    return (
        <div>
            <Header />
            <Navbar />
            {
                !content ? (
                    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            className=""
                            emptyColor="gray.200"
                            color="gray.500"
                            size="xl"
                        />
                    </div>
                ) : (
                    <Content content={content} />
                )
            }
            <Footer />
        </div>
    )
}

export default Home
