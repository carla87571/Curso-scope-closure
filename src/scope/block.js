function fruits() {
    if(true) {
        var fruit1 = 'apple'; // function-scoped
        let fruit2 = 'Kiwi'; // block-scoped    
        const fruit3 = 'Banana'; // block-scoped
        console.log(fruit2); // 'Kiwi'
        console.log(fruit3); // 'Banana'
    }
    console.log(fruit1); // 'apple'
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // ReferenceError: fruit3 is not defined
}
fruits();