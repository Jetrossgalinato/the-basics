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
import { projectData } from "./data/projectData";
import Link from "next/link";

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
      <div className="mt-20 max-w-6xl mx-auto px-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <Card
            key={project.id}
            className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden"
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              width={800}
              height={450}
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">{project.badgeText}</Badge>
              </CardAction>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={project.link}>
                <Button className="w-full">View Project</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
