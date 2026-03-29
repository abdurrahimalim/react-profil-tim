function ProfilAbdurrahim() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>

      {/*Header*/}
      <div className='bg-gradient-to-r from-blue-700 to-indigo-800 text-white'>
        <div className='max-w-3xl mx-auto px-6 py-12 text-center'>

          {/*Foto profil*/}
          <img
            src='/foto-abdurrahim.jpg'
            alt='Foto Abdurrahim'
            className='w-32 h-32 rounded-full object-cover
                       border-4 border-white shadow-lg mx-auto mb-4'
          />

          {/*Nama sama nim*/}
          <h1 className='text-3xl font-bold mb-1'>Abdurrahim</h1>
          <p className='text-blue-200 text-lg'>253140707111018</p>
        </div>
      </div>

      {/*Konten*/}
      <div className='max-w-3xl mx-auto px-6 py-8'>

        {/*Informasi akademik*/}
        <div className='bg-white rounded-2xl shadow-lg p-6 mb-6'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Informasi Akademik</h2>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-blue-50 rounded-xl p-4'>
              <p className='text-sm text-gray-500'>Kelas</p>
              <p className='font-semibold text-gray-800'>T2D</p>
            </div>
            <div className='bg-blue-50 rounded-xl p-4'>
              <p className='text-sm text-gray-500'>Prodi</p>
              <p className='font-semibold text-gray-800'>Teknologi Informasi</p>
            </div>
            <div className='bg-blue-50 rounded-xl p-4'>
              <p className='text-sm text-gray-500'>Domisili</p>
              <p className='font-semibold text-gray-800'>Kota Malang</p>
            </div>
          </div>
        </div>

        {/*Tentang diri*/}
        <div className='bg-white rounded-2xl shadow-lg p-6 mb-6'>
          <h2 className='text-xl font-bold text-gray-800 mb-3'>Tentang Diri</h2>
          <p className='text-gray-600 leading-relaxed'>
            Perkenalkan, nama saya Abdurrahim. Saya adalah seorang mahasiswa Teknologi Informasi di Universitas
            Brawijaya Malang. Saya memiliki minat dalam bidang
            pemrograman. Saya juga memiliki kemampuan dalam
            menggunakan HTML dan bahasa pemrograman seperti Python, Java, PHP, JavaScript, dan CSS.<br />
            Sebagai lulusan pondok pesantren, saya terbiasa mendalami kitab kuning tanpa latar belakang pelajaran umum. Namun, hal tersebut tidak membatasi rasa penasaran saya terhadap teknologi.<br />
            Saya aktif belajar secara mandiri dan mengembangkan minat di bidang data analysis, cybersecurity, serta pengembangan web.
            Saya pernah mencoba berbagai distribusi Linux seperti Kali, Ubuntu, Arch, hingga BlackArch melalui VirtualBox untuk mendalami keamanan siber.
            Saat ini, saya sedang berusaha menguasai full stack web development dan bercita-cita menjadi AI engineer di masa depan.
          </p>
        </div>

        {/*Tombol untuk balik ke halaman utama*/}
        <div className='text-center'>
          <a href='/' className='text-blue-600 hover:text-blue-800
                                  underline text-sm'>
            Kembali ke Halaman Tim
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfilAbdurrahim;
