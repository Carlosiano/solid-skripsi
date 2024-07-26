import { createSignal } from "solid-js";
import {
  arrowForwardOutline,
  closeOutline,
  logoNav,
  menuOutline,
  personAddOutline,
} from "../assets/images";
import { navLinks } from "../assets/js/data";

export default function Header(props: {scrollY: number}) {
  const [isActive, setActive] = createSignal(false);

  return (
    <>
      <header class={`header ${props.scrollY > 100 && "active"}`} data-header>
        <div class="container">
          <a href="#" class="logo">
            <img src={logoNav} alt="UT logo" />
          </a>

          <nav class={`navbar ${isActive() ? "active" : ""}`} data-navbar>
            <div class="wrapper">
              <a href="#" class="logo">
                <img src={logoNav} width="162" height="50" alt="UT logo" />
              </a>

              <button
                class="nav-close-btn"
                aria-label="close menu"
                data-nav-toggler
                onClick={() => setActive(!isActive())}
              >
                <img
                  src={closeOutline}
                  alt=""
                  class="ion-icon"
                  aria-hidden="true"
                />
              </button>
            </div>
            <ul class="navbar-list">
              {navLinks.map((item) => (
                <li
                  class="navbar-item"
                  onClick={() => setActive(!isActive())}
                >
                  <a href={`#${item.href}`} class="navbar-link" data-nav-link>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div class="header-actions">
            <a href="#" class="btn has-before">
              <img
                src={personAddOutline}
                alt=""
                class="ion-icon"
                aria-hidden="true"
              />
              <span class="span">Daftar</span>
            </a>
            <a href="#" class="btn-second has-before">
              <img
                src={arrowForwardOutline}
                alt=""
                class="ion-icon"
                aria-hidden="true"
              />
              <span class="span">Masuk</span>
            </a>

            <button
              class="header-action-btn"
              aria-label="open menu"
              data-nav-toggler
              onClick={() => setActive(!isActive())}
            >
              <img
                src={menuOutline}
                alt=""
                class="ion-icon"
                aria-hidden="true"
              />
            </button>
          </div>

          <div
            class={`overlay ${isActive() ? "active" : ""}`}
            data-nav-toggler
            data-overlay
            onClick={() => setActive(!isActive())}
          ></div>
        </div>
      </header>
    </>
  );
}
