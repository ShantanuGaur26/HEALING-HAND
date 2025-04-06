import React, { useState, useEffect, useRef } from "react";
import "../styles/SearchBar.css";

/** Example location interface. In a real app, fetch from your backend. */
interface Location {
  id: number;
  name: string;
  city: string;
}

/** Example list of localities in Lucknow (or any city). */
const LOCATIONS: Location[] = [
  { id: 1, name: "Gomtinagar", city: "Lucknow" },
  { id: 2, name: "Indira Nagar", city: "Lucknow" },
  { id: 3, name: "Aliganj", city: "Lucknow" },
  { id: 4, name: "Rajajipuram", city: "Lucknow" },
  { id: 5, name: "Alambagh", city: "Lucknow" },
  { id: 6, name: "Hazratganj", city: "Lucknow" },
  { id: 7, name: "Mahanagar", city: "Lucknow" },
  { id: 8, name: "Ashiyana", city: "Lucknow" },
  { id: 9, name: "Jamia", city: "Delhi" },
  { id: 10, name: "Lajpat", city: "Delhi" },
  { id: 11, name: "Sukhdev", city: "Delhi" },
  { id: 12, name: "CP", city: "Delhi" },
  // ...add more as needed
];

/** Example of doctors search. Replace with your real data fetching. */
const DOCTORS = [
  "John Smith",
  "Jane Doe",
  "Alice Johnson",
  "Bob Williams",
  "Charlie Brown",
  "Dave Davis",
  "Eva Green",
];

const ImprovedSearchBar: React.FC = () => {
  const [city, setCity] = useState("Lucknow"); // Current city
  const [locationQuery, setLocationQuery] = useState("Lucknow");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const locationDropdownRef = useRef<HTMLDivElement>(null);
  const searchSuggestionsRef = useRef<HTMLDivElement>(null);

  /** Hide dropdowns if clicked outside. */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLocationDropdown(false);
      }
      if (
        searchSuggestionsRef.current &&
        !searchSuggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSearchSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /** Filter localities by city and text typed in locationQuery */
  const filteredLocations = LOCATIONS.filter(
    (loc) =>
      loc.city.toLowerCase() === city.toLowerCase() &&
      loc.name.toLowerCase().includes(locationQuery.toLowerCase())
  );

  /** Filter doctors by searchQuery (basic substring match) */
  const filteredDoctors = DOCTORS.filter((doc) =>
    doc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLocationFocus = () => {
    setShowLocationDropdown(true);
  };

  const handleSelectLocation = (locName: string) => {
    setLocationQuery(locName);
    setShowLocationDropdown(false);
  };

 const handleUseMyLocation = () => {
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(
       (position) => {
         const { latitude, longitude } = position.coords;
         console.log("Latitude:", latitude, "Longitude:", longitude);
         // Here, perform reverse geocoding if needed.
         setLocationQuery("My Location");
         setShowLocationDropdown(false);
       },
       (error) => {
         console.error("Error getting geolocation:", error);
         alert("Unable to retrieve your location. Please try again.");
       },
       {
         enableHighAccuracy: true, // Use high accuracy if available
         timeout: 10000, // Wait up to 10 seconds
         maximumAge: 0, // Do not cache the position
       }
     );
   } else {
     alert("Geolocation is not supported by this browser.");
   }
 };


  const handleSearchFocus = () => {
    if (searchQuery) {
      setShowSearchSuggestions(true);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 0) {
      setShowSearchSuggestions(true);
    } else {
      setShowSearchSuggestions(false);
    }
  };

  const handleSearchSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSearchSuggestions(false);
  };

  return (
    <div className="improved-search-bar-wrapper">
      <div className="improved-search-bar">
        {/* Location Field */}
        <div className="location-input-section" ref={locationDropdownRef}>
          <input
            type="text"
            className="location-input"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            onFocus={handleLocationFocus}
            placeholder="City or locality"
          />
          {/* Location dropdown */}
          {showLocationDropdown && (
            <div className="location-dropdown">
              <div className="dropdown-section">
                <p className="dropdown-title">Use my location</p>
                <button
                  onClick={handleUseMyLocation}
                  className="use-location-btn"
                >
                  <span>Use my location</span>
                </button>
              </div>
              <hr />
              <div className="dropdown-section">
                <p className="dropdown-title">Search in entire {city}</p>
                {filteredLocations.map((loc) => (
                  <div
                    key={loc.id}
                    className="location-item"
                    onClick={() => handleSelectLocation(loc.name)}
                  >
                    <div className="location-name">{loc.name}</div>
                    <div className="location-city">{loc.city}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="vertical-divider" />

        {/* Search Field */}
        <div className="search-input-section" ref={searchSuggestionsRef}>
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            placeholder="Search doctors, clinics, hospitals, etc."
          />
          {/* Search suggestions dropdown */}
          {showSearchSuggestions && filteredDoctors.length > 0 && (
            <div className="search-suggestions-dropdown">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc}
                  className="suggestion-item"
                  onClick={() => handleSearchSuggestionClick(doc)}
                >
                  {doc}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImprovedSearchBar;
