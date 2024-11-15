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

async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="dark:bg-black ">
        <UserProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}

export default withPageAuthRequired(LocaleLayout);
