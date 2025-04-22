import { rowContentProp } from '../CartItems';
import { TableRow } from './TableRow/TableRow';
interface tableProps {
  returnOrder: boolean;
  items: rowContentProp[];
  desiredRows: number;
}
export const Table: React.FC<tableProps> = ({
  returnOrder,
  items,
  desiredRows,
}) => {
  return (
    <table className='w-full table-auto text-center'>
      <thead className='text-primary text-sm uppercase'>
        <tr className='border-grayColor border-b p-8'>
          <th>Size(Uk)</th>
          {returnOrder ? (
            <>
              <th>Order Quantity</th>
              <th>Return Quantity</th>
              <th>Amount</th>
              <th>Return Info</th>
            </>
          ) : (
            <>
              <th>Lead Time</th>
              <th>Item Status</th>
              <th>Quantity</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        <TableRow
          items={items}
          desiredRows={desiredRows}
          returnOrder={returnOrder}
        />
      </tbody>
    </table>
  );
};
