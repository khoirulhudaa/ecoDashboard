import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';
import { useEffect } from 'react';
import store from '@/redux/store';

export const useCulinaryUpdateFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {
   
   const detailCulinary = store.getState().Information?.detailCulinary
    console.log('detail culinary:', detailCulinary)

    const formik = useFormik<any>({
        initialValues: {
            name_culinary: '',
            icon: '',
            island: '',
            lat: '',
            long: '',
            address: '',
            link: '',
            thumbnail: '',
        },
        validationSchema: Yup.object({
            name_culinary: Yup.string()
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
                
                const response = await API.updateCulinary(detailCulinary?.culinary_id, values)
                console.log('response update culinary:', response)

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
            name_culinary: detailCulinary?.name_culinary ?? '',
            icon: detailCulinary?.icon ?? '',
            island: detailCulinary?.island ?? '',
            lat: detailCulinary?.lat ?? '',
            long: detailCulinary?.long ?? '',
            address: detailCulinary?.address ?? '',
            link: detailCulinary?.link ?? '',
            thumbnail: detailCulinary?.thumbnail ?? '',
        })
    }, [detailCulinary])

    return formik
}