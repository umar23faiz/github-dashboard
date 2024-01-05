"use client";
import React, { useEffect, useState } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const LandingPage = () => {
  const [language, setLanguage] = useState("javascript");
  const [trendingData, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(
        `http://localhost:3001/api/trendingRepo/${language}`
      );
      const data = await resp.json();
      setTrending(data);
      setShowDiv(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  function showDetails() {}

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="mt-4">
        <Card onClick={showDetails}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Search By Language</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <input
                type="text"
                placeholder="Enter GitHub username"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-2 border focus:outline-none focus:border-blue-500"
              />{" "}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={fetchData}>
              Fetch Details
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="container mt-4">
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes
            )}`;
          }}
          className="h-full max-h-[800px] items-stretch"
        >
          <ResizablePanel defaultSize={265} minSize={30}>
            <Separator />
            <ScrollArea className="h-screen">
              <div className="flex flex-col gap-2 p-4 pt-0">
                {loading ? (
                  <p className="ml-16 font-bold">Loading...</p> // Show a loading message or spinner
                ) : showDiv && trendingData ? (
                  <div className="mt-16">
                    {trendingData.map((res: any) => (
                      <div key={res.id}>
                        <div className="flex flex-col gap-2 p-4 pt-0">
                          <Card className="cardSize shadow-lg shadow-blue-500/50">
                            <CardHeader>
                              <CardTitle>{res.name}</CardTitle>
                              <CardDescription>
                                {res.description}
                              </CardDescription>
                            </CardHeader>
                            <CardFooter className="flex justify-center">
                              <Badge>{res.language}</Badge>
                            </CardFooter>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={180}>
            <Separator />
            <div className="h-full container p-4">
              <Card className="">
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1"></div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      {/* <TestC/> */}
    </div>
  );
};
export default LandingPage;
