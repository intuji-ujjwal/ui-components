import React, { useRef, useState } from 'react';
import Flame from './sections/Flame';
import { CheckIcon, FaceSmileIcon } from '@heroicons/react/24/outline';

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  const cardsRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setCursor({ x: x, y: y });
    }
  };

  return (
    <main className='flex h-screen w-full place-items-center justify-center'>
      <section
        className='absolute flex h-[26rem] w-[44rem] flex-row justify-between rounded-lg border border-neutral-600 bg-neutral-800 stroke-[0.1] p-8 hover:stroke-[0.15]'
        ref={cardsRef}
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}
        onMouseMove={(event) => handleMouseMove(event)}
      >
        <div className='flex w-2/5 flex-col justify-between'>
          <div className='flex flex-col gap-5'>
            <FaceSmileIcon className='w-14 rounded-lg bg-neutral-950/70 stroke-emerald-500 p-2 shadow-inner' />
            <h1 className='font-poppins text-2xl tracking-wide text-neutral-200'>
              ज्वाला
            </h1>
            <p className='font-poppins -mt-2 tracking-wide text-neutral-500'>
              Hover over to the flame to see magic ✨
            </p>
          </div>
          <div className='font-poppins flex flex-col tracking-wide text-neutral-200'>
            <span className='flex flex-row gap-2'>
              <CheckIcon className='w-5' />
              <p>Built with React & Tailwind</p>
            </span>
            <span className='flex flex-row gap-2'>
              <CheckIcon className='w-5' />
              <p>Fully Reusable</p>
            </span>
          </div>
        </div>
        <div className='flex w-3/5 flex-col place-items-center'>
          {/* SVG Here */}
          <Flame
            cursor={cursor}
            cardRef={cardsRef}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </section>
    </main>
  );
};

export default Card;
