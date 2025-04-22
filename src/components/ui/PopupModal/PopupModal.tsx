import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Button from '../button/Button';
import { IconClose } from '../icons/regular/close';
export interface PopupProps {
  title: string;
  children: ReactNode;
}
const PopupModal: React.FC<PopupProps> = ({ title, children }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      <Button
        size='medium'
        type='button'
        designType={'solid'}
        varient={'primary'}
        handleClick={() => setShowModal(true)}
        classes='text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150'
      >
        {title}
      </Button>
      {showModal && (
        <>
          <div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto'>
            <div
              ref={modalRef}
              className='relative mx-auto my-6 w-auto max-w-3xl'
            >
              <div className='relative flex w-full flex-col rounded-lg border-0 bg-white p-5 shadow-lg'>
                {children}
                <span
                  className='absolute -top-3 right-0'
                  onClick={() => setShowModal(false)}
                >
                  <IconClose
                    fill='red'
                    size={22}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-70'></div>
        </>
      )}
    </>
  );
};

export default PopupModal;
