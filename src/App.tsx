import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { CodeSamples } from '@/components/CodeSamples';
import { Contact } from '@/components/Contact';

function App() {
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
