import { Code, Cpu, DatabaseIcon, Megaphone, Monitor, Settings } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* TITULO */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Full Stack Developer · Data Scientist · Web Designer
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Soy Desarrollador Web Full Stack y Data Scientist con más de 2 años de
              experiencia en el sector logístico, realizando tareas de data entry,
              análisis y visualización de datos. Me especializo en el uso de la
              tecnología y los datos como herramientas clave para la mejora de
              procesos, optimización operativa y apoyo a la toma de decisiones.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Cuento con experiencia en desarrollo web utilizando HTML, CSS,
              JavaScript, React y Node.js, además del diseño y consumo de APIs REST,
              manejo de JSON y bases de datos NoSQL como MongoDB. Complemento este
              perfil con conocimientos en Python, Power BI y Machine Learning
              aplicados al análisis de datos.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Actualmente me encuentro cursando la carrera de
              <strong> Ingeniería Informática en la Universidad Nacional de Avellaneda (UNDAV)</strong>,
              fortaleciendo mis fundamentos en sistemas, programación y arquitectura
              de software. De manera paralela, estoy ampliando mis conocimientos en
              <strong> AWS (Amazon Web Services)</strong>, enfocándome en servicios en
              la nube, despliegue de aplicaciones e infraestructuras escalables.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Asimismo, estoy realizando el curso
              <strong> Backend II: Diseño y Arquitectura Backend</strong>, donde
              profundizo en patrones de diseño, arquitecturas escalables, buenas
              prácticas y estructuración de proyectos backend robustos y
              mantenibles.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Me considero una persona analítica, organizada y proactiva, con fuerte
              orientación al aprendizaje continuo y la mejora constante de procesos,
              capaz de adaptarme rápidamente a nuevos desafíos tecnológicos.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button text-sm sm:text-base">
                Contacto
              </a>
              {/* <a
                href="/public/Documents/curriculum_alexis_aguilar.pdf"
                className="px-4 py-2 sm:px-6 sm:py-2 rounded-full border border-primary text-sm sm:text-base text-primary hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300"
              > 
                Download CV
              </a>*/}
            </div>
          </div>

          {/* ICONOS / SERVICIOS */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">

            {/** CARD EXAMPLE **/}
            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <Monitor className="h-5 w-5 md:h-6 md:w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold">Web Designer</h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Diseño interfaces web modernas, intuitivas y responsivas, aplicando principios de UI/UX y herramientas como Tailwind, Bootstrap y Canva.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold">Frontend Developer</h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Desarrollo interfaces dinámicas y escalables con JavaScript y React, integrando APIs REST y responsive design.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <Settings className="h-5 w-5 md:h-6 md:w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold">Backend Developer</h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Construyo aplicaciones backend con Node.js y MongoDB, aplicando buenas prácticas, seguridad y arquitecturas escalables.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <Megaphone className="h-5 w-5 md:h-6 md:w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold">Marketing Digital</h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Gestiono campañas online, redes sociales y estrategias de contenido, optimizando presencia digital y conversión en eCommerce.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 md:p-6 card-hover">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-full bg-primary/10">
                  <Cpu className="h-5 w-5 md:h-6 md:w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold">Data Science</h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Analizo y visualizo datos con Python, Power BI y Excel avanzado, aplicando metodologías data-driven y Machine Learning básico.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
