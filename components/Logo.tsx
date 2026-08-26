import Image from "next/image";

export default function Logo({
  light = false,
  priority = false,
}: {
  light?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`logo${light ? " logo--light" : ""}`}>
      {/* decorative — the DECAR wordmark beside it carries the name */}
      <Image
        src="/logo.png"
        alt=""
        width={300}
        height={256}
        className="logo-mark-img"
        priority={priority}
      />
      DECAR
    </div>
  );
}
