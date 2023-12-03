import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer } from 'react-toastify';


export default function Contact() {
    const {toastMessageSuccess} = useContext(AuthContext);
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_rzbqk08', 'template_9qwgpuj', e.target, 'CFvp-FesRrw0U2lox')
            .then((res) => {
                if(res.text == "OK"){
                    toastMessageSuccess("Message is Sent");

                }
                
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div data-aos="flip-left" className='mx-auto flex my-10 flex-col'>
            <form className=" p-10 space-y-6 shadow-2xl mx-auto contact-form w-10/12 md:w-6/12" onSubmit={sendEmail}>

                <h2 className='text-center text-5xl my-4'>Contact Us</h2>

                <div className='flex flex-col'>
                    <label className='text-xl'>Name</label>
                    <input required type="text" placeholder='Your name...' className='py-2 mt-2 px-4 border border-gray-800' name="to_name" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl'>Email</label>
                    <input required type="text" placeholder='Your email...' className='py-2 mt-2 px-4 border border-gray-800' name="to_email" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl'>Phone</label>
                    <input required type="text" placeholder='Your phone number...' className='py-2 mt-2 px-4 border border-gray-800' name="to_phone" />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl'>Address</label>
                    <input required type="text" placeholder='Your address...' className='py-2 mt-2 px-4 border border-gray-800' name="to_address" />
                </div>

                <div className='flex flex-col'>
                    <label className='text-xl'>Message</label>
                    <textarea name="message" placeholder='Your message here....'  className='py-2 h-32 mt-2 px-4 border border-gray-800'/>
                </div>
                <div className='text-center'>
                    <input  type="submit" className='btn bg-black text-white px-10 mx-auto' value="Send" />
                </div>
            </form>
            <ToastContainer pauseOnFocusLoss={false} />
        </div>
    );
}