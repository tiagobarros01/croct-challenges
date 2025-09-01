"use client";

import { ReactElement, ReactNode, useEffect, useState, cloneElement, isValidElement, Children } from "react";


type ChildProps = {
  defaultExpanded?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  id?: string;
};

export function Accordion({
  children,
  className = "",
}: { children: ReactNode; className?: string }) {
  const items = Children.toArray(children)
    .filter(isValidElement) as ReactElement<ChildProps>[];

  const [openIndex, setOpenIndex] = useState<number | null>(() => {
    const i = items.findIndex((c) => !!c.props.defaultExpanded);
    return i >= 0 ? i : null;
  });

  useEffect(() => {
    if (openIndex != null && openIndex >= items.length) setOpenIndex(null);
  }, [items.length, openIndex]);

  return (
    <div className={`acc ${className}`.trim()}>
      {items.map((child, i) =>
        cloneElement(child, {
          key: child.key ?? i,
          id: `acc-${i}`,
          isOpen: openIndex === i,
          onToggle: () => setOpenIndex((prev) => (prev === i ? null : i)),
        } as Partial<ChildProps>)
      )}
    </div>
  );
}
