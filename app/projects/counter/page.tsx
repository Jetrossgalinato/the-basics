"use client";

import Navbar from "@/app/components/navbar";
import { TypographyH1, TypographyP } from "@/app/components/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Plus, Minus, RefreshCcw } from "lucide-react";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar brandName="Basics" />
      <div className="mt-30 flex flex-col items-center justify-center">
        <TypographyH1>Interactive Counter</TypographyH1>
        <TypographyP>
          simple widget with increment, decrement, and reset buttons
        </TypographyP>
        <Card className="mt-40">
          <CardHeader>
            <CardTitle>Counter</CardTitle>
            <CardDescription>{count}</CardDescription>
          </CardHeader>
          <CardFooter className="flex gap-4">
            <Button onClick={() => setCount(count + 1)}>
              <Plus />
            </Button>
            <Button onClick={() => setCount(count - 1)}>
              <Minus />
            </Button>
            <Button onClick={() => setCount(0)}>
              <RefreshCcw />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
