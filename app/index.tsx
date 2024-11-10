import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  UIImagePickerPresentationStyle,
} from "expo-image-picker";
import { removeBackground } from "react-native-background-remover";

export default function App() {
  const [imageURI, setImageURI] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // Function to open the image picker
  async function selectImage() {
    const imagePickerResponse = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      selectionLimit: 1,
      presentationStyle: UIImagePickerPresentationStyle.FORM_SHEET,
    });

    const selectedImage = imagePickerResponse.assets?.[0];

    if (!selectedImage || !selectedImage.uri) {
      return;
    }

    setImageURI(selectedImage.uri);
  }

  // Function to clear selected image
  function clearSelection() {
    setImageURI(null);
  }

  // Function to remove the background from the selected image
  async function removeSelectionBackground() {
    if (!imageURI) {
      return;
    }

    setIsLoading(true);

    try {
      const backgroundRemovedImageURI = await removeBackground(imageURI);
      setImageURI(backgroundRemovedImageURI);
    } catch (error) {
      console.error("Failed to remove background", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {imageURI ? (
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            {isLoading ? (
              <ActivityIndicator size="large" />
            ) : (
              <Image source={{ uri: imageURI }} style={styles.image} />
            )}
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Clear Selection"
              onPress={clearSelection}
              color="red"
            />
            <Button
              title="Remove Background"
              onPress={removeSelectionBackground}
            />
          </View>
        </View>
      ) : (
        <Button title="Open Image Library" onPress={selectImage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 36,
  },
  imageWrapper: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
