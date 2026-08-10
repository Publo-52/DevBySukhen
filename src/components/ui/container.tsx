import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        "w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}
