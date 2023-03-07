import { json } from 'express';
import fs, { read } from 'fs';
import { v4 as uuidv4 } from 'uuid';

//Read storage file
export const readStorage = (path, callback) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err) throw err;
        callback(data);
    });
}

//Add new information/products to the storage/menu
export const appendToStorage = (path, newData, callback) => {
    readStorage(path, (data) => {
        let storageData = JSON.parse(data);

        storageData.push({...newData, id:uuidv4()});

        fs.writeFile(path, JSON.stringify(storageData, null, 2), err => {
            if(err) throw err;
            console.log('data is saved');
        });

    });

    callback(newData);
}

export const getStorageObject = (path, id, callback) => {

    readStorage(path, data => {
        const storageData = JSON.parse(data);
        
        const foundItem  = storageData.find(product => product.id === id);
        
        callback(foundItem);
    });
}


export const delStorageObject = (path, id, callback) =>{
    readStorage(path, data => {
        let storageData = JSON.parse(data);

        storageData = storageData.filter(product => product.id !== id);

        fs.writeFile(path, JSON.stringify(storageData, null, 2), err => {
            if(err) throw err;
            console.log('item is deleted');;
        });
        
        callback(storageData);
    });
}

export const patchStorageObject = (path, id, [name, type, price], callback) => {
    readStorage(path, data =>{
        let storageData = JSON.parse(data);

        let foundItem = storageData.find(product => product.id === id)
        if(name)
            foundItem.name = name;
        if(type)
            foundItem.type = type;
        if(price)
            foundItem.price = price;

        callback(storageData);
    });
} 