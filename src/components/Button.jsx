// src/components/Button.jsx

const Button = ({ children, onClick }) => {
  return (
    <button
      className="p-2 px-3 border-[#DDDDDD] border rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
