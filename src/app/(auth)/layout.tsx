import { Background } from "@/assets/images/patterns/background";
import "./styles.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="auth-section">
      <div className="background">
      </div>
      {children}
    </div>
  );
}
