import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#004B8D] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* ONG Info */}
        <div>
          <h5 className="text-lg font-bold mb-3">ONGConecta</h5>
          <p className="text-sm">
            Nós somos uma organização sem fins lucrativos dedicada a unir as pessoas com o propósito.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-bold mb-3">Links Rápidos</h5>
          <ul className="text-sm space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-[#FFDE73] transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                className="hover:text-[#FFDE73] transition-colors duration-200"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="hover:text-[#FFDE73] transition-colors duration-200"
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="hover:text-[#FFDE73] transition-colors duration-200"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-lg font-bold mb-3">Contato</h5>
          <p className="text-sm">Email: info@ongconecta.org</p>
          <p className="text-sm">Phone: +21 1234 5678</p>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="text-lg font-bold mb-3">Siga-nos</h5>
          <div className="flex space-x-4 mt-2 text-xl">
            <a
              href="https://facebook.com/ongconecta"
              className="hover:text-[#FFDE73] transition-colors duration-200"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/ongconecta"
              className="hover:text-[#FFDE73] transition-colors duration-200"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/ongconecta"
              className="hover:text-[#FFDE73] transition-colors duration-200"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/company/ongconecta"
              className="hover:text-[#FFDE73] transition-colors duration-200"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} ONGConecta. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;