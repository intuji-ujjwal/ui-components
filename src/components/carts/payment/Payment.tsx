import { CartTab } from "../cartTab/CartTab";
export interface PaymentChildrenProps {
  subtotal: number;
  carriageCost: number;
  estimatedVat: string;
  orderTotal: number;
}
export interface PaymentProps {
  items: PaymentChildrenProps[];
  borderStyle: string;
  borderColor: string;
  payment: string;
  description: string;
  amount: number;
}
const Payments: React.FC<PaymentProps> = ({
  borderStyle,
  borderColor,
  payment,
  description,
  amount,
}) => {
  return (
    <div
      style={{
        borderColor: `${borderColor}`,
      }}
      className={`flex flex-col justify-start gap-4 p-2 w-96 h-auto ${borderStyle} border-4  border-spacing-4 rounded-lg	`}
    >
      <h6>Payment</h6>
      <CartTab payment={payment} description={description} amount={amount} />
    </div>
  );
};
export default Payments;
