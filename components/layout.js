import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
        <header className='bg-slate-800 mb-8 py-4'>
            <div className='container mx-auto flex flex-col justify-center'>
                <Link href='/'>
                    <a className='mx-auto text-4xl text-slate-200'>Grant's Current Events</a>
                </Link>
            </div>
        </header>
        <main className='container mx-auto flex-1'>{children}</main>
        <footer className={`bg-slate-800 mt-8 py-4`}>
            <div className='container mx-auto flex justify-center text-slate-300'>
            &copy; 2022 Grant Cooksey
            </div>
        </footer>
        </div>
    );
}
