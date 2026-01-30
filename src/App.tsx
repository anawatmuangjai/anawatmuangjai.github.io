import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { CodeSamples } from '@/components/CodeSamples';
import { Contact } from '@/components/Contact';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <CodeSamples />
      <Contact />
    </Layout>
  );
}

export default App;
