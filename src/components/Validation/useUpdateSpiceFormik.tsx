import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';
import { useEffect } from 'react';
import store from '@/redux/store';

export const useSpiceUpdateFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {
   
   const detailSpice = store.getState().Information?.detailSpice

    const formik = useFormik<any>({
        initialValues: {
            name_spice: '',
            icon: '',
            island: '',
            lat: '',
            long: '',
            address: '',
            link: '',
            thumbnail: '',
        },
        validationSchema: Yup.object({
            name_spice: Yup.string()
            .required('Tidak boleh kosong!'),
            icon: Yup.string()
            .required('Tidak boleh kosong!'),
            island: Yup.string()
            .required('Tidak boleh kosong!'),
            lat: Yup.string()
            .required('Tidak boleh kosong!'),
            long: Yup.string()
            .required('Tidak boleh kosong!'),
            address: Yup.string()
            .required('Tidak boleh kosong!'),
            link: Yup.string()
            .required('Tidak boleh kosong!'),
            thumbnail: Yup.string()
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                
                const response = await API.updateSpice(detailSpice?.spice_id, values)
                console.log('response update spice:', response)

                if(response.data.status === 200) {  
                    onResponse(response.data.status)
                    resetForm()
                }else {
                    onError(response.data.message)
                }
            } catch (error: any) {
                onError(error.message)
            }
        }
    })

    useEffect(() => {
        formik.setValues({
            name_spice: detailSpice?.name_spice ?? '',
            icon: detailSpice?.icon ?? '',
            island: detailSpice?.island ?? '',
            lat: detailSpice?.lat ?? '',
            long: detailSpice?.long ?? '',
            address: detailSpice?.address ?? '',
            link: detailSpice?.link ?? '',
            thumbnail: detailSpice?.thumbnail ?? '',
        })
    }, [detailSpice])

    return formik
}