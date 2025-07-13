import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { sendEmail } from '../service/email.service'
import { Editor } from '@tinymce/tinymce-react';


const EmailSender = () => {

    // A state Variable for Saving the emaildata
    const [emailData, setEmailData] = useState(
        {
            'to': "",
            'sub': "",
            'message': ""
        }
    )

    //A state variable for loader
    const [loader, setLoader] = useState(false)

    //Reference to the Editor
    const editorRef = useRef(null);


    //Method to add the changes to emailData
    const handleChanges = (e, name) => {
        setEmailData({ ...emailData, [name]: e.target.value });
    }

    //Method to handle submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(emailData);
        try {
            //sending Email
            setLoader(true);
            await sendEmail(emailData);
            toast.success("Email Sent Successfully.");
            setEmailData({
                'to': "",
                'sub': "",
                'message': ""
            });
            setLoader(false);
        } catch (error) {
            setLoader(false);
            toast.error("Failed to send email.");
        }
    }

    return (
        <div className='w-screen min-h-screen flex justify-center items-center'>
            <div id="email_container" className=' md:w-1/2 w-full mx-4 md:mx-0 bg-white dark:bg-gray-700 border border-white dark:border-gray-700 rounded-xl shadow-2xl py-2 px-4'>
                <h1 className='text-gray-800 text-2xl font-bold  dark:text-white'> Email Sender Application</h1>
                <p className='text-gray-400'>Send Email to anyone you want using Springboot</p>
                <form onSubmit={handleFormSubmit} className='mt-3'>
                    <div id='to' className=' mb-2'>
                        <label
                            for="email-input"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            To
                        </label>

                        <input
                            type="text"
                            id="email-input"
                            value={emailData.to}
                            onChange={(e) => handleChanges(e, 'to')}
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
                            value={emailData.sub}
                            onChange={(e) => handleChanges(e, 'sub')}
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

                        {/* <textarea
                            id="message"
                            value={emailData.message}
                            onChange={(e) => handleChanges(e, 'message')}
                            rows="15"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                            required
                        >

                        </textarea> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            apiKey='8w0pdjp9j0wg99ix96ep2z1o5akqy4vqkpdh9uaxy422rf4l'
                            initialValue="<p>Write your thoughts here..</p>"
                            onEditorChange={()=>{setEmailData({...emailData,message: editorRef.current.getContent()})}}
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'blocks fontfamily fontsize |' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </div>

                    {/* Loader only shows when sending */}
                    {loader &&
                        (<div id="loader" className='mb-2 flex justify-center gap-3 mt-3'>

                            <button disabled type="button" class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Sending email...
                            </button>

                        </div>)}

                    <div id="use-buttons" className='mb-2 flex justify-center gap-3 mt-6'>
                        <button
                            type='submit'
                            disabled={loader}
                            className='px-3 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-700'>
                            Send Email
                        </button>
                        <button
                            type='clear'
                            onClick={() => {
                                setEmailData({
                                    'to': "",
                                    'sub': "",
                                    'message': ""
                                });
                            }}
                            className='px-4 py-2 rounded bg-red-500 text-white font-semibold hover:bg-red-700'>
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmailSender