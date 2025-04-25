import { Button } from '../../../button/Button';
import { icons } from '../../../icons/IconsComponent';

import { Shoe } from '../assets/Shoe';
interface cartHeaderProps {
  variant?: string;
  icon?: typeof icons;
  setShowVariant: React.Dispatch<React.SetStateAction<boolean>>;
  showVariant: boolean;
  returnOrder: boolean;
}
export const CartHeader: React.FC<cartHeaderProps> = ({
  showVariant,
  returnOrder,
}) => {
  return (
    <div className='flex items-center justify-between py-4 text-sm max-md:flex-col'>
      <div className='flex items-center justify-start max-md:flex-col'>
        <figure className='w-24 rounded-lg border p-2 shadow-lg'>
          {<Shoe />}
        </figure>
        <div className='flex flex-col gap-4 p-4'>
          <div className='text-xl font-semibold'>V231o Lynx IGS</div>
          <div className='flex gap-4 text-sm'>
            <span className='text-sm'>
              SKU <b>V2130</b>
            </span>
            <div className='flex items-center gap-2 font-semibold'>
              <span className='h-4 w-4 rounded-full bg-black'></span>MIDNIGHT
              BLACK
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-end p-4'>
        <div className='text-right text-base uppercase tracking-wider'>
          {!returnOrder && (
            <>
              <span className='border-r-2 p-4 font-black text-primary-500'>
                Remove
              </span>
              <span className='p-4'>34353</span>
            </>
          )}
        </div>

        <div className='flex items-center justify-between gap-8 max-md:flex-col md:justify-start'>
          {returnOrder ? (
            <>
              <div className='flex gap-8'>
                <div className='flex flex-col'>
                  <span>Quantity</span>
                  <span>
                    <b>48pairs</b>
                  </span>
                </div>
                <div className='flex flex-col'>
                  <span>Amount</span>
                  <span>
                    <b>£2,324.99</b>
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <Button
                type='button'
                className='text-base font-semibold text-blue-500'
              >
                Add more Variant{' '}
              </Button>
              <span className='font-normal'>
                Total Selection quantity <b>48 pairs</b>
              </span>
            </>
          )}
          <Button
            type='button'
            className='flex items-center text-sm font-semibold text-black'
          >
            {showVariant ? 'Hide Variant' : 'Show variant'}
          </Button>
        </div>
      </div>
    </div>
  );
};
