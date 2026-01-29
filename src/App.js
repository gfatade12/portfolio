import React from 'react';
import { Container, Typography, Box, Link, Card, CardContent, Grid, Divider } from '@mui/material';
import headshot from './headshot.png';
import bgVideo from "./background_image2.webm";
import { keyframes } from "@mui/system";

const projects = [
  { title: 'Agentic RAG Assistant', description: 'An intelligent retrieval-augmented generation system that combines local language models with dynamic web search to deliver accurate, up-to-date responses. The assistant embeds user queries using a lightweight LLaMA-based model, retrieves relevant context from a MongoDB Atlas vector database using cosine similarity, and generates responses with an Ollama-powered chatbot. When internal knowledge is insufficient, the system autonomously queries the web, chunks and embeds new information, updates the database, and re-runs retrieval to ensure high-quality, context-aware answers.', key_features:["Python", "RAG", "Vector Database", "Cosine Similarity", "Web Search API", "Dynamic Chunking", "GenAI", "Embedding"], timeline: 'Dec 2025 – Jan 2026'}, 
  { title: 'The Boxer', description: 'A cardboard shredder/pulper that streamlined cardboard recycling for small businesses within 6 weeks. Conducted user research, built a functional prototype, and presented to investors and faculty judges. The project demonstrated a 50% reduction in cardboard waste volume and won recognition for its sustainability impact, positioning it as a potential cost-saving solution for facilities management.', key_features:["Embedded Systems", "Welding", "Circuit Design", "CAD Modeling", "Prototyping", "Product Design", "Research", "Product Testing"], timeline: 'May 2023 – Jun 2023'}, 
  { title: 'Wegmans Pathfinding Optimizer', description: 'A Python-based application that helps users plan an efficient in-store shopping route by combining real-world product data with classical search algorithms through an interactive graphical interface.', key_features:["Python","User GUI","Web Scraping","A* Algorithm","Key Metrics Display","Route Visualization"], timeline: 'Oct 2024' }, 
  { title: 'Vision Pivot', description:'An AI-powered physical sorting system that uses real-time computer vision and embedded control to classify and route objects using a dual-axis servo mechanism. The system bridges machine learning, hardware control, and user interaction through an integrated embedded pipeline.', key_features: ["Python","OpenCV","Teachable Machine (custom model)","Arduino","Raspberry Pi 5"], timeline: 'Mar 2025 – Apr 2025' },
  { title: 'FuelSense Recommender', description: 'An intelligent recommendation bot that personalizes gas station pricing suggestions using user demographics and location data. The system analyzes economic status, income, family size, and proximity to generate optimized recommendations, helping users identify the best nearby fuel options based on both cost and convenience.', key_features:["Python", "Data Analysis", "User profiling & Input processing", "Location-Based Services"], timeline: 'Jun 2022 – Aug 2023' }, 
];

const experience = [
  { job: 'IT Supply Chain Deliver Intern', company: 'Johnson & Johnson', duration: 'May 2025 – Aug 2025', info: 'Managed supply chain workflows in SAP by executing multiple user stories involving order setup, data modification, and relationship building. Designed and implemented an automated Jira-to-Power BI pipeline to streamline task tracking and improve cross-team communication by ~30%, leveraging Python and the Jira API to extract and clean large JSON datasets for dashboard reporting. Contributed to the GenAI Governance team by developing a chatbot with a RAG pipeline and governance-trained agents deployed on MCP servers, including prompt-engineering a routing agent to extract key information and link data to 15+ form sections, reducing user confusion and improving accuracy. Additionally, supported the AWS cloud migration for Vision Care, enabling company-wide data access and improving operational efficiency.' },
  { job: 'Software Engineering Digital Supply Chain Strategy & Execution Intern', company: 'Merck', duration: 'Jun 2024 – Aug 2024', info: 'I focused on enhancing AI-driven tools like Build-GPT to improve information retrieval and implemented automation scripts in rapid response, a materials site communicator. I optimized team communication and collaboration through Confluence, a collaboration and knowledge tool, created strategic roadmaps for seamless system upgrades, and collaborated with cross-functional teams to improve the safety stock application, increasing data visibility across over 18 sites. Additionally, I led the development of business cases for five key project initiatives, streamlining project management and enhancing overall team performance.' },
  {job: 'IT Student Consultant', company: 'Syracuse University', duration: 'Dec 2022 – Ongoing', info: 'I work, on average, 20 hours a week in the Syracuse University ITS service center. I aid students, faculty, and visitors with their laptops, school accounts, and any general computing issues they may have.' }
];

const fadecircuits = keyframes`
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.5;
  }
`;

