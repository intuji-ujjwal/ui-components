import { CartTab } from '../cartTab/CartTab';
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
      className={`flex h-auto w-96 flex-col justify-start gap-4 p-2 ${borderStyle} border-spacing-4 rounded-lg border-4`}
    >
      <h6>Payment</h6>
      <CartTab
        payment={payment}
        description={description}
        amount={amount}
      />
    </div>
  );
};
export default Payments;
