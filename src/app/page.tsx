
import About from "@/components/About";
import Navigation from "@/components/Nav";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import { LinkIcon } from "@/components/tools/SocialLinks";
import { Github, Linkedin } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {

  return (
    <div
    >
      <Head>
        <title>SoftexForge | Software Solution | Innovation in System & Application Software</title>
      </Head>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-16 lg:py-0">
         <div className="lg:flex lg:justify-between lg:gap-6">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-20">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><Link href="/">SoftexForge</Link></h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Innovative Software Solution</h2>
              <p className="mt-4 max-w-lg leading-normal">We bring your ideas to life with tailored software solutions. Whether it&apos;s system software, from kernel modifications to driver development, or application software for mobile, desktop, web, or standalone platforms, we&apos;ve got you covered. From concept to production, we handle every step of the process to deliver high-quality, custom-built software.</p>

            </div>
            <Navigation />
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs shrink-0">
                  <LinkIcon Icon={Github} link="https://github.com/softexforge" arial="SoftexForge Github" title="SoftexForge Github" text="SoftexForge Github" />
              </li>
              <li className="mr-5 text-xs shrink-0">
                <LinkIcon Icon={Linkedin} link="https://www.linkedin.com/in/softexforge" arial="Open SoftexForge Linkedin in a new window" title="SoftexForge Linkedin" text="SoftexForge Linkedin" />
              </li>
                </ul>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-20">
            <About />
            <Team />
            <Projects />
            
          </main>
         </div>
      </div>
    </div>
  );
}
