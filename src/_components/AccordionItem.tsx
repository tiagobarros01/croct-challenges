"use client";

import { ReactNode } from "react";
import "./accordion.css";

export type AccordionItemProps = {
  title: string;
  defaultExpanded?: boolean;
  children?: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  id?: string;
};

export function AccordionItem({
  title,
  children,
  isOpen = false,
  onToggle = () => {},
  id = "acc-item",
}: AccordionItemProps) {
  const headerId = `${id}-header`;
  const panelId = `${id}-panel`;

  return (
    <div className={`acc-item ${isOpen ? "open" : ""}`}>
      <button
        id={headerId}
        className="acc-btn"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="acc-title">{title}</span>
        <span aria-hidden className={`chev ${isOpen ? "rot" : ""}`}>⌄</span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className="acc-panel"
        hidden={!isOpen}
      >
        {isOpen ? <div className="acc-panel-inner">{children}</div> : ""}
      </div>
    </div>
  );
}