interface BadgeProps {
  text: string;
}

function Badge(props: BadgeProps) {
  return (
    <span className="bg-zinc-200 hover:bg-zinc-300 transition-all ease-in rounded-full px-2 py-1 text-sm font-semibold">
      {props.text}
    </span>
  );
}

export default Badge;
