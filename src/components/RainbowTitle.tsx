interface RainbowTitleProps {
  children: React.ReactNode;
  className?: string;
}

const RainbowTitle = ({ children, className = "" }: RainbowTitleProps) => {
  return (
    <h1 className={`rainbow-text text-6xl font-bold mb-8 ${className}`}>
      {children}
    </h1>
  );
};

export default RainbowTitle;
