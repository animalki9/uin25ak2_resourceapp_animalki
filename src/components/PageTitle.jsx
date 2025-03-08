import React, { useEffect } from "react";

// Definerer og eksporterer en funksjonell komponent kalt PageTitle
function PageTitle({ category }) {
  useEffect(() => {
    // Endrer dokumentets tittel når "category" endres
    if (category) {
      document.title = `${category.toUpperCase()} - My Resource App`;
    }
  }, [category]);
  // Komponentet returnerer ingenting visuelt, det brukes kun for å oppdatere tittelen
  return null; 
}

// Eksporterer komponentet slik at det kan brukes andre steder
export default PageTitle; 
