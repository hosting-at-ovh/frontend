"use client";
import * as React from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { cn } from "../../lib/utils.ts";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const radius = 100; // change this to increase the radius of the hover effect
        const [visible, setVisible] = React.useState(false);

        let mouseX = useMotionValue(0);
        let mouseY = useMotionValue(0);

        function handleMouseMove({ currentTarget, clientX, clientY }: any) {
            let { left, top } = currentTarget.getBoundingClientRect();

            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        return (
            <motion.div
                style={{
                    background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--main-one),
          transparent 80%
        )
      `,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-[2px] rounded-md transition duration-300 group/input"
            >
                <input
                    type={type}
                    className={cn(
                        `flex h-10 w-full bg-black text-white rounded-md px-3 py-2 text-sm 
   file:border-0 file:bg-transparent file:text-sm file:font-medium 
   placeholder-text-neutral-600 focus-visible:outline-none outline-none 
   ring-transparent ring-offset-transparent disabled:cursor-not-allowed 
   disabled:opacity-50 shadow-[0px_0px_1px_1px_var(--neutral-900)] 
   group-hover/input:shadow-none transition duration-400 
   ${visible ? "border-none" : "border-gray-300"} transition-all 
   autofill:text-white autofill:bg-black autofill:shadow-[0px_0px_1px_1px_var(--black)] `,
                        className
                    )}

                    ref={ref}
                    {...props}
                />
            </motion.div>
        );
    }
);
Input.displayName = "Input";

export { Input };

export const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
