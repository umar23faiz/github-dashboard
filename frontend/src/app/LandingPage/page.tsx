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
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Label } from "@/components/ui/label";

const LandingPage = () => {
  const [language, setLanguage] = useState("javascript");
  const [detailTitle, setDetailTitle] = useState("");
  const [detailDesc, setDetailDesc] = useState("");
  const [detailSelected, setDetailSelected]: any = useState([]);
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
      setDetailSelected(data[0]);
      setShowDiv(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  function showDetails(res: any) {
    setDetailSelected(res);
  }

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center">
      <div className="mt-4">
        <Card>
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
              <div className="flex flex-col gap-2 pt-0">
                {loading ? (
                  <p className="ml-16 font-bold">Loading...</p> // Show a loading message or spinner
                ) : showDiv && trendingData ? (
                  <div className="mt-2">
                    {trendingData.map((res: any) => (
                      <div key={res.id}>
                        <div className="flex flex-col gap-2 p-4 pt-0">
                          <Card
                            onClick={() => showDetails(res)}
                            className="cardSize shadow-lg shadow-red-300/50"
                          >
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
            {loading ? (
              <p className="ml-16 font-bold">Loading...</p> // Show a loading message or spinner
            ) : showDiv && trendingData ? (
              <div className="h-full container p-4">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{detailSelected.name}</CardTitle>
                    <CardDescription>
                      {detailSelected.description}

                      <Link href={detailSelected.html_url} target="_blank">
                        <Image
                          className=" mt-16 rounded-full ml-8 image-container"
                          src="/github.png"
                          width={60}
                          height={55}
                          alt="bh"
                        ></Image>
                      </Link>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1"></div>
                  </CardContent>
                  <CardFooter className="mt-8">
                  <Badge className="ml-2 mr-2 justify-center">
                      Open issues {detailSelected.open_issues_count}
                    </Badge>
                    <Badge>{detailSelected.language}</Badge>
                    <Badge className="ml-2">
                      <StarIcon className="text-small mr-2" />
                      {detailSelected.stargazers_count}
                    </Badge>
                  </CardFooter>
                </Card>
              </div>
            ) : null}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      {/* <TestC/> */}
    </div>
  );
};
export default LandingPage;
