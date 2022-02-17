import './Header.css';

function Header() {
   return (
      <div className="header">
         <div className="wrap">
            <div className="logo">Video</div>
            <div className="right">
               <div className="tel">+7 999 99 99 99</div>
               <div className="email">video@mail.ru</div>
            </div>
         </div>
      </div>
   )
}

export default Header;