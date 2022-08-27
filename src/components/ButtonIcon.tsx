

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ButtonIcon({ children, className }: Props){
  return (
    <button className={`flex items-center gap-2 p-[7px] rounded-full hover:bg-violet-100 transition-colors ${className}`}>
      {children}
    </button>
  )
}