import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Briefcase as Certificate,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  const workExperience = [
    {
      title: "IT Projects Manager",
      company: "MCB Bank",
      location: "Lahore, Pakistan",
      period: "Oct 2024 – Present",
      highlights: [
        "Leading MCB to become the first bank in Pakistan to deploy FCUBS v14.7 Core Banking System in Bahrain",
        "Pioneering AI-based Compliance Query Engine for enhanced document accessibility",
        "Overseeing KYC system deployment across UAE with regulatory compliance",
        "Coordinating with ITG departments (Network, IS, KM) for internal product development",
      ],
    },
    {
      title: "Co-Founder",
      company: "LordDevs",
      location: "Pakistan · Remote",
      period: "May 2023 – Present",
      highlights: [
        "Co-founded LordDevs AI Software Company, generating over $20K in profits",
        "Led design of AI-based SaaS product workflows including LLM-powered chatbots",
        "Developed workflows and built pipelines for Agentic AI solutions",
        "Managed backend infrastructure and coordinated between clients and developers",
        "Implemented and deployed scalable AI solutions with fine-tuning pipelines for open-source models",
        "Worked on KAG and RAG for effective documentation solutions and multimodal RAG",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Yottacom Technologies",
      location: "Pakistan · On-site",
      period: "Jul 2024 – Oct 2024",
      highlights: [
        "Learned GKE and Ray Framework to deploy and scale ML models for inference with multiple clusters",
        "Optimized parameters of training pipeline for Stable Diffusion and Flux models",
        "Developed and improved Django modules with pipeline optimizations for realistic face swapping",
        "Integrated face swapping into video pipeline and deployed on serverless platform (Cerebrium)",
        "Researched and implemented motion models (Mimic-Motion, Open-Sora) and their pipelines",
        "Worked on generative AI APIs and structured outputs to build RAG pipelines",
      ],
    },
    {
      title: "Software Engineer",
      company: "Yottacom Technologies",
      location: "Lahore, Pakistan",
      period: "Jul 2024 – Oct 2024",
      highlights: [
        "Built ingestion pipeline using FAISS integrating web crawlers, PDFs, and OCR-processed images",
        "Connected FAISS with RAG framework under Agile methodologies for feature integration",
        "Deployed deep learning pipelines for Stable Diffusion with LoRA and DreamBooth fine-tuning",
        "Developed and deployed face swap pipeline on AWS server with optimized performance",
      ],
    },
  ]

  const researchPapers = [
    {
      title: "DermNet: Integrative CNN-ViT Architecture for Bias Mitigation in Dermatological Diagnostics",
      status: "Under review in Springer Scientific Reports",
      date: "01/10/2023 – 01/02/2025",
      highlights: [
        "9% bias reduction between skin tones",
        "CNN-ViT with Meta's SAM",
        "Unsupervised lesion segmentation",
      ],
    },
    {
      title: "Automated EARS-Based Requirement Generation with Lightweight Large Language Models",
      status: "Accepted at ICTMOD 2025",
      date: "01/05/2025 – 01/08/2025",
      highlights: ["Fine-tuned 4 lightweight models", "9,000+ requirements dataset", "Lead author"],
    },
    {
      title: "Digital Health in Focus: Identifying Early Indicators of Problematic Internet Use in Children",
      status: "Submitted to Journal of Innovation and Knowledge",
      date: "01/10/2024 – 01/05/2025",
      highlights: ["xAI-based framework", "Interpretable predictions", "Comparative ML analysis"],
    },
  ]

  const projects = [
    {
      title: "Compliance AI SRA Laws",
      description:
        "End-to-end data ingestion with Graph RAG, HYDE, and Hybrid Search for regulatory compliance automation",
      technologies: ["Graph RAG", "LLM Fine-tuning", "Legal Framework", "Compliance Automation"],
      link: "https://compl-ai-frontend.vercel.app/",
    },
    {
      title: "MindHush",
      description:
        "Empathetic AI system for mental health support with fine-tuned LLM for humane and contextual responses",
      technologies: ["LLM Fine-tuning", "NLP", "Mental Health AI", "Empathetic AI"],
      link: "https://mindhush.ai/",
    },
    {
      title: "Suture Analytics",
      description:
        "Predictive model for surgical outcomes in pediatric suture surgery with comprehensive statistical analysis",
      technologies: ["Predictive Modeling", "Statistical Analysis", "Healthcare AI"],
      link: "#",
    },
  ]

  const expertise = [
    {
      category: "AI & ML",
      skills: [
        "RAG/Graph RAG",
        "LLM Fine-tuning",
        "Deep Learning",
        "NLP",
        "Explainable AI",
        "Multimodal AI",
        "Agentic AI",
      ],
    },
    {
      category: "Technical",
      skills: ["Python", "PyTorch", "TensorFlow", "Node.js", "Docker", "Azure", "SQL", "GKE", "Ray Framework"],
    },
    {
      category: "Domains",
      skills: [
        "Healthcare AI",
        "Finance",
        "Compliance Automation",
        "Medical Diagnostics",
        "Legal Framework",
        "Generative AI",
      ],
    },
    {
      category: "Professional",
      skills: [
        "Project Management",
        "Team Leadership",
        "Agile",
        "Research & Writing",
        "Cloud Deployment",
        "Business Analysis",
      ],
    },
  ]

  const certificates = [
    {
      title: "McKinsey Forward Certification",
      issuer: "McKinsey & Company",
      date: "Feb 2025",
    },
    {
      title: "Microsoft Azure AI-900",
      issuer: "Microsoft",
      date: "Jun 2021",
    },
    {
      title: "CS50X",
      issuer: "Harvard",
      date: "Completed",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "Completed",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      date: "Completed",
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "Coursera",
      date: "Completed",
    },
    {
      title: "Exploratory Data Analysis with Python and Pandas",
      issuer: "Coursera",
      date: "Completed",
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Coursera",
      date: "Completed",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header Section */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-3">
                Muhammad Huzaifa Imran
              </h1>
              <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                AI Research & Enterprise Solutions Specialist
              </p>
              <p className="text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed text-lg">
                Highly accomplished AI professional specializing in Retrieval-Augmented Generation (RAG/KAG), multimodal
                AI, and enterprise AI applications. Passionate about advancing medical diagnostics and healthcare
                accessibility through interpretable, bias-aware AI research.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
            <a
              href="mailto:m.huzaifa.imran@outlook.com"
              className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">m.huzaifa.imran@outlook.com</span>
            </a>
            <a
              href="tel:+923344550990"
              className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">(+92) 334 455 0990</span>
            </a>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Work Experience */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {workExperience.map((job, idx) => (
              <Card
                key={idx}
                className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <span>{job.location}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300">
                      <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Papers */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Research & Publications</h2>
          </div>
          <div className="grid gap-6">
            {researchPapers.map((paper, idx) => (
              <Card
                key={idx}
                className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight">{paper.title}</h3>
                  <Badge className="whitespace-nowrap text-xs bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100">
                    {paper.status}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-medium">{paper.date}</p>
                <div className="flex flex-wrap gap-2">
                  {paper.highlights.map((highlight, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Brain className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-8 flex flex-col hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{project.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Expertise & Skills */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Expertise & Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((group, idx) => (
              <Card key={idx} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-8">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Certificate className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications & Training</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certificates.map((cert, idx) => (
              <Card key={idx} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg flex-shrink-0">
                    <Certificate className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">{cert.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{cert.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Education</h2>
          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-8">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
              Bachelor of Science in Computer Engineering
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
              COMSATS University Islamabad, Lahore Campus
            </p>
            <div className="space-y-2 text-slate-700 dark:text-slate-300">
              <p>
                <span className="font-semibold">CGPA:</span> 3.41/4.00
              </p>
              <p>
                <span className="font-semibold">Thesis:</span> DermNet - Integrative CNN-ViT Architecture for Bias
                Mitigation in Dermatological Diagnostics
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">Graduated: Aug 2024</p>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 rounded-xl p-12 text-center text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm actively seeking research collaborations in AI for healthcare, bias mitigation, and interpretable AI
            systems. Let's work together to advance the field and create meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold" asChild>
              <a href="mailto:m.huzaifa.imran@outlook.com">Get in Touch</a>
            </Button>
            <Button
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent font-semibold"
              asChild
            >
              <a href="https://linkedin.com/in/muhammadhuza" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-600 dark:text-slate-400 text-sm">
          <p>© 2025 Muhammad Huzaifa Imran. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
