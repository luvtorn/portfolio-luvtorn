import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell flex min-h-screen flex-col items-center justify-center text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-7xl font-bold tracking-[-0.06em] text-white sm:text-9xl">
        Lost<span className="text-primary">?</span>
      </h1>
      <p className="section-copy mt-5">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 rounded-full bg-primary px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
      >
        Return home
      </Link>
    </main>
  );
}
