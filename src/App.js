import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent, Grid, Divider } from '@mui/material';
import headshot from './headshot.png';
import bgpic from './bgimage.jpg';
import { keyframes } from "@mui/system";

const projects = [
  { title: 'Agentic RAG Assistant', description: 'Built a retrieval-augmented generation (RAG) system using LLaMA-based embeddings, MongoDB Atlas vector search, and an Ollama LLM to deliver accurate, context-aware responses, with an automated web-search fallback to continuously update knowledge.', key_features:["Python", "RAG", "Vector Database", "Cosine Similarity", "Web Search API", "Dynamic Chunking", "GenAI", "Embedding"], timeline: 'Dec 2025 – Jan 2026'}, 
  { title: 'ASRS Reporting System', description: 'Collaborated on a team of 8 to develop a reporting platform for the Advanced Student Resource System (ASRS) in Syracuse, NY. The system supports tracking community initiatives, generating and managing reports, and creating and distributing surveys. Worked in an agile environment with weekly sprints and continuous client communication to iteratively deliver features aligned with user needs.', key_features:["Next.js", "SQlite", "Agile Worklow", "Jira", "Vision Paradigm"], timeline: 'Oct 2025 – May 2026'}, 
  { title: 'Wegmans Pathfinding Optimizer', description: 'Developed a Python application that integrates web-scraped product data with an A* search algorithm to compute optimized in-store shopping routes through an interactive GUI which was awarded as a 24-hour hackathon winner.', key_features:["Python","User GUI","Web Scraping","A* Algorithm","Key Metrics Display","Route Visualization"], timeline: 'Oct 2024' }, 
  { title: 'Vision Pivot', description:'An AI-powered physical sorting system that uses real-time computer vision and embedded control to classify and route objects using a dual-axis servo mechanism. The system bridges machine learning, hardware control, and user interaction through an integrated embedded pipeline.', key_features: ["Python","OpenCV","Teachable Machine (custom model)","Arduino","Raspberry Pi 5"], timeline: 'Mar 2025 – Apr 2025' },
  { title: 'The Boxer', description: 'Built a cardboard shredder/pulper prototype within 6 weeks to optimize recycling workflows, reducing waste volume by 70% and demonstrating a scalable, cost-saving solution for small businesses.', key_features:["Embedded Systems", "Welding", "Circuit Design", "CAD Modeling", "Prototyping", "Product Design", "Research", "Product Testing"], timeline: 'May 2023 – Jun 2023'},
  { title: 'FuelSense Recommender', description: 'An intelligent recommendation bot that personalizes gas station pricing suggestions using user demographics and location data. The system analyzes economic status, income, family size, and proximity to generate optimized recommendations, helping users identify the best nearby fuel options based on both cost and convenience.', key_features:["Python", "Data Analysis", "User profiling & Input processing", "Location-Based Services"], timeline: 'Jun 2022 – Aug 2023' }, 
];

const experience = [
  { job: 'IT Supply Chain Deliver Intern', company: 'Johnson & Johnson', duration: 'May 2025 – Aug 2025', info: 'Managed SAP supply chain workflows by implementing user stories for order setup and data operations. Built an automated Jira-to-Power BI pipeline using Python and the Jira API, improving cross-team visibility by ~30%. Developed a GenAI chatbot with a RAG pipeline and routing agents to streamline data extraction across 15+ form sections, and supported AWS cloud migration to enhance data accessibility and efficiency.' },
  { job: 'Software Engineering Digital Supply Chain Strategy & Execution Intern', company: 'Merck', duration: 'Jun 2024 – Aug 2024', info: 'Enhanced AI-driven tools (e.g., Build-GPT) to improve information retrieval and developed automation scripts for internal systems. Improved cross-team collaboration using Confluence and contributed to safety stock application enhancements, increasing data visibility across 18+ sites. Led development of business cases for 5 key initiatives, streamlining project execution and team performance.' },
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
      {/* Background Image */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          opacity: 1.0,
        }}
      />
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
          <Typography variant="h3" fontWeight="bold" gutterBottom>Gabriel Fatade - Aspiring SWE/ML Engineer.</Typography>
        </Box>

        <Divider sx={{ mb: 4, background: '#bed1fc' }} />

        {/* CONNECT / RESUME BUTTONS */}
        <Box sx={{ mb: 6, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'stretch' }}>
          <Box sx={{ flex: 1, background: '#0a2342 70%', borderRadius: 3, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6" color="white" sx={{ mb: 2 }}>
              Connect with me
            </Typography>
            <Button
              component="a"
              href="https://www.linkedin.com/in/gabriel-fatade/"
              target="_blank"
              rel="noopener"
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4 }}
            >
              LinkedIn
            </Button>
          </Box>
          <Box sx={{ flex: 1, background: '#0a2342 70%', borderRadius: 3, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6" color="white" sx={{ mb: 2 }}>
              Resume
            </Typography>
            <Button
              component="a"
              href="https://drive.google.com/file/d/1ZF0Hq9-mDInx7Q-Idd8OydhkC0Jc8QB7/view?usp=sharing"
              target="_blank"
              rel="noopener"
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4 }}
            >
              Take a look at my resume
            </Button>
          </Box>
        </Box>

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
          {/* Connect / Resume section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" color="#75b9f9" sx={{ mb: 2 }}>
              About Me
            </Typography>
            <Typography variant="body1" color="#eaf6ff">
              I’m Gabriel Fatade, an aspiring Machine Learning and Software Engineer focused on building impactful, user-centered technology. My experience spans AI pipelines, agentic RAG systems, computer vision, embedded systems, and full-stack development. I enjoy turning complex ideas into reliable, production-ready tools, with a focus on software engineering and machine learning systems that deliver real-world impact. ALWAYS engineer for a greater good. 
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
    </Container>
    </>
  );
}

export default App;
