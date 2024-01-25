import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-h-screen min-h-screen flex flex-col bg-[#E0F9FF]">
      <Header />
      <div className="h-full py-1 md:py-4 lg:py-5 px-1 md:px-4 lg:px-14 overflow-auto">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}