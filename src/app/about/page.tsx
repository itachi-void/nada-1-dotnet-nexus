import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Nada Tarek'
};

export default function AboutPage() {
  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-linear-to-b from-background via-card to-background'>
      <div className='mx-auto max-w-3xl'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <h1 className='text-foreground text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent'>
            Nada Tarek
          </h1>
          <p className='text-muted-foreground mt-4 text-lg font-medium'>
            Full Stack .NET Developer & Web UI Enthusiast
          </p>
        </div>

        {/* Content Sections */}
        <div className='space-y-8'>
          {/* Professional Overview */}
          <section className='bg-card rounded-2xl border p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20'>
            <h2 className='text-foreground mb-4 text-xl font-semibold flex items-center gap-2'>
              <span className='size-2.5 rounded-full bg-primary' />
              Professional Overview
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              I am a dedicated and passionate Full Stack .NET Developer with a strong focus on building high-performance, scalable web applications. My expertise bridges back-end excellence using .NET Core, C#, Entity Framework, and SQL Server, with modern, sleek front-end technologies like React, Next.js, and Tailwind CSS.
            </p>
          </section>

          {/* Technical Stack */}
          <section className='bg-card rounded-2xl border p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20'>
            <h2 className='text-foreground mb-4 text-xl font-semibold flex items-center gap-2'>
              <span className='size-2.5 rounded-full bg-purple-600' />
              Core Competencies
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground'>
              <div>
                <h3 className='font-medium text-foreground mb-2'>Back-End Mastery</h3>
                <ul className='list-disc pl-5 space-y-1 text-sm'>
                  <li>C# & ASP.NET Core Web API</li>
                  <li>Entity Framework Core & LINQ</li>
                  <li>SQL Server & Database Design</li>
                  <li>RESTful APIs & Microservices</li>
                </ul>
              </div>
              <div>
                <h3 className='font-medium text-foreground mb-2'>Front-End & Tools</h3>
                <ul className='list-disc pl-5 space-y-1 text-sm'>
                  <li>Next.js, React & TypeScript</li>
                  <li>Tailwind CSS & Shadcn UI</li>
                  <li>Zustand & React Query</li>
                  <li>Git, Docker & CI/CD Pipelines</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Philosophy */}
          <section className='bg-card rounded-2xl border p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/20'>
            <h2 className='text-foreground mb-4 text-xl font-semibold flex items-center gap-2'>
              <span className='size-2.5 rounded-full bg-blue-500' />
              My Design Philosophy
            </h2>
            <p className='text-muted-foreground text-lg leading-relaxed'>
              I believe in writing clean, maintainable code on the back-end while delivering pixel-perfect, premium user experiences on the front-end. Combining the robustness of the .NET ecosystem with the agility of the React landscape allows me to build applications that are as solid as they are beautiful.
            </p>
          </section>
        </div>

        {/* Footer Note */}
        <div className='mt-12 text-center'>
          <p className='text-muted-foreground text-sm font-medium'>
            Portfolio Dashboard crafted by Nada Tarek
          </p>
        </div>
      </div>
    </div>
  );
}
