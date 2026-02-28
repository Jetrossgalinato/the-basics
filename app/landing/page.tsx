import { TypographyH1, TypographyP } from "../components/typography";
import Navbar from "../components/navbar";

export default function LandingPage() {
  return (
    <main>
      <Navbar brandName="Basics" />
      <div className="mt-30 flex flex-col items-center justify-center">
        <TypographyH1>Welcome to the Basics of Scripting!</TypographyH1>
        <TypographyP>
          This website is just for practice purposes only to master scripting
          languages
        </TypographyP>
      </div>
    </main>
  );
}
