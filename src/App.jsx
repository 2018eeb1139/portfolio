import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Phone,
  LetterTextIcon,
  CodeIcon,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-[url('/placeholder-00pq4.png')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 tracking-tight">
            Aman Pratap Chandra
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 font-medium">
            Senior Software Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            IIT Ropar graduate specializing in Software Development Engineering
            with expertise in Generative AI, Full-Stack development, and modern
            web technologies. Delivered 10+ innovative projects in fast-paced
            environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a
                href="https://github.com/2018eeb1139"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My Work
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 bg-transparent"
              asChild
            >
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              IIT Ropar graduate with 3+ years of experience in Software
              Development Engineering at LTIMindtree
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a Senior Software Engineer at LTIMindtree with expertise in
                cutting-edge technologies like Generative AI, Frontend, Backend
                development, and various databases. I've successfully delivered
                10+ innovative projects within two years as part of the BFS
                Innovation Lab.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                With a strong foundation in Electrical Engineering from IIT
                Ropar and hands-on experience in modern web technologies, I
                specialize in creating scalable solutions that optimize
                performance and enhance user experience. I'm passionate about
                leveraging AI and modern frameworks to solve complex business
                problems.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  IIT Graduate
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  AI Enthusiast
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  Frontend Expert
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  6★ HackerRank
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-card rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/proffesional_pic.png"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center animate-float">
                <Code className="w-12 h-12 text-secondary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Code className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">JavaScript (ES6+)</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">C/C++</Badge>
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Globe className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Redux</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                  <Badge variant="outline">Material UI</Badge>
                  <Badge variant="outline">Shadcn</Badge>
                  <Badge variant="outline">Bootstrap</Badge>
                  <Badge variant="outline">Langchain</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Database className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">ChromaDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Smartphone className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Git/GitHub</Badge>
                  <Badge variant="outline">VS Code</Badge>
                  <Badge variant="outline">Linux</Badge>
                  <Badge variant="outline">Postman</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Some of my recent work that showcases my skills and expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src="/modern-ecommerce-dashboard.png"
                  alt="Full-Stack Ecommerce Website"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary">
                      <a
                        href="https://github.com/2018eeb1139/ecommerce-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {/* <Button size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button> */}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  Full-Stack Ecommerce Website
                </CardTitle>
                <CardDescription>
                  Built a fully functional ecommerce website from scratch with
                  Redux state management, JWT authentication, and RESTful API
                  for product management and order processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    React 18
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Redux
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Tailwind
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src="/project2.png"
                  alt="Cold Mail Generator"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary">
                      <a
                        href="https://github.com/2018eeb1139/cold-email-generator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {/* <Button size="sm" variant="secondary">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button> */}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Cold Mail Generator</CardTitle>
                <CardDescription>
                  Built a custom LLM using ChatGroq API to generate personalized
                  cold emails. Uses Langchain for web scraping and ChromaDB for
                  vector matching of portfolio items.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Langchain
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ChromaDB
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Streamlit
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Pandas
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              My professional journey and key achievements
            </p>
          </div>
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Senior Software Engineer
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      LTIMindtree
                    </CardDescription>
                  </div>
                  <Badge variant="outline">July 2022 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground">
                  <li>
                    • Contributed to development and delivery of innovative
                    Banking and Financial solutions using Generative AI
                  </li>
                  <li>
                    • Successfully developed and delivered 7+ projects within
                    two years as part of BFS Innovation Lab
                  </li>
                  <li>
                    • Collaborated with cross-functional teams to deliver PoCs
                    and demonstrations to clients and partners
                  </li>
                  <li>
                    • Optimized web performance and cross-browser compatibility,
                    achieving 20% improvement in load times
                  </li>
                  <li>
                    • Demonstrated proficiency in deploying solutions using
                    Docker for seamless deployment and scalability
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Software Developer Intern
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      MyHashCode
                    </CardDescription>
                  </div>
                  <Badge variant="outline">June 2021 - August 2021</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground">
                  <li>
                    • Developed Common Grid Component with React JS for data
                    display with sorting, filtering, and pagination
                  </li>
                  <li>
                    • Designed Feedback page for rendering grid component and
                    identified Feedback APIs
                  </li>
                  <li>
                    • Created Redux Store for CRUD operations in Internship
                    section (Add, Delete, Update, Load)
                  </li>
                  <li>
                    • Implemented API integration for dynamic data fetching and
                    state management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h3 className="font-heading font-bold text-3xl text-foreground mb-8 text-center">
              Education
            </h3>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      Bachelor of Technology in Electrical Engineering
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-secondary">
                      Indian Institute of Technology Ropar
                    </CardDescription>
                  </div>
                  <Badge variant="outline">July 2018 - May 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-3">
                  <strong>Coursework:</strong> Algorithm and Data Structure,
                  DBMS, OOPS, Linear Algebra, Basic Calculus, Differential
                  Equations, Digital Circuits
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • Top 98.67 percentile in JEE Advanced 2018
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • 6★{" "}
                    <a
                      href="https://www.hackerrank.com/profile/aman_chandra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      HackerRank
                    </a>{" "}
                    | 540+ Problems solved on{" "}
                    <a
                      href="https://leetcode.com/u/2018eeb1139/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      LeetCode
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Cricket Co-Representative, Event Management Team Head
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to bring your next project to life? Let's discuss how I can
              help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">
                    amanpratapchandra1999@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+91-6388424033</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <a
                    href="https://www.linkedin.com/in/aman-chandra-51993b16b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6 text-secondary-foreground" />
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/aman-chandra-51993b16b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <a
                    href="https://github.com/2018eeb1139"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-6 h-6 text-secondary-foreground" />
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">GitHub</h3>
                  <a
                    href="https://github.com/2018eeb1139"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <a
                    href="https://github.com/2018eeb1139"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CodeIcon className="w-6 h-6 text-secondary-foreground" />
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Leetcode</h3>
                  <a
                    href="https://leetcode.com/u/2018eeb1139/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground underline"
                  >
                    Leetcode Profile
                  </a>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your message..." rows={4} />
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © 2025 Aman Pratap Chandra. All rights reserved. Built with React,
            Shadcn, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