function App() {
  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        muted
        playsInline
        loop
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.31,
        }}
      >
        <source src={bgVideo} type="video/webm" />
      </video>
      {/* Animated Overlay */}
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: `
          radial-gradient(circle at 20% 30%, rgba(9,132,227,0.25), transparent 60%),
          radial-gradient(circle at 80% 70%, rgba(10,35,66,0.35), transparent 65%)
        `,
        animation: `${fadecircuits} 8s ease-in-out infinite alternate`,
        pointerEvents: "none",
      }}
    />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          py: 2,
        }}
      ></Container>

    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 2 }}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* HEADER */}
        <Box sx={{ py: 5, background: 'linear-gradient(90deg, #0a2342 70%, #0984e3 100%)', color: 'white', borderRadius: 5, mb: 4, textAlign: 'center', boxShadow: 3 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>Gabriel Fatade - Aspiring ML Engineer.</Typography>
        </Box>

        <Divider sx={{ mb: 4, background: '#bed1fc' }} />

        {/* IMAGE AND ABOUT ME SIDE BY SIDE */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center' },
            mb: 6,
            mt: 6,
            gap: 4,
            boxShadow: 8
          }}
        >
          {/* Square photo box */}
          <Box
            sx={{
              width: { xs: 220, md: 320 },
              height: { xs: 220, md: 320 },
              boxShadow: 3,
              overflow: 'hidden',
              mr: { md: 4 },
              mb: { xs: 2, md: 0 },
              background: '#2d415f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5
            }}
          >
            <img
              src={headshot}
              alt="Gabriel Fatade"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: 5
              }}
            />
          </Box>
          {/* About me section */}
          <Box sx={{ flex: 1}}>
            <Typography variant="h4" color="#75b9f9" mb={2}>
              About Me
            </Typography>
            <Typography variant="body1" color="#eaf6ff">
            I’m Gabriel Fatade, an aspiring Machine Learning and Software Engineer who enjoys building technology that meaningfully improves users’ lives. Engineering isn’t just about writing code, it’s about creating systems that enhance how people interact with the world, and knowing my work can impact real users gives me deeper motivation and focus. My experience spans intelligent AI pipelines, agentic RAG systems, computer vision, embedded control, and scalable software design. I like turning complex ideas into practical, reliable tools by bridging machine learning with production-grade engineering, with a particular interest in applied AI, ML infrastructure, and full-stack systems that move models beyond demos into real-world impact.
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4, background: '#bed1fc' }} />

        {/* PROJECTS */}
        <Box sx={{ mb: 4, background: '', borderRadius: 2, boxShadow: 8, p: 3, minHeight: { xs: 'none', md: '25vh' }, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="h4" color="#75b9f9" gutterBottom>Projects</Typography>
          <Grid container spacing={2} direction="row">
            {projects.map((proj, idx) => (
              <Grid item xs={12} key={idx}>
                <Card variant="outlined" sx={{ background: 'rgba(11,98,164,0.12)', border: '1px solid #1b94fc', maxWidth:{xs: "none", md: "40vh"}}}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: '#0984e3' }}>{proj.title}</Typography>
                    <Typography variant="body2" color="#bed1fc">{proj.timeline}</Typography>
                    <Typography sx={{color: "white", overflowWrap:"break-word", wordBreak:"break-word", mb:1.5}}>{proj.description}</Typography>
                    <Typography variant="body2" color="#bed1fc">{"Key Features"}</Typography>
                    {proj.key_features.map((feature, i) => (<Typography sx={{ color: 'white', ml: 1, mb: 0.25, textAlign:'-moz-left'}}>{i+1}. {feature}</Typography>))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 4, background: '#bed1fc' }} />

        {/* EXPERIENCE */}
        <Box sx={{ mb: 6, background: '', borderRadius: 2, boxShadow: 8, p: 3, minHeight: { xs: 'none', md: '25vh' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="h4" color="#75b9f9" gutterBottom>Work Experience</Typography>
          <Grid container spacing={2}>
            {experience.map((exp, idx) => (
              <Grid item xs={12} key={idx}>
                <Card variant="outlined" sx={{ background: 'rgba(11,98,164,0.10)', border: '1px solid #1b94fc' }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: '#0984e3' }}>{exp.job} @ {exp.company}</Typography>
                    <Typography variant="body2" color="#bed1fc">{exp.duration}</Typography>
                    <Typography sx={{ mt: 1, color: "white" }}>{exp.info}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Divider sx={{ mb: 4, background: '#bed1fc' }} />

      {/* LINKEDIN */}
      <Box sx={{ textAlign: 'center', background: 'rgba(3, 11, 22, 0.7)', borderRadius: 1, py: 2, mt: 2, boxShadow: 1 }}>
        <Typography variant="body1" sx={{ color: '#1565c0' }}>
          Connect with me on{' '}
          <Link href="https://www.linkedin.com/in/gabriel-fatade/" color="#1565c0" target="_blank" rel="noopener">
            LinkedIn
          </Link>
        </Typography>
      </Box>
    </Container>
    </>
  );
}

export default App;
