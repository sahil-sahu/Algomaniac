import React from "react";
import { Button, Form, Input } from "antd";
import { useState, useEffect, useRef } from "react";

import "./cards.css";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxjb2RlcjEiLCJhIjoiY2xiM21zN3plMDJtcDNvbzh3MHFtZGd3NyJ9.lPoY0IZhK8CSkF98_CwHbQ';

function Charts() {

  const [file,setFile] = useState(null);
  const [address, setAddress] = useState("");
  const [complaint, setComplaint] = useState("");
  const [pickup, setPickup] = useState([85.768784, 20.2517935]);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [zoom, setZoom] = useState(9);

  // buddy "pickup variable ke andar location info rahega check line 15 first longitude then latitude"

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
        zoom: 12 // starting zoom
        });
      const liveLocation = document.createElement('div');
      liveLocation.className = 'liveLocation';
    
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(liveLocation).setLngLat([ lng, lat ]).addTo(map);  
      let marker = new mapboxgl.Marker({draggable:true,}).setLngLat([ lng, lat ]).addTo(map);
      function onDragEnd() {
        // alert(e);
        const lngLat = marker.getLngLat();
        setPickup(lngLat);
      }
      marker.on('dragend', onDragEnd);

    },[lng,lat]);

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-white">Add complaint</h1>
      <div>
        <Form>
          <Form.Item label="Required Mark" name="requiredMarkValue"></Form.Item>
          <Form.Item label="Upload Image" name="requiredMarkValue">
              <input type="file" id="avatar" name="avatar" value={file} onChange={(e)=>{setFile(e.target.value);}} accept="image/*" capture="environment"/>
          </Form.Item>
          <Form.Item
            label="Address"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" value={address} onChange={(e)=>{setAddress(e.target.value);}}/>
          </Form.Item>
          <Form.Item
            label="Complaint"
            required
            tooltip="This is a required field"
          >
            <Input placeholder="input placeholder" value={complaint} onChange={(e)=>{setComplaint(e.target.value);}} />
          </Form.Item>
          <Form.Item
            label="Add Location"
            required
            tooltip="This is a required field"
          >
            <p>{pickup.lng}</p>
            <div ref={mapContainer} className="map-container" id='map'></div>
          </Form.Item>
        </Form>
        <Form>
          <Form.Item className="mt-8">
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Charts;
