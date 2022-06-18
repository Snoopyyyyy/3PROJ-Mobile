import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';


function AddFile() {

    const uploadFileHandler = (event) => {
        event.preventDefault();
        uploadFile(files, folder.parent._id).then(data => {
            goTo(folder._id);
        }).catch(console.error);
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly', alignItems: "center" }}>

        </ScrollView>
    );
};

export default AddFile;