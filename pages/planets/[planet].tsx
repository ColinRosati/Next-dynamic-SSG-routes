import { Layout } from "@/layouts/layout";
import { getAllPlanets, getPlanetsData } from "@/libs/planets/planets";
import Planet from "@/types/planets";

interface PlanetPageProps {
    planets: Planet[];
    planet: Planet;
}

export default function PlanetPage({planet, planets}: PlanetPageProps) { 
    return (
        <> 
          <Layout planets={planets.map(planet => planet.name)}>
            <div> 
              name: {planet.name}<br/>
              climate: {planet.climate}<br/>
              terrain: {planet.terrain}<br/>
              surface_water: {planet.surface_water}<br/>
              population: {planet.population}<br/>
            </div>
          </Layout>
        </>
    )
}

export async function getStaticProps({ params }: { params: { planet: string } }) {
  const planets = (await getPlanetsData());
  const planet = planets.find((planet) => planet.name === params.planet);

  return {
    props: { 
        planets,
        planet
    }
  }
}

export async function getStaticPaths() {
const paths = await getAllPlanets();

return {
  paths: paths,
  fallback: false,
};
}
