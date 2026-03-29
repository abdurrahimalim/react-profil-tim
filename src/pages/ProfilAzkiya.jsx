
function ProfilAzkiya(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-400 p-4">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl overflow-hidden">
               
                {/*Foto*/}
                <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white text-center p-6">
                <img
                src='/foto-azkiya.jpg'
                alt='foto Azkiya'
                className="w-28 h-28 rounded-full mx-auto mb-3 border-4 border-white object-cover"
                />
                <h1 className="text-xl font-bold">Azkiya Faza Putri Pratama</h1>
                <p className="text-sm opacity-90">Mahasiswa teknologi informasi </p>
                </div>

                {/*Data Diri*/}
                <div className="p-6">
                    <div className="bg-gray-100 rounded-xl p-4 text-gray-700 space-y-2 font-medium">
                        <p><b>NIM:</b> 253140707111014</p>
                        <p><b>Kelas:</b> T2D</p>
                        <p><b>Jurusan:</b> Teknologi Informasi (D3)</p>
                        <p><b>Domisili:</b> Kalimantan Selatan, Tanah Bumbu</p>
                    </div>
                </div>
                
                {/*Tentang diri saya*/}
                <div className="px-6 pb-6">
                    <div className="bg-white border rounded-xl shadow-sm p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Tentang Diri</h2>
                
                <p className="text-gray-600 leading-relaxed text-justify">
                    
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
                </div>

                {/*Social media*/}
                <div clasName="px-6 pb-6">
                <h2 className="font-semibold text-gray-800 mb-3 pl-2">Social Media</h2>

                <div className="bg-gray-100 rounded-xl p-4 text-sm text-blue-600 space-y-1">
                    <p>Instagram: @azkiyaprtmaa_</p> 
                    <p>GitHub: github.com/Azkiya-12</p> 
                </div>
                </div>
            </div>
        </div>
    );
}
export default ProfilAzkiya;