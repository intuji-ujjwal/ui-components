export interface ToolTipProps {
  title?: string;
  position?: string;
}
export const ToolTip: React.FC<ToolTipProps> = ({ title, position }) => {
  const arrrowPosition = {
    top: 'absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-[6px] text-[13px] right-0 left-0 mx-auto w-max -top-10 rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:-bottom-1 before:left-0  before:right-0 before:mx-auto',
    bottom:
      'absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-[6px] text-[13px] right-0 left-0 mx-auto w-max -bottom-10 rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:-top-1 before:left-0  before:right-0 before:mx-auto',
    right:
      'absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-2 text-[13px] left-full ml-3 top-0 bottom-0 my-auto h-max w-max rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:bottom-0 before:top-0 before:my-auto before:-left-1 before:mx-auto',
    left: 'absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-2 text-[13px] right-full mr-3 top-0 bottom-0 my-auto h-max w-max rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:bottom-0 before:top-0 before:my-auto before:-right-1 before:mx-auto',
  };
  const newPosition = (position ?? 'top') as
    | 'top'
    | 'bottom'
    | 'left'
    | 'right';
  return (
    <div className='group relative mx-auto mt-12 w-max'>
      <button
        type='button'
        className='rounded border-none bg-blue-600 px-6 py-2.5 text-sm font-semibold tracking-wider text-white outline-none hover:bg-blue-700 active:bg-blue-600'
      >
        Hover me
      </button>
      <div className={`${arrrowPosition[newPosition]}`}>{title}</div>
    </div>
  );
};
