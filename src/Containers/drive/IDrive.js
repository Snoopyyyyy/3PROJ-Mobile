import React, { useEffect, useState } from 'react';
import { createFolder, downloadFile, getFolder, getPath, uploadFile } from "../../services/FolderService";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import InputText from '../../components/inputText'
import ItemFolder from '../../components/itemFolder'
import ItemFile from '../../components/itemFile'


function IDrive() {
    const [isLoading, setIsLoading] = useState(true);
    const [path, setPath] = useState("");
    const [folder, setFolder] = useState("");
    const [modal, setModal] = useState(false);
    const [newName, setNewName] = useState("");

    useEffect(() => {
        getFolder().then((data) => {
            setIsLoading(false)
            setFolder(data)
        }).catch(err => console.error(err));
    }, [])

    const goTo = (id) => {
        console.log(id);
        if (id) {
            getFolder(id).then(data => {
                setFolder(data);
                getPath(data).then(setPath).catch(console.error)
            }).catch(err => console.error(err));
        }
    }

    const createNewFolder = (event) => {
        event.preventDefault();
        createFolder(folder.parent, newName).then(data => {
            setModal(false)
            setNewName("")
            goTo(folder.parent._id);
        }).catch(console.error)
    }

    const resetModal = () => {
        setModal(false)
        setNewName("")
    }

    return (
        <View contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: "#3B338E" }}>
                <Text style={{ flex: 1.5, fontSize: 20, paddingStart: 10, paddingVertical: 10 }}>Location : {path}</Text>
                <TouchableOpacity onPress={e => { setModal(true) }} style={{ flex: 1 }}><Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', paddingVertical: 2, marginEnd: 10, backgroundColor: '#3B338E' }}>Create folder</Text></TouchableOpacity>
            </View>
            <Modal transparent={true} visible={modal}>
                <View style={{ backgroundColor: "#000000aa", flex: 1, alignItems: 'center' }}>
                    <View style={{ alignItems: 'center', width: '80%', backgroundColor: "#ffffff", marginVertical: 95, marginHorizontal: 20, padding: 20, borderRadius: 10 }}>
                        <View style={{ width: '80%' }}>
                            <InputText titleText="Folder Name" holderText="Example" onChange={text => setNewName(text)} value={newName}></InputText>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={resetModal} style={{ width: '50%' }}><Text style={{ fontSize: 15, color: '#fff', textAlign: 'center', borderRadius: 30, backgroundColor: '#3B338E', paddingVertical: 5, marginTop: 10, marginHorizontal: 5 }}>Cancel</Text></TouchableOpacity>
                            <TouchableOpacity onPress={createNewFolder} style={{ width: '50%' }}><Text style={{ fontSize: 15, color: '#fff', textAlign: 'center', borderRadius: 30, backgroundColor: '#3B338E', paddingVertical: 5, marginTop: 10, marginHorizontal: 5 }}>Create folder</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            {
                isLoading &&
                <Text style={{ fontSize: 20 }}>Loading data...</Text>
            }
            <ItemFolder folder={folder.parent} onPress={goTo} back={true} />
            {
                folder.folders.map((raw_folder, index) => (
                    <ItemFolder folder={raw_folder} onPress={goTo} key={index} />
                ))
            }
            {
                folder.folders.map((raw_folder, index) => (
                    <ItemFile file={raw_folder} onPress={goTo} key={index} />
                ))
            }
        </View >
    )
}
export default IDrive;

