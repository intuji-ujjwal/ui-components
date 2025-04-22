import { ScrapAssistLogo } from './assets/logo';
import Button from '../../components/ui/button/Button';

const Login = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between bg-cds_accent-700'>
      <header className='mt-8 flex flex-col items-center md:mt-44 md:flex-row md:items-start'>
        <div
          className='aspect-square h-auto w-[73px]'
          aria-label='scrap_assist_logo'
        >
          <ScrapAssistLogo />
        </div>
        <span
          aria-label='srap_assist_title'
          className='ml-6 mt-2 text-center text-5xl font-bold text-cds_accent-50'
        >
          Scrap Assist
        </span>
      </header>
      <main className='mb-8 flex flex-col items-center justify-center gap-6 rounded-lg bg-cds_primary-50 p-12 text-center shadow-md md:mb-40 md:h-2/5 md:w-2/5'>
        <h1 className='text-2xl font-bold'>Welcome Back!</h1>
        <p className='mb-3 w-full max-w-[256px] antialiased'>
          Please log in with your account to access Scrap Assist.
        </p>
        <form>
          <Button
            size='large'
            type='button'
            designType={'solid'}
            varient={'primary'}
          >
            button
          </Button>
        </form>
      </main>
      <footer className='mb-5 text-center text-cds_accent-50 antialiased'>
        If you&apos;re having trouble logging in, please contact the IT team at{' '}
        <a href='mailto:itsupport@sellparker.com.au'>
          itsupport@sellparker.com.au
        </a>
      </footer>
    </div>
  );
};

export default Login;
