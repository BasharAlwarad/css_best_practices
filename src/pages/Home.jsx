// Home.jsx
function Home() {
  return (
    <div className='container mx-auto p-6 flex flex-col justify-center items-center'>
      <section id='welcome' className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Welcome to Hannover</h2>
        <div className='flex items-center mb-4'>
          <img
            src='https://images.unsplash.com/photo-1621286718161-a5c209bcec25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFubm92ZXJ8ZW58MHx8MHx8fDA%3D'
            alt='Hannover'
            className='w-20 h-20 rounded-full mr-4'
          />
          <p className='text-lg text-gray-700'>
            Hannover is a beautiful city located in northern Germany, known for
            its rich history and vibrant culture.
          </p>
        </div>
      </section>
      <section id='history' className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>History of Hannover</h2>
        <p className='text-lg text-gray-700'>
          Hannover has a fascinating history that dates back centuries. From its
          origins as a medieval trading hub to its role in the Kingdom of
          Hanover, the city has played a significant role in German history.
        </p>
      </section>
      <section id='attractions' className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Tourist Attractions</h2>
        <p className='text-lg text-gray-700'>
          Hannover is home to many exciting tourist attractions, including the
          stunning Herrenhausen Gardens, the historic Old Town, and the iconic
          New Town Hall. Visitors can also explore the vibrant Maschsee Lake and
          enjoy a stroll along the beautiful riverside promenades.
        </p>
      </section>
      <section id='restaurants'>
        <h2 className='text-2xl font-bold mb-4'>Restaurants in Hannover</h2>
        <p className='text-lg text-gray-700'>
          Hannover boasts a diverse culinary scene, with a wide range of
          restaurants offering delicious cuisine from around the world. From
          traditional German taverns serving hearty local dishes to trendy cafes
          and fine dining establishments, there is something to suit every taste
          and budget.
        </p>
      </section>
    </div>
  );
}

export default Home;
