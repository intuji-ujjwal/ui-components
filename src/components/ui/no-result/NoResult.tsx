// TypeScript type for the props
type NoResultProps = {
  title?: string;
  desc?: string;
  classes?: string;
};

// React functional component
const NoResult = ({ title, desc, classes }: NoResultProps) => {
  return (
    <div
      className={`no-result px-5 py-16 text-center ${classes ? classes : ''}`}
    >
      <h2 className='mb-1 text-base font-semibold text-neutral-300'>{title}</h2>{' '}
      <div className='text-sm font-normal text-neutral-300'>{desc}</div>
    </div>
  );
};

export default NoResult;
