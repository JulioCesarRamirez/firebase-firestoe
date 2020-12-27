import db from './firebase/config';
import { showDocs } from "./helpers/showDocs";

const user = {
  name: 'Susana',
  active: true,
  dateOfBirth: 0,
  salary: 2000
};


const userRef = db.collection('users');
let firstDocument: any = null;
let lastDocument: any = null;

// btn Previous

const btnNextPrev = document.createElement('button');
btnNextPrev.innerText = 'Previous Page';
document.body.append(btnNextPrev);

btnNextPrev.addEventListener('click', () => {
  const query = userRef.orderBy('name').endBefore(firstDocument);
  query.limit(2).get().then(snap => {
    firstDocument = snap.docs[0] || null;
    lastDocument = snap.docs[snap.docs.length - 1] || null;
    showDocs(snap)
  })
});

// btn Next

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext);


btnNext.addEventListener('click', () => {
  const query = userRef.orderBy('name').startAfter(lastDocument);
  query.limit(2).get().then(snap => {
    firstDocument = snap.docs[0] || null;
    lastDocument = snap.docs[snap.docs.length - 1] || null;
    showDocs(snap)
  })
});

btnNext.click();