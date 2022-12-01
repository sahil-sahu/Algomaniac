import React, { useRef, useEffect, useState } from "react";

import mapboxgl from '!mapbox-gl';// eslint-disable-line import/no-webpack-loader-syntax
import response from "./data";

import "./journey.css";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxjb2RlcjEiLCJhIjoiY2xiM21zN3plMDJtcDNvbzh3MHFtZGd3NyJ9.lPoY0IZhK8CSkF98_CwHbQ';


const JourneyPlanner = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(85.768784);
  const [lat, setLat] = useState(20.2517935);
  const [zoom, setZoom] = useState(9);

  const houses = [
    {
    house: "ID",
    location:[85.590516,20.192367],
    address:"OUTR, BBSR",
    collected: true,
  },
    {
    house: "ID",
    location:[85.645483,20.189777],
    address:"OUTR, BBSR",
    collected: true,
  },
    {
    house: "ID",
    location:[85.675976,20.239502],
    address:"OUTR, BBSR",
    collected: false,
  },
    {
    house: "ID",
    location:[85.728390,20.286196],
    address:"OUTR, BBSR",
    collected: false,
  },
    {
    house: "ID",
    location:[85.727143,20.324721],
    address:"OUTR, BBSR",
    collected: false,
  },
    {
    house: "ID",
    location:[85.767158,20.344211],
    address:"OUTR, BBSR",
    collected: false,
  },
    {
    house: "ID",
    location:[85.781288,20.385798],
    address:"OUTR, BBSR",
    collected: false,
  },
];

  

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v9', // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      center: [lng, lat], // starting position
      zoom: 12 // starting zoom
      });
    
    fetch('https://api.mapbox.com/directions/v5/mapbox/driving/85.506844%2C20.216792%3B85.781288%2C20.385798?alternatives=true&geometries=polyline6&language=en&overview=simplified&steps=true&access_token=pk.eyJ1Ijoic2FoaWxjb2RlcjEiLCJhIjoiY2xiM21zN3plMDJtcDNvbzh3MHFtZGd3NyJ9.lPoY0IZhK8CSkF98_CwHbQ')
      .then((response) => response.json())
      .then((data) => path(data));

    function path(data){
      let coordinates = [];
      for (const intersections of data.routes[0].legs[0].steps) {
        for (const loco of intersections.intersections) {
          coordinates.push(loco.location);
        }
      }

      map.on('load', () => {
        map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': coordinates,
        // 'coordinates': [
        //   [-122.483696, 37.833818],
        //   [-122.483482, 37.833174],
        //   [-122.483396, 37.8327],
        //   [-122.483568, 37.832056],
        //   [-122.48404, 37.831141],
        //   [-122.48404, 37.830497],
        //   [-122.483482, 37.82992],
        //   [-122.483568, 37.829548],
        //   [-122.48507, 37.829446],
        //   [-122.4861, 37.828802],
        //   [-122.486958, 37.82931],
        //   [-122.487001, 37.830802],
        //   [-122.487516, 37.831683],
        //   [-122.488031, 37.832158],
        //   [-122.488889, 37.832971],
        //   [-122.489876, 37.832632],
        //   [-122.490434, 37.832937],
        //   [-122.49125, 37.832429],
        //   [-122.491636, 37.832564],
        //   [-122.492237, 37.833378],
        //   [-122.493782, 37.833683]
        //   ],
        }
        }
        });
        map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
        'line-join': 'round',
        'line-cap': 'round'
        },
        'paint': {
        'line-color': '#3C8035',
        'line-width': 8
        }
        });
        });
    } 
    
    for (const house of houses) {
      // create a HTML element for each feature
      let el = document.createElement('div');
      el.className = 'house-g';
      
      // make a marker for each feature and add to the map
      const marker = new mapboxgl.Marker(el).setLngLat(house.location).setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
        `<h3>${house.house}</h3><p>${house.address}</p>`
        )
        ).addTo(map);}

      let el = document.createElement('div');
      el.className = 'gps';  
      const marker = new mapboxgl.Marker(el).setLngLat([85.506844,20.216792]).addTo(map);  
      let nel = document.createElement('div');
      nel.className = 'end';  
      const final_marker = new mapboxgl.Marker(nel).setLngLat([85.781288,20.385798]).addTo(map);  
      

  });

  return (
      <div ref={mapContainer} className="map-container" id='map'></div>
  )
};

export default JourneyPlanner;
