import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-8 px-4 md:px-6">
      <p className="text-lg text-foreground text-center">
        Made by{" "}
        <Link
          href="https://x.com/sorvkay"
          className="hover:underline inline-flex items-center gap-1 group relative"
          prefetch={false}
        >
          Sorv{" "}
          <span>
            <ArrowTopRightIcon
              className="relative group-hover:scale-125 transition-all text-foreground"
              height={18}
              width={18}
            />
          </span>
        </Link>
      </p>
    </footer>
  );
};
