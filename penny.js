function penny(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""; 
        
        for (let j = 1; j <= i; j++) {
            row += "Penny ";
        }
        
        setTimeout(() => console.log(row.trim()), i * 500); 
    }
}

penny(3);