import firebase from 'firebase'

export const showDocs = (snapShot: firebase.firestore.QuerySnapshot) => {
  const documents: any[] = [];
  snapShot.forEach(snapChild => {

    documents.push({
      id: snapChild.id,
      ...snapChild.data()
    });
  })
  console.log(documents);
  
  return documents;
}