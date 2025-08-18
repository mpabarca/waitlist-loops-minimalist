import EarlyAccessBadge from "@/components/EarlyAccessBadge";
import Footer from "@/components/Footer";
import LoopsForm from "@/components/LoopsForm";

// Check colors in https://tailwindcss.com/docs/colors
const styles = {
  transparentBackground: {
    parentStyle: {
      background: "transparent",
      padding: "px-5 pt-5",
      sizeLogo: "w-12 h-12 md:w-15 md:h-15",
    },
    badgeStyle: {
      // No border on badge, just background color
      background: "bg-gray-100",
      fontColor: "text-gray-600",
      borderColor: "rounded-md",
    },
  },
  colouredBackground: {
    parentStyle: {
      background: "bg-gray-100",
      padding: "px-5 pt-5",
      sizeLogo: "w-12 h-12 md:w-15 md:h-15",
    },
    badgeStyle: {
      // With defined border color, but transparent background
      background: "transparent",
      fontColor: "text-gray-600",
      borderColor: "rounded-md border border-gray-300",
    },
  },
};

export default function LandingPage() {
  // Choose between transparent background or with a defined color
  const style = styles.transparentBackground;

  const parentStyle = style.parentStyle;
  const badgeStyle = style.badgeStyle;

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
          <section className='flex flex-col items-center gap-4'>
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
