import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';
import { useEffect } from 'react';
import store from '@/redux/store';

export const useEventUpdateFormik = ({onError, onResponse, contentNew}: {onError?: any, onResponse?: any, contentNew?: any}) => {
   
   const detailEvent = store.getState().Information?.detailEvent

    const formik = useFormik<any>({
        initialValues: {
            name_event: '',
            description: 0,
            thumbnail: null,
            content: ''
        },
        validationSchema: Yup.object({
            name_event: Yup.string()
            .required('Tidak boleh kosong!'),
            description: Yup.string()
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
                formData.append('name_event', values.name_event)
                formData.append('description', values.description)
                formData.append('content', contentNew && contentNew !== undefined && contentNew !== null ? contentNew : detailEvent.content)
                if(values.thumbnail  &&  values.thumbnail !== null) {
                    formData.append('thumbnail', values.thumbnail)
                }

                const response = await API.updateEvent(detailEvent?.event_id, formData)
                console.log('response update event:', response)

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
            name_event: detailEvent?.name_event ?? '',
            description: detailEvent?.description ?? '',
            content: detailEvent?.content ?? '',
        })
    }, [detailEvent])

    return formik
}