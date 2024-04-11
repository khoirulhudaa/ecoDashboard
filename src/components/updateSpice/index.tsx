"use client"

import API from '@/services/services';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import ErrorMessage from '../ErrorMessage';
import SweetAlert from '../SweetAlert';
import { useSpiceUpdateFormik } from '../Validation/useUpdateSpiceFormik';

const UpdateSpice: React.FC = () => {

    const navigate = useRouter()

    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [islands, setIslands] = useState<any[]>([])

    useEffect(() => {
        (async () => {
            const response = await API.getAllIsland()
            setIslands(response?.data?.data)
        })()
    }, [])

    const handleResponseUser = () => {
        setError('')
        SweetAlert({
            title: 'Berhasil perbarui rempah!',
            showCancelButton: false,
            icon: 'success'
        })
        stopLoading()
        navigate.push('/spice')
    }

    const stopLoading = () => {
        setLoading(false)
    }
    
    const handleErrorMessage = (error: string) => {
        setError(error)
        stopLoading()
    }

    const SpiceFormik = useSpiceUpdateFormik({
        onError: handleErrorMessage,
        onResponse: handleResponseUser
    })

    const handleClick = () => {
        SpiceFormik.handleSubmit()
        setLoading(true)
    }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
                Penambahan rempah Baru
            </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
            {
                error !== '' ? (
                    <ErrorMessage error={error} />
                ):
                    null
            }           
            <form>
                <div className='w-full flex justify-between items-center'>
                    <div className='mb-5 w-[48%]'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Nama Rempah
                        </label>
                        <input
                            type="text"
                            name='name_spice'
                            value={SpiceFormik.values.name_spice}
                            onChange={SpiceFormik.handleChange}
                            onBlur={SpiceFormik.handleBlur}
                            placeholder="Taman Nasional Bunaken"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div className='mb-5 w-[48%]'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Pulau
                        </label>
                        <div className='px-2 border border-slate-200 rounded-lg bg-white w-full h-[48px]'>
                            <select className='w-full h-full bg-white outline-0 border-0' name="island" value={SpiceFormik.values.island} onChange={SpiceFormik.handleChange} onBlur={SpiceFormik.handleBlur} id="island">
                                <option key={0} value='' disabled>Pilih Pulau</option>
                                {
                                    islands && islands?.length > 0 ? (
                                        islands?.map((data: any, index: number) => (
                                            <option key={index} selected={data?.name_island === SpiceFormik.values.island} value={data?.name_island}>{data?.name_island}</option>
                                        ))
                                    ):
                                        null
                                }
                            </select>
                        </div>
                    </div>
                </div>
               
                <div className='w-full flex justify-between items-center'>
                    <div className='mb-5 w-[48%]'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Latitude
                        </label>
                        <input
                            type="text"
                            name='lat'
                            value={SpiceFormik.values.lat}
                            onChange={SpiceFormik.handleChange}
                            onBlur={SpiceFormik.handleBlur}
                            placeholder="-16721622"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div className='mb-5 w-[48%]'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Longitude
                        </label>
                        <input
                            type="text"
                            name='long'
                            value={SpiceFormik.values.long}
                            onChange={SpiceFormik.handleChange}
                            onBlur={SpiceFormik.handleBlur}
                            placeholder="121728172"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                </div>
               
                <div className='w-full flex justify-between items-center'>
                    <div className='mb-5 w-[48%]'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Alamat
                        </label>
                        <input
                            type="text"
                            name='address'
                            value={SpiceFormik.values.address}
                            onChange={SpiceFormik.handleChange}
                            onBlur={SpiceFormik.handleBlur}
                            placeholder="Kab. xxxx Kec. xxxx"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div className='mb-5 w-[48%]'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Link Google Map
                        </label>
                        <input
                            type="text"
                            name='link'
                            value={SpiceFormik.values.link}
                            onChange={SpiceFormik.handleChange}
                            onBlur={SpiceFormik.handleBlur}
                            placeholder="https://....."
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                </div>
               
                <div className='w-full flex justify-between items-center'>
                    <div className='mb-5 w-[48%]'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Thumbnail
                        </label>
                        <input
                            type="text"
                            name='thumbnail'
                            value={SpiceFormik.values.thumbnail}
                            onChange={SpiceFormik.handleChange}
                            onBlur={SpiceFormik.handleBlur}
                            placeholder="https://......"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                    <div className='mb-5 w-[48%]'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Ikon
                        </label>
                        <input
                            type="text"
                            name='icon'
                            value={SpiceFormik.values.icon}
                            onChange={SpiceFormik.handleChange}
                            onBlur={SpiceFormik.handleBlur}
                            placeholder="Ikon rempah..."
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                </div>
                <div className='w-max flex items-center'>
                    <Link href={'/spice'}>
                        <button type='button' className='putline-0 mr-3 w-max h-max rounded-lg flex items-center justify-center cursor-pointer border border-red-300 active:scale-[0.98] hover:brightness-[90%] px-5 py-[6px] shadow-md text-red bg-white mt-6'>
                            <p>Batalkan</p>
                        </button>
                    </Link>
                    {
                        SpiceFormik.values.name_spice !== '' && SpiceFormik.values.island !== '' && SpiceFormik.values.lat !== '' && SpiceFormik.values.long !== '' && SpiceFormik.values.address !== '' && SpiceFormik.values.link !== '' && SpiceFormik.values.thumbnail !== '' ? (
                            <button type={loading  ? 'button' : 'submit'} onClick={() => {loading ? null : handleClick()}} className={`outline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md ${loading ? 'text-slate-500 bg-slate-200 cursor-not-allowed' : 'text-white bg-blue-400 cursor-pointer active:scale-[0.98] hover:brightness-[90%]'} mt-6`}>
                                {
                                    loading ? (
                                        <FaSpinner className='mr-2 duration-200 animate-spin' />
                                    ):
                                        null
                                }
                                <p>Perbarui Sekarang</p>
                            </button>
                        ) :                 
                            <button type={'button'} className={`putline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md 'text-slate-500 bg-slate-200 cursor-not-allowed mt-6`}>
                                <p>Perbarui Sekarang</p>
                            </button>
                    }
                </div>
            </form>
        </div>
    </div>
  );
};

export default UpdateSpice;
