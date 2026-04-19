import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  visible: boolean;
  hovering: boolean;
};

const selectors =
  "a, button, input, textarea, select, [role='button'], [data-cursor='hover']";

export default function MacCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    visible: false,
    hovering: false,
  });

  useEffect(() => {
    const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!canUseFinePointer) {
      return;
    }

    document.documentElement.classList.add("mac-cursor-enabled");

    const handleMove = (event: MouseEvent) => {
      setCursor((state) => ({
        ...state,
        x: event.clientX,
        y: event.clientY,
        visible: true,
      }));
    };

    const handleLeave = () => {
      setCursor((state) => ({ ...state, visible: false }));
    };

    const handleEnterTarget = () => {
      setCursor((state) => ({ ...state, hovering: true }));
    };

    const handleLeaveTarget = () => {
      setCursor((state) => ({ ...state, hovering: false }));
    };

    const interactiveElements = Array.from(
      document.querySelectorAll<HTMLElement>(selectors),
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnterTarget);
      element.addEventListener("mouseleave", handleLeaveTarget);
    });

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeave, { passive: true });

    return () => {
      document.documentElement.classList.remove("mac-cursor-enabled");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnterTarget);
        element.removeEventListener("mouseleave", handleLeaveTarget);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`mac-cursor ${cursor.visible ? "is-visible" : ""} ${cursor.hovering ? "is-hovering" : ""}`}
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        }}
      >
        <span className="mac-cursor__pointer" />
      </div>
      <div
        className={`mac-cursor-glow ${cursor.visible ? "is-visible" : ""} ${cursor.hovering ? "is-hovering" : ""}`}
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        }}
      />
    </>
  );
}
