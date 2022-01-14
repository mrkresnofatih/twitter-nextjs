export const handleNumberAbbreviation = (rawNumber: number): string => {
    const handleStringify = (value: number, _3DigitCount: number): string => {
        const fixedValue: string = value.toFixed(1);
        switch (_3DigitCount) {
            case 0: {
                return `${value}`
            }
            case 1: {
                return `${fixedValue} K`
            }
            case 2: {
                return `${fixedValue} M`
            }
            case 3: {
                return `${fixedValue} B`
            }
            case 4: {
                return `${fixedValue} T`
            }
            default: {
                return `${fixedValue} P`
            }
        }
    }

    let _3DigitCount = 0;
    let tempValue: number = rawNumber;
    let isDone: boolean = false;

    // Check Number of Digits
    while (!isDone) {
        if (tempValue <= 1000) {
            isDone = true
        } else {
            tempValue = rawNumber / 1000;
            ++_3DigitCount;
        }
    }

    const valueToFixed = tempValue.toFixed(1);
    if (["1000", "1000.0", "1000.00"].includes(valueToFixed)) {
        ++_3DigitCount;
        tempValue = 1;
    }

    return handleStringify(tempValue, _3DigitCount);
}