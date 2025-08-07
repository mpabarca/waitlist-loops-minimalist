import EarlyAccessBadge from "@/components/EarlyAccessBadge";
import LoopsForm from "@/components/LoopsForm";

export default function LandingPage() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center mx-4 md:mx-auto text-center gap-8 pb-14'>
      <section className='flex flex-col gap-4 items-center'>
        {/* Logo */}
        <img src='/vite.svg' alt='Logo' className='w-12 h-12 md:w-15 md:h-15' />
        <EarlyAccessBadge />
      </section>
      <section className='flex flex-col gap-4'>
        <h1 className='text-4xl font-bold'>Launch with Confidence</h1>
        <p className='max-w-md'>
          Collect emails, build hype, and validate your idea with a beautiful
          pre-launch page.
        </p>
      </section>
      <LoopsForm />
    </main>
  );
}
