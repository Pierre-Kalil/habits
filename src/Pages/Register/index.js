import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import * as yup from 'yup';
import Header from "../../components/Header";

const Register = () => {
    
    const history = useHistory();

    const schema = yup.object().shape({
        username: yup.string().required('Required Field'),
        email: yup.string().required('Required Field').email('Invalid email'),
        password: yup.string().required('Required Field').min(6,'min 6 characters')
    })

    const {register, handleSubmit, formState: {errors},reset} = useForm({resolver: yupResolver(schema)})

    const handleRegister = (data) => {
        axios.post('https://kabit-api.herokuapp.com/users/', data)
        .then(res => {
            reset();
            history.push('/login');
            toast.success('Successfully registered')
            
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <Header />
            <form onSubmit = {handleSubmit(handleRegister)}>
                <input placeholder = 'username' {...register('username')}></input>
                <input placeholder = 'email' {...register('email')}></input>
                <input placeholder = 'password' {...register('password')}></input>
                <button type = 'submit'>Registrar</button>
            </form>
        </div>
    )

}

export default Register;