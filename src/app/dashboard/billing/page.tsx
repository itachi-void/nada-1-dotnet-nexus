'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { billingInfoContent } from '@/config/infoconfig';
import { MOCK_ORGANIZATION } from '@/lib/mock-auth';

export default function BillingPage() {
  const organization = MOCK_ORGANIZATION;

  const plans = [
    {
      name: 'Free Sandbox',
      price: '$0',
      description: 'Ideal for local development and microservice testing.',
      features: [
        '5 ASP.NET Core Mock Services',
        'Basic local database queries',
        '1 developer workspace seat',
        'Community forum support'
      ],
      buttonText: 'Current Plan',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Pro Developer',
      price: '$29',
      description: 'Perfect for professional developers and production scale.',
      features: [
        'Unlimited Mock Web APIs',
        'High-speed Redis cache integrations',
        '5 active organization workspaces',
        'Priority technical support',
        'Advanced RBAC permission structures'
      ],
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Enterprise Nexus',
      price: '$199',
      description: 'Tailored for enterprise teams and cloud clustering.',
      features: [
        'Everything in Pro plan',
        'Clustered SQL Server deployment',
        'Full Docker & Bun build automations',
        '24/7 Phone & Email support SLA',
        'Dedicated DevOps consulting'
      ],
      buttonText: 'Contact Enterprise',
      buttonVariant: 'secondary' as const,
      popular: false
    }
  ];

  return (
    <PageContainer
      isLoading={false}
      access={true}
      infoContent={billingInfoContent}
      pageTitle='Billing & Plans'
      pageDescription={`Manage subscription and usage limits for ${organization.name}`}
    >
      <div className='space-y-6'>
        <Alert>
          <Icons.info className='h-4 w-4' />
          <AlertDescription>
            System plans are configured locally for preview. Upgrade to a premium plan to unlock advanced Next.js & .NET enterprise features.
          </AlertDescription>
        </Alert>

        <div className='grid gap-6 md:grid-cols-3'>
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative flex flex-col justify-between border-2 ${plan.popular ? 'border-primary shadow-md' : 'border-border'}`}>
              {plan.popular && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full'>
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className='text-lg font-bold'>{plan.name}</CardTitle>
                <CardDescription className='min-h-[40px] mt-1'>{plan.description}</CardDescription>
                <div className='mt-4 flex items-baseline'>
                  <span className='text-3xl font-extrabold tracking-tight'>{plan.price}</span>
                  <span className='ml-1 text-muted-foreground text-sm'>/month</span>
                </div>
              </CardHeader>
              <CardContent className='flex-grow'>
                <ul className='space-y-3 text-sm'>
                  {plan.features.map((feature) => (
                    <li key={feature} className='flex items-start gap-2'>
                      <Icons.check className='h-4 w-4 text-green-500 mt-0.5 shrink-0' />
                      <span className='text-muted-foreground'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className='pt-4'>
                <Button className='w-full' variant={plan.buttonVariant}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
