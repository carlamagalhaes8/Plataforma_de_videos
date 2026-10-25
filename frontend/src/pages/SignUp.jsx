

import {Link} from 'react-router-dom';
import Button from '../components/Button';

//criar conta
function SignUp(){
    return(
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email" 
                    placeholder="seu@email.com"
                    required />

                    <label htmlFor="password">Senha:</label>
                <input
                    type="text"  
                    id="password" 
                    placeholder="Digite sua senha" 
                    required />

                <label htmlFor="password">Confirmar senha:</label>
                <input
                    type="text"  
                    id="password" 
                    placeholder="Digite sua senha" 
                    required />

                {/* implementar olho */}

                <p>Já tem conta?<Link to="/sign-in">Entrar</Link></p>

                {/* componente do botão */}
                <Button type="submit">Criar conta</Button>

                {/* logar com google etc */}

            </form>
            
        </div>
    )
}

export default SignUp;