import Navbar from "../components/navbar";
import { TypographyH1, TypographyP } from "../components/typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar brandName="Basics" />
      <div className="mt-30 flex flex-col items-center justify-center">
        <TypographyH1>These are your Projects</TypographyH1>
        <TypographyP>
          these are the list of projects you have finished so far, wherein you
          can review your progress as a developer.
        </TypographyP>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Card></Card>
      </div>
    </div>
  );
}
