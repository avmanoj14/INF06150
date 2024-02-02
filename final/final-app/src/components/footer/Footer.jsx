import footer__menu from "./footer-menu";

import "./Footer.css";

function Footer() {
  const f__list = footer__menu.map((item) => {
    return (
      <a href={item.path} key={item.name}>
        <i className={item.icon}></i> {item.name}
      </a>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__items">{f__list}</div>
    </footer>
  );
}

export default Footer;
