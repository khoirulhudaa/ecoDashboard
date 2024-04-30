"use client"

import { getDonation } from '@/redux/informationSlice';
import API from '@/services/services';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaPenAlt, FaPlusCircle, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from '../SweetAlert';

const Donation: React.FC = () => {

  const dispatch = useDispatch()
  const navigate = useRouter()

  const Auth = useSelector((state: any) => state.Auth?.auth)

  const [status, setStatus] = useState<boolean>(false)
  const [dataDonation, setDataDonation] = useState<any[]>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {

    (async () => {
      const response = await API.getDonation()
      setDataDonation(response?.data?.data)
      console.log(response?.data?.data)
    })()
    setStatus(false)

  }, [status])

  const handleRemoveFinally = async (id: string) => {
    const response = await API.removeDonation(id)
    console.log(response)
    console.log(id)
    if(response?.data?.status === 200) {
      setStatus(true)
      SweetAlert({
        title: 'Berhasil hapus donasi!',
        showCancelButton: false
      })
    }
  }

  const handleRemoveDonation = (id: string) => {
    SweetAlert({
      title: 'Yakin hapus donasi ?',
      icon: 'question',
      onClick: () => handleRemoveFinally(id)
    })
  }

  const handleUpdateEvent = (data?: any) => {
    dispatch(getDonation(data))
    navigate.push('/update-donation')
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="px-4 w-full items-center justify-between py-6 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold md:mb-6 mb-0 text-black dark:text-white">
          Donasi PeduliNusantara
        </h4>
    
        <div className='w-full flex items-center justify-end md:mt-0 mt-5'>
          {
            dataDonation?.length === 0 ? (
                Auth?.role === 'super-admin' ? (
                  <Link href={'/add-donation'}>
                    <div className='relative w-max flex items-center ml-auto h-max px-4 py-4 md:py-2 text-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] bg-blue-500 text-white rounded-full ml-[-20px] md:ml-3 shdow-md'>
                        <FaPlusCircle /> 
                        <p className='ml-3 md:inline hidden'>
                            Tambah Donasi
                        </p>
                    </div>
                  </Link>
                ):
                  null
            ):
                <div title='Maksimal 1 donation' className='w-max flex items-center h-max px-4 py-4 md:py-2 text-center cursor-not-allowed text-slate-400 bg-slate-300 rounded-full ml-[-20px] md:ml-3 shdow-md'>
                    <FaPlusCircle /> 
                    <p className='ml-3 md:inline hidden'>
                        Tambah Donasi
                    </p>
                </div>
           }
        </div>

      </div>

      <div className="grid border-t border-stroke px-4 py-4.5 dark:border-strokedark grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 hidden md:flex items-center">
          <p className="font-medium">No</p>
        </div>
        <div className="col-span-4 md:col-span-3 flex items-center">
          <p className="font-medium">Nama donasi</p>
        </div>
        <div className="col-span-3 items-center hidden md:flex">
          <p className="font-medium">Link Donasi</p>
        </div>
        {
            Auth?.role === 'super-admin' ? (
              <div className="col-span-4 md:col-span-1 flex items-end">
                <p className="font-medium">Aksi</p>
              </div>
            ):
              null
        }
      </div>

      {
      dataDonation?.length > 0 ? (
        dataDonation
        .filter((sub: any) => {
          if (search && search !== '') {
            return sub.name_donation.toLowerCase().includes(search.toLowerCase());
          }
          return true;
        })
        .map((data: any, key: number) => (
          <div
            className="grid border-t border-stroke px-4 py-4.5 dark:border-strokedark grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-1 hidden md:flex items-center">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {key + 1}
                </p>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 flex items-center w-full">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center w-full">
                <p className="text-sm text-black dark:text-white w-[90%] overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {data?.name_donation}
                </p>
              </div>
            </div>
            <div className="col-span-3 items-center hidden md:flex">
              <p className="text-sm text-black max-full overflow-hidden overflow-ellipsis whitespace-nowrap dark:text-white">
                {data?.link_donation}
              </p>
            </div>
            {
              Auth?.role === 'super-admin' ? (
                <div className="col-span-4 md:col-span-1 flex">
                  <div className='flex'>
                    <div onClick={() => handleRemoveDonation(data?.donation_id)} className='w-[34px] h-[34px] rounded-[6px] mr-2 bg-[red] cursor-pointer hover:brightness-[90%] active:scale-[0.98] p-1 text-white flex items-center justify-center'>
                      <FaTrash />
                    </div>
                    <div onClick={() => handleUpdateEvent(data)} className='w-[34px] h-[34px] bg-yellow-500 rounded-[6px] ml-2 cursor-pointer hover:brightness-[90%] active:scale-[0.98] p-1 text-white flex items-center justify-center'>
                      <FaPenAlt />
                    </div>
                  </div>
                </div>
              ):
                null
          }
          </div>
        ))
      ):
        <p className='text-center py-12 bordet-t border-t-slate-200'>Belum ada data</p>
      }
    </div>
  );
};

export default Donation;
