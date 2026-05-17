'use client';

import React from 'react';
import PageContainer from '@/components/layout/page-container';
import { workspacesInfoContent } from '@/config/infoconfig';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { MOCK_ORGANIZATIONS } from '@/lib/mock-auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

export default function WorkspacesPage() {
  const router = useRouter();

  return (
    <PageContainer
      pageTitle='Workspaces'
      pageDescription='Manage your organizations and workspaces'
      infoContent={workspacesInfoContent}
    >
      <div className='space-y-6 max-w-4xl mx-auto'>
        <div className='flex justify-between items-center'>
          <h3 className='text-lg font-bold'>Active Organizations</h3>
          <Button size='sm' className='gap-1'>
            <Icons.add className='h-4 w-4' />
            <span>Create Organization</span>
          </Button>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {MOCK_ORGANIZATIONS.map((membership) => {
            const org = membership.organization;
            return (
              <Card key={org.id} className='hover:border-primary transition-colors duration-300 shadow-sm'>
                <CardHeader className='flex flex-row items-center gap-4 pb-4'>
                  <Avatar className='h-12 w-12 border'>
                    <AvatarImage src={org.imageUrl} alt={org.name} />
                    <AvatarFallback>{org.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className='flex-1 min-w-0'>
                    <CardTitle className='text-base font-bold truncate'>{org.name}</CardTitle>
                    <CardDescription className='text-xs truncate'>Workspace ID: {org.id}</CardDescription>
                  </div>
                  <Badge variant='outline'>{membership.role}</Badge>
                </CardHeader>
                <CardContent className='pb-4 text-sm text-muted-foreground'>
                  <div className='space-y-2'>
                    <div className='flex justify-between text-xs'>
                      <span>Active Developers</span>
                      <span className='font-semibold text-foreground'>5 Seats</span>
                    </div>
                    <div className='flex justify-between text-xs'>
                      <span>Mock Services Deployed</span>
                      <span className='font-semibold text-foreground'>12 Services</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className='border-t pt-4 flex gap-2'>
                  <Button
                    variant='default'
                    size='sm'
                    className='w-full'
                    onClick={() => router.push('/dashboard/workspaces/team')}
                  >
                    Manage Workspace
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}
