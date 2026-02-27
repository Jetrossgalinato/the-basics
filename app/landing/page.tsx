import { TypographyH1, TypographyLead } from "../components/typography";
import { ModeToggle } from "../components/theme-toggle";

export default function LandingPage() {
  return (
    <main>
      <ModeToggle />
      <TypographyH1>Welcome to the Landing Page</TypographyH1>
      <TypographyLead>Hi</TypographyLead>
    </main>
  );
}
