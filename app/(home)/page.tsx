'use client';
import CraftingCredit from "@thoughthub/hq";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-sm bg-zinc-950 text-white font-bold dark:bg-white/20 p-2 dark:text-zinc-950">
                <Image src="/icon.png" alt="Logo" width={20} height={100} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                fotoperfectionlab
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link
              href="#services"
              className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
            >
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="tel:+880185266225"
              className="hidden sm:inline-flex items-center justify-center rounded-md border border-zinc-200 bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
            >
              Call Us
            </Link>
            <Link
              href="mailto:fotoperfectionlab@gmail.com"
              className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-24 pb-16 text-center md:px-8 md:pt-32 md:pb-24">
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block bg-linear-to-r from-zinc-900 via-zinc-600 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-100">
              Flawless Imagery
            </span>
            <span className="block mt-2">for Global Brands</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Premium commercial photo editing, high-end retouching, and bulk
            processing for studios and fashion photography. Based in Dhaka,
            delivering perfection worldwide.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex h-12 w-full items-center justify-center rounded-md bg-zinc-900 px-8 text-base font-medium text-zinc-50 transition-colors hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 sm:w-auto">
              Start Your Project
            </button>
            <button className="inline-flex h-12 w-full items-center justify-center rounded-md bg-zinc-100 px-8 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 sm:w-auto">
              View Portfolio
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Expertise
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Industry-leading techniques for high-volume and commercial
                requirements.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Service Card 1 */}
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex flex-col space-y-1.5 p-6 pb-3">
                  <h3 className="font-semibold leading-none tracking-tight text-lg">
                    High-End Retouching
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    Meticulous skin, beauty, and fashion retouching that
                    preserves natural textures while eliminating imperfections.
                  </p>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex flex-col space-y-1.5 p-6 pb-3">
                  <h3 className="font-semibold leading-none tracking-tight text-lg">
                    Background Removal
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    Precise clipping paths and masking for e-commerce, ensuring
                    your products stand out on any background.
                  </p>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex flex-col space-y-1.5 p-6 pb-3">
                  <h3 className="font-semibold leading-none tracking-tight text-lg">
                    Image Cutouts
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    Complex edge detection for hair, fur, and transparent
                    objects, delivered with flawless accuracy.
                  </p>
                </div>
              </div>

              {/* Service Card 4 */}
              <div className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex flex-col space-y-1.5 p-6 pb-3">
                  <h3 className="font-semibold leading-none tracking-tight text-lg">
                    Bulk Studio Editing
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    Consistent, high-volume processing for studios and agencies
                    with rapid turnaround times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Global Standards, <br /> Dedicated Craftsmanship.
                </h2>
                <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
                  Located in the heart of Dhaka, BD, Foto Perfection Lab
                  operates with a singular focus: providing world-class photo
                  editing solutions to photographers, agencies, and brands
                  across the globe.
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  Whether you require detailed fashion retouching or bulk
                  e-commerce processing, our scalable team ensures your visual
                  assets are glamorous, commercial-ready, and delivered on
                  schedule.
                </p>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 md:aspect-video lg:aspect-square">
                <Image
                  src="/socialMedia.jpeg"
                  alt="High-end fashion photography retouching example"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 py-12 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-xl font-bold tracking-tight">
                fotoperfectionlab
              </span>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                Elevating commercial and fashion photography with premium
                editing services worldwide.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Contact</h3>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <a
                    href="mailto:fotoperfectionlab@gmail.com"
                    className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                  >
                    fotoperfectionlab@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+880185266225"
                    className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                  >
                    +880 185266225
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Location</h3>
              <address className="not-italic text-sm text-zinc-600 dark:text-zinc-400">
                Dhaka, Bangladesh
                <br />
                Serving Clients Worldwide
              </address>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  <Link
                    href="/privacy"
                    className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="transition-colors hover:text-zinc-950 dark:hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between mt-20">
            <div className="text-muted text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} FotoPerfectionLab. All rights
              reserved.
            </div>
            <CraftingCredit/>
          </div>
        </div>
      </footer>
    </div>
  );
}
