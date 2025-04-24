interface creditTableProps {
  payment: string;
  description: string;
  amount: number;
}
export const CreditTable: React.FC<creditTableProps> = ({
  payment,
  description,
  amount,
}) => {
  return (
    <table className='table-auto text-lg'>
      <tr className=''>
        <td className='border-grayColor font-bold'>Pay via {payment}</td>
        {payment === 'credit' ? (
          <td className='text-grayColor text-sm'>Credit Available</td>
        ) : (
          <td></td>
        )}
      </tr>
      <tr>
        <td className='text-grayColor text-sm'>{description}</td>
        <td className='border-grayColor text-right text-2xl font-bold'>
          £{amount}
        </td>
      </tr>
    </table>
  );
};
