export default function MainLayout(props) {
  return(
    <>
      <div className="page-wrapper">
        <div className="page-blur">
          <header className="header">
            <div className="container">
              <div className="header__logo">
                87Lux
              </div>
              <div className="header__menu">
                <a href="#">Apps</a>
                <a href="#">Products</a>
                <a href="#">Services</a>
                <a href="#" className="header__contact-btn">Contact</a>
              </div>
            </div>
          </header>
          {props.children}
        </div>
      </div>
    </>
  )
}