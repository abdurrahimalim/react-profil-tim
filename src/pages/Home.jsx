import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800
                   flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-white mb-2'>Tim Kami</h1>
      <p className='text-blue-200 mb-10'>Kelas T2D - Teknologi Informasi</p>

      <div className='flex flex-col gap-4 w-64'>

        <Link to='/abdurrahim'
          className='bg-white text-blue-800 font-semibold
                     px-6 py-3 rounded-xl hover:bg-blue-100
                     text-center shadow-lg transition-all'>
          Abdurrahim (Leader)
        </Link>

        <Link to='/shafa-kamalia'
          className='bg-white text-blue-800 font-semibold
                     px-6 py-3 rounded-xl hover:bg-blue-100
                     text-center shadow-lg transition-all'>
          Shafa Kamalia Salsabil
        </Link>

        <Link to='/azkiya-faza'
          className='bg-white text-blue-800 font-semibold
                     px-6 py-3 rounded-xl hover:bg-blue-100
                     text-center shadow-lg transition-all'>
          Azkiya Faza Putri Pratama
        </Link>
      </div>
    </div>
  );
}

export default Home;
