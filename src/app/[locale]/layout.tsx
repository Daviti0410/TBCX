import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import ThemeProvider from "./context/ThemeContext";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

export const metadata = {
  title: "Country",
};

async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <UserProvider>
        <body className="dark:bg-black ">
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </UserProvider>
    </html>
  );
}

export default LocaleLayout;
