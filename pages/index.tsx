import dynamic from "next/dynamic";
import UnderlineText from "../components/underline_text";

const Login = dynamic(() => import("../components/login"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <style global jsx>{`
        body.bg-white {
          background-color: #f1faee !important;
        }
      `}</style>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-hero text-blue-dark text-center mb-[8vh]">
          You Deserve Easy Access to Cryptocurrencies
          <br /> to use <span className="text-orange">crypto</span>,
          <br />
          <h1 className="text-blue-oil" color="bg-orange">
            Buy, store, collect NFTs,
          </Text>{" "}
          and
          <br />
          <Text className="text-blue-oil" color="bg-blue-dark">
            exchange & earn cryptosafely
          </Text>
        </h1>
        <Login />
      </div>
    </>
  );
}
