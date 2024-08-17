export function formatText(text: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const hashtagRegex = /(#\w+)/g;

    return text.split('\n').map((line, index) => {
        const formattedLine = line.split(urlRegex).map((part, i) => {
            if (urlRegex.test(part)) {
                return <a key={i} href={part} className="font-bold text-green-500 no-underline'" target="_blank">{part.replace('https://', '').replace('http://', '')}</a>;
            }
            return part.split(hashtagRegex).map((subPart, j) => {
                if (hashtagRegex.test(subPart)) {
                    return <a key={`${i}-${j}`} href={`${subPart}`} className="font-bold text-green-500 no-underline'" target="_blank">{subPart}</a>;
                }
                return subPart;
            });
        });

        return <p key={index} className="mt-4">{formattedLine}</p>;
    });
}
