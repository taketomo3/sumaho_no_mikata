import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="h-full min-h-screen mx-2">
      <span className="block h-4" />
      <div className="h-screen text-center animate-fadeInMoveTop">
        <Link href="/">
          <a>
            <Image src="/title.svg" alt="すまほのみかた" width={200} height={50} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
