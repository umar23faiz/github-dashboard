"use client"
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectLayout from "../ProjectLayout";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LandingPage = () => {
  const [language, setLanguage] = useState("javascript");
  const [trendingData, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
        setLoading(true)
      const resp = await fetch(
        `http://localhost:3001/api/trendingRepo/${language}`
      );
      const data = await resp.json();
      setTrending(data);
      setShowDiv(true)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="text-center  mt-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Trending Github Repositories <br />By Language
          </h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter GitHub username"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={fetchData}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Fetch Details
          </button>
        </div>
        <div className="mt-8 w-full flex-grow">
          {loading ? (
            <p className="ml-16 font-bold">Loading...</p> // Show a loading message or spinner
          ) : showDiv && trendingData ? (

              <div className="mt-16">
                {trendingData.map((res: any) => (
                  <div key={res.id}>
                    <Accordion className="pt-2 mt-4 mb-2 rounded-lg lg:w-3/4">
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>
                          <ExpandMoreIcon />
                          {res.name} : Stars = {res.stargazers_count}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className="bg-slate-400	 text-white	">
                        <div>
                          Languages: {res.language ? res.language : "Not found"}
                        </div>
                        <div className="pt-2">
                          Description:{" "}
                          {res.description ? res.description : "N/A"}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      </div>
  );
};
export default LandingPage;
