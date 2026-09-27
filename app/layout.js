import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import WorkoutContextProvider from "@/context/WorkoutContext";
import PlanContextProvider from "@/context/PlanContext";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <WorkoutContextProvider>
                    <PlanContextProvider>
                        <Navbar />

                        {children}
                    <Footer/>
                        <ToastContainer />
                    </PlanContextProvider>
                </WorkoutContextProvider>
            </body>
        </html>
    );
}