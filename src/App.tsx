import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ExperienceTimeline from './components/ExperienceTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <ExperienceTimeline />
          <Contact />
        </main>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
