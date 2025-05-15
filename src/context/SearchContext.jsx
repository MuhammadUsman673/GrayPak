import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

const SearchContext = createContext();

const initialSuggestions = [
  "Ventus Bats",
  "Stratos Bats",
  "Gem Cricket Bats",
  "Classic Bats",
  "NEOCORE Cricket Bats",
  "Gem 2.0 Adult",
  "Stratos 3.0 Gem Adult",
  "NEOCORE Cricket Bats 1.0",
  "Classic Bats 1.0",
];

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchCounts, setSearchCounts] = useState(() => {
    try {
      const saved = localStorage.getItem('searchCounts');
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Failed to parse search counts:", error);
      return {};
    }
  });
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  // Save search counts to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('searchCounts', JSON.stringify(searchCounts));
    } catch (error) {
      console.error('Failed to save search counts:', error);
    }
  }, [searchCounts]);

  // Load search history from localStorage on mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem('searchHistory');
      if (savedHistory) {
        setSearchHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  }, []);

  // Save search history to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    } catch (error) {
      console.error('Failed to save search history:', error);
    }
  }, [searchHistory]);

  // Debounced search for real-time suggestions and results
  const performSearch = useCallback(
    debounce((query) => {
      const trimmedQuery = query.trim();
      if (trimmedQuery) {
        setIsSearching(true);
        
        // Simulate API call or complex search
        setTimeout(() => {
          // In a real app, you would fetch actual results here
          const results = initialSuggestions
            .filter(suggestion => suggestion.toLowerCase().includes(trimmedQuery.toLowerCase()))
            .map(suggestion => ({ id: suggestion, name: suggestion }));
          
          setSearchResults(results);
          setIsSearching(false);
        }, 300);
      } else {
        setSearchResults([]);
      }
    }, 300),
    []
  );

  useEffect(() => {
    performSearch(searchQuery);
    return () => performSearch.cancel();
  }, [searchQuery, performSearch]);

  const handleSearch = useCallback((query = searchQuery) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Update search history
    setSearchHistory((prev) => {
      const newHistory = [trimmedQuery, ...prev.filter((item) => item !== trimmedQuery)].slice(0, 5);
      return newHistory;
    });

    // Update search counts
    setSearchCounts((prev) => ({
      ...prev,
      [trimmedQuery]: (prev[trimmedQuery] || 0) + 1,
    }));

    navigate(`/shop?query=${encodeURIComponent(trimmedQuery)}`);
    setIsSearching(false);
  }, [searchQuery, navigate]);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  const filteredSuggestions = searchQuery.trim()
    ? initialSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const trendingSearches = Object.entries(searchCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5)
    .map(([query]) => query);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        searchResults,
        searchHistory,
        filteredSuggestions,
        trendingSearches,
        isSearching,
        handleSearch,
        clearSearch,
        searchCounts, // Expose if needed
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};