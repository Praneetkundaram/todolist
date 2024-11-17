import Image from "next/image";
import file from "../public/file.svg"
import AddToDO from "./components/AddToDo";

export default function Home() {
  return (
    <>
    <h2>TODO APP</h2>
      <AddToDO />
    </>
  );
}
 