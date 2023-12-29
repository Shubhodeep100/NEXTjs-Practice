import Link from 'next/link';

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {navLinks.map((link) => {
                return (
                    <Link href={link.href} key={link.name}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}