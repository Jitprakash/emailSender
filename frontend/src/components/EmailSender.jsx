import React from 'react'

const EmailSender = () => {
    return (
        <div className='w-screen min-h-screen flex justify-center items-center'>
            <div id="email_container" className='w-1/2 bg-white border border-white rounded-xl shadow-2xl py-2 px-4'>
                <h1 className='text-gray-800 text-2xl font-bold'> Email Sender Application</h1>
                <p className='text-gray-400'>Send Email to anyone you want using Springboot</p>
                <form className='mt-3'>
                    <div id='to' className=' mb-2'>
                        <label
                            for="email-input"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            To
                        </label>

                        <input
                            type="text"
                            id="email-input"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="e.g.:myemail123@gmail.com"
                            required
                        />
                    </div>
                    <div id='subject' className=' mb-2'>
                        <label
                            for="subject-input"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            subject
                        </label>

                        <input
                            type="text"
                            id="subject-input"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="e.g.:subject1"
                            required
                        />
                    </div>
                    <div id='message' className=' mb-2'>
                        <label
                            for="message"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Your message
                        </label>

                        <textarea
                            id="message"
                            rows="15"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here...">

                        </textarea>
                    </div>

                    <div id="buttons" className='mb-2 flex justify-center gap-3 mt-6'>
                        <button className='px-3 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-700'>
                            Send Email
                        </button>
                        <button className='px-4 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-700'>
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmailSender