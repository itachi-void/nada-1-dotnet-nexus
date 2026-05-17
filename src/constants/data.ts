export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'architect@amazon.com',
    amount: '+$1,999.00',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'lead.dev@google.com',
    amount: '+$39.00',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'team.lead@netflix.com',
    amount: '+$299.00',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'cto@stripe.com',
    amount: '+$99.00',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'devops.lead@microsoft.com',
    amount: '+$39.00',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80',
    initials: 'SD'
  }
];
