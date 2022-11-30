import React from "react";
import { useState, useEffect, useRef } from "react";
import "./cards.css";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxjb2RlcjEiLCJhIjoiY2xiM21zN3plMDJtcDNvbzh3MHFtZGd3NyJ9.lPoY0IZhK8CSkF98_CwHbQ';


const NearbyBin = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [zoom, setZoom] = useState(11);

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'scrap',
        geometry: {
          type: 'Point',
          coordinates: [85.768784, 20.2417935]
        },
        properties: {
          title: 'Harsh Dealer',
          description: 'Scrap dealer at ghatikia'
        }
      },
      {
        type: 'bin',
        geometry: {
          type: 'Point',
          coordinates: [85.868784, 20.2517935]
        },
        properties: {
          title: '',
          description: 'in front of atm'
        }
      },
      {
        type: 'scrap',
        geometry: {
          type: 'Point',
          coordinates: [85.688784, 20.2717935]
        },
        properties: {
          title: 'Simba Scrapper',
          description: 'Scrapping facilty in Bhubaneswar'
        }
      },
      {
        type: 'bin',
        geometry: {
          type: 'Point',
          coordinates: [85.748784, 20.2517935]
        },
        properties: {
          title: 'atm',
          description: 'in front of atm'
        }
      }
    ]
  };

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        alert("Geolocation is not supported by this browser.");
      }
    }  

    function showPosition(position) {
      console.log(position.coords.latitude)
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }
    
    if(lng==null){

        getLocation();
        
      }
      const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v9', // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        center: [ lng, lat ], // starting position
        zoom: zoom, // starting zoom
        });
      
        const liveLocation = document.createElement('div');
        liveLocation.className = 'liveLocation';
      
        // make a marker for each feature and add to the map
        new mapboxgl.Marker(liveLocation).setLngLat([ lng, lat ]).addTo(map);   


    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      if(feature.type == 'scrap'){
        el.className = 'scrap';
      } else if(feature.type == "bin") {
        el.className = 'bin';
      }
    
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        ).addTo(map);
    }  

  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" id='map'></div>
    </div>
  );
};

export default NearbyBin;
