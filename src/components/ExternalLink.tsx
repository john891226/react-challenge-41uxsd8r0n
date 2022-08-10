import React from "react";

interface Props {
  to: string;
  icon: React.FC;
}

function ExternalLink({ icon: Icon, to }: Props) {
  return (
    <a href={to} target="_blank" style={{ color: "inherit" }}>
      <Icon />
    </a>
  );
}

export default ExternalLink;
