import React, { useEffect, useState } from 'react';
import { createFolder, downloadFile, getFolder, getPath, uploadFile } from "../../services/FolderService";
import { StyleSheet, View, Text } from 'react-native';
import ItemDrive from '../../components/itemDrive'


function IDrive() {
    const [isLoading, setisLoading] = useState(true);
    const [path, setPath] = useState(true);
    const [folder, setFolder] = useState(true);

    useEffect(() => {
        getFolder().then((data) => {
            setisLoading(false)
            setfolder(data)
            console.log(data);
        }).catch(err => console.error(err));
    }, [])

    const goTo = (id) => {
        if (id) {
            getFolder(id).then(data => {
                setFolder(data);
                getPath(data).then(setPath).catch(console.error)
            }).catch(err => console.error(err));
        }
    }

    return (
        <View contentContainerStyle={{ flexGrow: 1 }}>
            {
                isLoading &&
                <Text style={{ fontSize: 20 }}>Loading data...</Text>
            }
            <ItemDrive data={folder.parent} onPress={goTo} back={true} />
            <ItemDrive data={folder.folders} onPress={goTo} />
            <ItemDrive data={folder.files} onPress={goTo} />
        </View >
    )
}
export default IDrive;

