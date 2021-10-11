import TextField from '@material-ui/core/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import  Button  from '@material-ui/core/Button';
import * as yup from 'yup';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../../components/header';
import { Container } from './style';
const LoginPage = () => {
    const history = useHistory();
    const [status, setStatus] = useState(false)
    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),

        email: yup.string().email("Email Invalido").required("Campo Obrigatório"),

        password: yup.string().min(8, "Senha inválida").required("Campo Obrigatório").matches
            (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "Mínimo de 8 digitos, um caracter especial e uma letra maiúscula"),

        confirmPassword: yup.string().oneOf([yup.ref("password")], "Email não confere"),

        
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const sigUp = (data) => {
     
        if( data.email === 'kenzieuser@kenzie.com'&& data.password === 'Kenzie@1'){ 
            history.push(`/logado/${data.name}`)
        }else{
            setStatus(true)
        }
        
        
    }
    return (
        <div>
            <Header/>
        <Container>
        <form onSubmit={handleSubmit(sigUp)}>
            <div>
                <TextField
                    id='name'
                    label='Name'
                    margin='normal'
                    size='small'
                    color='secondary'
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
            </div>
            <div>
                <TextField
                    id='email'
                    label='Email'
                    margin='normal'
                    size='small'
                    color='secondary'
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
            </div>
            <div>
                <TextField
                    id='password'
                    label='Password'
                    margin='normal'
                    size='small'
                    color='secondary'
                    {...register('password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
            </div>
            <div>
                <TextField
                    id='confirmPassword'
                    label='Confirm Password'
                    margin='normal'
                    size='small'
                    color='secondary'
                    {...register('confirmPassword')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                />
            </div>
            <div>
                <Button type='submit' variant="contained" color='primary'> Logar
                </Button>
                {status && <p>Usuário ou senha Incorretos</p>}
            </div>


        </form>
        </Container>
        </div>
    )
}
export default LoginPage;