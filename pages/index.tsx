import styles from '../public/css/login.module.scss';
import { Header, Footer } from '../public/components'
import { BtnCadastrar, BtnLogar } from '../public/components/buttons/buttons';
import { Input } from '../public/components/input/Input';
import { useState, useContext } from 'react';
import { MyGlobalContext } from '../public/components/context/GlobalContext';

const Login = () => {

    const { setShowModalEsqueciSenha } = useContext(MyGlobalContext);
    const [isLogin, setIsLogin] = useState(true);

    const changeBox = () => {
        setIsLogin(!isLogin);
    }

    const forgotPassword = () => {
        setShowModalEsqueciSenha(true);
    }

    return (
        <div className={styles.login}>
            <Header />
            <section>
                <div className={styles.sideLeft}>
                    <div className={styles.backgroundImage}></div>
                </div>
                <div className={styles.sideRight}>
                    {
                        isLogin ?
                            <div className={styles.box}>
                                <div className={styles.boxHeader}>
                                    <span>LOGIN</span>
                                </div>
                                <div className={styles.boxContent}>
                                    <Input type={"text"} placeholder={"Email"} />
                                    <Input type={"password"} placeholder={"Senha"} />
                                </div>
                                <div className={styles.boxActions}>
                                    <BtnLogar />
                                    <p>
                                        Não tem conta? <strong onClick={changeBox}>Cadastre-se</strong>
                                    </p>
                                    <p className={styles.esqueciSenha} onClick={forgotPassword}>
                                        Esqueci minha senha
                                    </p>
                                </div>
                            </div>
                            :
                            <div className={styles.box}>
                                <div className={styles.boxHeader}>
                                    <span>CADASTRO</span>
                                </div>
                                <div className={styles.boxContent}>
                                    <Input type={"text"} placeholder={"Nome"} />
                                    <Input type={"text"} placeholder={"Email"} />
                                    <Input type={"password"} placeholder={"Senha"} />
                                    <Input type={"password"} placeholder={"Confirme sua senha"} />
                                </div>
                                <div className={styles.boxActions}>
                                    <BtnCadastrar />
                                    <p>
                                        Ou faça já seu <strong onClick={changeBox}>Login</strong>
                                    </p>
                                </div>
                            </div>
                    }
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Login;