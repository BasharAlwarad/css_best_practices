function Contact() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <p className='text-lg text-gray-700 mb-6'>
        Have questions or feedback? Feel free to reach out to us using the form
        below.
      </p>
      <form className='mb-8'>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700'>
            Name
          </label>
          <input
            type='text'
            className='mt-1 p-2 w-full border border-gray-300 rounded-md'
            placeholder='Your Name'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700'>
            Email
          </label>
          <input
            type='email'
            className='mt-1 p-2 w-full border border-gray-300 rounded-md'
            placeholder='Your Email'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-700'>
            Message
          </label>
          <textarea
            className='mt-1 p-2 w-full border border-gray-300 rounded-md'
            rows='5'
            placeholder='Your Message'
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
        >
          Send Message
        </button>
      </form>
      <p className='text-lg text-gray-700'>
        We will get back to you as soon as possible. Thank you for reaching out!
      </p>
    </div>
  );
}

export default Contact;
