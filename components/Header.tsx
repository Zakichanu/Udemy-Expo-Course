import { View, StyleSheet, Text } from "react-native";

// Genuinely a header with a title and a blue background
const Header = () => {
    return (
        <View style={styles.appBar}>
            <Text style={styles.title}>CKMobile tasks</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: 'blue',
        padding: 30,
        top: 0,
        fontSize: 20,
        height: 80,
        width: '100%',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
});
export default Header;