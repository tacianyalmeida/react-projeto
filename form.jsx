import './form.css'

const Form = () => {

    return (
        <div className='container'>
            <form action="">
                <label htmlFor="email">E-mail</label>
                <input type="email" name='email' id=''/>
                <label htmlFor="senha">Senha</label>
                <input type="password" name='senha' id=''/>
                <input type="submit" value="Enviar" />
            </form>
          
        </div>
    )
}
export default Form