interface props {
  label: string;
  count?: number;
  colour?: any;
  large?: boolean;
}
const Button = ({ label, colour, large }: props) => {
  const classList = "p-3 bg-transparent border rounded-lg transition duration-500 ease-in-out hover:bg-grass hover:text-snow hover:border-grass"

  return (
    <div className="my-3">
      <button className={classList}>{`${label}`}</button>
    </div>
  );
};

export default Button;
