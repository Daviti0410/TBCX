import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "./context/ThemeContext";

const { NextIntlClientProvider } = require("next-intl");
const { getMessages } = require("next-intl/server");
const { notFound } = require("next/navigation");
const { routing } = require("@/i18n/routing");

export const metadata = {
  title: "Country",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <UserProvider>
        <body>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
              </div>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </UserProvider>
    </html>
  );
}
