import React, { useState } from 'react';

const StepThree = () => {
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [village, setVillage] = useState('');
    const [isSameAsKTP, setIsSameAsKTP] = useState(false);

    const [address2, setAddress2] = useState('');
    const [postalCode2, setPostalCode2] = useState('');
    const [province2, setProvince2] = useState('');
    const [city2, setCity2] = useState('');
    const [district2, setDistrict2] = useState('');
    const [village2, setVillage2] = useState('');
    const [isSameAsKTP2, setIsSameAsKTP2] = useState(false);

    const [address3, setAddress3] = useState('');
    const [postalCode3, setPostalCode3] = useState('');
    const [province3, setProvince3] = useState('');
    const [city3, setCity3] = useState('');
    const [district3, setDistrict3] = useState('');
    const [village3, setVillage3] = useState('');
    const [isSameAsKTP3, setIsSameAsKTP3] = useState(false);

    const handleClear = () => {
        setAddress('');
        setPostalCode('');
        setProvince('');
        setCity('');
        setDistrict('');
        setVillage('');
        setIsSameAsKTP(false);
    };

    const handleClear2 = () => {
        setAddress2('');
        setPostalCode2('');
        setProvince2('');
        setCity2('');
        setDistrict2('');
        setVillage2('');
        setIsSameAsKTP2(false);
    };

    const handleClear3 = () => {
        setAddress3('');
        setPostalCode3('');
        setProvince3('');
        setCity3('');
        setDistrict3('');
        setVillage3('');
        setIsSameAsKTP3(false);
    };

    const handleSameAsKTPChange = (checked) => {
        setIsSameAsKTP(checked);
        if (checked) {
            setAddress2(address);
            setPostalCode2(postalCode);
            setProvince2(province);
            setCity2(city);
            setDistrict2(district);
            setVillage2(village);
        } else {
            handleClear2(); // Clear domicile fields if unchecked
        }
    };

    const handleSameAsKTP2Change = (checked) => {
        setIsSameAsKTP2(checked);
        if (checked) {
            setAddress2(address);
            setPostalCode2(postalCode);
            setProvince2(province);
            setCity2(city);
            setDistrict2(district);
            setVillage2(village);
        } else {
            handleClear2(); // Clear domicile fields if unchecked
        }
    };

    const handleSameAsKTP3Change = (checked) => {
        setIsSameAsKTP3(checked);
        if (checked) {
            setAddress3(address);
            setPostalCode3(postalCode);
            setProvince3(province);
            setCity3(city);
            setDistrict3(district);
            setVillage3(village);
        } else {
            handleClear3(); // Clear domicile fields if unchecked
        }
    };

    return (
        <div className="-mt-10 flex flex-col items-center">
            <h1 className="text-center text-4xl font-bold">Alamat</h1>
            <div className="mt-10 p-7 bg-white shadow-lg rounded-lg">
                <div className="bg-[#005274] text-white p-4 mb-4">
                    <h2 className="text-lg font-bold">Data KTP</h2>
                </div>
                <div className="bg-white p-4 shadow-md mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label>Alamat Lengkap (Jalan, Komplek, RT/RW)</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 mt-1"
                                placeholder="--Isi Alamat Lengkap--"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Kode POS</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 mt-1"
                                placeholder="--Isi Kode POS--"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Provinsi</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}
                            >
                                <option value=""> --Pilih Provinsi--</option>
                                <option value="1">tes</option>
                                {/* Add options for provinces here */}
                            </select>
                        </div>
                        <div>
                            <label>Kabupaten / Kota</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                                <option value="">--Pilih Kota--</option>
                                <option value="1">tes</option>
                                {/* Add options for cities here */}
                            </select>
                        </div>
                        <div>
                            <label>Kecamatan</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            >
                                <option value="">--Pilih Kecamatan--</option>
                                <option value="1">tes</option>
                                {/* Add options for districts here */}
                            </select>
                        </div>
                        <div>
                            <label>Kelurahan</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={village}
                                onChange={(e) => setVillage(e.target.value)}
                            >
                                <option value="">--Pilih Kelurahan--</option>
                                <option value="1">tes</option>
                                {/* Add options for villages here */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between my-2">
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={isSameAsKTP}
                            onChange={(e) => handleSameAsKTPChange(e.target.checked)}
                        />
                        <label>Domisili Sesuai KTP</label>
                    </div>
                    <button
                        className="bg-red-600 text-white rounded-md px-4 py-2"
                        onClick={handleClear}
                    >
                        CLEAR
                    </button>
                </div>

                <div className="bg-[#005274] text-white p-4 mb-4">
                    <h2 className="text-lg font-bold">Data Domisili</h2>
                </div>
                <div className="bg-white p-4 shadow-md mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label>Alamat Lengkap (Jalan, Komplek, RT/RW)</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 mt-1"
                                placeholder="--Isi Alamat Lengkap--"
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Kode POS</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 mt-1"
                                placeholder="--Isi Kode POS--"
                                value={postalCode2}
                                onChange={(e) => setPostalCode2(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Provinsi</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={province2}
                                onChange={(e) => setProvince2(e.target.value)}
                            >
                                <option value="">--Pilih Provinsi--</option>
                                <option value="1">tes</option>
                                {/* Add options for provinces here */}
                            </select>
                        </div>
                        <div>
                            <label>Kabupaten / Kota</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={city2}
                                onChange={(e) => setCity2(e.target.value)}
                            >
                                <option value="">--Pilih Kota--</option>
                                <option value="1">tes</option>
                                {/* Add options for cities here */}
                            </select>
                        </div>
                        <div>
                            <label>Kecamatan</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={district2}
                                onChange={(e) => setDistrict2(e.target.value)}
                            >
                                <option value="">--Pilih Kecamatan--</option>
                                <option value="1">tes</option>
                                {/* Add options for districts here */}
                            </select>
                        </div>
                        <div>
                            <label>Kelurahan</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={village2}
                                onChange={(e) => setVillage2(e.target.value)}
                            >
                                <option value="">--Pilih Kelurahan--</option>
                                <option value="1">tes</option>
                                {/* Add options for villages here */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between my-2">
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={isSameAsKTP3}
                            onChange={(e) => handleSameAsKTP3Change(e.target.checked)}
                        />
                        <label>Alamat tempat Bekerja / perusahaan Sesuai KTP</label>
                    </div>
                    <button
                        className="bg-red-600 text-white rounded-md px-4 py-2"
                        onClick={handleClear2}
                    >
                        CLEAR
                    </button>
                </div>

                <div className="bg-[#005274] text-white p-4 mb-4">
                    <h2 className="text-lg font-bold">Data Alamat Tempat Bekerja</h2>
                </div>
                <div className="bg-white p-4 shadow-md mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label>Alamat Lengkap (Jalan, Komplek, RT/RW)</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 mt-1"
                                placeholder="--Isi Alamat Lengkap--"
                                value={address3}
                                onChange={(e) => setAddress2(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Kode POS</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2 mt-1"
                                placeholder="--Isi Kode POS--"
                                value={postalCode3}
                                onChange={(e) => setPostalCode3(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Provinsi</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={province3}
                                onChange={(e) => setProvince3(e.target.value)}
                            >
                                <option value="">--Pilih Provinsi--</option>
                                <option value="1">tes</option>
                                {/* Add options for provinces here */}
                            </select>
                        </div>
                        <div>
                            <label>Kabupaten / Kota</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={city3}
                                onChange={(e) => setCity3(e.target.value)}
                            >
                                <option value="">--Pilih Kota--</option>
                                <option value="1">tes</option>
                                {/* Add options for cities here */}
                            </select>
                        </div>
                        <div>
                            <label>Kecamatan</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={district3}
                                onChange={(e) => setDistrict3(e.target.value)}
                            >
                                <option value="">--Pilih Kecamatan--</option>
                                <option value="1">tes</option>
                                {/* Add options for districts here */}
                            </select>
                        </div>
                        <div>
                            <label>Kelurahan</label>
                            <select
                                className="w-full border border-gray-300 p-2 mt-1"
                                value={village3}
                                onChange={(e) => setVillage3(e.target.value)}
                            >
                                <option value="">--Pilih Kelurahan--</option>
                                <option value="1">tes</option>
                                {/* Add options for villages here */}
                            </select>
                        </div>
                    </div>
                </div>

                <button className="ml-auto bg-[#005274] text-white rounded-md px-4 py-2 flex items-center">
                    <img src="/save.svg" className="h-[22px]" /> UPDATE
                </button>
            </div>
        </div>
    );
};

export default StepThree;