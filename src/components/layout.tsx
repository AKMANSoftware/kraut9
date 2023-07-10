import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
  showAnimation?: boolean;
}

export default function Layout({ children, showAnimation = true }: Props) {
  return (
    <>
      <Header />
      <main>
        {children}
        {
          showAnimation &&
          <>
            <div className="w-[396px] h-[396px] aspect-square rounded-full bg-tersioary/40 blur-[100px] -translate-x-1/2 -translate-y-1/2 fixed animate-motion1 z-[60]" />
            <div className="w-[396px] h-[396px] aspect-square rounded-full bg-tersioary/40 blur-[100px] delay-[5s] translate-x-1/2 -translate-y-1/2 fixed animate-motion2 z-[60]" />
          </>
        }
      </main>
      <Footer />
    </>
  );
}
