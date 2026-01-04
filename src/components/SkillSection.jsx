import { useState } from "react"
import { cn } from "../lib/utils";

const skills = [
    // WEB DESIGN
  { name: "UI/UX Design", level: 90, category: "web designer" },
  { name: "HTML5", level: 95, category: "web designer" },
  { name: "CSS3", level: 95, category: "web designer" },
  { name: "Flexbox & Grid", level: 90, category: "web designer" },
  { name: "Tailwind CSS", level: 85, category: "web designer" },
  { name: "Bootstrap", level: 85, category: "web designer" },
  { name: "Canva / Diseño visual", level: 80, category: "web designer" },

  // FRONTEND
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "APIs REST / JSON", level: 80, category: "frontend" },
  { name: "Responsive Design", level: 90, category: "frontend" },
  { name: "Fierbase", level: 80, category: "frontend" },

  // BACKEND
  { name: "Node.js", level: 85, category: "backend" },
  { name: "MongoDB / NoSQL", level: 80, category: "backend" },
  { name: "APIs REST", level: 85, category: "backend" },
  { name: "AWS / Cloud", level: 70, category: "backend" },

  // MARKETING DIGITAL
  { name: "Social Media Management", level: 80, category: "marketing" },
  { name: "Facebook & Instagram Ads", level: 75, category: "marketing" },
  { name: "Google Ads", level: 70, category: "marketing" },
  { name: "eCommerce / TiendaNube", level: 75, category: "marketing" },
  { name: "Content Strategy", level: 80, category: "marketing" },

  // DATA SCIENCE
  { name: "Python", level: 80, category: "data science" },
  { name: "Power BI", level: 85, category: "data science" },
  { name: "Excel Avanzado", level: 90, category: "data science" },
  { name: "Machine Learning (básico)", level: 70, category: "data science" },
  { name: "Data Analysis & Visualization", level: 85, category: "data science" },

  
  // TOOLS
  { name: "GitHub", level: 85, category: "tools" },
  { name: "VSCode", level: 90, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Postman", level: 75, category: "tools" }
];

const categories = ["all", "web designer", "frontend", "backend", "marketing", "data science", "tools"];

export const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Mis <span className="text-primary"> Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} onClick={() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forefround hover:bd-second"
                    )}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                        style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skill.level}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section> 
}
