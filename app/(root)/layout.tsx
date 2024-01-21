import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>)
}