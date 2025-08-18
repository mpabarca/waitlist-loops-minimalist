import EarlyAccessBadge from "@/components/EarlyAccessBadge";
import Footer from "@/components/Footer";
import LoopsForm from "@/components/LoopsForm";

export default function LandingPage() {
  const parentStyle = {
    background: "transparent",
    padding: "px-5 pt-5",
    sizeLogo: "w-12 h-12 md:w-15 md:h-15",
  };
  const badgeStyle = {
    background: "bg-gray-100",
    fontColor: "text-gray-600",
    borderColor: "rounded-md",
  };

  return (
    <main className='min-h-screen flex flex-col'>
      <div className={`flex-1 flex ${parentStyle.padding}`}>
        <div
          className={`w-full flex flex-1 flex-col justify-center items-center text-center rounded-xl gap-8 pb-16 ${parentStyle.background}`}
        >
          {/* Logo + Badge */}
          <section className='flex flex-col gap-4 items-center'>
            <img src='/vite.svg' alt='Logo' className={parentStyle.sizeLogo} />
            <EarlyAccessBadge
              background={badgeStyle.background}
              borderColor={badgeStyle.borderColor}
              fontColor={badgeStyle.fontColor}
            />
          </section>

          {/* Title & Subtitle */}
          <section className='flex flex-col gap-4'>
            <h1 className='text-4xl font-bold'>Launch with Confidence</h1>
            <p className='max-w-md'>
              Collect emails, build hype, and validate your idea with a
              beautiful pre-launch page.
            </p>
          </section>

          {/* Form */}
          <section className='h-32 w-full flex flex-col justify-center'>
            <LoopsForm />
          </section>
        </div>
      </div>

      {/* Sticky Footer */}
      <Footer />
    </main>
  );
}
