import React from 'react'
import { format } from 'date-fns';

export default function useFormattedDate(str, outputFormat = 'yyyy-MM-dd HH:mm:ss') {

    if (str) {
        return format(new Date(str), outputFormat);
    }
    return ("unknown")
}
