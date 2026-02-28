import Navbar from "../components/navbar";
import { TypographyH1, TypographyP } from "../components/typography";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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
      <div className="mt-20 flex items-center justify-center">
        <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
          <Image
            src="https://avatar.vercel.sh/shadcn1"
            alt="Event cover"
            width={800}
            height={450}
            className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
          <CardHeader>
            <CardAction>
              <Badge variant="secondary">Featured</Badge>
            </CardAction>
            <CardTitle>Design systems meetup</CardTitle>
            <CardDescription>
              A practical talk on component APIs, accessibility, and shipping
              faster.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full">View Project</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
