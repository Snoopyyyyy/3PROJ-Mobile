import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { getFolder } from '../services/FolderService';
import { FontAwesome5 } from '@expo/vector-icons';
import FolderIcon from '../../img/folder-icon.svg'

export default class itemDrive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data) => data.json())
            .then((dataJson) => {
                this.setState({
                    isLoading: false,
                    data: dataJson
                })
            }).catch(e => console.error(e))
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#dee2e6" }}>
                <FolderIcon width={50} height={50} fill={"#FFA000"} style={{ marginRight: 20 }} />
                <Text style={{ flex: 1, fontSize: 20, flexWrap: 'wrap' }}>{item.title}</Text>
            </View>
        )
    }

    render() {
        let { data, isLoading } = this.state
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
}