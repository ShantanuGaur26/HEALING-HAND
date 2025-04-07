import React, { useState, useEffect, useRef } from "react";
import "../styles/SearchBar.css";

interface SearchBarProps {
  // Optionally, you could define props to handle query results or events.
  onSearch?: (query: string) => void;
}

const DOCTORS = [
  "John Smith",
  "Jane Doe",
  "Alice Johnson",
  "Bob Williams",
  "Charlie Brown",
  "Dave Davis",
  "Eva Green",
];

const ImprovedSearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchSuggestionsRef = useRef<HTMLDivElement>(null);

  const searchDoctors = (query: string, doctors: string[]): string[] => {
    const lowerQuery = query.toLowerCase();
    return doctors.filter((doctor) =>
      doctor.toLowerCase().includes(lowerQuery)
    );
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = searchDoctors(searchQuery, DOCTORS);
      setSuggestions(filtered);
      setShowSuggestions(true);
      // Optional: notify parent component about search query changes.
      if (onSearch) onSearch(searchQuery);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, onSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    if (onSearch) onSearch(suggestion);
  };

  return (
    <div className="improved-search-bar-wrapper">
      <div className="improved-search-bar">
        <div className="search-input-section" ref={searchSuggestionsRef}>
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
            placeholder="Search doctors, clinics, hospitals, etc."
          />
          {showSuggestions && suggestions.length > 0 && (
            <div className="search-suggestions-dropdown">
              {suggestions.map((doc) => (
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
