import React, { useState } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import allStates from "../const/usStateData.json";
import { useRouter } from "next/router";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

const StateMap = () => {
  const [selectedState, setSelectedState] = useState('48');
  const router = useRouter()

  const handleClick = (geo) => {
    const cur = allStates.find((s) => s.val === geo.id);
    if (cur) {
     setSelectedState(cur.val);
     router.push(cur.id.toLocaleLowerCase())
    }
  };

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fillOpacity={selectedState === geo.id ? "1" : "0"}
                fill={selectedState === geo.id ? "#FECE2F" : "#DDD"} // Change fill color based on selection
                onClick={() => handleClick(geo)}
                style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                    cursor: "pointer",
                  }}
              />
            ))}
            {geographies.map((geo) => {
               // console.log('geo', geo)
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle" style={{ fill: 'white', cursor: 'pointer' }} onClick={() => handleClick(geo)}>
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle" style={{ fill: 'white' }}>
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default StateMap;
