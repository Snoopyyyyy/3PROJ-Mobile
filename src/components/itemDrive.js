import { StyleSheet, View, Text, FlatList } from 'react-native';
import FolderIcon from '../../img/folder-icon.svg'

const itemDrive = (props) => {
    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={({ item }) => (
                    <View onPress={props.onPress(back ? item.parent : item._id)} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#dee2e6" }}>
                        <FolderIcon width={50} height={50} fill={"#FFA000"} style={{ marginRight: 20 }} />
                        <Text style={{ flex: 1, fontSize: 20, flexWrap: 'wrap' }}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}
export default itemDrive;