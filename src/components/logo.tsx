import { RocketIcon } from "@radix-ui/react-icons";

export function Logo() {
  return (
    <div className="flex items-center justify-center h-10 w-10 gap-2 rounded-md bg-zinc-700">
      <RocketIcon className="w-5 h-5 text-primary-foreground" />
    </div>
  );
}
