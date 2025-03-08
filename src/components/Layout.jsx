import React from "react";
import NavBar from "./Nav";
import '../styles/body.scss';

// Definerer og eksporterer en funksjonell komponent kalt Layout
export default function Layout({ children }) {
  return (
    // Lager en div med id "flex-container" for å gruppere innholdet og styre layouten
    <div id="flex-container">
      <NavBar /> {/* Viser navigasjonsmenyen (NavBar-komponenten) */}
      <main>
        {children} {/* Viser innholdet som sendes inn som props til Layout-komponenten */}
      </main>
    </div>
  );
}