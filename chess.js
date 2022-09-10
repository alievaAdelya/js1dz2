function chessboard(){
    const limit = 8
    let result =''
    for (let d = 0; d < limit; d++){
        for (let g = 0; g < limit; g++){
            if (d % 2 !== 0){
                result += g % 2 === 0 ? ' ' : '#'
            }else{
                result += g % 2 === 0 ? '#' : ' '
            }
        }
        result += '\n'
    }
    return result
}
console.log(chessboard());


