// SRUM Master Eduardo Porras
// Pagina elegida: Perfil de LinkedIn

const perfilEduardo = [
  {
    name: "Eduardo",
    lastname: "Porras",
    age: 21,
    nationality: "Ecuatoriano",
    location: "Quito, Ecuador",
    education: "Universidad EPN",
    career: "Desarrollo de Software",
    description: "Student of the EPN",
    address: {
      telephone: "02 35 74 283",
      email: "eduardo.porras@epn.edu.ec",
      streets: {
        main: "Calle C",
        secundary: "Calle B",
      },
    },
  },
];
//Iteracion de cada plan para mostrar la informacion que yo quiero
const newPerfilEduardoFront = perfilEduardo.map((pe) => {
  return {
    name: pe.name,
    lastname: pe.lastname,
    age: pe.age,
    nationality: pe.nationality,
    location: pe.location,
    education: pe.education,
  };
});

console.log(newPerfilEdu);

// Arreglos

const conocimientos = ["Pythons", "Postgres", "Java", "C++", "HTML"];
const [
  conocimiento1,
  conocimiento2,
  conocimiento3,
  conocimiento4,
  conocimiento5,
] = conocimientos;
console.log(conocimiento3);

const aptitudes = [
  "Liderazgo",
  "Aprendizaje continuo",
  "Formacion Continua",
  "Comunicacion",
];
aptitudes.length >= 5
  ? console.log("Aptitudes Completas")
  : console.log("Se puede agregar otra aptitud");

let result = aptitudes.find((aptitud) => aptitud === "Autodidacta");
result
  ? console.log("Esta aptitud ya existe")
  : console.log("La aptitud no existe");

let filterAptitude = aptitudes.filter((aptitud) => aptitud.startsWith("A"));
console.log("filterAptitude");

aptitudes.includes("Metologia Agil")
  ? console.log("Enlistar aptitud")
  : console.log("No se encontraron resultados para esa aptitud");
