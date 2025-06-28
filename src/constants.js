// Skills Section Logo's
import AWSlLogo from './assets/tech_logo/AWS.png';
import AzureLogo from './assets/tech_logo/Azure.png';
import GCPLogo from './assets/tech_logo/GCP.png';
import AZDLogo from './assets/tech_logo/AZD.png';
import ArgoLogo from './assets/tech_logo/ArgoCD.png';
import GHALogo from './assets/tech_logo/GHA.png';
import JenkinsLogo from './assets/tech_logo/Jenkins.png';
import TFLogo from './assets/tech_logo/TF.png';
import DockerLogo from './assets/tech_logo/Docker.png';
import K8SLogo from './assets/tech_logo/K8S.png';
import HelmLogo from './assets/tech_logo/Helm.png';
import CWLogo from './assets/tech_logo/CloudWatch.png';
import PromLogo from './assets/tech_logo/Prom.png';
import GFLogo from './assets/tech_logo/Grafana.png';
import ElasticLogo from './assets/tech_logo/ElasticSearch.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import linuxLogo from './assets/tech_logo/Linux.png';
import bashLogo from './assets/tech_logo/Bash.png';
import pyLogo from './assets/tech_logo/python.png';


// Experience Section Logo's
import msxLogo from './assets/company_logo/msx.jpeg'

// Education Section Logo's
import cdacLogo from './assets/education_logo/cdac.png';
import mgmLogo from './assets/education_logo/mgm.png';
import apvLogo from './assets/education_logo/apv.avif';
import sdaLogo from './assets/education_logo/sda.jpeg';

// Project Section Logo's
import springLogo from './assets/work_logo/reactspringboot.png';
import staticLogo from './assets/work_logo/S3_static_website.jpg';

export const SkillsInfo = [
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', logo: AWSlLogo },
      { name: 'Azure', logo: AzureLogo },
      { name: 'GCP', logo: GCPLogo },
    ],
  },
  {
    title: 'Containerization & Orchestration',
    skills: [
      { name: 'Kubernetes', logo: DockerLogo },
      { name: 'Docker', logo: K8SLogo },
      { name: 'Helm', logo: HelmLogo },
    ],
  },
  {
    title: 'CI/CD & IaC Automation',
    skills: [
      { name: 'Terraform', logo: TFLogo },
      { name: 'Azure DevOps', logo: AZDLogo },
      { name: 'Argo CD', logo: ArgoLogo },
      { name: 'GitHub Actions', logo: GHALogo },
      { name: 'Jenkins', logo: JenkinsLogo },
      // { name: 'Code Pipeline', logo: CPLogo },
    ],
  },
  {
    title: 'Monitoring and Observability',
    skills: [
      { name: 'Prometheus', logo: PromLogo },
      { name: 'Grafana', logo: GFLogo },
      { name: 'ElasticSearch', logo: ElasticLogo },
      { name: 'CloudWatch', logo: CWLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
  {
    title: 'Scripting',
    skills: [
      { name: 'Linux', logo: linuxLogo },
      { name: 'Bash', logo: bashLogo },
      { name: 'Python', logo: pyLogo },
    ],
  }
];

  export const experiences = [
    {
      id: 0,
      img: msxLogo,
      role: "SRE, DevOps Engineer",
      company: "Mindstix Software Labs",
      date: "April 2023 - Present",
      desc: "Designing and managing highly available cloud infrastructure on AWS and Azure. Automating CI/CD pipelines, container orchestration, and infrastructure provisioning using modern DevOps practices. Driving reliability, scalability, and security across cloud-native applications while contributing to cross-functional collaboration and developer enablement.",
      skills: [
        "AWS",
        "Azure",
        "Terraform",
        "GitHub Actions",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Helm",
        "ArgoCD",
        "CI/CD"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: cdacLogo,
      school: "CDAC",
      date: "Sept 2022 - March 2023",
      grade: "7.81 CGPA",
      desc: "",
      degree: "Diploma in Advanced Computing",
    },
    {
      id: 1,
      img: mgmLogo,
      school: "MGM College of Engineering and Technology, Mumbai",
      date: "Aug 2017 - May 2020",
      grade: "73.2%",
      desc: "",
      degree: "Bachelor of Engineering",
    },
    {
      id: 1,
      img: apvLogo,
      school: "Agnels Polytechnic, Mumbai",
      date: "Aug 2014 - May 2017",
      grade: "73.2%",
      desc: "",
      degree: "Diploma",
    },
    {
      id: 3,
      img: sdaLogo,
      school: "SDA English High School, Sanpada",
      date: "Apr 2013 - March 2014",
      grade: "78%",
      desc: "",
      degree: "ICSE Matriculation",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CRUD Operations",
      description:
        "This project was built to explore and implement modern DevOps practices while working with the latest technologies. I set up a secure and automated CI/CD pipeline using GitHub Actions and integrated it with AWS ECR (Elastic Container Registry) using OIDC (OpenID Connect) for credential-less authentication.The entire infrastructure, including the ECR repository, was provisioned using Infrastructure as Code (IaC) with tools like Terraform/CDK, ensuring consistency, scalability, and version control. The pipeline automates Docker image builds and pushes to ECR upon every code update, following a fully automated and secure deployment workflow. Live Hosting is disabled due to cost constraints",
      image: springLogo,
      tags: ["React", "SpringBoot", "AWS", "ECR", "OIDC", "GitHub Actions"],
      github: "https://github.com/Akshay-Durgade/fullstack-practice",
      webapp: "",
    },
    {
      id: 0,
      title: "Static Website Infra",
      description:
        "This project focuses on building secure and scalable infrastructure for hosting static websites on AWS, following modern DevOps and cloud best practices. The infrastructure was provisioned using Infrastructure as Code (IaC) tools such as Terraform or AWS CDK, enabling reproducibility and automation.It includes setting up an S3 bucket for static content hosting, configuring CloudFront as a CDN for global content delivery, and implementing OAI (Origin Access Identity) for secure access. Route 53 was used for custom domain DNS management, and GitHub Actions was integrated for CI/CD automation, enabling seamless deployments with every code push. Live Hosting is disabled due to cost constraints",
      image: staticLogo,
      tags: ["S3", "CloudFront", "Terraform", "OAC/OAI","GitHub Actions"],
      github: "https://github.com/Akshay-Durgade/portfolio",
      webapp: "",
    },
  ];  