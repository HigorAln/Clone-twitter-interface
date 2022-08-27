

interface Props {
  children: React.ReactNode;
}

export function ButtonIcon({ children }: Props){
  return (
    <button className="flex p-[7px] rounded-full hover:bg-violet-100">
      {children}
    </button>
  )
}