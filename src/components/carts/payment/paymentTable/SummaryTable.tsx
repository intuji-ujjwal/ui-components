interface PaymentChildrenProps {
  subtotal: number;
  carriageCost: number;
  estimatedVat: string;
  orderTotal: number;
  title: string;
}
export interface SummaryPaymentProps {
  items: PaymentChildrenProps[];
}
export const SummaryTable: React.FC<SummaryPaymentProps> = ({ items }) => {
  if (!Array.isArray(items)) {
    return null; // Or handle the case where items is not an array
  }
  return (
    <table className="table-auto w-full">
      <thead>
        <th className="text-left">Order Summary</th>
      </thead>
      {items.map((item) => (
        <tbody key={item.title}>
          <tr>
            <td className="text-gray-400">Sub Total</td>
            <td className="text-right">{item.subtotal}</td>
          </tr>
          <tr>
            <td className="text-gray-400">Carriage Cost</td>
            <td className="text-right">{item.carriageCost}</td>
          </tr>
          <tr>
            <td className="text-gray-400">Estimated Vat</td>
            <td className="text-right">{item.estimatedVat}</td>
          </tr>
          <tr>
            <td className="border-grayColor text-xl font-bold">Order Total</td>
            <td className="border-grayColor text-right text-xl font-bold">
              {item.orderTotal}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
