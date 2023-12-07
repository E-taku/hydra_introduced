import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any, req) {
        // ここでユーザー認証のロジックを実装
        // 例: usernameが"admin"、passwordが"password"の場合に認証成功
        if (credentials.username === "admin" && credentials.password === "password") {
          const user = { id: "1", name: "Admin User", email: "admin@example.com" }
          return user
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  secret: "ozy2Cq2lDqhZaZ/mRlNP/09XqEtvY7AuZ8Z0JCJIDFY="
})
