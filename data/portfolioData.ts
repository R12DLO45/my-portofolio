export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools";
  level: "Primary" | "Secondary";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  gpa: string;
  status: string;
}

export const portfolioData = {
  personal: {
    name: "Mohammad Ubaidillah Ridlo",
    role: "Full-Stack Developer",
    status: "Fresh Graduate • Open to Work",
    location: "Kediri, Jawa Timur, Indonesia (GMT+7)",
    bio: "Fresh graduate Teknik Informatika (IPK 3.84) dengan pengalaman membangun web apps dan mobile ML classification. Fokus pada React dan problem-solving.",
    email: "ubaidillahridlo57@gmail.com",
    socials: {
      github: "https://github.com/R12DLO45",
      linkedin: "https://www.linkedin.com/in/mohammad-ubaidillah-ridlo",
      whatsapp: "https://wa.me/628883235818",
    },
  },

  services: [
    "Full-Stack Web Development (React + Next.js)",
    "Mobile App Development (Android + ML)",
  ],

  techStack: [
    { name: "React", category: "Frontend", level: "Primary" },
    { name: "Next.js", category: "Frontend", level: "Primary" },
    { name: "JavaScript", category: "Frontend", level: "Primary" },
    { name: "HTML/CSS", category: "Frontend", level: "Primary" },
    { name: "Android Development", category: "Tools", level: "Secondary" },
    { name: "Git / GitHub", category: "Tools", level: "Primary" },
  ] as TechItem[],

  projects: [
    {
      id: "waste-classification",
      title: "Klasifikasi Sampah Organik & Anorganik",
      category: "Machine Learning • Android App",
      description: "Aplikasi Android untuk klasifikasi sampah menggunakan MobileNetV2 dan TensorFlow Lite. Dataset 400 gambar dengan akurasi testing 97.5%. Implementasi CameraX untuk real-time classification.",
      tags: ["Android", "MobileNetV2", "TensorFlow Lite", "Machine Learning"],
      image: "/projects/waste-classification.png",
    },
    {
      id: "wifi-management",
      title: "WiFi Management System",
      category: "Full-Stack Web App",
      description: "Web app untuk manajemen WiFi dengan React frontend dan Supabase backend. Fitur pencatatan data dan monitoring dengan UI responsif.",
      tags: ["React", "Supabase", "Tailwind CSS", "Git/GitHub"],
      demoUrl: "https://wifi123.netlify.app/",
      repoUrl: "https://github.com/R12DLO45/wifi-management",
      image: "/projects/wifi-management.png",
    },
  ] as Project[],

  experience: [
    {
      id: "pkl-game",
      role: "Programmer Game",
      company: "PT Game dan Animasi Interaktif Arek Kediri",
      period: "April - Mei 2025",
      location: "Kediri, Jawa Timur",
      type: "Praktik Kerja Lapangan (PKL)",
      description: "Game development internship - pemrograman logika permainan, penerapan logic flow, dan pengujian game functionality.",
    },
  ] as Experience[],

  education: {
    degree: "S1 Teknik Informatika",
    university: "Universitas Nusantara PGRI Kediri",
    period: "2022 - 2026",
    gpa: "3.84",
    status: "Fresh Graduate",
  } as Education,
};