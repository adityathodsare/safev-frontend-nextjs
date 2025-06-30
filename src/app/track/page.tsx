"use client";

import { useEffect, useState, useRef } from "react";

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export default function MaharashtraGPSTracker() {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<any>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [error, setError] = useState<string>("");
  const [watchId, setWatchId] = useState<number | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Maharashtra bounds
  const maharashtraBounds = {
    north: 22.0,
    south: 15.6,
    east: 80.9,
    west: 72.6,
  };

  const isInMaharashtra = (lat: number, lng: number) => {
    return (
      lat >= maharashtraBounds.south &&
      lat <= maharashtraBounds.north &&
      lng >= maharashtraBounds.west &&
      lng <= maharashtraBounds.east
    );
  };

  useEffect(() => {
    const loadMap = () => {
      if (typeof window !== "undefined") {
        // Load Leaflet CSS
        const cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(cssLink);

        // Load Leaflet JS
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => {
          setMapLoaded(true);
          initMap();
        };
        document.body.appendChild(script);
      }
    };

    const initMap = () => {
      if (mapRef.current && (window as any).L) {
        const L = (window as any).L;

        // Create map
        const map = L.map(mapRef.current).setView([19.7515, 75.7139], 7);

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // Add Maharashtra boundary (approximate)
        const maharashtraBoundary = [
          [22.0, 72.6],
          [22.0, 80.9],
          [15.6, 80.9],
          [15.6, 72.6],
          [22.0, 72.6],
        ];

        L.polygon(maharashtraBoundary, {
          color: "#ef4444",
          weight: 2,
          opacity: 0.8,
          fillOpacity: 0.1,
        }).addTo(map);

        // Store map reference
        (mapRef.current as any).leafletMap = map;
      }
    };

    loadMap();

    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const startTracking = () => {
    if (!navigator.geolocation) {
      setError("GPS not supported by this browser");
      return;
    }

    setIsTracking(true);
    setError("");

    const success = (position: GeolocationPosition) => {
      const { latitude, longitude, accuracy } = position.coords;
      const locationData: LocationData = {
        latitude,
        longitude,
        accuracy,
        timestamp: Date.now(),
      };

      setLocation(locationData);

      // Update map
      if (
        mapRef.current &&
        (mapRef.current as any).leafletMap &&
        (window as any).L
      ) {
        const L = (window as any).L;
        const map = (mapRef.current as any).leafletMap;

        // Remove old marker
        if ((mapRef.current as any).currentMarker) {
          map.removeLayer((mapRef.current as any).currentMarker);
        }

        // Add new marker
        const marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup(
          `Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
        );

        // Store marker reference
        (mapRef.current as any).currentMarker = marker;

        // Center map
        map.setView([latitude, longitude], 12);
      }
    };

    const errorCallback = (error: GeolocationPositionError) => {
      setError(`GPS Error: ${error.message}`);
      setIsTracking(false);
    };

    const id = navigator.geolocation.watchPosition(success, errorCallback, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
    setWatchId(id);
  };

  const stopTracking = () => {
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
    setIsTracking(false);
  };

  const resetMap = () => {
    if (mapRef.current && (mapRef.current as any).leafletMap) {
      const map = (mapRef.current as any).leafletMap;
      map.setView([19.7515, 75.7139], 7);

      if ((mapRef.current as any).currentMarker) {
        map.removeLayer((mapRef.current as any).currentMarker);
        (mapRef.current as any).currentMarker = null;
      }
    }
    setLocation(null);
    setError("");
  };

  // Responsive and dark mode styles (always dark)
  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.2s",
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#2563eb",
    color: "white",
  };

  const dangerButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#b91c1c",
    color: "white",
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#d1d5db",
    border: "1px solid #374151",
  };

  const cardStyle = {
    backgroundColor: "#18181b",
    borderRadius: "8px",
    border: "1px solid #27272a",
    boxShadow: "0 1px 3px 0 rgba(0,0,0,0.5)",
    overflow: "hidden",
  };

  const cardHeaderStyle = {
    padding: "20px 24px 0 24px",
    borderBottom: "none",
  };

  const cardContentStyle = {
    padding: "20px 24px 24px 24px",
  };

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    fontSize: "12px",
    fontWeight: 500,
    padding: "4px 10px",
  };

  const successBadgeStyle = {
    ...badgeStyle,
    backgroundColor: "#14532d",
    color: "#bbf7d0",
  };

  const secondaryBadgeStyle = {
    ...badgeStyle,
    backgroundColor: "#27272a",
    color: "#d1d5db",
  };

  // Responsive container style with top padding for navbar (navbar is fixed at top-10)
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#09090b",
    padding: "16px",
    paddingTop: "100px", // enough for navbar + gap
    transition: "background 0.3s",
  };

  // Responsive max width
  const mainStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  };

  // Responsive map style
  const mapStyle = {
    width: "100%",
    height: "50vw",
    maxHeight: "500px",
    minHeight: "300px",
    borderRadius: "8px",
    border: "1px solid #27272a",
    background: "#18181b",
  };

  // Responsive grid for location info
  const infoGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
  };

  // Responsive font sizes
  const headerFontSize = "clamp(1.5rem, 4vw, 2.2rem)";
  const subHeaderFontSize = "clamp(1.1rem, 2.5vw, 1.3rem)";

  // Media queries for mobile
  const mediaQueryStyle = `
    @media (max-width: 600px) {
      .card-content, .card-header { padding: 12px !important; }
      .map-div { min-height: 200px !important; }
      .info-grid { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{mediaQueryStyle}</style>
      <div style={mainStyle}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h1
            style={{
              fontSize: headerFontSize,
              fontWeight: "bold",
              margin: "0 0 8px 0",
              color: "#fafafa",
              transition: "color 0.3s",
            }}
          >
            Maharashtra GPS Tracker
          </h1>
          <p style={{ color: "#d1d5db", margin: 0 }}>
            Track your location within Maharashtra state boundaries
          </p>
        </div>

        {/* Controls Card */}
        <div style={{ ...cardStyle, marginBottom: "24px" }}>
          <div className="card-header" style={cardHeaderStyle}>
            <h2
              style={{
                fontSize: subHeaderFontSize,
                fontWeight: 600,
                margin: 0,
                color: "#fafafa",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              📍 GPS Controls
            </h2>
          </div>
          <div className="card-content" style={cardContentStyle}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {!isTracking ? (
                <button
                  onClick={startTracking}
                  style={primaryButtonStyle}
                  onMouseOver={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "#1d4ed8")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "#2563eb")
                  }
                >
                  📍 Start Tracking
                </button>
              ) : (
                <button
                  onClick={stopTracking}
                  style={dangerButtonStyle}
                  onMouseOver={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "#991b1b")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLElement).style.backgroundColor =
                      "#b91c1c")
                  }
                >
                  ⏹️ Stop Tracking
                </button>
              )}
              <button
                onClick={resetMap}
                style={outlineButtonStyle}
                onMouseOver={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor = "#18181b")
                }
                onMouseOut={(e) =>
                  ((e.target as HTMLElement).style.backgroundColor =
                    "transparent")
                }
              >
                🔄 Reset Map
              </button>
            </div>

            {error && (
              <div
                style={{
                  padding: "12px",
                  backgroundColor: "#7f1d1d",
                  border: "1px solid #991b1b",
                  borderRadius: "6px",
                  marginBottom: "16px",
                }}
              >
                <p style={{ color: "#fecaca", fontSize: "14px", margin: 0 }}>
                  {error}
                </p>
              </div>
            )}

            {location && (
              <div className="info-grid" style={infoGridStyle}>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      margin: "0 0 4px 0",
                      color: "#fafafa",
                    }}
                  >
                    Latitude
                  </p>
                  <p style={{ fontSize: "14px", color: "#d1d5db", margin: 0 }}>
                    {location.latitude.toFixed(6)}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      margin: "0 0 4px 0",
                      color: "#fafafa",
                    }}
                  >
                    Longitude
                  </p>
                  <p style={{ fontSize: "14px", color: "#d1d5db", margin: 0 }}>
                    {location.longitude.toFixed(6)}
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      margin: "0 0 4px 0",
                      color: "#fafafa",
                    }}
                  >
                    Accuracy
                  </p>
                  <p style={{ fontSize: "14px", color: "#d1d5db", margin: 0 }}>
                    {location.accuracy.toFixed(0)}m
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      margin: "0 0 4px 0",
                      color: "#fafafa",
                    }}
                  >
                    Status
                  </p>
                  <span
                    style={
                      isInMaharashtra(location.latitude, location.longitude)
                        ? successBadgeStyle
                        : secondaryBadgeStyle
                    }
                  >
                    {isInMaharashtra(location.latitude, location.longitude)
                      ? "✅ In Maharashtra"
                      : "❌ Outside Maharashtra"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Map Card */}
        <div style={{ ...cardStyle, marginBottom: "24px" }}>
          <div className="card-header" style={cardHeaderStyle}>
            <h2
              style={{
                fontSize: subHeaderFontSize,
                fontWeight: 600,
                margin: 0,
                color: "#fafafa",
              }}
            >
              🗺️ Map View
            </h2>
          </div>
          <div className="card-content" style={cardContentStyle}>
            <div style={{ position: "relative" }}>
              <div ref={mapRef} className="map-div" style={mapStyle} />
              {!mapLoaded && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#d1d5db",
                    fontSize: "16px",
                  }}
                >
                  Loading map...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instructions Card */}
        <div style={cardStyle}>
          <div className="card-header" style={cardHeaderStyle}>
            <h2
              style={{
                fontSize: subHeaderFontSize,
                fontWeight: 600,
                margin: 0,
                color: "#fafafa",
              }}
            >
              📋 How to Use
            </h2>
          </div>
          <div className="card-content" style={cardContentStyle}>
            <ol
              style={{
                paddingLeft: "20px",
                margin: 0,
                color: "#d1d5db",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              <li style={{ marginBottom: "8px" }}>
                Click "Start Tracking" to begin GPS location tracking
              </li>
              <li style={{ marginBottom: "8px" }}>
                Allow location access when prompted by your browser
              </li>
              <li style={{ marginBottom: "8px" }}>
                Your current location will be displayed on the map with a marker
              </li>
              <li style={{ marginBottom: "8px" }}>
                The red boundary shows the approximate borders of Maharashtra
              </li>
              <li style={{ marginBottom: "8px" }}>
                Your location status will show if you're inside or outside
                Maharashtra
              </li>
              <li style={{ marginBottom: "8px" }}>
                Click "Stop Tracking" to stop location updates
              </li>
              <li>Use "Reset Map" to return to the default view</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
