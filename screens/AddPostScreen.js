import { View, Text, StyleSheet ,TextInput, TouchableOpacity,Alert} from "react-native";
import { COLORS } from "../utils/colors";
import { useState } from "react";
import { apiClient } from "../utils/api";

export default function AddPostScreen() {
const [title, setTitle] = useState ("");
const [content, setContent] = useState ("");

async function handleSubmit(){
  
 
 try {
  const response=  await apiClient.post("/posts", {title,content});

 console.log ("Post created:", response.data);
 setContent("");
 setTitle("");
 Alert.alert ("Succcess","Post created successfully");
} 
catch (error){
  Alert.alert ("Error", "Failed to submit post")
}
}

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Post</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        />
        <TextInput
        style={[styles.input, styles.contentInput]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
        />
      </View>
      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}>
        <Text style={styles.buttonText}> 
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: COLORS.background,
    color: COLORS.textPrimary,
    fontSize: 16,
  },
  contentInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
});
