"use client";

import React, { useEffect, useState } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup, Marker
} from "react-simple-maps";
import StadiumSchedulePopup from "./StadiumSchedulePopup";
import Popup from "reactjs-popup";
import logos from "@/app/logos";
import stadiumsOrig from "@/constants/ballparkList.json";
import {Stadium} from "@/types/types";
const stadiums = stadiumsOrig.sort((a, b) => a.team.localeCompare(b.team));
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const MLBBallparkMap = () => {
    const [selectedStadium, setSelectedStadium] = useState<Stadium | null>(null);

    const handleClick = (e: Stadium) => {
        setSelectedStadium(e);
    }

    return (
        <div className="relative flex justify-center items-center">
            <ComposableMap 
                projection="geoAlbersUsa"
                style={{
                    maxHeight: "550"
                }}
                width={850}
                height={500}
                >
                <Geographies 
                    geography={geoUrl} 
                >
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#EAEAEC"
                                stroke="#D6D6DA"
                                tabIndex={-1}
                                style={{
                                    default: { outline: "none" },
                                    hover: { outline: "none" },
                                    pressed: { outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>
                {stadiums.map((stadium, index) => {
                    return (
                        <Marker
                            radius={20}
                            enableBackground={"white"}
                            key={index}
                            coordinates={[stadium.lng - 0.5, stadium.lat + 0.5]}
                            cursor="pointer"
                            onClick={() => {
                                handleClick(stadium);
                            }}
                        >
                            {React.createElement(logos[index], { size: 20 })}
                        </Marker>
                    );
                })}
                {selectedStadium && (<Marker coordinates={[selectedStadium.lng - 3, selectedStadium.lat + 3]} >
                    <StadiumSchedulePopup />
                </Marker>
                )}
            </ComposableMap>
        </div>
    );
};

export default MLBBallparkMap;


/*<Popup
open={true}
closeOnDocumentClick
onClose={() => {
  setSelectedStadium(null);
}}
contentStyle={{
  background: "white",
  width: "300px",
  height: "300px",
  borderRadius: "5px",
}}
>
<div>
  <h2>{selectedStadium.team}</h2>
  <p>hello</p>
</div>
</Popup>*/