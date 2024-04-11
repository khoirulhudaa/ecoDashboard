import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';

export const useContactFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {
    const formik = useFormik<any>({
        initialValues: {
            name_contact: '',
            number: 0,
            photo: null
        },
        validationSchema: Yup.object({
            name_contact: Yup.string()
            .required('Tidak boleh kosong!'),
            number: Yup.string()
            .required('Tidak boleh kosong!'),
            photo: Yup.mixed()
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
                
                const formData = new FormData()
                formData.append('name_contact', values.name_contact)
                formData.append('number', values.number)
                if(values.photo !== null && values.photo) {
                    formData.append('photo', values.photo)
                }

                const response = await API.addContact(formData)
                console.log('response create contact:', response)

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