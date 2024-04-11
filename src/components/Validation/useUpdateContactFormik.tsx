import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';
import { useEffect } from 'react';
import store from '@/redux/store';

export const useContactUpdateFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {
   
   const detailContact = store.getState().Information?.detailContact

    const formik = useFormik<any>({
        initialValues: {
            name_contact: '',
            number: 0,
            phptp: null,
        },
        validationSchema: Yup.object({
            name_contact: Yup.string()
            .required('Tidak boleh kosong!'),
            number: Yup.string()
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                console.log('data:', values)

                const formData = new FormData()
                formData.append('name_contact', values.name_contact)
                formData.append('number', values.number)
                if(values.photo  &&  values.photo !== null) {
                    formData.append('photo', values.photo)
                }

                const response = await API.updateContact(detailContact?.contact_id, formData)
                console.log('response update island:', response)

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
            name_contact: detailContact?.name_contact ?? '',
            number: detailContact?.number ?? '',
        })
    }, [detailContact])

    return formik
}