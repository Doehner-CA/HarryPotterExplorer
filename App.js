import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text,View, TextInput, Pressable} from 'react-native';

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

  // search button handler
  const handleSearch = () => {
    console.log('Search button pressed');
    // TODO: Fetch data from API
  };
  //change button handler
  const handleCategoryChange = (newCategory) => {
    console.log('Category changed to:', newCategory);
    setCategory(newCategory);
    setResults([]); // Clear previous results
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

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
});
