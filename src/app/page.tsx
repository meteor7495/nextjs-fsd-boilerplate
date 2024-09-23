import { getServerSession } from 'next-auth';
import { authOptions } from '@shared/lib'; // Your NextAuth options
import Link from 'next/link';

export default async function Dashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <>
                <div>You need to sign in</div>
                <Link href={'/auth/signin'}>Login</Link>
            </>
        );
    }

    return (
        <div>
            Welcome, {session.user?.name}! <br />
            Your email: {session.user?.email}
        </div>
    );
}
