import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import WorkoutContextProvider from "@/context/WorkoutContext";
import PlanContextProvider from "@/context/PlanContext";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <WorkoutContextProvider>
                    <PlanContextProvider>
                        <Navbar />

                        {children}

                        <ToastContainer />
                    </PlanContextProvider>
                </WorkoutContextProvider>
            </body>
        </html>
    );
}