import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MemberData {
    name: string
    role: string
    image: string
    profileLink: string
}

const TeamData: MemberData[] = [
    {
        name: 'Md Nasim Sheikh',
        role: 'Mid Software Engineer',
        image: '/images/team/nasim.png',
        profileLink: 'https://www.linkedin.com/in/nasimstg',
    },
    {
        name: 'Miraj Kishur',
        role: 'Junior Software Engineer',
        image: '/images/team/miraj.jpg',
        profileLink: 'https://www.linkedin.com/in/mirajkisur',

    },
    {
        name: 'Jubayer Arafat',
        role: 'Devops Engineer',
        image: '/images/team/jubayer.jpg',
        profileLink: 'https://www.linkedin.com/in/jubayer',
    },
    {
        name: 'Nusrat Tabassum',
        role: 'UI/UX Designer',
        image: '/images/team/oyshi.jpg',
        profileLink: 'https://www.linkedin.com/in/nusrattabassum',
    },
]

export function Member({ name, role, image, profileLink }: MemberData) {
    return (
        <div className="group relative pb-1 transition-all lg:hover:!opacity-100 lg:group-hover:opacity-50">
            <div className="absolute -inset-x-2 -inset-y-2 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-4 lg:-inset-4 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:col-span-6">
                <Link title={'Open '+ name + "'s LinkedIn profile)"} aria-label={name + "'s LinkedIn profile)"} target='_blank' href={profileLink} className='flex flex-col items-center relative z-10'>
                    <Image width={200} height={200} className="w-32 h-32 md:w-[160px] md:h-[160px] rounded-full" src={image} alt={name} />
                    <h3 className="mt-4 text-lg font-semibold">{name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{role}</p>
                </Link>
            </div>
        </div>
    )
}

export default function Team() {
    return (
        <section id="team" className="mb-10 scroll-mt-10 md:mb-16 lg:mb-20 lg:scroll-mt-20" aria-label="Team">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Our Team</h2>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-2">
                {TeamData.map((member, index) => (
                    <Member key={index} {...member} />
                ))}
            </div>
        </section>
    )
}