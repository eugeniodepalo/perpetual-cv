import featuristLogo from "@/assets/featurist.svg"
import kayakoLogo from "@/assets/kayako.svg"
import smartLogo from "@/assets/smart.webp"
import tallariumLogo from "@/assets/tallarium.svg"
import zapnitoLogo from "@/assets/zapnito.svg"
import britishGasLogo from "@/assets/british-gas.svg"
import safetytoolboxLogo from "@/assets/safetytoolbox.webp"

export const data = {
  name: "Eugenio Depalo",
  title: "Senior Full-stack Software Engineer",
  email: "eugeniodepalo@gmail.com",
  github: "eugeniodepalo",
  description1: 
    "I am a passionate engineer who thrives on solving complex problems, " +
    "and is always eager to learn and share knowledge.",
  description2:
    "With extensive experience building products and taking them from concept to MVP, " +
    "my passion lies in building impactful software and helping teams succeed.",
  clients: [
    {
      name: "Featurist",
      logo: featuristLogo,
      url: "https://featurist.co.uk",
    },
    {
      name: "Kayako",
      logo: kayakoLogo,
      url: "https://kayako.com",
    },
    {
      name: "Smart",
      logo: smartLogo,
      url: "https://smart.co",
    },
    {
      name: "Tallarium",
      logo: tallariumLogo,
      url: "https://tallarium.com",
    },
    {
      name: "SafetyToolbox",
      logo: safetytoolboxLogo,
      url: "https://safetytoolbox.co.uk",
    },
    {
      name: "Zapnito",
      logo: zapnitoLogo,
      url: "https://zapnito.com",
    },
    {
      name: "British Gas",
      logo: britishGasLogo,
      url: "https://britishgas.co.uk",
    },
  ],
  skills: [
    "TypeScript",
    "Node.js",
    "React",
    "Ember",
    "Next.js",
    "Remix",
    "PostgreSQL",
    "GraphQL",
    "Apollo",
    "React Query",
    "Cypress",
    "Playwright",
    "Jest",
    "React Testing Library",
    "OpenAPI",
    "GraphQL",
    "Ruby",
    "Rails",
    "RSpec",
    "Rust",
    "Rocket",
    "Axum",
    "Diesel",
    "Docker",
    "AWS",
    "Terraform",
    "Ansible",
    "Unix",
    "MUI",
    "Tailwind",
    "Elixir",
    "Python",
    "ReasonML",
    "Bash",
    "C",
    "C#",
    "C++",
    ".NET",
    "Objective-C",
    "Swift",
  ],
  experience: [
    {
      company: "Reward Gatway",
      role: "Senior front-end engineer",
      date: "2024 - present",
      url: "https://www.rewardgateway.com",
    },
    {
      company: "Smart",
      role: "Senior React engineer",
      date: "2023 - 2024",
      url: "https://smart.co",
    },
    {
      company: "Freelance",
      role: "Senior full-stack developer",
      date: "2016 - 2023",
    },
    {
      company: "AlphaSights",
      role: "Senior front-end developer",
      date: "2014 - 2016",
      url: "https://alphasights.com",
    },
    {
      company: "Listora",
      role: "Front-end developer",
      date: "2013 - 2014",
    },
    {
      company: "Responsa",
      role: "Co-founder and lead developer",
      date: "2012 - 2013",
      url: "https://responsa.ai",
    },
    {
      company: "H-umus",
      role: "Junior iOS developer",
      date: "2011 - 2012",
    },
    {
      company: "Glipper",
      role: "Open source contributor",
      date: "2006 - 2008",
      url: "https://github.com/eugeniodepalo/glipper-lite",
    },
  ],
}

export type Data = typeof data
