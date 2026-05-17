'use client';

import React from 'react';
import { MOCK_USER } from '@/lib/mock-auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';

export default function ProfileViewPage() {
  const user = MOCK_USER;

  const skills = [
    '.NET Core', 'C#', 'ASP.NET Web API', 'Entity Framework Core',
    'SQL Server', 'Redis Caching', 'PostgreSQL', 'Next.js 16',
    'React 19', 'TypeScript', 'Tailwind CSS v4', 'Docker & Bun'
  ];

  return (
    <div className='flex w-full flex-col gap-6 p-6 max-w-4xl mx-auto'>
      <div className='flex flex-col md:flex-row gap-6 items-center md:items-start bg-card border rounded-2xl p-6 shadow-sm'>
        <Avatar className='h-24 w-24 border-2 border-primary'>
          <AvatarImage src={user.imageUrl} alt={user.fullName} />
          <AvatarFallback className='text-xl font-bold'>NT</AvatarFallback>
        </Avatar>
        <div className='flex-1 text-center md:text-left space-y-2'>
          <h2 className='text-2xl font-bold tracking-tight'>{user.fullName}</h2>
          <p className='text-primary font-semibold text-sm'>Full Stack .NET Developer</p>
          <p className='text-muted-foreground text-sm max-w-xl'>
            Passionate software engineer specializing in building high-performance, secure, and fully scalable web applications. Expert in architectural design, robust Web APIs, and modern dynamic frontends.
          </p>
          <div className='flex flex-wrap justify-center md:justify-start gap-3 pt-2'>
            <div className='flex items-center text-xs text-muted-foreground gap-1'>
              <Icons.mail className='h-3.5 w-3.5' />
              <span>{user.emailAddresses[0].emailAddress}</span>
            </div>
            <div className='flex items-center text-xs text-muted-foreground gap-1'>
              <Icons.globe className='h-3.5 w-3.5' />
              <span>nadatarek.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card className='shadow-sm'>
          <CardHeader>
            <CardTitle className='text-base font-bold'>Core Skills & Technologies</CardTitle>
            <CardDescription>Primary tech stack and developer toolbox.</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {skills.map((skill) => (
              <Badge key={skill} variant='secondary' className='px-3 py-1 font-medium'>
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>

        <Card className='shadow-sm'>
          <CardHeader>
            <CardTitle className='text-base font-bold'>Developer Portfolio Statistics</CardTitle>
            <CardDescription>Production-ready engineering indicators.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex justify-between items-center border-b pb-2 text-sm'>
              <span className='text-muted-foreground'>Total System Optimizations</span>
              <span className='font-semibold text-primary'>+98.7% Speed</span>
            </div>
            <div className='flex justify-between items-center border-b pb-2 text-sm'>
              <span className='text-muted-foreground'>API Gateway Architecture</span>
              <span className='font-semibold text-green-500'>Microservices ready</span>
            </div>
            <div className='flex justify-between items-center text-sm'>
              <span className='text-muted-foreground'>Entity Framework Speed</span>
              <span className='font-semibold text-purple-500'>100% Query Optimized</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
