import {useContext} from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { AuthContext } from '../../contexts/AuthContext' 

const Login = () => {
  const navigate = useNavigate();
  const { setName } = useContext(AuthContext)


  const responseGoogle = response => {
    setName(response.profileObj.name);

    navigate('/gallery')
  };

  return (
    <GoogleLogin
      className='login-btn'
      render={renderProps => (
        <button onClick={renderProps.onClick} className='login-btn'>Login</button>
      )}
      clientId="303052401514-q2ffrch43d668ta85le6tp6crc8rb4vc.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  )
}

export default Login