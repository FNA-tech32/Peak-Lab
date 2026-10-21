import type { ReactNode } from "react";
import { Link as RouterLink, useLocation, useNavigate, type LinkProps } from "react-router-dom";

type Props = Omit<LinkProps, "to"> & {
  href: string;
  children?: ReactNode;
};

export default function Link({ href, ...rest }: Props) {
  return <RouterLink to={href} {...rest} />;
}

export function usePathname() {
  return useLocation().pathname;
}

export function useRouter() {
  const navigate = useNavigate();
  return {
    push(href: string) {
      navigate(href);
    },
  };
}
