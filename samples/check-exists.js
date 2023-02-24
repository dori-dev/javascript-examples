person = {
  name: "Mohammad",
  age: 18,
  address: {
    city: "Isfahan",
    state: "Isfahan",
  },
};

// console.log(
//   person &&
//     person.address &&
//     person.address.country &&
//     person.address.country.code
// );

console.log(person?.address?.country?.code);
