export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-white p-1 rounded-lg`}
    >
      {children}
    </button>
  );
};
