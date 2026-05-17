'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { InteractiveGridPattern } from './interactive-grid';
import { setMockCookie } from '@/lib/mock-auth';

export default function SignInViewPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@test.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate loading for realistic premium UX
    setTimeout(() => {
      setMockCookie();
      router.push('/dashboard/overview');
    }, 800);
  };

  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-background'>
      <div className='bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium gap-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold'>
            N
          </div>
          <span>Nada Tarek Portal</span>
        </div>
        <InteractiveGridPattern
          className={cn(
            'mask-[radial-gradient(400px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[0%] h-full skew-y-12'
          )}
        />
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg leading-relaxed text-zinc-300'>
              &ldquo;Building secure, scalable, and highly optimized enterprise web applications using ASP.NET Core, C#, and React is my mission. This dashboard represents a seamless integration of robust backend design with modern frontend user interfaces.&rdquo;
            </p>
            <footer className='text-sm font-semibold text-primary'>Nada Tarek — Full Stack .NET Developer</footer>
          </blockquote>
        </div>
      </div>
      <div className='flex h-full items-center justify-center p-4 lg:p-8 w-full z-10'>
        <div className='flex w-full max-w-sm flex-col space-y-6 bg-card border p-8 rounded-2xl shadow-lg'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-bold tracking-tight'>Welcome Back</h1>
            <p className='text-xs text-muted-foreground'>
              Enter your credentials below to access your developer portal.
            </p>
          </div>

          {/* Demo Credentials Hint */}
          <div
            className='rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 space-y-1 cursor-pointer select-none'
            onClick={() => {
              setEmail('admin@test.com');
              setPassword('admin123');
            }}
            title='Click to auto-fill credentials'
          >
            <p className='text-xs font-semibold text-primary flex items-center gap-1.5'>
              <span className='inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse' />
              Demo Credentials — Click to auto-fill
            </p>
            <div className='flex flex-col gap-0.5 font-mono text-xs text-muted-foreground'>
              <span>📧 <span className='text-foreground font-medium'>admin@test.com</span></span>
              <span>🔑 <span className='text-foreground font-medium'>admin123</span></span>
            </div>
          </div>

          <form onSubmit={handleSignIn} className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                type='email'
                placeholder='admin@test.com'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='h-10'
              />
            </div>
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <Label htmlFor='password'>Password</Label>
                <a href='#' className='text-xs text-primary hover:underline'>Forgot password?</a>
              </div>
              <Input
                id='password'
                type='password'
                placeholder='••••••••'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='h-10'
              />
            </div>
            <Button type='submit' className='w-full h-10 font-medium' disabled={loading}>
              {loading ? (
                <span className='flex items-center gap-2'>
                  <span className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
                  Authenticating...
                </span>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          <div className='text-muted-foreground space-y-2 text-center text-xs border-t pt-4'>
            <p>
              This is Nada Tarek's personal professional portfolio & admin dashboard.
            </p>
            <p>
              <Link
                href='https://github.com/itachi-void'
                target='_blank'
                className='hover:text-primary underline underline-offset-4 font-semibold text-primary'
              >
                View Portfolio GitHub
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
