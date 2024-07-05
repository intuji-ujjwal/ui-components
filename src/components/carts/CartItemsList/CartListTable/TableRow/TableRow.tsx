import Badges from "../../../../Badges/Badges";
import { IconReset } from "../../../../icons/regular/reset";
import { IconTrash } from "../../../../icons/regular/trash";
import { rowContentProp } from "../../CartItems";

interface tableRowProp {
  items: rowContentProp[];
  desiredRows: number;
  returnOrder: boolean;
}

export const TableRow: React.FC<tableRowProp> = ({
  items,
  desiredRows,
  returnOrder,
}) => {
  // Create an extended array of the desired length by cycling through the original array
  const extendedItems = Array.from(
    { length: desiredRows },
    (_, index) => items[index % items.length],
  );
  return (
    <>
      {extendedItems.map((item, index) => (
        <tr
          key={index}
          className="border-test p-2 text-center border border-transparent border-b-grayColor last:border-b-transparent rounded-lg my-1"
        >
          <td data-title="Size">{item.size}</td>
          {returnOrder ? (
            <>
              <td data-title="Order Quantity">{item.orderQuantity}</td>
              <td data-title="Return Quantity">
                <div className="flex items-center gap-2 ">
                  <input
                    type="number"
                    className="border p-2 rounded-lg max-md:w-full"
                    placeholder="Qty"
                    defaultValue={item.quantity}
                  />
                  <div className="flex gap-2">
                    <IconReset fill="black" size={18} />
                    <IconTrash fill="black" size={18} />
                  </div>
                </div>
              </td>
              <td data-title="Amount">£ {item.amount}</td>
              <td data-title="Return Info">{item.returnInfo}</td>
            </>
          ) : (
            <>
              <td data-title="LeadTime">{item.leadTime}</td>
              <td data-title="Status">
                <Badges varient="default" classes="p-3">
                  {item.itemStatus}
                </Badges>
              </td>
              <td data-title="Quanttiy">
                <div className="flex items-center gap-2 ">
                  <input
                    type="number"
                    className="border p-2 rounded-lg max-md:w-full"
                    placeholder="Qty"
                    defaultValue={item.quantity}
                  />
                  <div className="flex gap-2">
                    <IconReset fill="black" size={18} />
                    <IconTrash fill="black" size={18} />
                  </div>
                </div>
              </td>
            </>
          )}
        </tr>
      ))}
    </>
  );
};
