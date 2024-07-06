import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRightSquare } from "lucide-react";

function GettingStartedCards() {
  return (
    <div className="flex flex-col gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col md:flex-row gap-2">
        <Card className="w-[350px] hover:bg-accent cursor-pointer">
          <CardHeader>
            <CardTitle>Fun Facts</CardTitle>
            <CardDescription>
              Tell me a fun fact that could make me laugh.
            </CardDescription>
            <CardFooter className="relative">
              <ArrowRightSquare className="absolute -right-3 -bottom-3 md:-bottom-8" />
            </CardFooter>
          </CardHeader>
        </Card>
        <Card className="w-[350px] hover:bg-accent cursor-pointer">
          <CardHeader>
            <CardTitle>Science Knowledge</CardTitle>
            <CardDescription>
              What is the distance between the sun and earth?
            </CardDescription>
            <CardFooter className="relative">
              <ArrowRightSquare className="absolute -right-3 -bottom-3" />
            </CardFooter>
          </CardHeader>
        </Card>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <Card className="w-[350px] hover:bg-accent cursor-pointer">
          <CardHeader>
            <CardTitle>Story Teller</CardTitle>
            <CardDescription>
              Tell me story that have an advice at the end.
            </CardDescription>
            <CardFooter className="relative">
              <ArrowRightSquare className="absolute -right-3 -bottom-3" />
            </CardFooter>
          </CardHeader>
        </Card>
        <Card className="w-[350px] hover:bg-accent cursor-pointer">
          <CardHeader>
            <CardTitle>Code Assistant</CardTitle>
            <CardDescription>Create a calculator using python.</CardDescription>
            <CardFooter className="relative">
              <ArrowRightSquare className="absolute -right-3 -bottom-3" />
            </CardFooter>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default GettingStartedCards;
