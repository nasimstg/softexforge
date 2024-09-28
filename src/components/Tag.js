import Link from "next/link";
import kebabCase from "@/lib/utils/kebabCase";

const Tag = ({ text, num }) => {
  return (
    <li className="mr-1.5 mt-2">
      <Link
        href={`/tech/${kebabCase(text)}`}
        className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300 ">
          {text.split(" ").join("-")}
          {num && <span className="ml-1 text-sm text-teal-300">{num}</span>}
        </div>
      </Link>
    </li>
  );
};

export default Tag;
