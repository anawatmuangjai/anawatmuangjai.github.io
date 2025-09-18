import { useState } from 'react';
import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

interface CodeSamplesProps extends BaseComponentProps {
  title?: string;
}

export function CodeSamples({ title = 'Code Samples', className }: CodeSamplesProps) {
  const [activeTab, setActiveTab] = useState<'structure' | 'code'>('structure');

  return (
    <section id="code-samples" className={cn('bg-neutral-50 py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-600 mx-auto h-1 w-24"></div>
            <p className="mt-6 text-lg text-neutral-600">
              A glimpse into my development approach and coding style
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-lg bg-white p-1 shadow-md">
              <button
                onClick={() => setActiveTab('structure')}
                className={cn(
                  'rounded-md px-6 py-2 text-sm font-medium transition-all duration-200',
                  activeTab === 'structure'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                )}
              >
                Project Structure
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={cn(
                  'rounded-md px-6 py-2 text-sm font-medium transition-all duration-200',
                  activeTab === 'code'
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                )}
              >
                Code Style
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {/* Description */}
            <div className="space-y-6">
              {activeTab === 'structure' ? <StructureDescription /> : <CodeStyleDescription />}
            </div>

            {/* VS Code Mockup */}
            <div className="flex justify-center">
              {activeTab === 'structure' ? <ProjectStructureVSCode /> : <CodeStyleVSCode />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Structure Description Component
function StructureDescription() {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-bold text-neutral-900">Clean Architecture</h3>
      <p className="mb-6 text-lg text-neutral-600">
        I follow industry best practices for project organization, ensuring maintainable and
        scalable code structures.
      </p>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="bg-primary-600 mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
          <div>
            <h4 className="font-semibold text-neutral-900">Feature-Based Organization</h4>
            <p className="text-neutral-600">
              Components and logic grouped by features for better maintainability
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="bg-primary-600 mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
          <div>
            <h4 className="font-semibold text-neutral-900">Separation of Concerns</h4>
            <p className="text-neutral-600">
              Clear separation between UI, business logic, and data layers
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="bg-primary-600 mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
          <div>
            <h4 className="font-semibold text-neutral-900">TypeScript Integration</h4>
            <p className="text-neutral-600">
              Strong typing throughout the application for better developer experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Code Style Description Component
function CodeStyleDescription() {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-bold text-neutral-900">Modern Development</h3>
      <p className="mb-6 text-lg text-neutral-600">
        I write clean, performant code using modern patterns and best practices for maintainability.
      </p>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="bg-primary-600 mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
          <div>
            <h4 className="font-semibold text-neutral-900">React Hooks & Composition</h4>
            <p className="text-neutral-600">
              Functional components with custom hooks for reusable logic
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="bg-primary-600 mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
          <div>
            <h4 className="font-semibold text-neutral-900">Type Safety First</h4>
            <p className="text-neutral-600">
              Comprehensive TypeScript usage with proper interfaces and generics
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="bg-primary-600 mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
          <div>
            <h4 className="font-semibold text-neutral-900">Performance Optimization</h4>
            <p className="text-neutral-600">
              Strategic use of memoization and efficient rendering patterns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Project Structure VS Code Component
function ProjectStructureVSCode() {
  return (
    <div className="w-full max-w-2xl">
      {/* VS Code Window */}
      <div className="transform overflow-hidden rounded-lg bg-[#0d1117] shadow-2xl transition-transform duration-300 hover:scale-105">
        {/* VS Code Title Bar */}
        <div className="flex items-center justify-between bg-[#161b22] px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm text-[#8b949e]">portfolio-project — Explorer</div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 rounded-sm bg-[#238636]"></div>
          </div>
        </div>

        {/* VS Code Content */}
        <div className="flex">
          {/* File Explorer */}
          <div className="w-full space-y-1 bg-[#0d1117] p-4 text-sm text-[#e6edf3]">
            <div className="mb-3 text-xs tracking-wide text-[#8b949e] uppercase">Explorer</div>
            <div className="space-y-1">
              {/* Root folder */}
              <div className="flex items-center space-x-2">
                <span className="text-[#8b949e]">📁</span>
                <span className="font-semibold">portfolio-project</span>
              </div>

              {/* Source folder */}
              <div className="space-y-1 pl-4">
                <div className="flex items-center space-x-2">
                  <span className="text-[#8b949e]">📁</span>
                  <span>src</span>
                </div>

                <div className="space-y-1 pl-4">
                  {/* Components */}
                  <div className="flex items-center space-x-2">
                    <span className="text-[#8b949e]">📁</span>
                    <span>components</span>
                  </div>
                  <div className="space-y-1 pl-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#58a6ff]">⚛️</span>
                      <span className="text-[#e6edf3]">About.tsx</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#58a6ff]">⚛️</span>
                      <span className="text-[#e6edf3]">Hero.tsx</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[#58a6ff]">⚛️</span>
                      <span className="text-[#e6edf3]">Layout.tsx</span>
                    </div>
                  </div>

                  {/* Types */}
                  <div className="flex items-center space-x-2">
                    <span className="text-[#8b949e]">📁</span>
                    <span>types</span>
                  </div>
                  <div className="pl-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#3fb950]">📄</span>
                      <span className="text-[#e6edf3]">index.ts</span>
                    </div>
                  </div>

                  {/* Utils */}
                  <div className="flex items-center space-x-2">
                    <span className="text-[#8b949e]">📁</span>
                    <span>utils</span>
                  </div>
                  <div className="pl-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#3fb950]">📄</span>
                      <span className="text-[#e6edf3]">index.ts</span>
                    </div>
                  </div>

                  {/* Data */}
                  <div className="flex items-center space-x-2">
                    <span className="text-[#8b949e]">📁</span>
                    <span>data</span>
                  </div>
                  <div className="pl-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-[#3fb950]">📄</span>
                      <span className="text-[#e6edf3]">index.ts</span>
                    </div>
                  </div>
                </div>

                {/* Config files */}
                <div className="flex items-center space-x-2">
                  <span className="text-[#f85149]">⚙️</span>
                  <span className="text-[#e6edf3]">vite.config.ts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#3fb950]">📄</span>
                  <span className="text-[#e6edf3]">package.json</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#58a6ff]">📄</span>
                  <span className="text-[#e6edf3]">tsconfig.json</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between bg-[#1f6feb] px-4 py-1 text-xs text-white">
          <div className="flex items-center space-x-4">
            <span>✓ TypeScript</span>
            <span>Clean Architecture</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Code Style VS Code Component
function CodeStyleVSCode() {
  return (
    <div className="w-full max-w-2xl">
      {/* VS Code Window */}
      <div className="transform overflow-hidden rounded-lg bg-[#0d1117] shadow-2xl transition-transform duration-300 hover:scale-105">
        {/* VS Code Title Bar */}
        <div className="flex items-center justify-between bg-[#161b22] px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm text-[#8b949e]">useProjectData.ts — Custom Hook</div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 rounded-sm bg-[#238636]"></div>
          </div>
        </div>

        {/* VS Code Content */}
        <div className="flex">
          {/* Code Editor */}
          <div className="flex-1 bg-[#0d1117]">
            {/* Tab Bar */}
            <div className="flex items-center space-x-4 border-b border-[#21262d] bg-[#161b22] px-4 py-2">
              <div className="rounded-t bg-[#0d1117] px-3 py-1 text-sm text-[#e6edf3]">
                useProjectData.ts
              </div>
            </div>

            {/* Code Content */}
            <div className="space-y-1 p-4 font-mono text-sm text-[#e6edf3]">
              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">1</span>
                <span>
                  <span className="text-[#ff7b72]">import</span> {'{ '}
                  <span className="text-[#e6edf3]">useState, useEffect</span>
                  {' }'} <span className="text-[#ff7b72]">from</span>{' '}
                  <span className="text-[#a5d6ff]">'react'</span>;
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">2</span>
                <span>
                  <span className="text-[#ff7b72]">import</span>{' '}
                  <span className="text-[#ff7b72]">type</span> {'{ '}
                  <span className="text-[#e6edf3]">Project</span>
                  {' }'} <span className="text-[#ff7b72]">from</span>{' '}
                  <span className="text-[#a5d6ff]">'@/types'</span>;
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">3</span>
                <span></span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">4</span>
                <span>
                  <span className="text-[#ff7b72]">interface</span>{' '}
                  <span className="text-[#ffa657]">UseProjectDataReturn</span> {'{'}
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">5</span>
                <span className="pl-2">
                  <span className="text-[#e6edf3]">projects</span>:{' '}
                  <span className="text-[#ffa657]">Project</span>[];
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">6</span>
                <span className="pl-2">
                  <span className="text-[#e6edf3]">loading</span>:{' '}
                  <span className="text-[#79c0ff]">boolean</span>;
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">7</span>
                <span className="pl-2">
                  <span className="text-[#e6edf3]">error</span>:{' '}
                  <span className="text-[#79c0ff]">string</span> |{' '}
                  <span className="text-[#79c0ff]">null</span>;
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">8</span>
                <span>{'}'}</span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">9</span>
                <span></span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">10</span>
                <span>
                  <span className="text-[#ff7b72]">export</span>{' '}
                  <span className="text-[#ff7b72]">function</span>{' '}
                  <span className="text-[#d2a8ff]">useProjectData</span>():{' '}
                  <span className="text-[#ffa657]">UseProjectDataReturn</span> {'{'}
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">11</span>
                <span className="pl-2">
                  <span className="text-[#ff7b72]">const</span> [
                  <span className="text-[#e6edf3]">projects</span>,{' '}
                  <span className="text-[#e6edf3]">setProjects</span>] ={' '}
                  <span className="text-[#d2a8ff]">useState</span>&lt;
                  <span className="text-[#ffa657]">Project</span>[]&gt;([]);
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">12</span>
                <span className="pl-2">
                  <span className="text-[#8b949e]">// More implementation...</span>
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 w-8 text-right text-[#6e7681]">13</span>
                <span>{'}'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between bg-[#1f6feb] px-4 py-1 text-xs text-white">
          <div className="flex items-center space-x-4">
            <span>✓ TypeScript</span>
            <span>React Hook</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Ln 10, Col 20</span>
          </div>
        </div>
      </div>
    </div>
  );
}
