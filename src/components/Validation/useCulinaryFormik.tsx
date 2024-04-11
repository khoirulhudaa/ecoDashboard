import { useFormik } from 'formik';
import * as Yup from 'yup';
import API from '../../services/services';

export const useCulinaryFormik = ({onError, onResponse}: {onError?: any, onResponse?: any}) => {
    const formik = useFormik<any>({
        initialValues: {
            name_culinary: '',
            island: '',
            icon: '',
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
                
                const response = await API.addCulinary(values)
                console.log('response create tour:', response)

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