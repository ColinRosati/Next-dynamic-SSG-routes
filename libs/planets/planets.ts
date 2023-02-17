import fs from "fs";

import Planet from "@/types/planets";

const write = (data: string) => {
  fs.writeFile("store.json", data, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }
  });
};

let planets: Planet[];
export async function getPlanetsData() {
  if (!planets) {
    const planetsFromFile = fs.readFileSync("store.json", "utf8");
    if (!planetsFromFile) {
      planets = (await (await fetch("https://swapi.dev/api/planets")).json())
        .results;
      write(JSON.stringify(planets));
    } else {
      planets = JSON.parse(planetsFromFile);
    }
  }

  return planets;
}

export async function getAllPlanets() {
  const planetsData = await getPlanetsData();

  return planetsData.map((fileName) => {
    return {
      params: {
        planet: fileName.name,
      },
    };
  });
}
