import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';
import DirectionsStatus = google.maps.DirectionsStatus;
import TravelMode = google.maps.TravelMode;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;

  @Input() mapRequestType: any;
  @Output() selectedLocation: EventEmitter<any> = new EventEmitter();

  directionService: google.maps.DirectionsService;
  directionRenderer: google.maps.DirectionsRenderer;

  constructor() { }

  ngOnInit() {

    this.directionService = new google.maps.DirectionsService();
    this.directionRenderer = new google.maps.DirectionsRenderer();


    const myStyle = [
      {
        featureType: 'administrative.country',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }, {
        featureType: 'administrative.province',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }, {
        featureType: 'water',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ];

    const mapProp = {
      center: new google.maps.LatLng(7.8731, 80.7718),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,

    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.directionRenderer.setMap(this.map);


    // this.map.mapTypes.set('mystyle', new google.maps.StyledMapType(myStyle , {name: 'My Style'}));

    this.marker = new google.maps.Marker(
      { position: new google.maps.LatLng(7.8731, 80.7718) ,
        map: this.map,
        draggable: true,
      });

    google.maps.event.addListener(this.map , 'click', (event) => {
        this.placeMaker(event.latLng);
    });

    this.marker.addListener('dragend' , (event) => {
      this.placeMaker(event.latLng);
    });
  }


  placeMaker(location) {
    this.marker.setPosition(location);
    this.selectedLocation.emit(location);
  }


  displayRoute() {
    this.calculateAndDisplayRoute(this.directionService, this.directionRenderer);
  }

  calculateAndDisplayRoute(directionService, directionRenderer) {

    const waypts = [{
      location: 'montreal, quebec',
      stopover: true
    }];

    const checkboxArray = ['montreal, quebec', 'toronto, ont'];
    for (let i = 0; i < checkboxArray.length; i++) {
      waypts.push({
        location: checkboxArray[i],
        stopover: true
      });
    }

    directionService.route({
      origin: 'Halifax, NS',
      destination: 'Vancouver, BC',
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: TravelMode.DRIVING
    }, function (response, status) {
      if (status === DirectionsStatus.OK) {
        directionRenderer.setDirections(response);
        const route = response.routes[0];
        const summaryPanel = document.getElementById('directions-panel');
        summaryPanel.innerHTML = '';
        // For each route, display summary information.
        for (let i = 0; i < route.legs.length; i++) {
          const routeSegment = i + 1;
          summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
            '</b><br>';
          summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
          summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
          summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

  }
}


