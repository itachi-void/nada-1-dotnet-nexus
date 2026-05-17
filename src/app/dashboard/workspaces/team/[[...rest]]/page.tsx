'use client';

import React from 'react';
import PageContainer from '@/components/layout/page-container';
import { teamInfoContent } from '@/config/infoconfig';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function TeamPage() {
  const members = [
    {
      name: 'Nada Tarek',
      email: 'admin@nadatarek.com',
      role: 'Owner',
      status: 'Active',
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=NadaTarek'
    },
    {
      name: 'Ahmed Kamal',
      email: 'zyad.kamal1706859@science.menofia.edu.eg',
      role: 'Full Stack Developer',
      status: 'Active',
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Ahmed'
    },
    {
      name: 'DevOps Microsoft Lead',
      email: 'devops.lead@microsoft.com',
      role: 'Administrator',
      status: 'Active',
      avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Microsoft'
    }
  ];

  return (
    <PageContainer
      pageTitle='Team Management'
      pageDescription='Manage your workspace team, members, roles, security, and more.'
      infoContent={teamInfoContent}
    >
      <div className='space-y-6 max-w-4xl mx-auto'>
        <Card className='shadow-sm'>
          <CardHeader className='flex flex-row items-center justify-between pb-4 border-b'>
            <div>
              <CardTitle className='text-lg font-bold'>Team Members</CardTitle>
              <CardDescription>View, invite, and configure permissions for your development workspace.</CardDescription>
            </div>
            <Button size='sm' className='gap-1'>
              <Icons.add className='h-4 w-4' />
              <span>Invite Member</span>
            </Button>
          </CardHeader>
          <CardContent className='p-0'>
            <div className='divide-y'>
              {members.map((member) => (
                <div key={member.email} className='flex items-center justify-between p-4 hover:bg-muted/50 transition-colors duration-200'>
                  <div className='flex items-center gap-3 min-w-0'>
                    <Avatar className='h-10 w-10 border'>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className='min-w-0'>
                      <p className='text-sm font-semibold truncate'>{member.name}</p>
                      <p className='text-xs text-muted-foreground truncate'>{member.email}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Badge variant='secondary' className='text-xs font-medium'>
                      {member.role}
                    </Badge>
                    <Badge className='bg-green-500 hover:bg-green-600 text-white text-xs'>
                      {member.status}
                    </Badge>
                    <Button variant='ghost' size='sm' className='text-muted-foreground hover:text-foreground p-2'>
                      <Icons.settings className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
