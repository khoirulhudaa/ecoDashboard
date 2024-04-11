import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';

export const useContactFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {
    const formik = useFormik<any>({
        initialValues: {
            name_contact: '',
            number: 0
        },
        validationSchema: Yup.object({
            name_contact: Yup.string()
            .required('Tidak boleh kosong!'),
            number: Yup.string()
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                
                const response = await API.addContact(values)
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