import { useState } from 'react';

import {
  NavLink,
  Link
} from 'react-router-dom';

import {
  Menu,
  X,
  Scissors,
  ArrowUpRight
} from 'lucide-react';

import { BARBER_APP_LINK } from '../data/siteData.js';

const links = [
  ['/', 'Home'],
  ['/sobre', 'Sobre'],
  ['/servicos', 'Serviços'],
  ['/equipe', 'Equipe'],
  ['/galeria', 'Galeria'],
  ['/avaliacoes', 'Avaliações'],
  ['/blog', 'Blog']
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <Link
        to="/"
        className="brand"
        onClick={() => setOpen(false)}
      >
        <span>
          <Scissors size={18} />
        </span>

        <div className="brand-copy">
          <strong>Prime Club</strong>
          <small>Barbearia Premium</small>
        </div>
      </Link>

      <nav className={open ? 'nav open' : 'nav'}>
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}

        <a
          className="nav-cta"
          href={BARBER_APP_LINK}
          target="_blank"
          rel="noreferrer"
        >
          Agendar horário
          <ArrowUpRight size={16} />
        </a>
      </nav>

      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}