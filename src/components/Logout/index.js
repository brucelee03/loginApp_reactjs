import './index.css'

const Logout = ({onLogout}) => (
  <div className="logout">
    <button className="button" type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
)

export default Logout
