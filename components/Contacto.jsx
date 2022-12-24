import Link from "next/link";
import React from "react";

const Contacto = () => {
  return (
    <section id="contacto" className="mx-auto my-20 md:w-2/3 ">
      <h2 className="p-4 text-center text-3xl font-bold text-gray-700 dark:text-white transition-colors">
        Métodos de Contacto
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-10 ">
        <Link
          href="https://wa.link/09md2w"
          className="flex items-center border-2 rounded-md p-4 transition-all hover:scale-105 hover:bg-gray-50 dark:bg-transparent"
          target="_blank"
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-whatsapp"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00b341"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
            </svg>
            <p className="text-xl font-black text-gray-700 dark:text-white transition-colors ">
              Contáctame via Whatsapp
            </p>
        </Link>

        <Link
          href="https://www.linkedin.com/in/erick-rv/"
          className=" flex items-center border-2 rounded-md p-4 transition-all hover:scale-105 hover:bg-gray-50 dark:bg-transparent"
          target="_blank"
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-linkedin"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#00abfb"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            <p className="text-xl font-black text-gray-700 dark:text-white transition-colors ">
              Visita mi Linkedin
            </p>
        </Link>
        <Link
          href="https://github.com/Erickrova"
          className="flex items-center border-2 rounded-md p-4 transition-all hover:scale-105 hover:bg-gray-50 dark:bg-transparent"
          target="_blank"
          title="Revisa el codigo de algunos de los proyectos en mi github"
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" stroke-slate-700 icon icon-tabler icon-tabler-brand-github dark:stroke-white transition-colors"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#7f5345"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            <p className="text-xl font-black text-gray-700 dark:text-white transition-colors ">
              Visita mi GitHub
            </p>
        </Link>
      </div>
    </section>
  );
};

export default Contacto;
