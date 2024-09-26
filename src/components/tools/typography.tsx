import Link from "next/link";

function H1({ text }: {text: string}) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {text}
        </h1>
    );
}

function H2({ text }: {text: string}) {
    return (
        <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {text}
        </h2>
    );
}

function P({ text }: {text: string}) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {text}
        </p>
    );
}

function Anchor({link, arial, text }: { link: string; arial:string; text: string }) {
    return (
        <Link 
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" 
            href={link} target="_blank" 
            rel="noreferrer noopener" aria-label={arial}>
            {text}
        </Link>
    );
}

function Quote({ text }: { text: string }) {
    return (
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {text}
      </blockquote>
    )
  }

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
    return (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                        {headers.map((header, index) => (
                            <th key={index} className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="m-0 border-t p-0 even:bg-muted">
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function List({ items }: { items: string[] }) {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
  

export { H1, H2, P, Anchor, Quote, Table, List };