import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import WorkoutContextProvider from "@/context/WorkoutContext";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <WorkoutContextProvider>
                    <Navbar />

                    {children}

                </WorkoutContextProvider>

                {/* <Footer /> */}
            </body>
        </html>
    );
}