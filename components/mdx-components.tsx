import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type TableProps = ComponentPropsWithoutRef<"table">;
type ThProps = ComponentPropsWithoutRef<"th">;
type TdProps = ComponentPropsWithoutRef<"td">;
type CodeProps = ComponentPropsWithoutRef<"code">;
type PreProps = ComponentPropsWithoutRef<"pre">;
type HrProps = ComponentPropsWithoutRef<"hr">;

export const mdxComponents = {
  // ── Headings ──────────────────────────────────────────────────────────────
  h1: ({ children, ...props }: HeadingProps) => (
    <h1
      className="text-3xl font-extrabold text-[#1E3A8A] mt-10 mb-4 leading-tight"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: HeadingProps) => (
    <h2
      className="text-2xl font-bold text-[#1E3A8A] mt-10 mb-4 pb-2 border-b-2 border-[#22C55E]/30 leading-snug"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: HeadingProps) => (
    <h3
      className="text-lg font-bold text-[#1E3A8A] mt-7 mb-3 flex items-center gap-2 leading-snug"
      {...props}
    >
      <span className="w-1 h-5 bg-[#22C55E] rounded-full inline-block shrink-0" />
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: HeadingProps) => (
    <h4
      className="text-base font-semibold text-gray-800 mt-5 mb-2"
      {...props}
    >
      {children}
    </h4>
  ),

  // ── Paragraphs ────────────────────────────────────────────────────────────
  p: ({ children, ...props }: ParagraphProps) => (
    <p
      className="text-gray-700 leading-relaxed text-base mb-4 last:mb-0"
      {...props}
    >
      {children}
    </p>
  ),

  // ── Lists ─────────────────────────────────────────────────────────────────
  ul: ({ children, ...props }: ListProps) => (
    <ul className="my-4 space-y-2 pl-0 list-none" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className="my-4 space-y-2 pl-0 list-none counter-reset-list" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ListItemProps) => (
    <li
      className="flex items-start gap-2.5 text-gray-700 text-base leading-relaxed"
      {...props}
    >
      <span className="mt-2 w-2 h-2 bg-[#22C55E] rounded-full shrink-0" />
      <span>{children}</span>
    </li>
  ),

  // ── Links ─────────────────────────────────────────────────────────────────
  a: ({ href, children, ...props }: AnchorProps) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");
    if (isInternal && href) {
      return (
        <Link
          href={href}
          className="text-[#22C55E] font-medium underline decoration-[#22C55E]/40 underline-offset-2 hover:decoration-[#22C55E] transition-all"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#22C55E] font-medium underline decoration-[#22C55E]/40 underline-offset-2 hover:decoration-[#22C55E] transition-all"
        {...props}
      >
        {children}
      </a>
    );
  },

  // ── Blockquote ───────────────────────────────────────────────────────────
  blockquote: ({ children, ...props }: BlockquoteProps) => (
    <blockquote
      className="my-6 pl-5 border-l-4 border-[#22C55E] bg-green-50 rounded-r-xl py-4 pr-4 text-gray-700 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // ── Table ─────────────────────────────────────────────────────────────────
  table: ({ children, ...props }: TableProps) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-[#1E3A8A] text-white" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody className="divide-y divide-gray-100" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => (
    <tr className="hover:bg-blue-50/40 transition-colors" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: ThProps) => (
    <th
      className="px-4 py-3 text-left font-semibold text-white text-xs uppercase tracking-wider"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: TdProps) => (
    <td
      className="px-4 py-3 text-gray-700 align-top"
      {...props}
    >
      {children}
    </td>
  ),

  // ── Code ──────────────────────────────────────────────────────────────────
  code: ({ children, ...props }: CodeProps) => (
    <code
      className="bg-blue-50 text-[#1E3A8A] text-[0.85em] font-mono px-1.5 py-0.5 rounded-md border border-blue-100"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: PreProps) => (
    <pre
      className="my-5 overflow-x-auto bg-gray-900 text-gray-100 rounded-xl p-5 text-sm font-mono leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  ),

  // ── HR ────────────────────────────────────────────────────────────────────
  hr: ({ ...props }: HrProps) => (
    <hr
      className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
      {...props}
    />
  ),

  // ── Strong / Em ───────────────────────────────────────────────────────────
  strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold text-[#1E3A8A]" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-gray-600" {...props}>
      {children}
    </em>
  ),
};
