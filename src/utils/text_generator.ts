export function* generate(text: string){
    for (let index = 0; index < text.length; index++) {
        yield text.charAt(index)
    }
}

