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
    setResults([]);//clear previous result
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
  }
});
