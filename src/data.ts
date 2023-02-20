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
  description2: "Open to remote and central London-based contracting gigs.",
  description1:
    "I have worked with many clients in the UK, both small and large, and either as a full-stack developer or a front-end specialist. " +
    "I have extensive experience in both worlds but I've gravitated more towards front-end technologies in recent years.",
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
    "Cypress",
    "Jest",
    "React Testing Library",
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
    "Bootstrap",
    "Elixir",
    "Phoenix",
    "Python",
    "OCaml",
    "ReasonML",
    "Bash",
    "C",
    "C#",
    "C++",
    ".NET",
    "Cocoa",
    "Objective-C",
    "Swift",
  ],
  experience: [
    {
      company: "Freelance",
      role: "Senior full-stack developer",
      date: "2016 - present",
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
