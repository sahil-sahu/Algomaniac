import React,{useState, useEffect, useRef } from "react";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import "./track.css";

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxjb2RlcjEiLCJhIjoiY2xiM21zN3plMDJtcDNvbzh3MHFtZGd3NyJ9.lPoY0IZhK8CSkF98_CwHbQ';


const TrackBus = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [zoom, setZoom] = useState(11);

  const houses = [
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: true,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: true,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: true,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: true,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: true,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: true,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: false,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: false,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: false,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: false,
  },
    {
    house: "ID",
    location:[],
    address:"OUTR, BBSR",
    collected: false,
  },
];
  const trucks = [
    {
      workerID:"ID",
      location:[],
      taskID:"kbjdknbkjdn",
    },
    {
      workerID:"ID",
      location:[],
      taskID:"kbjdknbkjdn",
    },
    {
      workerID:"ID",
      location:[],
      taskID:"kbjdknbkjdn",
    },
    {
      workerID:"ID",
      location:[],
      taskID:"kbjdknbkjdn",
    },
    {
      workerID:"ID",
      location:[],
      taskID:"kbjdknbkjdn",
    },
];
  const bins = [
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },
    {
      binID:"ID",
      location:[],
      address:"In Front of Something",
    },

  ];

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
      
      function realtime(){
        for (const house of houses) {
        // create a HTML element for each feature
        let el = document.createElement('div');
        if(house.collected ){
          el.className = 'house-g';
        } else {
          el.className = 'house-r';
        }
        let temp_lng = Math.floor(Math.random() * (85649414 - 85847168) ) + 85847168;
        let temp_lat = Math.floor(Math.random() * (20297471 - 20118334) ) + 20118334;
        console.log([temp_lng*0.000001, temp_lat*0.000001]);
        // make a marker for each feature and add to the map
        const marker = new mapboxgl.Marker(el).setLngLat([temp_lng*0.000001, temp_lat*0.000001]).setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
          `<h3>${house.house}</h3><p>${house.address}</p>`
          )
          ).addTo(map);
          setTimeout(()=>{marker.remove()}, 10000);  
      }  
  
      for (const bin of bins) {
        // create a HTML element for each feature
        let el = document.createElement('div');
        el.className = 'bin';
        let temp_lng = Math.floor(Math.random() * (85649414 - 85847168) ) + 85847168;
        let temp_lat = Math.floor(Math.random() * (20297471 - 20118334) ) + 20118334;
        // make a marker for each feature and add to the map
        const marker = new mapboxgl.Marker(el).setLngLat([temp_lng*0.000001, temp_lat*0.000001]).setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
          `<h3>${bin.binID}</h3><p>${bin.address}</p>`
          )
          ).addTo(map);
          setTimeout(()=>{marker.remove()}, 10000);
      }  
  
      for (const truck of trucks) {
        // create a HTML element for each feature
        let el = document.createElement('div');
        el.className = 'truck';
        let temp_lng = Math.floor(Math.random() * (85649414 - 85847168) ) + 85847168;
        let temp_lat = Math.floor(Math.random() * (20297471 - 20118334) ) + 20118334;
        // make a marker for each feature and add to the map
        const marker = new mapboxgl.Marker(el).setLngLat([temp_lng*0.000001, temp_lat*0.000001]).setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
          `<h3>${truck.workerID}</h3><p>${truck.taskID}</p>`
          )
          ).addTo(map);
        setTimeout(()=>{marker.remove()}, 10000);  
      }
      setTimeout(realtime, 10000);
    } 
    realtime();


  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" id='map'></div>
    </div>
  );
};

export default TrackBus;
