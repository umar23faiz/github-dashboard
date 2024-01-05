"use client";

import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectLayout from "../ProjectLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


function UserSearch(){
    const [username, setUsername] = useState("");
    const [userData, setUserData]: any = useState(null);
    const [showDiv, setShowDiv] = useState(false);
    const [loading, setLoading] = useState(false); 
  
  
    const fetchData = async () => {
      try {
        setLoading(true); 
        const response = await fetch(
          `http://localhost:3001/api/github-activity/${username}`
        );
        const data = await response.json();
        console.log(data);
        setUserData(data);
        setShowDiv(true);
      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false); // Set loading to false whether the fetch is successful or not
      }
    };
    const extractDate = (activity: any) => {
      console.log(
        new Date(activity.substring(0, 10)).toLocaleDateString()
      );
      return new Date(activity.substring(0, 10)).toLocaleDateString();
    };
    return(
    <div className="min-h-screen flex flex-col items-center justify-center">
    <Card >
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Search By Language</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
    <div className="mt-8 w-full flex-grow">
    {loading ? (
        <p className="ml-16 font-bold">Loading...</p> // Show a loading message or spinner
      ) : (showDiv && userData ? (
        <div className="ml-16 ">

          <Image
            className="rounded-full"
            src={userData.userDetails.avatar_url}
            alt="Description of the image"
            width={80} // Specify the width of the image
            height={70} // Specify the height of the image
          />
          <h1 className="pt-2 font-semibold	">{userData.userDetails.name}</h1>
          <div className="mt-16">
            {userData.repoDetails.map((res: any) => (
              <div key={res.id}>

                <Accordion className="pt-2 mt-4 mb-2 rounded-lg lg:w-3/4">
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><ExpandMoreIcon />{res.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-slate-400	 text-white	">
                    <div>
                      Languages: {res.language?res.language:'Not found'}
                      </div>
                      <div className="pt-2">
                        Description: {res.description?res.description:'N/A'}
                      </div>
                  </AccordionDetails>
                </Accordion>
               </div>
            ))}
          </div>
        </div>
      ) : null)}
    </div>
  </div>

    )
}
export default UserSearch;