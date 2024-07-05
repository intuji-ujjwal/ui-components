import { rowContentProp } from "../CartItems";
import { TableRow } from "./TableRow/TableRow";
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
    <table className="table-auto w-full text-center ">
      <thead className="uppercase text-primary  text-sm">
        <tr className="border-b border-grayColor p-8 ">
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
