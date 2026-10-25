
import { Link } from 'react-router-dom';
import Button from '../components/Button';

//entrar na conta já criada
function SignIn(){
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

                {/* implementar olho */}

                <a>
                    Esqueceu a senha?
                </a>

                {/* componente do botão */}
                <Button type="submit">Entrar</Button>

                <Link to="/sign-up">
                    Criar conta
                </Link>

                {/* logar com google etc */}

            </form>
            
        </div>
    )
}

export default SignIn;