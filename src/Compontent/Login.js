import React from 'react'
import SecNavbar from './SecNavbar'

function Login() {
    return (<>


        <SecNavbar />
        <div className="login-form section-notch">
            <img
                className="logo"
                src="/loader.gif"
                alt=""
            />
            <div className="container">
                <div className="main">
                    <div className="content">
                        <div className="callout_title">
                            <div className="bees bees-end" style={{marginLeft:"60px"}}>
                                <span />
                            </div>
                        </div>

                        <h2 style={{marginTop:"-40px"}}>ADOP Student</h2>
                        <form action="" method="POST">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required=""
                                autofocus=""
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="password"
                                required=""
                                autofocus=""
                            />
                            <button className="btn" name="submit" type="submit">
                               Login
                            </button>
                        </form>
                        <p className="account">
                            {" "}
                            No tienes tu cuenta?Registrate <a href="register.php">Registrar</a>
                        </p>
                        <p className="account">
                            te olvidaste tu contraseña?{" "}
                            <a href="forgot-password.php">Recuperar</a>
                        </p>
                    </div>
                    <div className="form-img">
                        <img
                            src="https://img.freepik.com/free-vector/girl-with-flying-books-with-magic-glow-sparkles-vector-cartoon-fantasy-illustration-happy-chi_107791-7513.jpg?w=740&t=st=1661604763~exp=1661605363~hmac=0b0cb1cf89d6b2d4e92ceae14927c1188b1799aab1b50c6b17520c4f4010d4e2"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>









    </>

    )
}
export default Login