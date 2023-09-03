import classes from "./Settings.module.css";
import { CategoryBar, Card, Flex, Metric, Legend } from "@tremor/react";

import Chart from "react-apexcharts";
import Iframe from 'react-iframe';


import React, { useState, useEffect } from "react";

const Settings = () => {
   
   
    return (
      <section>
      <div className={classes.head}>
      <div className={classes.detailsOrderByDate}>
          <div>
              <p>New Quality Metrics & NPS Analysis</p>
          </div>
      </div>
  </div>
      <div  className={classes.section}>
     
        
        <div className={classes.upTable}>
            <div>
                <div className={classes.body}>
                    
                <Card >
                    
                <Iframe
                url="https://app.powerbi.com/reportEmbed?reportId=02612bf5-d1dd-4164-a7de-3c2a74d01a51&appId=2cb029fa-7129-450a-b3e5-6e17f37f111b&autoAuth=true&ctid=771c9c47-7f24-44dc-958e-34f8713a8394"
                width="1000"
                height="600"
                allowFullScreen
              />
               
                </Card>

        </div>
            </div>

            
           
        </div></div>
    </section>
    );
};

export default Settings;
