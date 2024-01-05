import Link from "next/link";
import Image from "next/image";
import { Button, Input } from "@mui/material";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

function TestC() {
  return (
    <div>
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
              <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">fdsfsdfdsfdsf</div>
                    </div>
                    <div className="text-foreground"></div>
                  </div>
                  <div className="text-xs font-medium">ewrewrewwerer</div>
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground"></div>
                <div className="flex items-center gap-2">
                  <Badge>Hello</Badge>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-4 pt-0">
              <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">ijhg</div>
                    </div>
                    <div className="text-foreground"></div>
                  </div>
                  <div className="text-xs font-medium">fdfdf</div>
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground"></div>
                <div className="flex items-center gap-2">
                  <Badge>Hello</Badge>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-4 pt-0">
              <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">ijhg</div>
                    </div>
                    <div className="text-foreground"></div>
                  </div>
                  <div className="text-xs font-medium">fdfdf</div>
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground"></div>
                <div className="flex items-center gap-2">
                  <Badge>Hello</Badge>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-4 pt-0">
              <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">ijhg</div>
                    </div>
                    <div className="text-foreground"></div>
                  </div>
                  <div className="text-xs font-medium">fdfdf</div>
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground"></div>
                <div className="flex items-center gap-2">
                  <Badge>Hello</Badge>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-4 pt-0">
              <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">ijhg</div>
                    </div>
                    <div className="text-foreground"></div>
                  </div>
                  <div className="text-xs font-medium">fdfdf</div>
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground"></div>
                <div className="flex items-center gap-2">
                  <Badge>Hello</Badge>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-4 pt-0">
              <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">ijhg</div>
                    </div>
                    <div className="text-foreground"></div>
                  </div>
                  <div className="text-xs font-medium">fdfdf</div>
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground"></div>
                <div className="flex items-center gap-2">
                  <Badge>Hello</Badge>
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-2 p-4 pt-0">
              <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">ijhg</div>
                    </div>
                    <div className="text-foreground"></div>
                  </div>
                  <div className="text-xs font-medium">fdfdf</div>
                </div>
                <div className="line-clamp-2 text-xs text-muted-foreground"></div>
                <div className="flex items-center gap-2">
                  <Badge>Hello</Badge>
                </div>
              </button>
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default TestC;
