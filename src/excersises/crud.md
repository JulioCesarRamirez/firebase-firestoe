# Reference to doc

`const userRef = db.collection('users');`


## Object reference

```
const user = {
  name: 'Susana',
  active: true,
  dateOfBirth: 0,
  salary: 2000
};
```

### Insert into db

``` 
userRef
  .add(user)
  .then(docRef => {
    console.log(docRef);

  })
  .catch(e => console.log('Error ==> ', e)); 
```

### Update user set active to false  where ...
```
userRef
  .doc('7gGyul6b1mwhnlQyRC4A')
  .update({
    active: false
  })
  .then(docRef => {
    console.log(docRef);

  })
  .catch(e => console.log('Error ==> ', e));
```

### Destructive update using set method

```
userRef
  .doc('7gGyul6b1mwhnlQyRC4A')
  .update({
    active: false
  })
  .then(docRef => {
    console.log(docRef);

  })
  .catch(e => console.log('Error ==> ', e));
```

### Delete from users where id = fdf
```
userRef.doc('7gGyul6b1mwhnlQyRC4A')
  .delete()
  .then(() => {
    console.log('Deleted');

  })
  .catch(e => console.log('Error ==> ', e));
```

### Select * from users
```
userRef
  .onSnapshot(showDocs);

userRef.get()
  .then(snap => showDocs(snap));
```

### Select * from users where active = true
```
userRef.where('active', '==', true).get()
  .then(snap => showDocs(snap));
```

### Select * from users where salary > 1800
```
userRef.where('salary', '>', 1800).get()
  .then(snap => showDocs(snap));
```

### Select * from  users where salary > 1800 and salary < 2300
```
userRef.where('salary', '>', 1800) 
  .where('salary', '<', 2300)
  .get()
  .then(snap => showDocs(snap));
```

### Select * from users where salary > 1800 And activo == true
```
userRef.where('salary', '>', 1800)
  .where('active', '==', true)
  .get()
  .then(snap => showDocs(snap));
```

### Select * from users order by name asc. salary asc

```
userRef
  .orderBy('name')
  .orderBy('salary')
  .get()
  .then(showDocs)
  ```

### Pagination example

```
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
```