import { useState } from 'react';
import Alert from '../../../Alert/Alert';
import { Button } from '../../../button/Button';
import { CreditTable } from '../paymentTable/CreditTable';

export interface paymentProp {
  payment: string;
  description: string;
  buttonString: string;
  amount: number;
}
export const PayViaTable: React.FC<paymentProp> = ({
  payment,
  description,
  amount,
  buttonString,
}) => {
  const [stateOpen, setStateOpen] = useState(true);
  return (
    <div className='flex flex-col gap-4'>
      <CreditTable
        payment={payment}
        description={description ?? 'dsdss'}
        amount={amount ?? 1200}
      />
      {amount > 1500 ? (
        <Alert
          type='warning'
          alertIcon={null}
          title='Default Alert'
          openState={stateOpen}
          setOpenState={setStateOpen}
          description='This is a default alert.'
        />
      ) : (
        <div className='border-t-2 py-2 text-center text-xs text-gray-500'>
          By clicking ‘Checkout’ , you agree to V12 Footwear’s  Terms &
          Conditions and Privacy Policy.
        </div>
      )}
      <Button
        type='button'
        className='w-full shadow'
      >
        {buttonString}
      </Button>
    </div>
  );
};
