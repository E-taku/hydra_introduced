import { useSession, signIn } from 'next-auth/react'

export default function Dashboard() {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            signIn()
        },
    })

    if (status === "loading") {
        return <div>Loading...</div>
    }

    return (
        <div>
            {session && session.user && (
                <div>Welcome to the Dashboard, {session.user.name}!</div>
            )}

            <div>
                <a href="/">ホームに戻る</a>
            </div>
        </div>
    )
}
