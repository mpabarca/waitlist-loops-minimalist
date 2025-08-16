import EarlyAccessBadge from "@/components/EarlyAccessBadge";
import Footer from "@/components/Footer";
import LoopsForm from "@/components/LoopsForm";

export default function LandingPage() {
  const sizeLogo = "w-12 h-12 md:w-15 md:h-15";

  return (
    <main className='min-h-screen flex flex-col items-center justify-center mx-4 md:mx-auto'>
      <div className='flex flex-col justify-center items-center text-center gap-8 my-auto pb-14'>
        {/* Logo + Badge */}
        <section className='flex flex-col gap-4 items-center'>
          <img src='/vite.svg' alt='Logo' className={sizeLogo} />
          <EarlyAccessBadge />
        </section>
        {/* Title & Subtitle */}
        <section className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold'>Launch with Confidence</h1>
          <p className='max-w-md'>
            Collect emails, build hype, and validate your idea with a beautiful
            pre-launch page.
          </p>
        </section>
        {/* Form */}
        <section className='h-32 w-full flex flex-col justify-center'>
          <LoopsForm />
        </section>
      </div>
      <Footer />
    </main>
  );
}
