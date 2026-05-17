'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { MOCK_ORGANIZATION } from '@/lib/mock-auth';

export default function ExclusivePage() {
  const organization = MOCK_ORGANIZATION;

  return (
    <PageContainer isLoading={false}>
      <div className='space-y-6 max-w-4xl mx-auto p-6'>
        <div>
          <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
            <Icons.badgeCheck className='h-7 w-7 text-primary' />
            Exclusive Area
          </h1>
          <p className='text-muted-foreground mt-1'>
            Welcome, <span className='font-semibold'>{organization.name}</span>! You have full administrative access to all premium developer sandbox features.
          </p>
        </div>
        <Card className='shadow-sm border-2 border-primary/20'>
          <CardHeader>
            <CardTitle className='text-lg font-bold flex items-center gap-2'>
              <Icons.settings className='h-5 w-5 text-primary animate-spin' style={{ animationDuration: '3s' }} />
              Developer Sandbox Access Unlocked
            </CardTitle>
            <CardDescription>
              All restricted APIs and optimization pipelines are fully active for Nada Tarek's portal.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='text-sm text-muted-foreground leading-relaxed'>
              You are currently viewing the Pro-tier exclusive console. All features, mock database query performance optimization charts, and messaging speeds are running in unrestricted mode.
            </div>
            <div className='flex gap-4 items-center bg-muted/50 p-4 rounded-xl text-xs font-mono text-muted-foreground'>
              <Icons.info className='h-4 w-4 text-primary shrink-0' />
              <span>Pipeline: DotNet-Nexus-Release | Host: vercel-serverless | Status: Online</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
