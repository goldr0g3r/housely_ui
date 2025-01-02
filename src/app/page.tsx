import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="heading">
        <h1>Heading</h1>
      </div>
      <h1>Sub heading</h1>
      <Image
        src="/file.svg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
