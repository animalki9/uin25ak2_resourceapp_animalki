import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ResourceCard from "./components/ResourceCard";
import PageTitle from "./components/PageTitle";

// CategoryPage-komponenten viser sidetittelen og ressurskortene for en gitt kategori
function CategoryPage({ category }) {
  return (
    <>
      <PageTitle category={category} /> {/* Oppdaterer dokumentets tittel basert på kategori */}
      <ResourceCard category={category} /> {/* Viser ressurser for den valgte kategorien */}
    </>
  );
}

// Hovedkomponenten for applikasjonen
function App() {
  return (
    <Layout> {/* Bruker Layout-komponenten for å inkludere navigasjonsmenyen */}
      <Routes> {/* Definerer ulike ruter for applikasjonen */}
        
        <Route path="/html" element={<CategoryPage category="html" />} /> {/* Viser HTML-ressurser */}
        <Route path="/css" element={<CategoryPage category="css" />} /> {/* Viser CSS-ressurser */}
        <Route path="/javascript" element={<CategoryPage category="javascript" />} /> {/* Viser JavaScript-ressurser */}
        <Route path="/react" element={<CategoryPage category="react" />} /> {/* Viser React-ressurser */}
        <Route path="/headless-cms" element={<CategoryPage category="headless-cms" />} /> {/* Viser Sanity CMS-ressurser */}
      </Routes>
    </Layout>
  );
}

export default App;
