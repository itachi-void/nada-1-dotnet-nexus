'use client';

export const MOCK_USER = {
  fullName: 'Nada Tarek',
  imageUrl: 'https://api.dicebear.com/7.x/adventurer/svg?seed=NadaTarek',
  emailAddresses: [{ emailAddress: 'admin@test.com' }]
};

export const MOCK_ORGANIZATION = {
  id: 'org_1',
  name: 'DotNet Nexus',
  imageUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=Nexus',
  hasImage: true
};

export const MOCK_ORGANIZATIONS = [
  {
    id: 'membership_1',
    organization: MOCK_ORGANIZATION,
    role: 'Owner'
  },
  {
    id: 'membership_2',
    organization: {
      id: 'org_2',
      name: 'Nada Tarek Portfolio',
      imageUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=Portfolio',
      hasImage: true
    },
    role: 'Administrator'
  }
];

export function getMockCookie() {
  if (typeof window === 'undefined') return false;
  return document.cookie.includes('mock_auth_token=true');
}

export function setMockCookie() {
  if (typeof window !== 'undefined') {
    document.cookie = 'mock_auth_token=true; path=/; max-age=31536000;';
  }
}

export function clearMockCookie() {
  if (typeof window !== 'undefined') {
    document.cookie = 'mock_auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
  }
}
