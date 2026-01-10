import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Tienda de Comics",
        description: "Una simulacion de una tienda de comics creada con react y con una base de datos de fierbase.",
        image: "/Projects/Captura de pantalla 2026-01-03 224000.png",
        tags: ["RectJS", "CSS", "fierbase"],
        demoUrl: "https://tienda-de-comics-phi.vercel.app/",
        githubUrl: "https://github.com/Drecor1798/Tienda_de_comics"
    },

    {
        id: 2,
        title: "Billetera virtual",
        description: "Simulacion de billetera virtual con usuarios determinados con una api creada con HTML, CSS, SASS, JavaScript",
        image: "/Projects/Captura de pantalla 2026-01-03 223954.png",
        tags: ["HTML", "CSS", "SASS", "JavaScript"],
        demoUrl: "https://proyecto-pagina-billetera-digital.vercel.app/",
        githubUrl: "https://github.com/Drecor1798/proyecto_pagina_para_invertir"
    },


    {
        id: 3,
        title: "Carrito de compras",
        description: "Un carrito de compra con una api de productos, creado con React y CSS",
        image: "/Projects/Captura de pantalla 2026-01-03 223946.png",
        tags: ["RectJS", "CSS"],
        demoUrl: "https://carrito-compra-prueba.netlify.app/",
        githubUrl: "https://github.com/Drecor1798/carrito-de-compras"
    },


    {
        id: 4,
        title: "App del clima",
        description: "App capas de notificar el clima actual de una ciudad solicitada, creada con ReactJS y CSS",
        image: "/Projects/Captura de pantalla 2026-01-03 223936.png",
        tags: ["RectJS", "CSS"],
        demoUrl: "https://deluxe-crumble-ea1284.netlify.app/",
        githubUrl: "https://github.com/Drecor1798/app-clima-react"
    },

    {
        id: 5,
        title: "Formuloario de registro",
        description: "Una simulacion de un formularo de registro, creado con HTML, CSS y JavaScript",
        image: "/Projects/Captura de pantalla 2026-01-03 223930.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://app.netlify.com/projects/validacion-html-css/overview",
        githubUrl: "https://github.com/Drecor1798/validacion-formulario-curso-javascript"
    },

    {
        id: 6,
        title: "Simulador de Login",
        description: "Una simulacion de un login de cualquier pagina creada con HTML, CSS y JavaScript",
        image: "/Projects/Captura de pantalla 2026-01-03 223922.png",
        tags: ["HTML", "CSS"],
        demoUrl: "https://ingreso-html-css.netlify.app/",
        githubUrl: "https://github.com/Drecor1798/login-validado-Javascript"
    },

    {
        id: 7,
        title: "App de peliculas",
        description: "App que muestra el titul de una pelicula y una brebe descripccion de la misma a partir de un nombre, creada con RectJS y CSS",
        image: "/Projects/Captura de pantalla 2026-01-03 223914.png",
        tags: ["RectJS", "CSS"],
        demoUrl: "https://heroic-sfogliatella-53f72a.netlify.app/",
        githubUrl: "https://github.com/Drecor1798/appPeliculas"
    },

    {
        id: 8,
        title: "Simulador de red Social",
        description: "Una simulacion de una red social, creada con HTML, CSS y JavaScript",
        image: "/Projects/image.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://transcendent-cannoli-2819ec.netlify.app/",
        githubUrl: "https://github.com/Drecor1798/red-social-en-javascript"
    },

    {
        id: 9,
        title: "Plataforma Inteligente para la Selección Óptima de Zonas de Cultivo de las 100 prinsipales ciudades sugun Forbes",
        description: "Es una herramienta basada en datos climáticos y geoespaciales que identifique las ciudades o regiones con las condiciones óptimas de temperatura, precipitación y radiación solar para el cultivo de especies agrícolas específicas.",
        image: "/Projects/1.png",
        tags: ["Python"],
        githubUrl: "https://github.com/Drecor1798/Proyecto_coderHouse_ciencia_de_datos"
    },

    {
        id: 10,
        title: "Comparacion minera",
        description: "Este proyecto busca visualizar el estado de la mineria en Argentina con el resto del mundo.",
        image: "/Projects/3.png",
        tags: ["Python"],
        githubUrl: "https://github.com/Drecor1798/proyecto_coderhouse"
    },

    {
        id: 11,
        title: "Análisis de la Transcripción de Serie de TV",
        description: "Este codigo busca analisar los textos de los dialogos de los protagonistas de la serie asi como su rango empcional durante las temporadas.",
        image: "/Projects/2.png",
        tags: ["Python"],
        githubUrl: "https://github.com/Drecor1798/proyecto_final_ciencia_de_datos_parte_1/tree/main"
    },

    {
        id: 12,
        title: "Proyecto BackEnd",
        description: "Este codigo es un simlador de una tienda digital con un BackEnd que el administrador pueda agregar productos con facilidad, este proyecto fue creado con JavaScript, Express, handlebars y con una base de datos en Mongo.",
        image: "/Projects/5.png",
        tags: ["JavaScript", "Express.JS", "Handlebars", "MongoDB"],
        githubUrl: "https://github.com/Drecor1798/tienda_backend/tree/main"
    },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* TITULO */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Esta sección muestra los proyectos en los que he trabajado, reflejando mi aprendizaje y evolución como desarrollador.
        </p>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* IMAGEN */}
              <div className="h-48 sm:h-56 md:h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* TAGS */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-[10px] sm:text-xs md:text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* TITULO */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 px-4 sm:px-5 md:px-6">
                {project.title}
              </h3>

              {/* DESCRIPCION */}
              <p className="text-muted-foreground text-sm sm:text-base md:text-md mb-4 px-4 sm:px-5 md:px-6">
                {project.description}
              </p>

              {/* LINKS */}
              <div className="flex justify-between items-center px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTON GITHUB */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <a
            href="https://github.com/Drecor1798"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3"
          >
            Puedes ver mi GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};