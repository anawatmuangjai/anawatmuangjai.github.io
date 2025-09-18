import { cn } from '@/utils';
import type { BaseComponentProps } from '@/types';

interface AboutProps extends BaseComponentProps {
  title?: string;
  description?: string;
  highlights?: string[];
}

export function About({
  title = 'About Me',
  description = "I'm a passionate full-stack developer who lives and breathes code. From architecting scalable backend systems to crafting pixel-perfect user interfaces, I turn complex problems into elegant solutions.",
  highlights = [
    '5+ years mastering the art of clean, maintainable code',
    'Expert in React ecosystem, TypeScript, and modern JavaScript',
    'Backend wizard with .NET, Node.js, and database optimization',
    'DevOps enthusiast: CI/CD, containerization, and cloud deployment',
    'Open source contributor and continuous learner',
  ],
  className,
}: AboutProps) {
  return (
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-600 mx-auto h-1 w-24"></div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-neutral-600">{description}</p>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary-600 mt-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                    <p className="text-neutral-700">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className={cn(
                    'inline-flex items-center',
                    'text-primary-600 px-6 py-3 font-semibold',
                    'border-primary-600 rounded-lg border-2',
                    'hover:bg-primary-600 hover:text-white',
                    'transition-all duration-200'
                  )}
                >
                  Let's Work Together
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* VS Code Mockup */}
            <div className="flex justify-center">
              <VSCodeMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// VS Code Mockup Component
function VSCodeMockup() {
  return (
    <div className="w-full max-w-2xl">
      {/* VS Code Window */}
      <div className="-rotate-1 transform overflow-hidden rounded-lg bg-neutral-800 shadow-2xl transition-transform duration-300 hover:rotate-0">
        {/* VS Code Title Bar */}
        <div className="flex items-center justify-between bg-neutral-900 px-4 py-2">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm text-neutral-400">
            ExpenseController.cs — CozyExpense
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 rounded-sm bg-blue-500"></div>
          </div>
        </div>

        {/* VS Code Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-16 space-y-4 bg-neutral-900 p-2">
            <div className="h-6 w-6 rounded bg-neutral-600"></div>
            <div className="h-6 w-6 rounded bg-neutral-600"></div>
            <div className="h-6 w-6 rounded bg-blue-500"></div>
            <div className="h-6 w-6 rounded bg-neutral-600"></div>
          </div>

          {/* File Explorer */}
          <div className="w-64 space-y-1 bg-neutral-800 p-3 text-xs text-neutral-300">
            <div className="text-xs tracking-wide text-neutral-400 uppercase">Explorer</div>
            <div className="space-y-1 pl-2">
              <div className="flex items-center space-x-1">
                <span>📁</span>
                <span>Controllers</span>
              </div>
              <div className="space-y-1 pl-4">
                <div className="flex items-center space-x-1">
                  <span>📄</span>
                  <span className="text-blue-400">ExpenseController.cs</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>📄</span>
                  <span>CategoryController.cs</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <span>📁</span>
                <span>Models</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📁</span>
                <span>Services</span>
              </div>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1 bg-neutral-800">
            {/* Tab Bar */}
            <div className="flex items-center space-x-4 border-b border-neutral-600 bg-neutral-700 px-4 py-2">
              <div className="rounded-t bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
                ExpenseController.cs
              </div>
            </div>

            {/* Code Content */}
            <div className="space-y-1 p-4 font-mono text-sm text-neutral-300">
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">1</span>
                <span>
                  <span className="text-purple-400">using</span>{' '}
                  <span className="text-blue-400">
                    CozyExpense.Application.Features.Expenses.Commands.CreateExpense
                  </span>
                  ;
                </span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">2</span>
                <span>
                  <span className="text-purple-400">using</span>{' '}
                  <span className="text-blue-400">
                    CozyExpense.Application.Features.Expenses.Commands.DeleteExpense
                  </span>
                  ;
                </span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">3</span>
                <span>
                  <span className="text-purple-400">using</span>{' '}
                  <span className="text-blue-400">
                    CozyExpense.Application.Features.Expenses.Commands.UpdateExpense
                  </span>
                  ;
                </span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">4</span>
                <span>
                  <span className="text-purple-400">using</span>{' '}
                  <span className="text-blue-400">Microsoft.AspNetCore.Mvc</span>;
                </span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">5</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">6</span>
                <span>
                  <span className="text-blue-400">namespace</span>{' '}
                  <span className="text-yellow-400">CozyExpense.Api.Controllers</span>
                </span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">7</span>
                <span>{'{'}</span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">8</span>
                <span className="pl-4">
                  [<span className="text-yellow-400">Route</span>(
                  <span className="text-green-400">"api/[controller]"</span>)]
                </span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">9</span>
                <span className="pl-4">
                  [<span className="text-yellow-400">ApiController</span>]
                </span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">10</span>
                <span className="pl-4">
                  <span className="text-blue-400">public</span>{' '}
                  <span className="text-blue-400">class</span>{' '}
                  <span className="text-yellow-400">ExpenseController</span> :{' '}
                  <span className="text-yellow-400">ControllerBase</span>
                </span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">11</span>
                <span className="pl-4">{'{'}</span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">12</span>
                <span className="pl-8">
                  <span className="text-gray-500">// Implementation...</span>
                </span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">13</span>
                <span className="pl-4">{'}'}</span>
              </div>
              <div className="flex">
                <span className="mr-4 w-8 text-right text-neutral-500">14</span>
                <span>{'}'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between bg-blue-600 px-4 py-1 text-xs text-white">
          <div className="flex items-center space-x-4">
            <span>✓ C#</span>
            <span>UTF-8</span>
            <span>CRLF</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Ln 10, Col 35</span>
            <span>Spaces: 4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
