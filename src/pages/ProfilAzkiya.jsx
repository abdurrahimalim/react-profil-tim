
function ProfilAzkiya(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-400 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
               
                {/*Foto*/}
                <img
                src='/foto-azkiya.jpg'
                alt='foto Azkiya'
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />

                {/*Nama*/}
                <h1 className="text-2xl font-bold text-gray-800">Azkiya Faza Putri Pratama</h1>

                {/*Data Diri*/}
                <div className="mt-4 text-gray-700 space-y-1">
                    <p>NIM: 253140707111014</p>
                    <p>Kelas: T2D</p>
                    <p>Jurusan: Teknologi Informasi (D3)</p>
                    <p>Domisili: Kalimantan Selatan, Tanah Bumbu</p>
                </div>
                
                {/*Tentang diri saya*/}
                <div className="mt-5 text-gray-700 text-justify leading-relaxed">
                    <p>
                        Saya adalah seorang mahasiswa di Universitas Brawijaya, Fakultas Vokasi,
                    jurusan Teknologi Informasi D3. Saat ini saya sedang belajar di bidang Teknologi,
                    khususnya dalam pengembangan website. Saya senang bisa mempelajari hal-hal baru
                    yang berkaitan dengan IT untuk terus meningkatkan kemampuan yang saya miliki.
                    Selama proses belajar saya akan terus mencoba agar dapat lebih memahami tentang
                    dunia IT.

                    Dalam proses belajar, saya akan terus berusaha untuk memahami materi dan terus
                    mencoba agar dapat menguasai apa yang telah dipelajari. Saya juga berusaha untuk
                    konsisten dan tidak mudah menyerah saat menghadapi kesulitan. Bagi saya, belajar
                    adalah proses yang penting untuk mencapai tujuan di masa depan dan dapat mengembangkan
                    potensi diri secara maksimal.

                    Saya berharap kedepannya dapat terus mengembangkan kemampuan yang saya miliki dan menjadi
                    pribadi yang lebih baik di bidang teknologi.
                    </p>
                </div>
                <hr className="my-5"/>

                {/*Social media*/}
                <h2 className="font-semibold  text-gray-800 mb-3">
                    Social Media
                </h2>

                <div className="flex justify-center gap-6 text-blue-600  text-sm">
                    <p>Instagram: @username</p> 
                    <p>GitHub: github.com/username</p> 
                    <p>LinkedIn: linkedin.com/in/username</p>
                </div>
            </div>
        </div>
    )
}
export default ProfilAzkiya;