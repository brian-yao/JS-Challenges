let first = [
  { uuid: 2, name: "Darling" },
  { uuid: 3, name: "Cry-Baby" },
  { uuid: 4, name: "Snitch" },
  { uuid: 5, name: "Pawn" }
];

let second = [
  { uuid: 1, role: "admin" },
  { uuid: 2, role: "contributor" },
  { uuid: 3, role: "owner" },
  { uuid: 4, role: "contributor" }
];

//make a copy of first array, third will be our result array
let third = [...first];
third.map(user => user.role = null);

for(let user2 of second) {
	const id = user2.uuid;
	if(!(third.map(user => user.uuid).includes(id))){
		third.push({...user2, name: null});
	}else {
		// const idx = third.map(x => x.uuid).indexOf(id);
		const idx = third.findIndex(x => x.uuid === id);
		third[idx].role = user2.role;
	}
}


third.sort((a,b) => a.uuid - b.uuid);

console.log("Result: \n", third);