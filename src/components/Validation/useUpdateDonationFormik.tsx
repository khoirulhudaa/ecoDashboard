import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';
import { useEffect } from 'react';
import store from '@/redux/store';

export const useDonationUpdateFormik = ({onError, onResponse, contentNew}: {onError?: any, onResponse?: any, contentNew?: any}) => {
   
   const detailDonation = store.getState().Information?.detailDonation

    const formik = useFormik<any>({
        initialValues: {
            name_donation: '',
            link_donation: 0,
            thumbnail: null,
            content: ''
        },
        validationSchema: Yup.object({
            name_donation: Yup.string()
            .required('Tidak boleh kosong!'),
            link_donation: Yup.string()
            .required('Tidak boleh kosong!'),
            thumbnail: Yup.mixed()
            .test('fileType', 'Only JPG and PNG', (value: any) => {
                if (!value) return true;
                const supportedFormats = ['image/jpeg', 'image/png'];
                const fileExtension = value.type;
                const isExtensionSupported = supportedFormats.includes(fileExtension);
                return isExtensionSupported;
            })
            .test('fileSize', 'Maximal size is 5MB.', (value: any) => {
                if (!value) return true;
                return value.size <= 5 * 1024 * 1024;
            })
            .notRequired(),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                console.log('data:', contentNew )

                const formData = new FormData()
                formData.append('name_donation', values.name_donation)
                formData.append('link_donation', values.link_donation)
                formData.append('content', contentNew && contentNew !== undefined && contentNew !== null ? contentNew : detailDonation.content)
                if(values.thumbnail  &&  values.thumbnail !== null) {
                    formData.append('thumbnail', values.thumbnail)
                }

                const response = await API.updateDonation(detailDonation?.donation_id, formData)
                console.log('response update donation:', response)

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
            name_donation: detailDonation?.name_donation ?? '',
            link_donation: detailDonation?.link_donation ?? '',
            content: detailDonation?.content ?? '',
        })
    }, [detailDonation])

    return formik
}