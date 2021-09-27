import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"; 
import { db } from "../config";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/clienteRepositorio";

 
export default class ColecaoCliente implements ClienteRepositorio{

    async save(cliente: Cliente): Promise<Cliente> {
    
        const clienteExists = cliente?.id;
    
        if(clienteExists) {
          const docRef = await doc(db, "clientes", cliente.id);
    
          try {
            await updateDoc(docRef, {
              name: cliente.name,
              age: cliente.age
            });
          } catch (error) {
            console.log(`Update doc error: ${error}`)
          }
    
        } else {
          try {
            await addDoc(collection(db, "clientes"), {
              name: cliente.name,
              age: cliente.age
            });
          } catch (error) {
            console.error(`Insert new doc error: ${error}`);
          }
        }
    
        return;
      }
    
      async delete(cliente: Cliente): Promise<void> {
        try {
          await deleteDoc(doc(db, "clientes", cliente.id));
        } catch (error) {
          console.log(error);
        }
      }
    
      async all(): Promise<any> {
        const querySnapshot = await getDocs(collection(db, "clientes"));
        
        const data = querySnapshot.docs.map(doc => {
          const {age, name} = doc.data();
          return {
            id: doc.id,
            age,
            name
          }
        });
        return data;
      }
    }