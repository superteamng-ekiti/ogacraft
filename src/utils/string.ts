// Create a function to format currency string to number
export const formatBudget = (budget: string) => {
    const budgetNumber = Number(budget);
    return budgetNumber.toLocaleString("en-US", {
        style: "currency",
        currency: "NGN",
    });
}

/**
 * Strips HTML tags from a string and truncates it to a specified length
 * @param html The HTML string to process
 * @param maxLength The maximum length of the returned string
 * @param addEllipsis Whether to add an ellipsis (...) if the text is truncated
 * @returns The stripped and truncated text
 */
export const stripHtmlAndTruncate = (html: string, maxLength: number = 150, addEllipsis: boolean = true): string => {
    if (!html) return "";
    
    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    
    // Get the text content (strips all HTML tags)
    let text = tempDiv.textContent || tempDiv.innerText || "";
    
    // Truncate if necessary
    if (text.length > maxLength) {
        text = text.substring(0, maxLength);
        if (addEllipsis) {
            text += "...";
        }
    }
    
    return text;
}
