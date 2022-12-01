import React from "react";
import { useState, useEffect, useRef } from "react";
import moment from "moment";
import {
  Button,
  Form,
  Input,
  DatePicker,
  Select,
  Space,
  TimePicker,
} from "antd";
import "./cards.css";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxjb2RlcjEiLCJhIjoiY2xiM21zN3plMDJtcDNvbzh3MHFtZGd3NyJ9.lPoY0IZhK8CSkF98_CwHbQ';


const Cards = () => {
  const { Option } = Select;
  const PickerWithType = ({ type, onChange }) => {
    if (type === "date") return <DatePicker onChange={onChange} />;
    return <DatePicker picker={type} onChange={onChange} />;
  };
  const [type, setType] = useState("time");



  const mapContainer = useRef(null);
  const map = useRef(null);

  const [address, setAddress] = useState("");
  const [pickUpdate, setDate] = useState(moment().format('YYYY-MM-DD'));

  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [pickup, setPickup] = useState([85.768784, 20.2517935]);
  const [zoom, setZoom] = useState(9);

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [85.768784, 20.2517935]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [85.868784, 20.2517935]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }
    ]
  };

  function resetForm(){
    setAddress("");
    setDate(moment().format('YYYY-MM-DD'));
  }
  

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
    <div>
      <Form>
        <Form.Item label="Required Mark" name="requiredMarkValue"></Form.Item>
        <Form.Item label="Address" required tooltip="This is a required field">
          <Input value={address} onChange={(e)=>{setAddress(e.target.value);}} placeholder="input placeholder" />
        </Form.Item>
      </Form>
      <Space>
        <PickerWithType type={'date'} value={pickUpdate} onChange={
          (date) => {
            const newDate = moment(date.timeStamp).format('YYYY-MM-DD');
            setDate(newDate);}
            } />
      </Space>
      <br/>
      <Space>
      <p>{pickup.lng}</p>
      <div ref={mapContainer} className="map-container" id='map'></div>
      </Space>
      <Form>
        <Form.Item className="mt-8">
          <Button type="primary" onSubmit={(e)=>{
            e.preventDefault();
            resetForm();
          }}>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Cards;
