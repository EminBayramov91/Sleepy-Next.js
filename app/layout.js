import {Geologica} from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";


const geologica = Geologica({
    display: "swap",
    subsets: ["latin"],
});


export const metadata = {
    title: {
        template: "%s - Sleepy",
        default: "Sleepy"
    },
    description: "No description for now",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${geologica.className}`}>
            <Header />
                <main>{children}</main>
            <Footer />
        </body>
        </html>
    );
}
