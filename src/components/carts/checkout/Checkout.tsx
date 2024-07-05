import { IconInfo } from "../../icons/fill/Info";
import { ProgressBar } from "../../progressBar/ProgressBar";
import { SummaryTable } from "../payment/paymentTable/SummaryTable";
import Button from "../../button/Button";
export interface PaymentChildrenProps {
  subtotal: number;
  carriageCost: number;
  estimatedVat: string;
  orderTotal: number;
  title: string;
}
export interface PaymentProps {
  items: PaymentChildrenProps[];
  borderStyle?: string;
  percentage?: number;
  color?: string;
  min?: number;
  max?: number;
}
const Checkout: React.FC<PaymentProps> = ({
  items,
  borderStyle,
  min,
  max,
  percentage,
  color,
}) => {
  return (
    <div
      style={{
        borderColor: `${color}`,
      }}
      className={`flex flex-col justify-start gap-8 p-2 w-96 h-auto  border ${borderStyle} border-4  border-spacing-8 rounded-lg`}
    >
      <div className="flex gap-2">
        <h6>Free Carriage Threhold</h6>
        <IconInfo fill="grey" size={18} />
      </div>

      <div className="flex  flex-col p-2 border rounded-lg ">
        <ProgressBar
          color={color}
          min={min}
          max={max}
          percentage={percentage}
        />
        <span className="w-full p-4 pb-0 text-gray-400 text-xs">
          Save £332.65 on shipping cost by adding £2,474.45 more to your order.
        </span>
      </div>
      <div className=" border-b-2 p-2">
        <SummaryTable items={items} />
      </div>
      <Button
        size="medium"
        type="button"
        designType={"solid"}
        varient={"primary"}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};
export default Checkout;
