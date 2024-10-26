import React from 'react'
import { TextField } from '@mui/material'

export default function InputField() {
    const sampleInput = `
2

6
19
17
13
1
99
1
3
20
16

7
20
99
4
15
`;
  return (
    <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder={sampleInput}
          multiline
        />
  )
}
