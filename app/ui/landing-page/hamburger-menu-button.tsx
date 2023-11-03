import { Dispatch, SetStateAction } from "react";

export default function MenuToggle({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const genericHamburgerLine =
    "h-1 w-7 my-[3px] rounded-full bg-white transition ease transform";

  return (
    <button
      role="menu toggler"
      className="group flex flex-col items-center justify-center no-flash"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`${genericHamburgerLine} ${
          open ? "translate-y-[10px] -rotate-45 " : ""
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          open ? "-translate-y-[10px] rotate-45 " : ""
        }`}
      />
    </button>
  );
}
