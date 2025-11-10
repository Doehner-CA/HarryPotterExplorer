import { useState } from 'react';
import { StyleSheet, Text,View, TextInput, Pressable, ActivityIndicator, FlatList} from 'react-native';

export default function App() {
  // category(characters, spells, houses, books)
  const [category, setCategory] = useState('characters');

  // user input (search)
  const [searchQuery, setSearchQuery] = useState('');

  // API results
  const [results, setResults] = useState([]);

  // track loading state (shows spinner while fetching)
  const [loading, setLoading] = useState(false);

  // Track errors
  const [error, setError] = useState(null);

  // This function fetches data from the Potter API based on category and search query
  const fetchPotterData = async () => {
    const baseUrl = 'https://potterapi-fedeperin.vercel.app';
    let url = `${baseUrl}/en/${category}`; // e.g., /en/characters

    // add search parameter 
    if (searchQuery.trim() !== '') {
      url += `?search=${encodeURIComponent(searchQuery)}`; // e.g., /en/characters?search=Harry. encodeURIComponent to sanitize our string
    }

    console.log('Fetching from URL:', url);

    // set loading state to true (shows spinner)
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      // API call
      const response = await fetch(url);

      // Check if response is OK (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // parse JSON data
      const data = await response.json();
      console.log('Received data:', data); 

      // update results state with the data
      setResults(data);

      // If no results found, show message
      if (data.length === 0) {
        setError('No results found. Try a different search!');
      }

    } catch (err) {
      // Handle any errors (network issues, parsing errors, etc.)
      console.error('Error fetching data:', err);
      setError(`Failed to fetch data: ${err.message}`);
      setResults([]);
    } finally {
      //always set loading to false when done (success or error)
      setLoading(false);
    }
  };

  // search button handler
  const handleSearch = () => {
    console.log('Search button pressed');
    console.log('Category:', category);
    console.log('Search Query:', searchQuery);

    fetchPotterData();
  };
  //change button handler
  const handleCategoryChange = (newCategory) => {
    console.log('Category changed to:', newCategory);
    setCategory(newCategory);
    setResults([]);//clear previous result
  };

  // This component renders each item in the FlatList based on the category. return jsx
  const ResultItem = ({ item, category }) => {
    if (category === 'characters') {
      return (
        <View style={styles.resultItem}>
          <Text style={styles.resultTitle}>{item.fullName || 'Unknown'}</Text>
          {item.nickname && <Text style={styles.resultSubtitle}>"{item.nickname}"</Text>}
          {item.hogwartsHouse && (
            <Text style={styles.resultDetail}>House: {item.hogwartsHouse}</Text>
          )}
          {item.interpretedBy && (
            <Text style={styles.resultDetail}>Actor: {item.interpretedBy}</Text>
          )}
          {item.birthdate && (
            <Text style={styles.resultDetail}>Born: {item.birthdate}</Text>
          )}
        </View>
      );
    }

    if (category === 'spells') {
      return (
        <View style={styles.resultItem}>
          <Text style={styles.resultTitle}>{item.spell || 'Unknown Spell'}</Text>
          {item.use && <Text style={styles.resultDetail}>{item.use}</Text>}
        </View>
      );
    }

    if (category === 'houses') {
      return (
        <View style={styles.resultItem}>
          <Text style={styles.resultTitle}>
            {item.emoji || ''} {item.house || 'Unknown House'}
          </Text>
          {item.founder && (
            <Text style={styles.resultDetail}>Founder: {item.founder}</Text>
          )}
          {item.colors && item.colors.length > 0 && (
            <Text style={styles.resultDetail}>
              Colors: {item.colors.join(', ')}
            </Text>
          )}
          {item.animal && (
            <Text style={styles.resultDetail}>Animal: {item.animal}</Text>
          )}
        </View>
      );
    }

    if (category === 'books') {
      return (
        <View style={styles.resultItem}>
          <Text style={styles.resultTitle}>{item.title || 'Unknown Book'}</Text>
          {item.originalTitle && item.originalTitle !== item.title && (
            <Text style={styles.resultSubtitle}>Original: {item.originalTitle}</Text>
          )}
          {item.releaseDate && (
            <Text style={styles.resultDetail}>Released: {item.releaseDate}</Text>
          )}
          {item.pages && (
            <Text style={styles.resultDetail}>Pages: {item.pages}</Text>
          )}
        </View>
      );
    }

    // Fallback for unknown categories (shouldn't happen)
    return (
      <View style={styles.resultItem}>
        <Text style={styles.resultText}>{JSON.stringify(item)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>⚡ Harry Potter Explorer ⚡</Text>
        <Text style={styles.subtitle}>Discover the Wizarding World</Text>
      </View>

      {/* SEARCH */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search (e.g., Harry, Expelliarmus)..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Pressable style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>

      {/* CATEGORY BUTTONS  */}
      <View style={styles.categorySection}>
        <Text style={styles.categoryLabel}>Select Category:</Text>
        <View style={styles.buttonRow}>
          <Pressable
            style={[styles.categoryButton, category === 'characters' && styles.categoryButtonActive]}//logical AND operator
            onPress={() => handleCategoryChange('characters')}
          >
            <Text style={[styles.categoryButtonText, category === 'characters' && styles.categoryButtonTextActive]}>Characters</Text>
          </Pressable>

          <Pressable
            style={[styles.categoryButton, category === 'spells' && styles.categoryButtonActive]}
            onPress={() => handleCategoryChange('spells')}
          >
            <Text style={[styles.categoryButtonText, category === 'spells' && styles.categoryButtonTextActive]}>Spells</Text>
          </Pressable>
        </View>

        <View style={styles.buttonRow}>
          <Pressable
            style={[styles.categoryButton, category === 'houses' && styles.categoryButtonActive]}
            onPress={() => handleCategoryChange('houses')}
          >
            <Text style={[styles.categoryButtonText, category === 'houses' && styles.categoryButtonTextActive]}>Houses</Text>
          </Pressable>

          <Pressable
            style={[styles.categoryButton, category === 'books' && styles.categoryButtonActive]}
            onPress={() => handleCategoryChange('books')}
          >
            <Text style={[styles.categoryButtonText, category === 'books' && styles.categoryButtonTextActive]}>Books</Text>
          </Pressable>
        </View>
      </View>

      {/* RESULTS*/}
      <View style={styles.resultsSection}>
        {loading ? (//if loading is true, show the loading indicator, if false, check error state
          <ActivityIndicator size="large" color="#740001" />
        ) : error ? (//if error true, show error msg, if not, check if resultsList is empty
          <Text style={styles.errorText}>{error}</Text>
        ) : results.length === 0 ? (// if resultsList is empty, show prompt, if not, show flatlist
          <Text style={styles.placeholderText}>
            Select a category and search to explore!
          </Text>
        ) : (
          <FlatList
            data={results}
            keyExtractor={(item, index) => `${category}-${index}`}
            renderItem={({ item }) => <ResultItem item={item} category={category} />}//pass required props and reuturn jsx
          />
        )}
      </View>
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 40, 
  },

  // Header
  header: {
    backgroundColor: '#740001',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#D3A625',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D3A625',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    fontStyle: 'italic',
  },

  //Search
  searchSection: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#740001',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D3A625',
  },
  searchButtonText: {
    color: '#D3A625',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Category
  categorySection: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: '#CCC',
  },
  categoryButtonActive: {
    backgroundColor: '#740001',
    borderColor: '#D3A625',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  categoryButtonTextActive: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D3A625',
  },

  // Results
  resultsSection: {
    flex: 1,
    padding: 15,
  },
  placeholderText: {
    textAlign: 'center',
    color: '#95A5A6',
    fontSize: 16,
    marginTop: 50,
    fontStyle: 'italic',
  },
  errorText: {
    textAlign: 'center',
    color: '#C0392B',
    fontSize: 16,
    marginTop: 20,
  },
  resultItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#740001',
    marginBottom: 5,
  },
  resultSubtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
    marginBottom: 8,
  },
  resultDetail: {
    fontSize: 14,
    color: '#2C3E50',
    marginTop: 4,
    lineHeight: 20,
  },
  resultText: {
    fontSize: 14,
    color: '#2C3E50',
  },
});
