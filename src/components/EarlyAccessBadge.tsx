interface IEarlyAccessBadge {
  background: string;
  fontColor: string;
  borderColor: string;
}

function EarlyAccessBadge({
  background,
  fontColor,
  borderColor,
}: IEarlyAccessBadge) {
  return (
    <div
      className={`${background} ${fontColor} ${borderColor} text-[10px] md:text-xs pt-2 pb-1.5 px-4 uppercase`}
    >
      In Early Access Now
    </div>
  );
}

export default EarlyAccessBadge;
