import { signIn } from 'next-auth/react'

export default function Login() {
    const handleSubmit = (event: any) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value

    signIn('credentials', {
        username,
        password,
        callbackUrl: '/dashboard',
    })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />
            <button type="submit">Log in</button>
            <p>You can log in with username &quot;admin&quot; and password &quot;password&quot;.</p>
        </form>
    )
}
