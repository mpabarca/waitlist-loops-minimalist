function EarlyAccessBadge() {
  const background = "bg-gray-100";
  const fontColor = "text-gray-600";
  const borderColor = "rounded-md";

  return (
    <div
      className={`${background} ${fontColor} ${borderColor} text-[10px] md:text-xs pt-2 pb-1.5 px-4 uppercase`}
    >
      In Early Access Now
    </div>
  );
}

export default EarlyAccessBadge;
