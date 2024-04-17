import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';

export const useEventFormik = ({onError, onResponse, content}: {onError?: any, onResponse?: any, content?: any}) => {
    const formik = useFormik<any>({
        initialValues: {
            name_event: '',
            description: '',
            thumbnail: null
        },
        validationSchema: Yup.object({
            name_event: Yup.string()
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

                console.log(values)

                const formData = new FormData()
                formData.append('name_event', values.name_event)
                formData.append('description', values.description)
                formData.append('content', content)
                formData.append('thumbnail', values.thumbnail)

                const response = await API.addEvent(formData)
                console.log('response create event:', response)

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

    return formik
}