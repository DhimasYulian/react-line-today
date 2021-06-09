import React from 'react'

const Footer = () => {
    return (
        <div className="w-full bg-gray-200 min-h-[120px] flex justify-center items-center flex-col">
            <div className="min-w-[300px] mx-auto flex justify-evenly items-center">
                <div className="text-sm text-gray-400">Terms of Use</div>
                <div className="text-sm text-gray-400">Privacy Policy</div>
                <div className="text-sm text-gray-400">Disclaimer</div>
            </div>
            <p className="text-sm text-gray-400 mt-3">@Test Corporation</p>
        </div>
    )
}

export default Footer
