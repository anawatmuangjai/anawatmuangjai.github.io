import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { FeaturedProjects } from '@/components/FeaturedProjects';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />

      <section id="contact" className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-4xl font-bold text-neutral-900">Get In Touch</h2>
          <p className="text-neutral-600">Coming soon...</p>
        </div>
      </section>
    </Layout>
  );
}

export default App;
