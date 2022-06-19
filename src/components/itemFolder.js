import { StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FolderIcon from '../../img/folder-icon.svg'

const itemFolder = ({ folder, back, onPress }) => {
    return (
        <ScrollView>
            <TouchableOpacity onPress={e => { onPress(back ? folder.parent : folder._id) }} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#dee2e6" }}>
                <FolderIcon width={50} height={50} fill={"#FFA000"} style={{ marginRight: 20 }} />
                <Text style={{ fontSize: 20 }}>{back ? ".." : folder.name}</Text>
            </TouchableOpacity >
        </ScrollView>
    )
}
export default itemFolder;