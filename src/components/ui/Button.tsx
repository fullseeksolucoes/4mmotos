import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
    "cursor-pointer inline-flex items-center justify-center gap-3 rounded-lg font-black uppercase transition-all transform active:scale-95 focus:outline-none",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-background-dark hover:bg-orange-600 orange-glow",

                outline:
                    "border-2 border-white/20 text-white hover:border-white backdrop-blur-sm",

                whatsapp:
                    "bg-primary text-background-dark hover:bg-orange-600 orange-glow",
            },

            size: {
                xs: "h-8 px-4 text-xs tracking-wide",
                sm: "h-10 px-6 text-sm tracking-wide",
                md: "h-14 px-8 text-base",
                lg: "h-16 px-10 text-lg",
                xl: "h-20 px-12 text-2xl tracking-tight",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    href?: string;
}

export function Button({
    className,
    variant,
    size,
    href,
    ...props
}: ButtonProps) {
    return (
        <Link href={href || ""}>
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                {...props}
            />
        </Link>
    );
}
