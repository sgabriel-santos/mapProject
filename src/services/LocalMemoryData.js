import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalMemoryConfig from "../config/LocalMemoryConfig"

const addItem = async (code, date) => {
    try {
        let newItem = {name: code, date: date}
        const toJson = JSON.stringify(newItem)
        
        const items = await getTextItem()
        if(items){
            await AsyncStorage.setItem(LocalMemoryConfig.db_key_items, `${items}\n${toJson}`)
        }else{
            await AsyncStorage.setItem(LocalMemoryConfig.db_key_items, toJson)
        }
    } catch (e) {
      console.log('error', e)
    }
}

const getItems = async () => {
    try {
      const value = await AsyncStorage.getItem(LocalMemoryConfig.db_key_items)

      if(value !== null) {
        let newValue = value.split('\n').map((value) => JSON.parse(value))
        return (newValue);
      }
      else{
        console.log("No Items Stored")
      }
    } catch(e) {
        console.log('error',e)
    }
}

const getTextItem = async () => {
    try{
        const value = await AsyncStorage.getItem(LocalMemoryConfig.db_key_items)
        return value
    }
    catch(e){
        console.log("error", e)
    }
}

const clearItems = async () => {
    try {
        await AsyncStorage.setItem(LocalMemoryConfig.db_key_items, '')
    } catch (e) {
      console.log('error', e)
    }
}

export {getItems, addItem, clearItems}
