import { ReactElement, ReactNode } from "react";

interface GenerateProps {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  primaryColor?: string;
  primaryTextColor?: string;
  site?: ReactNode;
}

export function generate({
  primaryColor = "oklch(0.623 0.214 259.815)",
  primaryTextColor = "oklch(0.97 0.014 254.604)",
  ...props
}: GenerateProps): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",
        padding: "4rem",
        backgroundColor: "#0c0c0c",
        backgroundImage: `linear-gradient(to top right, ${primaryColor}, transparent)`,
        fontFamily: "Roboto, Noto Sans SC, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
          marginBottom: "12px",
          color: primaryTextColor,
        }}
      >
        {props.icon}
        <p
          style={{
            fontSize: "56px",
            fontWeight: 300,
          }}
        >
          {props.site}
        </p>
      </div>

      <p
        style={{
          fontWeight: 300,
          fontSize: "82px",
        }}
      >
        {props.title}
      </p>
      <p
        style={{
          fontSize: "52px",
          fontWeight: 300,
          color: "rgba(240,240,240,0.8)",
        }}
      >
        {props.description}
      </p>
    </div>
  );
}
