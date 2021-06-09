import { Image } from '@chakra-ui/image'
import { Box, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="bg-white">
            <Flex>
                <Box as={Link} to="/" p="4">
                    <Image src="/assets/line-today-logo.svg" />
                </Box>
                <Spacer />
                <Box as={Link} to="/bookmarked" p="4">
                    <p className="text-sm">Bookmarked</p>
                </Box>
            </Flex>
        </div>
    )
}

export default Header
