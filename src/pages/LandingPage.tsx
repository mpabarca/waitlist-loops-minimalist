import LoopsForm from "@/components/LoopsForm";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <img src="/vite.svg" alt="Logo" className="w-20 h-20 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Launch with Confidence</h1>
      <p className="mb-8 max-w-md">
        Collect emails, build hype, and validate your idea with a beautiful pre-launch page.
      </p>
      <LoopsForm />
    </div>
  );
}