"use client"

import API from '@/services/services';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import ErrorMessage from '../ErrorMessage';
import SweetAlert from '../SweetAlert';
import { useContactFormik } from '../Validation/useContactFormik';

const AddContact: React.FC = () => {

    const navigate = useRouter()

    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleResponseNomer = () => {
        setError('')
        SweetAlert({
            title: 'Berhasil tambah kontak!',
            showCancelButton: false,
            icon: 'success'
        })
        stopLoading()
        navigate.push('/contact')
    }

    const stopLoading = () => {
        setLoading(false)
    }
    
    const handleErrorMessage = (error: string) => {
        setError(error)
        stopLoading()
    }

    const contactFormik = useContactFormik({
        onError: handleErrorMessage,
        onResponse: handleResponseNomer
    })

    const handleClick = () => {
        contactFormik.handleSubmit()
        setLoading(true)
    }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
                Penambahan Pemandu Baru
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
                    <div className='mb-5 w-full'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Nama Pemandu
                        </label>
                        <input
                            type="text"
                            name='name_contact'
                            value={contactFormik.values.name_contact}
                            onChange={contactFormik.handleChange}
                            onBlur={contactFormik.handleBlur}
                            placeholder="Muhammad Khoirulhuda"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                </div>

                <div className='w-full flex justify-between items-center'>
                    <div className='mb-5 w-full'>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Nomer
                        </label>
                        <input
                            type="number"
                            name='number'
                            value={contactFormik.values.number}
                            onChange={contactFormik.handleChange}
                            onBlur={contactFormik.handleBlur}
                            placeholder="+623829382833"
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>
                </div>

                <div className='w-max flex items-center'>
                    <Link href={'/contact'}>
                        <button type='button' className='putline-0 mr-3 w-max h-max rounded-lg flex items-center justify-center cursor-pointer border border-red-300 active:scale-[0.98] hover:brightness-[90%] px-5 py-[6px] shadow-md text-red bg-white mt-6'>
                            <p>Batalkan</p>
                        </button>
                    </Link>
                    {
                        contactFormik.values.name_contact !== '' && contactFormik.values.number !== '' ? (
                            <button type={loading  ? 'button' : 'submit'} onClick={() => {loading ? null : handleClick()}} className={`outline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md ${loading ? 'text-slate-500 bg-slate-200 cursor-not-allowed' : 'text-white bg-blue-400 cursor-pointer active:scale-[0.98] hover:brightness-[90%]'} mt-6`}>
                                {
                                    loading ? (
                                        <FaSpinner className='mr-2 duration-200 animate-spin' />
                                    ):
                                        null
                                }
                                <p>Tambah Sekarang</p>
                            </button>
                        ) :                 
                            <button type={'button'} className={`putline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md 'text-slate-500 bg-slate-200 cursor-not-allowed mt-6`}>
                                <p>Tambah Sekarang</p>
                            </button>
                    }
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddContact;
