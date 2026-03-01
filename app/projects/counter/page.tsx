import Navbar from "@/app/components/navbar";
import { TypographyH1, TypographyP } from "@/app/components/typography";

export default function CounterPage() {
  return (
    <div className="min-h-screen">
      <Navbar brandName="Basics" />
      <div className="mt-30 flex flex-col items-center justify-center">
        <TypographyH1>Interactive Counter</TypographyH1>
        <TypographyP>
          simple widget with increment, decrement, and reset buttons
        </TypographyP>
      </div>
    </div>
  );
}
