import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from "react";
import GlassSurface from "@/components/effects/GlassSurface";

type CommonProps = PropsWithChildren<{
  className?: string;
  intensity?: "soft" | "bold";
}>;

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type GlassButtonProps = AnchorProps | ButtonProps;

export default function GlassButton(props: GlassButtonProps) {
  const { className = "", children, intensity = "soft" } = props;
  const baseClassName = `glass-button ${intensity === "bold" ? "glass-button--bold" : ""} ${className}`;

  const content = (
    <GlassSurface
      width="100%"
      height="100%"
      borderRadius={999}
      brightness={intensity === "bold" ? 62 : 56}
      opacity={0.92}
      blur={14}
      displace={0.4}
      distortionScale={intensity === "bold" ? -110 : -140}
      redOffset={2}
      greenOffset={10}
      blueOffset={18}
      backgroundOpacity={0.12}
      saturation={1.25}
      mixBlendMode="screen"
      className="glass-button__surface"
    >
      <span className={baseClassName}>{children}</span>
    </GlassSurface>
  );

  if ("href" in props) {
    const { href, className: _className, intensity: _intensity, ...anchorProps } =
      props as AnchorProps;

    return (
      <a {...anchorProps} href={href} className="glass-button-link">
        {content}
      </a>
    );
  }

  const {
    type = "button",
    className: _className,
    intensity: _intensity,
    ...buttonProps
  } = props as ButtonProps;

  return (
    <button {...buttonProps} type={type} className="glass-button-link">
      {content}
    </button>
  );
}
