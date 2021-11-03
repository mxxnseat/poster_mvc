export function transliteService(string: string) {
    const associate = new Map([
        ["а", "a"],
        ["б", "b"],
        ["в", "v"],
        ["г", "g"],
        ["д", "d"],
        ["е", "e"],
        ["ё", "e"],
        ["ж", "zh"],
        ["з", "z"],
        ["и", "i"],
        ["й", "i"],
        ["к", "k"],
        ["л", "l"],
        ["м", "m"],
        ["н", "n"],
        ["о", "o"],
        ["п", "p"],
        ["р", "r"],
        ["с", "s"],
        ["т", "t"],
        ["у", "u"],
        ["ф", "f"],
        ["х", "h"],
        ["ц", "c"],
        ["ч", "ch"],
        ["ш", "sh"],
        ["щ", "sh"],
        ["ъ", ""],
        ["ы", "i"],
        ["ь", ""],
        ["э", "e"],
        ["ю", "u"],
        ["я", "ya"],
        [" ", "-"],
        ["-", ""],
        ["`", ""]
    ])

    return string.trim().split("").map((char: string) => {
        const smallChar = char.toLowerCase();
        return associate.get(smallChar) || smallChar;
    }).join("");
}