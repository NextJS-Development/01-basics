import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className={"title"}>
        Go to <Link href="/about">About</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.jsx</code>
      </p>
    </MainLayout>
  );
}
