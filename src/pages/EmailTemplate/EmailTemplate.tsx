import { Logoo } from './assets/Logoo';

export interface EmailTemplateProps {
  title: string;
}
const EmailTemplate = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-cds_accent-100'>
      <table className='mb-8 gap-6 rounded-lg bg-cds_primary-50 py-12 shadow-md md:mb-40 md:h-2/5 md:w-2/5'>
        <tbody className=''>
          <tr className='flex flex-col gap-4 p-12'>
            <td className='pb-8'>
              <figure className='h-16 w-28'>
                <Logoo />
              </figure>
            </td>
            <td className='text-4xl font-bold'>Reset Passsword</td>
            <td className='flex flex-col'>
              <span>
                Hello <b>someone@example.com</b>
              </span>
              <span>
                You are receiving this email because a password reset request
                has been initiated for V12 footwear distributor portal.
              </span>
            </td>
            <td>
              To reset your password, click the button. If you didn't request a
              new password, feel free to ignore or delete this email.
            </td>
            <td className='pb-6'>
              <button className='rounded-md border bg-cds_accent-900 p-2 text-cds_primary-100'>
                Change my password
              </button>
            </td>
            <tr className='flex flex-col border-t-2 text-center text-xs'>
              <td className='pt-6 text-slate-500'>
                If the buttosn above doesn’t work, paste the link into your
                browser{' '}
              </td>
              <td className='text-cds_primary-900 underline'>
                https://www.v12.com/forgot_password
              </td>
            </tr>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default EmailTemplate;
