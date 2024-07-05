import Button from "../../../button/Button";
import { CardTable } from "../paymentTable/CardTable";

export interface paymentProp {
  payment?: string;
  description?: string;
  buttonString: string;
}
export const PayViaCard: React.FC<paymentProp> = ({ buttonString }) => {
  return (
    <div className="flex flex-col gap-4">
      <CardTable />
      <div className="text-center text-xs text-gray-500 border-t-2 py-2">
        By clicking ‘Checkout’ , you agree to V12 Footwear’s  Terms &
        Conditions and Privacy Policy.
      </div>
      <Button
        size="medium"
        type="button"
        designType={"solid"}
        varient={"primary"}
        classes="shadow w-full"
      >
        {buttonString}
      </Button>
    </div>
  );
};
