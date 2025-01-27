import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';

import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../components/Loader';
import Header from '../components/Header';
import CartProvider from '../contexts/cart';
import FilterProvider from "../contexts/filter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-[2em] py-[2em]">
          <CartProvider>
            <FilterProvider>
              <Header />
              <Loader>
                <section className="mt-[1em]">
                  {children}
                </section>
              </Loader>
              <ToastContainer />
            </FilterProvider>
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
