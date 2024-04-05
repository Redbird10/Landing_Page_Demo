import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 mx-auto max-w-screen-xl">
      <div className="font-bold text-2xl">Brainwave.io</div>
      <section className="flex justify-between items-center">
        <Link href="/" className="font-bold px-7 py-2">Demos</Link>
        <Link href="/" className="font-bold px-7 py-2">Pages</Link>
        <Link href="/" className="font-bold px-7 py-2">Support</Link>
        <Link href="/" className="font-bold pl-7 pr-8 py-2">Contact</Link>
        <Link href="/" className="font-bold pl-8 pr-7 py-2 border-solid border-l-2">Sign In</Link>
        <Link href="/" className="font-bold px-9 py-3 bg-indigo-700 text-white rounded-md">Sign Up</Link>
      </section>
    </header>
  );
}