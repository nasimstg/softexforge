import Link from "next/link"
import { ElementType } from "react"

export function LinkIcon({ link, arial, title, text, Icon }: { link: string, arial: string, title: string, text: string, Icon: ElementType }) {
  return (
    <Link className="block hover:text-slate-200" href={link} target="_blank" rel="noreferrer noopener" aria-label={arial} title={title}>
      <span className="sr-only">{text}</span>
      {Icon && <Icon />}
    </Link>
  )
}