import { StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FileIcon from '../../img/file-icon.svg'

const itemFile = ({ file, onPress }) => {
    return (
        <ScrollView>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#dee2e6" }}>
                <FileIcon width={50} height={50} fill={"#3B338E"} style={{ marginRight: 20 }} />
                <Text style={{ fontSize: 20 }}>{file.name}</Text>
            </TouchableOpacity >
        </ScrollView>
    )
}
export default itemFile;