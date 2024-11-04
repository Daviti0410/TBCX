import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ThemeProvider from "./context/ThemeContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <body>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  );
}

export default withPageAuthRequired(RootLayout);
