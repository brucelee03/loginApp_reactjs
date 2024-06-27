import './index.css'

const Login = ({onLogin}) => (
  <div className="login">
    <button className="button" type="button" onClick={onLogin}>
      Login
    </button>
  </div>
)

export default Login
