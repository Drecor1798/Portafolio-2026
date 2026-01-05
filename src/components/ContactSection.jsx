import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {

        },1500)
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                {/* TITULO PRINCIPAL */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
                    Mis <span className="text-primary">Contactos</span>
                </h2>

                {/* DESCRIPCION */}
                <p className="text-sm sm:text-base md:text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Si tienes una idea, proyecto o simplemente quieres ponerte en contacto,
                    estaré encantado de leerte.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* INFORMACION DE CONTACTO */}
                    <div className="space-y-6 md:space-y-8">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6">
                            Información de contacto
                        </h3>

                        <div className="space-y-4 md:space-y-6">

                            {/* EMAIL */}
                            <div className="flex items-start space-x-3 md:space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-sm md:text-base font-medium">Email</h4>
                                    <a
                                        href="mailto:drecor1798@hotmail.com"
                                        className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        drecor1798@hotmail.com
                                    </a>
                                </div>
                            </div>

                            {/* PHONE */}
                            <div className="flex items-start space-x-3 md:space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-sm md:text-base font-medium">Teléfono</h4>
                                    <a
                                        href="tel:+541169968177"
                                        className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +54 11 6996-8177
                                    </a>
                                </div>
                            </div>

                            {/* LOCATION */}
                            <div className="flex items-start space-x-3 md:space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-sm md:text-base font-medium">Ubicación</h4>
                                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                                        Buenos Aires, Almirante Brown, Claypole
                                    </p>
                                </div>
                            </div>

                            {/* REDES SOCIALES */}
                            <div className="pt-6 md:pt-8">
                                <h4 className="text-sm md:text-base font-medium mb-2 md:mb-4">Mis redes</h4>
                                <div className="flex space-x-3 md:space-x-4">
                                    <a
                                        href="https://www.linkedin.com/in/alexis-andres-aguilar-cornejo/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                                    </a>
                                    <a
                                        href="https://github.com/Drecor1798"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="h-5 w-5 md:h-6 md:w-6" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/drecor1798/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram className="h-5 w-5 md:h-6 md:w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FORMULARIO */}
                    <div className="bg-card p-6 md:p-8 rounded-lg shadow-xs">
                        <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-4 md:mb-6">
                            Puedes enviarme un mensaje
                        </h3>

                        <form className="space-y-4 md:space-y-6" action="https://formspree.io/f/xjgbdngj" method="POST">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-xs sm:text-sm md:text-base font-medium mb-1 md:mb-2"
                                >
                                    Tu nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm md:text-base"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-xs sm:text-sm md:text-base font-medium mb-1 md:mb-2"
                                >
                                    Tu Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm md:text-base"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-xs sm:text-sm md:text-base font-medium mb-1 md:mb-2"
                                >
                                    Tu mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-xs sm:text-sm md:text-base"
                                />
                            </div>

                            <button
                                type="submit"
                                className={cn("cosmic-button w-full flex items-center gap-2 text-xs sm:text-sm md:text-base")}
                            >
                                Enviar el Mensaje
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
