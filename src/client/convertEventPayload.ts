import * as DrDroid from "../api";

export function convertEventPayload(payload: object): Record<string, DrDroid.Value> {
    return Object.entries(payload).reduce<Record<string, DrDroid.Value>>((converted, [key, value]) => {
        const convertedValue = convertPayloadValue(value);
        if (convertedValue != null) {
            converted[key] = convertedValue;
        }
        return converted;
    }, {});
}

export function convertPayloadValue(value: unknown): DrDroid.Value | undefined {
    if (value === undefined) {
        return undefined;
    }

    switch (typeof value) {
        case "string":
            return {
                stringValue: value,
            };
        case "boolean":
            return {
                boolValue: value,
            };
        case "number":
            if (Number.isInteger(value)) {
                return {
                    intValue: value,
                };
            } else {
                return {
                    doubleValue: value,
                };
            }
        case "object":
            if (value === null) {
                return undefined;
            }
            if (value instanceof Date) {
                return {
                    datetimeValue: value,
                };
            }
            if (Array.isArray(value)) {
                return {
                    arrayValue: {
                        values: value.reduce<DrDroid.Value[]>((converted, item) => {
                            const convertedItem = convertPayloadValue(item);
                            if (convertedItem != null) {
                                converted.push(convertedItem);
                            }
                            return converted;
                        }, []),
                    },
                };
            }
            return {
                kvlistValue: Object.entries(value).reduce<DrDroid.KeyValue[]>((converted, [key, objectValue]) => {
                    const convertedValue = convertPayloadValue(objectValue);
                    if (convertedValue != null) {
                        converted.push({
                            key,
                            value: convertedValue,
                        });
                    }
                    return converted;
                }, []),
            };
    }

    throw new Error("Unsupported type in payload: " + typeof value);
}
