/**
 * Forger is a class for creating strings by replacing placeholders with values from a data object.
 * @template T - The type of the data object.
 */
type DataObject = Record<string, any>

export default class Forger<T extends DataObject> {
    /**
     * The template string containing placeholders.
     */
    private template: string

    /**
     * Creates a new Forger instance.
     * @param {string} template - The template string with placeholders.
     */
    constructor(template: string) {
        this.template = template
    }

    /**
     * Forge a new string by replacing placeholders in the template with values from the data object.
     * @param {T} data - The data object containing values to replace placeholders.
     * @returns {string} - The resulting string.
     * @throws {Error} - If a placeholder in the template does not have a corresponding value in the data object.
     */
    public forge(data: T): string {
        return this.template.replace(/\\{{\s*([^{}]+?)\s*\\}}|{{\s*([^{}]+?)\s*}}/g, (_, escapedKey, key) => {
            if (escapedKey !== undefined) {
                // Escaped placeholder, preserve it as-is
                return `{{${escapedKey}}}`
            }

            const trimmedKey = key.trim()

            if (!this.isValuePresent(data, trimmedKey)) {
                throw new Error(`Value not found for placeholder: {{${trimmedKey}}}`)
            }

            const keys = trimmedKey.split('.')
            let value: any = data
            for (const k of keys) {
                value = value?.[k]
            }
            return this.stringifyValue(value)
        })
    }

    /**
     * Checks if a value is present in the data object for a given key.
     * @param {T} data - The data object to check.
     * @param {string} key - The key to check for.
     * @returns {boolean} - True if the value is present, false otherwise.
     */
    private isValuePresent(data: T, key: string): boolean {
        const keys = key.split('.')
        let value: any = data
        for (const k of keys) {
            value = value?.[k]
            if (value === undefined) {
                return false
            }
        }
        return true
    }

    /**
     * Convert a value to a string representation, handling objects by JSON serialization.
     * @param {any} value - The value to stringify.
     * @returns {string} - The string representation of the value.
     */
    private stringifyValue(value: any): string {
        return typeof value === 'object' ? JSON.stringify(value) : String(value)
    }
}
