"use client"

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import ErrorMessage from '../ErrorMessage';
import SweetAlert from '../SweetAlert';
import { useEmailFormik } from '../Validation/useEmailFormik';

const AddMessage: React.FC = () => {

    const [editorData, setEditorData] = useState<any>('');

    const handleEditorChange = (event:any, editor: any) => {
        const data = editor.getData();
        setEditorData(data);
        console.log(event)
    };

    let editorConfiguration = undefined

    useEffect(() => {
        editorConfiguration = {
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    'blockQuote'
                ]
            }
        };
    }, [])

    const navigate = useRouter()

    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const handleResponseUser = () => {
        setError('')
        SweetAlert({
            title: 'Berhasil kirim pesan!',
            showCancelButton: false,
            icon: 'success'
        })
        stopLoading()
        navigate.push('/email')
    }

    const stopLoading = () => {
        setLoading(false)
    }
    
    const handleErrorMessage = (error: string) => {
        setError(error)
        stopLoading()
    }

    const emailFormik = useEmailFormik({
        onError: handleErrorMessage,
        onResponse: handleResponseUser,
        content: editorData
    })

    const handleClick = () => {
        emailFormik.handleSubmit()
        setLoading(true)
    }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
                Penambahan Pesan Baru
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
                <div className='mb-5'>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Subyek
                    </label>
                    <input
                        type="text"
                        name='subject'
                        value={emailFormik.values.subject}
                        onChange={emailFormik.handleChange}
                        onBlur={emailFormik.handleBlur}
                        placeholder="Pulau karibian"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                </div>
                <div>
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Isu Pesan
                    </label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={editorData}
                        onChange={handleEditorChange}
                        config={editorConfiguration}
                    />
                </div>
                <div className='w-max flex items-center'>
                    <Link href={'/email'}>
                        <button type='button' className='putline-0 mr-3 w-max h-max rounded-lg flex items-center justify-center cursor-pointer border border-red-300 active:scale-[0.98] hover:brightness-[90%] px-5 py-[6px] shadow-md text-red bg-white mt-6'>
                            <p>Batalkan</p>
                        </button>
                    </Link>
                    {
                        emailFormik.values.subject !== '' ? (
                            <button type={loading  ? 'button' : 'submit'} onClick={() => {loading ? null : handleClick()}} className={`outline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md ${loading ? 'text-slate-500 bg-slate-200 cursor-not-allowed' : 'text-white bg-blue-400 cursor-pointer active:scale-[0.98] hover:brightness-[90%]'} mt-6`}>
                                {
                                    loading ? (
                                        <FaSpinner className='mr-2 duration-200 animate-spin' />
                                    ):
                                        null
                                }
                                <p>Kirim <span className='ml-2 lg:flex hidden'>Sekarang</span></p>
                            </button>
                        ) :                 
                            <button type={'button'} className={`putline-0 border-white w-max h-max rounded-lg flex items-center justify-center px-5 py-2 shadow-md 'text-slate-500 bg-slate-200 cursor-not-allowed mt-6`}>
                                <p>Kirim <span className='ml-2 lg:flex hidden'>Sekarang</span></p>
                            </button>
                    }
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddMessage;
