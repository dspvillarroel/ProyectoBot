import { collection, getDocs, query, doc, addDoc, updateDoc, where } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const createItem = async(obj) => {
    const colRef = collection(db, 'items');
    const data = await addDoc(colRef, obj);
    return data.id
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'items');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems= async ()  => {
    const colRef = collection(db, 'items');
    const result = await getDocs(query(colRef));
    return result;
}

// READ WITH WHERE
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'items');
    const result = await getDocs(query(colRef, where('eleccion', '==', value)));
    return result
}


export const getItemsByConditionType = async (value) => {
    const colRef = collection(db, 'items');
    const result = await getDocs(query(colRef, where('tipo', '==', value)));
    return result
}