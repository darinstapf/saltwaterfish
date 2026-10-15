/**
 * Internal publication links always use the deployed Cloudflare Pages URL
 * convention: root at / and nested static routes ending with /.
 */

import type { ComponentProps } from "react";
import { Link } from "wouter";
import { canonicalPath } from "@/lib/urls";

type PublicationLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string;
};

export function PublicationLink({ href, ...props }: PublicationLinkProps) {
  return <Link href={canonicalPath(href)} {...props} />;
}
