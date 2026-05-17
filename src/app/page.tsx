import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.has('mock_auth_token');

  if (!isAuthenticated) {
    return redirect('/auth/sign-in');
  } else {
    redirect('/dashboard/overview');
  }
}
