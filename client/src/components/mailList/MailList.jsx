import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">¡Ahorra tiempo, ahorra dinero!</h1>
      <span className="mailDesc">Regístrate y te enviaremos las mejores ofertas</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Tu correo electrónico" />
        <button>Suscribirse</button>
      </div>
    </div>
  )
}

export default MailList