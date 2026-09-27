"use client";

import { useContext, useState } from "react";

import { PlanContext } from "@/context/PlanContext";

import MyPlanHeader from "./MyPlanHeader";
import PlanSummary from "./PlanSummary";
import PlanTabs from "./PlanTabs";
import PlanSort from "./PlanSort";
import EmptyPlan from "./EmptyPlan";
import PlanWorkoutCard from "./PlanWorkoutCard";

const MyPlan = () => {
    const { plan, saved } = useContext(PlanContext);

    const [activeTab, setActiveTab] = useState("plan");

    const currentItems =
        activeTab === "plan"
            ? plan
            : saved;

    return (
        <main className="w-full">

            <section className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

                <div className="mx-auto w-full max-w-[1290px]">

                    {/* Header */}
                    <MyPlanHeader />

                    {/* Summary */}
                    <PlanSummary />

                    {/* Tabs + Sort */}
                    <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">

                        <PlanTabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />

                        <PlanSort />

                    </div>

                    {/* Workout List */}
                    <div className="mt-8 space-y-4">

                        {currentItems.length === 0 ? (

                            <EmptyPlan
                                activeTab={activeTab}
                            />

                        ) : (

                            currentItems.map((workout) => (
                                <PlanWorkoutCard
                                    key={workout.id}
                                    workout={workout}
                                    isPlan={activeTab === "plan"}
                                />
                            ))

                        )}

                    </div>

                </div>

            </section>

        </main>
    );
};

export default MyPlan;