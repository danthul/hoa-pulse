import AcmeLogo from '@/app/ui/acme-logo';
import Image from 'next/image';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="bg-hoa flex h-20 w-full items-center justify-center rounded-lg p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Image
              src="/HOA_logo_white.png"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Heart of America logo"
            />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
