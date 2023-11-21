interface props {
  label: string;
  count?: number;
  colour?: any;
  large?: boolean;
}
const Button = ({ label, colour, large }: props) => {
  const classList = "p-5 bg-gray-100";

  return (
    <div className="my-3">
      <button className={classList}>{`${label}`}</button>
    </div>
  );
};

export default Button;
