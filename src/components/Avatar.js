import Image from "next/image";
export default function Avatar() {
  //const defaultURL = "https://i.imgur.com/kGTbP8v.png";
  return (
    <img
      className={`h-10 w-10 rounded-full cursor-pointer duration-150 hover:animate-pulse `}
      src='./soon1.webp'
      alt="profile pic"
      width={40}
      height={40}
    />
  );
}
