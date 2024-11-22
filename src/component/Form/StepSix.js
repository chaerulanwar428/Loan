import React from 'react';


const StepSix = () => {

    
    const Section = ({ title, children }) => {
        return (
            <div className="mb-4">
                <div className="bg-[#005274] text-white px-4 py-2 rounded-t">
                    <button className='flex items-center'><img src="/down.svg"/>{title}</button>
                </div>
                <div className="border border-t-0 border-gray-300 rounded-b p-4 bg-gray-50">
                    {children}
                </div>
            </div>
        );
    };
   

    return (
        <div className="-mt-10 flex flex-col items-center">
            <h1 className="text-center text-4xl font-bold">Upload Dokumen</h1>
            <div className='text-center text-[#646567] text-2xl'>Silahkan upload dokumen yang dibutuhkan</div>
            <div className="w-full mt-4 p-7 bg-white shadow-lg rounded-lg">
                    <Section title="Data Pribadi">
                        <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Fotokopi KTP Pemohon</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                                --Upload Fotokopi KTP Pemohon-- <img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Fotokopi KTP Suami / Istri</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                                --Upload Fotokopi KTP Suami / Istri--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Fotokopi Kartu Keluarga</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Fotokopi Kartu Keluarga--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Fotokopi Akte Nikah/Cerai</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Fotokopi Akte Nikah/Cerai--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Fotokopi NPWP Pemohon</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Fotokopi NPWP Pemohon--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Akta Pisah Harga Notaril dan didaftarkan ke KUA atau catatan sipil (Jika Ada)</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Akta Pisah Harga Notaril-- <img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                    </Section>
                    <Section title="Data Jaminan">
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Fotokopi Dokumen Jaminan--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload PDF Surat Pengajuan Bank--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Fotokopi Perjanjian Kredit (Jika Over Kredit)</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Fotokopi Perjanjian Kredit--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Dokumen PPJB (Jika Developer)</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Dokumen PPJB--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                    </Section>
                    <Section title="Data Keuangan">
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Fotokopi SPT / PPh21</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Fotokopi SPT / PPh21--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Asli Slip Gaji 1 Bulan Terakhir--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Fotokopi R/K atau tabungan 6 bulan terakhir</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Fotokopi R/K 6 Bulan Terakhir-- <img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>Surat Keterangan / Rekomendasi Perusahaan</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload Surat Keterangan Perusahaan--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                    </Section>
                    <Section title="Data Tambahan">
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>File Kekurangan 1</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload File Kekurangan 1--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                       <div className="flex items-center justify-between mb-2">
                            <span className='text-[#2D3B57]'>File Kekurangan 2</span>
                            <button className="w-[340px] flex justify-between border-2 border-[#C1C1C1] text-[#646567] px-2 py-2 rounded items-center">
                            --Upload File Kekurangan 2--<img src='/upload.svg' className='h-[23px] ml'/>
                            </button>
                        </div>
                    </Section>
                    <button className="ml-auto bg-[#005274] text-white rounded-md px-4 py-2 flex items-center">
                    <img src="/save.svg" className="h-[22px]" /> UPDATE
                    </button>
                </div>
        </div>
    );
};


export default StepSix;