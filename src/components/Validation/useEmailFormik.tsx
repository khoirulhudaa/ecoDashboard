import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';

export const useEmailFormik = ({onError, onResponse, content}: {onError?: any, onResponse?: any, content?: any}) => {
    const formik = useFormik<any>({
        initialValues: {
            subject: '',
        },
        validationSchema: Yup.object({
            subject: Yup.string()
            .required('Tidak boleh kosong!'),
        }),
        onSubmit: async (values: any, {resetForm}) => {
            try {
                
                const body = {
                    subject: values.subject,
                    message: content,
                }
                
                const response = await API.addMessageEmail(body)
                console.log('response create message:', response)

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