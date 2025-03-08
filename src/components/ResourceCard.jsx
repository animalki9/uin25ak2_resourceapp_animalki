import React from "react";
import { Link } from "react-router-dom";
import resources from "../assets/resources";
import '../styles/ResourceCard.scss';

// Definerer og eksporterer en funksjonell komponent kalt ResourceCard
export default function ResourceCard({ category }) {
    // Filtrerer ressurser basert på kategorien som sendes inn som prop
    const filteredResources = resources.filter(resource => resource.category === category);

    return (
        <>
            {/* Sjekker om det finnes ressurser i den valgte kategorien */}
            {filteredResources.length > 0 ? (
                // Mapper gjennom de filtrerte ressursene og viser dem som artikler
                filteredResources.map(resource => (
                    <article className="resources" key={resource.title}>
                        <h3>{resource.title}</h3> {/* Viser tittelen på ressursen */}
                        <ul>
                            <li>
                                <Link to={resource.url}>Les mer her...</Link> {/* Klikkbar lenke til ressursen */}
                            </li>
                        </ul>
                    </article>
                ))
            ) : null}  {/* Viser ingenting hvis ingen ressurser er funnet */}
        </>
    );
}
