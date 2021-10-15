import React from 'react'

export default () => {
    return (
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden fixed bottom-0 right-0 mr-4 mb-4 transition ease-in duration-700">
            <div className="w-2 bg-red-800"/>
            <div className="flex items-center px-2 py-3">
                <div className="mx-3">
                    <h2 className="text-xl font-semibold text-gray-800">Problem!</h2>
                    <p className="text-gray-600">No more drivers available</p>
                </div>
            </div>
        </div>
    )
}
