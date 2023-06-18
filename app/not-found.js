import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 Not Found - This page does not exist",
}

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - This page does not exist</title>
      </Head>
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full select-none bg-slate-50">
        <div>
          <Image
            src={"/images/others/404-not-found.png"}
            alt="404 Not found"
            width={420}
            height={420}
            draggable="false"
          ></Image>
          <div className="space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-slate-800">404</h1>
              <p className="text-slate-600">This page you&apos;re looking for doe&apos;s not exist</p>
            </div>

            <div>
              <Link href={"/"} className="font-semibold text-blue-700">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
