import "./Global.css";
import UnAuthHeader from "@/components/UnAuthHeader/UnAuthheader";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UnAuthHeader />
        {children}
      </body>
    </html>
  );
}
