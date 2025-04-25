import { Button } from '../../../button/Button';
import { CardTable } from '../paymentTable/CardTable';

export interface paymentProp {
  payment?: string;
  description?: string;
  buttonString: string;
}
export const PayViaCard: React.FC<paymentProp> = ({ buttonString }) => {
  return (
    <div className='flex flex-col gap-4'>
      <CardTable />
      <div className='border-t-2 py-2 text-center text-xs text-gray-500'>
        By clicking ‘Checkout’ , you agree to V12 Footwear’s  Terms &
        Conditions and Privacy Policy.
      </div>
      <Button
        type='button'
        className='w-full shadow'
      >
        {buttonString}
      </Button>
    </div>
  );
};
