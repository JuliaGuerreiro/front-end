import './Header-footer.css';

function Header() {
  return (
    <header className="fixed-header">
        <img className="logo-header" src="logo-header.png" />
    </header>
  );
}

function Footer() {
  return (
    <header className="fixed-footer">
        <div></div>
    </header>
  );
}

export { Header, Footer };
