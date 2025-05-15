import React, { useState, useEffect } from 'react';
import { useSearch } from '../../context/SearchContext';
import './Search.css';

const ProductListing = () => {
  const {
    searchQuery,
    setSearchQuery,
    handleSearch,
    searchHistory,
    filteredSuggestions,
    trendingSearches,
    clearSearch,
  } = useSearch();

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchSuggestions = [
    'Protection Shirt',
    'Arm Guard',
    'Chest Protector',
    'All Shoes 2.0',
    'All Shoes 1.0',
  ];

  const popularSearches = [
    'Classic Bats 2.0',
    'Classic Bats 3.0',
    'Classic Bats 4.0',
    'Classic Bats 1.0',
  ];

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-input-container')) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="search-container">
      <div className="search-header">I'M LOOKING FOR...</div>

      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyPress={handleKeyPress}
          onFocus={() => setShowSuggestions(true)}
        />
        <button
          className="search-button"
          onClick={() => {
            handleSearch(searchQuery);
            setShowSuggestions(false);
          }}
        >
          Search
        </button>

        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="suggestions-dropdown">
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={`autocomplete-${index}`}
                className="suggestion-item"
                onClick={() => {
                  setSearchQuery(suggestion);
                  handleSearch(suggestion);
                  setShowSuggestions(false);
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Searches */}
      {searchHistory.length > 0 && (
        <div className="search-section">
          <div className="section-title">
            Recent Searches
            <button className="clear-history-button" onClick={clearSearch}>
              Clear
            </button>
          </div>
          <div className="suggestion-list">
            {searchHistory.map((item, index) => (
              <div
                key={`history-${index}`}
                className="suggestion-item"
                onClick={() => {
                  setSearchQuery(item);
                  handleSearch(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trending Searches */}
      {trendingSearches.length > 0 && (
        <div className="search-section">
          <div className="section-title">Trending Searches</div>
          <div className="suggestion-list">
            {trendingSearches.map((item, index) => (
              <div
                key={`trending-${index}`}
                className="suggestion-item"
                onClick={() => {
                  setSearchQuery(item);
                  handleSearch(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Static Suggestions */}
      <div className="search-section">
        <div className="section-title">Search Suggestions</div>
        <div className="suggestion-list">
          {searchSuggestions.map((item, index) => (
            <div
              key={`suggestion-${index}`}
              className="suggestion-item"
              onClick={() => {
                setSearchQuery(item);
                handleSearch(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Popular Searches */}
      <div className="search-section">
        <div className="section-title">Popular Searches</div>
        <div className="suggestion-list">
          {popularSearches.map((item, index) => (
            <div
              key={`popular-${index}`}
              className="suggestion-item"
              onClick={() => {
                setSearchQuery(item);
                handleSearch(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
