type ButtonProps = {
  children: string;
  alcoholic: Boolean;
  handleClick: () => void;
};
const active: string = "shadow-[0_0_0_3px_#230312,_0_0_0_6px_#efb8d2]";

function Button({ children, alcoholic, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`${
        alcoholic ? active : ""
      } rounded-xl border-[2px] border-[#efb8d2] !py-2 text-lg w-48 transition-all duration-300 ease-in-out hover:!bg-[#efb8d2] hover:!text-[#230312]`}
    >
      {children}
    </button>
  );
}

export default Button;
