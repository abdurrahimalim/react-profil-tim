import { Link } from 'react-router-dom';

function Home() {
  const anggota = [
    {
      nama: 'Shafa Kamalia Salsabil',
      peran: 'Anggota',
      prodi: 'Teknologi Informasi',
      domisili: 'Bekasi',
      path: '/shafa-kamalia',
      foto: '/foto-Shafa.jpeg',
    },
    {
      nama: 'Abdurrahim',
      peran: 'Leader',
      prodi: 'Teknologi Informasi',
      domisili: 'Kota Malang',
      path: '/abdurrahim',
      foto: '/foto-abdurrahim.jpg',
    },
    {
      nama: 'Azkiya Faza Putri Pratama',
      peran: 'Anggota',
      prodi: 'Teknologi Informasi',
      domisili: 'Tanah Bumbu, Kalsel',
      path: '/azkiya-faza',
      foto: '/foto-azkiya.jpg',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900
                    flex flex-col items-center justify-center px-6 py-12'>

      {/*Header*/}
      <div className='text-center mb-10'>
        <div className='inline-block bg-white bg-opacity-10 rounded-2xl px-6 py-2 mb-4'>
          <span className='text-blue-200 text-sm font-medium tracking-widest uppercase'>
            Pemrograman Web · Kelas T2D
          </span>
        </div>
        <h1 className='text-5xl font-extrabold text-white mb-2'>Kelompok 11</h1>
        <p className='text-blue-300 text-base'>Teknologi Informasi · Universitas Brawijaya</p>
      </div>

      {/*Kartu anggota*/}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl'>
        {anggota.map((a) => (
          <Link
            to={a.path}
            key={a.path}
            className='bg-white bg-opacity-10 backdrop-blur-sm border border-white
                       border-opacity-20 rounded-2xl p-6 text-white
                       hover:bg-opacity-20 hover:scale-105 transition-all duration-300
                       flex flex-col items-center text-center gap-3 shadow-xl'>

            {/*Foto profil*/}
            <div className='w-20 h-20 rounded-full overflow-hidden border-4 border-white border-opacity-40 shadow-lg'>
              <img
                src={a.foto}
                alt={a.nama}
                className='w-full h-full object-cover'
              />
            </div>

            {/*Style leader*/}
            <span className='text-xs font-bold px-3 py-1 rounded-full bg-blue-400 bg-opacity-40 text-blue-100'>
              {a.peran}
            </span>

            <h2 className='text-lg font-bold leading-tight'>{a.nama}</h2>

            {/*Tabel info*/}
            <div className='w-full mt-1 text-sm'>
              <div className='flex justify-between border-b border-white border-opacity-20 py-1'>
                <span className='text-blue-300'>Prodi</span>
                <span className='font-medium text-right'>{a.prodi}</span>
              </div>
              <div className='flex justify-between py-1'>
                <span className='text-blue-300'>Domisili</span>
                <span className='font-medium text-right'>{a.domisili}</span>
              </div>
            </div>

            <span className='mt-2 text-xs text-blue-300 hover:text-white transition-colors'>
              Lihat Profil →
            </span>
          </Link>
        ))}
      </div>

      {/*Footer*/}
      <p className='mt-12 text-blue-400 text-xs'>
        Member T2D · Universitas Brawijaya
      </p>
    </div>
  );
}

export default Home;