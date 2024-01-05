"use client";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import UserSearch from "../UserSearch/page";
import LandingPage from "../LandingPage/page";

function TopNavigation() {
  return (
    <div>
      {/* <div className="mb-8">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row justify-center mt-4 gap-4">
            <NavigationMenuItem>
              <Link href="/UserSearch" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Search User
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Trending Repositories
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div> */}
      <Tabs defaultValue="trendingRepo" className="w-full ml-4 mt-2 justify-center">
  <TabsList>
    <TabsTrigger value="userSearch">User Search</TabsTrigger>
    <TabsTrigger value="trendingRepo">Trending Repo</TabsTrigger>
  </TabsList>
  <TabsContent value="userSearch"><UserSearch/></TabsContent>
  <TabsContent value="trendingRepo"><LandingPage/></TabsContent>
</Tabs>
    </div>
  );
}
export default TopNavigation;
