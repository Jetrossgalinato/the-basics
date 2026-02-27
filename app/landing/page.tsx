import { TypographyH1, TypographyLead } from "../components/typography";
import Navbar from "../components/navbar";

export default function LandingPage() {
  return (
    <main>
      <Navbar brandName="Basics" />
      <TypographyH1>Welcome to the Landing Page</TypographyH1>
      <TypographyLead>Hi</TypographyLead>
    </main>
  );
}
